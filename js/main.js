/* ========================================
   فایل: main.js
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== لودر =====
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 1200);
    }

    // ===== منوی همبرگری =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
    }

    // بستن منو
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });

    // ===== تغییر هدر هنگام اسکرول =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 60) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.15)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
            navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.08)';
        }
    });

    // ===== اسکرول نرم =====
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== شمارنده‌های آمار =====
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateNumbers = function() {
        statNumbers.forEach(function(el) {
            const target = parseInt(el.getAttribute('data-count'));
            if (isNaN(target)) return;
            
            const increment = Math.ceil(target / 60);
            let current = 0;
            
            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = current;
            }, 30);
        });
    };

    // رصد شمارنده‌ها با IntersectionObserver
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateNumbers();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// ===== مدیریت وضعیت کاربر =====
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = localStorage.getItem('currentUser');
    const loginBtn = document.getElementById('loginBtn');
    
    if (currentUser && loginBtn) {
        loginBtn.innerHTML = `
            <i class="fas fa-user-check"></i>
            ${currentUser}
            <span class="user-badge">●</span>
        `;
        loginBtn.style.background = 'rgba(212, 175, 55, 0.1)';
        loginBtn.style.border = '1px solid var(--gold)';
        loginBtn.style.color = 'var(--gold) !important';
        loginBtn.href = '#';
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('آیا می‌خواهی از حساب خود خارج شوی؟')) {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('rememberMe');
                window.location.reload();
            }
        });
    }
});