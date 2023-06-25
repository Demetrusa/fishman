
  $(document).ready(function() {
    $('.container__fisherman').click(function() {
      updateRightEyeStyles();
      rotateArm();
      // $('.mouth').toggleClass('active');
      var mouthElement = $('.mouth');
      mouthElement.addClass('active');

      setTimeout(function() {
        mouthElement.removeClass('active');
      }, 4000);
      
      var ropeElement = $('.container__fisherman-fishingRod-rope');
      var originalHeight = ropeElement.height();
      
      ropeElement.animate({
        height: originalHeight + 100
      }, 4000, function() {
        ropeElement.animate({
          height: originalHeight
        }, 4000);
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
  });

  