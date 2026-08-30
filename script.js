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
});

const emailUser = "svberg";
const emailDomain = "xs4all.nl";
document.getElementById("email-link").href = "mailto:" + emailUser + "@" + emailDomain;
