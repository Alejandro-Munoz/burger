$(function(){
    //create new burger
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#bu").val().trim()
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
        );
      });

    // $(".create-update-form").on('click',function(e){
    //     e.preventDefault;
    //     console.log($(this).data('id'));
    // });
    $(".create-update-form").on("click", function(event) {
        var id = $(this).data("id");
        // var newSleep = $(this).data("newsleep");
    
        var newDevouredState = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("changed devoured to 1");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});