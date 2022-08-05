let targetClass1 = document.querySelector('div') //add tile background2
let targetClass2 = document.querySelector('body') //add tild background1
let targetClass3 = document.querySelector('.quote-section') //add tile background2
let targetClass4 = document.querySelector('.banner-section .banner')
let targetClass5 = document.querySelector('.info-section .info-card-container')

let imgMain = document.querySelector('body .intro-section .intro-content .main-image')
let img1 = document.querySelector('body .info-section .info-card-container .info-card .card-1')
let img2 = document.querySelector('body .info-section .info-card-container .info-card .card-2')
let img3 = document.querySelector('body .info-section .info-card-container .info-card .card-3')
let img4 = document.querySelector('body .info-section .info-card-container .info-card .card-4')

imgMain.src = 'images/main-norm.png'
img1.src = 'images/1-norm.png'
img2.src = 'images/2-norm.png'
img3.src = 'images/3-norm.png'
img4.src = 'images/4-norm.png'


sobriety = false

function colorSwitch() {
    if (sobriety == false) {
        
        sobriety = true

        targetClass1.classList.remove('anim-layer2')
        targetClass2.classList.remove('anim-layer1')
        targetClass3.classList.remove('anim-layer2')
        targetClass4.classList.remove('anim-layer2')
        targetClass5.classList.remove('anim-layer1')

        imgMain.src = 'images/main-norm.png'
        img1.src = 'images/1-norm.png'
        img2.src = 'images/2-norm.png'
        img3.src = 'images/3-norm.png'
        img4.src = 'images/4-norm.png'

    } else {
        
        sobriety = false

        targetClass1.classList.add('anim-layer2')
        targetClass2.classList.add('anim-layer1')
        targetClass3.classList.add('anim-layer2')
        targetClass4.classList.add('anim-layer2')
        targetClass5.classList.add('anim-layer1')

        imgMain.src = 'images/main.gif'
        img1.src = 'images/1.gif'
        img2.src = 'images/2.gif'
        img3.src = 'images/3.gif'
        img4.src = 'images/4.gif'
        
    }
}

console.log(img2.src, img1.src);