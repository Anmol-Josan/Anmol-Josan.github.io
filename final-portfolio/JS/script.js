window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("img1");
    element.classList.add("moveOut");
    console.log("DOMContentLoaded: moveOut class added");
});

let scrollThreshold = window.innerHeight;

window.onscroll = function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    console.log("onscroll: current scroll position is " + st);
    if (st > scrollThreshold) {
        var element = document.getElementById("img1");
        element.classList.remove("moveOut");
        console.log("onscroll: moveOut class removed");
        scrollThreshold += window.innerHeight;
    } else if (st < scrollThreshold - 1*window.innerHeight) {
        var element = document.getElementById("img1");
        element.classList.add("moveOut");
        console.log("onscroll: moveOut class added");
        scrollThreshold -= window.innerHeight;
    }
};