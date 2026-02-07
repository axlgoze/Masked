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

function handleInput(mask, pressedKey, formattedInput){
    if (pressedKey === "Backspace") {
        if(formattedInput.length === 0) return;

        const lastItem = formattedInput[formattedInput.length - 1];
        if (lastItem === "-" || lastItem === "/") {
            formattedInput.pop();
        }
        formattedInput.pop();
        return;
    }

    if (!/^\d$/.test(pressedKey)) return;

    if (formattedInput.length < mask.length) {
        const nextCharInMask = mask[formattedInput.length];

        if (nextCharInMask === "-" || nextCharInMask === "/") {
            formattedInput.push(nextCharInMask)
        }
        formattedInput.push(pressedKey);
        
    }
    
}

applyMask(inputCard,maskCard);
applyMask(inputDate,maskDate);
applyMask(inputCvv,maskCvv);


