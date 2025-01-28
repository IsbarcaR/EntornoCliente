function savePreferences() {
    const theme = document.getElementById("themeSelector").value;
    const fontSize = document.getElementById("fontSizeSelector").value;
    const language = document.getElementById("languageSelector").value;

    const preferences = { theme, fontSize, language };
    localStorage.setItem("preferences", JSON.stringify(preferences));
    applyPreferences(preferences);
}

function resetPreferences() {
    const defaultPreferences = { theme: "light", fontSize: "medium", language: "es" };
    localStorage.removeItem("preferences");
    document.getElementById("themeSelector").value = defaultPreferences.theme;
    document.getElementById("fontSizeSelector").value = defaultPreferences.fontSize;
    document.getElementById("languageSelector").value = defaultPreferences.language;
    applyPreferences(defaultPreferences);
}

function applyPreferences(preferences) {
    document.body.className = `${preferences.theme}-theme`;
    document.body.style.fontSize = preferences.fontSize === "small" ? "12px" :
        preferences.fontSize === "medium" ? "16px" : "20px";
    document.documentElement.lang = preferences.language;
}

function loadPreferences() {
    const savedPreferences = JSON.parse(localStorage.getItem("preferences")) || {
        theme: "light",
        fontSize: "medium",
        language: "es",
    };
    document.getElementById("themeSelector").value = savedPreferences.theme;
    document.getElementById("fontSizeSelector").value = savedPreferences.fontSize;
    document.getElementById("languageSelector").value = savedPreferences.language;
    applyPreferences(savedPreferences);
}

function saveProfile() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    localStorage.setItem("profile", JSON.stringify({ username, email }));
}

function loadProfile() {
    const profile = JSON.parse(localStorage.getItem("profile")) || {};
    document.getElementById("username").value = profile.username || "";
    document.getElementById("email").value = profile.email || "";
}


window.onload = function() {
    loadPreferences();
    loadProfile();
};