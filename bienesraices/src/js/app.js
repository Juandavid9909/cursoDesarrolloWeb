document.addEventListener("DOMContentLoaded", function() {
    eventListeners();

    darkMode();
});

function darkMode() {
    const prefiereDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefiereDarkMode.matches) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    prefiereDarkMode.addEventListener("change", () => {
        if (prefiereDarkMode.matches) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });

    const botonDarkMode = document.querySelector(".dark-mode-boton");

    botonDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

function eventListeners() {
    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector(".navegacion");
    // JavaScript(ES6)

    navegacion.classList.toggle("mostrar");
}