window.onload=function () {








    var container=document.getElementById('takePhoto');
    var list=document.getElementById('list');
    var buttons=document.getElementById('buttons').getElementsByTagName('span');
    var last=document.getElementById('last');
    var next=document.getElementById('next');
    var index=1;
    var animated=false;
    var timer;

    function showButton(){
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className=='on') {
                buttons[i].className='';
                break;
            }
        }
        buttons[index-1].className='on';
    }
    //左右箭头按钮切换图片
    function animate(offset) {
        animated=true;
        var newLeft=parseInt(list.style.left)+offset;
        var time=300;//位移总时间
        var interval=10;//位移间隔时间
        var speed=offset/(time/interval);//位移速度

        function go(){
            if ((speed<0 && parseInt(list.style.left)>newLeft) || (speed>0 && parseInt(list.style.left)<newLeft)) {
                list.style.left=parseInt(list.style.left)+speed+'px';
                setTimeout(go,interval);
            } else {
                animated=false;
                list.style.left=newLeft+'px';
                if (newLeft>-600) {
                    list.style.left=-3600+'px';
                }
                if (newLeft<-3600) {
                    list.style.left=-600+'px';
                }
            }
        }
        go();
        
    }
    //自动轮播
    function play() {
        timer=setInterval(function(){
            next.onclick();
        } ,3000);
    }
    //清除计时器
    function stop() {
        clearInterval(timer);
    }
    //左按钮事件
    last.onclick=function(){
        if (index==1) {
            index=6;
        } else {
            index-=1;
        }
        showButton();
        if (animated==false) {
            animate(600);  
        }
    }
    //友按钮事件
    next.onclick=function(){
        if (index==6) {
            index=1;
        } else {
            index+=1;
        }
        showButton();
        if (animated==false) {
            animate(-600);  
        }
        
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick=function(){
            if (this.className=='on') {
                return;
            }
            var myIndex=parseInt(this.getAttribute('index'));
            var offset=-600*(myIndex-index);
            animate(offset);
            index=myIndex;
            showButton();
        }
    }
    container.onmouseover=stop;
    container.onmouseout=play;

    play();


    var area=document.getElementById('marquee');
    var con1=document.getElementById('con1');
    var con2=document.getElementById('con2');
    var speed1=10;
    area.scrollLeft=0;
    con2.innerHTML=con1.innerHTML;
    function scrollLeft() {
        if (area.scrollLeft>=con1.scrollWidth) {
            area.scrollLeft=0;
        }else{
            area.scrollLeft++;
        }
    }
    var myScroll=setInterval(scrollLeft,speed1);
    area.onmouseover=function(){
        clearInterval(myScroll);
    }
    area.onmouseout=function(){
        myScroll=setInterval(scrollLeft,speed1);
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
    hover('phone','phoneNum');
    hover('QQ','QQscan');
}

function getClassObj(parent,className){
    var obj=parent.getElementsByTagName('*');//获取父级所有元素
    var picS=[];//创建一个数组 收集父级的子元素
    for (var i = 0;i<obj.length; i++) {
        if (obj[i].className==className) {
            picS.push(obj[i]);
        }
    };
    return picS;
}