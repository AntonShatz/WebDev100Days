$("h1").addClass("bit-title margin-50");
$("h1").text("World");

$("button").text("BLA")
// Changing attribute href of google to youtube
$("a").attr("href","https://www.youtube.com")
$("h1").mouseover(function(){
    if ($(this).css("color") === "rgb(128, 0, 128)") {
        $(this).css("color", "yellow");
    } else {
        $(this).css("color", "purple");
    }
});
$(document).keypress(function(event){
    $("h1").text(event.key)
});