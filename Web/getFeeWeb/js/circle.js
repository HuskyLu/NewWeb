function HandleOnscroll(){
	//$.get("action.jsp", function(data){
    var GetJson='[{"Name": "面对疾风吧","mix":"1","headPort":"images/ts5.jpg","photoIntro":"图片介绍","Photos":[{"photo": "images/img1-large.png"},{"photo": "images/img2-large.jpg"}]}]';
	var obj = JSON.parse(GetJson);
	var oParent=document.getElementById('main');
	if (checkscrollside()) {
		for (var i = 0; i < obj.length; i++) {
			var circle_content=document.createElement('div');
			circle_content.className='circle-content';
			oParent.appendChild(circle_content);
			var circle_content_headPort=document.createElement('div');
			circle_content_headPort.className='circle-content-headPort';
			circle_content.appendChild(circle_content_headPort);
			var headPort=document.createElement('img');
			headPort.className='headPort';
			headPort.src=obj[i].headPort;
			circle_content_headPort.appendChild(headPort);
			var userName=document.createElement('a');
			userName.className='userName';
			userName.innerHTML=obj[i].Name;
			circle_content_headPort.appendChild(userName);
			var photoIntro=document.createElement('p');
			photoIntro.className='photoIntro';
			photoIntro.innerHTML=obj[i].photoIntro;
			circle_content.appendChild(photoIntro);
			var thumbs=document.createElement('div');
			if (obj[i].mix==1) {
				thumbs.className='clearfix img-gather photo blur';
				for (var j = 0; j < obj[i].Photos.length; j++) {
					var photo_j=document.createElement('a');
					photo_j.style.backgroundImage='url('+obj[i].Photos[j].photo+')';
					thumbs.appendChild(photo_j);
					photo_j.onclick=function (){
						var display=document.getElementById('fee');
						display.style.display='block';
					}
				}
			} else {
				thumbs.className='clearfix img-gather photo';
				for (var q = 0; q < obj[i].Photos.length; q++) {
					var photo_q=document.createElement('a');
					photo_q.href=obj[i].Photos[q].photo;
					photo_q.style.backgroundImage='url('+obj[i].Photos[q].photo+')';
					thumbs.appendChild(photo_q);
				}
			}
			var k=0;
			thumbs.id='thumbs'+k;
			k++;
			circle_content.appendChild(thumbs);
		}
		waterfall('main','circle-content');
	}
	var oClose=document.getElementById('close');
	oClose.onclick=function (){
		var display=document.getElementById('fee');
		display.style.display='none';
	}
	//});	
}
function beforeHandle(){
	//$.get("action.jsp", function(data){
    var GetJson='[{"Name": "面对疾风吧","mix":"1","headPort":"images/ts5.jpg","photoIntro":"图片介绍","Photos":[{"photo": "images/img1-large.png"},{"photo": "images/img2-large.jpg"}]}]';
	var obj = JSON.parse(GetJson);
	var oParent=document.getElementById('main');
	for (var i = 0; i < obj.length; i++) {
		var circle_content=document.createElement('div');
		circle_content.className='circle-content';
		oParent.appendChild(circle_content);
		var circle_content_headPort=document.createElement('div');
		circle_content_headPort.className='circle-content-headPort';
		circle_content.appendChild(circle_content_headPort);
		var headPort=document.createElement('img');
		headPort.className='headPort';
		headPort.src=obj[i].headPort;
		circle_content_headPort.appendChild(headPort);
		var userName=document.createElement('a');
		userName.className='userName';
		userName.innerHTML=obj[i].Name;
		circle_content_headPort.appendChild(userName);
		var photoIntro=document.createElement('p');
		photoIntro.className='photoIntro';
		photoIntro.innerHTML=obj[i].photoIntro;
		circle_content.appendChild(photoIntro);
		var thumbs=document.createElement('div');
		if (obj[i].mix==1) {
			thumbs.className='clearfix img-gather photo blur';
			for (var j = 0; j < obj[i].Photos.length; j++) {
				var photo_j=document.createElement('a');
				photo_j.style.backgroundImage='url('+obj[i].Photos[j].photo+')';
				thumbs.appendChild(photo_j);
				photo_j.onclick=function (){
					var display=document.getElementById('fee');
					display.style.display='block';
				}
			}
		} else {
			thumbs.className='clearfix img-gather photo';
			for (var q = 0; q < obj[i].Photos.length; q++) {
				var photo_q=document.createElement('a');
				photo_q.href=obj[i].Photos[q].photo;
				photo_q.style.backgroundImage='url('+obj[i].Photos[q].photo+')';
				thumbs.appendChild(photo_q);
			}
		}
		var k=0;
		thumbs.id='thumbs'+k;
		k++;
		circle_content.appendChild(thumbs);
	}
	waterfall('main','circle-content');
	var oClose=document.getElementById('close');
	oClose.onclick=function (){
		var display=document.getElementById('fee');
		display.style.display='none';
	}
	//});	
}
window.onload=function(){

	waterfall('main','circle-content');
	var oParent=document.getElementById('main');
	var quentity=getClassObj(oParent,'circle-content');
	if (quentity.length<6) {
		for (var i = 0; i < 6; i++) {
			beforeHandle();
		}
	}

	
	//var dataInt={'Name':'面对疾风吧','src':'ts5.jpg','photoIntro':'图片介绍','mix':'1'};
	//var photo=[{'photo':'img1-large.png'},{'photo':'img2-large.jpg'},{'photo':'img1-large.png'},{'photo':'img2-large.jpg'}];
	//var obj = JSON.parse(GetJson);

	window.onscroll=function(){
		HandleOnscroll();
	}
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

function waterfall(parent,box){
	var oParent=document.getElementById(parent);
	var oBox=document.getElementsByTagName(box);
	var recordHeight=0;
	for (var i = 0; i < oBox.length; i++) {
		var picH=oBox[i].offsetHeight;
        recordHeight=oBox[i].offsetHeight*i;
        oBox[i].style.position='absolute';//设置绝对位移
        oBox[i].style.width=100+'%';
        oBox[i].style.top=recordHeight+'px';//设置
	};
}

//获取最后一个div距离网页顶部的top值
function checkscrollside() {
	var oParent=document.getElementById('main');
    var aPic=getClassObj(oParent,'circle-content');
    var lastPicH=aPic[aPic.length-1].offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//IE和火狐兼容问题
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPicH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}


function lucency(iTarget){
	var user = document.getElementById(iTarget);
	user.style.filter='alpha(opacity:'+100+')';
	user.style.opacity=1;
}
function hidden(iTarget){
	var user = document.getElementById(iTarget);
	user.style.filter='alpha(opacity:'+0+')';
	user.style.opacity=0;
}
