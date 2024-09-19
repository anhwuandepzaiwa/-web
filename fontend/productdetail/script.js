document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.pd-thumbnail');
  const largeImage = document.getElementById('pd-imagelarge');

  thumbnails.forEach(thumbnail => {

      thumbnail.addEventListener('mouseenter', function() {

          const largeSrc = this.getAttribute('data-target');
          largeImage.style.opacity = 0; 

          setTimeout(function() {
              largeImage.setAttribute('src', largeSrc); 
              largeImage.style.opacity = 1;  
          }, 300); 
      });
  });
});

