async function loadHTML(elementId, url) {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', 'header.html');
});