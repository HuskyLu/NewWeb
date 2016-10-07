window.onload=function(){
    lucency('itemIntro',100);
    hover('phone','phoneNum');
    hover('QQ','QQscan');
}

var alpha=0;
var timer=null;
function lucency(title,iTarget){
    var title = document.getElementById(title);
    title.onmouseover=setInterval(function(){
        var speed=Math.round((iTarget-title.style.opacity||title.style.filter)/100);
        if(alpha<100){
            
            alpha+=speed;
            title.style.filter='alpha(opacity:'+')';
            title.style.opacity=alpha/100;
        }
    },70)

}
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