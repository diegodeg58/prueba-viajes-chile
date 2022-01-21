$(function(){
    
    $(document).on("click", "#avion", function(){
        $("#texto-avion").addClass('text-success');
        $("#texto-montana").removeClass('text-warning');
        $("#texto-ruta").removeClass('text-danger');
    })
    
    $(document).on("click", "#montana", function(){
        $("#texto-avion").removeClass('text-success');
        $("#texto-montana").addClass('text-warning');
        $("#texto-ruta").removeClass('text-danger');
    })
    
    $(document).on("click", "#ruta", function(){
        $("#texto-avion").removeClass('text-success');
        $("#texto-montana").removeClass('text-warning');
        $("#texto-ruta").addClass('text-danger');
    })
    
    $("#texto-avion").hover(
        function(){
            $("#texto-avion").addClass("text-decoration-underline");
        },
        function(){
            $("#texto-avion").removeClass("text-decoration-underline");
        }
    );
    
    $("#texto-montana").hover(
        function(){
            $("#texto-montana").addClass("fst-italic");
        },
        function(){
            $("#texto-montana").removeClass("fst-italic");
        }
    );
    
    $("#texto-ruta").hover(
        function(){
            $("#texto-ruta").addClass("fw-bolder");
        },
        function(){
            $("#texto-ruta").removeClass("fw-bolder");
        }
    );
    
    $("[type=submit]").click(function(){
        alert("¡Gracias por tu mensaje!");
    });
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});