/* banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("ul.banner");
const imageList = document.querySelectorAll("ul.banner li");
const lastImageLi = document.createElement("li");
const firstImageLi = document.createElement("li");
const next = document.querySelector("div.next");
const prev = document.querySelector("div.prev");
const buttons = document.querySelectorAll(".buttons button");
let checkArrow = false;
let count = 1;
let auto = setInterval(autoSlide, 2000);
let temp = buttons[0];

HTMLCollection.prototype.forEach = Array.prototype.forEach;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        clearInterval(auto);
        count = parseInt(button.innerHTML);
        changeButtonStyle();
        banner.style.transition = "transform 0.3s";
        banner.style.transform = `translate(${-1896 * count}px)`;
        auto = setInterval(autoSlide, 2000);
    });
});

imageList.forEach((li, i) => li.style.backgroundImage = `url(image/00${i+1}.jpg)`)

banner.appendChild(lastImageLi);
lastImageLi.style.backgroundImage = `url(image/001.jpg)`;

// banner.insertBefore(firstImageLi, document.querySelector("ul.banner li"));
// firstImageLi.style.backgroundImage = `url(image/00${imageList.length}.jpg)`

banner.style.transform = `translate(-1896px)`;

function changeButtonStyle() {
    if(temp){
        temp.style.background = "white";
        temp.style.color = "black";
    }
    buttons[count - 1].style.background = "black";
    buttons[count - 1].style.color = "white";
    temp = buttons[count - 1];
}

function autoSlide(){
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1896 * ++count}px)`;
    console.log(count);
    if(count == 7) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1896px)";
        }, 300);
    }
    changeButtonStyle();
}

prev.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1896 * --count}px)`;
    if(count == 0) {
        count = 6;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(${-1896 * (imageList.length)}px)`;
        }, 300);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
});

next.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1896 * ++count}px)`;
    if(count == 7) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1896px)";
        }, 300);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
});
