'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}
function callBackFn(url){
console.log(url);
var projectHTML = url['title'] + "<p>" + url['date']  + "</p>" + '<img src="' +
url['image'] + '" class="img" style="width:200px;height:200px;">'+ url['summary'];
$(".details").html(projectHTML);
}
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
 $.get("http://localhost:3000/project/"+idNumber, callBackFn)
	console.log("User clicked on project " + idNumber);
}
