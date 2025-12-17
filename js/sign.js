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
  