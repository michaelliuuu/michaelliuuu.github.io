// Header template for htmls
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

//PhoneNum and Email copies into clipboard when clicked
const copyPhoneNum = document.getElementById('phoneNum');
const copyMyEmail = document.getElementById('myemail');
const text1 = '+1(778)-927-5568';
const text2 = 'michaelliu.98@hotmail.com';

function copyText(indicator) {
    if (indicator == 0) {
        popup(text1);
    } else {
        popup(text2);
    }
}

function popup(text) {
    navigator.clipboard.writeText(text).then(() => {
        const popup = document.getElementById("popup");
        // Show the popup
        popup.style.visibility = 'visible';
        popup.style.opacity = 1;

        // Hide the popup after 2 seconds
        setTimeout(() => {
            popup.style.opacity = 0;
            popup.style.visibility = 'hidden';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

copyPhoneNum.addEventListener('click', function(event) {
    event.preventDefault();
    copyText(0);
});

copyMyEmail.addEventListener('click', function(event) {
    event.preventDefault();
    copyText(1);
});