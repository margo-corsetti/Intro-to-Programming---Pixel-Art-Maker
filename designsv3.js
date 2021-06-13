/*
Margo Corsetti
06/12/2021
*/


//initialize table and submit button
table = document.getElementById('pixelCanvas');
inputs = document.getElementsByTagName('input')
submit = inputs[2]

//initialize table rows and columns
width = 0;
height = 0;

// Select color input and initial color
colorObj = document.getElementById('colorPicker');
color = `rgb(0,0,0)`;



//create the table
function makeGrid(event) {
  //default behavior is to move to a new page. When I don't provide one, it just relads the page. Avoid reloading by using event.preventDefault
  event.preventDefault();

  //get the rows and columns of the table
  width = document.getElementById('inputWidth').value
  height = document.getElementById('inputHeight').value

  //clear the previous table
  if(width != 0 & height !=0){
    while(table.hasChildNodes()){
      table.removeChild(table.firstChild);
    }
  }

  //create the new table
  for(var i = 0; i < height; i++){
    row = table.insertRow(i);
    for(var j = 0; j < width; j++){
        cell = row.insertCell(j);
        cell.addEventListener('click', paint); //each cell gets a click listener
    }
  }
}

//choose pixel color
function pickColor(event){
  color = event.target.value;
}

//if cell is clicked, it is painted a color
function paint(event){
  event.target.style.backgroundColor = color;
}

submit.addEventListener('click', makeGrid)
colorObj.addEventListener('input',pickColor, false)
