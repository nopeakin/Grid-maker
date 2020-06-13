//variable assignments
const size = document.getElementById('sizePicker');
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

//adds an event listener for the submit button and calls makeGrid function
size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(height.value, width.value);
})

/*this function makes the grid
nested for loops insert row to table and insert new cell to the row
'table.innerHTML = null' causes grid dimensions...
to reset each time submit button is clicked;
adds an event listener to newCell variable when a grid cell is clicked
the event listener colors in the correct square when clicked*/
function makeGrid(x, y) {
    table.innerHTML = null;
    for (let i = 0; i <= x - 1; i++) {
        const rows = table.insertRow(i);
        for (let j = 0; j <= y - 1; j++) {
            const newCell = rows.insertCell(j);
            newCell.addEventListener('click', (event) => {
                newCell.style.backgroundColor = color.value;

            })
        }
    }
}
