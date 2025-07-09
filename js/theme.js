// 테마 토글
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle-icon');
    
    if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
    } else {
    body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
    }
}

// 테마 초기화
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle-icon');
    
    if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
    } else {
    body.removeAttribute('data-theme');
    themeIcon.textContent = '🌙';
    }
}