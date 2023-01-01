"use strict"

// SI LE HAGO MOOUSEOVER A 'header__menu' ADD ACTIVO
// SI HACEMOS MOUSEOOUT 'header__menu' REMOVE ACTIVO

// SI LE HAGO MOOUSEOVER A 'header__submenu' ADD ACTIVO
// SI HACEMOS MOUSEOOUT 'header__submenu' REMOVE ACTIVO
console.log('Im JavaScript :D')
let colorMenu = document.querySelectorAll('.header__menu')
let listaMenu = document.querySelector('.header__submenuactivo')
let menuHover = document.querySelector('.header__menuactivo')
let bgMenu    = document.querySelectorAll('.header__bg')
let linesMenu = document.querySelectorAll('.lines__mmovil')
let menuMovil = document.querySelector('.btn__movil')
let bgMenuMovil = document.querySelector('.header__menumovil')
let menumovil__cont  = document.querySelector('.menumovil__cont')
let logoZindex = document.querySelector('.header__logoimg')
let artistsMenu = document.querySelector('.open__artist')
let openArtist  = document.querySelector('.submenumovil__artists')
let arrow__backMenu = document.querySelector('.arrow__leftback')
menuMovil.addEventListener( 'click' ,()=>{
    console.log('click')
    linesMenu.forEach((cadaLine,i)=>{
        linesMenu[i].classList.toggle('active')
        bgMenuMovil.classList.toggle('active')
        openArtist.classList.remove('active')
        arrow__backMenu.classList.remove('active')
    })
    
    menumovil__cont.classList.toggle('active')
    logoZindex.classList.toggle('active')
})

artistsMenu.addEventListener('click',()=>{
    console.log('quepasa??')
    openArtist.classList.add('active')
    arrow__backMenu.classList.add('active')
})
arrow__backMenu.addEventListener('click',()=>{
    openArtist.classList.remove('active')
    arrow__backMenu.classList.remove('active')
})
bgMenu.forEach((cadabgMenu,i)=>{

    bgMenu[i].addEventListener('mouseover',()=>{
        console.log('probando')
            bgMenu[i].classList.add('activo')
            colorMenu[i].classList.add('activo')
    })

    bgMenu[i].addEventListener('mouseout',()=>{
            bgMenu[i].classList.remove('activo')
            colorMenu[i].classList.remove('activo')
    })
})

menuHover.addEventListener('mouseover',()=>{
    listaMenu.classList.add('activo')
listaMenu.addEventListener('mouseover',()=>{
    listaMenu.classList.add('activo')
})
})

menuHover.addEventListener('mouseout',()=>{
    listaMenu.classList.remove('activo')
listaMenu.addEventListener('mouseout',()=>{
    listaMenu.classList.remove('activo')
})
})


