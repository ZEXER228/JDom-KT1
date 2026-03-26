let currentNumbers = [];

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

window.onload = function () {
    createInitialTable();
};

function createInitialTable() {
    currentNumbers = [];

    const container = document.getElementById('table-container');
    container.innerHTML = '';

    const table = document.createElement('table');
    table.id = 'random-table';

    for (let i = 0; i < 5; i++) {
        let row = table.insertRow();

        for (let j = 0; j < 6; j++) {
            let number = getRandomNumber();
            currentNumbers.push(number);

            let cell = row.insertCell();
            cell.textContent = number;

            if (number >= 50) {
                cell.classList.add('orange');
            }
        }
    }

    container.appendChild(table);
}

function createNewTable() {
    createInitialTable();
}

function foo() {
    const number = getRandomNumber();
    currentNumbers.push(number);

    const table = document.getElementById('random-table');
    let lastRow = table.rows[table.rows.length - 1];

    if (!lastRow || lastRow.cells.length >= 6) {
        lastRow = table.insertRow();
    }

    const cell = lastRow.insertCell();
    cell.textContent = number;

    if (number >= 50) {
        cell.classList.add('orange');
    }
}