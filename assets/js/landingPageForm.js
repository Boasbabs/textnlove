/*-------------- Scripts to disable playButton in order to valid input --------------*/

const phoneNumberForm = document.getElementById('phoneNumberForm');
const phoneField = document.getElementById('phoneField');
const playButton = document.getElementById('playButton');

phoneField.addEventListener('keyup', function (ev) {
    isValidPhone = phoneField.checkValidity();

    if(isValidPhone) {
        playButton.disabled = false;
    } else {
        playButton.disabled = true;
    }
});


/*-------------- Scripts for modal --------------*/

// Select all buttons with property 'data-modal'

// function that triggers modal on Play Button
function modalEvent(button) {
    const trigger = button.getAttribute('data-modal-trigger');
    const modal = document.querySelector('[data-modal=' + trigger + ']');
    const contentWrapper = modal.querySelector('.content-wrapper');
    const close = modal.querySelector('.close');

    close.addEventListener('click', function(){ return modal.classList.remove('open')});
    modal.addEventListener('click', function(){ return modal.classList.remove('open')});
    contentWrapper.addEventListener('click', function(e){ return e.stopPropagation()});

    modal.classList.toggle('open');
}

// the play button triggers modal upon click to confirm payment
playButton.addEventListener('click', function(ev) {
    modalEvent(playButton);
    // phoneNumberForm.submit()
});