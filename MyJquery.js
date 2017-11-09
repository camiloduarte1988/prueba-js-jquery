$(document).ready(function(){
	$("#myform").on('submit', function(event){
		var text = $("#mytext").val();


		event.preventDefault();
		$("#post-twitt").append(
		'<div id="board">'
				+'<div id="pinclose" class="glyphicon glyphicon-remove-circle">'
				+'</div>'
				+'<div class="boxPostContent style-box-right">'
				+ text //variable que imprime el texto escrito en el campo textarea
				

			+'</div>'
			+'<div id="icons">'
					+'<span class="click glyphicon glyphicon-heart likeable" style="color: red" data-counter="0">'
					+'</span>'
					+'<div>'
					+'0'
					+'</div>'
			+'</div>'	
		+'</div>'	
			)
	});

	$('#post-twitt').on('click' , '#pinclose' , function(){
		var $this = $(this);
		$this.parent().hide('slide');
		$('#icons').hide('slide');
	})



})



$(document).on('click','[data-counter]',function(){
	var $this = $(this);
	var counter = parseInt($this.attr("data-counter"));
	var contText = $this.next();
	var counterPlus = counter + 1;
	$this.attr("data-counter",counterPlus);
	contText.html(counterPlus);
});





