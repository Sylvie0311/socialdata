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
   總額計算、數量加減、結帳按鈕、返回箭頭
   ========================================================= */
document.addEventListener('DOMContentLoaded', function() {
    
    const cartContainer = document.getElementById('cart-content');
    const totalDisplay = document.getElementById('totalPrice');
    const backBtn = document.querySelector('.back-s');
    const checkoutBtn = document.querySelector('.buy-s'); 

    function advancedRenderCart() {
        let savedData = localStorage.getItem('cartItem');
        let item = savedData ? JSON.parse(savedData) : null;

        if (cartContainer && item && item.quantity > 0) {
        
            let currentTotal = item.price * item.quantity;

            cartContainer.innerHTML = `
                <div class="cart-item" style="border-bottom: 2px solid #1c355e; padding: 15px; display: flex; align-items: center;">
                    <div class="item-img" style="width: 90px; margin-right: 15px;">
                        <img src="${item.image}" alt="${item.name}" style="width: 100%;">
                    </div>
                    <div class="item-info" style="flex: 1;">
                        <div class="item-name" style="font-weight:bold; margin-bottom:10px;">${item.name}</div>
                        <div class="item-qty" style="display: flex; align-items: center; gap: 10px;">
                            <span>單價: $${item.price}</span>
                            <button class="qty-s minus" id="btn-cart-minus" style="cursor:pointer; width:30px;">－</button>
                            <span class="qty-num" style="font-weight:bold; font-size:18px;">${item.quantity}</span>
                            <button class="qty-s plus" id="btn-cart-plus" style="cursor:pointer; width:30px;">＋</button>
                        </div>
                    </div>
                </div>
            `;

            if (totalDisplay) {
                totalDisplay.innerText = currentTotal;
            }

            document.getElementById('btn-cart-minus').onclick = function() { updateQty(-1); };
            document.getElementById('btn-cart-plus').onclick = function() { updateQty(1); };

        } else if (cartContainer) {
            cartContainer.innerHTML = '<p style="padding:20px; text-align:center;">購物車目前沒有商品</p>';
            if (totalDisplay) totalDisplay.innerText = "0";
        }
    }

    // --- 2. 數量更新邏輯 ---
    window.updateQty = function(change) { 
        let savedData = localStorage.getItem('cartItem');
        if (savedData) {
            let item = JSON.parse(savedData);
            let newQty = item.quantity + change;

            if (newQty < 1) {
                let check = confirm("是否移除此商品？");
                if (check) {
                    localStorage.removeItem('cartItem');
                } else {
                    return; 
                }
            } else {
                item.quantity = newQty;
                localStorage.setItem('cartItem', JSON.stringify(item));
            }
            advancedRenderCart();
        }
    };

    // --- 3. 結帳按鈕功能 ---
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            let savedData = localStorage.getItem('cartItem');
            if (!savedData) {
                alert("購物車是空的，無法結帳！");
            } else {
                let finalPrice = totalDisplay ? totalDisplay.innerText : 0;
                alert(`結帳成功！總金額 $${finalPrice}\n謝謝您的購買！`);
                localStorage.removeItem('cartItem'); 
                advancedRenderCart(); 
                // window.location.href = '../index.html'; 
            }
        });
    }

    // --- 4. 左上角返回箭頭功能 ---
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            if (document.referrer) {
                window.history.back();
            } else {
                window.location.href = '../index.html';
            }
        });
    }

    // 
    advancedRenderCart();
});


