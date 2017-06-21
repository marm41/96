var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var x = document.getElementsByTagName('li').length;
	var element = document.createElement('li');
		element.innerText = 'item ' + x;
	list.appendChild(element);
});