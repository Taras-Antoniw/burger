$(function() {
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var newStatus = $(this).data("newstatus");

    var newDevouredStatus = {
      devoured: newStatus
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredStatus
    }).then(
      function() {
        console.log("changed devoured to", newStatus);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
