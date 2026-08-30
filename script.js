const button = document.querySelector("#lang-toggle");
let currentLang = "nl";

button.addEventListener("click", function() {
    currentLang = currentLang === "nl" ? "en" : "nl";

<<<<<<< HEAD
    const elements = document.querySelectorAll("[data-nl]");
    elements.forEach(function(el) {
        el.textContent = el.dataset[currentLang];
    });
});
=======
    document.body.classList.toggle("en", currentLang === "en");

    button.textContent = currentLang === "nl" ? "EN" : "NL";
});

const emailUser = "svberg";
const emailDomain = "xs4all.nl";
document.getElementById("email-link").href = "mailto:" + emailUser + "@" + emailDomain;
>>>>>>> 052f526b708c59b8c02e77ec5e4f7705059903e5
