function RowTo_ID_ofChosenArea(event) {

	event.preventDefault();
	const ElmntClicado = event.target;
	const idElmnt = ElmntClicado.getAttribute('href');
	const destino = document.querySelector(idElmnt).offsetTop;

	window.scroll({
		top: destino - 10,
		behavior: 'smooth',
	})
}

function rolar_Pagina(){
	const btnEl = document.querySelector('a#btn-img[href^="#"]');

	btnEl.addEventListener('click', RowTo_ID_ofChosenArea);
}

(function(){
	rolar_Pagina();
})()