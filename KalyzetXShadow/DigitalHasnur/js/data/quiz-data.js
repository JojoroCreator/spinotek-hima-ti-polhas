export const quizData = {
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
