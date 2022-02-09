//Selectors
const nav = document.querySelector('.nav-bar');
const sliders = document.querySelectorAll('.comment');
const slidePoints = document.querySelector('.comment-points');
const commentSlide = document.querySelector('.comment-slide');
const commentContainer = document.querySelector('.comment-container');
let containerWidth = commentContainer.clientWidth;
// let addReply = setInterval(, 3000)

//Event Listeners
document.addEventListener('scroll', changeNavBackground);
document.addEventListener('scroll', scrollCheck);
window.addEventListener('load', addingLastChild);
// document.addEventListener('click', changeComment);


//Functions
function changeNavBackground(elem) {
    const scrollPos = elem.target.scrollingElement.scrollTop;
    if (scrollPos !== 0) {
        nav.style.background = 'white';
    } else {
        nav.style.background = '';
    }
}


function scrollCheck() {
    containerWidth = commentContainer.clientWidth;
}

function addingLastChild() {
    if (sliders.length > 1) {
        commentSlide.appendChild(sliders[0].cloneNode(true));
    }
}

function autoChange() {
    let currentSlide = commentSlide.style.transform.replace(/[^\d.]/g, '');
    let currentSlideIndex = +(commentSlide.style.transform.replace(/[^\d.]/g, '')) / containerWidth;
    commentSlide.style.transform = `translateX(${-(currentSlideIndex + 1) * containerWidth}px)`;

    if (currentSlideIndex == sliders.length - 1) {
        commentSlide.addEventListener('transitionend', function () {
            commentSlide.style.transition = 'transform 0s';
            currentSlideIndex = 0;
            commentSlide.style.transform = `translateX(0px)`;
            commentSlide.style.transition = 'transform 2s';
        })
    }
}


// autoChange();
// setInterval(autoChange, 5000);
// function nextSlide() {
//     let nextSlider = '';
//     let thatSlider = '';
//     sliders.forEach(elem => {
//         if (elem.className.includes('active')) {
//             nextSlider = elem.nextElementSibling;
//             if (elem === sliders[sliders.length - 1]) {
//                 nextSlider = sliders[0];
//             }
//             thatSlider = elem;
//         }
//     });
//     nextSlider.classList.add('active');
//     nextSlider.classList.add('to-left');
//     thatSlider.classList.add('to-left');
//     thatSlider.addEventListener('transitionend', function () {
//         thatSlider.classList.remove('active');
//         nextSlider.classList.remove('to-left');
//     })
// }

// setInterval(nextSlide, 4000);

// console.log(sliders.forEach(el => console.log(el)));
// function changeCommentInterval() {
//     console.log(slidePoints);
// };
// setInterval(() => {
//     changeCommentInterval();
// }, 5000);