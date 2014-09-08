$(document).ready( function () {

	var rows = 16;
	var cols = 16;


	for (var i = 0; i <= rows; i++) {
		$('#grid').append('<tr class="row"></tr>');
	}

	for (var j = 0; j <= cols; j++) {
		$('.row').append('<td><div class="box"></div></td>');
	}


	$('.box').hover (
		function() {
			$(this).css("background-color", "blue");
	});

	$('#clear').click(function(){
		$('.box').css("background-color", "white");
	});

});
