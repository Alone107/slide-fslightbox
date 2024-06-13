// const afishaClose = document.querySelector('.afisha__close')
// const afisha = document.querySelector('.afisha')

// afishaClose.addEventListener('click', () => {
//     afisha.style.display = 'none'
// })

$(document).ready(function () {
    $(".show-slider").slick({
        dots: true,
        centerPadding: "0px",
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    })
    if ($(window).width() <= 480) {
        $(".advantages-slider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0px",
            dots: true,
            speed: 300,
            responsive: [
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        })
    }
    if ($(window).width() <= 480) {
        $(".main_gallery-wrapper").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            centerPadding: "0",
        })
    }
})
;(function () {
    var throttle = function (type, name, obj) {
        obj = obj || window
        var running = false
        var func = function () {
            if (running) {
                return
            }
            running = true
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name))
                running = false
            })
        }
        obj.addEventListener(type, func)
    }

    throttle("resize", "optimizedResize")
})()

// Событие, сюда ваш код
window.addEventListener("optimizedResize", function () {
    testFunction() // вызов той самой функции
})

// Функция, чтобы было удобно вызвать
function testFunction() {
    if (window.innerWidth < 480) {
        let btn = document.querySelector(".menu_btn")
        let menu = document.getElementById("header-adaptive")

        btn.addEventListener("click", () => {
            btn.classList.toggle("menu_btn-open")
            menu.classList.toggle("burger_active")
        })
    }
}

testFunction()

let room1 = document.querySelector(".room-1")
let room2 = document.querySelector(".room-2")
let room3 = document.querySelector(".room-3")
let room4 = document.querySelector(".room-4")
let room5 = document.querySelector(".room-5")
let room6 = document.querySelector(".room-6")
let room7 = document.querySelector(".room-7")
let room8 = document.querySelector(".room-8")
let room9 = document.querySelector(".room-9")
let roomImg1 = document.querySelector(".room-1-img")
let roomImg2 = document.querySelector(".room-2-img")
let roomImg3 = document.querySelector(".room-3-img")
let roomImg4 = document.querySelector(".room-4-img")
let roomImg5 = document.querySelector(".room-5-img")
let roomImg6 = document.querySelector(".room-6-img")
let roomImg7 = document.querySelector(".room-7-img")
let roomImg8 = document.querySelector(".room-8-img")
let roomImg9 = document.querySelector(".room-9-img")

room1.addEventListener("mouseenter", () => {
    roomImg1.style.opacity = "1"
    roomImg1.style.zIndex = "9999"
})

room1.addEventListener("mouseleave", () => {
    roomImg1.style.opacity = "0"
    roomImg1.style.zIndex = "-1"
})

room2.addEventListener("mouseenter", () => {
    roomImg2.style.opacity = "1"
    roomImg2.style.zIndex = "9999"
})

room2.addEventListener("mouseleave", () => {
    roomImg2.style.opacity = "0"
    roomImg2.style.zIndex = "-1"
})

room3.addEventListener("mouseenter", () => {
    roomImg3.style.opacity = "1"
    roomImg3.style.zIndex = "9999"
})

room3.addEventListener("mouseleave", () => {
    roomImg3.style.opacity = "0"
    roomImg3.style.zIndex = "-1"
})

room4.addEventListener("mouseenter", () => {
    roomImg4.style.opacity = "1"
    roomImg4.style.zIndex = "9999"
})

room4.addEventListener("mouseleave", () => {
    roomImg4.style.opacity = "0"
    roomImg4.style.zIndex = "-1"
})

room5.addEventListener("mouseenter", () => {
    roomImg5.style.opacity = "1"
    roomImg5.style.zIndex = "9999"
})

room5.addEventListener("mouseleave", () => {
    roomImg5.style.opacity = "0"
    roomImg5.style.zIndex = "-1"
})

room6.addEventListener("mouseenter", () => {
    roomImg6.style.opacity = "1"
    roomImg6.style.zIndex = "9999"
})

room6.addEventListener("mouseleave", () => {
    roomImg6.style.opacity = "0"
    roomImg6.style.zIndex = "-1"
})

room7.addEventListener("mouseenter", () => {
    roomImg7.style.opacity = "1"
    roomImg7.style.zIndex = "9999"
})

room7.addEventListener("mouseleave", () => {
    roomImg7.style.opacity = "0"
    roomImg7.style.zIndex = "-1"
})

room8.addEventListener("mouseenter", () => {
    roomImg8.style.opacity = "1"
    roomImg8.style.zIndex = "9999"
})

room8.addEventListener("mouseleave", () => {
    roomImg8.style.opacity = "0"
    roomImg8.style.zIndex = "-1"
})

room9.addEventListener("mouseenter", () => {
    roomImg9.style.opacity = "1"
    roomImg9.style.zIndex = "9999"
})

room9.addEventListener("mouseleave", () => {
    roomImg9.style.opacity = "0"
    roomImg9.style.zIndex = "-1"
})

let galleryImgs = document.querySelectorAll(".main_gallery-img")

let galleryImgHidden = document.querySelector(".main_gallery_img-hidden")
let galleryImgHidden1 = document.querySelector(".main_gallery_img-1")
let galleryImgHidden2 = document.querySelector(".main_gallery_img-2")
let galleryImgHidden3 = document.querySelector(".main_gallery_img-3")
let galleryImgHidden4 = document.querySelector(".main_gallery_img-4")
let galleryImgHidden5 = document.querySelector(".main_gallery_img-5")
let galleryImgHidden6 = document.querySelector(".main_gallery_img-6")
let galleryImgHidden7 = document.querySelector(".main_gallery_img-7")
let galleryImgHidden8 = document.querySelector(".main_gallery_img-8")
let galleryImgHidden9 = document.querySelector(".main_gallery_img-9")
let galleryImgHidden10 = document.querySelector(".main_gallery_img-10")
let close = document.querySelector(".img-close")

if (window.innerWidth >= 744) {
    for (let galleryImg = 0; galleryImg < galleryImgs.length; galleryImg++) {
        galleryImgs[0].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden1.style.opacity = "1"
            galleryImgHidden1.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden1.style.opacity = "0"
            galleryImgHidden1.style.zIndex = "9"
        })
        galleryImgs[1].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden2.style.opacity = "1"
            galleryImgHidden2.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden2.style.opacity = "0"
            galleryImgHidden2.style.zIndex = "9"
        })
        galleryImgs[2].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden3.style.opacity = "1"
            galleryImgHidden3.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden3.style.opacity = "0"
            galleryImgHidden3.style.zIndex = "9"
        })
        galleryImgs[3].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden4.style.opacity = "1"
            galleryImgHidden4.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden4.style.opacity = "0"
            galleryImgHidden4.style.zIndex = "9"
        })
        galleryImgs[4].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden5.style.opacity = "1"
            galleryImgHidden5.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden5.style.opacity = "0"
            galleryImgHidden5.style.zIndex = "9"
        })
        galleryImgs[5].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden6.style.opacity = "1"
            galleryImgHidden6.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden6.style.opacity = "0"
            galleryImgHidden6.style.zIndex = "9"
        })
        galleryImgs[6].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden7.style.opacity = "1"
            galleryImgHidden7.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden7.style.opacity = "0"
            galleryImgHidden7.style.zIndex = "9"
        })
        galleryImgs[7].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden8.style.opacity = "1"
            galleryImgHidden8.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden8.style.opacity = "0"
            galleryImgHidden8.style.zIndex = "9"
        })
        galleryImgs[8].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden9.style.opacity = "1"
            galleryImgHidden9.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden9.style.opacity = "0"
            galleryImgHidden9.style.zIndex = "9"
        })
        galleryImgs[9].addEventListener("click", () => {
            galleryImgHidden.style.display = "block"
            galleryImgHidden10.style.opacity = "1"
            galleryImgHidden10.style.zIndex = "10000"
        })
        close.addEventListener("click", () => {
            galleryImgHidden.style.display = "none"
            galleryImgHidden10.style.opacity = "0"
            galleryImgHidden10.style.zIndex = "9"
        })
    }
}

const img = document.querySelector(".intro")

if (window.innerWidth <= 1000) {
    img.insertAdjacentHTML(
        "afterbegin",
        '<img src="./img/adaptive-bg/intro/intro-1000.png" class="intro__img__bg">'
    )
} else if (window.innerWidth <= 768) {
    img.insertAdjacentHTML(
        "afterbegin",
        '<img src="./img/adaptive-bg/intro/intro-768.png" class="intro__img__bg">'
    )
} else {
    img.insertAdjacentHTML(
        "afterbegin",
        '<img src="./img/intro.png" class="intro__img__bg">'
    )
}

if (window.innerWidth <= 1000) {
    document.querySelector(".main_gallery").classList.add("container")
    const img = document.querySelectorAll(".remove")

    for (let i = 0; i < img.length; i++) {
        const imgs = img[i]
        imgs.remove()
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute("href").substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    })
}
