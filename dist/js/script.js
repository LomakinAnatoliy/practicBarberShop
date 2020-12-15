// all other code
  console.log('dfdsfsdfsdfsdf');
// Lazy loading img & background images using intersection observer
// Reference: https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
// Using example: <img class="lazy" src="thumb.gif" data-src="real-img.jpg" data-srcset="real-img@1x.jpg 1x, real-img@2x.jpg 2x">
// Background image class usign example: <div class="lazy-background"> with added class ".visible" for styling
// Background image style attribute lazy loading example: <div data-bg="image.jpg">

// delete window.IntersectionObserver; // Fallback Testing

document.addEventListener('DOMContentLoaded', function() {

  let lazyImages = [].slice.call(document.querySelectorAll('.lazy'));
  let lazyBackgrounds = [].slice.call(document.querySelectorAll('.lazy-background'));
  let lazyBackgroundsData = [].slice.call(document.querySelectorAll('[data-bg]'));

  if ('IntersectionObserver' in window) {

    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });

  let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        lazyBackgroundObserver.unobserve(entry.target);
      }
    });
  });
  lazyBackgrounds.forEach(function(lazyBackground) {
    lazyBackgroundObserver.observe(lazyBackground);
  });

  let lazyBackgroundDataObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let lazyBackgroundData = entry.target;
        lazyBackgroundData.style.backgroundImage = 'url(' + lazyBackgroundData.dataset.bg + ')';
        lazyBackgroundDataObserver.unobserve(lazyBackgroundData);
      }
    });
  });
  lazyBackgroundsData.forEach(function(lazyBackgroundData) {
    lazyBackgroundDataObserver.observe(lazyBackgroundData);
  });

  } else {

    // Fallback

    lazyImages.forEach(function(lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.srcset = lazyImage.dataset.srcset;
    });
    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackground.classList.add('visible');
    });
    lazyBackgroundsData.forEach(function(lazyBackgroundData) {
      lazyBackgroundData.style.backgroundImage = 'url(' + lazyBackgroundData.dataset.bg + ')';
    });

  }

});
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });
// Lazy loading img & background images using intersection observer
// Reference: https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
// Using example: <img class="lazy" src="thumb.gif" data-src="real-img.jpg" data-srcset="real-img@1x.jpg 1x, real-img@2x.jpg 2x">
// Background image class usign example: <div class="lazy-background"> with added class ".visible" for styling
// Background image style attribute lazy loading example: <div data-bg="image.jpg">

// delete window.IntersectionObserver; // Fallback Testing

document.addEventListener('DOMContentLoaded', function() {

  let lazyImages = [].slice.call(document.querySelectorAll('.lazy'));
  let lazyBackgrounds = [].slice.call(document.querySelectorAll('.lazy-background'));
  let lazyBackgroundsData = [].slice.call(document.querySelectorAll('[data-bg]'));

  if ('IntersectionObserver' in window) {

    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });

  let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        lazyBackgroundObserver.unobserve(entry.target);
      }
    });
  });
  lazyBackgrounds.forEach(function(lazyBackground) {
    lazyBackgroundObserver.observe(lazyBackground);
  });

  let lazyBackgroundDataObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let lazyBackgroundData = entry.target;
        lazyBackgroundData.style.backgroundImage = 'url(' + lazyBackgroundData.dataset.bg + ')';
        lazyBackgroundDataObserver.unobserve(lazyBackgroundData);
      }
    });
  });
  lazyBackgroundsData.forEach(function(lazyBackgroundData) {
    lazyBackgroundDataObserver.observe(lazyBackgroundData);
  });

  } else {

    // Fallback

    lazyImages.forEach(function(lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.srcset = lazyImage.dataset.srcset;
    });
    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackground.classList.add('visible');
    });
    lazyBackgroundsData.forEach(function(lazyBackgroundData) {
      lazyBackgroundData.style.backgroundImage = 'url(' + lazyBackgroundData.dataset.bg + ')';
    });

  }

});
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });