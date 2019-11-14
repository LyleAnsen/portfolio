const navSlide = () =>{
	const lines = document.querySelector('.lines');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	lines.addEventListener('click',() =>){
		nav.classList.toggle('nav-active');
	});
	navLinks.forEach((link, index) =>{
		console.log(index);
	});
}
navSlide();