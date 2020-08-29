//SCROLL TO NEXT SECTION
$(".scrolldown").click(function (e) {
  e.preventDefault();
  var position = $(this).closest('section').next('section').offset().top;
  $("body, html").animate({
    scrollTop: position
  }, 1100);
});
// HIDE MENU
$('body').click(function (e) {
  if (e.target.id == "navbarNav") return;
  // For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
  if ($(e.target).closest('#navbarNav').length) return;

  // Do processing of click event here for every element except with id menu_content
  if ($('#navbarLang').hasClass('show')) {
    $('.navbar-toggler.lang-toggler')[0].click();
  }
});

//Carousel #solutionSlider//
const carousel = {
  carousel: $("#solutionSlider"),
  carouselItems: $("#solutionSlider .carousel-inner").children(),
  cssClasses: ['solutionOne', 'solutionTwo', 'solutionThree']
}


function carouselPseudoClassHandler() {
  for (let index = 0; index < carousel.carouselItems.length; index++) {
    let currentItem = carousel.carouselItems[index];
    if ($(currentItem).hasClass('active')) {
      console.log('add',index,carousel.cssClasses[index])
      carousel.carousel.addClass(carousel.cssClasses[index])
    } else {
      carousel.carousel.removeClass(carousel.cssClasses[index])
    }
  }
}
let observer = new MutationObserver(function(mutations) {
  carouselPseudoClassHandler();

});
observer.observe($("#solutionSlider .carousel-inner")[0], {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});



// MODIFY MENU BAR ON SCROLL DOWN
// $(window).on('load scroll resize', function(){
//     console.log('Event Fired', $(window).scrollTop());
//     if ($(window).scrollTop() > 95) {
//         $('header nav').addClass('bg-dark');
//         $('header nav').addClass('bounceInDown');
//     }
//     else {
//         $('header nav').removeClass('bg-dark');
//     }
// });