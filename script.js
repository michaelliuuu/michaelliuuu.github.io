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
const constraints = {
    name: {
        presence: { allowEmpty: false}
    },
    email: {
        presence: { allowEmpty: false}
    }, 
    phone: {
        presence: { allowEmpty: false}
    },
    message: {
        presence: { allowEmpty: false}
    }
};

const form = document.getElementById("contact-form");

form.addEventListener('submit', function(event) {
    const formValues = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        phone: form.elements.phone.value,
        message: form.elements.message.value
    };
    const errors = validate(formValues, constraints);
    if (errors) {
        event.preventDefault();
        const errorMessage = Object.values(errors).map(function(fieldValues) {return fieldValues.join(', ')}).join("\n");
        alert(errorMessage);
    }
}, false); 
