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
