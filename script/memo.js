'use-strict';

$(window).ready(function(){

  (function(){



    class Memo {
      /**
       * [constructor description]
       */
      constructor()
      {
        /**
        * @param string   name            [the name of the player]
        * @param string   countMemory     [number of memory card]
        * @param array    numberArray     [number of cards in an array]
        * @param array    randomArray     [random number of cards in an array]
        * @param integer  showMemoryField [number of cards that are visible]
        */
        this.name             = '';
        this.countMemory      = $('#count').val();
        this.numberArray      = [];
        this.randomArray      = [];
        this.showMemoryField  = []

        /**
         * start the methoden
         */
        this.startSetting();
        this.clearGame();
        /**
         * [The game is started for the first time]
         */
        if ( $('#go').hasClass('active') )
        {
          //this.newSGametart();
        } else
        {
          this.startCreateMemory();
        }
        $('#go').addClass('active');

      }

      /**
       * [start the setting for a new memory game]
       * [register the range event]
       * @return {[type]} [description]
       */
      startSetting()
      {
        $('#count').on('input', function(){
          $('.output-range').text( memo.getCount() );
        });

        $('.background').show();
        if (!this.name)
        {
          $('.setting-menu').removeClass('hidden');
          $('.output-range').text( this.getCount() );

          $('#settingGame').on('click', function(){
            this.settingGame();
            this.setNumberArray();
            this.setRandom();
            this.createMemoryField();
          }.bind(this));
        }
      }
      /**
      * [game pref]
      * [if namefield empty then is the gamer name Anonums]
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
      * [create the header text]
      */
      readHeader()
      {
        $('h1').after('<p> - es spielt <b>' + this.name + '</b> mit <b>' + this.countMemory + '</b> Karten.</p>')
      }
      /**
       * [newGameStart started with a restart of the game]
       * @return {[type]} [description]
       */
      newGameStart()
      {
        console.log('new')
      }
      /**
       * [startCreateMemory starts at the first start]
       * @return {[type]} [description]
       */
      startCreateMemory()
      {
        console.log('start')

      }

      setNumberArray()
      {
        for (var i = 0; i < this.countMemory ; i++)
        {
          this.numberArray.push(i);
        }
        this.numberArray = this.numberArray.concat(this.numberArray);
      }

      setRandom()
      {
        let arrayLength = this.numberArray.length;
        let arrguments = [];
        let randomNumber;

        for(var j = arrayLength ; j>0 ; j-- )
        {
          randomNumber = Math.floor((Math.random() * (this.numberArray.length)));
          arrguments.push( this.numberArray[randomNumber] );
          this.numberArray.splice(randomNumber, 1);
        }

        this.randomArray = arrguments;
      }

      createMemoryField()
      {
        let html = '<div class="item"><figure class="memory-item"><img src="images/memo/pattern.jpg" alt="" class="cards" data-no="__no__" data-random="__random__"/></figure></div>';
        let htmlOutput;

        $('.game-area').hide()
        for (var i = 0; i < (this.countMemory ) * 2; i++)
        {
          htmlOutput ? htmlOutput += html.replace('__no__', i).replace('__random__', this.randomArray[i] ) : htmlOutput = html.replace('__no__', i).replace('__random__', this.randomArray[i] );
        }
console.log(htmlOutput)
        $('.game-area')
          .append(htmlOutput)
          .show('slow');

        // set the image of the canvas
        this.showMemoryField = this.randomArray.length;
      }

      clearGame()
      {
        this.numberArray = [];
        this.randomArray = [];
        console.log('clear');
      }

    }// class



    var memo;

    $('#go').on('click', function(){
      memo = new Memo();
      memo.start;
    });



  })();



});
