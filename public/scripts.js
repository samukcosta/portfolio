const modalOverlay = document.querySelector(".modal_overlay")
const cards = document.querySelectorAll(".card")
const showInfo = document.querySelector("#showHideInfo")
const plusInfo = document.querySelector(".plusInfo")
const helloWorld = "Hello, World!"
const element = document.querySelector('.word')

const person = '"Se quiser conhecer uma pessoa, não ouça nada do que ela diz. Apenas observe seus atos." - Kléber Novartes'

function typeWrite(helloWorld) {
    element.innerHTML = ''
    const textArray = helloWorld.split('');
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 75 * i)
    })
}

if (element) typeWrite(helloWorld)

document.querySelector("#about").addEventListener("click", function(){
    showInfo.innerHTML = "<i class='fas fa-minus info'></i>Informações"
    plusInfo.classList.remove("active")
    typeWrite(person)
})

if (showInfo){
    showInfo.addEventListener("click", function(){
        if (showInfo.textContent === " Informações"){
            showInfo.innerHTML = "<i class='fas fa-minus info'></i>Informações"
            plusInfo.classList.remove("active")
            typeWrite(person)
        } else {
            showInfo.innerHTML = "<i class='fas fa-plus info'></i> Informações"
            plusInfo.classList.add("active")
            typeWrite(helloWorld)
        }
    })
}

for (let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active");
        let input = card.getElementsByTagName('input')
        let src = input[0].value
        console.log(src)
        document.getElementById('video').src = src
    })
}

document.querySelector(".close").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    document.getElementById('video').src = ""
})
