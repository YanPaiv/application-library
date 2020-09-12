$(function(){
   $('.btn-add').click(function(){
      var el = '<div class="anotacoes-single"><textarea placeholder="Sua nova anotação..."></textarea></div>';
      $('.container-anotacoes').append(el);

      var textArea = $('.anotacoes-single').last().find('textarea');

      var date = new Date();
      var hh = date.getHours();
      var mm = date.getMinutes();
      var ss = date.getSeconds();

      var finalTime = hh+":"+mm+":"+ss;

      textArea.html(finalTime+'-- ' );
   })
})