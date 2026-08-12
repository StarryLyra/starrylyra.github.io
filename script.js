const button = document.querySelector("#lang-toggle");
let currentLang = "nl";

button.addEventListener("click", function() {
    currentLang = currentLang === "nl" ? "en" : "nl";

    document.body.classList.toggle("en", currentLang === "en");

    button.textContent = currentLang === "nl" ? "EN" : "NL";
});

const emailUser = "svberg";
const emailDomain = "xs4all.nl";
document.getElementById("email-link").href = "mailto:" + emailUser + "@" + emailDomain;