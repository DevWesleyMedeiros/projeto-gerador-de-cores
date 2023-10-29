const buttonChangeColor = document.getElementById('change_color_button_normal_colors')
const color = document.querySelector('.color')
const buttonCopyColor = document.querySelector("#copy_normal_colors")

const colors = ["blue", "red", "yellow", "orange", "white", "black", "brown", "green", "gray" ,"purple", "pink", "indigo", "violet"]

buttonCopyColor.addEventListener('click', ()=>{
    navigator.clipboard.writeText(color.innerHTML)
})
buttonChangeColor.addEventListener('click', ()=>{
    const randomNumbers = getRandomNumbers()
    document.body.style.backgroundColor = colors[randomNumbers]
    color.textContent = colors[randomNumbers]
})

function getRandomNumbers(){
    return Math.floor(Math.random() * colors.length)
}