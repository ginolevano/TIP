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

menuMovil.addEventListener( 'click' ,()=>{
    console.log('click')
    linesMenu.forEach((cadaLine,i)=>{
        linesMenu[i].classList.toggle('active')
        bgMenuMovil.classList.toggle('active')
    })
})

bgMenu.forEach((cadabgMenu,i)=>{

    bgMenu[i].addEventListener('mouseover',()=>{
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


// let tip      = document.querySelector('.bannertip__img')
// let btn      = document.querySelector('.bannertip__bgbtn')
// window.addEventListener('scroll',(e)=>{

//     let pixeles  = window.scrollY;
//     let altoV    = window.innerHeight;
//     let Dista    = tip.offsetTop;
//     let detecTop = Dista - (altoV / 12)

//     console.log(pixeles)
//     console.log(detecTop)

//     if(pixeles >= detecTop){
//         tip.style.transform = `translateY(-${(pixeles - detecTop) + 0.4 }px)`
//         btn.style.transform = `translateY(-${(pixeles - detecTop) + 0.4}px)`
//         parallax.style.transform = `translateY(-${(pixeles - detecTop) + .1}px)`
        
                                            
        
//     }else{
//         tip.style.transform = `translateY(60px)`
//         btn.style.transform = `translateY(-0px)`
//         parallax.style.transform = `translateY(0px)`
//     }

    
    // if( pixeles >= detecTop ){
    //     tip.style.transform = `translateY(-${(pixeles - detecTop) / 2}px)`
    //     // tip.style.transition = `all 0s ease`
    //     btn.style.transform = `translateY(-${(pixeles - detecTop) / 1}px)`
        
    // }else{
    //     tip.style.transform = `translateY(-0px)`
    //     btn.style.transform = `translateY(-0px)`

    // }

// })

// let parallax = document.querySelector('.artist__parallax')
//     window.addEventListener('scroll',(e)=>{
    
//     let pixel = window.scrollY;
//     let altoV = window.innerHeight;
//     let dist  = parallax.offsetTop;
//     let detecTop = dist;

//     if ( pixel >= detecTop){
//         parallax.style.transform = `translateY(100%)`
//     }
// })

    // MY. SLIDER DE ARTISTAS
    let left    = document.querySelector('.arrow__left')
    let right   = document.querySelector('.arrow__right')
    let grande  = document.querySelector('.artist__imgslider')
    let img     = document.querySelectorAll('.artist__img')
    //MI POSICION
    let foto = 0
    let ancho = 100 / img.length

    right.addEventListener('click',()=>{
        
        foto++
        console.log('right')
        if( foto === img.length ){
            foto = 0
        }
        grande.style.transform =`translateX(-${ ancho * foto }%)`

        
    })
    
    left.addEventListener('click',()=>{
        if(foto === 0){
            foto = img.length
        }
        console.log('left')
        foto--
        grande.style.transform=`translateX(-${ foto * ancho }%)`
    })