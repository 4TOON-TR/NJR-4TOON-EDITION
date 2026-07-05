/* ========================================
   فایل: chatbot.js
   منطق چت‌بات هوشمند نیمار
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== المنت‌ها =====
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const typingIndicator = document.getElementById('typingIndicator');
    const suggestBtns = document.querySelectorAll('.suggest-btn');
    const totalQuestions = document.getElementById('totalQuestions');
    const answeredQuestions = document.getElementById('answeredQuestions');
    const chatRating = document.getElementById('chatRating');
    const charCount = document.getElementById('charCount');

    // ===== متغیرها =====
    let questionCount = 0;
    let answerCount = 0;
    let isProcessing = false;

    // ===== دیتابیس پاسخ‌ها =====
    const responses = {
        // ===== اطلاعات شخصی =====
        'نیمار چند سال دارد؟': 'نیمار جونیور در تاریخ ۵ فوریه ۱۹۹۲ متولد شده است. او در سال ۲۰۲۶، ۳۴ ساله است. اما هنوز هم مثل جوان‌های ۲۰ ساله بازی میکنه! ✨',
        'نیمار کجا به دنیا آمده؟': 'نیمار در شهر "موجی داس کروزس" در ایالت سائوپائولو برزیل به دنیا آمده. همون جایی که فوتبال در خونشونه! 🇧🇷',
        'نام کامل نیمار چیست؟': 'نام کامل او "نیمار داسیلوا سانتوس جونیور" هست. اما همه اون رو به اسم "نیمار" میشناسن!',
        'قد نیمار چقدر است؟': 'نیمار ۱۷۵ سانتی‌متر قد داره. با این قد، مهارت‌های دریبل‌زنی‌اش رو خیلی خوب انجام میده!',
        
        // ===== باشگاه‌ها =====
        'نیمار در کدام باشگاه ها بازی کرده؟': 'نیمار تا الان توی ۵ تیم بازی کرده:\n✨ سانتوس (۲۰۰۹-۲۰۱۳)\n✨ بارسلونا (۲۰۱۳-۲۰۱۷)\n✨ پاری سن ژرمن (۲۰۱۷-۲۰۲۳)\n✨ الهلال (۲۰۲۳-۲۰۲۵)\n✨ سانتوس (بازگشت ۲۰۲۵-حالا)',
        'نیمار چند گل در بارسلونا زده؟': 'نیمار در ۱۸۶ بازی برای بارسلونا، ۱۰۵ گل زده و ۷۶ پاس گل داده! چه آمار فوق‌العاده‌ای! 🔥',
        'نیمار چند گل در پاری سن ژرمن زده؟': 'نیمار در ۱۷۳ بازی برای پی‌اس‌جی، ۱۱۸ گل زده و ۷۷ پاس گل داده! بهترین دوران گلزنی‌اش رو در پاریس داشت! ⚽',
        
        // ===== افتخارات =====
        'نیمار چند جام دارد؟': 'نیمار تا الان ۳۲ جام قهرمانی در کارنامه‌اش داره!\n🏆 ۸ جام با سانتوس\n🏆 ۹ جام با بارسلونا\n🏆 ۱۳ جام با پی‌اس‌جی\n🏆 ۲ جام با الهلال',
        'نیمار چند گل ملی دارد؟': 'نیمار با ۷۹ گل، بهترین گل‌زن تاریخ تیم ملی برزیل هست! از پله هم بیشتر گل زده! 🇧🇷🔥',
        
        // ===== رکوردها =====
        'نیمار چه رکوردهایی دارد؟': 'رکوردهای اصلی نیمار:\n1️⃣ بهترین گل‌زن تاریخ برزیل (۷۹ گل)\n2️⃣ گران‌ترین انتقال تاریخ (۲۲۲ میلیون یورو به پی‌اس‌جی)\n3️⃣ بیشترین پاس گل در تاریخ لیگ ۱ (۷۷ پاس گل)\n4️⃣ بیشترین گل در یک فصل لیگ قهرمانان (۱۰ گل در ۲۰۱۴-۲۰۱۵)',
        
        // ===== بازی‌های خاص =====
        'آخرین گل نیمار را بگو؟': 'آخرین گل نیمار در بازی سانتوس مقابل پالمیراس در لیگ برزیل به ثمر رسید. یه گل تماشایی با پای چپ از پشت محوطه جریمه! 🎯',
        'نیمار در المپیک چه کرد؟': 'نیمار در المپیک ریو ۲۰۱۶، برزیل رو به اولین مدال طلای المپیک رسوند. اون در فینال برابر آلمان گل زد و پنالتی قهرمانی رو هم خودش زد! 🥇',
        
        // ===== عمومی =====
        'نیمار چه سبک بازی دارد؟': 'نیمار یه بازیکن تهاجمی، سریع و فوق‌العاده با تکنیک بالاست. مهارت‌های ویژه‌اش:\n✨ دریبل‌زنی خیره‌کننده\n✨ ضربات آزاد تماشایی\n✨ پاس‌های دقیق\n✨ سرعت بالا در ضدحملات',
        'نیمار الان کجا بازی می‌کند؟': 'نیمار در سال ۲۰۲۵ به سانتوس برگشت و الان همونجا بازی میکنه! برگشتی رویایی با ۱۵ گل در ۳۷ بازی! ❤️',
    };

    // ===== کلمات کلیدی برای پاسخ‌های خاص =====
    const keywordResponses = [
        { keywords: ['سن', 'تولد', 'چند سال', 'متولد'], response: 'نیمار در ۵ فوریه ۱۹۹۲ به دنیا آمده و الان ۳۴ ساله است. اما با همون انرژی ۲۰ سالگی بازی میکنه! 🔥' },
        { keywords: ['گل', 'تعداد گل', 'چند گل'], response: 'نیمار تا الان بیش از ۴۰۰ گل در سطح باشگاهی و ملی به ثمر رسونده! آمار دقیقش بستگی به باشگاهی که می‌پرسی داره.' },
        { keywords: ['جام', 'افتخار', 'قهرمانی'], response: 'نیمار ۳۲ جام قهرمانی در کارنامه داره! از کوپا لیبرتادورس تا لیگ قهرمانان اروپا، همه رو فتح کرده! 🏆' },
        { keywords: ['پدر', 'خانواده', 'پسر'], response: 'پدر نیمار "نیمار داسیلوا سانتوس" هست که خودش فوتبالیست بوده و نقش بزرگی در موفقیت نیمار داشته. نیمار یه پسر به اسم "دوی لوئیز" داره که عاشقشه! ❤️' },
        { keywords: ['کفش', 'پوتین', 'اسپانسر'], response: 'نیمار با برند "پوما" قرارداد داره و کفش‌های اختصاصی "PUMA Neymar" رو استفاده میکنه. کفش‌های طلایی و مشکی که خودش طراحی کرده! 👟✨' },
    ];

    // ===== پاسخ‌های پیش‌فرض =====
    const defaultResponses = [
        'سوال خوبی پرسیدی! ولی من فقط درباره نیمار جواب میدم. دوباره بپرس! 😊',
        'متاسفم، اطلاعاتی درباره این موضوع ندارم. میشه درباره نیمار بپرسی؟ 🤔',
        'من یه چت‌بات هوشمند برای نیمار هستم! سوالاتت رو درباره نیمار بپرس. 🎯',
    ];

    // ===== توابع =====

    // پیدا کردن پاسخ دقیق
    function findExactResponse(question) {
        const cleanQuestion = question.trim();
        for (const [key, value] of Object.entries(responses)) {
            if (cleanQuestion.includes(key) || key.includes(cleanQuestion)) {
                return value;
            }
        }
        return null;
    }

    // پیدا کردن پاسخ با کلمات کلیدی
    function findKeywordResponse(question) {
        const cleanQuestion = question.trim();
        for (const item of keywordResponses) {
            for (const keyword of item.keywords) {
                if (cleanQuestion.includes(keyword)) {
                    return item.response;
                }
            }
        }
        return null;
    }

    // بررسی مرتبط بودن با نیمار
    function isNeymarRelated(question) {
        const keywords = ['نیمار', 'نی‌مار', 'ney', 'júnior', 'junior', 'داسیلوا', 'سانتوس', 'بارسلونا', 'psg', 'الهلال', 'برزیل', 'brasil'];
        const cleanQuestion = question.toLowerCase();
        for (const keyword of keywords) {
            if (cleanQuestion.includes(keyword.toLowerCase())) {
                return true;
            }
        }
        return false;
    }

    // دریافت پاسخ
    function getResponse(question) {
        // بررسی ارتباط با نیمار
        if (!isNeymarRelated(question)) {
            return '🤖 من فقط برای جواب دادن به سوالات مربوط به **نیمار** طراحی شدم! لطفاً درباره نیمار بپرس. ⚽';
        }

        // پاسخ دقیق
        const exact = findExactResponse(question);
        if (exact) return exact;

        // پاسخ با کلمات کلیدی
        const keyword = findKeywordResponse(question);
        if (keyword) return keyword;

        // پاسخ تصادفی
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    // تایپ کردن متن با افکت
    function typeMessage(text, callback) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-text" id="typingText"></div>
                <span class="message-time">همین الان</span>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const textElement = messageDiv.querySelector('#typingText');
        let index = 0;
        let html = '';

        // تایپ کاراکتر به کاراکتر
        function typeChar() {
            if (index < text.length) {
                const char = text[index];
                if (char === ' ') {
                    html += ' ';
                } else {
                    html += char;
                }
                textElement.innerHTML = html + '<span class="typing-cursor">|</span>';
                index++;
                setTimeout(typeChar, 15 + Math.random() * 20);
            } else {
                textElement.innerHTML = html;
                if (callback) callback();
            }
        }

        typeChar();
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // ارسال پیام کاربر
    function sendUserMessage(question) {
        if (!question.trim() || isProcessing) return;

        isProcessing = true;
        questionCount++;
        totalQuestions.textContent = questionCount;

        // نمایش پیام کاربر
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user-message';
        userMessageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <div class="message-text">${question}</div>
                <span class="message-time">همین الان</span>
            </div>
        `;
        chatMessages.appendChild(userMessageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // پاک کردن ورودی
        chatInput.value = '';
        charCount.textContent = '۰';

        // نمایش تایپ ایندیکیتور
        typingIndicator.classList.add('active');
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // شبیه‌سازی فکر کردن
        const thinkingTime = 500 + Math.random() * 1000;

        setTimeout(() => {
            typingIndicator.classList.remove('active');
            
            const response = getResponse(question);
            answerCount++;
            answeredQuestions.textContent = answerCount;

            // به‌روزرسانی رضایت
            const rating = Math.min(100, Math.round((answerCount / questionCount) * 100));
            chatRating.textContent = rating + '%';

            typeMessage(response, () => {
                isProcessing = false;
            });

        }, thinkingTime);
    }

    // ===== رویدادها =====

    // دکمه ارسال
    sendBtn.addEventListener('click', function() {
        sendUserMessage(chatInput.value);
    });

    // کلید Enter
    chatInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendUserMessage(this.value);
        }
    });

    // شمارش کاراکترها
    chatInput.addEventListener('input', function() {
        charCount.textContent = this.value.length;
        if (this.value.length > 300) {
            this.value = this.value.slice(0, 300);
            charCount.textContent = '۳۰۰';
        }
    });

    // دکمه‌های پیشنهادی
    suggestBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.dataset.question;
            sendUserMessage(question);
        });
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
                number: { value: 100, density: { enable: true, value_area: 700 } },
                color: { value: '#D4AF37' },
                shape: { type: 'circle' },
                opacity: { value: 0.3, random: true, anim: { enable: true, speed: 1.5, opacity_min: 0.05 } },
                size: { value: 2.8, random: true, anim: { enable: true, speed: 3, size_min: 0.5 } },
                line_linked: { enable: true, distance: 120, color: '#D4AF37', opacity: 0.1, width: 1 },
                move: { enable: true, speed: 1.5, direction: 'none', random: true, straight: false, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' }
                }
            },
            retina_detect: true
        });
    }
});