const closeModalButton = document.getElementById('closeModalButton');

function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute('tabindex', '0');   
	  modal.style.display = "block";
    modal.focus()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.removeAttribute('tabindex');
}

closeModalButton.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
      closeModal();
      setTimeout(function() {
        // closeModalButton.blur();
        const contactButton = document.getElementById('contact_button');
        contactButton.focus();
      }, 100);
    }
  });
  

function onSubmit(event) {
    event.preventDefault();
    console.log('Prénom: ', event.target[0].value);
    console.log('Nom: ', event.target[1].value);
    console.log('Email: ', event.target[2].value);
    console.log('Message: ', event.target[3].value);
    closeModalButton.focus();
}