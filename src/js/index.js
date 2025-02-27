document.addEventListener("DOMContentLoaded", () => {
    let elements = [];
    const goButton = document.querySelector("#go-button");
    elements.push(goButton);
    const inputField = document.querySelector("#input-text");
    elements.push(inputField);
    const resultsContainer = document.querySelector(".results-container");
    elements.push(resultsContainer);

    elements.forEach((e) => {
        if (!e) {
            console.error("One or more elements not found!");
            return;
        }
    });
    

    goButton.addEventListener("click", () => {
        let newParagraph = document.createElement("p");
        let text = inputField.value;
        newParagraph.textContent = text;
        resultsContainer.appendChild(newParagraph);
        inputField.value = "";
    });
});
