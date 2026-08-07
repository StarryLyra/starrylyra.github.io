const button = document.querySelector("#lang-toggle");
let currentLang = "nl";

button.addEventListener("click", function() {
    if (currentLang === "nl") {
        currentLang = "en";
        button.textContent = "NL";
    } else {
        currentLang = "nl";
        button.textContent = "EN";
    }

    const elements = document.querySelectorAll("[data-nl]");
    elements.forEach(function(el) {
        el.textContent = el.dataset[currentLang];
    });
});

const emailUser = "svberg";
const emailDomain = "xs4all.nl";
document.getElementById("email-link").href = "mailto:" + emailUser + "@" + emailDomain;