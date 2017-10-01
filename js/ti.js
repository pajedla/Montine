(function(){
var _id="390496cd6b6aeb123e22bc8d6f7f721d";
while(document.getElementById("timer"+_id))_id=_id+"";
document.write("<div id='timer"+_id+"' style=''></div>");
var _t=document.createElement("script");
_t.src="http://megatimer.ru/timer/timer.min.js";
var _f=function(_k){var l=new MegaTimer(_id, {
"view":[1,1,1,1],"type":
{"currentType":"2","params":{"usertime":false,"days":"457","hours":"4","minutes":"6","utc":1506754440470}},"design":
{"type":"text","params":
{"number-font-family":{"family":'SR'},
"separator-on":true,"separator-text":":","text-on":false,"text-font-family":
{"family":'SR'},"text-font-size":"12","text-font-color":"#c7c7c7"}}
,"designId":2,"theme":"white"});
if(_k!=null)l.run();};
_t.onload=_f;
_t.onreadystatechange=function(){if(_t.readyState=="loaded")_f(1);};
var _h=document.head||document.getElementsByTagName("head")[0];
_h.appendChild(_t);}).call(this);
