// init Isotope
var $grid = $('.item-details').isotope({
    // options
  });
  // filter items on button click
  $('.item-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


  var config = document.querySelector('.item-details1');
  var mixer = mixitup(config);



  $('.main').slick({
    
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    autoplay:false,
    autoplaySpeed:700,
    prevArrow:".prev",
    nextArrow:".next"
});




  var countDownDate = new Date("Jun11, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d ";
  document.getElementById("demo").innerHTML = + days + " Days ";
  document.getElementById("demo2").innerHTML = + hours + " Hours ";
  document.getElementById("demo3").innerHTML = + minutes + " Mins ";
  document.getElementById("demo4").innerHTML = + seconds + " Secs ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



