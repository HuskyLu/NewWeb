function HandleOnscroll () {
	//$.get("buyRecord.jsp", function(data){
    var GetJson='[{"cost": "9","time":"8月2日——12：00","buyTime":"2016-08-02","state":"购买成功","payPattern":"微信支付","number":"400200100020030044595"}]';
    var obj = JSON.parse(GetJson);
	if (checkscrollside()) {
		var oParent=document.getElementById('record');
		for(var i=0;i<obj.length;i++){
			var li=document.createElement('li');
			oParent.appendChild(li);
			var message=document.createElement('a');
			message.className='showMes';
			li.appendChild(message);
			var usage=document.createElement('p');
			usage.className='usage';
			usage.innerHTML='支付';
			message.appendChild(usage);
			var pay=document.createElement('span');
			pay.className='pay';
			pay.innerHTML=obj[i].cost;
			usage.appendChild(pay);
			var usage=document.createElement('p');
			usage.className='time';
			usage.innerHTML=obj[i].time;
			message.appendChild(usage);
			var buyDetail=document.createElement('div');
			buyDetail.className='buyDetail';
			li.appendChild(buyDetail);
			var condition=document.createElement('dl');//当前状态
			condition.className='condition';
			buyDetail.appendChild(condition);
			var dt1=document.createElement('dt');
			dt1.innerHTML='当前状态：';
			condition.appendChild(dt1);
			var dd1=document.createElement('dd');
			dd1.innerHTML=obj[i].state;
			condition.appendChild(dd1);
			var buyTime=document.createElement('dl');//购买时间
			buyTime.className='buyTime';
			buyDetail.appendChild(buyTime);
			var dt2=document.createElement('dt');
			dt2.innerHTML='购买时间：';
			buyTime.appendChild(dt2);
			var dd2=document.createElement('dd');
			dd2.innerHTML=obj[i].buyTime;
			buyTime.appendChild(dd2);
			var payPattern=document.createElement('dl');//支付方式
			payPattern.className='payPattern';
			buyDetail.appendChild(payPattern);
			var dt3=document.createElement('dt');
			dt3.innerHTML='支付方式：';
			payPattern.appendChild(dt3);
			var dd3=document.createElement('dd');
			dd3.innerHTML=obj[i].payPattern;
			payPattern.appendChild(dd3);
			var businessNumber=document.createElement('dl');//交易单号
			businessNumber.className='businessNumber';
			buyDetail.appendChild(businessNumber);
			var dt4=document.createElement('dt');
			dt4.innerHTML='交易单号：';
			businessNumber.appendChild(dt4);
			var dd4=document.createElement('dd');
			dd4.innerHTML=obj[i].number;
			businessNumber.appendChild(dd4);
		}
		waterfall('record','li');
	}
	//});
}
function beforeHandle () {
	//$.get("buyRecord.jsp", function(data){
    var GetJson='[{"cost": "9","time":"8月2日——12：00","buyTime":"2016-08-02","state":"购买成功","payPattern":"微信支付","number":"400200100020030044595"}]';
    var obj = JSON.parse(GetJson);
    var oBox=document.getElementsByTagName('li');
	if (oBox.length<6) {
		var oParent=document.getElementById('record');
		for(var i=0;i<obj.length;i++){
			var li=document.createElement('li');
			oParent.appendChild(li);
			var message=document.createElement('a');
			message.className='showMes';
			li.appendChild(message);
			var usage=document.createElement('p');
			usage.className='usage';
			usage.innerHTML='支付';
			message.appendChild(usage);
			var pay=document.createElement('span');
			pay.className='pay';
			pay.innerHTML=obj[i].cost;
			usage.appendChild(pay);
			var usage=document.createElement('p');
			usage.className='time';
			usage.innerHTML=obj[i].time;
			message.appendChild(usage);
			var buyDetail=document.createElement('div');
			buyDetail.className='buyDetail';
			li.appendChild(buyDetail);
			var condition=document.createElement('dl');//当前状态
			condition.className='condition';
			buyDetail.appendChild(condition);
			var dt1=document.createElement('dt');
			dt1.innerHTML='当前状态：';
			condition.appendChild(dt1);
			var dd1=document.createElement('dd');
			dd1.innerHTML=obj[i].state;
			condition.appendChild(dd1);
			var buyTime=document.createElement('dl');//购买时间
			buyTime.className='buyTime';
			buyDetail.appendChild(buyTime);
			var dt2=document.createElement('dt');
			dt2.innerHTML='购买时间：';
			buyTime.appendChild(dt2);
			var dd2=document.createElement('dd');
			dd2.innerHTML=obj[i].buyTime;
			buyTime.appendChild(dd2);
			var payPattern=document.createElement('dl');//支付方式
			payPattern.className='payPattern';
			buyDetail.appendChild(payPattern);
			var dt3=document.createElement('dt');
			dt3.innerHTML='支付方式：';
			payPattern.appendChild(dt3);
			var dd3=document.createElement('dd');
			dd3.innerHTML=obj[i].payPattern;
			payPattern.appendChild(dd3);
			var businessNumber=document.createElement('dl');//交易单号
			businessNumber.className='businessNumber';
			buyDetail.appendChild(businessNumber);
			var dt4=document.createElement('dt');
			dt4.innerHTML='交易单号：';
			businessNumber.appendChild(dt4);
			var dd4=document.createElement('dd');
			dd4.innerHTML=obj[i].number;
			businessNumber.appendChild(dd4);
		}
		waterfall('record','li');
		beforeHandle();
	}
	//});
}

window.onload=function(){
	waterfall('record','li');
	beforeHandle();
	window.onscroll=function(){
		HandleOnscroll();
	}
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

//获取最后一个li距离网页顶部的top值
function checkscrollside() {
	var oParent=document.getElementById('record');
    var aPic=document.getElementsByTagName('li');
    var lastPicH=aPic[aPic.length-1].offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//IE和火狐兼容问题
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPicH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}

