let getQuery = "cars"
let start = true;
const getQueryInput = document.querySelector(".searchTerm");
const submitBtn = document.querySelector(".searchButton");
const clientID = "Um7l66NurvO4_oR7u3ECFWSRmZr6DsIAkg1sezHhjo4";
let currentPage = 1;
getQueryInput.addEventListener("input", (e) => {
    getQuery = e.target.value;
});

getQueryInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitBtn.click();
    }
})

submitBtn.addEventListener("click", () => {
    getData()
})
if (start) {
    start = false;
    getQueryInput.value = getQuery;
    getData()
    getQueryInput.focus()
}

async function getData() {
    if (document.querySelector(".gallery .container img")) {
        document.querySelector(".gallery .container").innerHTML = "";
        currentPage = 1;
    }
    if (!document.querySelector(".loadMore")) {
        let btn = document.createElement("button")
        btn.innerText = "Load More"
        btn.classList.add("loadMore")
        document.querySelector(".gallery ").append(btn)
        btn.addEventListener("click", () => {
            loadData(currentPage)
        })
    }
    await loadData(currentPage);
}

async function loadData(page = 1) {
    const url = `https://api.unsplash.com/search/photos/?client_id=${clientID}&query=${getQuery}&per_page=30&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach(item => {
        addImg(item.urls.small)
    })
    currentPage++;
}

function addImg(url) {
    let img = document.createElement("img")
    img.src = `${url}`
    document.querySelector(".gallery .container").append(img)
    img.classList.add("hover")
}

document.querySelector(".gallery .container").addEventListener("click", event => {
    if (event.target.tagName !== "IMG") return;
    let largeImage = event.target;
    window.open(largeImage.src);
})