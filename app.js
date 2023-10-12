$(document).ready(function() {
    var elements = $(".navItem");
    elements.css("color", "white");

    var nav = $("#nav");
    nav.css("background-color", "#145");

    $("ul li:even").css("background-color", "#ccc");
    $("ul li:odd").css("background-color", "#aaa");

    $("input#myInput").val("Susan Seow");
});

 
