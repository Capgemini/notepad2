'use strict';

var notepad = (function ($) {

  var mobileMenuButton = '.notepad-mobile-menu a',
    mobileMenuCloseButton = '.notepad-mobile-close-btn',
    mainMenu = '.notepad-menu',
    bgCheckClass = '.notepad-post-title-wrapper',
    postCoverImg = '#post-image-feature',
    $coverImage = $(postCoverImg),

    mobileMenu = function () {
      if ($(mainMenu).length) {
        $(mobileMenuButton).on('click', function (e) {
          e.preventDefault();
          $(mainMenu).addClass('opened');
        });
        $(mobileMenuCloseButton).on('click', function (e) {
          e.preventDefault();
          $(mainMenu).removeClass('opened');
        });
      }
    },

    headerTitlesBackgroundCheck = function () {
      if ($(bgCheckClass).length && $(postCoverImg).length) {
        BackgroundCheck.init({
          targets: bgCheckClass,
          images: postCoverImg
        });
      }
    },

    postHeaderCoverImg = function () {

      if ($coverImage.length) {
        var img = $coverImage.attr('src');

        $('.notepad-post-title-wrapper').css('background-image', 'url("' + img + '")').css('min-height', $coverImage.height()).addClass('has-image');

      }
    },

    // notepad javascripts initialization
    init = function () {

      postHeaderCoverImg();
      headerTitlesBackgroundCheck();

      $coverImage.hide();

      mobileMenu();
      $('p:has(> img)').addClass('with-image');
    };

  return {
    init: init
  };

})(jQuery);

(function () {
  notepad.init();
})();