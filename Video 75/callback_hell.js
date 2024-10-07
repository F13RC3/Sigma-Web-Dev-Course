console.log('Hello This is a Tutorial of call back hell');
function callback(error, src){
    if (error){
        console.log('Error in script with '+src);
    }
    else{
        console.log('No Error in script');
    }
}
function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src
    script.onload = function(){
        console.log('the script is loaded');
        callback(null, src);
    }
    script.onerror = function(){
        console.log('Error in script');
        callback(new Error('Issue with script'), src);
    }
    document.body.appendChild(script);
}

loadScript("https://maxcdn.bootstrapcfdfdn.com/bootstrap/3.4.1/js/bootstrap.min.js", callback )
