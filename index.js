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

//Submit button sends info to me
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
    
});