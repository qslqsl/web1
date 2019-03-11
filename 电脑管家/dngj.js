		window.onload=function(){
			var Ban=document.getElementsByClassName('banner')[0];
	        var Bimg=document.getElementsByClassName('bimg')[0];
	        var Li=Bimg.getElementsByTagName('li');
			var Cir=document.getElementsByClassName('cir')[0];
			var I=Cir.getElementsByTagName('i');
			var num=0;
			var timer=0;

			clearInterval(timer);
			Li[0].style.zIndex="1";
			timer=setInterval(change,3000);
			function change()
			{
				if(num==3){num=0;}
				changeImg();
				num++;
			}
			Ban.onmouseover=function()
			{
				clearInterval(timer);
			}
			Ban.onmouseout=function()
			{
				timer=setInterval(change,5000);
			}
			for(var i=0; i<I.length; i++)
			{
				I[i].index=i;
				I[i].onmousemove=function()
				{
					num=this.index;
					changeImg();
				}
			}
			function changeImg()
			{
				for(var i=0; i<Li.length; i++)
				{
				Li[i].style.zIndex="0";
				Li[i].style.opacity="0";
				I[i].className="";
				}
				Li[num].style.zIndex="1";
				Li[num].style.opacity="1";
				Li[num].style.transition="opacity 1s";
				I[num].className="c";
			}

			var Dr=document.getElementsByClassName('dr')[0];
			var XX=document.getElementsByClassName('xx')[0];
			var Tck=document.getElementsByClassName('tck')[0];
			Dr.onclick=function(){
				Tck.style.display="block";
			}
			XX.onclick=function(){
				Tck.style.display="";
			}

			var Zh=document.getElementsByClassName('zh')[0];
			var Sx=document.getElementsByClassName('sx')[0];
			var TCK=document.getElementsByClassName('tck-two')[0];
			Zh.onclick=function(){
				TCK.style.display="block";
			}
			Sx.onclick=function(){
				TCK.style.display="";
				Tck.style.display="";
			}

		}
		