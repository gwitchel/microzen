window.onload = function(){ 
    var token = window.location.hash.substr(14);
    token = token.substr(0,token.indexOf('&'))
    console.log(token)
    if(token.length > 0 ){
        console.log(token)
        document.write("Token: ", token);
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