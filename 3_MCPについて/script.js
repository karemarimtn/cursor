// DOM要素の取得
const nav = document.querySelector('.nav');
const sidebar = document.querySelector('.sidebar');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav a, .table-of-contents a');

// スムーズスクロール機能
function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// アクティブセクションのハイライト
function initActiveSection() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    updateActiveNavLink(id);
                }
            });
        },
        {
            rootMargin: '-100px 0px -66%',
            threshold: 0
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
}

// アクティブなナビゲーションリンクの更新
function updateActiveNavLink(activeId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
        }
    });
}

// スクロール効果
function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // ヘッダーの背景透明度調整
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}

// カードのアニメーション効果
function initCardAnimations() {
    const cards = document.querySelectorAll('.feature-card, .component-card');
    
    const cardObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        },
        {
            threshold: 0.1
        }
    );
    
    cards.forEach(card => {
        cardObserver.observe(card);
    });
}

// レスポンシブメニュー
function initResponsiveMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'メニューを開く');
    
    const headerContent = document.querySelector('.header-content');
    headerContent.insertBefore(menuToggle, nav);
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        if (nav.classList.contains('active')) {
            menuToggle.innerHTML = '×';
            menuToggle.setAttribute('aria-label', 'メニューを閉じる');
        } else {
            menuToggle.innerHTML = '☰';
            menuToggle.setAttribute('aria-label', 'メニューを開く');
        }
    });
    
    // メニューリンクをクリックした時にメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.innerHTML = '☰';
            menuToggle.setAttribute('aria-label', 'メニューを開く');
        });
    });
}

// スクロール・トゥ・トップボタン
function initScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.setAttribute('aria-label', 'トップへ戻る');
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// コピー機能
function initCopyToClipboard() {
    const codeBlocks = document.querySelectorAll('pre, code');
    
    codeBlocks.forEach(block => {
        if (block.textContent.trim().length > 50) {
            const copyBtn = document.createElement('button');
            copyBtn.classList.add('copy-btn');
            copyBtn.innerHTML = '📋';
            copyBtn.setAttribute('aria-label', 'コピー');
            
            block.style.position = 'relative';
            block.appendChild(copyBtn);
            
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(block.textContent).then(() => {
                    copyBtn.innerHTML = '✅';
                    setTimeout(() => {
                        copyBtn.innerHTML = '📋';
                    }, 2000);
                });
            });
        }
    });
}

// ダークモード切り替え
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.classList.add('dark-mode-toggle');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.setAttribute('aria-label', 'ダークモード切り替え');
    
    const headerContent = document.querySelector('.header-content');
    headerContent.appendChild(darkModeToggle);
    
    // ローカルストレージから設定を読み込み
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️';
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeToggle.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// 検索機能
function initSearch() {
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'コンテンツを検索...';
    searchInput.classList.add('search-input');
    
    const searchResults = document.createElement('div');
    searchResults.classList.add('search-results');
    
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchResults);
    
    const sidebar = document.querySelector('.sidebar');
    sidebar.appendChild(searchContainer);
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value, searchResults);
        }, 300);
    });
}

// 検索実行
function performSearch(query, resultsContainer) {
    if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const results = [];
    const regex = new RegExp(query, 'gi');
    
    sections.forEach(section => {
        const title = section.querySelector('h2').textContent;
        const content = section.textContent;
        
        if (content.match(regex)) {
            const matches = content.match(regex);
            results.push({
                title: title,
                id: section.id,
                matches: matches ? matches.length : 0
            });
        }
    });
    
    results.sort((a, b) => b.matches - a.matches);
    
    resultsContainer.innerHTML = results.length ? 
        results.map(result => `
            <div class="search-result" onclick="navigateToSection('${result.id}')">
                <strong>${result.title}</strong>
                <span class="match-count">${result.matches} 件</span>
            </div>
        `).join('') : 
        '<div class="no-results">検索結果がありません</div>';
}

// セクションへの移動
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // 検索結果を非表示
        document.querySelector('.search-results').innerHTML = '';
        document.querySelector('.search-input').value = '';
    }
}

// 進捗バー
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// 印刷機能
function initPrint() {
    const printBtn = document.createElement('button');
    printBtn.classList.add('print-btn');
    printBtn.innerHTML = '🖨️';
    printBtn.setAttribute('aria-label', '印刷');
    
    const headerContent = document.querySelector('.header-content');
    headerContent.appendChild(printBtn);
    
    printBtn.addEventListener('click', () => {
        window.print();
    });
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initActiveSection();
    initScrollEffects();
    initCardAnimations();
    initResponsiveMenu();
    initScrollToTop();
    initCopyToClipboard();
    initDarkMode();
    initSearch();
    initProgressBar();
    initPrint();
    
    // ページ読み込み時のアニメーション
    document.body.classList.add('loaded');
});

// パフォーマンス監視
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // アイドル時間中に実行する処理
        console.log('Page optimization completed');
    });
}

// エラーハンドリング
window.addEventListener('error', (event) => {
    console.error('JavaScript error:', event.error);
});

// Service Worker の登録（オフライン対応）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 
