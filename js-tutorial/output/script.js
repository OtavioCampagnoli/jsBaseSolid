var message = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quis labore aliquid similique qui placeat quas debitis magnam, veritatis eum reiciendis iste? Id, nulla. Explicabo alias facilis dicta laboriosam. Harum!";


function refreshFunction() {
    window.location.reload();
}

function innerFunction() {
    document.getElementById('content').innerHTML = message;
    document.getElementById('content').style.display = "block";
}

function documentFunction() {
    var buttonRefresh = ' <br><button onclick="refreshFunction();">Reload</button>';
    document.write(message + buttonRefresh);
}

function windowAlertFunction() {
    alert(message);
    // You can skip the window keyword.
    // In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional:
}

function consoleLogFunction() {
    console.log(message);
}

function printPageFunction() {
    window.print();
}