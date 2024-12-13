(function ($) {
	"use strict";

	jQuery(document).ready(function($){

  
       
//   const LocoScroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true
// });

		// const player = new Plyr('#hero_video, #player, #player_1, #player_2, #player_3, #player_4, #player_5');
   function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Detect iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

      // Detect Android
    if (/android/i.test(userAgent)) {
      return "Android";
    }

      // Detect Desktop (you can adjust this logic to better suit your needs)
    if (!/Mobi|Android/i.test(userAgent)) {
      return "Desktop";
    }

    return "Unknown";
  }

  const deviceType = detectDevice();

  let link = "https://secure.vaulted.com/signup?utm_source=dotgold_landingpage&utm_medium=lbbutton%2Blinks&utm_campaign=becausegold";

  if(deviceType === "iOS") {
    link = "https://apps.apple.com/us/app/vaulted-buy-gold-silver/id1559580059?utm_source=dotgold_landingpage&utm_medium=lpbutton&utm_campaign=becausegold";
  }
  else if(deviceType === "Android") {
    link = "https://play.google.com/store/apps/details?id=com.vaulted.vaulted&referrer=utm_source%3Ddotgold_lp%26utm_medium%3Dplaybutton%26utm_campaign%3Dbecausegold";
  }

  $('.store_link').each(function() {
    $(this).attr('href', link);
  });

   // new WOW().init();

  const accordionVideoMap = {
    'question_1': '/wp-content/uploads/2024/10/video_1.mp4',
    'question_2': '/wp-content/uploads/2024/10/video_2.mp4',
    'question_3': '/wp-content/uploads/2024/10/video_3.mp4',
    'question_4': '/wp-content/uploads/2024/10/video_4.mp4',
    'question_5': '/wp-content/uploads/2024/10/video_5.mp4'
  };

  const accordionImageMap = {
    'question_1': '/wp-content/uploads/2024/10/mobile_bg_1.jpg',
    'question_2': '/wp-content/uploads/2024/10/mobile_bg_2.jpg',
    'question_3': '/wp-content/uploads/2024/10/mobile_bg_3.jpg',
    'question_4': '/wp-content/uploads/2024/10/mobile_bg_4.jpg',
    'question_5': '/wp-content/uploads/2024/10/mobile_bg_5.jpg'
  };

// Function to change the video source and make it autoplay
  function changeVideo(accordionId) {
    const videoSrc = accordionVideoMap[accordionId];
    const videoElement = document.querySelector('.faq_tab_video video');
    const videoSourceElement = videoElement.querySelector('source');

    if (videoSourceElement && videoSrc) {
    videoSourceElement.src = videoSrc; // Update the video source
    videoElement.load(); // Reload the video to reflect the new source
    videoElement.play(); // Play the video after reloading
  } else {
    console.error('Video element or source not found!');
  }
}

// Function to change the image source
function changeImage(accordionId) {
  const imageSrc = accordionImageMap[accordionId];
  const imageElement = document.querySelector('.faq_tab_video video');

  if (imageElement && imageSrc) {
    imageElement.poster = imageSrc;
  } else {
    console.error('Image element or image source not found!');
  }
}




// Event listener for accordion buttons
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function() {
    const accordionId = this.getAttribute('data-bs-target').replace('#', '');

    // Change video and image
    changeVideo(accordionId);
    changeImage(accordionId);
  });
});



//Lottie file js
		// var animation = lottie.loadAnimation({
		// 	container: document.getElementById('animationContainer'),
		// 	renderer: 'svg',
		// 	loop: true,
		// 	autoplay: true,
		// 	path: '/wp-content/themes/vaulted-gold/assets/animation-json/animation.json'
		// });



});



}(jQuery));