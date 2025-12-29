/*商品介面+首頁*/ 
/*搜尋*/ 
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
  if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', function() {
            searchInput.classList.toggle('show-search');
            if (searchInput.classList.contains('show-search')) {
                searchInput.focus();
            }
        });
    }
});
/*aside連結不同的商品介面*/
const allProducts = {
        //蘇菲
        'sofy_175cm': {name: "蘇菲日用天然原生棉 量少型17.5cm", price: "$139", intro: "量少型專用，給您極致輕薄的防護體驗。", img: "../../img/天然原生棉(量少型).png"},
        'sofy_23cm': {name: "日用23cm 天然原生棉 極薄0.1型", price: "$99", intro: "蘇菲日用23cm，超薄0.1cm 彷彿沒穿一般零觸感表層，柔滑細緻。", img: "../../img/天然原生棉(極薄0.1型).png"},
        'sofy_23_normal': { name: "蘇菲 日用天然原生棉 超薄型23cm", price: "$109", img: "../../img/天然原生棉(超薄型23cm).png", intro: "天然原生棉素材，親膚不刺激，適合一般流量日用。" },
        'sofy_26cm':{name: "蘇菲 日用天然原生棉 超薄型26cm", price: "$119", img: "../../img/天然原生棉(超薄型26cm).png", intro: "加長日用款，吸收力升級，給您更全面的防護。"},
        'sofy_29cm': { name: "蘇菲 夜用天然原生棉 超薄型29cm", price: "$129", img: "../../img/天然原生棉(超薄型29cm).png", intro: "夜用基礎款，天然棉柔觸感，呵護生理期敏感肌膚。" },
        'sofy_28cm': { name: "蘇菲 超薄夜用型28cm",price: "$159",  img: "../../img/超薄 夜用型.png", intro: "超薄瞬吸體，快速吸收不回滲，夜間活動依然自在。專為量多夜晚設計的「超薄瞬吸體」，能瞬間捕捉大流量並緊鎖於底層，維持表層極致乾爽、不回滲，讓妳在夜間活動依然輕盈自在。" },
        'sofy_ultra_28': { name: "蘇菲 草本抑菌 夜用型28cm", price: "$159", img: "../../img/草本抑菌 夜用型.png", intro: "超薄瞬吸體，快速吸收不回滲，夜間活動依然自在。" },
        'sofy_happy_29': { name: "蘇菲 Happy Catch 夜用型29cm", price: "$89", img: "../../img/Happy Catch 夜用型.png", intro: "獨特可愛貓咪設計，心情與肌膚同時獲得療癒。" },
        //蕾妮雅
        'laurier_225cm': { name: "蕾妮亞 零觸感特薄 22.5cm", price: "$109", img: "../../img/蕾妮亞零觸感特薄(22.5cm).png", intro: "極致特薄設計，瞬吸乾爽，讓您忘記生理期的存在。" },
        'laurier_feather_225': { name: "蕾妮亞 零觸感羽感棉 22.5cm", price: "$119", img: "../../img/零觸感羽感棉(22.5cm).png", intro: "如羽毛般的輕盈觸感，減少摩擦不適感。" },
        'laurier_25cm': { name: "蕾妮亞 零觸感羽感棉 25cm", price: "$129", img: "../../img/零觸感羽感棉(25cm).png", intro: "量多日用首選，羽感表層溫柔呵護肌膚。" },
        'laurier_30cm': { name: "蕾妮亞 零觸感羽感棉 30cm", price: "$139", img: "../../img/零觸感羽感棉(30cm).png", intro: "夜用羽感棉，加寬尾翼防止後漏。" },
        'laurier_35cm': { name: "蕾妮亞 零觸感羽感棉 35cm", price: "$149", img: "../../img/零觸感羽感棉(35cm).jpg", intro: "大流量夜用推薦，超薄吸收體不悶熱。" },
        'laurier_40cm': { name: "蕾妮亞 零觸感羽感棉 40cm", price: "$159", img: "../../img/零觸感羽感棉(40cm).jpg", intro: "40cm極長守護，徹底翻身也不擔心滲漏。" },
        'laurier_ultra_40': { name: "蕾妮亞 零觸感特薄夜用 40cm", price: "$159", img: "../../img/蕾妮亞零觸感特薄(40cm).jpg", intro: "特薄與極長的完美結合，安穩好眠到天亮。" },
        'laurier_rose': { name: "蕾妮亞 淨妍護墊 浪漫玫瑰微香", price: "$99", img: "../../img/蕾妮亞淨妍護墊(浪漫玫瑰微香).png", intro: "淡淡玫瑰清香，保持每日乾爽好心情。" },
        'laurier_pad': { name: "蕾妮亞 淨妍護墊 透氣海藍無香", price: "$99", img: "../../img/蕾妮亞淨妍護墊(透氣海藍無香).jpg", intro: "高透氣設計，無香料負擔，純淨呵護。" },
        //靠得住
        'kotex_girl': { name: "靠得住 少女肌衛生棉", price: "$99", img: "../../img/少女肌衛生棉.png", intro: "專為少女肌膚設計，細緻親膚，減少摩擦紅腫。" },
        'kotex_23cm': { name: "靠得住 茶樹沁涼 涼感衛生棉 23cm", price: "$100", img: "../../img/茶樹沁涼 涼感衛生棉.jpg", intro: "添加茶樹精油，微涼舒爽，告別夏天悶熱感。" },
        'kotex_35cm': { name: "靠得住 完美封漏夜用衛生棉 35cm", price: "$99", img: "../../img/完美封漏夜用衛生棉.jpg", intro: "3重防漏側邊，翻身零死角，量多夜晚最安心。" },
        'kotex_pad': { name: "靠得住 梔子花香氛護墊", price: "$89", img: "../../img/梔子花香氛護墊.jpg", intro: "優雅梔子花香，專利除臭技術，清爽自信。" },
        'kotex_safe': { name: "靠得住 安全瞬吸護墊", price: "$89", img: "../../img/安全瞬吸護墊.jpg", intro: "瞬吸表層設計，吸收微量分泌物，保持底褲潔淨。" },
        'kotex_freesia_23': { name: "靠得住 茶樹舒涼 小蒼蘭 23cm", price: "$109", img: "../../img/茶樹舒涼 小蒼蘭.jpg", intro: "小蒼蘭清新香氛，搭配微涼配方，乾爽不黏膩。" },
        'kotex_herbal_23': { name: "靠得住 草本抑菌棉 23cm", price: "$99", img: "../../img/草本抑菌棉.jpg", intro: "天然草本抑菌層，溫和守護私密處健康。" },
        'kotex_hole_28': { name: "靠得住 超洞吸衛生棉 28cm", price: "$99", img: "../../img/超洞吸衛生棉.jpg", intro: "獨特漏斗型瞬吸孔，大流量也能瞬間吸收。" },
        'kotex_28cm': { name: "靠得住 茶樹舒涼夜用衛生棉 28cm", price: "$149", img: "../../img/茶樹舒涼夜用衛生棉.jpg", intro: "夜用涼感系列，舒緩燥熱，提供整夜清爽。" },
        //康乃馨
        'carnation_215cm': { name: "康乃馨 御守棉超薄 一般流量 21.5cm", price: "$100", img: "../../img/御守棉超薄衛生棉  一般流量.jpg", intro: "適合一般日用，超薄設計讓運動穿搭不尷尬。" },
        'carnation_28cm': { name: "康乃馨 御守棉超薄 量多加長 28cm", price: "$129", img: "../../img/御守棉超薄衛生棉(量多加長).jpg", intro: "加長防護，量多日用的不二選擇。" },
        'carnation_255cm': { name: "康乃馨 超薄蝶型衛生棉 量多型 25.5cm", price: "$139", img: "../../img/超薄蝶型衛生棉  量多型.jpg", intro: "經典蝶翼設計，穩定不移位，吸力強勁。" },
        'carnation_pad': { name: "康乃馨 香草花園護墊 向日葵", price: "$99", img: "../../img/香草花園護墊(向日葵).jpg", intro: "清甜香氣，柔軟表層，給您如花園般的舒適感。" },
        'carnation_36cm': { name: "康乃馨 御守棉夜用超長 36cm", price: "$149", img: "../../img/御守棉夜用超長.jpg", intro: "御守棉系列，瞬吸防漏，守護每個不安穩的夜晚。" },
        'carnation_40cm': { name: "康乃馨 御守棉夜用極長 40cm", price: "$159", img: "../../img/御守棉夜用極長.jpg", intro: "旗艦級40cm長度，全方位阻截後漏。" },
        'carnation_cham': { name: "康乃馨 香草花園護墊 洋甘菊", price: "$99", img: "../../img/香草花園護墊(洋甘菊).jpg", intro: "舒緩洋甘菊香氛，溫柔呵護每日私密肌。" },
        'carnation_cotton': { name: "康乃馨 香草花園護墊 美國棉", price: "$99", img: "../../img/香草花園護墊(美國棉).jpg", intro: "採用高品質美國棉，天然無壓力，透氣不悶。" },
        'carnation_365cm': { name: "康乃馨 輕柔美學安睡棉 36.5cm", price: "$159", img: "../../img/輕柔美學安睡棉.jpg", intro: "專為睡眠設計，全方位彈性包覆，享受安穩睡眠。" }
    };     
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

   const nameElem = document.getElementById('p-name');
    const priceElem = document.getElementById('p-price');
    const introElem = document.getElementById('p-intro');
    const imgElem = document.getElementById('p-img');

    if (nameElem && productId && allProducts[productId]) {
        const data = allProducts[productId];
        
        nameElem.innerText = data.name;
        if (priceElem) priceElem.innerText = data.price;
        if (introElem) introElem.innerText = data.intro;
        if (imgElem) imgElem.src = data.img;
        
        // 可選：讓分頁標題也變成商品名
        document.title = data.name;
    }
    /* 數量鍵的加減號 */
    const minusBtn = document.getElementById('btn-minus');
    const addBtn = document.getElementById('btn-add');
    const qtyInput = document.getElementById('quantity-input');

    if (addBtn && minusBtn) {
        addBtn.onclick = () => {
            let val = parseInt(qtyInput.value);
            if (val < 99) qtyInput.value = val + 1;
        };
        minusBtn.onclick = () => {
            let val = parseInt(qtyInput.value);
            if (val > 1) qtyInput.value = val - 1;
        };
    }
});


/* 加入購物車 */
   document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('add-to-cart');
    const qtyInput = document.getElementById('quantity-input');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            //抓取商品資料
            const productData = {
                name: document.querySelector('.product-name p')?.innerText || '商品名稱',
                price: parseInt(document.querySelector('.price p')?.innerText?.replace(/\D/g, '') || '0'),
                quantity: parseInt(qtyInput?.value || '1'),
                image: document.querySelector('.product-picture img')?.src || '../img/default.jpg'
            };

            if (productData.price === 0) {
                alert('商品價格錯誤，請檢查頁面！');
                return;
            }

            if (productData.quantity < 1) {
                alert('請輸入正確的數量！');
                return;
            }

           
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');

            //檢查商品是否已在購物車
            const existingItem = cart.find(item => item.name === productData.name);

            if (existingItem) {
                
                existingItem.quantity += productData.quantity;
                alert(`${productData.name}\n已加入購物車！\n目前數量：${existingItem.quantity}`);
            } else {
                
                cart.push(productData);
                alert(`${productData.name}\n已加入購物車！`);
            }

            
            localStorage.setItem('cart', JSON.stringify(cart));

        });
    }
});
/*main底下的跳轉頁面按鈕*/

window.currentPage = 1; 
const pageConfig = {
    1: { prefix: 'sofy' },
    2: { prefix: 'laurier' },
    3: { prefix: 'kotex' },
    4: { prefix: 'carnation' }
};


window.changePage = function(pageNum) {
    // 檢查範圍，防止箭頭點出界
    if (pageNum < 1 || pageNum > 4) return;
    
    window.currentPage = pageNum;

    
    renderProducts(pageNum);

    
    document.querySelectorAll('.page-num').forEach(el => el.classList.remove('active'));
    const activeBtn = document.getElementById(`page-${pageNum}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    
    document.getElementById('product-container').scrollIntoView({ behavior: 'smooth' });
};


function renderProducts(page) {
    const container = document.getElementById('product-container');
    if (!container) return;

    const prefix = pageConfig[page].prefix;
    container.innerHTML = ''; // 清空

    for (let id in allProducts) {
        if (id.startsWith(prefix)) {
            const item = allProducts[id];
            const imgSrc = item.img.replace('../../img/', 'img/');
            
            container.innerHTML += `
                <div class="product">
                    <a href="asset/html/product_main.html?id=${id}">
                        <img src="${imgSrc}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>價格: ${item.price}</p>
                    </a>
                </div>`;
        }
    }
}

//預設顯示第一頁
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(1);
});

/* =========================================================
     動態廣告
   ========================================================= */
   document.addEventListener('DOMContentLoaded', function() {
    const adGroup = document.querySelector('.ad-group');
     
    if (adGroup) {
        const adsData = [
            { 
                img: 'img/kotex廣告.jpg', 
                link: 'asset/html/product_main.html?id=kotex_28cm' 
            },
            { 
                img: 'img/蕾妮亞廣告.jpg', 
                link: 'asset/html/product_main.html?id=laurier_30cm' 
            },
            { 
                img: 'img/167966.jpg', 
                link: 'asset/html/product_main.html?id=sofy_23cm' 
            }
        ];

       
        let htmlContent = '';
        
        adsData.forEach((ad, index) => {
            const target = ad.link.startsWith('http') ? '_blank' : '_self';
            const opacity = index === 0 ? '1' : '0';
            const pointerEvents = index === 0 ? 'auto' : 'none';
            const zIndex = index === 0 ? '10' : '0';

            htmlContent += `
                <a href="${ad.link}" target="${target}" class="slide-link" 
                   style="opacity: ${opacity}; pointer-events: ${pointerEvents}; z-index: ${zIndex}; 
                          transition: opacity 0.5s ease; position: absolute; top: 0; left: 0; width: 100%;">
                    <img src="${ad.img}" class="ad-image slide-item" alt="廣告${index+1}" style="width:100%; display:block;">
                </a>
            `;
        });

        adGroup.innerHTML = htmlContent;

        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'ad-dots';
        dotsContainer.style.cssText = `
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 12px;
            z-index: 20;
        `;

        adsData.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'ad-dot';
            dot.dataset.index = index;
            dot.style.cssText = `
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: ${index === 0 ? 'white' : 'rgba(255, 255, 255, 0.5)'};
                cursor: pointer;
                transition: background-color 0.3s ease;
            `;
            dotsContainer.appendChild(dot);
        });

        adGroup.appendChild(dotsContainer);

        const slides = document.querySelectorAll('.slide-link');
        const dots = document.querySelectorAll('.ad-dot');
        let currentIndex = 0;
        const totalSlides = slides.length;
        let autoPlayInterval;

        function goToSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
                slide.style.pointerEvents = i === index ? 'auto' : 'none';
                slide.style.zIndex = i === index ? '10' : '0';
            });

            dots.forEach((dot, i) => {
                dot.style.backgroundColor = i === index ? 'white' : 'rgba(255, 255, 255, 0.5)';
            });

            currentIndex = index;
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                const nextIndex = (currentIndex + 1) % totalSlides;
                goToSlide(nextIndex);
            }, 3000);
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                goToSlide(index);
            });
        });


        dots.forEach(dot => {
            dot.addEventListener('mouseenter', () => {
                dot.style.transform = 'scale(1.3)';
            });
            dot.addEventListener('mouseleave', () => {
                dot.style.transform = 'scale(1)';
            });
        });

        startAutoPlay();
    }
});

/* =========================================================
   搜尋欄
   ========================================================= */
   document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded 觸發');
    
    const searchInput = document.getElementById('search-input');
    const container = document.getElementById('product-container');

    console.log('搜尋輸入框:', searchInput);
    console.log('商品容器:', container);
    console.log('allProducts:', typeof allProducts !== 'undefined' ? Object.keys(allProducts).length + ' 個商品' : '未定義');

    if (searchInput && container) {
        searchInput.addEventListener('keypress', function (e) {
            console.log('按鍵:', e.key);
            
            if (e.key === 'Enter') {
                console.log('執行搜尋...');
                performSearch();
            }
        });

        const searchBtn = document.getElementById('search-btn');
        if (searchBtn) {
            console.log('找到搜尋按鈕');
            searchBtn.addEventListener('click', performSearch);
        }

        function performSearch() {
            const keyword = searchInput.value.trim().toLowerCase();
            console.log('搜尋關鍵字:', keyword);
            
            if (keyword === "") {
                alert("請輸入關鍵字！");
                return;
            }

            if (typeof allProducts === 'undefined') {
                console.error('allProducts 未定義！');
                alert("商品資料未載入，請檢查 products.js 是否正確引入");
                return;
            }

            container.innerHTML = ''; 
            let found = false;
            let resultCount = 0;

            for (let id in allProducts) {
                const item = allProducts[id];
                console.log('檢查商品:', item.name);
 
                if (item.name.toLowerCase().includes(keyword)) {
                    const imgSrc = item.img.replace('../../img/', 'img/');
                    
                    container.innerHTML += `
                        <div class="product">
                            <a href="asset/html/product_main.html?id=${id}">
                                <img src="${imgSrc}" alt="${item.name}" loading="lazy">
                                <h3>${item.name}</h3>
                                <p>價格: ${item.price}</p>
                            </a>
                        </div>`;
                    found = true;
                }
            }

            console.log('搜尋完成，找到 ' + resultCount + ' 個結果');

            if (!found) {
                container.innerHTML = `<p style="padding:20px; font-size:1.2rem; color:#999; text-align:center;">
                    找不到「${keyword}」相關商品
                </p>`;
            }

            const pagination = document.querySelector('.pagination');
            if (pagination) {
                pagination.style.display = 'none';
            }
        }
    } else {
        console.error('搜尋欄或容器未找到！');
        console.error('搜尋輸入框 ID:', searchInput ? '找到' : '找不到');
        console.error('商品容器 ID:', container ? '找到' : '找不到');
    }
});

