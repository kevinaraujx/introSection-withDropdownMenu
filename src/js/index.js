const hamMenu = document.querySelector('.ham-menu');
const navBar = document.querySelector('.navbar');
const modal = document.querySelector('.modal');
const closeMenu = document.querySelector('.close-menu');

const navFeat = document.querySelectorAll('.nav-feat');
const navComp = document.querySelectorAll('.nav-comp')
const subLinks = document.querySelectorAll('.sub-links');


window.onload = function () {
    document.body.className = "";
}

hamMenu.addEventListener('click', () => {
    modal.classList.add('show-modal');
    navBar.classList.add('show-nav');
});
closeMenu.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    navBar.classList.remove('show-nav');
});

navFeat.forEach((navFeat) =>
    navFeat.addEventListener('click', function () {
        this.parentElement.classList.toggle('sub--active');
        this.parentElement.classList.toggle('first--active');
        this.parentElement.classList.remove('sub--active2');
        this.parentElement.classList.remove('second--active');
    })
);
navComp.forEach((navComp) =>
    navComp.addEventListener('click', function () {
        this.parentElement.classList.toggle('sub--active2');
        this.parentElement.classList.toggle('second--active');
        this.parentElement.classList.remove('sub--active');
        this.parentElement.classList.remove('first--active');
    })
);