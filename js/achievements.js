/* ========================================
   فایل: achievements.js
   انیمیشن‌ها و تعاملات صفحه افتخارات
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== شمارنده‌های آمار =====
    const summaryNumbers = document.querySelectorAll('.summary-number');
    
    const animateSummaryNumbers = function() {
        summaryNumbers.forEach(function(el) {
            const targetText = el.textContent;
            const target = parseInt(targetText.replace(/[^0-9]/g, ''));
            if (isNaN(target)) return;
            
            let current = 0;
            const increment = Math.ceil(target / 50);
            
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

    // رصد بخش خلاصه آمار
    const summaryObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateSummaryNumbers();
                summaryObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const summarySection = document.querySelector('.achievement-summary');
    if (summarySection) {
        summaryObserver.observe(summarySection);
    }

    // ===== انیمیشن کارت‌ها =====
    const cards = document.querySelectorAll('.achievement-card, .record-card, .summary-item');
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(function(card) {
        cardObserver.observe(card);
    });

    // ===== مدیریت کاربر =====
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

    // ===== پارتیکل =====
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 100, 
                    density: { 
                        enable: true, 
                        value_area: 700 
                    } 
                },
                color: { 
                    value: '#D4AF37' 
                },
                shape: { 
                    type: 'circle' 
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: { 
                        enable: true, 
                        speed: 1.5, 
                        opacity_min: 0.05 
                    }
                },
                size: {
                    value: 2.8,
                    random: true,
                    anim: { 
                        enable: true, 
                        speed: 3, 
                        size_min: 0.5 
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: '#D4AF37',
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { 
                        enable: true, 
                        mode: 'repulse' 
                    },
                    onclick: { 
                        enable: true, 
                        mode: 'push' 
                    }
                }
            },
            retina_detect: true
        });
    }
});