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
