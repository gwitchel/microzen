
window.onload = function(){ 
    var token = window.location.hash.substr(14); // if the token exists get it and parse it
    token = token.substr(0,token.indexOf('&'))
    console.log(token)
    document.getElementById("sendData").onclick = function(){
        var id = document.getElementById('id').value //daP4zkn7uAgzu4Spj9dUbE5dPB1YTopvDvrhtW9LiAyiN7i8Mz
        var subdomain = document.getElementById('subdomain').value //georgiasnuff
        console.log(id, subdomain)
        window.location.replace('https://www.zopim.com/oauth2/authorizations/new?response_type=token&client_id=' + id + '&scope=read%20write%20chat&subdomain=' + subdomain); //send the user to the authentication endpoint
    };
    if(token.length > 0 ){
        console.log(token) // heck if theres a token (there shouldn't be, but if there is, use it to get some data)
        document.getElementById("accessToken").innerHTML = token; 
        document.getElementById("getData").onclick = function(){
            var data = httpGet('http://localhost:8080/allChats/' + token)
            document.write(data)
        }
    } else {
        console.log("Not authorized")
     };
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

