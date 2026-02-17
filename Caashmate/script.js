// CashMate Interactive Script
// Version 2.0 - Dashboard & Simulation Upgrade

// --- 0. Auth & State Management ---
const USERS_KEY = 'cashmate_users';
const CURRENT_USER_KEY = 'cashmate_active_user';
const USER_MODE_KEY = 'cashmate_user_mode';

function checkAuthState() {
    const path = window.location.pathname;
    const isDashboard = path.includes('dashboard.html');
    const isIndex = path.includes('index.html') || path === '/' || path.endsWith('/');

    const userMode = localStorage.getItem(USER_MODE_KEY);
    const activeUser = localStorage.getItem(CURRENT_USER_KEY);

    if (isIndex && userMode) {
        window.location.href = 'dashboard.html';
    } else if (isDashboard && !userMode) {
        window.location.href = 'index.html';
    } else if (isDashboard) {
        initDashboardUI(userMode, activeUser);
    }
}

function initDashboardUI(mode, username) {
    const guestBanner = document.getElementById('guest-banner');
    const userNameDisplay = document.getElementById('user-name-display');
    const walletCta = document.getElementById('wallet-cta');

    if (mode === 'guest') {
        if (guestBanner) guestBanner.classList.remove('hidden');
        if (userNameDisplay) userNameDisplay.innerText = 'Guest';
    } else {
        if (guestBanner) guestBanner.classList.add('hidden');
        if (userNameDisplay) userNameDisplay.innerText = username || 'User';
    }

    // Load Data
    loadUserData();
    loadAvatar(); // Load Avatar

    // Check Wallet Status
    const walletConnected = getStorageItem('wallet_connected');

    if (!walletConnected && walletCta) {
        walletCta.classList.remove('hidden');
    } else if (walletCta) {
        walletCta.classList.add('hidden');
    }

    renderDashboard();
    initChat();
}

// --- Avatar & Profile Logic ---
function loadAvatar() {
    const avatar = localStorage.getItem('user_avatar') || '👻';
    const avatarElements = document.querySelectorAll('.user-avatar-display');

    avatarElements.forEach(el => {
        // Check if it's an img tag (default DiceBear) or div
        if (el.tagName === 'IMG') {
            const parent = el.parentElement;
            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl user-avatar-display">${avatar}</div>`;
        } else {
            el.innerHTML = avatar;
            el.style.display = 'flex';
            el.style.alignItems = 'center';
            el.style.justifyContent = 'center';
            if (!el.classList.contains('text-6xl')) {
                el.style.fontSize = '1.5rem';
            }
        }
    });

    const nameInput = document.getElementById('settings-username');
    if (nameInput) {
        nameInput.value = localStorage.getItem(CURRENT_USER_KEY) || localStorage.getItem('user_name') || 'Guest';
    }
}

function saveAvatar(avatar) {
    localStorage.setItem('user_avatar', avatar);
    loadAvatar();
    showToast(`Avatar diganti jadi ${avatar}!`, 'success');
}

function saveProfile() {
    const nameInput = document.getElementById('settings-username');
    if (nameInput && nameInput.value.trim() !== '') {
        const newName = nameInput.value.trim();
        localStorage.setItem(CURRENT_USER_KEY, newName);
        localStorage.setItem('user_name', newName);

        const nameDisplays = document.querySelectorAll('#user-name-display, #sidebar-username');
        nameDisplays.forEach(el => el.innerText = newName);

        showToast('Profil berhasil disimpan!', 'success');
    }
}

// --- Storage Helpers ---
function getStorageKey(key) {
    const user = localStorage.getItem(CURRENT_USER_KEY) || 'guest';
    return `cashmate_${user}_${key}`;
}

function getStorageItem(key) {
    const val = localStorage.getItem(getStorageKey(key));
    return val ? JSON.parse(val) : null;
}

function setStorageItem(key, val) {
    localStorage.setItem(getStorageKey(key), JSON.stringify(val));
}


// --- 1. Navigation & UI ---
function switchPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));

    // Show selected
    document.getElementById(`page-${pageId}`).classList.remove('hidden');

    // Update Sidebar Active State
    document.querySelectorAll('.nav-item').forEach(b => {
        b.classList.remove('bg-gray-50', 'text-gray-900', 'active');
        b.classList.add('text-gray-600');
    });
    const navBtn = document.getElementById(`nav-${pageId}`);
    if (navBtn) {
        navBtn.classList.add('bg-gray-50', 'text-gray-900', 'active');
        navBtn.classList.remove('text-gray-600');
    }

    // Update Header
    const titles = {
        'overview': 'Overview',
        'transactions': 'Transactions',
        'ai-advisor': 'AI Advisor',
        'subscriptions': 'Subscriptions',
        'settings': 'Settings'
    };
    document.getElementById('page-title').innerText = titles[pageId] || 'Dashboard';

    // Close sidebar on mobile
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (window.innerWidth < 768) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    // Render Data if needed
    if (pageId === 'overview' || pageId === 'transactions') {
        renderDashboard();
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}


// --- 2. Wallet Simulation ---
function showConnectWalletModal() {
    document.getElementById('wallet-modal').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('wallet-overlay').classList.remove('opacity-0');
        document.getElementById('wallet-content').classList.remove('scale-95', 'opacity-0');
    }, 10);
}

function hideConnectWalletModal() {
    document.getElementById('wallet-overlay').classList.add('opacity-0');
    document.getElementById('wallet-content').classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        document.getElementById('wallet-modal').classList.add('hidden');
    }, 300);
}

function connectWalletProvider(provider) {
    // Simulate Loading
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="animate-spin">🔄</span> Connecting...`;

    setTimeout(() => {
        // 1. Generate Fake Data
        const balance = Math.floor(Math.random() * (5000000 - 500000 + 1) + 500000); // 500k - 5jt
        const transactions = generateFakeTransactions(15);

        // 2. Save Data
        setStorageItem('wallet_connected', true);
        setStorageItem('wallet_provider', provider);
        setStorageItem('balance', balance);

        // Merge with existing transactions if any
        const existingTx = getStorageItem('transactions') || [];
        const newTx = [...existingTx, ...transactions];
        setStorageItem('transactions', newTx); // Sort by date?

        // 3. UI Updates
        hideConnectWalletModal();
        alert(`Berhasil terhubung dengan ${provider}! Saldo & Transaksi telah disinkronisasi.`);
        initDashboardUI(localStorage.getItem(USER_MODE_KEY), localStorage.getItem(CURRENT_USER_KEY));

        // 4. Trigger AI Insight
        setStorageItem('ai_insight', `Wah, saldo lo nambah drastis dari ${provider}! Tapi liat tuh, banyak jajan ${transactions[0].category} minggu ini. Atur lagi yuk!`);
        renderDashboard();

    }, 2000);
}

function generateFakeTransactions(count) {
    const categories = ['nongkrong', 'makan', 'kopi', 'belanja', 'transport', 'lainnya'];
    const titles = {
        'nongkrong': ['Mixue', 'Cinema XXI', 'Karaoke', 'Billard'],
        'makan': ['Warateg', 'McD', 'Sate Padang', 'Nasi Goreng'],
        'kopi': ['Kopi Kenangan', 'Janji Jiwa', 'Starbucks', 'Fore'],
        'belanja': ['Shopee', 'Tokopedia', 'Indomaret', 'Alfamart'],
        'transport': ['Gojek', 'Grab', 'Parkir', 'Bensin'],
        'lainnya': ['Pulsa', 'Listrik', 'Spotify', 'Netflix']
    };

    let txs = [];
    for (let i = 0; i < count; i++) {
        const cat = categories[Math.floor(Math.random() * categories.length)];
        const title = titles[cat][Math.floor(Math.random() * titles[cat].length)];
        const amount = Math.floor(Math.random() * (200000 - 10000) + 10000);
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 14)); // Last 2 weeks

        txs.push({
            id: Date.now() + Math.random(),
            title: title,
            category: cat,
            amount: amount,
            date: date.toISOString()
        });
    }
    return txs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// --- 3. Dashboard Data Rendering ---
let expenseChartInstance = null;

function renderDashboard() {
    const balance = getStorageItem('balance') || 0;
    const transactions = getStorageItem('transactions') || [];
    const insight = getStorageItem('ai_insight') || "Data belum cukup untuk analisis.";

    // 1. Overview Balance
    const balEl = document.getElementById('overview-balance');
    if (balEl) animateValue(balEl, 0, balance, 1000);

    // 2. Expense Calculation (Weekly)
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const weeklyTx = transactions.filter(t => new Date(t.date) > lastWeek);
    const totalWeeklyExpense = weeklyTx.reduce((sum, t) => sum + t.amount, 0);

    document.getElementById('overview-expense').innerText = `Rp ${totalWeeklyExpense.toLocaleString('id-ID')}`;

    // 3. Top Category
    if (weeklyTx.length > 0) {
        const catMap = {};
        weeklyTx.forEach(t => { catMap[t.category] = (catMap[t.category] || 0) + t.amount; });
        const topCat = Object.keys(catMap).reduce((a, b) => catMap[a] > catMap[b] ? a : b);
        document.getElementById('top-category').innerText = topCat.toUpperCase();
    }

    // 4. Bokek Prediction
    if (balance > 0 && totalWeeklyExpense > 0) {
        const dailyAvg = totalWeeklyExpense / 7;
        const daysLeft = Math.floor(balance / dailyAvg);
        const bokekDate = new Date();
        bokekDate.setDate(today.getDate() + daysLeft);
        document.getElementById('bokek-prediction').innerText = `Prediksi habis: ${bokekDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}`;
    }

    // 5. AI Insight (Dynamic)
    let finalInsight = insight;
    if (insight === "Data belum cukup untuk analisis." && totalWeeklyExpense > 0) {
        // Generate immediate insight if data exists but insight is default
        let topCat = '-';
        if (weeklyTx.length > 0) {
            const catMap = {};
            weeklyTx.forEach(t => { catMap[t.category] = (catMap[t.category] || 0) + t.amount; });
            topCat = Object.keys(catMap).reduce((a, b) => catMap[a] > catMap[b] ? a : b);
        }
        finalInsight = generateDynamicInsight(totalWeeklyExpense, topCat);
        setStorageItem('ai_insight', finalInsight); // Save it
    }
    document.getElementById('overview-ai-insight').innerText = `"${finalInsight}"`;

    // 6. Transaction Lists
    renderTransactionLists(transactions);

    // 7. Chart
    renderChart(weeklyTx);

    // 8. Check Achievements
    checkAchievements();
}

function renderTransactionLists(transactions) {
    const miniList = document.getElementById('mini-transaction-list');
    const fullList = document.getElementById('full-transaction-list');

    if (!miniList || !fullList) return;

    if (transactions.length === 0) {
        miniList.innerHTML = '<div class="text-center text-gray-400 text-sm py-4">Belum ada transaksi</div>';
        fullList.innerHTML = '<div class="text-center text-gray-400 py-10">Belum ada transaksi</div>';
        return;
    }

    const htmlGenerator = (t) => `
        <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                    ${getCategoryIcon(t.category)}
                </div>
                <div>
                    <div class="font-bold text-gray-800 text-sm">${t.title || t.category}</div>
                    <div class="text-xs text-gray-400 capitalize">${t.category} • ${new Date(t.date).toLocaleDateString()}</div>
                </div>
            </div>
            <div class="font-bold text-red-500 text-sm">-Rp ${t.amount.toLocaleString()}</div>
        </div>
    `;

    miniList.innerHTML = transactions.slice(0, 5).map(htmlGenerator).join('');
    fullList.innerHTML = transactions.map(htmlGenerator).join('');
}

function getCategoryIcon(cat) {
    const icons = { 'nongkrong': '🍻', 'makan': '🍔', 'kopi': '☕', 'belanja': '🛍️', 'transport': '🚗', 'game': '🎮', 'skincare': '✨' };
    return icons[cat] || '💸';
}


function renderChart(transactions) {
    const ctx = document.getElementById('expenseChart');
    if (!ctx) return;

    // Group by Date for last 7 days
    const labels = [];
    const data = [];

    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toLocaleDateString('id-ID', { weekday: 'short' });
        labels.push(dateStr);

        // Filter tx for this day
        const dayTx = transactions.filter(t => new Date(t.date).toDateString() === d.toDateString());
        data.push(dayTx.reduce((sum, t) => sum + t.amount, 0));
    }

    if (expenseChartInstance) {
        expenseChartInstance.destroy();
    }

    expenseChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Pengeluaran (Rp)',
                data: data,
                backgroundColor: '#ccff00',
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f3f4f6' } },
                x: { grid: { display: false } }
            }
        }
    });
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const val = Math.floor(progress * (end - start) + start);
        obj.innerHTML = "Rp " + val.toLocaleString('id-ID');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}


// --- 4. Interactive Features (Chat & Simulator) ---
// Initialize Chat
function initChat() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox && chatBox.children.length <= 1) { // Only if empty
        // logic init? already handled by static HTML
    }
}

// ... Keep existing Chat Logic (appendAIMessage, handleUserChat etc) adapted ...
// We need to ensure handleUserChat pushes to persistence

// Re-implementing simplified Chat Logic for global scope access
const chatInput = document.getElementById('chat-input');
const typingIndicator = document.getElementById('typing-indicator');
const chatBox = document.getElementById('chat-box');

function scrollToBottom() {
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
}

function appendUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'flex justify-end mb-4 reveal active';
    div.innerHTML = `<div class="bg-secondary text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-md">${text}</div>`;
    chatBox.appendChild(div);
    scrollToBottom();
}

function appendAIMessage(text, type = 'normal') {
    if (typingIndicator) typingIndicator.classList.remove('hidden');
    scrollToBottom();

    setTimeout(() => {
        if (typingIndicator) typingIndicator.classList.add('hidden');
        const div = document.createElement('div');
        div.className = 'flex gap-3 mb-4 reveal active';
        let bg = 'border-gray-200';
        if (type === 'warning') bg = 'border-red-200 bg-red-50';
        div.innerHTML = `
            <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0">CM</div>
            <div class="bg-white ${bg} border px-5 py-3 rounded-2xl rounded-tl-sm text-sm shadow-sm text-gray-700 max-w-[85%]">${text}</div>
        `;
        chatBox.appendChild(div);
        scrollToBottom();
    }, 1000);
}

function handleUserChat() {
    const text = document.getElementById('chat-input').value.trim();
    if (!text) return;
    document.getElementById('chat-input').value = '';

    appendUserMessage(text);

    // Simple logic
    setTimeout(() => {
        const responses = [
            "Wah, boros juga ya. Yakin itu butuh?",
            "Coba pikir2 lagi deh 24 jam.",
            "Gas aja kalau emang penting!",
            "Dompet lo nangis liat ini."
        ];
        appendAIMessage(responses[Math.floor(Math.random() * responses.length)]);
    }, 500);
}

function clearChat() {
    if (chatBox) chatBox.innerHTML = ''; // + Welcome msg?
}

// Simulator Add Transaction
function addTransaction() {
    const amount = parseInt(document.getElementById('sim-amount').value);
    if (!selectedCategoryValue || !amount) {
        alert("Lengkapi data bos!");
        return;
    }

    const newTx = {
        id: Date.now(),
        title: 'Manual Transaction',
        category: selectedCategoryValue,
        amount: amount,
        date: new Date().toISOString()
    };

    // Save
    const existingTx = getStorageItem('transactions') || [];
    existingTx.unshift(newTx);
    setStorageItem('transactions', existingTx);

    // Update Balance?
    const bal = getStorageItem('balance') || 0;
    setStorageItem('balance', bal - amount);

    alert("Transaksi dicatat!");
    document.getElementById('sim-amount').value = '';
    renderDashboard();
    switchPage('overview'); // go back to see update
}

let selectedCategoryValue = '';
function selectCategory(cat) {
    selectedCategoryValue = cat;
    document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.remove('bg-secondary', 'text-white');
        b.classList.add('text-gray-600');
    });
    event.currentTarget.classList.add('bg-secondary', 'text-white');
    event.currentTarget.classList.remove('text-gray-600');
}


// --- 5. Modal Logic (Login/Register) ---
// (Keeping existing modal functions wrapper to avoid breaking buttons)
function showLoginModal() { document.getElementById('login-modal').classList.remove('hidden'); setTimeout(() => { document.getElementById('login-overlay').classList.remove('opacity-0'); document.getElementById('login-content').classList.remove('scale-95', 'opacity-0'); }, 10); }
function hideLoginModal() { document.getElementById('login-overlay').classList.add('opacity-0'); document.getElementById('login-content').classList.add('scale-95', 'opacity-0'); setTimeout(() => { document.getElementById('login-modal').classList.add('hidden'); }, 300); }
function showRegisterModal() { document.getElementById('register-modal').classList.remove('hidden'); setTimeout(() => { document.getElementById('register-overlay').classList.remove('opacity-0'); document.getElementById('register-content').classList.remove('scale-95', 'opacity-0'); }, 10); }
function hideRegisterModal() { document.getElementById('register-overlay').classList.add('opacity-0'); document.getElementById('register-content').classList.add('scale-95', 'opacity-0'); setTimeout(() => { document.getElementById('register-modal').classList.add('hidden'); }, 300); }
function switchToRegister() { hideLoginModal(); setTimeout(showRegisterModal, 300); }
function switchToLogin() { hideRegisterModal(); setTimeout(showLoginModal, 300); }

function registerUser() {
    const name = document.getElementById('reg-username').value;
    const pass = document.getElementById('reg-password').value;
    // ... validation ...
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    users.push({ username: name, password: pass });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    alert("Registered!");
    switchToLogin();
}

function loginUser() {
    const name = document.getElementById('login-username').value;
    const pass = document.getElementById('login-password').value;
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.username === name && u.password === pass);

    if (user) {
        localStorage.setItem(USER_MODE_KEY, 'user');
        localStorage.setItem(CURRENT_USER_KEY, name);
        window.location.href = 'dashboard.html';
    } else {
        alert("Invalid credentials");
    }
}

function enableGuestMode() {
    localStorage.setItem(USER_MODE_KEY, 'guest');
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'dashboard.html';
}

function logout() {
    localStorage.removeItem(USER_MODE_KEY);
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'index.html';
}

// --- 6. Landing Page Hero Preview ---
// Subscription Checker
function checkSubs() {
    const checks = document.querySelectorAll('.sub-check:checked');
    let total = 0;
    let names = [];
    checks.forEach(c => {
        total += parseInt(c.value);
        names.push(c.parentElement.querySelector('span').innerText.split(' (')[0]);
    });

    if (total === 0) {
        alert("Pilih dulu atuh langganannya! 😅");
        return;
    }

    const yearly = total * 12;

    // Populate Modal
    document.getElementById('sub-total-monthly').innerText = 'Rp ' + total.toLocaleString('id-ID');
    document.getElementById('sub-total-yearly').innerText = 'Rp ' + yearly.toLocaleString('id-ID');

    const listContainer = document.getElementById('sub-list');
    listContainer.innerHTML = names.map(name =>
        `<span class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 border border-gray-200">${name}</span>`
    ).join('');

    const insight = `Coba pikir lagi, itu ${names[0]} beneran dipake tiap hari? Kalau jarang, mending cut loss sekarang daripada boncos setahun!`;
    document.getElementById('sub-insight').innerText = `"${insight}"`;

    // Show Modal
    const modal = document.getElementById('sub-modal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('sub-overlay').classList.remove('opacity-0');
        document.getElementById('sub-content').classList.remove('scale-95', 'opacity-0');
    }, 10);
}

function hideSubModal() {
    document.getElementById('sub-overlay').classList.add('opacity-0');
    document.getElementById('sub-content').classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        document.getElementById('sub-modal').classList.add('hidden');
    }, 300);
}

function initHeroPreview() {
    const heroBalance = document.getElementById('hero-balance');
    const heroStatus = document.getElementById('hero-status');
    const heroTxList = document.getElementById('hero-tx-list');
    const heroInsight = document.getElementById('hero-insight');
    const heroName = document.getElementById('hero-user-name');

    if (!heroBalance) return; // Not on index or hero missing

    // Check if user has data
    const activeUser = localStorage.getItem(CURRENT_USER_KEY);
    const userMode = localStorage.getItem(USER_MODE_KEY);

    let balance = 1500000;
    let transactions = [
        { title: 'Kopi Kenangan', category: 'kopi', amount: 25000, date: new Date().toISOString() },
        { title: 'Spotify Premium', category: 'lainnya', amount: 55000, date: new Date().toISOString() }
    ];
    let insight = "Waduh, jajan kopi mulu. Inget cicilan paylater belum lunas bestie! 🤫";
    let status = "AMAN JAYA 👍";

    if (userMode) {
        const storedBal = getStorageItem('balance');
        const storedTx = getStorageItem('transactions');
        const storedInsight = getStorageItem('ai_insight');

        if (storedBal !== null) balance = storedBal;
        if (storedTx && storedTx.length > 0) transactions = storedTx;
        if (storedInsight) insight = storedInsight;

        if (activeUser) heroName.innerText = activeUser;
        else heroName.innerText = "Guest Mode";
    } else {
        // Not logged in / No session
        heroName.innerText = "Live Preview";
    }

    // Determine Status based on balance
    if (balance < 100000) status = "BAHAYA 💀";
    else if (balance < 500000) status = "WASPADA ⚠️";

    // Render
    animateValue(heroBalance, 0, balance, 1500);
    heroStatus.innerText = status;
    heroInsight.innerText = `"${insight}"`;

    // Render TX List (Top 2-3)
    const listHtml = transactions.slice(0, 3).map(t => `
        <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-100 mb-2 last:mb-0">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">${getCategoryIcon(t.category)}</div>
                <div>
                    <div class="font-bold text-gray-800 text-xs">${t.title || t.category}</div>
                    <div class="text-[10px] text-gray-400 capitalize">${t.category}</div>
                </div>
            </div>
            <div class="font-bold text-red-500 text-xs">-Rp ${t.amount.toLocaleString()}</div>
        </div>
    `).join('');

    heroTxList.innerHTML = listHtml;
}

// Initial Run
document.addEventListener('DOMContentLoaded', () => {
    checkAuthState();
    // Default Page
    const path = window.location.pathname;
    if (path.includes('dashboard.html')) {
        if (dateEl) dateEl.innerText = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    initHeroPreview();

    // Scroll Reveal Init
    window.addEventListener('scroll', scrollReveal);
    scrollReveal();
});

function scrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// --- Data Seeding & Loading ---
function loadUserData() {
    const balance = getStorageItem('balance');
    const transactions = getStorageItem('transactions');

    // If new user/guest (no data), Seed it!
    if (balance === null && (!transactions || transactions.length === 0)) {
        seedInitialData();
    }
}

function seedInitialData() {
    // Initial Balance (e.g. Salary)
    const initialBalance = 2500000;
    setStorageItem('balance', initialBalance);

    // Initial Transactions (Mock Data)
    const txs = generateFakeTransactions(5);
    setStorageItem('transactions', txs);

    // Initial Insight
    const insight = "Selamat datang! Gw udah isiin saldo awal biar dapur ngebul. Jangan lgsg dihabisin ya! 😉";
    setStorageItem('ai_insight', insight);

    // Only reload if we are on dashboard to avoid loop
    if (window.location.pathname.includes('dashboard.html')) {
        renderDashboard();
    }
}

function generateDynamicInsight(totalExpense, topCategory) {
    if (totalExpense === 0) return "Hemat pangkal kaya! Belum ada pengeluaran nih.";
    if (totalExpense > 1000000) return `Waduh, baru sebentar udah abis Rp ${totalExpense.toLocaleString()}! Rem dikit di ${topCategory}-nya bestie.`;
    return `Pengeluaran lo masih aman. Ati-ati sama ${topCategory}, biasanya bikin khilaf.`;
}
// --- 3. Gamification ---
const ACHIEVEMENTS_IDX = [
    {
        id: 'anak_senja', icon: '☕', title: 'Anak Senja', req: 'Beli kopi > 5x',
        check: (txs, balance) => txs.filter(t => t.category === 'kopi').length >= 5
    },
    {
        id: 'sultan', icon: '💎', title: 'Sultan Mode', req: 'Jajan > 500rb sehari',
        check: (txs, balance) => {
            const today = new Date().toISOString().split('T')[0];
            const dailyTotal = txs.filter(t => t.date.startsWith(today)).reduce((sum, t) => sum + t.amount, 0);
            return dailyTotal > 500000;
        }
    },
    {
        id: 'hemat', icon: '🧘', title: 'Hemat Pangkal Kaya', req: 'Saldo > 2 Juta',
        check: (txs, balance) => balance > 2000000
    }
];

function checkAchievements() {
    const txs = getStorageItem('transactions') || [];
    const balance = getStorageItem('balance') || 0;
    const unlocked = getStorageItem('unlocked_achievements') || [];
    let newUnlock = false;

    ACHIEVEMENTS_IDX.forEach(ach => {
        if (!unlocked.includes(ach.id) && ach.check(txs, balance)) {
            unlocked.push(ach.id);
            newUnlock = true;
            showToast(`🏆 Achievement Unlocked: ${ach.title}`);
        }
    });

    if (newUnlock) {
        setStorageItem('unlocked_achievements', unlocked);
        renderAchievements();
    } else {
        renderAchievements(); // Ensure UI is rendered even if no new unlock
    }
}

function renderAchievements() {
    const container = document.getElementById('achievements-list');
    if (!container) return;

    const unlocked = getStorageItem('unlocked_achievements') || [];
    container.innerHTML = ACHIEVEMENTS_IDX.map(ach => {
        const isUnlocked = unlocked.includes(ach.id);
        return `
            <div class="flex items-center gap-3 p-3 rounded-xl border ${isUnlocked ? 'bg-white border-primary/50 shadow-sm' : 'bg-gray-50 border-gray-100 opacity-50'} transition-all">
                <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl ${isUnlocked ? 'bg-primary/20' : 'bg-gray-200'}">
                    ${ach.icon}
                </div>
                <div>
                    <div class="font-bold text-sm ${isUnlocked ? 'text-gray-800' : 'text-gray-400'}">${ach.title}</div>
                    <div class="text-[10px] text-gray-500">${ach.req}</div>
                </div>
            </div>
        `;
    }).join('');
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl z-[100] animate-bounce flex items-center gap-2';
    toast.innerHTML = `<span>🎉</span> ${msg}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    checkAuthState();

    // Mobile Sidebar
    window.toggleSidebar = function () {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }
});
