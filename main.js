let pixelCounter = 0;
let containerPxTarget = [0, 100, 200, 300, 400]
let target = 0;
let pixelCounter2 = 0;


leftBtn.onclick = () => {
    if (target > 0)
        target = target - 1;
    let sliderId = setInterval(() => {
        imagesContainer.style.left = `${pixelCounter++}%`;
        if (pixelCounter > Number(`-${containerPxTarget[target]}`)) {
            clearInterval(sliderId)
        };
    }, 5);
};


rightBtn.onclick = () => {
    if (target < 4)
        target = target + 1;
    let sliderId = setInterval(() => {
        imagesContainer.style.left = `${pixelCounter--}%`;
        if (pixelCounter < Number(`-${containerPxTarget[target]}`)) {
            clearInterval(sliderId)
        };
    }, 5);

};