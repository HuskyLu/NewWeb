function HandleOnscrollLeft(){
    //$.get("index.jsp", function(data){
    var GetJson='[{"Name": "面对疾风吧","headPhoto":"images/ts5.jpg","href":"###"}]';
    var obj = JSON.parse(GetJson);
    if(checkscrollsideLeft()){
        var oParent = document.getElementById('main-left');// 父级对象
        for(var i=0;i<obj.length;i++){
            var oBox=document.createElement('div');
            oBox.className='box';
            oParent.appendChild(oBox);
            var oUser=document.createElement('a');
            oUser.className='user-link';
            oUser.href=obj[i].href;
            oBox.appendChild(oUser);
            var oPic=document.createElement('div'); //添加 元素节点
            oPic.className='pic';                   //添加 类名 name属性
            oUser.appendChild(oPic);              //添加 子节点
            var oImg=document.createElement('img');
            oImg.className='image';
            oImg.src=obj[i].headPhoto;
            oPic.appendChild(oImg);
            var oP=document.createElement('p');
            oP.className='name';
            oP.innerHTML=obj[i].Name;
            oPic.appendChild(oP);
        }
        waterfall('main-left','box','pic');
    }
    //});
}
function HandleOnscrollRight () {
    //$.get("index.jsp", function(data){
    var GetJson='[{"Name": "面对疾风吧","headPhoto":"images/ts5.jpg","href":"###"}]';
    var obj = JSON.parse(GetJson);
    if(checkscrollsideRight()){
        var oParent = document.getElementById('main-right');// 父级对象
        for(var i=0;i<obj.length;i++){
            var oBox=document.createElement('div');
            oBox.className='box';
            oParent.appendChild(oBox);
            var oUser=document.createElement('a');
            oUser.className='user-link';
            oUser.href=obj[i].href;
            oBox.appendChild(oUser);
            var oPic=document.createElement('div'); //添加 元素节点
            oPic.className='pic';                   //添加 类名 name属性
            oUser.appendChild(oPic);              //添加 子节点
            var oImg=document.createElement('img');
            oImg.className='image';
            oImg.src=obj[i].headPhoto;
            oPic.appendChild(oImg);
            var oP=document.createElement('p');
            oP.className='name';
            oP.innerHTML=obj[i].Name;
            oPic.appendChild(oP);
        }
        waterfall('main-right','box','pic');
    }
    //});
}


window.onload=function(){
    waterfall('main-left','box','pic');
	waterfall('main-right','box','pic');

    autoLoadingLeft('main-left','box');
    autoLoadingRight('main-right','box');

    var dataLeftInt={'data':[{'src':'ts1.jpg','href':'#','value':'aaaa'}]};
    var dataRightInt={'data':[{'src':'ts2.jpg','href':'#','value':'bbbb'}]};
	window.onscroll=function(){
        HandleOnscrollLeft();
        HandleOnscrollRight();
    }
}

function waterfall (parent,box,pic) {
	var oParent=document.getElementById(parent);//获取父级对象
    var oBox=getClassObj(oParent,box);//获取box元素
	var aPic=getClassObj(oParent,pic);//获取pic元素
	var picHArr=0;//存储一列中所有块框的高度
    for (var i = 0; i < aPic.length; i++) {
        var picH=aPic[i].offsetHeight;
        picHArr+=oBox.offsetHeight*i;
        aPic[i].style.position='absolute';//设置绝对位移
        aPic[i].style.top=aPic[i].offsetHeight+picHArr+'px';//设置
    };
}

//获取class元素
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

//当加载页面div数量不足6个，首先自动加载数据
function autoLoadingLeft(parent,box){
    //$.get("index.jsp", function(data){
    var GetJson='[{"Name": "面对疾风吧","headPhoto":"images/ts5.jpg","href":"###"}]';
    var obj = JSON.parse(GetJson);
    var oParent = document.getElementById('main-left');// 父级对象
    var oBox=getClassObj(oParent,box);
    if (oBox.length<2) {
        for(var i=0;i<obj.length;i++){
            var oBox=document.createElement('div');
            oBox.className='box';
            oParent.appendChild(oBox);
            var oUser=document.createElement('a');
            oUser.className='user-link';
            oUser.href=obj[i].href;
            oBox.appendChild(oUser);
            var oPic=document.createElement('div'); //添加 元素节点
            oPic.className='pic';                   //添加 类名 name属性
            oUser.appendChild(oPic);              //添加 子节点
            var oImg=document.createElement('img');
            oImg.className='image';
            oImg.src=obj[i].headPhoto;
            oPic.appendChild(oImg);
            var oP=document.createElement('p');
            oP.className='name';
            oP.innerHTML=obj[i].Name;
            oPic.appendChild(oP);
        }
        waterfall('main-left','box','pic');
        autoLoadingLeft('main-left','box');
    }
    //});
}

function autoLoadingRight(parent,box){
    //$.get("index.jsp", function(data){
    var GetJson='[{"Name": "面对疾风吧","headPhoto":"images/ts5.jpg","href":"###"}]';
    var obj = JSON.parse(GetJson);
    var oParent = document.getElementById('main-right');// 父级对象
    var oBox=getClassObj(oParent,box);
    if (oBox.length<2) {
        for(var i=0;i<obj.length;i++){
            var oBox=document.createElement('div');
            oBox.className='box';
            oParent.appendChild(oBox);
            var oUser=document.createElement('a');
            oUser.className='user-link';
            oUser.href=obj[i].href;
            oBox.appendChild(oUser);
            var oPic=document.createElement('div'); //添加 元素节点
            oPic.className='pic';                   //添加 类名 name属性
            oUser.appendChild(oPic);              //添加 子节点
            var oImg=document.createElement('img');
            oImg.className='image';
            oImg.src=obj[i].headPhoto;
            oPic.appendChild(oImg);
            var oP=document.createElement('p');
            oP.className='name';
            oP.innerHTML=obj[i].Name;
            oPic.appendChild(oP);
        }
        waterfall('main-right','box','pic');
        autoLoadingRight('main-right','box');
    }
    //});
}


//获取最后一个div距离网页顶部的top值
function checkscrollsideLeft () {
	var oParent=document.getElementById('main-left');
    var aPic=getClassObj(oParent,'pic');
    var lastPicH=aPic[aPic.length-1].offsetTop-Math.floor(aPic[aPic.length-1].offsetHeight/2);
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//IE和火狐兼容问题
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPicH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}
function checkscrollsideRight () {
    var oParent=document.getElementById('main-right');
    var aPic=getClassObj(oParent,'pic');
    var lastPicH=aPic[aPic.length-1].offsetTop-Math.floor(aPic[aPic.length-1].offsetHeight/2);
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//IE和火狐兼容问题
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPicH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}