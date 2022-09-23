
//Get all elements with data attribute
import i18Obj from "./translate.js";
let lang = "en";
lang = localStorage.getItem("lang")

const getDataElements = document.querySelectorAll("[data-i18n]")
//Get lang button
const getLangBtn = document.querySelectorAll(".lang-btn")


function setLang(event) {
    if ((event !== undefined && event.target.classList.contains("en-lang")) || (event === undefined && lang === "en")) {

        localStorage.setItem("lang", "en")
        applyLang("en");
        getLangBtn[0].classList.add("active-lang");
        getLangBtn[1].classList.remove("active-lang");
    } else if ((event !== undefined && event.target.classList.contains("ru-lang")) || (event === undefined && lang === "ru")) {

        localStorage.setItem("lang", "ru")
        applyLang("ru")
        getLangBtn[1].classList.add("active-lang");
        getLangBtn[0].classList.remove("active-lang");
    }
}

//Apply language
function applyLang(lang) {
    getDataElements.forEach(elem => {
        const dataName = elem.dataset.i18n;
        let index = Object.keys(i18Obj[lang]).indexOf(`${dataName}`);
        if (elem.nodeName === "TEXTAREA") elem.placeholder = Object.values(i18Obj[lang])[index];
        else if (elem.nodeName === "INPUT") elem.placeholder = Object.values(i18Obj[lang])[index];
        else elem.textContent = Object.values(i18Obj[lang])[index] + "";
    })
}
getLangBtn.forEach(elem => elem.addEventListener("click", setLang))
setLang();
export {setLang, getLangBtn, applyLang}