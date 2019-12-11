
// Select size input
const intHeight = document.getElementById('inputHeight');
const intWidth = document.getElementById('inputWidth');

// Select color input
const hexPicker = document.getElementById('colorPicker');

const tblElement = document.getElementById('pixelCanvas');

// Get submit

const frmSubmit = document.getElementById('sizePicker');
const pTest = document.getElementById('pTest');

// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {

// Your code goes here!
    event.preventDefault();
    var stgTable = ""
    for(var intCountHeight = 0; intCountHeight < height; intCountHeight++) {
        stgTable = stgTable + "<tr>";
        for(var intCountWidth = 0; intCountWidth < width; intCountWidth++) {
           stgTable = stgTable + "<td></td>"
           };
        stgTable = stgTable + "</tr>";
    };

    tblElement.innerHTML = stgTable;

}

function respondToTheClick(evt) {
    if (evt.target.nodeName === 'TD') {  // ← verifies target is desired element
        var color = hexPicker.value
        
        evt.target.style.backgroundColor = color;
    }

}

//Listener for submit button
//frmSubmit.addEventListener('click', makeGrid(10,5), true);
frmSubmit.addEventListener('submit', function(event){
  event.preventDefault();
  var height = intHeight.value;
  var width = intWidth.value;

   makeGrid(height,width);
});

//Listener for table
tblElement.addEventListener('click', respondToTheClick);

