const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages(season) {
    season.forEach(elem => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${elem}/${i}.jpg`;
        }
    })
}
preloadImages(seasons);
export {seasons, preloadImages}