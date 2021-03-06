var h = 0;
var currentTop = 0;
var scrolling = false;

window.onload = init();

function init() {
    h = window.innerHeight;
    currentTop = window.scrollY;
}

window.onscroll = function() {
    var liveTop = window.scrollY;

    if (liveTop == currentTop) {
        scrolling = false;
    } else if (liveTop > currentTop && !scrolling) {
        currentTop += h;
        console.log('down');
        scrolling = true;
    } else if (liveTop < currentTop && !scrolling) {
        currentTop -= h;
        console.log('up');
        scrolling = true;
    }
    window.scrollTo(0, currentTop);
}
