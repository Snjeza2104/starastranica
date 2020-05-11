function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
var day=today.getDate();
var month=today.getMonth()+1;
var year=today.getFullYear();
var dan=today.getDay();
var ime_dana;
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
if (dan==0) ime_dana="nedjelja";
else if (dan==1) 
ime_dana="ponedjeljak";
else if (dan==2) 
ime_dana="utorak";
else if (dan==3) 
ime_dana="srijeda";
else if (dan==4) 
ime_dana="četvrtak";
else if (dan==5) 
ime_dana="petak";
else 
ime_dana="subota";
document.getElementById('txt').innerHTML=ime_dana+", "+day+"."+month+"."+year+".  "+h+":"+m+":"+s
t=setTimeout('startTime()',500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}