
// -- Hiển thị thông báo khi bấm nút Thêm Giỏ Hàng
const buttonBuy = document.querySelectorAll('.add-to-cart');

// -- Lấy các id của Pagination
const prevButton = document.querySelector('.product-pagination-prev');
const nextButton = document.querySelector('.product-pagination-next');
const pageButtons = document.querySelectorAll('.product-pagination a');
const productContent = document.getElementById('product-content');
const menuItems = document.querySelectorAll('.dropdown-menu li');

// Biến lưu trang hiện tại
let currentPage = 1;
const totalPages = 3; 

// -- Hàm hiển thị thông báo

buttonBuy.forEach(button => {
  button.addEventListener('click', function(event) {
    // Ngăn chặn hành động mặc định (chuyển hướng)
    event.preventDefault();
    // Hiển thị thông báo khi nhấn nút
    showNotification("Sản phẩm đã được thêm vào giỏ hàng!")
  });
});

// XỬ lí sự kiện dropdown 
document.addEventListener("DOMContentLoaded", function() {
  // Lắng nghe sự kiện click cho các lựa chọn menu
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
      // Xóa lớp 'active-menu' khỏi tất cả các mục
      menuItems.forEach(function(item) {
          item.classList.remove('active-menu');
      });

      // Thêm lớp 'active-menu' cho mục được bấm
      this.classList.add('active-menu');
  });
});
  // Ẩn dropdown khi click ra ngoài
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn')) {
        dropdownMenu.classList.remove('show');
    }
});
});

// Hàm cập nhật nội dung sản phẩm dựa trên trang hiện tại
// -- Nhúng FETCH API XỬ LÍ SẢN PHẨM fetchapi.js

// Hàm Lấy dữ liệu từ APi
function updateProductList(products) {
  const productList = document.getElementById('product-list');
  
  // Xóa nội dung cũ nếu có
  productList.innerHTML = ``;

  // Duyệt qua từng sản phẩm và tạo HTML tương ứng
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <div class="productlist-container" id="product-content">
                  <div class="product-client-title">
                    <p><a href="">Trang chủ</a> &nbsp;&nbsp;/&nbsp;&nbsp; ${title} </p>
                  </div>
                
                  <div class="product-client-menu">
                    <div class="product-client-name">
                      <div class="product-client-menu1">${title} &nbsp;&nbsp; </div>
                      <div class="product-client-menu2"> &nbsp;&nbsp;${stock} sản phẩm</div>
                    </div>
                    <div class="dropdown">
                      <button class="dropdown-btn"><i class="fa-solid fa-arrow-down-a-z" id="dropdown-icon"></i>&nbsp;&nbsp;Sắp xếp <span>&#x25BC;</span></button>
                      <ul class="dropdown-menu">
                          <li class="active">Sản phẩm nổi bật</li>
                          <li>Giá: Tăng dần</li>
                          <li>Giá: Giảm dần</li>
                          <li>Tên: A-Z</li>
                          <li>Tên: Z-A</li>
                          <li>Cũ nhất</li>
                          <li>Mới nhất</li>
                          <li>Bán chạy nhất</li>
                          <li>Tồn kho giảm dần</li>
                      </ul>
                  </div>
                  </div>
                
                <div class="product-list" id="product-list">
                  <div class="product-card">
                
                    <a href="" class="img-card">
                      <img src="${product.image1}" alt="" class="img-card1">
                      <img src="${product.image2}" alt="" class="img-card2">
                      <div href="#" class="eye-icon"><i class="fa-regular fa-eye"></i></div>
                    </a>
                    <div class="sales-info">Đã bán ${product.sold}</div>
                    <div class="sales-bar">
                        <div class="filled" style="width: ${product.salesPercentage}%"></div>
                    </div>
                    <div class="productlist-des"> 
                      <a href="" class="a-product-name">
                        <div class="product-name">${product.name}</div>
                      </a>
                
                      <div class="productlist-price">
                        <div class="price-info">${product.price}₫</div>
                        <div class="old-price">${product.oldPrice}₫</div>
                      </div>
                      
                      <div class="product-discount">${product.discount}</div>
                      <span class="product-btn-buy">
                        <a href="#" class="add-to-cart" id="add-cart">THÊM VÀO GIỎ</a>
                        <a href="" class="add-to-cart2"><i class="fa-brands fa-shopify"></i></a>
                      </span>
                    </div>
                
                  </div>
                </div>
    `;
    productList.appendChild(productCard);
  });
}


