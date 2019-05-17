window.onload = function() {

	let img = document.querySelectorAll(".checkIn__video");
	let video = document.querySelectorAll(".relation");

	img[0].onclick = function() {
		this.classList.remove('showed');
	}

	img[1].onclick = function() {
		this.classList.remove('showed');
	}

}