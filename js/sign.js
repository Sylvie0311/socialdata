/*會員登入註冊、購物車、關於我們*/
function toggleAddress() {
    const homeSelected = document.querySelector('input[value="home"]').checked;
    const sevenSelected = document.querySelector('input[value="7-11"]').checked;
  
    // 顯示或隱藏對應的輸入欄位
    document.getElementById('address-home').style.display = homeSelected ? 'block' : 'none';
    document.getElementById('address-711').style.display = sevenSelected ? 'block' : 'none';
  
    // 必填驗證：選宅配填宅配地址，選7-11填門市
    document.getElementById('home-address').required = homeSelected;
    document.getElementById('store-address').required = sevenSelected;
  }
  
  // 綁定
  document.addEventListener('DOMContentLoaded', () => {
    const shippingOptions = document.querySelectorAll('input[name="shipping"]');
    shippingOptions.forEach(option => {
      option.addEventListener('change', toggleAddress);
    });
  });

/*將購買商品資料顯示在購物車中*/ 
document.addEventListener('DOMContentLoaded', function() {
    const cartContent = document.getElementById('cart-content');
    const totalPriceElement = document.getElementById('totalPrice');
    
    // 1. 從 LocalStorage 拿取資料
    const savedData = localStorage.getItem('cartItem');

    if (savedData) {
        const item = JSON.parse(savedData);
        const total = item.price * item.quantity;
        
        // 2. 使用你既有的 cart-item CSS 結構來顯示資料
        // 我們將資料插入到你預留的 #cart-content 容器中
        cartContent.innerHTML = `
            <div class="cart-item">
                <div class="item-img">
                    <img src="${item.image}" alt="${item.name}" style="width: 100%; height: auto;">
                </div>
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-qty">
                        <span class="qty-num">單價: $${item.price}</span> | 
                        <span class="qty-num">數量: ${item.quantity}</span>
                    </div>
                </div>
            </div>
        `;

        // 3. 更新總金額
        totalPriceElement.innerText = total;
    } else {
        cartContent.innerHTML = "<p style='padding: 20px;'>購物車內目前沒有來自商品頁的資料。</p>";
    }
});

  

