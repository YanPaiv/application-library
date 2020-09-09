$(function(){
   $('form').submit(function(){
      var erro = false;
      var nome = $('[name=nome]').val();
      var email = $('[name=email]').val();
      var mensagem = $('[name=mensagem]').val();
      resetForm();

      if(nome == ''){
         erro = true;
         var el = $('[name=nome]');
         el.css('border','2px solid red');
      }
      if(email == ''){
         erro = true;
         var el = $('[name=email]');
         el.css('border','2px solid red');
      }
      if(mensagem == ''){
         erro = true;
         var el = $('[name=mensagem]');
         el.css('border','2px solid red');
      }

      if(erro == false){
         $('.box-sucesso').fadeIn(function(){
            setTimeout(function(){
               $('.box-sucesso').fadeOut();
            },5000);
         });
         $(this)[0].reset();
      }

      if(erro == true){
         $('.box-erro').fadeIn(function(){
            setTimeout(function(){
               $('.box-erro').fadeOut();
            },5000);
         });
         $(this)[0].reset();
      }

      return false;
   })

   function resetForm(){
      $('input[type=text],textarea').css('border','1px solid #ccc');
    
   }
})