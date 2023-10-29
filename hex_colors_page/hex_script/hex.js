const copyCodeColor = document.getElementById('button_clipboard_hex');
const changeColorButton = document.querySelector("#change_color_button_hex");
const color = document.querySelector('.color');

const hexColors = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];

changeColorButton.addEventListener("click", ()=>{
    let valHex = "#";
    for(let i = 0; i < 6; i++){
        valHex += hexColors[getRandomNumbers()];
    }
    color.textContent = valHex;
    document.body.style.backgroundColor = valHex;
});

copyCodeColor.addEventListener("click", () => {
    let colorCode = color.innerHTML
    navigator.clipboard.writeText(colorCode)
    alert(`Cor ${colorCode} copiado para área de transferência`)
});

function getRandomNumbers(){
    return Math.floor(Math.random() * hexColors.length);
}