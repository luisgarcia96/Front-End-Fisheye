function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function onSubmit(event) {
    event.preventDefault();
    console.log('Prénom: ', event.target[0].value);
    console.log('Nom: ', event.target[1].value);
    console.log('Email: ', event.target[2].value);
    console.log('Message: ', event.target[3].value);
}