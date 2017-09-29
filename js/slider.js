'use strict';

(function() {
  var reviewsSliderStrip = document.querySelector('.reviews__slider-strip');
  var reviewsToggles = document.querySelectorAll('.reviews__toggle');
  var reviewsContent = reviewsSliderStrip.querySelectorAll('.reviews__content');
  var leftPosition = 0;
  var CONTENT_WIDTH = 100;
  reviewsSliderStrip.style.width = reviewsContent.length * CONTENT_WIDTH + '%';

  // prev-btn
  reviewsToggles[0].addEventListener('click', function() {
    if (leftPosition === 0 || (leftPosition < 1 && leftPosition > -1)) {
      leftPosition -= CONTENT_WIDTH - CONTENT_WIDTH / reviewsContent.length;
    } else {
      leftPosition += CONTENT_WIDTH / reviewsContent.length;
    }
    reviewsSliderStrip.style.transform = `translateX(${leftPosition}%)`;
  });

  // next-btn
  reviewsToggles[1].addEventListener('click', function() {
    if (leftPosition - (CONTENT_WIDTH / reviewsContent.length - CONTENT_WIDTH) > 1) {
      leftPosition -= CONTENT_WIDTH / reviewsContent.length;
    } else {
      leftPosition = 0;
    }
    reviewsSliderStrip.style.transform = `translateX(${leftPosition}%)`;
  });
})();
