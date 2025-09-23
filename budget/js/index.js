let Hspan = document.querySelector("header span")
let Form = document.querySelector("form")
let Fbtn = document.querySelector("form button")
let Pbtn = document.querySelector("p button")
let svg = document.querySelector("svg")

const Dspan = document.querySelectorAll("section span")
const a = document.querySelectorAll("a")
const label = document.querySelectorAll("form label")
const input = document.querySelectorAll(" form input")
const Sinput = document.querySelectorAll("section input")
const h4 = document.querySelectorAll("h4")

//big-area
let bottomSm = document.querySelector(".bottom-sm")
let bottomLar = document.querySelector(".bottom-lar")

//add-class
input.forEach(input => input.classList.toggle("form-input"))
Sinput.forEach(Sinput => Sinput.classList.remove("form-input"))  //clear all  Section-input's class
label.forEach(label => label.classList.add("font-sm", "font-big", "black"))
Pbtn.classList.add("font-min", "font-fat", "text-btn")
a.forEach(a => a.classList.toggle("text-a", "font-fat"))
h4.forEach(h4 => h4.classList.add("font-med", "black"))
Dspan.forEach(Dspan => Dspan.classList.add("font-tiny", "font-big", "black"))

svg.style.fill = "red"
//action



Pbtn.addEventListener("click", function () {
    input[0].value = "test"
    input[1].value = "123456"
}
)

a[0].addEventListener("click", function () {
    bottomSm.style.display = "none"
    bottomLar.style.display = "block"
    Hspan.innerHTML = "创建新帐户"

})

a[1].addEventListener("click", function () {
    bottomSm.style.display = "block"
    bottomLar.style.display = "none"
})
