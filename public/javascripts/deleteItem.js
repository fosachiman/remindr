$(".submit").on("click", function(e) {
   e.preventDefault();

   //pull new note from html form input & trim for easier comparison
   var newitem = $(".dataItem").val().trim();
   $(".dataItem").each(function() {
     if($(this).text().trim().toLowerCase() === [0].toLowerCase()) {
       return;
     }
   });

   //after checking for the duplicates, if duplicate, alert! Then slideback

   //adding newNote into the exisiting table
   var newRow = $("<tr>");
   var noteTd = $("<td>").addClass("note-td").append(newitem);
   var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");

   //Try to add a checkbox with the strike-thru like this?
   var deleteTd = $("<td>").append(deleteBtn);

   //add strikethru button on the add click, just like the delete button
   var strikeBtn = $("<button>").addClass("btn btn-success").append("Done");
   var strikeTd = $("<td>").append(strikeBtn);


   newRow.append(noteTd).append(deleteTd).append(strikeTd);
   $("tbody").append(newRow);

   //empty newNote field
   $(".dataItem").val("").focus();
 });

 //functionality of delete button
 $("table").on("click", ".btn-danger", function() {
   if($("tr").length > 1) {
     $(this).parent().parent().remove();
   }

 //Need functionality of doneBtn.
 });

});
