const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const simpleCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const words =["Fish", "Elephant", "Hammer", "Festival", "Brownie","Tongue", "Engineering", "Pizza", "Monster", "Habitat"]

const otherCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let getPassword=document.getElementById("getPassword-btn");
let firstPasswordEl=document.getElementById("firstPassword-el");
let secondPasswordEl=document.getElementById("secondPassword-el");
let firstPassword = [];
let secondPassword = [];
let additionalArray =[];
let additionalArray2 =[];

function generatePassword() {
    for (let i=0; i < words.length; i++) {
        for(let j=0; j < 2; j++){
        additionalArray[j] = words[Math.floor(Math.random() * words.length)] + otherCharacters[Math.floor(Math.random() * otherCharacters.length)];
        firstPassword.push(additionalArray);
        firstPasswordEl.textContent = firstPassword[j].join('');
        }

        for(let j=0; j < 15; j++){
        additionalArray2[j] = simpleCharacters[Math.floor(Math.random() * simpleCharacters.length)];
        secondPassword.push(additionalArray2);
        secondPasswordEl.textContent = secondPassword[j].join('');
        }   
    }
}

function copyFirstPassword() {
    var r = document.createRange();
    r.selectNode(document.getElementById("firstPassword-el"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Password has been copied.");
}

function copySecondPassword() {
    var r = document.createRange();
    r.selectNode(document.getElementById("secondPassword-el"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Password has been copied.");
}