function moreInfo() {
    document.getElementById("paragraph").innerHTML = "You changed the content using a function changeContend() and a external script";
    document.getElementById("advantage").style.display = "block";
    document.getElementById("reference").style.display = "block";
}

function backContent() {
    document.getElementById("paragraph").innerHTML = "External scripts are practical when the same code is used in many different web pages. JavaScript files have the file extension .js. To use an external script, put the name of the script file in the src (source) attribute of a <strong>script</strong> tag:"
    document.getElementById("advantage").style.display = "none";
    document.getElementById("reference").style.display = "none";
}