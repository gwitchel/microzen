
window.onload = function(){ 
    var hash = window.location.hash.substr(14);
    document.getElementById("clickToAuth").onclick = function(){
        window.location.replace('https://www.zopim.com/oauth2/authorizations/new?response_type=token&client_id=daP4zkn7uAgzu4Spj9dUbE5dPB1YTopvDvrhtW9LiAyiN7i8Mz&scope=read%20write%20chat&subdomain=georgiasnuff');
    };
    if(hash.length > 0 ){
        console.log(hash)
    } else {
        console.log("Not authorized")
     };
}
