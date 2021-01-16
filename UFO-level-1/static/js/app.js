// from data.js
var tableData = data;

// YOUR CODE HERE!

//Create function to display tabulated data in <tbody>
function renderTable(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};


//Delete previously loaded data
function deleteTable () {
    d3.select("tbody")
        .selectAll("tr").remove()
        .selectAll("td").remove();
};

//Preview data
console.log(tableData);

//Initial data display
renderTable(tableData);

//Create button variable
var button = d3.select("#filter-btn")

//Make data filterable and display filtered data
button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTable();
  var date = d3.select("#datetime").property("value");

    if (date.trim() === "") {
        //If no date input, display whole database
        var filteredData = tableData;
    
    } else {
        //Show filtered data
        var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === date.trim());
    };

    //Display "No Records Found" if no record don't exist in database
    if (filteredData.length== 0) {
        d3.select("tbody")
            .append("tr")
            .append("td")
                .attr("colspan", 8)
                .html("<h3> No Records Found</h4>");
    };

    console.log(filteredData);
    renderTable(filteredData);
});