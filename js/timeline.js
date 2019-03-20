var items = document.getElementsByClassName("list-element");

function isElementInViewport(el) {
    // returns the smallest rectangle that bounds the element
    var rect = el.getBoundingClientRect();
    return (
        // return true if all sides are within viewport, otherwise return false
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function isElementOutOfPort(el) {
    // returns the smallest rectangle that bounds the element
    var rect = el.getBoundingClientRect();
    return (
        // return true if bottom is within bounds
        rect.bottom < (window.innerHeight || document.documentElement.clientHeight)
    );
}

// callback func after every reaload,scroll, resize to check every list element to see if it's in view
function callbackFunc() {
    for(var i = 0; i < items.length; i++){
        if(isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
        else if(!isElementOutOfPort(items[i])){
            items[i].classList.remove("in-view");
        }

    }
}


// run function on scroll and page load
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
window.addEventListener("resize", callbackFunc);
