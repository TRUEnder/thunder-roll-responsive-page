let slides = document.getElementsByClassName("slide");
let n = slides.length;

let nDisplayed = countNumberOfSlide(); // Default number of slide displayed

hideSlides();

addEventListener("resize", () => {
    nDisplayed = countNumberOfSlide();
    hideSlides();
})

function hideSlides() {
    for (let i = 0; i < n; i++) {
        if (i < nDisplayed) {
            slides[i].style.display = "flex";
        } else {
            slides[i].style.display = "none";
        }
        slides[i].style.order = i;
    }
}

function countNumberOfSlide() {
    let deviceWidth = window.innerWidth;
    let nSlide;

    if (deviceWidth > 1700) {
        nSlide = 5;
    } else if (deviceWidth > 1200) {
        nSlide = 4;
    } else if (deviceWidth > 965) {
        nSlide = 3;
    } else if (deviceWidth > 550) {
        nSlide = 2;
    } else {
        nSlide = 1;
    }
    return nSlide;
}

function prevSlide() {
    for (let i = 0; i < n; i++) {
        let currOrder = Number(slides[i].style.order);

        if (currOrder === (nDisplayed - 1)) {
            slides[i].style.display = "none";
        }
        if (currOrder === (n - 1)) {
            slides[i].style.display = "flex";
        }

        slides[i].style.order = plusOne(currOrder);
    }
}

function nextSlide() {
    for (let i = 0; i < n; i++) {
        let currOrder = Number(slides[i].style.order);

        if (currOrder === 0) {
            slides[i].style.display = "none";
        }
        if (currOrder === nDisplayed) {
            slides[i].style.display = "flex";
        }

        slides[i].style.order = minOne(currOrder);
    }
}

// Function returning in-range index
// resulted from slideId + 1
function plusOne(slideId) {
    let resultId = slideId + 1;

    if (resultId > n - 1) {
        resultId = resultId - n;
    }

    return resultId;
}

// Function returning in-range index
// resulted from slideId - 1
function minOne(slideId) {
    let resultId = slideId - 1;

    if (resultId < 0) {
        resultId = n + resultId;
    }

    return resultId;
}