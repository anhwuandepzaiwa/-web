// Xử lí ảnh lớn khi hover vào ảnh nhỏ
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


// SCROLL ảnh nhỏ
let currentPosition = 0;
const imageHeight = 100; 
const containerHeight = document.querySelector('.pd-carousel-container').clientHeight;
const innerCarousel = document.querySelector('.pdetail-thumbnail');
const totalHeight = innerCarousel.scrollHeight;

function scrollUp() {
    if (currentPosition < 0) {
        currentPosition += imageHeight;
        innerCarousel.style.transform = `translateY(${currentPosition}px)`;
    }
}

function scrollDown() {
    if (Math.abs(currentPosition) < totalHeight - containerHeight) {
        currentPosition -= imageHeight;
        innerCarousel.style.transform = `translateY(${currentPosition}px)`;
    }
}

// RÚt gọn thu gọn nội dung
document.getElementById("load-more-btn").addEventListener("click", function() {
  const content = document.getElementById("pd-content");
  const btn = document.getElementById("load-more-btn");
  if (content.classList.contains("expanded")) {
      content.classList.remove("expanded");
      btn.innerHTML = '<span>+</span> Xem thêm nội dung'; 
  } else {
      content.classList.add("expanded");
      btn.innerHTML = '<span>-</span> Rút gọn nội dung';
  }
});


// Sao chép mã 
document.getElementById("copy-btn").addEventListener("click", function() {
  const voucherCode = document.getElementById("voucher-code").textContent;
  navigator.clipboard.writeText(voucherCode).then(function() {
  }).catch(function(error) {
      console.error("Sao chép thất bại!", error);
  });
});
// -- Hàm hiển thị thông báo
const buttonCopy = document.querySelectorAll('#copy-btn');

buttonCopy.forEach(button => {
  button.addEventListener('click', function(event) {
    // Ngăn chặn hành động mặc định (chuyển hướng)
    event.preventDefault();
    // Hiển thị thông báo khi nhấn nút
    showNotification("Đã sao chép")
  });
});