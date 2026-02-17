import { quizData } from '../data/quiz-data.js';

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
export { QuizApp };

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
