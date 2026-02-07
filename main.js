const inputCard = document.getElementById("card");
const inputDate = document.getElementById("date");
const inputCvv = document.getElementById("cvv");

//masks -pattern-
const maskCard = "####-####-####-####";
const maskDate = "##/##";
const maskCvv = "###";

function applyMask(inputElement,mask){
    const digits = [];
    inputElement.addEventListener("keydown", e =>{
        if (e.key === 'Tab') {
            return;
        }
        e.preventDefault();
        handleInput(mask,e.key,digits);
        inputElement.value = digits.join("");
    });
}

function handleInput(mask,pressedKey,formattedInput){
    if (!/^\d$/.test(pressedKey) && pressedKey !== "Backspace") return;

    if (pressedKey <= "9" && pressedKey >= "0") {
        if (formattedInput.length + 1 <= mask.length) {
            if (mask[formattedInput.length] === "-" || mask[formattedInput.length] === "/") {
                formattedInput.push(mask[formattedInput.length],pressedKey)
            }else{
                formattedInput.push(pressedKey);
            }
        }
    }
}

applyMask(inputCard,maskCard);
applyMask(inputDate,maskDate);
applyMask(inputCvv,maskCvv);


