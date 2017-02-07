$( document ).ready(function() {
   $(".inline-editable").hover(
        function() {$(this).addClass("editHover"); },
        function() { $(this).removeClass("editHover"); }
    );

  var oldText,
      newText;

  $(".inline-editable").bind("click", replaceHTML)

  function replaceHTML() {
      // console.log($(".editing"))
      if(! $(".editing").length){
        oldText = $(this).html()
        $(this).addClass("editing");
        var form = createForm(oldText);
        $(this).html("")
                 .html(form);
        $(this).unbind('click', replaceHTML);
       }
    }

  function createForm(text) {
    var form = "<form class=\"inline-editor\">";
    form += "<input type=\"text\" class=\"editBox\" value=\"";
    form += oldText;
    form += "\" /> </form>";
    form += "<a href=\"#\" class=\"btnSave white-text btn \">Save</a>";
    form += "<a href=\"#\" class=\"btnDiscard\"> <span> Cancel </span> </a>";
    return form
  }

  $(document.body).on("click", ".btnDiscard", function() {
        $(this).parent().html(oldText);
        $(".inline-editable").removeClass("editing");
        $(".inline-editable").bind('click', replaceHTML);
        $(".inline-editable").removeClass("editHover");
  });

  $(document.body).on("click", ".btnSave", function() {
       newText = $(this).parent()
                         .find(".editBox")
                         .val();
       saveChanges(this, newText)
  });

  // use enter button
  $(document.body).on("submit", ".inline-editor", function(e) {
     e.preventDefault();
     var newText = $(div).find(".editBox").val()
     saveChanges(this, newText)
  })

  function saveChanges(div, newText) {

    // get data for DB
    var id =  $(div).parent().attr("id");
    var dataToUpdate = { id : id, text : newText };
    console.log(dataToUpdate)

    $(".inline-editable").removeClass("editing");
    $(div).parent().html(newText);
    $(".inline-editable").bind('click', replaceHTML);
    $(".inline-editable").removeClass("editHover");

  }
  });


// $(function() {
//   // $.getJSON('api', updateItem);
//   //
//   // $('.addItems').submit(function(e) {
//   //   e.preventDefault();
//   //   $.post('api', {
//   //     item: $('#item-form-name').val(),
//   //   }, updateItem);
//   // });
//
//   $(".inline-editable").bind("click", timeout)
//
//   $('.inline-editable').on('click', function delete(e) {
//       if (e.target.className == '    ') {
//         $.ajax({
//           url: 'api/' + e.target.id,
//           type: 'DELETE',
//           success: updateItem
//         }); //ajax
//         setTimeout(function(){
//         alert(" Your item will delete " + score ); }, 30000)
//       } // the target is a delete button
//   }); //feedback messages
//
// $(".close-green").click(function () {
//         $("#message-green").fadeOut("slow");
//     });
//
//     setTimeout(function(){
//         $("#message-green").fadeOut("slow");
//     },5000)
//
//
//   function updateItem(data) {
//    var output = '';
//    $.each(data,function(key, item) {
//      output += '     <div class="feedback-item item-list media-list">';
//      output += '       <div class="media-left">
//                           <button class="feedback-delete btn btn-xs btn-danger">
//                             <span id="' + key + '" class="  "></span>
//                           </button>
//                         </div>';
//     //  output += '           <div class="feedback-head">';
//      output += '         <div class="inline-editable">' + item.title
//                             + ' <small class="feedback-name label label-info">'
//                             + 'Suggest Item'+ '</small>
//                         </div>';
//      output += '     </div>';
//    });
//    $('.inline-editable').html(output);
//   }
// });
//
// });
