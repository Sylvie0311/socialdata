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

 /* =========================================================
   購物車頁面：商品累加、修改、刪除、結帳
   ========================================================= */
   document.addEventListener('DOMContentLoaded', function() {
    
    const cartContainer = document.getElementById('cart-content');
    const totalDisplay = document.getElementById('totalPrice');
    const backBtn = document.querySelector('.back-s');
    const checkoutBtn = document.querySelector('.buy-s');

    console.log('購物車容器:', cartContainer);
    console.log('總金額顯示:', totalDisplay);

    setTimeout(function() {
        const reviewItems = document.querySelectorAll('.review-items');
        console.log('找到 review-items 個數:', reviewItems.length);
        reviewItems.forEach(item => {
        });

        const allDivs = document.querySelectorAll('div');
        allDivs.forEach(div => {
            if (div.innerText.includes('商品 A') || div.innerText.includes('商品 B')) {
                div.style.display = 'none';
            }
        });

        const cartItems = document.querySelectorAll('.cart-item');
        for (let i = 0; i < Math.min(2, cartItems.length); i++) {
            if (cartItems[i].innerText.includes('商品 A') || cartItems[i].innerText.includes('商品 B')) {
                cartItems[i].style.display = 'none';
            }
        }

        console.log('虛假商品已隱藏');
    }, 100);

    function getCart() {
        let cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function calculateTotal(cart) {
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    function renderCart() {
        let cart = getCart();

        if (!cartContainer) {
            console.error('找不到 #cart-content');
            return;
        }

        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <p style="padding:20px; text-align:center; color:#999;">購物車目前沒有商品</p>
            `;
            if (totalDisplay) totalDisplay.innerText = '0';
            return;
        }

        cartContainer.innerHTML = '';

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;

            const cartItemHTML = `
                <div class="cart-item" style="border-bottom: 2px solid #1c355e; padding: 15px; display: flex; align-items: center; justify-content: space-between;">
                    
                    <div style="display: flex; align-items: center; flex: 1;">
                        <div class="item-img" style="width: 90px; margin-right: 15px;">
                            <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 4px;">
                        </div>

                        <div class="item-info" style="flex: 1;">
                            <div class="item-name" style="font-weight:bold; margin-bottom:10px;">${item.name}</div>
                            <div class="item-qty" style="display: flex; align-items: center; gap: 10px;">
                                <span>單價: $${item.price}</span>
                                <button class="qty-s minus" data-index="${index}" style="cursor:pointer; width:30px; border: 1px solid #ccc; background: white; border-radius: 4px;">−</button>
                                <span class="qty-num" style="font-weight:bold; font-size:18px; min-width:30px; text-align:center;">${item.quantity}</span>
                                <button class="qty-s plus" data-index="${index}" style="cursor:pointer; width:30px; border: 1px solid #ccc; background: white; border-radius: 4px;">+</button>
                            </div>
                        </div>
                    </div>

                    <div style="text-align: right; margin-left: 20px;">
                        <div style="font-size: 16px; font-weight:bold; color: #e75480; margin-bottom: 8px;">$${itemTotal}</div>
                        <button class="btn-remove" data-index="${index}" style="cursor:pointer; padding: 6px 12px; background: #f0f0f0; border: 1px solid #ddd; border-radius: 4px; color: #666; font-size: 12px;">刪除</button>
                    </div>
                </div>
            `;

            cartContainer.innerHTML += cartItemHTML;
        });

        const total = calculateTotal(cart);
        if (totalDisplay) {
            totalDisplay.innerText = total;
        }

        console.log('購物車已渲染，商品數:', cart.length);

        bindCartEvents();
    }

    function bindCartEvents() {
        let cart = getCart();

        document.querySelectorAll('.qty-s.minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    if (confirm('是否移除此商品？')) {
                        cart.splice(index, 1);
                    } else {
                        return;
                    }
                }
                saveCart(cart);
                renderCart();
            });
        });

        document.querySelectorAll('.qty-s.plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity++;
                saveCart(cart);
                renderCart();
            });
        });

        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (confirm('確定要刪除此商品？')) {
                    cart.splice(index, 1);
                    saveCart(cart);
                    renderCart();
                }
            });
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            let cart = getCart();
            
            if (cart.length === 0) {
                alert('購物車是空的，無法結帳！');
                return;
            }
            window.location.href = 'pay.html';
           
        });
    }
    

    renderCart();
});

/*cart.html結帳按鈕跳轉至付款頁面*/ 
document.addEventListener('DOMContentLoaded', function() {
        const listContainer = document.getElementById('pay-items-list');
        const totalDisplay = document.getElementById('pay-total-price');
        
        // 從 LocalStorage 抓取購物車資料
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            listContainer.innerHTML = '<p>購物車內無商品</p>';
            return;
        }

        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            listContainer.innerHTML += `
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
                    <span>${item.name} x ${item.quantity}</span>
                    <span>$${itemTotal}</span>
                </div>
            `;
        });
        totalDisplay.innerText = total;

        // 處理最後的下單按鈕
        document.getElementById('checkout-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的訂購！訂單已成立。');
            localStorage.removeItem('cart'); // 下單成功後清空購物車
            window.location.href = '../../index.html'; // 回到首頁
        });
    });

/*歷史訂單:搜尋欄*/
document.addEventListener('DOMContentLoaded', function() {
    // 1. 選取搜尋輸入框 (根據你的 HTML 結構)
    const searchInput = document.querySelector('.search-bar input');
    // 2. 選取搜尋按鈕
    const searchBtn = document.querySelector('.search-s');
    // 3. 選取表格中所有的資料列 (排除第一個表頭列 tr)
    const tableRows = document.querySelectorAll('.order-table tr:not(:first-child)');

    if (!searchInput) return; // 如果頁面上沒有搜尋框則不執行

    // 定義搜尋邏輯函數
    function filterOrders() {
        const filterValue = searchInput.value.toUpperCase().trim();

        tableRows.forEach(row => {
            // 抓取每一列的第一個欄位 td (即訂單編號)
            const orderIdCell = row.getElementsByTagName('td')[0];
            
            if (orderIdCell) {
                const textValue = orderIdCell.textContent || orderIdCell.innerText;
                
                // 檢查訂單編號是否包含關鍵字
                if (textValue.toUpperCase().indexOf(filterValue) > -1) {
                    row.style.display = ""; // 顯示符合的列
                } else {
                    row.style.display = "none"; // 隱藏不符合的列
                }
            }
        });
    }

    // 綁定「即時搜尋」：當使用者放開按鍵時觸發
    searchInput.addEventListener('keyup', filterOrders);

    // 綁定「按鈕點擊」：點擊放大鏡圖示時觸發
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault(); // 防止按鈕預設行為
            filterOrders();
        });
    }
});
