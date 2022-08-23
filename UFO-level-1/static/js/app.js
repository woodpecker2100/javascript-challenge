// from data.js
var tableData = data;

// find tbody in html
let tbody = d3.select("tbody");


// DEFINING FUNCTIONS TO BUILD TABLE STRUCTURE AND TO LISTEN TO EVENTS

//this function builds the table (appending <tr> and <td> for each value to be populated)
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        //for each row in data.js, we insert <tr>
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
        //for each cell, we insert <td> and the value 
            let cell = row.append("td");
            cell.text(val);
       });
    })
}

// the filterListener function will filter the results based on the date field provided on the HTML file.
// to address: Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
function filterListener(){
    d3.event.preventDefault();
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if(date) {
        filteredData = filteredData.filter((row) => row.datetime === date);
    }
    buildTable(filteredData);
}


// Listener for the date filtering
d3.selectAll("#filter-btn").on('click', filterListener);

//Populate tableData from data.js and this will display on the webpage
buildTable(tableData);