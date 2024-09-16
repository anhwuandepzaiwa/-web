function updateProductContent(page) {
  fetch('http://localhost:3000/api/products') 
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Chuyển đổi dữ liệu nhận được thành JSON
    })
    .then(data => {
      updateProductList(data.products); // Giả sử bạn nhận dữ liệu sản phẩm từ API
      totalPages = data.totalPages; // Giả sử API trả về tổng số trang
      currentPage = page; // Cập nhật trang hiện tại

       // Gọi hàm để cập nhật trạng thái các nút phân trang
      updatePaginationButtons();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}