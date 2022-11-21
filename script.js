$(document).ready(function(){
         $("#r2").click(function(){
         $("#r1").fadeOut("slow");
         /*$("#main").css("visibility","hidden");*/
         });

         $("#header").click(function(){
            $("#header").css("background-color","pink");
         });

         $("#mid-left").click(function(){
            $("#mid-left").html("Leftbar");
         });

         $("#footer").click(function(){
            $("#pop").css("display","block");
         });

         $('.btn').click(function(){
            $("#pop").css("display","none");
         })
      
      });