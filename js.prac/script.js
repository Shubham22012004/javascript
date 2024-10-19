let btn=document.createElement('button');
btn.textContent="click me";
btn.style.cssText=`background-Color:red; color:white; font-Size:30px`;

let body = document.querySelector('body');
body.prepend(btn);
