/**
 * Digital Hasnur - Complete Application Bundle
 * Generated automatically - works without server
 */

(function() {
    'use strict';
    
    console.log('Digital Hasnur - Loading...');
    

// ============================================
// js/data/quiz-data.js
// ============================================

const quizData = {
    questions: [
        {
            id: 1,
            question:
                'Bayangkan kamu punya waktu luang seharian penuh di akhir pekan. Apa yang paling asyik untuk kamu lakukan?',
            options: [
                {
                    text: 'Mengulik kode program, membuat website, atau memecahkan teka-teki logika yang rumit.',
                    score: { tech: 3, creative: 1, business: 0, automotive: 0 },
                },
                {
                    text: 'Mendesain grafis, mengedit video sinematik, atau mencari referensi visual di internet.',
                    score: { tech: 1, creative: 3, business: 0, automotive: 0 },
                },
                {
                    text: 'Membaca tren pasar, merencanakan ide jualan online, atau diskusi strategi bareng teman.',
                    score: { tech: 0, creative: 0, business: 3, automotive: 0 },
                },
                {
                    text: 'Bongkar-bongkar mesin, memodifikasi kendaraan, atau menonton ulasan otomotif terbaru.',
                    score: { tech: 0, creative: 0, business: 0, automotive: 3 },
                },
            ],
        },
        {
            id: 2,
            question:
                'Kampus mengadakan lomba Inovasi Tahunan. Jika kamu ikut serta, peran apa yang akan kamu ambil di tim?',
            options: [
                {
                    text: 'Programmer / Developer: Fokus membangun sistem dan algoritma di balik layarnya.',
                    score: { tech: 3, creative: 0, business: 1, automotive: 1 },
                },
                {
                    text: 'Creative Director: Memastikan tampilan presentasi dan produk visualnya memukau juri.',
                    score: { tech: 1, creative: 3, business: 1, automotive: 0 },
                },
                {
                    text: 'Hustler / Leader: Menyusun proposal bisnis, presentasi (pitching), dan hitungan profit.',
                    score: { tech: 0, creative: 0, business: 3, automotive: 1 },
                },
                {
                    text: 'Teknisi Mekanik: Merakit komponen keras (hardware) dan memastikan mesin berjalan lancar.',
                    score: { tech: 1, creative: 1, business: 0, automotive: 3 },
                },
            ],
        },
        {
            id: 3,
            question:
                'Ketika melihat sebuah produk digital atau barang baru yang viral, apa yang pertama kali terlintas di pikiranmu?',
            options: [
                {
                    text: '"Gimana ya cara kerja aplikasinya? Database dan framework apa yang mereka pakai?"',
                    score: { tech: 3, creative: 1, business: 1, automotive: 0 },
                },
                {
                    text: '"Desain UI/UX-nya gila sih, pemilihan warna dan animasinya benar-benar mulus!"',
                    score: { tech: 1, creative: 3, business: 0, automotive: 0 },
                },
                {
                    text: '"Strategi marketing mereka jenius! Margin keuntungannya pasti besar banget ini."',
                    score: { tech: 0, creative: 0, business: 3, automotive: 1 },
                },
                {
                    text: '"Desain aerodinamis atau teknologi mesin di dalamnya pasti menggunakan inovasi terbaru."',
                    score: { tech: 1, creative: 0, business: 0, automotive: 3 },
                },
            ],
        },
        {
            id: 4,
            question:
                'Fast-forward 5 tahun setelah lulus, kamu membayangkan dirimu sedang bekerja di lingkungan seperti apa?',
            options: [
                {
                    text: 'Perusahaan startup teknologi atau IT Consultant dengan tantangan coding setiap hari.',
                    score: { tech: 3, creative: 1, business: 1, automotive: 0 },
                },
                {
                    text: 'Agensi kreatif, studio game, atau production house yang penuh dengan orang-orang artsy.',
                    score: { tech: 0, creative: 3, business: 1, automotive: 0 },
                },
                {
                    text: 'Perusahaan multinasional, memimpin divisi marketing, atau membangun kerajaan bisnis sendiri.',
                    score: { tech: 0, creative: 0, business: 3, automotive: 1 },
                },
                {
                    text: 'Industri manufaktur, pabrik perakitan canggih, atau memiliki bengkel modifikasi modern.',
                    score: { tech: 1, creative: 0, business: 1, automotive: 3 },
                },
            ],
        },
        {
            id: 5,
            question:
                'Pilih satu "Superpower" profesional yang paling ingin kamu kuasai secara ahli tingkat dewa!',
            options: [
                {
                    text: 'Pengembangan Web Full-Stack, Arsitektur Jaringan, & Keamanan Cyber.',
                    score: { tech: 3, creative: 0, business: 1, automotive: 0 },
                },
                {
                    text: 'Desain 3D, Motion Graphics, & Videografi Komersial.',
                    score: { tech: 1, creative: 3, business: 0, automotive: 0 },
                },
                {
                    text: 'Digital Marketing, Analisis Data Keuangan, & Strategi Ekspansi Pasar.',
                    score: { tech: 0, creative: 1, business: 3, automotive: 0 },
                },
                {
                    text: 'Sistem Kelistrikan Kendaraan Listrik (EV) & Rekayasa Mesin Presisi.',
                    score: { tech: 1, creative: 0, business: 0, automotive: 3 },
                },
            ],
        },
    ],

    profiles: {
        tech: {
            name: 'Ahli Teknologi',
            title: 'The Tech Wizard',
            description:
                'Anda adalah seorang problem solver yang menyukai tantangan teknis. Memecahkan bug dan membangun sistem yang kompleks adalah taman bermain Anda. Di Polihasnur, Anda akan dilatih menjadi arsitek di dunia digital.',
            traits: [
                'Berpikir logis & analitis',
                'Pantang menyerah mencari solusi',
                'Update teknologi terkini',
                'Menyukai coding & jaringan',
            ],
            recommendedProdi: ['D3 Teknik Informatika', 'D4 Teknologi Rekayasa Multimedia'],
            recommendedUKM: ['UKM PH E-Sport', 'HIMA TI', 'UKM Lembaga Dakwah Studi Islam (LDSI)'],
            careerPath: [
                'Software Engineer',
                'Network Administrator',
                'Database Engineer',
                'IT Consultant',
            ],
            // --- FITUR SIMULATOR BARU ---
            exampleCourses: [
                'Algoritma & Pemrograman',
                'Desain Basis Data (SQL)',
                'Jaringan Komputer & Routing',
                'Pengembangan Web (HTML/JS)',
            ],
            campusActivities: [
                'Hackathon Tahunan Kampus',
                'Workshop Keamanan Siber',
                'Membuat proyek game berbasis web',
            ],
            dailySchedule: [
                { time: '08:00 - 10:00', activity: 'Kelas Teori: Algoritma & Struktur Data' },
                {
                    time: '10:30 - 14:00',
                    activity: 'Praktikum Lab: Konfigurasi Router & Subnetting',
                },
                {
                    time: '15:00 - 17:00',
                    activity: 'Nongkrong di kantin sambil nge-debug tugas coding',
                },
                {
                    time: '19:00 - 21:00',
                    activity: 'Mabar bareng anak PH E-Sport / Eksplorasi framework baru',
                },
            ],
        },
        creative: {
            name: 'Pembangun Kreatif',
            title: 'The Creative Builder',
            description:
                'Anda memiliki jiwa kreatif yang kuat dan senang mengekspresikan ide melalui karya visual. Anda tidak cuma melihat desain, tapi merasakan estetika di baliknya. Di sini, imajinasi Anda akan diubah menjadi karya profesional.',
            traits: [
                'Berpikir out-of-the-box',
                'Memiliki kepekaan visual',
                'Inovatif',
                'Komunikator ide yang hebat',
            ],
            recommendedProdi: [
                'D4 Teknologi Rekayasa Multimedia',
                'D4 Manajemen Pemasaran Internasional',
                'D4 Bisnis Digital',
            ],
            recommendedUKM: ['Sanggar Harmoni', 'LPM Jurnalistik', 'Duta Kampus Politeknik Hasnur'],
            careerPath: ['UI/UX Designer', 'Content Creator', 'Art Director', 'Animator 3D'],
            // --- FITUR SIMULATOR BARU ---
            exampleCourses: [
                'Desain Antarmuka (UI/UX)',
                'Animasi 2D/3D',
                'Teknik Kamera & Tata Cahaya',
                'Desain Grafis Multimedia',
            ],
            campusActivities: [
                'Pameran Karya Seni Kampus',
                'Produksi Film Pendek Dokumenter',
                'Hunting foto bareng LPM',
            ],
            dailySchedule: [
                { time: '09:00 - 12:00', activity: 'Kelas Studio: Desain Komunikasi Visual' },
                {
                    time: '13:00 - 15:00',
                    activity: 'Brainstorming ide konten untuk project bareng tim',
                },
                { time: '15:30 - 17:30', activity: 'Latihan di Sanggar Harmoni' },
                { time: '20:00 - 22:00', activity: 'Ngedit video sambil dengar musik lo-fi' },
            ],
        },
        business: {
            name: 'Ahli Strategi Bisnis',
            title: 'The Business Strategist',
            description:
                'Anda visioner, terorganisir, dan mampu melihat gambaran besar. Angka, data pasar, dan strategi kepemimpinan adalah makanan sehari-hari Anda. Polihasnur akan mempertajam insting bisnis Anda untuk memenangkan persaingan.',
            traits: [
                'Berjiwa kepemimpinan',
                'Visioner & persuasif',
                'Jago menganalisis data',
                'Tertarik pada entrepreneurship',
            ],
            recommendedProdi: [
                'D4 Akuntansi Bisnis Digital',
                'D4 Bisnis Digital',
                'D4 Manajemen Pemasaran Internasional',
            ],
            recommendedUKM: ['BEM', 'HIMA BD', 'HIMA ABD'],
            careerPath: [
                'Business Analyst',
                'Digital Marketing Manager',
                'Entrepreneur',
                'Financial Advisor',
            ],
            // --- FITUR SIMULATOR BARU ---
            exampleCourses: [
                'Strategi Pemasaran Digital',
                'Analisis Data Bisnis',
                'E-Commerce & Bisnis Startup',
                'Akuntansi Keuangan Dasar',
            ],
            campusActivities: [
                'Kompetisi Business Plan',
                'Seminar Kewirausahaan Nasional',
                'Mengelola project event kampus',
            ],
            dailySchedule: [
                {
                    time: '08:00 - 11:00',
                    activity: 'Kelas Diskusi: Studi Kasus Perusahaan Startup',
                },
                { time: '11:30 - 13:00', activity: 'Rapat organisasi BEM bahas event bulan depan' },
                { time: '14:00 - 16:30', activity: 'Presentasi pitch-deck tugas Kewirausahaan' },
                {
                    time: '19:00 - 21:00',
                    activity: 'Menganalisis insight social media untuk tugas marketing',
                },
            ],
        },
        automotive: {
            name: 'Penjelajah Otomotif',
            title: 'The Automotive Explorer',
            description:
                'Tangan yang kotor karena oli adalah bukti kerja keras Anda. Anda suka bekerja secara praktis, membongkar mesin, dan mencari tahu cara kerjanya. Di bengkel kampus, Anda akan menjadi mekanik handal masa depan.',
            traits: [
                'Senang bekerja hands-on',
                'Pemahaman mekanik tinggi',
                'Tekun & teliti',
                'Orientasi pada detail teknis',
            ],
            recommendedProdi: ['D3 Teknik Otomotif', 'D3 Budidaya Tanaman Perkebunan'],
            recommendedUKM: [
                'UKM Polihasnur Racing Team (PHRT)',
                'HIMA TO',
                'Mahasiswa Pecinta Alam (MAPALA)',
            ],
            careerPath: [
                'Automotive Engineer',
                'Kepala Bengkel (Service Manager)',
                'Quality Control Inspector',
                'Teknisi Kendaraan Berat',
            ],
            // --- FITUR SIMULATOR BARU ---
            exampleCourses: [
                'Teknologi Motor Bakar',
                'Sistem Kelistrikan Kendaraan',
                'Perawatan Sasis & Pemindah Tenaga',
                'Manajemen Bengkel',
            ],
            campusActivities: [
                'Modifikasi Mobil Kompetisi',
                'Kunjungan Industri Manufaktur',
                'Touring bareng HIMA Otomotif',
            ],
            dailySchedule: [
                { time: '08:00 - 10:00', activity: 'Kelas Teori: Termodinamika & Kelistrikan' },
                { time: '10:00 - 15:00', activity: 'Full Praktikum di Bengkel: Overhaul Mesin' },
                {
                    time: '16:00 - 17:30',
                    activity: 'Nongkrong di garasi bareng Polihasnur Racing Team',
                },
                {
                    time: '19:00 - 21:00',
                    activity: 'Istirahat dan baca referensi spesifikasi mesin baru',
                },
            ],
        },
    },
};


// ============================================
// js/data/simulation-data.js
// ============================================

const simulationData = {
    // Timeline untuk profil umum (fallback jika quiz di-skip)
    general: {
        '08:00': {
            time: '08:00',
            title: 'Pagi di Kampus',
            activity: 'Kuliah & Praktikum',
            description:
                'Memulai hari dengan kuliah teori dan praktik di laboratorium modern. Dosen memberikan materi yang aplikatif dan relevan dengan kebutuhan industri.',
            icon: '📚',
            image: 'assets/images/polihasnur-logo.png',
        },
        '12:00': {
            time: '12:00',
            title: 'Istirahat Siang',
            activity: 'Interaksi Sosial',
            description:
                'Waktu untuk bersantai dan bersosialisasi dengan teman-teman di kantin kampus. Menikmati makanan sambil berdiskusi tentang tugas kuliah atau sekadar berbagi cerita.',
            icon: '☕',
            image: 'assets/images/polihasnur-logo.png',
        },
        '14:00': {
            time: '14:00',
            title: 'Kegiatan Organisasi',
            activity: 'Rapat & Diskusi',
            description:
                'Mengikuti kegiatan organisasi mahasiswa seperti BEM atau HIMA. Berdiskusi tentang program kerja, event kampus, dan pengembangan soft skills.',
            icon: '👥',
            image: 'assets/images/bem-logo.png',
        },
        '17:00': {
            time: '17:00',
            title: 'Sore Produktif',
            activity: 'Mengerjakan Tugas',
            description:
                'Mengerjakan tugas kuliah di perpustakaan atau lab komputer. Memanfaatkan fasilitas kampus yang lengkap untuk menyelesaikan project dan assignment.',
            icon: '💻',
            image: 'assets/images/polihasnur-logo.png',
        },
        '20:00': {
            time: '20:00',
            title: 'Malam Santai',
            activity: 'Kegiatan UKM',
            description:
                'Mengikuti kegiatan UKM seperti olahraga, seni, atau kegiatan sosial. Mengembangkan hobi dan bakat di luar akademik untuk keseimbangan hidup.',
            icon: '🎯',
            image: 'assets/images/polihasnur-logo.png',
        },
    },

    // Timeline untuk profil Tech Wizard
    tech: {
        '08:00': {
            time: '08:00',
            title: 'Coding Session',
            activity: 'Praktikum Programming',
            description:
                'Memulai hari dengan praktikum programming di lab komputer. Deep dive ke algoritma, struktur data, dan pengembangan aplikasi dengan teknologi terkini.',
            icon: '💻',
            image: 'assets/images/hima-ti.png',
        },
        '12:00': {
            time: '12:00',
            title: 'Tech Talk',
            activity: 'Diskusi Teknologi',
            description:
                'Berdiskusi dengan sesama mahasiswa TI tentang framework terbaru, bug fixing, atau project side hustle. Berbagi knowledge dan tips coding sambil makan siang.',
            icon: '🚀',
            image: 'assets/images/hima-ti.png',
        },
        '14:00': {
            time: '14:00',
            title: 'Workshop & Seminar',
            activity: 'Pengembangan Skill',
            description:
                'Mengikuti workshop tentang teknologi baru seperti AI, Cloud Computing, atau Cybersecurity yang diselenggarakan oleh HIMA TI atau komunitas tech.',
            icon: '🎓',
            image: 'assets/images/hima-ti.png',
        },
        '17:00': {
            time: '17:00',
            title: 'Project Development',
            activity: 'Mengerjakan Project',
            description:
                'Fokus mengembangkan project aplikasi atau sistem informasi. Berkolaborasi dengan tim untuk menyelesaikan capstone project atau freelance work.',
            icon: '⚡',
            image: 'assets/images/hima-ti.png',
        },
        '20:00': {
            time: '20:00',
            title: 'Gaming & E-Sport',
            activity: 'Relaksasi Digital',
            description:
                'Bergabung dengan UKM PH E-Sport untuk turnamen gaming atau sekadar bermain game bersama teman. Menyeimbangkan coding dengan hobi gaming.',
            icon: '🎮',
            image: 'assets/images/ph-esport.png',
        },
    },

    // Timeline untuk profil Creative Builder
    creative: {
        '08:00': {
            time: '08:00',
            title: 'Creative Morning',
            activity: 'Kuliah Multimedia',
            description:
                'Memulai hari dengan kuliah desain grafis, video editing, atau animasi. Belajar menggunakan software profesional seperti Adobe Creative Suite atau Blender.',
            icon: '🎨',
            image: 'assets/images/hima-trm.jpg',
        },
        '12:00': {
            time: '12:00',
            title: 'Inspiration Hunt',
            activity: 'Eksplorasi Kreatif',
            description:
                'Mencari inspirasi dengan browsing portfolio designer, menonton video tutorial, atau berdiskusi tentang trend desain terkini dengan teman-teman kreatif.',
            icon: '✨',
            image: 'assets/images/hima-trm.jpg',
        },
        '14:00': {
            time: '14:00',
            title: 'Studio Production',
            activity: 'Produksi Konten',
            description:
                'Bekerja di studio multimedia untuk shooting video, recording audio, atau editing konten. Menggunakan green screen dan peralatan produksi profesional.',
            icon: '🎬',
            image: 'assets/images/hima-trm.jpg',
        },
        '17:00': {
            time: '17:00',
            title: 'Portfolio Building',
            activity: 'Mengerjakan Project',
            description:
                'Fokus mengerjakan project desain atau konten multimedia untuk membangun portfolio. Bereksperimen dengan style baru dan teknik kreatif.',
            icon: '🖌️',
            image: 'assets/images/hima-trm.jpg',
        },
        '20:00': {
            time: '20:00',
            title: 'Art & Performance',
            activity: 'Kegiatan Seni',
            description:
                'Bergabung dengan Sanggar Harmoni untuk latihan musik, tari, atau teater. Mengekspresikan kreativitas melalui seni pertunjukan dan kolaborasi artistik.',
            icon: '🎭',
            image: 'assets/images/sanggar-harmoni.png',
        },
    },

    // Timeline untuk profil Business Strategist
    business: {
        '08:00': {
            time: '08:00',
            title: 'Business Class',
            activity: 'Kuliah Bisnis',
            description:
                'Memulai hari dengan kuliah manajemen, marketing, atau akuntansi. Mempelajari strategi bisnis, analisis pasar, dan financial management untuk dunia profesional.',
            icon: '📊',
            image: 'assets/images/hima-bd.jpg',
        },
        '12:00': {
            time: '12:00',
            title: 'Networking Lunch',
            activity: 'Membangun Relasi',
            description:
                'Memanfaatkan waktu makan siang untuk networking dengan mahasiswa bisnis lainnya. Berdiskusi tentang peluang bisnis, startup ideas, atau trend industri.',
            icon: '🤝',
            image: 'assets/images/hima-bd.jpg',
        },
        '14:00': {
            time: '14:00',
            title: 'BEM Activities',
            activity: 'Kegiatan Organisasi',
            description:
                'Aktif di BEM atau HIMA untuk mengasah leadership dan organizational skills. Merencanakan event kampus, mengelola budget, dan koordinasi tim.',
            icon: '👔',
            image: 'assets/images/bem-logo.png',
        },
        '17:00': {
            time: '17:00',
            title: 'Business Planning',
            activity: 'Analisis & Strategi',
            description:
                'Mengerjakan business plan, market research, atau financial analysis. Menggunakan data untuk membuat keputusan bisnis yang strategis dan terukur.',
            icon: '💼',
            image: 'assets/images/hima-bd.jpg',
        },
        '20:00': {
            time: '20:00',
            title: 'Entrepreneurship',
            activity: 'Side Business',
            description:
                'Mengembangkan side business atau startup project. Menerapkan ilmu yang dipelajari di kelas untuk membangun bisnis digital atau e-commerce.',
            icon: '🚀',
            image: 'assets/images/hima-bd.jpg',
        },
    },

    // Timeline untuk profil Automotive Explorer
    automotive: {
        '08:00': {
            time: '08:00',
            title: 'Workshop Session',
            activity: 'Praktikum Otomotif',
            description:
                'Memulai hari dengan praktikum di workshop otomotif. Hands-on dengan mesin kendaraan, sistem kelistrikan, dan teknologi otomotif modern.',
            icon: '🔧',
            image: 'assets/images/hima-to.png',
        },
        '12:00': {
            time: '12:00',
            title: 'Mechanic Talk',
            activity: 'Diskusi Teknis',
            description:
                'Berdiskusi dengan sesama mahasiswa otomotif tentang modifikasi kendaraan, troubleshooting mesin, atau teknologi electric vehicle terbaru.',
            icon: '⚙️',
            image: 'assets/images/hima-to.png',
        },
        '14:00': {
            time: '14:00',
            title: 'Technical Training',
            activity: 'Pelatihan Industri',
            description:
                'Mengikuti pelatihan dari industri otomotif tentang diagnostic tools, maintenance procedures, atau automotive technology innovations.',
            icon: '🛠️',
            image: 'assets/images/hima-to.png',
        },
        '17:00': {
            time: '17:00',
            title: 'Racing Team Project',
            activity: 'Pengembangan Kendaraan',
            description:
                'Bergabung dengan Polihasnur Racing Team untuk mengembangkan kendaraan racing. Melakukan tuning, testing, dan persiapan untuk kompetisi.',
            icon: '🏎️',
            image: 'assets/images/racing-team.png',
        },
        '20:00': {
            time: '20:00',
            title: 'Automotive Community',
            activity: 'Komunitas Otomotif',
            description:
                'Berkumpul dengan komunitas otomotif untuk sharing knowledge, modifikasi kendaraan, atau sekadar nongkrong sambil membahas dunia motorsport.',
            icon: '🏁',
            image: 'assets/images/racing-team.png',
        },
    },
};


// ============================================
// js/data/prodi-data.js
// ============================================

const campusData = {
    // 7 Program Studi
    studyPrograms: [
        {
            id: 1,
            name: 'D3 Teknik Informatika',
            level: 'D3',
            description:
                'Pendidikan Vokasi Diploma 3 dengan masa studi selama 3 tahun, pembelajaran sebagian besar berbentuk praktek dan project, didukung praktisi di bidang komputer dan informatika. Menghasilkan pengembang perangkat lunak yang handal, melalui program sertifikasi internasional dan perusahaan rintisan digital. (Tersedia kelas reguler dan eksekutif) Kualifikasi pekerjaan lulusan yang dapat diraih melalui D3 Teknik Informatika diantaranya pembuatan program aplikasi database, perawatan jaringan komputer, pembuatan website, pemrograman mobile, desktop, perancangan multimedia, perancangan jaringan komputer dan pegusaha penyedia jasa.',
            logo: 'assets/images/hima-ti.png',
            category: 'studyPrograms',
        },
        {
            id: 2,
            name: 'D3 Teknik Otomotif',
            level: 'D3',
            description:
                'Pendidikan Vokasi Diploma 3 dengan masa studi selama 3 tahun, pembelajaran sebagian besar berbentuk praktek dan project, didukung praktisi di bidang otomotif. Menghasilkan tenaga terampil dalam keahlian maintenance (perawatan-perbaikan) pada alat-alat transportasi, alat berat, mesin industri dan konversi motor listrik. Kualifikasi Lulusan D3 Teknik Otomotif Politeknik Hasnur dapat bekerja pada level jabatan atau analis Teknisi Ahli, Supervisor, Instruktur Bidang, Pengusaha, dan Technopreneur.',
            logo: 'assets/images/hima-to.png',
            category: 'studyPrograms',
        },
        {
            id: 3,
            name: 'D3 Budidaya Tanaman Perkebunan',
            level: 'D3',
            description:
                'Pendidikan Vokasi Diploma 3 dengan masa studi selama 3 tahun, pembelajaran sebagian besar berbentuk praktek dan project, didukung praktisi di bidang tanaman perkebunan. Menghasilkan tenaga terampil yang menguasai teknologi perkebunan dan mampu mengelola pekerjaan perkebunan secara efektif dan efisien. Kualifikasi Lulusan D3 Budidaya Tanaman Perkebunan Politeknik Hasnur dapat bekerja praktisi perkebunan, penyuluh pertanian/perkebunan serta pengusaha di bidang tanaman perkebunan.',
            logo: 'assets/images/hima-btp.png',
            category: 'studyPrograms',
        },
        {
            id: 4,
            name: 'D4 Akuntansi Bisnis Digital',
            level: 'D4',
            description:
                'Program studi akuntansi bisnis digital adalah program pendidikan tinggi yang bertujuan untuk menghasilkan lulusan yang memiliki pemahaman mendalam tentang akuntansi dan keuangan dalam konteks bisnis digital. Program ini mengintegrasikan pengetahuan dan keterampilan akuntansi tradisional dengan aspek-aspek digital seperti teknologi informasi, analisis data, keamanan cyber, dan transformasi digital. Semakin banyak perusahaan yang bertransformasi secara digital dan mengandalkan teknologi informasi dalam operasional mereka, maka semakin tinggi pula permintaan akan tenaga kerja yang memiliki pengetahuan tentang akuntansi dan keuangan dalam konteks bisnis digital.',
            logo: 'assets/images/hima-abd.jpg',
            category: 'studyPrograms',
        },
        {
            id: 5,
            name: 'D4 Bisnis Digital',
            level: 'D4',
            description:
                'Sarjana Terapan Bisnis Digital dari Politeknik Hasnur yang memberikan anda pemahaman tentang bagaimana berbisnis di dunia digital. Program ini akan membawa anda menjadi pengusaha di bidang bisnis digital dan profesional di bidang bisnis digital seperti digital business consultant, digital marketer, dan data scientist. Mempelajari tentang pentingnya peranan teknologi digital dalam membentuk model bisnis baru, mampu mendisrupsi industri dan mentransformasi operasional bisnis. (Tersedia kelas reguler dan eksekutif).',
            logo: 'assets/images/hima-bd.jpg',
            category: 'studyPrograms',
        },
        {
            id: 6,
            name: 'D4 Manajemen Pemasaran Internasional',
            level: 'D4',
            description:
                'Mempelajari manajemen bisnis, pemasaran dalam lingkup manca negara. Berfokus pada penerapan konsep, prinsip, aktivitas, dan proses manajemen dalam rangka penyaluran ide, barang, atau jasa perusahaan kepada konsumen di berbagai negara. Kualifikasi pekerjaan lulusan yang dapat diraih dengan level jabatan Asistant/Manager Marketing, Digital Marketing Specialist, Consultant International Marketing, dan Entrepreneur. (Tersedia kelas reguler dan eksekutif).',
            logo: 'assets/images/hima-mpi.jpg',
            category: 'studyPrograms',
        },
        {
            id: 7,
            name: 'D4 Teknologi Rekayasa Multimedia',
            level: 'D4',
            description:
                'Program Studi Sarjana Terapan Teknologi Rekayasa Multimedia bertujuan untuk membekali mahasiswa dengan pengetahuan dan keterampilan praktis dalam menggabungkan teknologi rekayasa dengan elemen multimedia. Mahasiswa akan belajar tentang desain, produksi, dan pengelolaan konten multimedia yang melibatkan audio, video, grafis, dan interaksi pengguna. Program ini mencakup mata kuliah seperti pengembangan perangkat lunak multimedia, produksi video, desain antarmuka pengguna, animasi, serta teknologi komunikasi data.',
            logo: 'assets/images/hima-trm.jpg',
            category: 'studyPrograms',
        },
    ],

    // 8 Organisasi Mahasiswa (BEM + 7 HIMA)
    organizations: [
        {
            id: 1,
            name: 'BEM Politeknik Hasnur',
            category: 'organizations',
            description:
                'Badan Eksekutif Mahasiswa yang mengkoordinasi seluruh kegiatan kemahasiswaan, menjadi jembatan aspirasi mahasiswa, dan menyelenggarakan program-program pengembangan soft skills.',
            logo: 'assets/images/bem-logo.png',
        },
        {
            id: 2,
            name: 'HIMA Teknik Informatika',
            category: 'organizations',
            description:
                'Himpunan Mahasiswa Program Studi Teknik Informatika yang menyelenggarakan kegiatan pengembangan kompetensi programming, workshop teknologi, dan kompetisi coding.',
            logo: 'assets/images/hima-ti.png',
        },
        {
            id: 3,
            name: 'HIMA Teknik Otomotif',
            category: 'organizations',
            description:
                'Himpunan Mahasiswa Program Studi Teknik Otomotif yang fokus pada pengembangan keterampilan teknis otomotif, workshop mekanik, dan kegiatan industri otomotif.',
            logo: 'assets/images/hima-to.png',
        },
        {
            id: 4,
            name: 'HIMA Budidaya Tanaman Perkebunan',
            category: 'organizations',
            description:
                'Himpunan Mahasiswa Program Studi BTP yang fokus pada pengembangan keterampilan budidaya tanaman, agribisnis, dan kegiatan praktik lapangan di bidang perkebunan.',
            logo: 'assets/images/hima-btp.png',
        },
        {
            id: 5,
            name: 'HIMA Akuntansi Bisnis Digital',
            category: 'organizations',
            description:
                'Himpunan Mahasiswa Program Studi ABD yang fokus pada pengembangan kompetensi akuntansi digital, workshop perpajakan, dan seminar keuangan.',
            logo: 'assets/images/hima-abd.jpg',
        },
        {
            id: 6,
            name: 'HIMA Bisnis Digital',
            category: 'organizations',
            description:
                'Himpunan Mahasiswa Program Studi Bisnis Digital yang menyelenggarakan workshop e-commerce, seminar digital marketing, dan kompetisi business plan.',
            logo: 'assets/images/hima-bd.jpg',
        },
        {
            id: 7,
            name: 'HIMA Manajemen Pemasaran Internasional',
            category: 'organizations',
            description:
                'Himpunan Mahasiswa Program Studi MPI yang fokus pada pengembangan wawasan global, seminar perdagangan internasional, dan kegiatan networking bisnis.',
            logo: 'assets/images/hima-mpi.jpg',
        },
        {
            id: 8,
            name: 'HIMA Teknologi Rekayasa Multimedia',
            category: 'organizations',
            description:
                'Himpunan Mahasiswa Program Studi TRM yang menyelenggarakan workshop desain, kompetisi multimedia, dan pameran karya kreatif mahasiswa.',
            logo: 'assets/images/hima-trm.jpg',
        },
    ],

    // 11 UKM (Unit Kegiatan Mahasiswa)
    ukm: [
        {
            id: 1,
            name: 'UKM Olahraga',
            category: 'ukm',
            description:
                'Unit kegiatan mahasiswa yang menampung minat dan bakat di bidang olahraga seperti futsal, basket, voli, dan badminton untuk membentuk atlet mahasiswa berprestasi.',
            logo: 'assets/images/olahraga.jpg',
        },
        {
            id: 2,
            name: 'Sanggar Harmoni',
            category: 'ukm',
            description:
                'Unit kegiatan seni yang mengembangkan bakat mahasiswa di bidang musik, tari, teater, dan seni pertunjukan untuk melestarikan budaya dan mengekspresikan kreativitas.',
            logo: 'assets/images/sanggar-harmoni.png',
        },
        {
            id: 3,
            name: 'LDSI (Lembaga Dakwah dan Syiar Islam)',
            category: 'ukm',
            description:
                'Unit kegiatan keagamaan yang menyelenggarakan kajian Islam, mentoring rohani, dan kegiatan sosial keagamaan untuk membentuk mahasiswa yang berakhlak mulia.',
            logo: 'assets/images/ldsi.png',
        },
        {
            id: 4,
            name: 'Polihasnur Racing Team',
            category: 'ukm',
            description:
                'Tim balap resmi kampus yang mengembangkan kendaraan racing, mengikuti kompetisi otomotif, dan menjadi wadah mahasiswa passionate di dunia motorsport.',
            logo: 'assets/images/racing-team.png',
        },
        {
            id: 5,
            name: 'UKM Pencak Silat',
            category: 'ukm',
            description:
                'Unit kegiatan beladiri tradisional Indonesia yang melatih teknik pencak silat, membentuk karakter disiplin, dan melestarikan warisan budaya bangsa.',
            logo: 'assets/images/pencak-silat.jpg',
        },
        {
            id: 6,
            name: 'MENWA (Resimen Mahasiswa)',
            category: 'ukm',
            description:
                'Organisasi kemahasiswaan yang memberikan pendidikan bela negara, kepemimpinan, dan kedisiplinan untuk membentuk mahasiswa yang patriotik dan tangguh.',
            logo: 'assets/images/menwa.png',
        },
        {
            id: 7,
            name: 'MAPALA (Mahasiswa Pecinta Alam)',
            category: 'ukm',
            description:
                'Unit kegiatan petualangan alam yang menyelenggarakan pendakian gunung, susur gua, arung jeram, dan kegiatan konservasi lingkungan.',
            logo: 'assets/images/mapala.png',
        },
        {
            id: 8,
            name: 'PH E-Sport',
            category: 'ukm',
            description:
                'Unit kegiatan gaming kompetitif yang menampung mahasiswa passionate di dunia e-sport, menyelenggarakan turnamen, dan membentuk tim gaming profesional.',
            logo: 'assets/images/ph-esport.png',
        },
        {
            id: 9,
            name: 'KSR PMI (Korps Sukarela Palang Merah Indonesia)',
            category: 'ukm',
            description:
                'Unit kegiatan kemanusiaan yang memberikan pelatihan pertolongan pertama, donor darah, dan kegiatan sosial untuk membentuk mahasiswa yang peduli sesama.',
            logo: 'assets/images/ksr-pmi.jpg',
        },
        {
            id: 10,
            name: 'LPM Jurnalistik',
            category: 'ukm',
            description:
                'Lembaga pers mahasiswa yang mengembangkan kemampuan jurnalistik, fotografi, dan penulisan untuk menyuarakan aspirasi mahasiswa melalui media kampus.',
            logo: 'assets/images/lpm-jurnalistik.jpg',
        },
        {
            id: 11,
            name: 'Duta Kampus',
            category: 'ukm',
            description:
                'Unit kegiatan yang membentuk mahasiswa sebagai brand ambassador kampus, mengembangkan public speaking, dan mempromosikan Politeknik Hasnur di berbagai event.',
            logo: 'assets/images/duta-kampus.jpeg',
        },
    ],

    // Fasilitas Kampus (untuk explore section)
    facilities: [
        {
            id: 1,
            name: 'Gedung Rektorat',
            category: 'facilities',
            description:
                'Gedung utama kampus yang dilengkapi dengan lab komputer modern untuk mahasiswa TI dan studio multimedia profesional untuk mahasiswa TRM. Pusat administrasi dan kegiatan akademik kampus.',
            image: 'assets/images/rektorat.jpeg',
        },
        {
            id: 2,
            name: 'Departemen Teknik',
            category: 'facilities',
            description:
                'Gedung khusus dengan workshop lengkap dan kelas praktik untuk mahasiswa Teknik Otomotif. Dilengkapi dengan peralatan mekanik modern dan ruang praktikum yang luas.',
            image: 'assets/images/dep-teknik.jpeg',
        },
        {
            id: 3,
            name: 'Panglima Wangkang',
            category: 'facilities',
            description:
                'Gedung luas yang menjadi pusat kegiatan mahasiswa Budidaya Tanaman Perkebunan. Dilengkapi dengan ruang kelas modern dan area praktik perkebunan yang luas.',
            image: 'assets/images/panglima-wangkang.jpeg',
        },
        {
            id: 4,
            name: 'SCC (Student Center Complex)',
            category: 'facilities',
            description:
                'Pusat kegiatan mahasiswa yang menjadi kantin kampus dan sekretariat untuk berbagai organisasi mahasiswa. Tempat berkumpul dan bersosialisasi yang nyaman.',
            image: 'assets/images/kantin-scc.jpeg',
        },
        {
            id: 5,
            name: 'Tribun Kampus',
            category: 'facilities',
            description:
                'Lapangan terbuka di depan kampus yang menjadi tempat favorit mahasiswa untuk bersantai, berkumpul, dan menikmati suasana alam sambil berdiskusi atau sekadar refreshing.',
            image: 'assets/images/tribun-kampus.jpeg',
        },
        {
            id: 6,
            name: 'Lapangan Voli',
            category: 'facilities',
            description:
                'Lapangan olahraga yang digunakan untuk bermain voli, turnamen antar prodi, dan berbagai kegiatan olahraga mahasiswa. Fasilitas pendukung untuk UKM Olahraga.',
            image: 'assets/images/lapangan-volly.jpeg',
        },
        {
            id: 7,
            name: 'Wetland Square',
            category: 'facilities',
            description:
                'Kampus 2 yang menjadi pusat kegiatan mahasiswa MPI, ABD, dan BD. Lokasi modern dengan suasana yang kondusif untuk pembelajaran bisnis dan manajemen.',
            image: 'assets/images/wetland-square.jpeg',
        },
        {
            id: 8,
            name: 'Gedung Baru',
            category: 'facilities',
            description:
                'Bangunan pembelajaran terbaru dengan ruang kelas modern dan aula luas yang dapat digunakan untuk rapat, seminar, workshop, dan berbagai acara kampus skala besar.',
            image: 'assets/images/polihasnur-logo.png',
        },
        {
            id: 9,
            name: 'Asrama Mahasiswa',
            category: 'facilities',
            description:
                'Fasilitas hunian untuk mahasiswa yang ingin tinggal dekat kampus. Dilengkapi dengan kamar nyaman, area belajar bersama, dan fasilitas pendukung untuk kenyamanan mahasiswa.',
            image: 'assets/images/polihasnur-logo.png',
        },
    ],
};


// ============================================
// js/components/modal.js
// ============================================

class Modal {
    static instance = null; // Singleton pattern to prevent multiple modals

    constructor() {
        this.isOpen = false;
        this.modalElement = null;
        this.escapeHandler = null;
    }

    /**
     * Open modal with content
     * @param {string} content - HTML content to display
     * @param {object} options - Modal options (title, size, etc.)
     */
    open(content, options = {}) {
        const { title = '', size = 'large', showClose = true } = options;

        // Close existing modal if any (enforce single modal)
        if (Modal.instance && Modal.instance.isOpen) {
            console.log('Closing existing modal before opening new one');
            Modal.instance.close();
        }

        // Validate content
        if (!content || typeof content !== 'string') {
            console.error('Modal: Invalid content provided');
            return;
        }

        // Create modal HTML
        const modalHTML = `
            <div class="modal-overlay fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
                <div class="modal-content bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto w-full ${this.getSizeClass(size)} animate-slideUp">
                    ${
                        title || showClose
                            ? `
                        <div class="modal-header sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                            ${title ? `<h2 class="text-2xl font-bold text-gray-900">${title}</h2>` : '<div></div>'}
                            ${
                                showClose
                                    ? `
                                <button class="modal-close text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            `
                                    : ''
                            }
                        </div>
                    `
                            : ''
                    }
                    <div class="modal-body p-6 md:p-8">
                        ${content}
                    </div>
                </div>
            </div>
        `;

        // Insert modal into DOM
        const modalRoot = document.getElementById('modal-root');
        if (!modalRoot) {
            console.error('Modal: modal-root element not found in DOM');
            return;
        }

        modalRoot.innerHTML = modalHTML;
        this.modalElement = modalRoot.querySelector('.modal-overlay');

        if (!this.modalElement) {
            console.error('Modal: Failed to create modal element');
            return;
        }

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Add event listeners
        this.addEventListeners();

        this.isOpen = true;
        Modal.instance = this; // Set as current instance

        console.log('Modal opened successfully');
    }

    /**
     * Get size class for modal
     * @param {string} size - Size option
     * @returns {string} Tailwind class
     */
    getSizeClass(size) {
        const sizes = {
            small: 'max-w-md',
            medium: 'max-w-2xl',
            large: 'max-w-4xl',
            xlarge: 'max-w-6xl',
        };
        return sizes[size] || sizes.large;
    }

    /**
     * Add event listeners for modal
     */
    addEventListeners() {
        if (!this.modalElement) return;

        // Close button
        const closeBtn = this.modalElement.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Click outside to close
        this.modalElement.addEventListener('click', (e) => {
            if (e.target === this.modalElement) {
                this.close();
            }
        });

        // Escape key to close
        this.escapeHandler = (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        };
        document.addEventListener('keydown', this.escapeHandler);
    }

    /**
     * Close modal
     */
    close() {
        if (!this.isOpen) {
            console.log('Modal: Already closed');
            return;
        }

        // Remove escape key listener
        if (this.escapeHandler) {
            document.removeEventListener('keydown', this.escapeHandler);
            this.escapeHandler = null;
        }

        // Restore body scroll
        document.body.style.overflow = '';

        // Remove modal from DOM
        const modalRoot = document.getElementById('modal-root');
        if (modalRoot) {
            modalRoot.innerHTML = '';
        }

        this.modalElement = null;
        this.isOpen = false;

        // Clear singleton instance if this is the current instance
        if (Modal.instance === this) {
            Modal.instance = null;
        }

        console.log('Modal closed successfully');
    }

    /**
     * Update modal content
     * @param {string} content - New HTML content
     */
    updateContent(content) {
        if (!this.isOpen || !this.modalElement) {
            console.error('Modal: Cannot update content - modal is not open');
            return;
        }

        if (!content || typeof content !== 'string') {
            console.error('Modal: Invalid content provided for update');
            return;
        }

        const modalBody = this.modalElement.querySelector('.modal-body');
        if (modalBody) {
            modalBody.innerHTML = content;
            console.log('Modal content updated');
        } else {
            console.error('Modal: modal-body element not found');
        }
    }

    /**
     * Cleanup method to ensure proper cleanup
     */
    cleanup() {
        this.close();
    }
}


// ============================================
// js/components/toast.js
// ============================================

class Toast {
    constructor() {
        this.toastContainer = document.getElementById('toast-root');
        this.activeToasts = [];
    }

    /**
     * Show toast notification
     * @param {string} message - Message to display
     * @param {string} type - Toast type: 'success', 'error', 'warning', 'info'
     * @param {number} duration - Duration in milliseconds (default: 3000)
     */
    show(message, type = 'info', duration = 3000) {
        const toastId = `toast-${Date.now()}`;

        // Create toast element
        const toast = document.createElement('div');
        toast.id = toastId;
        toast.className = `toast-notification ${this.getTypeClass(type)} mb-4 animate-slideInRight`;

        toast.innerHTML = `
            <div class="flex items-start gap-3 bg-white rounded-lg shadow-lg p-4 min-w-[300px] max-w-md border-l-4 ${this.getBorderClass(type)}">
                <div class="flex-shrink-0">
                    ${this.getIcon(type)}
                </div>
                <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">${message}</p>
                </div>
                <button class="toast-close flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        `;

        // Add to container
        this.toastContainer.appendChild(toast);
        this.activeToasts.push(toastId);

        // Add close button listener
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.dismiss(toastId));

        // Auto dismiss after duration
        if (duration > 0) {
            setTimeout(() => this.dismiss(toastId), duration);
        }

        return toastId;
    }

    /**
     * Dismiss toast by ID
     * @param {string} toastId - Toast ID to dismiss
     */
    dismiss(toastId) {
        const toast = document.getElementById(toastId);
        if (!toast) return;

        // Add fade out animation
        toast.classList.add('animate-fadeOut');

        // Remove from DOM after animation
        setTimeout(() => {
            toast.remove();
            this.activeToasts = this.activeToasts.filter((id) => id !== toastId);
        }, 300);
    }

    /**
     * Dismiss all active toasts
     */
    dismissAll() {
        this.activeToasts.forEach((toastId) => this.dismiss(toastId));
    }

    /**
     * Get type-specific CSS class
     * @param {string} type - Toast type
     * @returns {string} CSS class
     */
    getTypeClass(type) {
        return `toast-${type}`;
    }

    /**
     * Get border color class based on type
     * @param {string} type - Toast type
     * @returns {string} Tailwind border class
     */
    getBorderClass(type) {
        const classes = {
            success: 'border-green-500',
            error: 'border-red-500',
            warning: 'border-yellow-500',
            info: 'border-blue-500',
        };
        return classes[type] || classes.info;
    }

    /**
     * Get icon SVG based on type
     * @param {string} type - Toast type
     * @returns {string} SVG icon HTML
     */
    getIcon(type) {
        const icons = {
            success: `
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            `,
            error: `
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            `,
            warning: `
                <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
            `,
            info: `
                <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            `,
        };
        return icons[type] || icons.info;
    }

    /**
     * Convenience methods for different toast types
     */
    success(message, duration = 3000) {
        return this.show(message, 'success', duration);
    }

    error(message, duration = 3000) {
        return this.show(message, 'error', duration);
    }

    warning(message, duration = 3000) {
        return this.show(message, 'warning', duration);
    }

    info(message, duration = 3000) {
        return this.show(message, 'info', duration);
    }
}


// ============================================
// js/components/navbar.js
// ============================================

class Navbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.isScrolled = false;
        this.init();
    }

    /**
     * Initialize navbar
     */
    init() {
        if (!this.navbar) {
            console.error('Navbar element not found');
            return;
        }

        // Initialize scroll behavior
        this.initScrollBehavior();

        // Initialize smooth scroll navigation
        this.initSmoothScroll();

        // Initialize mobile menu
        this.initMobileMenu();
    }

    /**
     * Initialize scroll behavior for glassmorphism effect
     */
    initScrollBehavior() {
        // Throttle scroll event for performance
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial check
        this.handleScroll();
    }

    /**
     * Handle scroll event
     */
    handleScroll() {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > 50;

        // Only update if state changed
        if (shouldBeScrolled !== this.isScrolled) {
            this.isScrolled = shouldBeScrolled;

            if (this.isScrolled) {
                // Add scrolled class for CSS styling
                this.navbar.classList.add('scrolled');
            } else {
                // Remove scrolled class
                this.navbar.classList.remove('scrolled');
            }
        }
    }

    /**
     * Initialize smooth scroll for navigation links
     */
    initSmoothScroll() {
        const navLinks = this.navbar.querySelectorAll('a[href^="#"]');

        navLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToSection(link.getAttribute('href'));
            });
        });
    }

    /**
     * Scroll to section smoothly
     * @param {string} sectionId - Section ID with # prefix (e.g., '#hero')
     */
    scrollToSection(sectionId) {
        const targetSection = document.querySelector(sectionId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // Dispatch custom event for other components to listen
            window.dispatchEvent(
                new CustomEvent('sectionChange', {
                    detail: { sectionId: sectionId.substring(1) },
                }),
            );
        }
    }

    /**
     * Update active link based on current section
     * @param {string} sectionId - Current section ID
     */
    updateActiveLink(sectionId) {
        const navLinks = this.navbar.querySelectorAll('a[href^="#"]');

        navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
                link.classList.add('text-primary', 'font-semibold');
            } else {
                link.classList.remove('text-primary', 'font-semibold');
            }
        });
    }

    /**
     * Show navbar (if hidden)
     */
    show() {
        this.navbar.classList.remove('hidden');
    }

    /**
     * Hide navbar
     */
    hide() {
        this.navbar.classList.add('hidden');
    }

    /**
     * Initialize mobile menu toggle
     */
    initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = mobileMenu?.querySelectorAll('.mobile-link');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close menu when clicking a link
            mobileLinks?.forEach((link) => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    }
}


// ============================================
// js/components/hero.js
// ============================================

/**
 * Typing animation for hero tagline
 * @param {string} text - The text to animate
 * @param {HTMLElement} element - The element to display text in
 * @param {number} speed - Typing speed in milliseconds
 */
function typeText(text, element, speed = 100) {
    if (!element) {
        console.error('Typing animation: element not found');
        return;
    }

    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

/**
 * Initialize hero section
 */
function initHero() {
    // Get hero elements
    const heroVideo = document.getElementById('hero-video');
    const typingText = document.getElementById('typing-text');
    const ctaPrimary = document.getElementById('cta-primary');
    const ctaSecondary = document.getElementById('cta-secondary');

    // Check if elements exist
    if (!heroVideo || !typingText || !ctaPrimary || !ctaSecondary) {
        console.error('Hero section: Required elements not found');
        return;
    }

    // Setup video error handling with fallback
    setupVideoFallback(heroVideo);

    // Start typing animation
    const tagline = 'Wujudkan Masa Depan Cemerlang Bersama Politeknik Hasnur';
    typeText(tagline, typingText, 80);

    // Setup CTA button handlers
    setupCTAButtons(ctaPrimary, ctaSecondary);

    console.log('Hero section initialized');
}

/**
 * Setup video fallback for loading errors
 * @param {HTMLVideoElement} videoElement - The video element
 */
function setupVideoFallback(videoElement) {
    videoElement.addEventListener('error', () => {
        console.warn('Video failed to load, using fallback image');
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            // Set fallback background image
            heroSection.style.backgroundImage = 'url(assets/images/polihasnur-logo.png)';
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
            heroSection.style.backgroundColor = '#0A1628';

            // Hide video element
            videoElement.style.display = 'none';
        }
    });

    // Also handle case where video source is missing
    videoElement.addEventListener('loadedmetadata', () => {
        console.log('Hero video loaded successfully');
    });
}

/**
 * Setup CTA button click handlers
 * @param {HTMLButtonElement} primaryBtn - Primary CTA button
 * @param {HTMLButtonElement} secondaryBtn - Secondary CTA button
 */
function setupCTAButtons(primaryBtn, secondaryBtn) {
    // Primary CTA: Scroll to quiz section
    primaryBtn.addEventListener('click', () => {
        const quizSection = document.getElementById('quiz');
        if (quizSection) {
            smoothScrollToSection(quizSection);
        }
    });

    // Secondary CTA: Scroll to explore section
    secondaryBtn.addEventListener('click', () => {
        const exploreSection = document.getElementById('explore');
        if (exploreSection) {
            smoothScrollToSection(exploreSection);
        }
    });
}

/**
 * Smooth scroll to a section
 * @param {HTMLElement} section - The section to scroll to
 */
function smoothScrollToSection(section) {
    if (!section) return;

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}


// ============================================
// js/components/quiz.js
// ============================================



class QuizApp {
    constructor(data) {
        this.data = data;
        this.currentQIndex = 0;
        this.scores = { tech: 0, creative: 0, business: 0, automotive: 0 };

        // DOM Elements (Sesuai ID HTML Kamu)
        this.screens = {
            intro: document.getElementById('quiz-intro'),
            interface: document.getElementById('quiz-interface'),
            // Kita bisa tambahkan loading screen manual nanti via JS jika perlu
        };

        this.ui = {
            startBtn: document.getElementById('start-quiz-btn'),
            questionText: document.getElementById('quiz-question-text'),
            optionsContainer: document.getElementById('quiz-options-container'),
            progressBar: document.getElementById('quiz-progress-bar'),
            currentQNum: document.getElementById('q-current'),
            percentText: document.getElementById('q-percent'),
        };

        this.init();
    }

    init() {
        console.log('QuizApp init() dipanggil');
        console.log('Start button:', this.ui.startBtn);
        if (this.ui.startBtn) {
            this.ui.startBtn.addEventListener('click', () => this.startQuiz());
            console.log('Event listener untuk start button berhasil ditambahkan');
        } else {
            console.error('Start button tidak ditemukan!');
        }
    }

    startQuiz() {
        // Efek Fade Out Intro
        this.screens.intro.style.opacity = '0';

        setTimeout(() => {
            this.screens.intro.classList.add('hidden');
            this.screens.interface.classList.remove('hidden');

            // Efek Fade In Interface
            // (Kita set opacity 0 dulu di CSS atau via JS biar smooth)
            this.screens.interface.style.opacity = '0';
            this.screens.interface.style.transition = 'opacity 0.5s ease';

            requestAnimationFrame(() => {
                this.screens.interface.style.opacity = '1';
            });

            this.loadQuestion();
        }, 500); // Tunggu transisi fade out selesai
    }

    loadQuestion() {
        const question = this.data.questions[this.currentQIndex];

        // 1. Update Progress UI
        const currentNum = this.currentQIndex + 1;
        const totalNum = this.data.questions.length;
        const percent = Math.round((currentNum / totalNum) * 100);

        if (this.ui.currentQNum) this.ui.currentQNum.textContent = currentNum;
        if (this.ui.percentText) this.ui.percentText.textContent = `${percent}%`;
        if (this.ui.progressBar) this.ui.progressBar.style.width = `${percent}%`;

        // 2. Animate Text (Fade Out -> In)
        this.ui.questionText.style.opacity = 0;
        this.ui.questionText.style.transition = 'opacity 0.3s ease';

        setTimeout(() => {
            this.ui.questionText.textContent = question.question;
            this.ui.questionText.style.opacity = 1;
        }, 200);

        // 3. Render Options
        this.ui.optionsContainer.innerHTML = '';

        question.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            // Styling tombol opsi agar sesuai desain clean
            btn.className = `
                w-full text-left p-5 rounded-xl border border-slate-200 bg-white 
                hover:border-[#106EE8] hover:bg-blue-50 hover:shadow-md 
                transition-all duration-200 group relative overflow-hidden
                flex items-start gap-4 opacity-0 transform translate-y-4
            `;

            // Stagger Animation (Muncul satu per satu)
            btn.style.animation = `slideUpFade 0.4s ease-out forwards ${idx * 0.1}s`;

            btn.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm group-hover:bg-[#106EE8] group-hover:text-white transition-colors shrink-0">
                    ${String.fromCharCode(65 + idx)}
                </div>
                <span class="font-medium text-slate-700 group-hover:text-[#106EE8] text-base leading-relaxed">${opt.text}</span>
            `;

            btn.addEventListener('click', () => this.handleAnswer(opt.score));
            this.ui.optionsContainer.appendChild(btn);
        });
    }

    handleAnswer(score) {
        // Accumulate Score
        this.scores.tech += score.tech;
        this.scores.creative += score.creative;
        this.scores.business += score.business;
        this.scores.automotive += score.automotive;

        // Next Question or Finish
        if (this.currentQIndex < this.data.questions.length - 1) {
            this.currentQIndex++;
            this.loadQuestion();
        } else {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        // Tampilkan Loading State di dalam Interface
        this.ui.optionsContainer.innerHTML = ''; // Bersihkan opsi
        this.ui.questionText.textContent = 'Menganalisis jawaban kamu...';
        this.ui.questionText.className =
            'text-xl md:text-2xl font-bold text-slate-800 text-center mb-8';

        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'flex flex-col items-center justify-center py-10';
        loadingDiv.innerHTML = `
            <div class="w-16 h-16 border-4 border-blue-100 border-t-[#106EE8] rounded-full animate-spin mb-4"></div>
            <p class="text-slate-500 animate-pulse">Menyusun profil DNA Kampus...</p>
        `;
        this.ui.optionsContainer.appendChild(loadingDiv);

        // Delay 2 detik agar terlihat "mikir"
        setTimeout(() => {
            this.showResult();
        }, 2000);
    }

    showResult() {
        console.log('showResult() dipanggil');
        console.log('Scores:', this.scores);

        // Hitung Pemenang
        const winnerKey = Object.keys(this.scores).reduce((a, b) =>
            this.scores[a] > this.scores[b] ? a : b,
        );

        console.log('Winner Key:', winnerKey);

        // Ambil profile data
        const profile = this.data.profiles[winnerKey];
        if (!profile) {
            console.error('Profile tidak ditemukan!');
            return;
        }

        // Tampilkan hasil di quiz interface
        this.ui.questionText.textContent = `Kamu adalah: ${profile.title}!`;
        this.ui.questionText.className =
            'text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#106EE8] to-indigo-600 text-center mb-6';

        // Buat tampilan hasil yang menarik
        const resultHTML = `
            <div class="text-center space-y-6 py-8">
                <div class="text-6xl mb-4">${winnerKey === 'tech' ? '👨‍💻' : winnerKey === 'creative' ? '🎨' : winnerKey === 'business' ? '💼' : '🛠️'}</div>
                
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6">
                    <h4 class="text-xl font-bold text-slate-800 mb-3">${profile.name}</h4>
                    <p class="text-slate-600 leading-relaxed">${profile.description}</p>
                </div>

                <div class="grid grid-cols-1 gap-4 mb-6">
                    <div class="bg-white border-2 border-blue-100 rounded-xl p-4">
                        <p class="text-xs font-bold text-slate-500 uppercase mb-2">Program Studi Cocok</p>
                        <p class="text-sm font-semibold text-[#106EE8]">${profile.recommendedProdi.join(', ')}</p>
                    </div>
                    <div class="bg-white border-2 border-indigo-100 rounded-xl p-4">
                        <p class="text-xs font-bold text-slate-500 uppercase mb-2">UKM yang Sesuai</p>
                        <p class="text-sm font-semibold text-indigo-600">${profile.recommendedUKM.join(', ')}</p>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-3">
                    <button 
                        id="retake-quiz-btn"
                        class="flex-1 bg-white border-2 border-slate-300 text-slate-700 font-bold py-4 px-6 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
                    >
                        🔄 Ulangi Quiz
                    </button>
                    <button 
                        id="view-simulator-btn"
                        class="flex-1 bg-gradient-to-r from-[#106EE8] to-indigo-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Lihat Simulasi 🚀
                    </button>
                </div>
            </div>
        `;

        this.ui.optionsContainer.innerHTML = resultHTML;

        // Event listener untuk tombol "Lihat Simulasi"
        const viewSimulatorBtn = document.getElementById('view-simulator-btn');
        if (viewSimulatorBtn) {
            viewSimulatorBtn.addEventListener('click', () => {
                console.log('Tombol Lihat Simulasi diklik!');
                console.log('window.renderSimulator tersedia?', typeof window.renderSimulator);
                console.log('winnerKey:', winnerKey);

                // Scroll dulu ke Simulator
                const simulatorSection = document.getElementById('simulator');
                if (simulatorSection) {
                    simulatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }

                // Tunggu scroll selesai, baru update simulator
                setTimeout(() => {
                    // Debug: Cek apakah elemen ada
                    console.log('Checking elements...');
                    const simulatorSection = document.getElementById('simulator');
                    console.log('simulator section:', simulatorSection);

                    if (simulatorSection) {
                        // Coba query dari dalam section
                        const simTitle = simulatorSection.querySelector('#sim-title');
                        const simSubtitle = simulatorSection.querySelector('#sim-subtitle');
                        console.log('sim-title (via querySelector):', simTitle);
                        console.log('sim-subtitle (via querySelector):', simSubtitle);
                    }

                    console.log(
                        'sim-title (via getElementById):',
                        document.getElementById('sim-title'),
                    );
                    console.log(
                        'sim-subtitle (via getElementById):',
                        document.getElementById('sim-subtitle'),
                    );

                    // Panggil Render Simulator (Global Function)
                    if (typeof window.renderSimulator === 'function') {
                        console.log('Memanggil window.renderSimulator dengan key:', winnerKey);
                        try {
                            window.renderSimulator(winnerKey);
                            console.log('renderSimulator berhasil dipanggil');
                        } catch (error) {
                            console.error('Error saat memanggil renderSimulator:', error);
                        }
                    } else {
                        console.error('Fungsi renderSimulator tidak ditemukan!');
                        console.log('window object:', window);
                        alert(
                            'Error: Fungsi renderSimulator tidak ditemukan. Silakan refresh halaman.',
                        );
                    }
                }, 1200); // Tambah delay jadi 1.2 detik

                // JANGAN reset quiz - biarkan tetap di mode hasil
            });
        }

        // Event listener untuk tombol "Ulangi Quiz"
        const retakeQuizBtn = document.getElementById('retake-quiz-btn');
        if (retakeQuizBtn) {
            retakeQuizBtn.addEventListener('click', () => {
                // Reset state
                this.currentQIndex = 0;
                this.scores = { tech: 0, creative: 0, business: 0, automotive: 0 };

                // Mulai quiz dari awal
                this.loadQuestion();
            });
        }
    }
}

// Export class untuk digunakan di main.js
;

// CSS Injection untuk Animasi
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideUpFade {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-blob { animation: blob 7s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
    }
`;
document.head.appendChild(style);


// ============================================
// js/components/simulator.js
// ============================================



class TimelineSimulator {
    constructor(userProfile = 'general') {
        this.userProfile = userProfile;
        this.data = simulationData[userProfile] || simulationData.general;
        this.timeSlots = ['08:00', '12:00', '14:00', '17:00', '20:00'];
        this.observer = null;
        this.revealedSlots = new Set();
    }

    renderTimeline() {
        const container = document.getElementById('simulator');
        if (!container) {
            console.error('Simulator container not found');
            return;
        }

        // Build timeline HTML
        const timelineHTML = `
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Sehari dalam Kehidupan Mahasiswa
                    </h2>
                    <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        ${this.getProfileDescription()}
                    </p>
                </div>

                <div class="timeline-container relative max-w-4xl mx-auto">
                    <!-- Timeline line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>

                    ${this.timeSlots.map((time, index) => this.renderTimeSlot(time, index)).join('')}
                </div>
            </div>
        `;

        container.innerHTML = timelineHTML;

        // Initialize scroll animations
        this.handleScroll();
    }

    /**
     * Get profile description for header
     */
    getProfileDescription() {
        const descriptions = {
            general: 'Ikuti perjalanan seorang mahasiswa Politeknik Hasnur dari pagi hingga malam',
            tech: 'Perjalanan ala Tech Wizard di Politeknik Hasnur',
            creative: 'Perjalanan ala Creative Builder di Politeknik Hasnur',
            business: 'Perjalanan ala Business Strategist di Politeknik Hasnur',
            automotive: 'Perjalanan ala Automotive Explorer di Politeknik Hasnur',
        };
        return descriptions[this.userProfile] || descriptions.general;
    }

    renderTimeSlot(time, index) {
        const slotData = this.data[time];
        if (!slotData) {
            console.warn(`No data for time slot: ${time}`);
            return '';
        }

        const isEven = index % 2 === 0;
        const alignmentClass = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
        const textAlignClass = isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12';

        return `
            <div class="timeline-slot opacity-0 transform translate-y-8 transition-all duration-700 mb-12 md:mb-16" 
                 data-time="${time}">
                <div class="flex flex-col ${alignmentClass} items-center gap-8">
                    <!-- Time indicator -->
                    <div class="flex-1 ${textAlignClass}">
                        <div class="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            ${slotData.time}
                        </div>
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            ${slotData.title}
                        </h3>
                        <p class="text-lg text-primary font-semibold mb-3">
                            ${slotData.activity}
                        </p>
                        <p class="text-gray-600 leading-relaxed">
                            ${slotData.description}
                        </p>
                    </div>

                    <!-- Icon/Image -->
                    <div class="flex-shrink-0 relative z-10">
                        <div class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary/20">
                            <span class="text-4xl md:text-5xl">${slotData.icon}</span>
                        </div>
                    </div>

                    <!-- Spacer for alignment -->
                    <div class="flex-1 hidden md:block"></div>
                </div>
            </div>
        `;
    }

    handleScroll() {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Show all slots immediately without animation
            this.revealAllSlots();
            return;
        }

        // Use Intersection Observer for scroll-triggered animations
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2, // Trigger when 20% of element is visible
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const slot = entry.target;
                    const time = slot.dataset.time;

                    // Only reveal once
                    if (!this.revealedSlots.has(time)) {
                        this.revealSlot(slot);
                    }
                }
            });
        }, options);

        // Observe all timeline slots
        const slots = document.querySelectorAll('.timeline-slot');
        slots.forEach((slot) => {
            this.observer.observe(slot);
        });
    }

    revealSlot(slotElement) {
        // Add reveal classes
        slotElement.classList.remove('opacity-0', 'translate-y-8');
        slotElement.classList.add('opacity-100', 'translate-y-0');

        // Track revealed slot
        const time = slotElement.dataset.time;
        if (time) {
            this.revealedSlots.add(time);
        }
    }

    /**
     * Reveal all slots immediately (for reduced motion)
     */
    revealAllSlots() {
        const slots = document.querySelectorAll('.timeline-slot');
        slots.forEach((slot) => {
            slot.classList.remove('opacity-0', 'translate-y-8');
            slot.classList.add('opacity-100', 'translate-y-0');
        });
    }

    updateProfile(newProfile) {
        this.userProfile = newProfile;
        this.data = simulationData[newProfile] || simulationData.general;
        this.revealedSlots.clear();

        // Disconnect existing observer
        if (this.observer) {
            this.observer.disconnect();
        }

        // Re-render timeline
        this.renderTimeline();
    }

    /**
     * Cleanup method
     */
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        this.revealedSlots.clear();
    }
}

function initSimulator(userProfile = 'general') {
    const simulator = new TimelineSimulator(userProfile);
    simulator.renderTimeline();
    return simulator;
}


// ============================================
// js/components/explore.js
// ============================================




class ExploreSection {
    constructor() {
        this.data = campusData;
        this.currentCategory = 'all';
        this.modal = new Modal();
        this.container = null;
    }

    init() {
        this.container = document.getElementById('explore');
        if (!this.container) {
            console.error('Explore section container not found');
            return;
        }

        this.render();
    }

    render() {
        const html = `
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Jelajahi Ekosistem Kampus
                    </h2>
                    <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Temukan fasilitas, organisasi, dan program studi yang tersedia di Politeknik Hasnur
                    </p>
                </div>

                <!-- Program Studi Section -->
                ${this.renderCategorySlider('studyPrograms', 'Program Studi', '🎓')}

                <!-- Organisasi Section -->
                ${this.renderCategorySlider('organizations', 'Organisasi Mahasiswa', '👥')}

                <!-- UKM Section -->
                ${this.renderCategorySlider('ukm', 'Unit Kegiatan Mahasiswa', '🎯')}

                <!-- Fasilitas Section -->
                ${this.renderCategorySlider('facilities', 'Fasilitas Kampus', '🏢')}

                <div class="mt-20">
    <div class="text-center mb-12">
        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lokasi Kampus
        </h3>
        <p class="text-lg text-gray-600">
            Politeknik Hasnur memiliki 2 kampus yang strategis di Kalimantan Selatan
        </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
        
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
            <div class="bg-gradient-to-r from-primary to-blue-600 p-6">
                <div class="flex items-center gap-3 mb-1">
                    <svg class="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <h4 class="text-2xl font-bold text-white">Kampus 1</h4>
                </div>
                <p class="text-blue-100 text-sm font-medium">Kampus Utama (Handil Bakti)</p>
            </div>

            <div class="p-6 flex-1 flex flex-col">
                <p class="text-gray-600 mb-4 flex items-start gap-2 text-sm leading-relaxed">
                    <svg class="w-4 h-4 text-primary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    Ray V, Jl. Brigjen H. Hasan Basri, Handil Bakti, Kec. Alalak, Kabupaten Barito Kuala, Kalimantan Selatan 70582
                </p>

                <div class="rounded-xl overflow-hidden shadow-inner border border-gray-200 relative group flex-1 min-h-[250px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.462502632767!2d114.6201257146738!3d-3.2344798976450995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4230bff29bd8b%3A0x9b8228278b99e443!2sPoliteknik%20Hasnur!5e0!3m2!1sid!2sid!4v1653568412593!5m2!1sid!2sid" 
                        class="absolute inset-0 w-full h-full border-0 group-hover:opacity-90 transition-opacity" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <div class="flex items-center gap-3 mb-1">
                    <svg class="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                    </svg>
                    <h4 class="text-2xl font-bold text-white">Kampus 2</h4>
                </div>
                <p class="text-indigo-100 text-sm font-medium">Wetland Square (Banjarmasin)</p>
            </div>

            <div class="p-6 flex-1 flex flex-col">
                <p class="text-gray-600 mb-4 flex items-start gap-2 text-sm leading-relaxed">
                    <svg class="w-4 h-4 text-indigo-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    Jl. Jend. Ahmad Yani KM.3,5 No.115A, Kota Banjarmasin, Kalimantan Selatan 70234
                </p>

                <div class="rounded-xl overflow-hidden shadow-inner border border-gray-200 relative group flex-1 min-h-[250px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.086525636458!2d114.60569732269964!3d-3.328799089825868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de42395905787bb%3A0xd2c3b6c02497f9fb!2sWetland%20Square!5e0!3m2!1sid!2sid!4v1653568362940!5m2!1sid!2sid" 
                        class="absolute inset-0 w-full h-full border-0 group-hover:opacity-90 transition-opacity" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
        </div>
    </div>
</div>
        `;

        this.container.innerHTML = html;
        this.attachEventListeners();
        this.initializeSliders();
    }

    /**
     * Render category slider section
     * @param {string} category - Category key
     * @param {string} title - Section title
     * @param {string} icon - Section icon
     * @returns {string} HTML string
     */
    renderCategorySlider(category, title, icon) {
        const items = this.data[category] || [];

        if (items.length === 0) {
            return '';
        }

        return `
            <div class="mb-16">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <span class="text-3xl">${icon}</span>
                        ${title}
                        <span class="text-lg font-normal text-gray-500">(${items.length})</span>
                    </h3>
                    <div class="flex gap-2">
                        <button 
                            class="slider-btn prev-btn p-2 rounded-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            data-slider="${category}"
                            data-direction="prev"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <button 
                            class="slider-btn next-btn p-2 rounded-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            data-slider="${category}"
                            data-direction="next"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div class="relative">
                    <div 
                        class="slider-container overflow-x-auto scrollbar-hide scroll-smooth"
                        data-slider="${category}"
                    >
                        <div class="flex gap-6 pb-4">
                            ${items.map((item) => this.renderSliderCard(item)).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render slider card
     * @param {object} card - Card data
     * @returns {string} HTML string of card
     */
    renderSliderCard(card) {
        const imageUrl = card.logo || card.image || 'assets/images/polihasnur-logo.png';
        const categoryLabel = this.getCategoryLabel(card.category);

        return `
            <div 
                class="card group cursor-pointer flex-shrink-0 w-72 transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white rounded-xl overflow-hidden border border-gray-200"
                data-card-id="${card.id}"
                data-category="${card.category}"
            >
                <div class="card-image-wrapper relative h-40 overflow-hidden bg-white">
                    <img 
                        src="${imageUrl}" 
                        alt="${card.name}"
                        class="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='assets/images/polihasnur-logo.png';"
                    />
                    <div class="absolute top-2 right-2">
                        <span class="bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
                            ${categoryLabel}
                        </span>
                    </div>
                </div>
                <div class="card-content p-4">
                    <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        ${card.name}
                    </h3>
                    <p class="text-gray-600 text-sm line-clamp-2 mb-3">
                        ${card.description}
                    </p>
                    <div class="flex items-center text-primary font-semibold text-sm">
                        <span>Lihat Detail</span>
                        <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Filter cards by category
     * @param {string} category - Category to filter
     * @returns {array} Filtered cards
     */
    filterCards(category) {
        if (category === 'all') {
            return [
                ...this.data.studyPrograms,
                ...this.data.organizations,
                ...this.data.ukm,
                ...this.data.facilities,
            ];
        }

        return this.data[category] || [];
    }

    /**
     * Get category label in Indonesian
     * @param {string} category - Category key
     * @returns {string} Category label
     */
    getCategoryLabel(category) {
        const labels = {
            studyPrograms: 'Program Studi',
            organizations: 'Organisasi',
            ukm: 'UKM',
            facilities: 'Fasilitas',
        };
        return labels[category] || category;
    }

    attachEventListeners() {
        // Slider navigation buttons
        const sliderButtons = this.container.querySelectorAll('.slider-btn');
        sliderButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const sliderName = e.currentTarget.dataset.slider;
                const direction = e.currentTarget.dataset.direction;
                this.handleSliderNavigation(sliderName, direction);
            });
        });

        // Card clicks - use event delegation
        const sliderContainers = this.container.querySelectorAll('.slider-container');
        sliderContainers.forEach((container) => {
            container.addEventListener('click', (e) => {
                const card = e.target.closest('.card');
                if (card) {
                    const cardId = parseInt(card.dataset.cardId);
                    const category = card.dataset.category;
                    this.handleCardClick(cardId, category);
                }
            });
        });
    }

    /**
     * Initialize sliders with scroll detection
     */
    initializeSliders() {
        const sliderContainers = this.container.querySelectorAll('.slider-container');

        sliderContainers.forEach((container) => {
            const sliderName = container.dataset.slider;
            this.updateSliderButtons(sliderName);

            // Update buttons on scroll
            container.addEventListener('scroll', () => {
                this.updateSliderButtons(sliderName);
            });
        });
    }

    /**
     * Handle slider navigation
     * @param {string} sliderName - Slider identifier
     * @param {string} direction - 'prev' or 'next'
     */
    handleSliderNavigation(sliderName, direction) {
        const container = this.container.querySelector(
            `.slider-container[data-slider="${sliderName}"]`,
        );
        if (!container) return;

        const scrollAmount = 300; // Scroll by 300px
        const currentScroll = container.scrollLeft;

        if (direction === 'next') {
            container.scrollLeft = currentScroll + scrollAmount;
        } else {
            container.scrollLeft = currentScroll - scrollAmount;
        }
    }

    /**
     * Update slider button states
     * @param {string} sliderName - Slider identifier
     */
    updateSliderButtons(sliderName) {
        const container = this.container.querySelector(
            `.slider-container[data-slider="${sliderName}"]`,
        );
        if (!container) return;

        const prevBtn = this.container.querySelector(`.prev-btn[data-slider="${sliderName}"]`);
        const nextBtn = this.container.querySelector(`.next-btn[data-slider="${sliderName}"]`);

        if (!prevBtn || !nextBtn) return;

        // Check if at start
        if (container.scrollLeft <= 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        // Check if at end
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
            // 10px threshold
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    /**
     * Handle card click - open modal with details
     * @param {number} cardId - Card ID
     * @param {string} category - Card category
     */
    handleCardClick(cardId, category) {
        const cardData = this.findCardData(cardId, category);
        if (!cardData) {
            console.error('Card data not found:', cardId, category);
            return;
        }

        this.renderModal(cardData);
    }

    /**
     * Find card data by ID and category
     * @param {number} cardId - Card ID
     * @param {string} category - Card category
     * @returns {object|null} Card data
     */
    findCardData(cardId, category) {
        const categoryData = this.data[category];
        if (!categoryData) return null;

        return categoryData.find((item) => item.id === cardId);
    }

    /**
     * Render modal with card details
     * @param {object} cardData - Card data to display
     */
    renderModal(cardData) {
        const imageUrl = cardData.logo || cardData.image || 'assets/images/polihasnur-logo.png';
        const categoryLabel = this.getCategoryLabel(cardData.category);

        const content = `
            <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                    <div class="rounded-lg overflow-hidden bg-gray-100">
                        <img 
                            src="${imageUrl}" 
                            alt="${cardData.name}"
                            class="w-full h-auto object-cover"
                            onerror="this.onerror=null; this.src='assets/images/polihasnur-logo.png'; this.classList.add('object-contain', 'p-8');"
                        />
                    </div>
                    <div class="mt-4">
                        <span class="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full">
                            ${categoryLabel}
                        </span>
                    </div>
                </div>
                <div class="md:w-2/3">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">
                        ${cardData.name}
                    </h3>
                    ${
                        cardData.level
                            ? `
                        <div class="mb-4">
                            <span class="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded">
                                ${cardData.level}
                            </span>
                        </div>
                    `
                            : ''
                    }
                    <p class="text-gray-700 text-lg leading-relaxed mb-6">
                        ${cardData.description}
                    </p>
                    
                    ${this.renderAdditionalInfo(cardData)}
                    
                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <p class="text-gray-600 text-sm">
                            Untuk informasi lebih lanjut, silakan hubungi kami di:
                        </p>
                        <div class="mt-2 flex flex-col sm:flex-row gap-4">
                            <a href="tel:085100156666" class="text-primary hover:text-primary/80 font-semibold">
                                📞 0851-0015-6666
                            </a>
                            <a href="mailto:polihasnur@polihasnur.ac.id" class="text-primary hover:text-primary/80 font-semibold">
                                ✉️ polihasnur@polihasnur.ac.id
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.modal.open(content, {
            title: '',
            size: 'xlarge',
            showClose: true,
        });
    }

    /**
     * Render additional info based on card type
     * @param {object} cardData - Card data
     * @returns {string} HTML string
     */
    renderAdditionalInfo(cardData) {
        // For study programs, could add more details
        if (cardData.category === 'studyPrograms') {
            return `
                <div class="bg-blue-50 rounded-lg p-6 mb-6">
                    <h4 class="font-bold text-gray-900 mb-3">Keunggulan Program</h4>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Kurikulum berbasis industri</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Fasilitas laboratorium modern</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Dosen berpengalaman dan bersertifikasi</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Peluang magang dan kerja sama industri</span>
                        </li>
                    </ul>
                </div>
            `;
        }

        return '';
    }
}

/**
 * Initialize explore section
 * @returns {ExploreSection} Explore section instance
 */
function initExplore() {
    const explore = new ExploreSection();
    explore.init();
    return explore;
}


// ============================================
// js/main.js
// ============================================










// Application state
const appState = {
    quizCompleted: false,
    userProfile: null,
    currentSection: 'hero',
};

// Global instances
let quizApp = null;
let modal = null;
let toast = null;
let navbar = null;
let simulator = null;
let exploreSection = null;

function initSimulatorSection() {
    // Initialize with general profile (fallback)
    // Will be updated when user completes quiz
    const profile = appState.userProfile || 'general';
    simulator = initSimulator(profile);
}

function initExploreSection() {
    exploreSection = initExplore();
}

function initApp() {
    console.log('Digital Hasnur - Initializing application...');

    try {
        // Initialize global components
        toast = new Toast();
        navbar = new Navbar();
        modal = new Modal();

        // Detect prefers-reduced-motion
        detectReducedMotionPreference();

        // Initialize hero section
        initHero();

        // Initialize quiz with error handling
        initQuiz();

        // Initialize simulator with default profile
        // DISABLED: Simulator sekarang menggunakan HTML statis di index.html
        // initSimulatorSection();

        // Initialize explore section
        initExploreSection();

        // Initialize keyboard navigation
        initKeyboardNavigation();

        // Initialize accessibility features
        initAccessibilityFeatures();

        // Log successful initialization
        console.log('Application initialized successfully');

        // Show welcome message
        if (toast) {
            toast.success('Selamat datang di Digital Hasnur!', 2000);
        }
    } catch (error) {
        console.error('Application initialization failed:', error);
        showError('Terjadi kesalahan saat memuat aplikasi. Silakan refresh halaman.');
    }
}

function detectReducedMotionPreference() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        console.log('Reduced motion preference detected - simplifying animations');
        document.documentElement.classList.add('reduce-motion');
    }

    // Listen for changes in motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        if (e.matches) {
            document.documentElement.classList.add('reduce-motion');
            console.log('Reduced motion enabled');
        } else {
            document.documentElement.classList.remove('reduce-motion');
            console.log('Reduced motion disabled');
        }
    });
}

function initQuiz() {
    try {
        // Validate quiz data
        if (!quizData || !quizData.questions || !quizData.profiles) {
            throw new Error('Quiz data is invalid or missing');
        }

        // Initialize QuizApp
        quizApp = new QuizApp(quizData);

        // Export to window for debugging and fallback
        window.quizAppInstance = quizApp;
        console.log('QuizApp exported to window.quizAppInstance');

        // Get CTA button from hero section to scroll to quiz
        const ctaPrimary = document.getElementById('cta-primary');
        if (ctaPrimary) {
            ctaPrimary.addEventListener('click', (e) => {
                e.preventDefault();
                const quizSection = document.getElementById('quiz');
                if (quizSection) {
                    quizSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        }

        // Get secondary CTA button to explore campus (skip to simulator)
        const ctaSecondary = document.getElementById('cta-secondary');
        if (ctaSecondary) {
            ctaSecondary.addEventListener('click', () => {
                const simulatorSection = document.getElementById('simulator');
                if (simulatorSection) {
                    simulatorSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        }

        console.log('Quiz initialized successfully');
    } catch (error) {
        console.error('Quiz initialization failed:', error);
        showError('Quiz tidak dapat dimuat. Anda masih dapat menjelajahi kampus.');

        // Provide alternative navigation
        const ctaPrimary = document.getElementById('cta-primary');
        if (ctaPrimary) {
            ctaPrimary.addEventListener('click', () => {
                const exploreSection = document.getElementById('explore');
                if (exploreSection) {
                    exploreSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        }
    }
}

/**
 * Start the quiz
 */
function startQuiz() {
    // Quiz sudah diinisialisasi di QuizApp, tidak perlu modal lagi
    console.log('Quiz started via QuizApp');
}

/**
 * Attach event listeners to quiz options
 */
function attachQuizEventListeners() {
    // Tidak diperlukan lagi karena QuizApp menangani sendiri
}

/**
 * Handle quiz answer selection
 * @param {number} optionIndex - Selected option index
 */
function handleQuizAnswer(optionIndex) {
    // Tidak diperlukan lagi karena QuizApp menangani sendiri
}

/**
 * Handle view simulation button click
 */
function handleViewSimulation() {
    // Tidak diperlukan lagi karena QuizApp menangani sendiri
}

/**
 * Handle retake quiz button click
 */
function handleRetakeQuiz() {
    // Tidak diperlukan lagi karena QuizApp menangani sendiri
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    if (toast) {
        toast.error(message);
    } else {
        alert(message);
    }
}

/**
 * Get current application state
 */
function getAppState() {
    return { ...appState };
}

/**
 * Update application state
 */
function updateAppState(updates) {
    Object.assign(appState, updates);
    console.log('App state updated:', appState);
}

/**
 * Get global toast instance
 */
function getToast() {
    return toast;
}

/**
 * Get global navbar instance
 */
function getNavbar() {
    return navbar;
}

function initKeyboardNavigation() {
    // Tab key navigation for interactive elements
    document.addEventListener('keydown', (e) => {
        // Skip if user is typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        // Handle keyboard shortcuts
        switch (e.key) {
            case 'h':
            case 'H':
                // Navigate to hero section
                if (!e.ctrlKey && !e.metaKey) {
                    const heroSection = document.getElementById('hero');
                    if (heroSection) {
                        heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
            case 'q':
            case 'Q':
                // Navigate to quiz section
                if (!e.ctrlKey && !e.metaKey) {
                    const quizSection = document.getElementById('quiz');
                    if (quizSection) {
                        quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
            case 's':
            case 'S':
                // Navigate to simulator section
                if (!e.ctrlKey && !e.metaKey) {
                    const simulatorSection = document.getElementById('simulator');
                    if (simulatorSection) {
                        simulatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
            case 'e':
            case 'E':
                // Navigate to explore section
                if (!e.ctrlKey && !e.metaKey) {
                    const exploreSection = document.getElementById('explore');
                    if (exploreSection) {
                        exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
            case 'c':
            case 'C':
                // Navigate to contact section
                if (!e.ctrlKey && !e.metaKey) {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
                break;
        }
    });

    console.log('Keyboard navigation initialized');
}

function initAccessibilityFeatures() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.className =
        'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded';
    skipLink.textContent = 'Lewati ke konten utama';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Ensure all interactive elements have proper focus indicators
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced focus indicators for accessibility */
        *:focus-visible {
            outline: 2px solid #106EE8;
            outline-offset: 2px;
        }
        
        /* Screen reader only class */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
        
        .focus\\:not-sr-only:focus {
            position: static;
            width: auto;
            height: auto;
            padding: 0.5rem 1rem;
            margin: 0;
            overflow: visible;
            clip: auto;
            white-space: normal;
        }
    `;
    document.head.appendChild(style);

    // Add ARIA labels to sections
    const sections = [
        { id: 'hero', label: 'Bagian Utama' },
        { id: 'quiz', label: 'Quiz Kepribadian' },
        { id: 'simulator', label: 'Simulasi Kehidupan Mahasiswa' },
        { id: 'explore', label: 'Jelajahi Kampus' },
        { id: 'contact', label: 'Informasi Kontak' },
    ];

    sections.forEach(({ id, label }) => {
        const section = document.getElementById(id);
        if (section) {
            section.setAttribute('aria-label', label);
            section.setAttribute('role', 'region');
        }
    });

    console.log('Accessibility features initialized');
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Export for use in other modules
;

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navBrand = document.getElementById('nav-brand');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // 1. Logic Animasi Scroll (Glassmorphism Effect)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Saat di-scroll ke bawah
            navbar.classList.remove('bg-transparent', 'border-transparent', 'py-4');
            navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'border-gray-200', 'shadow-sm');

            // Ubah text logo jadi gelap
            navBrand.classList.remove('text-white');
            navBrand.classList.add('text-slate-800');

            // Ubah text link desktop jadi gelap
            navLinks.forEach((link) => {
                link.classList.remove('text-white', 'hover:bg-white/20');
                link.classList.add('text-slate-700', 'hover:bg-blue-50', 'hover:text-[#106EE8]');
            });

            // Ubah icon hamburger mobile jadi gelap
            mobileMenuBtn.classList.remove('text-white', 'hover:bg-white/20');
            mobileMenuBtn.classList.add('text-slate-800', 'hover:bg-gray-100');
        } else {
            // Saat balik ke paling atas (Hero Section)
            navbar.classList.add('bg-transparent', 'border-transparent', 'py-4');
            navbar.classList.remove(
                'bg-white/90',
                'backdrop-blur-md',
                'border-gray-200',
                'shadow-sm',
            );

            // Kembalikan text ke putih
            navBrand.classList.add('text-white');
            navBrand.classList.remove('text-slate-800');

            navLinks.forEach((link) => {
                link.classList.add('text-white', 'hover:bg-white/20');
                link.classList.remove('text-slate-700', 'hover:bg-blue-50', 'hover:text-[#106EE8]');
            });

            mobileMenuBtn.classList.add('text-white', 'hover:bg-white/20');
            mobileMenuBtn.classList.remove('text-slate-800', 'hover:bg-gray-100');
        }
    });

    // 2. Logic Toggle Menu Mobile
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');

        // Ubah icon dari hamburger (garis 3) ke X (close)
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger
        } else {
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Icon X
        }
    });

    // 3. Auto-close mobile menu kalau link diklik
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        });
    });
});

// === GANTIKAN SEMUA EVENT LISTENER NAVBAR DENGAN KODE INI ===

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navBrand = document.getElementById('logo-brand');
    const navLinks = document.querySelectorAll('.nav-link');
    const navCta = document.getElementById('nav-cta');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // 1. Logic Toggle Menu Mobile
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger
        } else {
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Icon X
        }
    });

    // 2. Auto-close mobile menu kalau link diklik
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        });
    });

    // 3. Logic Animasi Scroll (Satu pintu, anti-nabrak!)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // === MODE BIRU (Saat halaman di-scroll ke bawah) ===
            navbar.classList.remove('bg-white/70', 'backdrop-blur-xl', 'border-white/20', 'py-3');
            navbar.classList.add('bg-[#106EE8]', 'shadow-lg', 'py-2'); // Padding mengecil dikit biar elegan

            // Teks Menu & Efek Hover berubah jadi PUTIH
            navLinks.forEach((link) => {
                link.classList.remove('text-slate-600', 'hover:text-blue-600', 'after:bg-blue-600');
                link.classList.add('text-white/80', 'hover:text-white', 'after:bg-white');
            });

            // Tombol CTA (Daftar) berubah jadi latar Putih, teks Biru
            navCta.classList.remove(
                'bg-gradient-to-r',
                'from-blue-600',
                'to-indigo-600',
                'text-white',
            );
            navCta.classList.add('bg-white', 'text-[#106EE8]', 'hover:bg-gray-100');

            // Tombol Mobile Menu berubah Putih
            mobileMenuBtn.classList.remove(
                'text-slate-600',
                'hover:text-blue-600',
                'hover:bg-blue-50',
            );
            mobileMenuBtn.classList.add('text-white', 'hover:bg-white/20');
        } else {
            // === MODE GLASSMORPHISM (Saat kembali ke paling atas) ===
            navbar.classList.add('bg-white/70', 'backdrop-blur-xl', 'border-white/20', 'py-3');
            navbar.classList.remove('bg-[#106EE8]', 'shadow-lg', 'py-2');

            // Teks Menu & Efek Hover kembali jadi SLATE & BIRU
            navLinks.forEach((link) => {
                link.classList.add('text-slate-600', 'hover:text-blue-600', 'after:bg-blue-600');
                link.classList.remove('text-white/80', 'hover:text-white', 'after:bg-white');
            });

            // Tombol CTA kembali ke Gradasi Biru
            navCta.classList.add(
                'bg-gradient-to-r',
                'from-blue-600',
                'to-indigo-600',
                'text-white',
            );
            navCta.classList.remove('bg-white', 'text-[#106EE8]', 'hover:bg-gray-100');

            // Tombol Mobile Menu kembali ke Slate
            mobileMenuBtn.classList.add(
                'text-slate-600',
                'hover:text-blue-600',
                'hover:bg-blue-50',
            );
            mobileMenuBtn.classList.remove('text-white', 'hover:bg-white/20');
        }
    });
});



// Fungsi ini dipanggil setelah kuis selesai dan profil sudah ditentukan
function renderSimulator(profileKey) {
    console.log('renderSimulator dipanggil dengan profileKey:', profileKey);

    const profile = quizData.profiles[profileKey];
    if (!profile) {
        console.error('Profile tidak ditemukan untuk key:', profileKey);
        return;
    }

    console.log('Profile ditemukan:', profile.title);

    // Helper function untuk update elemen dengan null check
    const updateElement = (id, property, value) => {
        const element = document.getElementById(id);
        if (element) {
            element[property] = value;
        } else {
            console.warn(`Element dengan id '${id}' tidak ditemukan`);
        }
    };

    // 1. Update Teks di ID Card
    updateElement('sim-title', 'textContent', profile.title);
    updateElement('sim-subtitle', 'textContent', profile.name);
    updateElement('sim-desc', 'textContent', profile.description);
    updateElement(
        'simulator-subtitle',
        'textContent',
        `Wah, ternyata kamu seorang ${profile.title}! Berikut adalah simulasi kehidupan kampusmu:`,
    );

    // Update warna Header Card sesuai profil
    const headerBg = document.getElementById('card-header-bg');

    if (headerBg) {
        // Hapus warna default
        headerBg.className = 'h-32 relative ';

        // Set warna dinamis
        if (profileKey === 'tech') {
            headerBg.classList.add('bg-gradient-to-br', 'from-[#106EE8]', 'to-indigo-800');
            const timelineIcon = document.getElementById('timeline-icon');
            const matkulIcon = document.getElementById('matkul-icon');
            if (timelineIcon) timelineIcon.classList.replace('text-slate-400', 'text-blue-500');
            if (matkulIcon) matkulIcon.classList.replace('text-slate-400', 'text-blue-500');
        } else if (profileKey === 'creative') {
            headerBg.classList.add('bg-gradient-to-br', 'from-purple-500', 'to-fuchsia-700');
            const timelineIcon = document.getElementById('timeline-icon');
            const matkulIcon = document.getElementById('matkul-icon');
            if (timelineIcon) timelineIcon.classList.replace('text-slate-400', 'text-purple-500');
            if (matkulIcon) matkulIcon.classList.replace('text-slate-400', 'text-purple-500');
        } else if (profileKey === 'business') {
            headerBg.classList.add('bg-gradient-to-br', 'from-emerald-500', 'to-teal-700');
            const timelineIcon = document.getElementById('timeline-icon');
            const matkulIcon = document.getElementById('matkul-icon');
            if (timelineIcon) timelineIcon.classList.replace('text-slate-400', 'text-emerald-500');
            if (matkulIcon) matkulIcon.classList.replace('text-slate-400', 'text-emerald-500');
        } else if (profileKey === 'automotive') {
            headerBg.classList.add('bg-gradient-to-br', 'from-orange-500', 'to-red-700');
            const timelineIcon = document.getElementById('timeline-icon');
            const matkulIcon = document.getElementById('matkul-icon');
            if (timelineIcon) timelineIcon.classList.replace('text-slate-400', 'text-orange-500');
            if (matkulIcon) matkulIcon.classList.replace('text-slate-400', 'text-orange-500');
        }
    }

    // 2. Update Traits (Sifat)
    const traitsHtml = profile.traits
        .map(
            (trait) =>
                `<span class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">${trait}</span>`,
        )
        .join('');
    updateElement('sim-traits', 'innerHTML', traitsHtml);

    // 3. Update Prodi & UKM
    updateElement('sim-prodi', 'textContent', profile.recommendedProdi[0]);
    updateElement('sim-ukm', 'textContent', profile.recommendedUKM.join(' / '));

    const prodiDot = document.getElementById('sim-prodi-dot');
    if (prodiDot) {
        prodiDot.className = `w-2 h-2 rounded-full ${profileKey === 'tech' ? 'bg-blue-500' : profileKey === 'creative' ? 'bg-purple-500' : profileKey === 'business' ? 'bg-emerald-500' : 'bg-orange-500'}`;
    }

    const ukmDot = document.getElementById('sim-ukm-dot');
    if (ukmDot) {
        ukmDot.className = `w-2 h-2 rounded-full ${profileKey === 'tech' ? 'bg-indigo-500' : profileKey === 'creative' ? 'bg-fuchsia-500' : profileKey === 'business' ? 'bg-teal-500' : 'bg-red-500'}`;
    }

    // 4. Update Mata Kuliah
    const matkulHtml = profile.exampleCourses
        .map((mk) => {
            let colorClass = 'bg-blue-50 text-blue-700 border-blue-100';
            if (profileKey === 'creative')
                colorClass = 'bg-purple-50 text-purple-700 border-purple-100';
            if (profileKey === 'business')
                colorClass = 'bg-emerald-50 text-emerald-700 border-emerald-100';
            if (profileKey === 'automotive')
                colorClass = 'bg-orange-50 text-orange-700 border-orange-100';

            return `<span class="px-4 py-2 ${colorClass} border rounded-xl text-sm font-medium">${mk}</span>`;
        })
        .join('');
    updateElement('sim-matkul', 'innerHTML', matkulHtml);

    // 5. UPDATE JUDUL TIMELINE
    updateElement('timeline-title', 'textContent', `Perjalanan Sehari ${profile.title}`);

    // 6. Merender Jadwal Harian (Timeline)
    const icons = ['📚', '⚙️', '🍜', '🎮'];
    const timelineHtml = profile.dailySchedule
        .map((schedule, index) => {
            let colorTheme = 'blue';
            if (profileKey === 'creative') colorTheme = 'purple';
            if (profileKey === 'business') colorTheme = 'emerald';
            if (profileKey === 'automotive') colorTheme = 'orange';

            const bgColors = [
                `bg-${colorTheme}-100`,
                `bg-indigo-100`,
                `bg-orange-100`,
                `bg-sky-100`,
            ];
            const textColors = [
                `text-${colorTheme}-700`,
                `text-indigo-700`,
                `text-orange-700`,
                `text-sky-700`,
            ];

            return `
            <div class="flex gap-4 md:gap-6 relative group">
                <div class="w-12 h-12 flex-shrink-0 ${bgColors[index % 4]} rounded-full flex items-center justify-center border-4 border-white shadow-sm relative z-10 group-hover:scale-110 transition-transform">
                    <span class="text-lg">${icons[index % 4]}</span>
                </div>
                <div class="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all">
                    <div class="inline-block px-3 py-1 ${bgColors[index % 4]} ${textColors[index % 4]} rounded-lg text-xs font-bold mb-2">${schedule.time}</div>
                    <h5 class="font-bold text-slate-800 text-lg mb-1">${schedule.activity.split(':')[0]}</h5>
                    <p class="text-sm text-slate-600">${schedule.activity}</p>
                </div>
            </div>
        `;
        })
        .join('');
    updateElement('sim-timeline', 'innerHTML', timelineHtml);

    console.log('renderSimulator selesai dijalankan');
}

// Export ke global scope agar bisa dipanggil dari quiz.js
if (typeof window !== 'undefined') {
    window.renderSimulator = renderSimulator;
    console.log('renderSimulator telah di-export ke window');
}


})();
