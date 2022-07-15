const spinner = document.querySelector(".loading-spinner");
window.addEventListener("load", () => {
    setTimeout(() => {
        spinner.style.opacity = 0;
        spinner.style.zIndex = -99;
    }, 1400);
});