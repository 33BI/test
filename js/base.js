function renderErrors(errors) {
	$(".errors").children().remove();
	errors.forEach((error) => {
		$(".errors").append("<div> &raquo; " + error + "</div>").show();
	});
}

function validateForm() {
	let errors = [];

	document.querySelectorAll(".required-field").forEach((field) => {
		if ($(field).val() == "") {
			errors.push(`Lauks -  ${$(field).find("label").text()} jānorāda obligāti.`);
		}
	});

	if (errors.length > 0) {
		renderErrors(errors);
		return false;
	}

	return true;
}

window.addEventListener("load", () => {	
	let form = document.querySelector("form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		validateForm();
	});
});
