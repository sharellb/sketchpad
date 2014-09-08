$(document).ready( function () {
	for (var i = 0; i <=16; i++) {
		$('#grid').append('<tr class="row"></tr>');
	}
	for (var j = 0; j <=16; j++) {
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
