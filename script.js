
  $(document).ready(function() {
    $('.container__fisherman').click(function() {
      updateRightEyeStyles();
      rotateArm();
      dropFishinPole()
      moveBox()


      setTimeout(function() {
        $('.container__fisherman-fishingRod').css({
          'transform': 'rotate(212deg)',
          'transition': 'all 4s ease'
        });
      }, 2000);

      // $('.mouth').toggleClass('active');
      var mouthElement = $('.mouth');
      mouthElement.addClass('active');

      setTimeout(function() {
        mouthElement.removeClass('active');
      }, 4000);
      
      var ropeElement = $('.container__fisherman-fishingRod-rope');
      var originalHeight = ropeElement.height();
      ropeElement.animate({
        height: originalHeight - 100
      }, 
      4000, function() {
        // ropeElement.css('animation', 'rotatePole 2s infinite');

        ropeElement.animate({
          height: originalHeight
        }, 4000);
        
        moveBoxBack()

        // ropeElement.css('animation', 'none');

      });
    });

    function updateRightEyeStyles() {
      $('.righteye').css({
        'width': '10px',
        'height': '11px',
        'border-radius': '50%',
        'background-color': 'rgb(21, 59, 62)',
        'position': 'absolute',
        'left': '41px',
        'border': 'none',
        'border-color': 'none',
        'top': '15px',
        'transition': 'all 2s ease',
        'transform': 'rotate(0deg)'
      });
    }
    function rotateArm (){
      $(".closed-fist").css({
      'transform': 'rotate(308deg)',
      'transition': 'all 2s ease'
      })
    }
    function dropFishinPole (){
      $(".container__fisherman-fishingRod").css({
      'transform': 'rotate(209deg)',
      'transition': 'all 2s ease'
      })
    }
    
    function moveBoxBack (){
      $(".hook").css ({
      "top":"34px",
      "left": "238px",
      "aniamtion":"movePrize 2s ease",

      });
      setTimeout(function() {
        $(".hook").attr('style', '');
      }, 7000);
    }
    function moveBox() {
      var classes = ["hook1", "hook2", "hook3", "hook4", "hook5"];
      var randomClass = classes[Math.floor(Math.random() * classes.length)];
  
      $(".hook").removeClass().addClass("hook " + randomClass).css({
        "top": "-82px",
        "transition": "all 4s ease"
      });
    }
  });

  