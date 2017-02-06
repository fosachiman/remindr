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
    form += "<a href=\"#\" class=\"btnDiscard\">Cancel</a>";
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

//
// $(function() {
//   $.getJSON('api', updateItem);
//
//   $('.addItems').submit(function(e) {
//     e.preventDefault();
//     $.post('api', {
//       item: $('#item-form-name').val(),
//     }, updateItem);
//   });
//
//   $('.inline-editable').on('click', function(e) {
//       if (e.target.className == 'btn-floating btn-large') {
//         $.ajax({
//           url: 'api/' + e.target.id,
//           type: 'DELETE',
//           success: updateItem
//         }); //ajax
//       } // the target is a delete button
//   }); //feedback messages
//
// $('.inline-editable').click(function(){
//     var name = $(this).text();
//     $(this).html('');
//     $('<input></input>')
//         .attr({
//             'type': 'text',
//             'name': 'iname',
//             'id': 'txt_inline-editable',
//             'size': '30',
//             'value': name
//         })
//         .appendTo('.inline-editable');
//     $('.txt_feedback-messages').focus();
// });
//
// $(document).on('blur','.txt_inline-editable', function(){
//     var name = $(this).val();
//     $.ajax({
//       type: 'post',
//       url: 'api/' + e.target.id,
//       success: function(){
//         $('.inline-editable').text(name);
//       }
//     });
// });
//
//   function updateItem(data) {
//    var output = '';
//    $.each(data,function(key, item) {
//      output += '     <div class="feedback-item item-list media-list">';
//      output += '       <div class="media-left">
//                           <button class="feedback-delete btn btn-xs btn-danger">
//                             <span id="' + key + '" class="btn-floating btn-large"></span>
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
