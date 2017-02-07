$(document).ready(function() {
$("#delete-button").click(function () {
        $(".inline-editable").fadeOut("slow");
        $("#delete-button").fadeOut("slow");
    setTimeout(function(){
        $(".inline-editable").fadeOut("slow");
        $("#delete-button").fadeOut("slow");
    },1000);
});
});

// function strikeOut(){
//   var strike = strike();
//   var str= ".inline-editable"
//   {
//     documentgetElementByClassName(str) = strike;
//   }
// }
