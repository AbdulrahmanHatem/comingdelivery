// Adding Class Active On Links That Been Clicked
let links = document.getElementsByClassName("nav-link");

for(i=0; i < links.length; i++){
    links[i].addEventListener('click', function() {
        this.classList.add()
    });
}

// Changing Brand-Logo When The Navigation is Fixed
window.onscroll = function () {
    
}

// Trigger Download Section's Animation
let downloadSection = document.querySelector('.download'),
    downloadInfo = document.querySelector('.download .download-info'),
    downloadImg = document.querySelector('.download .download-img')

window.onscroll = function () {

    let nav = document.querySelector('.navbar'),
        logo = document.getElementById('logo');

    if (window.scrollY >= 200) {
        nav.classList.add('nav-fixed');
        document.body.style.paddingTop = '100px'
        // logo.setAttribute('src', 'images/logo.png');
    } else{
        nav.classList.remove('nav-fixed');
        document.body.style.paddingTop = '0px'
        // logo.setAttribute('src', 'images/logo.png');
    }
    
    if (window.scrollY >= 2000) {
        projectsCount();
        clientsCount();
    }

    //-- Download Section's Animation
    let downloadOffsetTop = downloadSection.offsetTop,
    downloadInnerHeight = downloadSection.offsetHeight,
    windowHeight = this.innerHeight,
    windowScroll = this.pageYOffset;

    if (windowScroll >= (downloadOffsetTop + downloadInnerHeight - windowHeight - 100)) {
        downloadInfo.style.animationPlayState = 'running';
        downloadImg.style.animationPlayState = 'running';
    }

    //-- About Us Section's Animation
    let aboutUsSection = document.querySelector('.about-us'),
        aboutUsOffsetTop = aboutUsSection.offsetTop,
        aboutUsOuterHeight = aboutUsSection.offsetHeight;
    if (windowScroll >= (aboutUsOffsetTop + aboutUsOuterHeight - windowHeight)) {
        document.querySelector('.about-us .about-img').style.animationPlayState = 'running'
        document.querySelector('.about-us .about-info').style.animationPlayState = 'running'
    }
}