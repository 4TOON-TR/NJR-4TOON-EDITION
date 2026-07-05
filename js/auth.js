/* ========================================
   فایل: auth.js
   منطق ورود، ثبت‌نام و مدیریت کاربر
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== المنت‌ها =====
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    const registerPassword = document.getElementById('registerPassword');
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');

    // ===== تغییر تب‌ها =====
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // حذف کلاس active از همه دکمه‌ها
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // نمایش فرم مربوطه
            const tab = this.dataset.tab;
            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === tab + 'Form') {
                    form.classList.add('active');
                }
            });
        });
    });

    // ===== نمایش/مخفی کردن رمز عبور =====
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // ===== قدرت رمز عبور =====
    if (registerPassword) {
        registerPassword.addEventListener('input', function() {
            const password = this.value;
            const strength = checkPasswordStrength(password);
            
            // به‌روزرسانی نوار قدرت
            strengthFill.className = 'strength-fill';
            if (password.length === 0) {
                strengthFill.style.width = '0%';
                strengthText.textContent = '';
                return;
            }
            
            if (strength < 30) {
                strengthFill.classList.add('weak');
                strengthText.textContent = 'ضعیف';
                strengthText.style.color = '#ff4444';
            } else if (strength < 60) {
                strengthFill.classList.add('medium');
                strengthText.textContent = 'متوسط';
                strengthText.style.color = '#ffaa00';
            } else if (strength < 80) {
                strengthFill.classList.add('strong');
                strengthText.textContent = 'قوی';
                strengthText.style.color = '#44ff88';
            } else {
                strengthFill.classList.add('perfect');
                strengthText.textContent = 'عالی';
                strengthText.style.color = 'var(--gold)';
            }
        });
    }

    function checkPasswordStrength(password) {
        let score = 0;
        
        // طول
        if (password.length >= 8) score += 20;
        if (password.length >= 12) score += 20;
        
        // حروف بزرگ و کوچک
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 20;
        
        // اعداد
        if (/\d/.test(password)) score += 20;
        
        // کاراکترهای خاص
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score += 20;
        
        return Math.min(score, 100);
    }

    // ===== ثبت‌نام =====
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('registerUsername').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            // اعتبارسنجی
            if (!username || !email || !password || !confirmPassword) {
                showNotification('لطفاً همه فیلدها را پر کنید', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('رمز عبور و تکرار آن مطابقت ندارند', 'error');
                return;
            }
            
            if (password.length < 6) {
                showNotification('رمز عبور باید حداقل ۶ کاراکتر باشد', 'error');
                return;
            }
            
            // بررسی تکراری نبودن نام کاربری
            const users = getUsers();
            if (users.some(u => u.username === username)) {
                showNotification('این نام کاربری قبلاً ثبت شده است', 'error');
                return;
            }
            
            // ذخیره کاربر جدید
            const newUser = {
                username: username,
                email: email,
                password: password,
                registerDate: new Date().toISOString()
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // ذخیره کاربر فعلی
            setCurrentUser(username);
            
            showNotification('ثبت‌نام با موفقیت انجام شد! خوش آمدی ' + username, 'success');
            
            // انتقال به صفحه اصلی بعد از ۱ ثانیه
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }

    // ===== ورود =====
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            if (!username || !password) {
                showNotification('لطفاً نام کاربری و رمز عبور را وارد کنید', 'error');
                return;
            }
            
            // بررسی کاربر
            const users = getUsers();
            const user = users.find(u => u.username === username && u.password === password);
            
            if (!user) {
                showNotification('نام کاربری یا رمز عبور اشتباه است', 'error');
                return;
            }
            
            // ذخیره کاربر فعلی
            setCurrentUser(username);
            
            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
            } else {
                localStorage.removeItem('rememberMe');
            }
            
            showNotification('خوش آمدی ' + username + '!', 'success');
            
            // انتقال به صفحه اصلی بعد از ۱ ثانیه
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }

    // ===== توابع کمکی =====
    
    // دریافت لیست کاربران
    function getUsers() {
        try {
            return JSON.parse(localStorage.getItem('users')) || [];
        } catch {
            return [];
        }
    }
    
    // ذخیره کاربر فعلی
    function setCurrentUser(username) {
        localStorage.setItem('currentUser', username);
    }
    
    // خروج از حساب
    window.logoutUser = function() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('rememberMe');
        window.location.href = 'index.html';
    };

    // ===== اعلان‌ها =====
    function showNotification(message, type = 'info') {
        // حذف اعلان قبلی
        const oldNotification = document.querySelector('.notification');
        if (oldNotification) {
            oldNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;
        
        // استایل اعلان
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 24px;
            padding: 16px 24px;
            background: ${type === 'success' ? 'rgba(212, 175, 55, 0.95)' : type === 'error' ? 'rgba(255, 68, 68, 0.95)' : 'rgba(255, 255, 255, 0.1)'};
            color: ${type === 'success' ? '#0a0a0a' : '#fff'};
            border-radius: 12px;
            font-family: var(--font-secondary);
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 12px;
            border: 1px solid ${type === 'success' ? 'var(--gold)' : 'rgba(255,255,255,0.1)'};
            animation: slideInRight 0.5s ease both;
            max-width: 400px;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(notification);
        
        // حذف بعد از ۳ ثانیه
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease both';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // انیمیشن‌های اعلان
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(60px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(60px);
            }
        }
    `;
    document.head.appendChild(style);
});