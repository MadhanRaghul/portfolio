const btn = document.getElementById("A")
const page = document.getElementById("actual-page")
const frameTop = document.getElementById("frame-top")
const frameBottom = document.getElementById("frame-bottom")

btn.addEventListener('mouseover', () => {
    frameTop.classList.add('frame')
    frameTop.style.transform = 'translateY(0vh)'
    frameBottom.classList.add('frame')
    frameBottom.style.transform = 'translateY(0vh)'
} )

btn.addEventListener('mouseout', () => {
    frameTop.style.transform = 'translateY(-12vh)'
    frameBottom.style.transform = 'translateY(12vh)'
} )

btn.addEventListener('click', () => {
    page.style.display = 'block'
} )

const navbar = document.getElementById('navbar')
const myname = document.getElementById('name')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')

const aboutHeading = document.getElementById('about-heading')
const aboutPara = document.getElementById('about-para')
const colorChange = document.getElementById('color-change')

const pro1 = document.getElementById('pro1')
const pro2 = document.getElementById('pro2')
const pro1High = document.getElementById('pro1-high')
const pro2High = document.getElementById('pro2-high')

const edu1 = document.getElementById('edu1')
const edu1Pic = document.getElementById('edu1-pic')
const edu2 = document.getElementById('edu2')
const edu2Pic = document.getElementById('edu2-pic')
const edu3 = document.getElementById('edu3')
const edu3Pic = document.getElementById('edu3-pic')

const line = document.getElementById('line')
const icon1 = document.getElementById('icon1')
const icon2 = document.getElementById('icon2')
const icon3 = document.getElementById('icon3')

const study1 = document.getElementById('study1')
const study2 = document.getElementById('study2')
const study3 = document.getElementById('study3')

const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const card4 = document.getElementById('card4')

const html = document.getElementById('html')
const css = document.getElementById('css')
const js = document.getElementById('js')
const react = document.getElementById('react')

const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    console.log(scrolled)

    if(scrolled >= 650){
        navbar.classList.add('introNavbar')
        myname.classList.add('introName')
        one.classList.add('introOne')
        two.classList.add('introTwo')
        three.classList.add('introThree')
        four.classList.add('introFour')
        aboutHeading.classList.add('introAboutHeading')
        aboutPara.classList.add('introAboutPara')
        colorChange.classList.add('introColorChange')
    }

    if(scrolled >= 1100){
        pro1.classList.add('introPro')
        pro1High.classList.add('introProHigh')
    }

    if(scrolled >= 1300){
        pro2.classList.add('introPro')
        pro2High.classList.add('introProHigh')
    }
    
    if(scrolled >= 1700){
        line.classList.add('introLine')
    }

    if(scrolled >= 1800){
        edu1.classList.add('introEduRight')
        edu1Pic.classList.add('introEduLeft')
        icon1.classList.add('introIcons')
        study1.classList.add('introColorChange')
    }

    if(scrolled >= 2100){
        edu2.classList.add('introEduLeft')
        edu2Pic.classList.add('introEduRight')
        icon2.classList.add('introIcons')
        study2.classList.add('introColorChange')
    }

    if(scrolled >= 2400){
        edu3.classList.add('introEduRight')
        edu3Pic.classList.add('introEduLeft')
        icon3.classList.add('introIcons')
        study3.classList.add('introColorChange')
    }

    if(scrolled >= 2800){
        card1.classList.add('introCard1')
        card2.classList.add('introCard2')
        card3.classList.add('introCard3')
        card4.classList.add('introCard4')
        html.classList.add('introHTML')
        css.classList.add('introCSS')
        js.classList.add('introJS')
        react.classList.add('introREACT')
    }

    if(scrolled >= 3300){
        box1.classList.add('introCard1')
        box2.classList.add('introCard2')
        box3.classList.add('introCard3')
    }

})



