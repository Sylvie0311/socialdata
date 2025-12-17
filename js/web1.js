/*商品介面+首頁*/ 
document.addEventListener('DOMContentLoaded', function() {
    // 1. 取得 DOM 元素
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');

    // 2. 設置初始狀態（確保頁面載入時是隱藏的，雖然 CSS 已經做了）
    // 這裡我們依賴 CSS 預設的 display: none

    // 3. 監聽圖片的點擊事件
    searchIcon.addEventListener('click', function() {
        // 使用 classList.toggle() 來切換 .show-search 這個類別
        // 如果輸入欄現在是隱藏的 (沒有 .show-search)，點擊後就會加上它 (顯示)
        // 如果輸入欄現在是顯示的 (有 .show-search)，點擊後就會移除它 (隱藏)
        searchInput.classList.toggle('show-search');
        
        // 可選：如果顯示出來後，讓輸入框自動取得焦點，方便用戶輸入
        if (searchInput.classList.contains('show-search')) {
            searchInput.focus();
        }
    });
});

/*商品頁面數量加減號*/ 
const minusBtn = document.getElementById('btn-minus');
const addBtn = document.getElementById('btn-add');
const qtyInput = document.getElementById('quantity-input');

addBtn.onclick = () => {
    let val = parseInt(qtyInput.value);                                                                    
    if (val < 99) qtyInput.value = val + 1;
};

minusBtn.onclick = () => {
    let val = parseInt(qtyInput.value);
    if (val > 1) qtyInput.value = val - 1;
};
/*儲存商品介面中的'加入購物車'的資訊(ex:購買商品及數量)到cart.html*/ 
document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('add-to-cart');
    const qtyInput = document.getElementById('quantity-input');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // 1. 抓取網頁上的商品資料
            const productData = {
                name: document.querySelector('.product-name p').innerText,
                price: 99, // 也可以用 document.querySelector('.price p').innerText 抓取再處理
                quantity: parseInt(qtyInput.value),
                image: document.querySelector('.product-picture img').src
            };

            // 2. 儲存到 LocalStorage (轉換成字串儲存)
            localStorage.setItem('cartItem', JSON.stringify(productData));

            alert('已加入購物車！');
            
            // 3. 跳轉到購物車頁面
            window.location.href = '../html/cart.html';
        });
    }
});
