/* NAV - SEARCH */

(function($) {
  
  $('#search-button').on('click', function(e) {
    if($('#search-input-container').hasClass('hdn')) {
      e.preventDefault();
      $('#search-input-container').removeClass('hdn')
      return false;
    }
  });
  
  $('#hide-search-input-container').on('click', function(e) {
    e.preventDefault();
    $('#search-input-container').addClass('hdn')
    return false;
  });
  
})(jQuery);


/* SLIDER 2 */
jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click( function(){
                var id_selector = $(this).attr("id");
                var id = id_selector.substr(id_selector.length -1);
                var id = parseInt(id);
                $('#myCarousel').carousel(id);
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
 
 
        // When the carousel slides, auto update the text
        $('.carousel-control').on('click', function (e) {
                var id = parseInt($('.item.active:last').attr('data-slide-number')) +1;
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});


/* SLIDER 2 - crossed out list 

;(function(){
  $(window).on('load', function() {
    $('#banner-slider').slick({
      slide: '.ba-slide',
      prevArrow: '#banner-slider .slider-control.left',
      nextArrow: '#banner-slider .slider-control.right',
      dots: true
    });
    updateCurrentSlide();
    $('#banner-slider').on('afterChange', function(e) {
      updateCurrentSlide();
    });
    $('#banner-slider .slick-dots li').each(function() {
      $(this).find('.slider-control').text( '0' + $(this).find('.slider-control').text() );
    });
  });
*/