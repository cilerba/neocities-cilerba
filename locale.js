const defaultLocale = "en";

let locale;

let translations = {};

document.addEventListener("DOMContentLoaded", () => {
    // Translate the page to the default locale

    setLocale(defaultLocale);
});

  
async function setLocale(newLocale) {

    if (newLocale === locale) return;

    const newTranslations = await fetchTranslationsFor(newLocale);

    locale = newLocale;
    translations = newTranslations;

    translatePage();
}

async function fetchTranslationsFor(newLocale)
{
    const response = await fetch(`/pages/encountercalc/lang/${newLocale}.json`);

    return await response.json();
}

function translatePage() {

    document.querySelectorAll("[localeid]").forEach(translateElement);
  
  }

function translateElement(element)
{
    const key = element.getAttribute("localeid");
    const translation = translations[key];

    element.innerText = translation;
}