let currentNumbers = [];

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function createNewTable() {
    currentNumbers = [];
    const container = document.getElementById('table-container');
    container.innerHTML = '';
    const table = document.createElement('table');
    table.id = 'random-table';
    container.appendChild(table);
    console.log('Создана новая таблица');
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

    console.log('Добавлено число:', number);
}