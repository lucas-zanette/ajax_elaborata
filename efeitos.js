

//documento document - é o document geral mas 
$(document).ready(function () {
	$(".box-azul").click(function () {
        //1
        //assim muda de todo mundo
        //$(".box-color").css("background-color", "red");
        
        //2
        //se eu colocar o this muda so do clicado
        //$(this).css("background-color", "red");
        //$(this).css("width", "200px");
        
        //3
        //jquery tem efeitos para aparecer e desaparecer fadeout/in
        //$(this).fadeOut(1000, function(){
        //    alert("terminou");
        //});       

        //4
        //outro parecido com o fadeout/in
        //$(this).slideUp();                  

        //5
        var tam = $(this).css("width");
        
        var mod = {};        
        console.log(mod);
        if (tam == "100px") {    
            mod.width = "200px";
            
        } else {
            mod.width = "100px";
        }
        $(this).animate(mod);      
            
    });

    $(".box-verde").click(function() {
        //pegar o tamanho da tela        
        var left = $(document).width();
        //120 tamanho da caixa de 100 mais um espaço
        left -= 120;
        var css = {
            "left" : left
        }
        $(this).animate(css, 1000);
    });

    $("#btn-vai").click(function(){
        $(".box-azul").slideToggle();
    });

    //agora vamos fazer a caixa pink se mexer na tela para a direita - deveremos pegar o document inteiro
    $(document).keydown(function(ev) {
        var left = parseInt($(".box-pink").css("left"));
        console.log(left);
        if (left < 0) {
            //console.log(ev);
            if (ev.keycode == 39) {
                var css = {
                    "left" : "+=10"
                };
            } else if(ev.keycode == 37) {
                var css = {
                    "left" : "-=10"
                };
            }
            
            $(".box-pink").animate(css, 100);
        }
    });

    $(document).mousemove(function(ev) {
        
        console.log(ev);
        $(".box-gold").css("left", ev.clientX);
        
    });

});