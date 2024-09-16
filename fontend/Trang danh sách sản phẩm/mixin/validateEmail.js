document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Ngăn hành động submit mặc định của form

  // Lấy giá trị email từ input
  const emailInput = document.getElementById('footer-input').value;
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  // Định dạng email hợp lệ (sử dụng regex)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Kiểm tra xem email có đúng định dạng không
  if (emailPattern.test(emailInput)) {
    // Nếu đúng, hiển thị thông báo thành công
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';
    successMessage.textContent = 'Email đã được gửi thành công!';
    
    // Có thể thực hiện thêm các hành động khác, như gửi email thông qua backend tại đây
  } else {
    // Nếu sai, hiển thị thông báo lỗi
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Vui lòng nhập email đúng định dạng!';
  }
});
