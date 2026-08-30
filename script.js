const button = document.querySelector("#lang-toggle");
let currentLang = "nl";

button.addEventListener("click", function() {
    currentLang = currentLang === "nl" ? "en" : "nl";

    const elements = document.querySelectorAll("[data-nl]");
    elements.forEach(function(el) {
        el.textContent = el.dataset[currentLang];
    });

    document.body.classList.toggle("en", currentLang === "en");

    button.textContent = currentLang === "nl" ? "EN" : "NL";

    updateCVLink();
});

const emailUser = "svberg";
const emailDomain = "xs4all.nl";
document.getElementById("email-link").href = "mailto:" + emailUser + "@" + emailDomain;

const cvLink = document.querySelector(".cv-link");

function updateCVLink() {
    cvLink.href = currentLang === "en"
        ? "CV/Stella_van_Bergen_CV_General_EN.pdf"
        : "CV/Stella_van_Bergen_CV_General_NL.pdf";
}

updateCVLink();
