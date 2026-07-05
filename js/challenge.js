/* ========================================
   فایل: challenge.js
   منطق چالش‌ها و سوالات
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== دیتابیس سوالات =====
    const questionsData = {
        easy: [
            {
                question: 'نیمار در کدام کشور متولد شده است؟',
                options: ['آرژانتین', 'برزیل', 'پرتغال', 'اسپانیا'],
                correct: 1
            },
            {
                question: 'پیراهن شماره چند نیمار در تیم ملی برزیل است؟',
                options: ['۷', '۹', '۱۰', '۱۱'],
                correct: 2
            },
            {
                question: 'نیمار اولین گل حرفه‌ای خود را در کدام باشگاه به ثمر رساند؟',
                options: ['بارسلونا', 'پاری سن ژرمن', 'سانتوس', 'الهلال'],
                correct: 2
            },
            {
                question: 'نام کامل نیمار چیست؟',
                options: ['نیمار داسیلوا', 'نیمار جونیور', 'نیمار سانتوس', 'نیمار دوسانتوس'],
                correct: 0
            },
            {
                question: 'نیمار در چه سالی به بارسلونا پیوست؟',
                options: ['۲۰۱۱', '۲۰۱۲', '۲۰۱۳', '۲۰۱۴'],
                correct: 2
            },
            {
                question: 'رکورد گل‌زنی نیمار در تیم ملی برزیل چند گل است؟',
                options: ['۵۰', '۶۰', '۷۰', '۷۹'],
                correct: 3
            },
            {
                question: 'نیمار در کدام باشگاه بیشترین گل را زده است؟',
                options: ['سانتوس', 'بارسلونا', 'پاری سن ژرمن', 'الهلال'],
                correct: 2
            },
            {
                question: 'نیمار چند بار قهرمان لیگ ۱ فرانسه شده است؟',
                options: ['۳', '۴', '۵', '۶'],
                correct: 2
            },
            {
                question: 'نیمار در کدام سال المپیک را با برزیل فتح کرد؟',
                options: ['۲۰۱۲', '۲۰۱۶', '۲۰۲۰', '۲۰۲۴'],
                correct: 1
            },
            {
                question: 'پدر نیمار چه نام دارد؟',
                options: ['نیمار سانتوس', 'نیمار داسیلوا', 'نیمار سینیور', 'نیمار جونیور'],
                correct: 1
            },
            {
                question: 'نیمار در کدام تیم فوتبال برزیل رشد کرد؟',
                options: ['فلامینگو', 'کورینتیانس', 'سانتوس', 'پالمیراس'],
                correct: 2
            },
            {
                question: 'نیمار چند بار در تیم سال فیفا قرار گرفته است؟',
                options: ['۲', '۳', '۴', '۵'],
                correct: 2
            },
            {
                question: 'نیمار با کدام بازیکن سه‌گانه MSN را تشکیل داد؟',
                options: ['رونالدو و بکام', 'مسی و سوارز', 'امباپه و دی ماریا', 'وینیسیوس و رودریگو'],
                correct: 1
            },
            {
                question: 'نیمار در کدام سال بهترین گل‌زن لیگ قهرمانان اروپا شد؟',
                options: ['۲۰۱۴', '۲۰۱۵', '۲۰۱۶', '۲۰۱۷'],
                correct: 1
            },
            {
                question: 'نیمار در چه سنی اولین بازی خود را برای سانتوس انجام داد؟',
                options: ['۱۵ سالگی', '۱۶ سالگی', '۱۷ سالگی', '۱۸ سالگی'],
                correct: 2
            },
            {
                question: 'نیمار چند بار قهرمان لیگ برزیل با سانتوس شد؟',
                options: ['۱ بار', '۲ بار', '۳ بار', '۴ بار'],
                correct: 0
            },
            {
                question: 'نیمار در کدام باشگاه گران‌ترین انتقال تاریخ را ثبت کرد؟',
                options: ['بارسلونا', 'پاری سن ژرمن', 'الهلال', 'رئال مادرید'],
                correct: 1
            },
            {
                question: 'مبلغ انتقال نیمار به پاری سن ژرمن چقدر بود؟',
                options: ['۱۵۰ میلیون یورو', '۱۸۰ میلیون یورو', '۲۲۲ میلیون یورو', '۲۵۰ میلیون یورو'],
                correct: 2
            },
            {
                question: 'نیمار چند بار بهترین بازیکن لیگ برزیل شد؟',
                options: ['۱ بار', '۲ بار', '۳ بار', '۴ بار'],
                correct: 1
            },
            {
                question: 'نیمار در کدام جام جهانی برای برزیل بازی کرد؟',
                options: ['۲۰۱۰ و ۲۰۱۴', '۲۰۱۴ و ۲۰۱۸', '۲۰۱۸ و ۲۰۲۲', 'همه موارد'],
                correct: 3
            }
        ],
        medium: [
            {
                question: 'نیمار در فینال کوپا لیبرتادورس ۲۰۱۱ چند گل زد؟',
                options: ['۰ گل', '۱ گل', '۲ گل', '۳ گل'],
                correct: 1
            },
            {
                question: 'نیمار در بازی معروف ۶-۱ برابر پی‌اس‌جی چند گل زد؟',
                options: ['۱ گل', '۲ گل', '۳ گل', '۴ گل'],
                correct: 1
            },
            {
                question: 'نیمار در فینال المپیک ریو ۲۰۱۶ چند گل زد؟',
                options: ['۰ گل', '۱ گل', '۲ گل', '۳ گل'],
                correct: 1
            },
            {
                question: 'نیمار در فصل ۲۰۱۴-۲۰۱۵ چند گل در لیگ قهرمانان اروپا زد؟',
                options: ['۷ گل', '۸ گل', '۹ گل', '۱۰ گل'],
                correct: 3
            },
            {
                question: 'نیمار در فینال جام کنفدراسیون‌ها ۲۰۱۳ برابر کدام تیم بازی کرد؟',
                options: ['آلمان', 'ایتالیا', 'اسپانیا', 'پرتغال'],
                correct: 2
            },
            {
                question: 'نیمار در اولین فصل خود در بارسلونا چند گل زد؟',
                options: ['۱۲ گل', '۱۵ گل', '۱۸ گل', '۲۰ گل'],
                correct: 1
            },
            {
                question: 'نیمار در کدام فصل بهترین گل‌زن لیگ ۱ فرانسه شد؟',
                options: ['۲۰۱۷-۲۰۱۸', '۲۰۱۸-۲۰۱۹', '۲۰۱۹-۲۰۲۰', '۲۰۲۰-۲۰۲۱'],
                correct: 0
            },
            {
                question: 'نیمار در کوپا آمریکا ۲۰۱۹ چند گل زد؟',
                options: ['۰ گل', '۱ گل', '۲ گل', '۳ گل'],
                correct: 0
            },
            {
                question: 'نیمار در کدام سال به عنوان بهترین بازیکن جام کنفدراسیون‌ها انتخاب شد؟',
                options: ['۲۰۱۱', '۲۰۱۲', '۲۰۱۳', '۲۰۱۴'],
                correct: 2
            },
            {
                question: 'نیمار در فصل ۲۰۱۷-۲۰۱۸ چند پاس گل در لیگ ۱ داد؟',
                options: ['۱۰', '۱۱', '۱۲', '۱۳'],
                correct: 3
            },
            {
                question: 'نیمار در کدام بازی برای برزیل هت‌تریک کرد؟',
                options: ['مقابل آرژانتین', 'مقابل کره جنوبی', 'مقابل آلمان', 'مقابل بولیوی'],
                correct: 1
            },
            {
                question: 'نیمار در چه سالی رکورد پله را شکست؟',
                options: ['۲۰۲۱', '۲۰۲۲', '۲۰۲۳', '۲۰۲۴'],
                correct: 2
            },
            {
                question: 'نیمار در بازی برگشت ۶-۱ برابر پی‌اس‌جی در دقیقه چند پنالتی زد؟',
                options: ['۸۵', '۸۸', '۹۰+۱', '۹۰+۵'],
                correct: 3
            },
            {
                question: 'نیمار در چه سالی از سانتوس به بارسلونا رفت؟',
                options: ['۲۰۱۱', '۲۰۱۲', '۲۰۱۳', '۲۰۱۴'],
                correct: 2
            },
            {
                question: 'نیمار در چه سالی از بارسلونا به پی‌اس‌جی رفت؟',
                options: ['۲۰۱۶', '۲۰۱۷', '۲۰۱۸', '۲۰۱۹'],
                correct: 1
            },
            {
                question: 'نیمار چند بار برنده توپ طلای سامبا شده است؟',
                options: ['۳ بار', '۴ بار', '۵ بار', '۶ بار'],
                correct: 2
            },
            {
                question: 'نیمار در کدام سال بهترین گل‌زن لیگ برزیل شد؟',
                options: ['۲۰۱۰', '۲۰۱۱', '۲۰۱۲', '۲۰۱۳'],
                correct: 2
            },
            {
                question: 'نیمار در المپیک ریو ۲۰۱۶ چند گل زد؟',
                options: ['۲ گل', '۳ گل', '۴ گل', '۵ گل'],
                correct: 2
            },
            {
                question: 'نیمار در فینال جام کنفدراسیون‌ها ۲۰۱۳ چند پاس گل داد؟',
                options: ['۰', '۱', '۲', '۳'],
                correct: 1
            },
            {
                question: 'نیمار در چه سالی بهترین گل‌زن کوپا لیبرتادورس شد؟',
                options: ['۲۰۱۰', '۲۰۱۱', '۲۰۱۲', '۲۰۱۳'],
                correct: 2
            }
        ],
        hard: [
            {
                question: 'نیمار در چند بازی از ۲۰ بازی اول سانتوس گل زد؟',
                options: ['۵ بازی', '۷ بازی', '۹ بازی', '۱۱ بازی'],
                correct: 1
            },
            {
                question: 'نیمار در فصل ۲۰۱۵-۲۰۱۶ چند گل در لیگ قهرمانان اروپا زد؟',
                options: ['۲ گل', '۳ گل', '۴ گل', '۵ گل'],
                correct: 1
            },
            {
                question: 'نیمار در کدام فصل بیشترین گل را در لیگ ۱ فرانسه زد؟',
                options: ['۲۰۱۷-۲۰۱۸', '۲۰۱۸-۲۰۱۹', '۲۰۱۹-۲۰۲۰', '۲۰۲۰-۲۰۲۱'],
                correct: 0
            },
            {
                question: 'نیمار در بازی برگشت ۶-۱ برابر پی‌اس‌جی چند پاس گل داد؟',
                options: ['۰', '۱', '۲', '۳'],
                correct: 1
            },
            {
                question: 'نیمار در جام جهانی ۲۰۱۴ چند گل زد؟',
                options: ['۲ گل', '۳ گل', '۴ گل', '۵ گل'],
                correct: 2
            },
            {
                question: 'نیمار در فینال المپیک ریو ۲۰۱۶ در دقیقه چند گل زد؟',
                options: ['۲۰', '۲۶', '۳۰', '۴۰'],
                correct: 1
            },
            {
                question: 'نیمار در اولین فصل خود در پی‌اس‌جی چند گل در لیگ ۱ زد؟',
                options: ['۱۵ گل', '۱۸ گل', '۲۰ گل', '۲۲ گل'],
                correct: 2
            },
            {
                question: 'نیمار در کوپا لیبرتادورس ۲۰۱۱ چند گل زد؟',
                options: ['۴ گل', '۵ گل', '۶ گل', '۷ گل'],
                correct: 2
            },
            {
                question: 'نیمار در کدام بازی برای برزیل از روی نقطه پنالتی گل زد؟',
                options: ['مقابل کرواسی', 'مقابل آلمان', 'مقابل بولیوی', 'مقابل کره جنوبی'],
                correct: 2
            },
            {
                question: 'نیمار در چه سالی بهترین بازیکن جام کنفدراسیون‌ها شد؟',
                options: ['۲۰۱۱', '۲۰۱۲', '۲۰۱۳', '۲۰۱۴'],
                correct: 2
            },
            {
                question: 'نیمار در کدام باشگاه بیشترین پاس گل را ثبت کرد؟',
                options: ['سانتوس', 'بارسلونا', 'پاری سن ژرمن', 'الهلال'],
                correct: 2
            },
            {
                question: 'نیمار در جام جهانی ۲۰۱۸ چند گل زد؟',
                options: ['۱ گل', '۲ گل', '۳ گل', '۴ گل'],
                correct: 1
            },
            {
                question: 'نیمار در کوپا آمریکا ۲۰۲۱ چند گل زد؟',
                options: ['۰ گل', '۱ گل', '۲ گل', '۳ گل'],
                correct: 0
            },
            {
                question: 'نیمار در مقدماتی جام جهانی ۲۰۲۶ چند گل زد؟',
                options: ['۳ گل', '۴ گل', '۵ گل', '۶ گل'],
                correct: 1
            },
            {
                question: 'نیمار در چه سالی از تیم ملی برزیل خداحافظی کرد؟',
                options: ['هنوز خداحافظی نکرده', '۲۰۲۳', '۲۰۲۴', '۲۰۲۵'],
                correct: 0
            },
            {
                question: 'نیمار در کدام باشگاه بیشترین بازی را انجام داد؟',
                options: ['سانتوس', 'بارسلونا', 'پاری سن ژرمن', 'الهلال'],
                correct: 0
            },
            {
                question: 'نیمار در فصل ۲۰۱۴-۲۰۱۵ چند پاس گل در لیگ قهرمانان اروپا داد؟',
                options: ['۲', '۳', '۴', '۵'],
                correct: 1
            },
            {
                question: 'نیمار در لیگ حرفه‌ای عربستان چند گل زده است؟',
                options: ['۰ گل', '۱ گل', '۲ گل', '۳ گل'],
                correct: 0
            },
            {
                question: 'نیمار در چند فصل متوالی بهترین گل‌زن لیگ برزیل شد؟',
                options: ['۱ فصل', '۲ فصل', '۳ فصل', '۴ فصل'],
                correct: 0
            },
            {
                question: 'نیمار در چه سالی به الهلال پیوست؟',
                options: ['۲۰۲۲', '۲۰۲۳', '۲۰۲۴', '۲۰۲۵'],
                correct: 1
            }
        ]
    };

    // ===== المنت‌ها =====
    const levelSelection = document.getElementById('levelSelection');
    const quizContainer = document.getElementById('quizContainer');
    const resultContainer = document.getElementById('resultContainer');
    const levelCards = document.querySelectorAll('.level-card');
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const questionNumber = document.getElementById('questionNumber');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const quizExit = document.getElementById('quizExit');
    const retryBtn = document.getElementById('retryBtn');
    const levelsBtn = document.getElementById('levelsBtn');

    // نتیجه
    const correctCount = document.getElementById('correctCount');
    const wrongCount = document.getElementById('wrongCount');
    const percentageDisplay = document.getElementById('percentageDisplay');
    const resultMessage = document.getElementById('resultMessage');
    const resultIcon = document.getElementById('resultIcon');

    // ===== متغیرهای وضعیت =====
    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let currentLevel = '';
    let isAnswered = false;
    let timerInterval = null;

    // ===== شروع چالش =====
    function startChallenge(level) {
        currentLevel = level;
        currentQuestions = shuffleArray([...questionsData[level]]);
        currentIndex = 0;
        score = 0;
        isAnswered = false;
        
        levelSelection.style.display = 'none';
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        
        showQuestion();
    }

    // ===== نمایش سوال =====
    function showQuestion() {
        if (currentIndex >= currentQuestions.length) {
            showResult();
            return;
        }

        const q = currentQuestions[currentIndex];
        isAnswered = false;

        questionNumber.textContent = `سوال ${currentIndex + 1}`;
        questionText.textContent = q.question;

        // به‌روزرسانی پیشرفت
        const progress = ((currentIndex) / currentQuestions.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = `${currentIndex + 1} از ${currentQuestions.length}`;
        scoreDisplay.textContent = score;

        // ساخت گزینه‌ها
        const letters = ['الف', 'ب', 'پ', 'ت'];
        let optionsHTML = '';
        q.options.forEach((option, index) => {
            optionsHTML += `
                <button class="option-btn" data-index="${index}" data-correct="${index === q.correct}">
                    <span class="option-letter">${letters[index]}</span>
                    ${option}
                </button>
            `;
        });
        optionsGrid.innerHTML = optionsHTML;

        // رویداد کلیک روی گزینه‌ها
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (isAnswered) return;
                handleAnswer(this);
            });
        });

        // انیمیشن ورود سوال
        const container = document.getElementById('questionContainer');
        container.style.animation = 'none';
        setTimeout(() => {
            container.style.animation = 'slideIn 0.5s ease both';
        }, 10);
    }

    // ===== مدیریت پاسخ =====
    function handleAnswer(selectedBtn) {
        isAnswered = true;
        const isCorrect = selectedBtn.dataset.correct === 'true';
        const correctIndex = parseInt(selectedBtn.dataset.index);
        
        // غیرفعال کردن همه گزینه‌ها
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.add('disabled');
        });

        // نمایش پاسخ درست
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            }
        });

        // اگر اشتباه بود
        if (!isCorrect) {
            selectedBtn.classList.add('wrong');
            // نمایش گزینه درست به صورت طلایی
            document.querySelectorAll('.option-btn').forEach(btn => {
                if (btn.dataset.correct === 'true') {
                    btn.classList.add('show-correct');
                }
            });
        }

        // به‌روزرسانی امتیاز
        if (isCorrect) {
            score++;
            scoreDisplay.textContent = score;
        }

        // حرکت به سوال بعدی بعد از ۲ ثانیه
        setTimeout(() => {
            currentIndex++;
            showQuestion();
        }, 2000);
    }

    // ===== نمایش نتیجه =====
    function showResult() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        const total = currentQuestions.length;
        const wrong = total - score;
        const percentage = Math.round((score / total) * 100);

        correctCount.textContent = score;
        wrongCount.textContent = wrong;
        percentageDisplay.textContent = percentage + '%';

        // پیام و آیکون بر اساس نتیجه
        let message, icon;
        if (percentage >= 80) {
            message = '🔥 فوق‌العاده! تو یک هوادار واقعی نیماری!';
            icon = 'fa-trophy';
            resultIcon.style.color = 'var(--gold)';
        } else if (percentage >= 60) {
            message = '💪 خوب بود! ولی می‌تونی بهتر از این باشی!';
            icon = 'fa-star';
            resultIcon.style.color = '#44ff88';
        } else if (percentage >= 40) {
            message = '📖 بیشتر درباره نیمار بخون تا بهتر بشی!';
            icon = 'fa-book';
            resultIcon.style.color = '#ffaa00';
        } else {
            message = '😅 باید بیشتر تمرین کنی! دوباره امتحان کن!';
            icon = 'fa-redo';
            resultIcon.style.color = '#ff4444';
        }

        resultIcon.innerHTML = `<i class="fas ${icon}"></i>`;
        resultMessage.textContent = message;

        // انیمیشن ورود نتیجه
        const card = document.querySelector('.result-card');
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'zoomIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both';
        }, 10);
    }

    // ===== بازگشت به انتخاب سطح =====
    function goToLevels() {
        levelSelection.style.display = 'block';
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'none';
        
        // اسکرول به بالا
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ===== توابع کمکی =====
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // ===== رویدادها =====
    // انتخاب سطح
    levelCards.forEach(card => {
        card.addEventListener('click', function() {
            const level = this.dataset.level;
            startChallenge(level);
        });
    });

    // خروج از چالش
    quizExit.addEventListener('click', function() {
        if (confirm('آیا مطمئنی می‌خواهی از چالش خارج شوی؟')) {
            goToLevels();
        }
    });

    // دوباره امتحان کن
    retryBtn.addEventListener('click', function() {
        startChallenge(currentLevel);
    });

    // انتخاب سطح (از نتیجه)
    levelsBtn.addEventListener('click', goToLevels);

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