// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var newStatus = $(this).data("newstatus");

    var newDevouredStatus = {
      devoured: newStatus
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredStatus
    }).then(
      function() {
        console.log("changed sleep to", newstatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    //$(".delete-cat").on("click", function(event){
    //  
    //event.preventDefault();
    //  $.ajax("/api.cats/"+id,{
    //    type: "DELETE",
    //  }).then(
    //    function()
    //  )
    //  });
     
    );
  });
});