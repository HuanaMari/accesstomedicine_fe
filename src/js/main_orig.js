//SCROLL TO NEXT SECTION
$(".scrolldown").click(function(e) {
    e.preventDefault();
    var position = $(this).closest('section').next('section').offset().top;
    $("body, html").animate({
      scrollTop: position
    } ,1100 );
});
// HIDE MENU
$('body').click(function(e){    
  if(e.target.id == "navbarNav")        return;
  // For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
  if($(e.target).closest('#navbarNav').length)        return;

  // Do processing of click event here for every element except with id menu_content
  // console.log('simulating click');
  console.log('yes')
  if ($('#navbarNav').hasClass('show')) {
    console.log('YES');
      $('.navbar-close')[0].click();
  }
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