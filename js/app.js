
$(document).ready(function() {
	$('.form-container').on('submit',function(event){
		event.preventDefault();
		var quantity = $('#quantity').val();
		var description = $('#description').val();
		var price = '$' + $('#price').val();
		var item_to_add = '<li class="item"><span class="quantity">' + quantity + ' </span><span class="description">' + description + ' </span><span class="price">' + price + '</span><input type="checkbox" class="checkbox"/><input type="button" class="delete" value="Delete"/></li>';
		$('.list').append(item_to_add);
		$('.list').children(':last').fadeIn();
		$('#quantity').val("");
		$('#description').val("");
		$('#price').val("");
	});
	$('.list').on('click', 'input[type="button"]', function(event){
		$(this).parent().remove();
	});
	$('.list').on('change', 'input[type="checkbox"]',function(){
		// if checked
		if ($(this).prop('checked')){
			console.log('checked');
			$(this).parent().css('background-color', 'red');
		}	else {
			$(this).parent().css('background-color', 'antiqueWhite');
		}

	});

})
