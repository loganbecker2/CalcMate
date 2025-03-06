let matrixA = [];
let matrixB = [];

function createMatrix(matrix) {
    const rows = document.getElementById(`rows${matrix}`).value;
    const cols = document.getElementById(`cols${matrix}`).value;
    const matrixDiv = document.getElementById(`matrix${matrix}`);

    let tableHTML = `<h3>Matrix ${matrix}</h3><table class="matrix" id="${matrix}Table">`;

    for (let i = 0; i < rows; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < cols; j++) {
            tableHTML += `<td><input type="number" id="${matrix}${i}${j}" value="0"></td>`;
        }
        tableHTML += "</tr>";
    }

    tableHTML += "</table>";
    matrixDiv.innerHTML = tableHTML;
}

function getMatrixData(matrix) {
    const rows = document.getElementById(`rows${matrix}`).value;
    const cols = document.getElementById(`cols${matrix}`).value;
    const matrixData = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(parseFloat(document.getElementById(`${matrix}${i}${j}`).value) || 0);
        }
        matrixData.push(row);
    }
    return matrixData;
}

function setMatrixResult(resultMatrix) {
    let table = document.getElementById('resultMatrix');
    table.innerHTML = '';
    resultMatrix.forEach(row => {
        let tr = document.createElement('tr');
        row.forEach(val => {
            let td = document.createElement('td');
            td.textContent = val.toFixed(2);
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

function addMatrices() {
    matrixA = getMatrixData('A');
    matrixB = getMatrixData('B');
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        alert("Matrices must be of the same size for addition");
        return;
    }

    let result = matrixA.map((row, i) => row.map((val, j) => val + matrixB[i][j]));
    setMatrixResult(result);
}

function subtractMatrices() {
    matrixA = getMatrixData('A');
    matrixB = getMatrixData('B');
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        alert("Matrices must be of the same size for subtraction");
        return;
    }

    let result = matrixA.map((row, i) => row.map((val, j) => val - matrixB[i][j]));
    setMatrixResult(result);
}

function multiplyMatrices() {
    matrixA = getMatrixData('A');
    matrixB = getMatrixData('B');
    if (matrixA[0].length !== matrixB.length) {
        alert("Number of columns in Matrix A must equal number of rows in Matrix B for multiplication");
        return;
}

    let result = matrixA.map((row, i) =>
    matrixB[0].map((_, j) =>
        row.reduce((sum, val, k) => sum + val * matrixB[k][j], 0)));
    setMatrixResult(result);
}

function transposeMatrix() {
    matrixA = getMatrixData('A');
    let result = matrixA[0].map((_, i) => matrixA.map(row => row[i]));
    setMatrixResult(result);
}
