$(function() {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
    
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
    });

    $("h5").dblclick(function () {
        $(this).css(`color`,`red`);
    });

    $(".card-img-top").click(function(){
        $(".card-text").toggle("slow", function(){
        });
    });
})