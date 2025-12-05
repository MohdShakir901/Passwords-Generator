const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];


let passOne=document.getElementById("pass-one")
let passTwo=document.getElementById("pass-two")

let generateBtn=document.getElementById("generate-btn")

generateBtn.addEventListener("click", function(){
    let passLength=15
    let pass1="", pass2=""
    
    for(let i=0; i<passLength; i++){
        pass1+=characters[Math.floor(Math.random()*characters.length)]
        pass2+=characters[Math.floor(Math.random()*characters.length)]
    }
    passOne.textContent=pass1
    passTwo.textContent=pass2
    })

    