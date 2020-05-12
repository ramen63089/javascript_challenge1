// from data.js
var ufodata = data;

var tbody = d3.select("tbody");
// YOUR CODE HERE!
//get table references
tbody.html("");
data.forEach(function(ufodata) {
    
    var row = tbody.append("tr");
    Object.values(ufodata).forEach(function(value) {
     // Append a cell to the row for each value
     // in the weather report object
        var cell = row.append("td");
        cell.text(value);
   });
});
// ​

 var button = d3.select("#filter-btn");
// ​
 //var form = d3.select(".form-group");
// ​

// ​
// // Create event handlers 
button.on("click", runEnter);
//form.on("submit",runEnter);
// ​
// // Complete the event handler function for the form
function runEnter(){
  // Prevent the page from refreshing
    d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
    var inputElement= d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // console.log(inputValue);
    // console.log(ufo​);

    var filteredData = ufodata.filter(ufo => ufo.datetime === inputValue);

    tbody.html("");

    filteredData.forEach(function(ufodata) {
    
        console.log(ufodata);
        var row = tbody.append("tr");
        Object.values(ufodata).forEach(function(value) {
            console.log(value);
         // Append a cell to the row for each value
         // in the weather report object
            var cell = row.append("td");
            cell.text(value);
       });
    });
};
    
