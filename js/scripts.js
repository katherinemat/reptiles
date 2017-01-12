$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();

    alert("hey");
    var animal = $("#animal option:selected").text();

    if (animal==="Turtle") {
      $(".turtle").show();
    } else if (animal==="Snake") {
      $(".snake").show();
    } else if (animal==="Insects") {
      $(".insects").show();
    } else {
      $(".nothing").show();
    }

  });
});
