console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert('message has been sent');
}
function compliment(){
	alert("you have shiny teeth");
}

let form = document.querySelector('#contact');
let picture = document.querySelector("img");
form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover',compliment);