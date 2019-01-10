/* Enable copying to the clipbiard */
new ClipboardJS('.copy');


/* Allows the copy-animation to be played multiple times on different items */
var elements = document.querySelectorAll(".copy");
var className = "copy-clicked";
var previous;
Array.prototype.forEach.call(elements, function(el, i){
    el.addEventListener("click", function displayDate() {
        
        if (previous) {
            if (previous.classList)
                previous.classList.remove(className);
            else
                previous.className = previous.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
        }

        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;

        previous = el;
    }); 
});