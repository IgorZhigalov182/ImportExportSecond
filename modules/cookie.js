export function removeCookie () {
    const button = document.querySelector('.cookie-consent__button');
    const div = document.querySelector('.cookie-consent');

    button.addEventListener('click', event => localStorage.setItem('cookie', 'accept'));

    let checkStates = localStorage.getItem('cookie');

    (checkStates === 'accept') ? div.remove() : '';
}