
$(document).ready(function() {
	$('.form-container').on('submit',function(event){
		event.preventDefault();
		var quantity = $('#quantity').val();
		var description = $('#description').val();
		var price = '$' + $('#price').val();
		$('.list').append('<li class="item">' + quantity + " " + description + " " + price + '</li>')
	});

})




// form on submit

   // get form values
   // create li element
   // append element to list

// list item on click
  // if item has a class of complete
    // delete item
  // else 
    // make complete (class)