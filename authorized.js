window.onload = function(){ 
    var token = window.location.hash.substr(14); //grab the token from the url. 
    token = token.substr(0,token.indexOf('&'))
    console.log(token)
    if(token.length > 0 ){
        console.log(token)
        document.write("Token: ", token);
        var data = httpGet('http://localhost:8080/allChats/' + token) //get some data 
        document.write("Example Chat Data:" , data)
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