const portfolioBtn = document.querySelector('.portfolio-btn')
const imgSection = document.querySelectorAll('.porfolio-img')

function removeAllActiveClasses(event) {
    const btnCollection = portfolioBtn.children;
    for (let item of btnCollection) {
        item.classList.remove("active-btn")
    }
    event.target.classList.toggle("active-btn")
}

    portfolioBtn.addEventListener("click", event => {
        if (event.target.classList.contains("winter-btn")) {
            removeAllActiveClasses(event);

            imgSection.forEach((element, index) => {
                element.style.backgroundImage = `url('assets/img/winter/${index + 1}.jpg')`
            })
        }
        if (event.target.classList.contains("spring-btn")) {
            removeAllActiveClasses(event);

            imgSection.forEach((element, index) => {
                element.style.backgroundImage = `url('assets/img/spring/${index + 1}.jpg')`
            })
        }
        if (event.target.classList.contains("summer-btn")) {
            removeAllActiveClasses(event);

            imgSection.forEach((element, index) => {
                element.style.backgroundImage = `url('assets/img/summer/${index + 1}.jpg')`
            })
        }
        if (event.target.classList.contains("autumn-btn")) {
            removeAllActiveClasses(event);

            imgSection.forEach((element, index) => {
                element.style.backgroundImage = `url('assets/img/autumn/${index + 1}.jpg')`
            })
        }
    })


export { imgSection, portfolioBtn,removeAllActiveClasses}