//business logic
function Movie (name, time, age, quantity) {
  this.name = name;
  this.time = time;
  this.age = age;
  this.quantity = quantity;
}


Movie.prototype.ticket = function() {
  if (this.time <= "14:00") {
    var price = 7;
  } else if (this.time > "14:00" && this.age < 60) {
    var price = 10;
  } else if ( this.time > "14:00" && this.age >= 60) {
    var price = 8;
  }
  return "$" + (this.quantity * price);
}



// user interface logic
$(document).ready(function() {
  $("#add-tickets").click(function() {
    $("#ticket-choice").append('<div id="ticket-choice">' +
    '<h3>Select a ticket:</h3>' + '<select class="form-control" id="age">' + '<option value="8">Student/Senior Discount: $8</option>' + '<option value="7">Youth/Matinee: $7</option>' + '<option value="10">Regular Price: $10</option>' + '</select>' + '<h3>Select quantity:</h3>' + '<div class="form-group">' + '<label for="quantity">Quantity:</label>' + '<input type="number" class="form-control" id="quantity">' + '</div>');
  });

  $("form#movieChoices").submit(function(event) {
    event.preventDefault();
debugger;
    var selectedName = $("#movieName").val();
    var selectedTime = $("#movieTime").val();
    var selectedAge = parseInt($("#age").val());
    var selectedQty = parseInt($("input#quantity").val());
    var newTicket = new Movie(selectedName, selectedTime, selectedAge, selectedQty);
    var total = newTicket.ticket();

    $("#show-ticket").show();
    $(".movie-name").text(selectedName);
    $(".movie-time").text(selectedTime);
    $(".quantity").text(selectedQty);
    $(".total").text(total);
  });

});
