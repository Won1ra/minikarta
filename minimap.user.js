// ==UserScript==
// @name Minimap
// @version 0.0.5
// @match https://pixelzone.io/*
// @match http://pixelzone.io/*
// ==/UserScript==
/*
...

thank NLR!
*/


let message = document.createElement('div'),
msgTimeoutId = null,
msgIntervalId = null;
message.style = 'background-color: rgba(0, 0, 0, 0); color: rgba(150, 250, 150, 0); display: none; position: absolute; width: auto; height: 20px; right: 50%; top: 3.75em; text-align: center; line-height: 20px; vertical-align: middle; border-radius: 6px;padding:7px;';
let a = 0.8;

var div = document.createElement('div');
    div.setAttribute('class', 'image');
    div.innerHTML = '<div id = "derp" style = "display: none; position: absolute; left: 100px; bottom: -25px; "><img src="https://raw.githubusercontent.com/RonyRam/minikarta/master/F/pizdec.png" width="30%" height="75%"></div>'; +
    document.body.appendChild(div);

document.body.appendChild(message);
        function showMsg(msg) {
if(msgIntervalId !== null) clearInterval(msgIntervalId);
if(msgTimeoutId !== null) clearTimeout(msgTimeoutId);
message.style.display = 'block';
message.innerText = msg;
message.style.color = `rgba(250, 250, 250, 0.8)`;
message.style.backgroundColor = `rgba(0, 0, 0, 0.8)`;
return msg;
};
function $(id){return document.getElementById(id)};
window.onkeydown = e => {
if(e.keyCode !== 70) return;
msgIntervalId = setInterval(() => {
a -= 0.01;
if(a <= 0){
message.style.display = 'none';
derp.style.display = 'block';
if(msgIntervalId !== null) clearInterval(msgIntervalId);
return;
};
message.style.color = `rgba(250, 250, 250, ${a})`;
message.style.backgroundColor = `rgba(0, 0, 0, ${a})`;
},40)
};
showMsg('Нажмите F чтобы отдать честь');
