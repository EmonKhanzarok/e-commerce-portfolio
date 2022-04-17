$('.main').slick({
    
    slidesToShow: 6,
    slidesToScroll: 2,
    dots:false,
    autoplay:false,
    autoplaySpeed:700,
    prevArrow:".prev",
    nextArrow:".next",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
          }
        },
        {
            breakpoint: 300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

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