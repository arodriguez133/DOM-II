// Your code goes here


const navLinks = document.querySelectorAll('a');

navLinks.forEach(navLink => (navLink.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()
    navLink.style.color = 'yellow'
})));

const headerBackground = document.querySelector('header');

headerBackground.addEventListener('click', e => {
    headerBackground.style.backgroundColor = 'grey'
});

const introImg = document.querySelector('.intro img');

introImg.addEventListener('mouseover', () => {
    introImg.style.transform = "scale(1.2)"
    introImg.style.transition = "all 1s"
});

introImg.addEventListener('mouseleave', () => {
    introImg.style.transform = "scale(1)"
    introImg.style.transition = "all 0.3s"
});

const funBusTitle = document.querySelector('.intro h2');

funBusTitle.addEventListener('mouseenter', () => {
    funBusTitle.style.color = "red"
});

const funBusText = document.querySelector('.intro p');

funBusText.addEventListener('wheel', () => {
    funBusText.style.backgroundColor = "red"
});

funBusText.addEventListener('mouseleave', () => {
    funBusText.style.backgroundColor = "grey"
});

const contentImg = document.querySelectorAll('.img-content img');

contentImg[0].addEventListener('click', () => {
    contentImg[0].style.transform = "rotate(180deg)"
});

contentImg[1].addEventListener('dblclick', () => {
    // contentImg[1].style.transform = "rotate(180deg)"
    // contentImg[1].style.transition = "all 1s"
    gsap.to(contentImg[1], {rotation: 27, x: 100, duration: 1});    
});

contentImg[1].addEventListener('mouseleave', () => {
    // contentImg[1].style.transform = "rotate(180deg)"
    // contentImg[1].style.transition = "all 1s"
    gsap.to(contentImg[1], {rotation: 0, x: 0, duration: 1});    
});

const destImg = document.querySelector('.content-destination img');

destImg.addEventListener('drag', () => {
    destImg.style.transform = "rotate(180deg)"
});

const signUpBtns = document.querySelectorAll('.btn');

signUpBtns.forEach(btn => (btn.addEventListener('mousedown', e => {
    btn.style.color = 'blue'
})));

signUpBtns.forEach(btn => (btn.addEventListener('mouseup', e => {
    btn.style.color = 'white'
})));

signUpBtns.forEach(btn => (btn.addEventListener('mousemove', e => {
    btn.style.color = 'orange'
})));