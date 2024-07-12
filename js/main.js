$(".clickSlide").click(function () {
   if ($(".slideSection").offset().left >= 0) {
      $(".slideSection").css({
         left: `-${$(".slide").outerWidth()}px`,
         transition: `1s all`,
      });
   } else {
      $(".slideSection").css({
         left: `0`,
         transition: `1s all`,
      });
   }
});


$("#clickBtn").click(function () {
   $(".slideSection").css({
      left: `-${$(".slide").outerWidth()}px`,
      transition: `1s all`,
   });
});


$(".head1").click(function () {
   $(".para1").slideToggle(800);
   $(".para2").slideUp(800);
   $(".para3").slideUp(800);
   $(".para4").slideUp(800);
});
$(".head2").click(function () {
   $(".para2").slideToggle(800);
   $(".para1").slideUp(800);
   $(".para3").slideUp(800);
   $(".para4").slideUp(800);
});
$(".head3").click(function () {
   $(".para3").slideToggle(800);
   $(".para1").slideUp(800);
   $(".para2").slideUp(800);
   $(".para4").slideUp(800);
});
$(".head4").click(function () {
   $(".para4").slideToggle(800);
   $(".para1").slideUp(800);
   $(".para2").slideUp(800);
   $(".para3").slideUp(800);
});



let finalDate = new Date("Oct 25, 2024 22:00:00").getTime();

setInterval(function () {
   let CurrentDate = new Date().getTime();

   let remainingTime = finalDate - CurrentDate;

   let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
   let hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


   $("#days").html(`${days} `);
   $("#hours").html(`${hours} `);
   $("#minutes").html(`${minutes} `);
   $("#seconds").html(`${seconds} `);
}, 1000);



$(".nav-link").click(function () {
   console.log($(this).attr("href")); 
   $("html,body").animate(
      {
         scrollTop: $($(this).attr("href")).offset().top, 
      },
      1000
   );
});

$(window).scroll(function () {
   if ($('#addColor').offset().top < $("#singers").offset().top){
      $('#addColor').removeClass('text-dark')
      $('#itEmpty').css({
         color : 'white'
      })
   }
   if ($('#addColor').offset().top >= $("#singers").offset().top){
      $('#addColor').addClass('text-dark')
      $('#itEmpty').css({
         color : 'transparent'
      })
   }
   if ($('#addColor').offset().top >= $("#durations").offset().top){
      $('#addColor').removeClass('text-dark')
   }
   if ($('#addColor').offset().top >= $("#contacts").offset().top){
      $('#addColor').addClass('text-dark')
   }
})