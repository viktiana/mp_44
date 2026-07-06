function openModal() {
    document.getElementById('backdrop').classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('backdrop').classList.remove('is-open');
    document.body.style.overflow = '';
}

function closeModalOutside(e) {
    if (e.target === document.getElementById('backdrop')) closeModal();
}