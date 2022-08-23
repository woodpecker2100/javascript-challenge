// from data.js
var tableData = data;

// find tbody in html
let tbody = d3.select("tbody");

// defining filter as an array
var filters = [];

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
    let udate = d3.select("#datetime").property("value");
    let ucity = d3.select("#city").property("value");
    let ustate = d3.select("#state").property("value");
    let ucountry = d3.select("#country").property("value");
    let ushape = d3.select("#shape").property("value");
    console.log(udate);
    console.log(ucity);
    console.log(ustate);
    console.log(ucountry);
    console.log(ushape);
    // this will work if you provide all of the information
    filters["datetime"] = udate;
    filters["city"] = ucity;
    filters["state"] = ustate;
    filters["country"] = ucountry;
    filters["shape"] = ushape;
    console.log(filters);
    let filteredData = tableData;
//    if(udate || ucity || ustate || ucountry || ushape) {
//        Object.entries(filters).forEach(([key,value])=> {
//        filteredData =  filteredData.filter(row => row[key]=== value);
//        });

        if(udate) {
            filteredData = filteredData.filter((row) => row.datetime === udate);
        }
        if (ucity) {
            filteredData = filteredData.filter((row) => row.city === ucity);
        }
        if (ustate) {
            filteredData = filteredData.filter((row) => row.state === ustate);
        }
        if (ucountry) {
            filteredData = filteredData.filter((row) => row.country === ucountry);
        }
        if (ushape) {
            filteredData = filteredData.filter((row) => row.shape === ushape);
        }
    
    
    console.log(filteredData);
    // }
    buildTable(filteredData);
}


// Listener for the date filtering
d3.selectAll("#filter-btn").on('click', filterListener);

//Populate tableData from data.js and this will display on the webpage
buildTable(tableData);