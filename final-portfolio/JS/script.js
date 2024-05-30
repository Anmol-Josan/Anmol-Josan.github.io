window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hamburger-button').addEventListener('click', function () {
        document.querySelector('.nav-links').style.display =
            (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
    });
});
document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {
        const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
        if (isNotCombinedKey) {
            document.querySelector('.nav-links').style.display =
            (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
        }
    }
});