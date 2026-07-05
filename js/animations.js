/* ========================================
   فایل: animations.js
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== تایپ‌رایتر =====
    const typedElement = document.getElementById('typed-text');
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'جادوگر فوتبال',
                'سلطان دریبل‌ها',
                'اسطوره‌ی برزیل',
                'شاهکار فوتبال',
                'NJR 10'
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: false,
        });
    }

    // ===== پارتیکل‌ها =====
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

    // ===== انیمیشن کارت‌ها با IntersectionObserver =====
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.timeline-item, .achievement-card, .gallery-item').forEach(function(el) {
        observer.observe(el);
    });
});