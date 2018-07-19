function scrollTo(anchor) {
    document.getElementById(anchor).scrollIntoView({behavior: "smooth"});
}
function sendData() {
    var name = document.getElementById('name').value
    var msg = document.getElementById('msg').value
    var email = document.getElementById('email').value
    var obj = { senderName: name, senderMsg: msg, senderEmail: email }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://174.138.99.170/form", true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(obj)
    console.log(xhr.response())
}