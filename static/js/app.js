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



// const button = d3.select("#button");
// const input = d3.select("#patient-form-input")
// const table = d3.select(".col-md-12").append("table")
// const thead = table.append("thead")
// const thead_row = thead.append("row")
// thead_row.append("th").text("Full Name")
// thead_row.append("th").text("Age")
// thead_row.append("th").text("Blood Type")
// const tbody = table.append("tbody")
// const handler = function () {
//   let bloodType = d3.select("#patient-form-input").property("value")
//   console.log(bloodType)
//   // Use the form input to filter the data by blood type
//   let filterData = data.filter(e => e.bloodType === bloodType)
//   filterData.forEach(e => {
//     let row = tbody.append("tr")
//     row.append("td").text(e.fullName)
//     row.append("td").text(e.age)
//     row.append("td").text(e.bloodType)
//   })
// }
// // Complete the click handler for the form
// button.on("click", handler)