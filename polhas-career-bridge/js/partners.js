// ==================== PARTNERS DISPLAY ====================
// Menampilkan logo dan nama perusahaan dari data.js

import { companies, mitraPolhas } from './data.js';

// Default logo untuk perusahaan yang tidak punya logo
const DEFAULT_HASNUR_LOGO = 'assets/img/mitra-hasnur/politeknik-hasnur.png';
const HASNUR_GROUP_LOGO = 'assets/img/mitra-hasnur/PT Hasnur Jaya Utama (HJU).png';

// Get logo dengan fallback ke Hasnur Group logo
function getCompanyLogo(company) {
    // Jika logo sudah ada dan bukan logo politeknik hasnur, gunakan itu
    if (company.logo && company.logo !== DEFAULT_HASNUR_LOGO) {
        return company.logo;
    }
    // Jika logo adalah logo politeknik hasnur atau tidak ada, gunakan Hasnur Group logo
    return HASNUR_GROUP_LOGO;
}

// Render Hasnur Group Partners
export function renderHasnurPartners() {
    const container = document.getElementById('hasnur-partners-grid');
    if (!container) return;

    container.innerHTML = companies.map(company => `
        <div class="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition group cursor-pointer" onclick="showCompanyDetail(${company.id}, 'hasnur')">
            <img src="${getCompanyLogo(company)}" alt="${company.name}" class="h-20 object-contain mb-3 group-hover:scale-110 transition">
            <p class="text-sm text-gray-600 text-center font-medium">${company.name}</p>
            <button class="mt-3 px-4 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition opacity-0 group-hover:opacity-100">
                Lihat Detail
            </button>
        </div>
    `).join('');
}

// Render Mitra Polhas
export function renderMitraPolhas() {
    const container = document.getElementById('mitra-polhas-grid');
    if (!container) return;

    container.innerHTML = mitraPolhas.map(mitra => `
        <div class="flex flex-col items-center justify-center p-8 bg-white rounded-xl hover:shadow-lg transition group cursor-pointer" onclick="showCompanyDetail(${mitra.id}, 'mitra')">
            <img src="${mitra.logo}" alt="${mitra.name}" class="h-20 object-contain mb-3 group-hover:scale-110 transition">
            <p class="text-sm text-gray-600 text-center font-medium">${mitra.name}</p>
            <button class="mt-3 px-4 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition opacity-0 group-hover:opacity-100">
                Lihat Detail
            </button>
        </div>
    `).join('');
}

// Show company detail modal
window.showCompanyDetail = function(companyId, type) {
    let company;
    
    if (type === 'hasnur') {
        company = companies.find(c => c.id === companyId);
    } else {
        company = mitraPolhas.find(m => m.id === companyId);
    }

    if (!company) return;

    // Gunakan SweetAlert2 jika tersedia
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: company.name,
            html: `
                <div class="text-left">
                    <div class="flex justify-center mb-4">
                        <img src="${company.logo}" alt="${company.name}" class="h-24 object-contain">
                    </div>
                    ${company.category ? `<p class="text-gray-600 mb-4"><strong>Kategori:</strong> ${company.category}</p>` : ''}
                    <p class="text-gray-600">Klik tombol di bawah untuk melihat lowongan dari perusahaan ini.</p>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Lihat Lowongan',
            cancelButtonText: 'Tutup',
            confirmButtonColor: '#2563eb',
            customClass: {
                popup: 'rounded-2xl',
                confirmButton: 'rounded-xl px-6 py-3 font-bold',
                cancelButton: 'rounded-xl px-6 py-3 font-bold'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect ke jobs page dengan filter perusahaan
                window.location.href = `jobs.html?company=${company.name}`;
            }
        });
    } else {
        // Fallback ke alert biasa
        alert(`${company.name}\n\nKlik OK untuk melihat lowongan dari perusahaan ini.`);
        window.location.href = `jobs.html?company=${company.name}`;
    }
}

// Initialize on page load
export function initPartners() {
    renderHasnurPartners();
    renderMitraPolhas();
}

export default {
    renderHasnurPartners,
    renderMitraPolhas,
    initPartners
};
