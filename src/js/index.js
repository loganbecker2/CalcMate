document.addEventListener("DOMContentLoaded", () => {
    let elements = [];
    const goButton = document.querySelector("#go-button");
    elements.push(goButton);
    const inputField = document.querySelector("#input-text");
    elements.push(inputField);
    const resultsContainer = document.querySelector(".results-container");
    elements.push(resultsContainer);
    const sqrtbtn = document.querySelector("#sqrt");
    elements.push(sqrtbtn);
    const sinbtn = document.querySelector("#sin");
    elements.push(sinbtn);
    const cosbtn = document.querySelector("#cos");
    elements.push(cosbtn);
    const tanbtn = document.querySelector("#tan");
    elements.push(sinbtn);


    elements.forEach((e) => {
        if (!e) {
            console.error("One or more elements not found!");
            console.error("Element not found: " + e);
            return;
        }
    });

    sqrtbtn.addEventListener("click", () => {
        inputField.value = 'sqrt(' + inputField.value + ')';
    });

    sinbtn.addEventListener("click", () => {
        inputField.value = 'sin(' + inputField.value + ')';
    });
    cosbtn.addEventListener("click", () => {
        inputField.value = 'cos(' + inputField.value + ')';
    });
    tanbtn.addEventListener("click", () => {
        inputField.value = 'tan(' + inputField.value + ')';
    });
    

    goButton.addEventListener("click", () => {
        let newParagraph = document.createElement("p");
        let text = inputField.value;

        if (text === "") {
            console.log("empty");
            return;
        }

        let result = '';

        try {
            result = math.evaluate(text);
        }
        catch (e) {
            console.log(e);
            result = 'Invalid expression';
        }
        newParagraph.textContent = result;
        resultsContainer.appendChild(newParagraph);
        inputField.value = "";
    });
});
