/* ========================================
   فایل: about.js
   نمایش کامل بازی‌های نیمار در هر باشگاه
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== دیتابیس کامل بازی‌های نیمار =====
    const matchesData = {
        // ===== سانتوس (۲۰۰۹-۲۰۱۳) =====
        santos: {
            name: 'سانتوس',
            years: '۲۰۰۹ - ۲۰۱۳',
            totalMatches: 225,
            totalGoals: 137,
            totalAssists: 65,
            matches: [
                {
                    date: '۲۰ شهریور ۱۳۸۸',
                    competition: 'لیگ برزیل',
                    opponent: 'پالمیراس',
                    result: '۲-۱',
                    score: 'برد',
                    goals: ['نیمار (۴۵+۲)'],
                    assists: ['نیمار (۷۰)'],
                    motm: 'نیمار',
                    rating: 8.5,
                    analysis: 'نیمار با یک گل و یک پاس گل، اولین ستاره‌ی خود را در لیگ برزیل ثبت کرد و نشان داد که آینده‌ای درخشان دارد.',
                    lineup: '۴-۳-۳',
                    possession: '۵۲%',
                    shots: 12,
                    shotsOnTarget: 5,
                    fouls: 3,
                    yellowCards: 1,
                    redCards: 0
                },
                {
                    date: '۲۴ مهر ۱۳۸۸',
                    competition: 'لیگ برزیل',
                    opponent: 'کورینتیانس',
                    result: '۳-۱',
                    score: 'برد',
                    goals: ['نیمار (۳۰)', 'نیمار (۶۷)'],
                    assists: ['نیمار (۸۰)'],
                    motm: 'نیمار',
                    rating: 9.0,
                    analysis: 'دبل و یک پاس گل، نیمار در دربی بزرگ برزیل ستاره‌ی بی‌نظیر زمین بود و توانست هواداران را به وجد آورد.',
                    lineup: '۴-۲-۳-۱',
                    possession: '۴۸%',
                    shots: 15,
                    shotsOnTarget: 7,
                    fouls: 2,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۱۲ آذر ۱۳۸۹',
                    competition: 'کوپا لیبرتادورس',
                    opponent: 'پنیارول',
                    result: '۲-۰',
                    score: 'برد',
                    goals: ['نیمار (۵۵)'],
                    assists: ['نیمار (۷۸)'],
                    motm: 'نیمار',
                    rating: 8.8,
                    analysis: 'نیمار با یک گل زیبا و یک پاس گل، سانتوس را به فینال کوپا لیبرتادورس رساند و نام خود را در تاریخ این رقابت‌ها ثبت کرد.',
                    lineup: '۴-۳-۳',
                    possession: '۵۵%',
                    shots: 10,
                    shotsOnTarget: 4,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۵ تیر ۱۳۹۰',
                    competition: 'کوپا لیبرتادورس (فینال)',
                    opponent: 'پنیارول',
                    result: '۲-۱',
                    score: 'برد',
                    goals: ['نیمار (۴۶)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 9.2,
                    analysis: 'نیمار در فینال کوپا لیبرتادورس گل قهرمانی را زد و سانتوس را پس از ۴۸ سال به قهرمانی رساند. این اولین جام بزرگ دوران حرفه‌ای او بود.',
                    lineup: '۴-۳-۳',
                    possession: '۵۰%',
                    shots: 8,
                    shotsOnTarget: 3,
                    fouls: 4,
                    yellowCards: 1,
                    redCards: 0
                },
                {
                    date: '۲۶ شهریور ۱۳۹۰',
                    competition: 'لیگ برزیل',
                    opponent: 'فلامینگو',
                    result: '۴-۱',
                    score: 'برد',
                    goals: ['نیمار (۱۲)', 'نیمار (۴۰)', 'نیمار (۸۰)'],
                    assists: ['نیمار (۶۰)'],
                    motm: 'نیمار',
                    rating: 9.5,
                    analysis: 'هت‌تریک و یک پاس گل، نیمار نمایشی خیره‌کننده برابر فلامینگو داشت و ثابت کرد که بهترین بازیکن لیگ برزیل است.',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۳%',
                    shots: 18,
                    shotsOnTarget: 9,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                }
            ]
        },

        // ===== بارسلونا (۲۰۱۳-۲۰۱۷) =====
        barcelona: {
            name: 'بارسلونا',
            years: '۲۰۱۳ - ۲۰۱۷',
            totalMatches: 186,
            totalGoals: 105,
            totalAssists: 76,
            matches: [
                {
                    date: '۲۳ مرداد ۱۳۹۲',
                    competition: 'سوپرکوپا اسپانیا',
                    opponent: 'اتلتیکو مادرید',
                    result: '۱-۱',
                    score: 'مساوی',
                    goals: ['نیمار (۶۶)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 8.0,
                    analysis: 'اولین بازی رسمی نیمار با پیراهن بارسلونا و اولین گل رسمی او در سوپرکوپا اسپانیا با ضربه‌ای تماشایی.',
                    lineup: '۴-۳-۳',
                    possession: '۶۲%',
                    shots: 6,
                    shotsOnTarget: 3,
                    fouls: 2,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۱۶ مهر ۱۳۹۲',
                    competition: 'لیگ قهرمانان اروپا',
                    opponent: 'سلتیک',
                    result: '۳-۰',
                    score: 'برد',
                    goals: ['نیمار (۴۵)', 'نیمار (۶۰)'],
                    assists: ['نیمار (۷۵)'],
                    motm: 'نیمار',
                    rating: 9.0,
                    analysis: 'دبل و یک پاس گل در اولین حضور نیمار در لیگ قهرمانان اروپا، او نشان داد که برای این رقابت‌ها ساخته شده است.',
                    lineup: '۴-۳-۳',
                    possession: '۶۵%',
                    shots: 11,
                    shotsOnTarget: 5,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۲۶ فروردین ۱۳۹۴',
                    competition: 'لیگ قهرمانان اروپا (نیمه‌نهایی)',
                    opponent: 'بایرن مونیخ',
                    result: '۳-۰',
                    score: 'برد',
                    goals: ['نیمار (۷۷)', 'نیمار (۸۰)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 9.3,
                    analysis: 'دو گل در ۳ دقیقه برابر بایرن مونیخ، نیمار بارسلونا را به فینال لیگ قهرمانان رساند و یکی از بهترین شب‌های خود را رقم زد.',
                    lineup: '۴-۳-۳',
                    possession: '۵۸%',
                    shots: 9,
                    shotsOnTarget: 5,
                    fouls: 2,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۱۶ خرداد ۱۳۹۴',
                    competition: 'لیگ قهرمانان اروپا (فینال)',
                    opponent: 'یوونتوس',
                    result: '۳-۱',
                    score: 'برد',
                    goals: ['نیمار (۸۷)'],
                    assists: ['—'],
                    motm: 'مسی',
                    rating: 8.5,
                    analysis: 'نیمار در فینال لیگ قهرمانان اروپا گل سوم را به ثمر رساند و بارسلونا را به جام رساند. او تبدیل به یکی از بهترین سه‌گانه‌های تاریخ فوتبال (MSN) شد.',
                    lineup: '۴-۳-۳',
                    possession: '۶۰%',
                    shots: 7,
                    shotsOnTarget: 3,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۱۸ اسفند ۱۳۹۵',
                    competition: 'لیگ قهرمانان اروپا (دور برگشت)',
                    opponent: 'پاری سن ژرمن',
                    result: '۶-۱',
                    score: 'برد',
                    goals: ['نیمار (۸۸)', 'نیمار (۹۰+۱)', 'نیمار (۹۰+۵)'],
                    assists: ['نیمار (۹۰+۲)'],
                    motm: 'نیمار',
                    rating: 10.0,
                    analysis: 'یکی از بزرگترین بازگشت‌های تاریخ فوتبال! نیمار با ۲ گل در دقیقه‌های ۸۸ و ۹۰+۱ و پنالتی در ۹۰+۵، بارسلونا را از ۴-۰ به ۶-۱ رساند و یک شاهکار تاریخی خلق کرد.[citation:7]',
                    lineup: '۴-۳-۳',
                    possession: '۵۶%',
                    shots: 14,
                    shotsOnTarget: 8,
                    fouls: 3,
                    yellowCards: 1,
                    redCards: 0
                }
            ]
        },

        // ===== پاری سن ژرمن (۲۰۱۷-۲۰۲۳) =====
        psg: {
            name: 'پاری سن ژرمن',
            years: '۲۰۱۷ - ۲۰۲۳',
            totalMatches: 173,
            totalGoals: 118,
            totalAssists: 77,
            matches: [
                {
                    date: '۱۳ مرداد ۱۳۹۶',
                    competition: 'لیگ ۱ فرانسه',
                    opponent: 'گنگام',
                    result: '۳-۰',
                    score: 'برد',
                    goals: ['نیمار (۵۲)', 'نیمار (۶۲)'],
                    assists: ['نیمار (۸۰)'],
                    motm: 'نیمار',
                    rating: 9.2,
                    analysis: 'اولین بازی نیمار با پیراهن پاری سن ژرمن و دبل به همراه یک پاس گل، شروع رویایی برای گران‌ترین بازیکن تاریخ فوتبال.[citation:7]',
                    lineup: '۴-۳-۳',
                    possession: '۶۴%',
                    shots: 13,
                    shotsOnTarget: 6,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۲۶ بهمن ۱۳۹۶',
                    competition: 'لیگ قهرمانان اروپا (دور برگشت)',
                    opponent: 'رئال مادرید',
                    result: '۱-۲',
                    score: 'باخت',
                    goals: ['نیمار (۷۰)'],
                    assists: ['—'],
                    motm: 'رونالدو',
                    rating: 7.5,
                    analysis: 'نیمار گل زیبایی به رئال مادرید زد اما مصدومیت او در این بازی، فصلی پر از حسرت را برای پی‌اس‌جی رقم زد.',
                    lineup: '۴-۳-۳',
                    possession: '۵۲%',
                    shots: 8,
                    shotsOnTarget: 3,
                    fouls: 4,
                    yellowCards: 1,
                    redCards: 0
                },
                {
                    date: '۲۸ فروردین ۱۳۹۸',
                    competition: 'کوپه دو فرانس (فینال)',
                    opponent: 'رن',
                    result: '۲-۲ (پنالتی ۵-۶)',
                    score: 'باخت',
                    goals: ['نیمار (۲۱)'],
                    assists: ['—'],
                    motm: 'امباپه',
                    rating: 7.8,
                    analysis: 'نیمار در فینال کوپه دو فرانس گلزنی کرد اما در ضربات پنالتی موفق نبود و پاری سن ژرمن جام را از دست داد.[citation:4]',
                    lineup: '۴-۳-۳',
                    possession: '۵۸%',
                    shots: 9,
                    shotsOnTarget: 4,
                    fouls: 2,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۲۶ مرداد ۱۳۹۹',
                    competition: 'لیگ قهرمانان اروپا (فینال)',
                    opponent: 'بایرن مونیخ',
                    result: '۰-۱',
                    score: 'باخت',
                    goals: ['—'],
                    assists: ['—'],
                    motm: 'کیمیش',
                    rating: 7.0,
                    analysis: 'نیمار در اولین فینال لیگ قهرمانان اروپای پی‌اس‌جی، نتوانست تیمش را به گل برساند و شانس تاریخی را از دست داد. او بهترین موقعیت را در نیمه‌اول از دست داد.',
                    lineup: '۴-۳-۳',
                    possession: '۴۸%',
                    shots: 6,
                    shotsOnTarget: 2,
                    fouls: 3,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۹ اسفند ۱۴۰۱',
                    competition: 'لیگ ۱ فرانسه',
                    opponent: 'لیل',
                    result: '۴-۳',
                    score: 'برد',
                    goals: ['نیمار (۲۰)', 'نیمار (۶۵)'],
                    assists: ['نیمار (۸۵)'],
                    motm: 'نیمار',
                    rating: 9.5,
                    analysis: 'دبل و یک پاس گل در یکی از بهترین بازی‌های نیمار در لباس پی‌اس‌جی، او با نمایشی خیره‌کننده بهترین بازیکن زمین شد.',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۴%',
                    shots: 12,
                    shotsOnTarget: 7,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                }
            ]
        },

        // ===== الهلال (۲۰۲۳-۲۰۲۵) =====
        alhilal: {
            name: 'الهلال',
            years: '۲۰۲۳ - ۲۰۲۵',
            totalMatches: 7,
            totalGoals: 1,
            totalAssists: 3,
            matches: [
                {
                    date: '۲۸ شهریور ۱۴۰۲',
                    competition: 'لیگ حرفه‌ای عربستان',
                    opponent: 'الریاض',
                    result: '۶-۱',
                    score: 'برد',
                    goals: ['—'],
                    assists: ['نیمار (۸۰)', 'نیمار (۸۵)'],
                    motm: 'میتروویچ',
                    rating: 8.5,
                    analysis: 'اولین بازی نیمار برای الهلال، او با ۲ پاس گل در ۲۶ دقیقه حضور، تأثیر فوری خود را نشان داد.[citation:11]',
                    lineup: '۴-۲-۳-۱',
                    possession: '۶۰%',
                    shots: 3,
                    shotsOnTarget: 1,
                    fouls: 0,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۱۸ مهر ۱۴۰۲',
                    competition: 'لیگ قهرمانان آسیا',
                    opponent: 'نساجی مازندران',
                    result: '۳-۰',
                    score: 'برد',
                    goals: ['نیمار (۵۸)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 8.8,
                    analysis: 'اولین گل نیمار برای الهلال، ضربه‌ای تماشایی با پای چپ از پشت محوطه جریمه. او در این بازی بهترین بازیکن زمین شد.[citation:11]',
                    lineup: '۴-۳-۳',
                    possession: '۵۶%',
                    shots: 5,
                    shotsOnTarget: 3,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۲۵ مهر ۱۴۰۲',
                    competition: 'لیگ حرفه‌ای عربستان',
                    opponent: 'الشباب',
                    result: '۲-۰',
                    score: 'برد',
                    goals: ['—'],
                    assists: ['نیمار (۷۵)'],
                    motm: 'میتروویچ',
                    rating: 7.5,
                    analysis: 'نیمار با یک پاس گل دیگر، نقش کلیدی در برد الهلال داشت اما در این بازی مصدوم شد و از ترکیب خارج شد.',
                    lineup: '۴-۳-۳',
                    possession: '۵۴%',
                    shots: 4,
                    shotsOnTarget: 2,
                    fouls: 2,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۲۸ آبان ۱۴۰۲',
                    competition: 'لیگ قهرمانان آسیا',
                    opponent: 'نوبهار',
                    result: '۰-۲',
                    score: 'برد',
                    goals: ['—'],
                    assists: ['—'],
                    motm: 'داویدو',
                    rating: 6.5,
                    analysis: 'نیمار در این بازی عملکرد متوسطی داشت و نتوانست تأثیری روی بازی بگذارد اما الهلال با گل‌های دیگر به برد رسید.',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۲%',
                    shots: 2,
                    shotsOnTarget: 0,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۲۶ مهر ۱۴۰۳',
                    competition: 'لیگ حرفه‌ای عربستان',
                    opponent: 'ضمک',
                    result: '۱-۱',
                    score: 'مساوی',
                    goals: ['—'],
                    assists: ['—'],
                    motm: 'ضمک دروازه‌بان',
                    rating: 6.0,
                    analysis: 'بازی ضعیف نیمار بعد از بازگشت از مصدومیت طولانی مدت، او نتوانست تأثیری روی بازی داشته باشد.[citation:5]',
                    lineup: '۴-۳-۳',
                    possession: '۵۸%',
                    shots: 2,
                    shotsOnTarget: 0,
                    fouls: 3,
                    yellowCards: 1,
                    redCards: 0
                }
            ]
        },

        // ===== تیم ملی برزیل (۲۰۱۰-حالا) =====
        brazil: {
            name: 'تیم ملی برزیل',
            years: '۲۰۱۰ - حالا',
            totalMatches: 128,
            totalGoals: 79,
            totalAssists: 59,
            matches: [
                {
                    date: '۲۰ مرداد ۱۳۸۹',
                    competition: 'دوستانه',
                    opponent: 'آمریکا',
                    result: '۲-۰',
                    score: 'برد',
                    goals: ['نیمار (۲۸)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 8.5,
                    analysis: 'اولین گل ملی نیمار در اولین بازی رسمی برای تیم ملی برزیل، او در ۱۸ سالگی تبدیل به جوان‌ترین گل‌زن تاریخ برزیل شد.',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۵%',
                    shots: 6,
                    shotsOnTarget: 3,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۹ تیر ۱۳۹۲',
                    competition: 'جام کنفدراسیون‌ها (فینال)',
                    opponent: 'اسپانیا',
                    result: '۳-۰',
                    score: 'برد',
                    goals: ['نیمار (۴۵+۱)'],
                    assists: ['نیمار (۶۰)'],
                    motm: 'نیمار',
                    rating: 9.5,
                    analysis: 'نیمار در فینال جام کنفدراسیون‌ها برابر اسپانیا، یک گل و یک پاس گل ثبت کرد و بهترین بازیکن مسابقات شد. او تیم ملی برزیل را به قهرمانی رساند.[citation:12]',
                    lineup: '۴-۲-۳-۱',
                    possession: '۴۸%',
                    shots: 8,
                    shotsOnTarget: 4,
                    fouls: 2,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۲۲ خرداد ۱۳۹۳',
                    competition: 'جام جهانی ۲۰۱۴',
                    opponent: 'کرواسی',
                    result: '۳-۱',
                    score: 'برد',
                    goals: ['نیمار (۲۹)', 'نیمار (۷۱)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 9.2,
                    analysis: 'دبل در اولین بازی جام جهانی، نیمار با ۲ گل تماشایی برابر کرواسی، جام جهانی ۲۰۱۴ را برای برزیل آغاز کرد.[citation:12]',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۲%',
                    shots: 10,
                    shotsOnTarget: 6,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۱ مرداد ۱۳۹۵',
                    competition: 'المپیک ریو (فینال)',
                    opponent: 'آلمان',
                    result: '۱-۱ (پنالتی ۵-۴)',
                    score: 'برد',
                    goals: ['نیمار (۲۶)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 9.3,
                    analysis: 'نیمار با یک گل فوق‌العاده و پنالتی قهرمانی در فینال المپیک ریو، برزیل را به اولین مدال طلای المپیک فوتبال رساند و نام خود را در تاریخ این کشور جاودانه کرد.',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۰%',
                    shots: 9,
                    shotsOnTarget: 5,
                    fouls: 3,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۲۱ خرداد ۱۴۰۱',
                    competition: 'دوستانه',
                    opponent: 'کره جنوبی',
                    result: '۵-۱',
                    score: 'برد',
                    goals: ['نیمار (۲۵)', 'نیمار (۴۰)', 'نیمار (۶۰)'],
                    assists: ['نیمار (۷۰)'],
                    motm: 'نیمار',
                    rating: 9.8,
                    analysis: 'هت‌تریک و یک پاس گل در یک بازی دوستانه، نیمار با عبور از رکورد پله به عنوان بهترین گل‌زن تاریخ تیم ملی برزیل تبدیل شد.[citation:7]',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۸%',
                    shots: 16,
                    shotsOnTarget: 9,
                    fouls: 0,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۱۷ شهریور ۱۴۰۲',
                    competition: 'مقدماتی جام جهانی ۲۰۲۶',
                    opponent: 'بولیوی',
                    result: '۵-۱',
                    score: 'برد',
                    goals: ['نیمار (۲۴)', 'نیمار (۴۵+۲)'],
                    assists: ['نیمار (۶۰)'],
                    motm: 'نیمار',
                    rating: 9.5,
                    analysis: 'دبل و یک پاس گل در مقدماتی جام جهانی ۲۰۲۶، نیمار با ۷۹ گل ملی، به دومین گل‌زن برتر تاریخ فوتبال برزیل تبدیل شد و رکورد پله را بهبود بخشید.[citation:6]',
                    lineup: '۴-۲-۳-۱',
                    possession: '۶۰%',
                    shots: 12,
                    shotsOnTarget: 7,
                    fouls: 1,
                    yellowCards: 1,
                    redCards: 0
                }
            ]
        },

        // ===== سانتوس (بازگشت ۲۰۲۵-حالا) =====
        santos2025: {
            name: 'سانتوس (بازگشت)',
            years: '۲۰۲۵ - حالا',
            totalMatches: 37,
            totalGoals: 15,
            totalAssists: 8,
            matches: [
                {
                    date: '۱۵ بهمن ۱۴۰۳',
                    competition: 'لیگ برزیل',
                    opponent: 'واسکو دا گاما',
                    result: '۲-۱',
                    score: 'برد',
                    goals: ['نیمار (۳۰)', 'نیمار (۶۵)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 9.0,
                    analysis: 'بازگشت رویایی نیمار به سانتوس، دبل در اولین بازی بعد از ۱۲ سال، هواداران سانتوس شبی تاریخی را تجربه کردند.',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۴%',
                    shots: 10,
                    shotsOnTarget: 5,
                    fouls: 2,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۲۳ بهمن ۱۴۰۳',
                    competition: 'لیگ برزیل',
                    opponent: 'کورینتیانس',
                    result: '۱-۱',
                    score: 'مساوی',
                    goals: ['نیمار (۴۵+۱)'],
                    assists: ['نیمار (۷۰)'],
                    motm: 'نیمار',
                    rating: 8.5,
                    analysis: 'نیمار در دربی بزرگ سانتوس برابر کورینتیانس، یک گل و یک پاس گل ثبت کرد و بهترین بازیکن زمین شد.',
                    lineup: '۴-۳-۳',
                    possession: '۴۸%',
                    shots: 8,
                    shotsOnTarget: 4,
                    fouls: 3,
                    yellowCards: 1,
                    redCards: 0
                },
                {
                    date: '۳۰ بهمن ۱۴۰۳',
                    competition: 'لیگ برزیل',
                    opponent: 'پالمیراس',
                    result: '۳-۰',
                    score: 'برد',
                    goals: ['نیمار (۲۰)', 'نیمار (۵۰)'],
                    assists: ['نیمار (۸۰)'],
                    motm: 'نیمار',
                    rating: 9.5,
                    analysis: 'دبل و یک پاس گل برابر پالمیراس، نیمار با نمایشی خیره‌کننده نشان داد که همچنان یکی از بهترین‌های جهان است.',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۶%',
                    shots: 14,
                    shotsOnTarget: 8,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    date: '۱۵ فروردین ۱۴۰۴',
                    competition: 'کوپا سودامریکانا',
                    opponent: 'دپورتیوو رکولتا',
                    result: '۱-۱',
                    score: 'مساوی',
                    goals: ['نیمار (۶۰)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 8.0,
                    analysis: 'نیمار در کوپا سودامریکانا، با یک گل زیبا اولین بازی خود در این رقابت‌ها را با امتیاز مثبت به پایان رساند.[citation:2]',
                    lineup: '۴-۲-۳-۱',
                    possession: '۵۲%',
                    shots: 7,
                    shotsOnTarget: 3,
                    fouls: 2,
                    yellowCards: 1,
                    redCards: 0
                },
                {
                    date: '۲۹ فروردین ۱۴۰۴',
                    competition: 'کوپا سودامریکانا',
                    opponent: 'سن لورنزو',
                    result: '۱-۱',
                    score: 'مساوی',
                    goals: ['نیمار (۷۵)'],
                    assists: ['—'],
                    motm: 'نیمار',
                    rating: 8.2,
                    analysis: 'گل تساوی بخش نیمار در کوپا سودامریکانا، او با یک ضربه‌ی فنی تماشایی، سانتوس را از باخت نجات داد.[citation:2]',
                    lineup: '۴-۳-۳',
                    possession: '۴۶%',
                    shots: 5,
                    shotsOnTarget: 2,
                    fouls: 1,
                    yellowCards: 0,
                    redCards: 0
                }
            ]
        }
    };

    // ===== المنت‌ها =====
    const clubCards = document.querySelectorAll('.club-card');
    const matchesSection = document.getElementById('matchesSection');
    const matchesGrid = document.getElementById('matchesGrid');
    const clubNameDisplay = document.getElementById('clubNameDisplay');
    const closeMatchesBtn = document.getElementById('closeMatches');

    // ===== تابع نمایش بازی‌ها =====
    function showMatches(clubKey) {
        const data = matchesData[clubKey];
        if (!data) return;

        // نمایش نام باشگاه
        clubNameDisplay.textContent = data.name;
        
        // ساخت کارت‌های بازی
        let matchesHTML = '';
        
        data.matches.forEach((match, index) => {
            const goalText = match.goals.join(' - ');
            const assistText = match.assists.join(' - ');
            
            // تعیین کلاس نتیجه
            let resultClass = '';
            if (match.score === 'برد') resultClass = 'win';
            else if (match.score === 'باخت') resultClass = 'loss';
            else resultClass = 'draw';

            matchesHTML += `
                <div class="match-card" style="--delay:${index * 0.05}s">
                    <div class="match-header">
                        <div class="match-competition">
                            <i class="fas fa-trophy"></i>
                            ${match.competition}
                        </div>
                        <div class="match-date">
                            <i class="fas fa-calendar-alt"></i>
                            ${match.date}
                        </div>
                    </div>
                    
                    <div class="match-opponent">
                        <span class="match-vs">VS</span>
                        <span class="match-team">${match.opponent}</span>
                        <span class="match-result ${resultClass}">${match.result}</span>
                    </div>
                    
                    <div class="match-stats-grid">
                        <div class="match-stat">
                            <i class="fas fa-futbol"></i>
                            <span>گل‌زن: ${goalText || '—'}</span>
                        </div>
                        <div class="match-stat">
                            <i class="fas fa-eye"></i>
                            <span>پاس گل: ${assistText || '—'}</span>
                        </div>
                        <div class="match-stat">
                            <i class="fas fa-star"></i>
                            <span>بهترین بازیکن: ${match.motm}</span>
                        </div>
                        <div class="match-stat">
                            <i class="fas fa-chart-line"></i>
                            <span>امتیاز: ${match.rating}</span>
                        </div>
                    </div>
                    
                    <div class="match-details">
                        <div class="detail-item">
                            <span class="detail-label">سیستم</span>
                            <span class="detail-value">${match.lineup}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">مالکیت توپ</span>
                            <span class="detail-value">${match.possession}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">شوت</span>
                            <span class="detail-value">${match.shots}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">شوت در چارچوب</span>
                            <span class="detail-value">${match.shotsOnTarget}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">خطا</span>
                            <span class="detail-value">${match.fouls}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">کارت زرد</span>
                            <span class="detail-value">${match.yellowCards}</span>
                        </div>
                    </div>
                    
                    <div class="match-analysis">
                        <i class="fas fa-quote-right"></i>
                        <p>${match.analysis}</p>
                    </div>
                </div>
            `;
        });

        matchesGrid.innerHTML = matchesHTML;
        matchesSection.classList.add('active');
        matchesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ===== رویداد کلیک روی باشگاه‌ها =====
    clubCards.forEach(card => {
        card.addEventListener('click', function() {
            const clubKey = this.dataset.club;
            showMatches(clubKey);
        });
    });

    // ===== بستن بخش بازی‌ها =====
    closeMatchesBtn.addEventListener('click', function() {
        matchesSection.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== مدیریت کاربر (همون کد صفحه اصلی) =====
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