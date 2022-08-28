let theme = "dark"
theme = localStorage.getItem("theme")
const getTheme = document.querySelector(".theme")
function changeTheme(event) {
    let checkUrl = event ? getComputedStyle(getTheme, null).getPropertyValue("background-image").search("dark") : -1;
    if ( (checkUrl !== -1 && event !== undefined) || (event === undefined && theme === "dark") ) {
        localStorage.setItem("theme", "dark")
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector(".hero-img").style.backgroundImage = "url('assets/img/hero-img.jpg')";
        document.querySelector(".contact").style.backgroundImage = "url('assets/img/contacts.jpg')";
        getTheme.style.backgroundImage = "url('assets/svg/theme-light.svg')";
    } else if ( (checkUrl === -1 && event !== undefined) || (event === undefined && theme === "light") ){
        localStorage.setItem("theme", "light")
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector(".hero-img").style.backgroundImage = "url('assets/img/bg-white.jpg')";
        document.querySelector(".contact").style.backgroundImage = "url('assets/img/contacts-white.jpg')";
        getTheme.style.backgroundImage = "url('assets/svg/theme-dark.svg')";
    }

}
getTheme.addEventListener("click", changeTheme)
changeTheme(undefined)

export {changeTheme, getTheme}