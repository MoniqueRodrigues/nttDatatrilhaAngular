
$(document).ready(function(){  
      $("img").click(function(){
      $(".menu").toggle();
    });
  });


    $(window).resize(function() {    
        if($(document).innerWidth()<= 375){
            $(".menu").hide();       
            //diminui os elementos, esconde se for necessário
            console.log("é menor ou igual a 375")                    
          
        }else{
            // $(".menu").show();
            console.log("não é 375")
            // mantém um elemento ou outro
          
        }
    })
        

