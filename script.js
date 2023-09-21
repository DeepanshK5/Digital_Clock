let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

setInterval(function(){
let ct=new Date();
hrs.innerHTML=ct.getHours();
min.innerHTML=ct.getMinutes();
sec.innerHTML=ct.getSeconds();
},1000);