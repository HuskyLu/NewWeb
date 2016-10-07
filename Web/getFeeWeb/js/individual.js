function dataIn () {
	//$.get("individual.jsp", function(data){
    var GetJson='[{"Name": "哈士奇","headPort":"images/user-img0.jpg","Photos":[{"photo": "images/img1-large.png"},{"photo": "images/img2-large.jpg"},{"photo": "images/img1-large.png"},{"photo": "images/img2-large.jpg"}]}]';
	var obj = JSON.parse(GetJson);
	var name=document.getElementById('user_name');
	name.innerHTML=obj[0].Name;
	var headPort=document.getElementById('headPort');
	headPort.src=obj[0].headPort;
	var friend=document.getElementById('friend');
	var myfriend=getClassObj(friend,'myfriend');
	for (var i = 0; i < myfriend.length; i++) {
		myfriend[i].src=obj[0].Photos[i].photo;
	}
	//});	
}

window.onload=function(){
	dataIn();
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