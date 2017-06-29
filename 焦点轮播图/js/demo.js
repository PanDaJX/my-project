window.onload = function () {
	var container = document.getElementById('banner-container');
	var list = document.getElementById('banner-container-list');
	var buttons = document.getElementById('banner-container-btns')
	.getElementsByTagName('span');
	var prev = document.getElementById('banner-container-prev');
	var next = document.getElementById('banner-container-next');
	var index = 1;
	var animated = false; //动画状态
	var timer;//自动播放计时器

	function animate (offset) {
		animated = true;
		nLeft = parseInt(list.style.left) + offset;
		var time = 300;
		var interval = 10;
		var speed = offset/(time/interval);//动画移动速度
		function go(){
			if ((speed < 0 && parseInt(list.style.left) > nLeft) 
				||(speed > 0 && parseInt(list.style.left) < nLeft)) {
				list.style.left = parseInt(list.style.left) + speed +'px';
				setTimeout(go,interval);
			}	
			else{
			//重新定位
			animated = false;
			list.style.left = nLeft + 'px';
				if (nLeft > -600) {
					list.style.left = -3000 + 'px';
				}
				if (nLeft < -3000) {
					list.style.left = -600 + 'px';
				}
			}
		}
		go();
	}
	//自动播放
	function play(){
		timer = setInterval(function(){
			next.onclick();
		},3000);
	}

	function stop(){
		clearInterval(timer);
	}

	play();
	container.onmouseover = stop;//鼠标在轮播图上停止播放
	container.onmousout = play;//鼠标离开轮播图上继续播放
	function showBtn ()	{
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].className = '';
		}
		buttons[index-1].className = 'on';

	}
	//左右移动绑定事件
	next.onclick = function ()	{
		if (!animated) {
			animate(-600);
		}
		if (index == 5) {
			index = 1;
		}
		else{
			index += 1;
		}	
		showBtn();
	}

	prev.onclick = function ()	{
		if (!animated) {
			animate(600);
		}
		if (index == 1) {
			index = 5;
		}
		else{
			index -= 1;
		}	
		showBtn();
	}
	//按钮绑定事件
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () {
			if (this.className == 'on') {
				return;
			}
			var myIndex = this.getAttribute('index');
			var offset = (myIndex - index) * -600;
			index = myIndex;
			if (!animated) {
			animate(offset);
		}
			showBtn();
		}
	}
}