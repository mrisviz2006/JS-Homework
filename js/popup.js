const showFrom = () => {
    const form = document.getElementById('form');
    form.setAttribute('style', 'visibility: visible');
}

const closeForm = () => {
    let form = document.getElementById('form');
    form.setAttribute('style', 'visibility: hidden');
}

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        closeForm();
    }
});
