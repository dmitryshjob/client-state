const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');


let modalClosed = false;

function modalActive() {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClosed=true';
    modalClosed = true;
}

function checkClosedModal() {
    const pairs = document.cookie.split('; ');
    const closedCookie = pairs.find(i => i.startsWith('modalClosed='));
    if(closedCookie) {
        modalClosed = closedCookie.split('=')[1] === 'true';
    } else {
        modalClosed = false;
    }

    if(!modalClosed) {
        modal.classList.add('modal_active');
        document.cookie = 'modalClosed=false';
    }
}
closeModal.addEventListener('click', modalActive);
document.addEventListener('DOMContentLoaded', checkClosedModal())

