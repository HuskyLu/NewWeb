window.onload=function(){
	function hover(control,controlled) {
        var control=document.getElementById(control);
        var controlled=document.getElementById(controlled);
        control.onmouseover=function(){
            controlled.style.display='block';
        }
        control.onmouseout=function(){
            controlled.style.display='none';
        }
    }
    lucency('dl',100);
    lucency('assess',100);
    hover('phone','phoneNum');
    hover('QQ','QQscan');
}


var alpha=0;
var timer=null;
function lucency(title,iTarget){
	var title = document.getElementById(title);
	setInterval(function(){
		var speed=Math.round((iTarget-title.style.opacity||title.style.filter)/100);
		if(alpha<100){
			alpha+=speed;
			title.style.filter='alpha(opacity:'+')';
			title.style.opacity=alpha/100;
		}
	},100);

}