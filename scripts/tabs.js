let $tabs = document.querySelectorAll('.tab');

function toggler(selector, id, modify) {
	let $elem = document.querySelectorAll(selector);
  for(let $el of $elem){
  	$el.classList.remove(modify);
  }
  $elem[id].classList.add(modify);
}

for(let i = 0; i < $tabs.length; i++) {
	$tabs[i].addEventListener('click', function(event) {
  	event.preventDefault();
  	toggler('.box', i, 'active');
    toggler('.tab', i, 'active');
  })
}
