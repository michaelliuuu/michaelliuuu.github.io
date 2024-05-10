//links switch the pages
const contactLink = document.getElementById("contact");
const contactSection = document.getElementById("contactSection");
const aboutLink = document.getElementById("about");
const aboutSection = document.getElementById("aboutSection");
const projectLink = document.getElementById("projects");
const projectSection = document.getElementById("projectSection");
const hobbiesLink = document.getElementById("hobbies");
const hobbiesSection = document.getElementById("hobbiesSection");

contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (contactSection.style.display === "none") {
        contactSection.style.display = "block";
    }
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    hobbiesSection.style.display = "none";
});
aboutLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
    }
    contactSection.style.display = "none";
    projectSection.style.display = "none";
    hobbiesSection.style.display = "none";
});
projectLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (projectSection.style.display === "none") {
        projectSection.style.display = "block";
    }
    contactSection.style.display = "none";
    hobbiesSection.style.display = "none";
    aboutSection.style.display = "none";
});
hobbiesLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (hobbiesSection.style.display === "none") {
        hobbiesSection.style.display = "block";
    }
    contactSection.style.display = "none";
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
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

//Submit button sends info to me
