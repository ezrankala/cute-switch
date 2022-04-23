const dark_mode = document.querySelector("body")
const mouth = document.querySelector(".mouth")
const leftEye = document.querySelector(".eye1")
const rightEye = document.querySelector(".eye2")
const switchBtn = document.querySelector(".switchBtn")
const tongue = document.querySelector(".tongue")
const dark_mode_menu = document.querySelector(".color-switch")
const allElements = [dark_mode, mouth, leftEye, rightEye, switchBtn, tongue, dark_mode_menu]
switchBtn.addEventListener("click", happyFace)

function happyFace() {
    allElements.forEach(element => { element.classList.toggle("happy") })
}
