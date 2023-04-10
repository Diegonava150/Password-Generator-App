const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let buttonEl = document.getElementById("button-el")
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function generateRandomPasswords() {
    password1El.textContent = ""
    password2El.textContent = ""
    for (let i = 0; i < 15; i++) {
        random1Character = characters[Math.floor(Math.random() * characters.length)]
        random2Character = characters[Math.floor(Math.random() * characters.length)]
        password1El.textContent += random1Character
        password2El.textContent += random2Character
    }
}

buttonEl.addEventListener("click", function () {
    generateRandomPasswords()
})

