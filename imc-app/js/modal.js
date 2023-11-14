export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal.card .title span'),
    buttonClose: document.querySelector('.modal.card .close'),

    open() {
        Modal.wrapper.classList.add('open');
    },
    close() {
        Modal.wrapper.classList.remove('open');
    },
}

Modal.buttonClose.onclick = () => {
    Modal.close(); 
}


// esc
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if (event.key === 'Escape') {
        Modal.close();
    }
}