// Burger menu
const getBurger = document.querySelector('.hamburger')
const getNav = document.querySelector('.nav');
const getLinks = document.querySelectorAll('.nav-link');

getLinks.forEach(el => el.addEventListener('click', apply))
getBurger.addEventListener("click", apply)

function apply() {
    getBurger.classList.toggle('is-active');
    if (getBurger.classList.contains('is-active')    ) {
        getNav.style.right = "-20px"
        document.body.style.maxHeight = "100vh";
        document.body.style.overflowY = "hidden";
    } else {
        getBurger.classList.remove('is-active')
        getNav.style.right = "";
        document.body.style.maxHeight = "";
        document.body.style.overflowY = "";
    }
}
export {apply}