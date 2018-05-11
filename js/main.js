window.onload = function(){
	let menu = document.getElementById('menu');
	let wrap = document.getElementsByClassName('page-wrap')[0];

	menu.onclick = function(){
		wrap.classList.toggle('body-move');	
	}
}