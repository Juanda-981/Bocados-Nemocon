let salirCat1 = document.getElementById('closeCat1')
let salirCat2 = document.getElementById('closeCat2')
let salirCat3 = document.getElementById('closeCat3')
let salirCat4 = document.getElementById('closeCat4')
let salirCat5 = document.getElementById('closeCat5')
let salirCat6 = document.getElementById('closeCat6')

salirCat1.addEventListener('click',closeCat1)
salirCat2.addEventListener('click',closeCat2)
salirCat3.addEventListener('click',closeCat3)
salirCat4.addEventListener('click',closeCat4)
salirCat5.addEventListener('click',closeCat5)
salirCat6.addEventListener('click',closeCat6)

let buttonEnterCat1 = document.getElementById('catPrin1')
let buttonEnterCat2 = document.getElementById('catPrin2')
let buttonEnterCat3 = document.getElementById('catPrin3')
let buttonEnterCat4 = document.getElementById('catPrin4')
let buttonEnterCat5 = document.getElementById('catPrin5')
let buttonEnterCat6 = document.getElementById('catPrin6')

buttonEnterCat1.addEventListener('click',oppenCat1)
buttonEnterCat2.addEventListener('click',oppenCat2)
buttonEnterCat3.addEventListener('click',oppenCat3)
buttonEnterCat4.addEventListener('click',oppenCat4)
buttonEnterCat5.addEventListener('click',oppenCat5)
buttonEnterCat6.addEventListener('click',oppenCat6)

let secPrin = document.getElementById('init-section')

let intoCat1 = document.getElementById('intoCatalogos1')
intoCat1.style.display = 'none'
let intoCat2 = document.getElementById('intoCatalogos2')
intoCat2.style.display = 'none'
let intoCat3 = document.getElementById('intoCatalogos3')
intoCat3.style.display = 'none'
let intoCat4 = document.getElementById('intoCatalogos4')
intoCat4.style.display = 'none'
let intoCat5 = document.getElementById('intoCatalogos5')
intoCat5.style.display = 'none'
let intoCat6 = document.getElementById('intoCatalogos6')
intoCat6.style.display = 'none'

let  abrirInfo1Cat1 = document.getElementById('food1cat1')
let  abrirInfo2Cat1 = document.getElementById('food2cat1')
let  abrirInfo3Cat1 = document.getElementById('food3cat1')
let  abrirInfo4Cat1 = document.getElementById('food4cat1')
let  abrirInfo5Cat1 = document.getElementById('food5cat1')
let  abrirInfo6Cat1 = document.getElementById('food6cat1')
let  abrirInfo7Cat1 = document.getElementById('food7cat1')
let  abrirInfo8Cat1 = document.getElementById('food8cat1')
let  abrirInfo9Cat1 = document.getElementById('food9cat1')
let  abrirInfo10Cat1 = document.getElementById('food10cat1')

let  abrirInfo1Cat2 = document.getElementById('food1cat2')
let  abrirInfo2Cat2 = document.getElementById('food2cat2')
let  abrirInfo3Cat2 = document.getElementById('food3cat2')
let  abrirInfo4Cat2 = document.getElementById('food4cat2')
let  abrirInfo5Cat2 = document.getElementById('food5cat2')
let  abrirInfo6Cat2 = document.getElementById('food6cat2')
let  abrirInfo7Cat2 = document.getElementById('food7cat2')
let  abrirInfo8Cat2 = document.getElementById('food8cat2')
let  abrirInfo9Cat2 = document.getElementById('food9cat2')
let  abrirInfo10Cat2 = document.getElementById('food10cat2')

let  abrirInfo1Cat3 = document.getElementById('food1cat3')
let  abrirInfo2Cat3 = document.getElementById('food2cat3')
let  abrirInfo3Cat3 = document.getElementById('food3cat3')
let  abrirInfo4Cat3 = document.getElementById('food4cat3')
let  abrirInfo5Cat3 = document.getElementById('food5cat3')
let  abrirInfo6Cat3 = document.getElementById('food6cat3')
let  abrirInfo7Cat3 = document.getElementById('food7cat3')
let  abrirInfo8Cat3 = document.getElementById('food8cat3')
let  abrirInfo9Cat3 = document.getElementById('food9cat3')
let  abrirInfo10Cat3 = document.getElementById('food10cat3')

let  abrirInfo1Cat4 = document.getElementById('food1cat4')
let  abrirInfo2Cat4 = document.getElementById('food2cat4')
let  abrirInfo3Cat4 = document.getElementById('food3cat4')
let  abrirInfo4Cat4 = document.getElementById('food4cat4')
let  abrirInfo5Cat4 = document.getElementById('food5cat4')
let  abrirInfo6Cat4 = document.getElementById('food6cat4')
let  abrirInfo7Cat4 = document.getElementById('food7cat4')
let  abrirInfo8Cat4 = document.getElementById('food8cat4')
let  abrirInfo9Cat4 = document.getElementById('food9cat4')
let  abrirInfo10Cat4 = document.getElementById('food10cat4')

let  abrirInfo1Cat5 = document.getElementById('food1cat5')
let  abrirInfo2Cat5 = document.getElementById('food2cat5')
let  abrirInfo3Cat5 = document.getElementById('food3cat5')
let  abrirInfo4Cat5 = document.getElementById('food4cat5')
let  abrirInfo5Cat5 = document.getElementById('food5cat5')
let  abrirInfo6Cat5 = document.getElementById('food6cat5')
let  abrirInfo7Cat5 = document.getElementById('food7cat5')
let  abrirInfo8Cat5 = document.getElementById('food8cat5')
let  abrirInfo9Cat5 = document.getElementById('food9cat5')
let  abrirInfo10Cat5 = document.getElementById('food10cat5')

let  abrirInfo1Cat6 = document.getElementById('food1cat6')
let  abrirInfo2Cat6 = document.getElementById('food2cat6')
let  abrirInfo3Cat6 = document.getElementById('food3cat6')
let  abrirInfo4Cat6 = document.getElementById('food4cat6')
let  abrirInfo5Cat6 = document.getElementById('food5cat6')
let  abrirInfo6Cat6 = document.getElementById('food6cat6')
let  abrirInfo7Cat6 = document.getElementById('food7cat6')
let  abrirInfo8Cat6 = document.getElementById('food8cat6')
let  abrirInfo9Cat6 = document.getElementById('food9cat6')
let  abrirInfo10Cat6 = document.getElementById('food10cat6')


function closeCat1 () {
    secPrin.style.display = 'block'
    intoCat1.style.display = 'none'
}
function closeCat2 () {
    secPrin.style.display = 'block'
    intoCat2.style.display = 'none'
}
function closeCat3 () {
    secPrin.style.display = 'block'
    intoCat3.style.display = 'none'
}
function closeCat4 () {
    secPrin.style.display = 'block'
    intoCat4.style.display = 'none'
}
function closeCat5 () {
    secPrin.style.display = 'block'
    intoCat5.style.display = 'none'
}
function closeCat6 () {
    secPrin.style.display = 'block'
    intoCat6.style.display = 'none'
}

function oppenCat1 () {
    secPrin.style.display = 'none'
    intoCat1.style.display = 'block'
}
function oppenCat2 () {
    secPrin.style.display = 'none'
    intoCat2.style.display = 'block'
}
function oppenCat3 () {
    secPrin.style.display = 'none'
    intoCat3.style.display = 'block'
}
function oppenCat4 () {
    secPrin.style.display = 'none'
    intoCat4.style.display = 'block'
}
function oppenCat5 () {
    secPrin.style.display = 'none'
    intoCat5.style.display = 'block'
}
function oppenCat6 () {
    secPrin.style.display = 'none'
    intoCat6.style.display = 'block'
}