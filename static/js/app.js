// from data.js
const tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
const filter = d3.select("#filter-btn");
const reset = d3.select("#reset-btn");

const populate = function(ufoData) {
    ufoData.forEach(info => {   
        let row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(info[column]))
    });
}

//Populate the table

populate(tableData);

const filterButton = function() {
    d3.event.preventDefault();
	
	let searchDate = d3.select("#datetime").property("value");
	let searchCity = d3.select("#city").property("value");
	let searchState = d3.select("#state").property("value");
	let searchCountry = d3.select("#country").property("value");
	let searchShape = d3.select("#shape").property("value");

	let filteredDatas = data;

	if (searchDate != ""){
    	filteredDatas = filteredDatas.filter(filterdata => filterdata.datetime === searchDate);
    }
    if (searchCity !=""){
    	filteredDatas = filteredDatas.filter(filterdata => filterdata.city.toLowerCase() === searchCity.toLowerCase());
    }
    if (searchState !=""){
        filteredDatas = filteredDatas.filter(filterdata => filterdata.state.toLowerCase() === searchState.toLowerCase());
        }
    if (searchCountry !=""){
        filteredDatas = filteredDatas.filter(filterdata => filterdata.country.toLowerCase() === searchCountry.toLowerCase());
        }
    if (searchShape !=""){
        filteredDatas = filteredDatas.filter(filterdata => filterdata.shape.toLowerCase() === searchShape.toLowerCase());
        }

    tbody.html('');
    populate(filteredDatas);
}

//Filter button

filter.on("click", filterButton);

const resetButton = function() {
    tbody.html('');
	populate(tableData);
}

//Reset button
reset.on("click", resetButton);
