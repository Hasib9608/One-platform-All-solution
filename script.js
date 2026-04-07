// ==========================================
// 1. CONFIGURATION & URLS
// ==========================================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxudCdVUk4YlaDwUAQlbCjE-4QWEJiKlyq-C4og9B1_qMiJghS7DG28oiLgQ4OCuOHiJA/exec";

// ==========================================
// 2. DATA: EMERGENCY & MEDIA CONTACTS
// ==========================================
const emergencyNumbers = [
    { title: "National Emergency", number: "999", desc: "Police, Fire Service, Ambulance" },
    { title: "Health Info & Ambulance", number: "16263", desc: "Shasthya Batayan (24/7)" },
    { title: "Women & Child Abuse", number: "109", desc: "Toll-free National Helpline" },
    { title: "National Info/Services", number: "333", desc: "Govt info, services & complaints" },
    { title: "Disaster Warning", number: "1090", desc: "Weather & natural disaster info" }
];

// সাংবাদিকের তথ্য (এখানে এডিট করো)
const localJournalist = {
    name: "সাংবাদিকের নাম লিখুন", 
    media: "মিডিয়া বা পত্রিকার নাম",
    phone: "01XXXXXXXXX" 
};

// ==========================================
// 3. DATA: STATIC BLOOD DONORS
// ==========================================
const bloodDonors = [
    { name: "Kasba Life Care Diagnostic", group: "Any", area: "kasba sadar", phone: "01977-964599", type: "Center" },
    { name: "Blood for B.Baria Org", group: "Any", area: "kasba sadar", phone: "Available", type: "Organization" }
];

// ==========================================
// 4. DATA: MEDICINE DATABASE 
// ==========================================
const medicineDatabase = {
    "napa": { name: "Napa / Paracetamol", shop: "Maa Pharmacy", area: "কসবা নতুন বাজার", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+in+Kasba+Natun+Bazar" },
    "seclo": { name: "Seclo 20mg", shop: "Station View Medical", area: "রেলওয়ে স্টেশন রোড, কসবা", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+Kasba+Railway+Station" },
    "alatrol": { name: "Alatrol", shop: "Health Complex Gate Pharmacy", area: "আড়াইবাড়ী (হাসপাতাল গেইট)", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+Kasba+Upazila+Health+Complex" },
    "monas": { name: "Monas 10", shop: "Popular Pharmacy", area: "কসবা নতুন বাজার", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+in+Kasba+Natun+Bazar" },
    "flagyl": { name: "Flagyl 400mg", shop: "Bhai Bhai Medical", area: "কুটি চৌমুহনী বাজার", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+Kuti+Chowmuhani" }
};

// ==========================================
// 5. INITIALIZATION & RENDERING
// ==========================================
window.onload = function() {
    renderEmergency(); 
    renderJournalist(); 
    renderHospitals(); 
    renderFoodData();  
    renderJobsData();  
};

function renderEmergency() {
    const grid = document.getElementById("emergency-grid");
    if(!grid) return;
    emergencyNumbers.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <h3>${item.number}</h3>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        `;
    });
}

function renderJournalist() {
    const grid = document.getElementById("emergency-grid");
    if(!grid) return;
    grid.innerHTML += `
        <div class="card" style="border: 2px solid #3498db; background: #f0f7ff;">
            <h3 style="color: #2980b9;">📰 Press / Media</h3>
            <h4 style="margin: 5px 0;">${localJournalist.name}</h4>
            <p style="font-weight: bold; margin-bottom: 10px;">${localJournalist.media}</p>
            <button onclick="window.location.href='tel:${localJournalist.phone}'" style="background: #2980b9; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight:bold;">📞 Call Support</button>
        </div>
    `;
}

function renderHospitals() {
    const container = document.getElementById("hospital-info-container");
    if(!container) return;
    container.innerHTML = `
        <div class="info-block" style="border-left-color: #27ae60;">
            <h3>🏥 সরকারি হাসপাতাল (Govt. Hospitals)</h3>
            <p>কসবায় সরকারি স্বাস্থ্যসেবার প্রধান কেন্দ্র একটিই:</p>
            <ul>
                <li><strong>Kasba Upazila Health Complex:</strong> কসবা সদর। <a href="#" target="_blank">🗺️ Map</a></li>
            </ul>
        </div>
    `;
}

// ==========================================
// 6. BLOOD DONOR LOGIC (GOOGLE SHEETS)
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const submitDonorBtn = document.getElementById("submit-donor-btn");
    
    if(submitDonorBtn) {
        submitDonorBtn.addEventListener("click", function() {
            // ফোন নম্বরের শুরুতে একটি ' যোগ করা হয়েছে যাতে Google Sheet ০ না কাটে
            const donorData = {
                name: document.getElementById("donor-name").value,
                group: document.getElementById("new-donor-group").value,
                area: document.getElementById("new-donor-area").value,
                phone: "'" + document.getElementById("donor-phone").value 
            };

            if(!donorData.name || !donorData.group || !donorData.area || donorData.phone === "'") {
                alert("দয়া করে সব তথ্য দিন!"); return;
            }

            submitDonorBtn.innerText = "Saving...";
            submitDonorBtn.disabled = true;

            fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(donorData)
            })
            .then(res => res.json())
            .then(response => {
                alert("✅ অভিনন্দন! আপনার তথ্য Google Sheet এ সেভ হয়েছে।");
                location.reload(); 
            })
            .catch(error => {
                alert("ভুল হয়েছে: " + error);
                submitDonorBtn.innerText = "Submit Again";
                submitDonorBtn.disabled = false;
            });
        });
    }
});

async function searchBlood() {
    const group = document.getElementById("blood-group").value;
    const area = document.getElementById("blood-area").value.toLowerCase().trim();
    const resDiv = document.getElementById("blood-results");
    
    resDiv.innerHTML = "<p style='text-align:center;'>Searching in Live Database...</p>";

    try {
        const response = await fetch(SCRIPT_URL);
        const onlineDonors = await response.json();
        const allDonors = [...bloodDonors, ...onlineDonors];

        const filtered = allDonors.filter(d => 
            (d.group === "Any" || group === "" || d.group === group) && 
            (area === "" || d.area.toLowerCase().includes(area))
        );

        resDiv.innerHTML = "";
        if(filtered.length === 0) {
            resDiv.innerHTML = "<p style='color:red; text-align:center;'>দুঃখিত, কোনো ডোনার পাওয়া যায়নি!</p>";
        } else {
            filtered.forEach(d => {
                resDiv.innerHTML += `
                <div class="result-card" style="border: 1px solid #e67e22; padding: 12px; margin-top: 10px; border-radius: 8px; background: #fff;">
                    <strong style="color: #c0392b;">${d.name}</strong> (Group: ${d.group})<br>
                    📍 Area: ${d.area} <br>
                    <button onclick="window.location.href='tel:${d.phone}'" style="background:#e67e22; color:#fff; border:none; padding:8px 15px; border-radius:4px; margin-top:5px; cursor:pointer; font-weight:bold;">📞 Call: ${d.phone}</button>
                </div>`;
            });
        }
    } catch (err) {
        resDiv.innerHTML = "<p style='color:red;'>ডাটা লোড করতে সমস্যা হচ্ছে। ইন্টারনেট চেক করুন।</p>";
    }
}

// ==========================================
// 7. MEDICINE & FOOD RENDERING (OTHERS)
// ==========================================

function findMedicineShop() {
    const medId = document.getElementById("medicine-select").value;
    const resultDiv = document.getElementById("medicine-shop-result");
    if (!medId) return;
    const medData = medicineDatabase[medId];
    resultDiv.innerHTML = `<div style="padding:10px; background:#e8f8f5; border:1px solid #1abc9c;">✅ ${medData.name} - ${medData.shop} (${medData.area})</div>`;
}

function renderFoodData() {
    const container = document.getElementById("food-info-container");
    if(!container) return;
    container.innerHTML = `<h3>🍽️ Surplus Food Info</h3><p>Check local volunteer groups for updates.</p>`;
}

function renderJobsData() {
    const container = document.getElementById("job-info-container");
    if(!container) return;
    container.innerHTML = `<h3>📢 Careers & Internships</h3><p>Postings will appear here.</p>`; 
}
