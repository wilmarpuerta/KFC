
function cambioLanguage() {
    const language = document.getElementById("language").value;

    if (language == "en") {
        alert("ingles")
    }
    else if (language == "es") {
        alert("español")
    }
}

function cambioTheme() {
    const theme = document.getElementById("darkMode").value;
    if (theme == "light") {
        document.body.className = "theme-light";
    }
    else if (theme == "dark") {
        document.body.className = "theme-dark";
    }
    else if (theme == "Brown") {
        document.body.className = "theme-Brown";
    }
}