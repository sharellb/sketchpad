$(document).ready(function () {
	console.log("hello");
	for (var i = 1; i <=17; i++) {
		$('#container').append('<div id="box">' + i + '</div>')
	}
})