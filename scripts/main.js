import { translations } from './translates.js';

const langSwitcher = document.getElementById('lang-switcher');
const htmlEl = document.documentElement;

const switchLanguage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });
    htmlEl.lang = lang;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    langSwitcher.textContent = lang === 'ar' ? 'English' : 'العربية';
};

langSwitcher.addEventListener('click', (e) => {
    e.preventDefault();

    // Add a class to trigger the fade-out transition
    document.body.classList.add('translating');

    // Wait for the transition to finish before changing the text
    setTimeout(() => {
        const newLang = htmlEl.lang === 'ar' ? 'en' : 'ar';
        switchLanguage(newLang);
        // Remove the class to trigger the fade-in
        document.body.classList.remove('translating');
    }, 200); // This duration should match the CSS transition time
});