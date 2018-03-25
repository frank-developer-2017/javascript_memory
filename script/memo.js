'use-strict';

$(window).ready(function(){

  (function(){
    /**
     * [Memo description]
     */
    class Memo {
      /**
       * [constructor description]
       */
      constructor(name)
      {
        alert(true)
        this.name = '';

        this.createHtmlTag();
        this.start();
      }

      /**
       * [html create the html tags #over]
       */
      createHtmlTag()
      {
        $('body').prepend('<div class="background "></div><div id="overlay"></div>');
      }
      /**
       * [start description]
       * @return {[type]} [description]
       */
      start()
      {
        $('.background').show();
        if (!this.name)
        {
          let html = '<label for="username">Name:</label><input name="username" id="username" type="text" pattern="[a-zA-Z0-9]" placeholder="Bitte nur Buchstaben und Zahlen eintragen" autofocus autocomplete="on"/><input type="button" value="senden" id="submit">';
          $('#overlay').append(html);
        }

      }

      setname()
      {
        this.name = $(event.target ).prev().val();
        $('.gamer').text( this.name + ' ist am Zug!' );
        $('.background, #overlay').hide();
      }



    }

    var memo;
    $('#go').on('click', function(){
      memo = new Memo();
      memo.start;
      $('#submit').on('click', function(event){
        // console.log(memo)
        memo.setname();
      });
    });




  })();



});
