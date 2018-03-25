'use-strict';

$(window).ready(function(){

  (function(){

    class Memo {
      /**
       * [constructor description]
       */
      constructor(name)
      {
        /**
        * @param string name        [the name of the player]
        * @param string countMemory [number of memory card]
        */
        this.name = '';
        this.countMemory = $('#count').val();

        this.start();
      }

      /**
       * [start a new memory game]
       * @return {[type]} [description]
       */
      start()
      {
        $('.background').show();
        if (!this.name)
        {
          $('.setting-menu').removeClass('hidden');
          $('.output-range').text( this.getCount() );
        }
      }
      /**
      * [game pref]
      */
      settingGame()
      {
        this.name = $('#username').val() != '' ? $('#username').val() : 'Anonums';
        this.countMemory = $('#count').val();
        $('.setting-menu').addClass('hidden');
        $('.background').hide();
        this.readHeader()
      }

      /**
      * [get the value from input#count]
      */
      getCount()
      {
        return $('#count').val() + ' Karten';
      }

      /**
      * []
      */
      readHeader()
      {
        $('h1').after('<p> - es spielt <b>' + this.name + '</b> mit <b>' + this.countMemory + '</b> Karten.</p>')
      }


    }

    var memo;

    $('#go').on('click', function(){
      memo = new Memo();
      memo.start;
    });

    $('#submit').on('click', function(){
      memo = new Memo();
      memo.settingGame();
    });

    $('#count').on('input', function(){
      $('.output-range').text( memo.getCount() );
    });

    console.log(memo)


  })();



});
