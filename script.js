// ==========================================
// 1. CONFIGURATION & URLS
// ==========================================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxudCdVUk4YlaDwUAQlbCjE-4QWEJiKlyq-C4og9B1_qMiJghS7DG28oiLgQ4OCuOHiJA/exec";

// ==========================================
// 2. DATA: EMERGENCY NUMBERS (Updated with Journalist)
// ==========================================
const emergencyNumbers = [
    { title: "National Emergency", number: "999", desc: "Police, Fire Service, Ambulance" },
    { title: "Health Info & Ambulance", number: "16263", desc: "Shasthya Batayan (24/7)" },
    { title: "Women & Child Abuse", number: "109", desc: "Toll-free National Helpline" },
    { title: "National Info/Services", number: "333", desc: "Govt info, services & complaints" },
    { title: "Disaster Warning", number: "1090", desc: "Weather & natural disaster info" },
    
    // ✅ Journalist Added
    { 
        title: "Saidul Islam", 
        number: "01642-496318",
        desc: "NTV আখাউড়া-কসবা অনলাইন করেসপন্ডেন্ট" 
    }
];

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
// 5. DATA: RESTAURANT SURPLUS FOOD
// ==========================================
const restaurantFoodData = [
    { name: "১. দি ফুড প্যালেস", surplus: true, offerType: "বিনামূল্যে (Donation)", time: "রাত ১০টার পর" },
    { name: "২. টেস্টি বাইট রেস্টুরেন্ট", surplus: true, offerType: "অর্ধেক দামে (50% Off)", time: "রাত ৯:৩০ এর পর" },
    { name: "৩. ঢাকা কাচ্চি ভাই", surplus: false, offerType: "খাবার শেষ", time: "-" },
    { name: "৪. আল কারিমা রেস্টুরেন্ট", surplus: true, offerType: "বিনামূল্যে (Donation)", time: "রাত ১১টার পর" },
    { name: "৫. কাচ্চি ডাইন রেস্টুরেন্ট", surplus: false, offerType: "খাবার শেষ", time: "-" }
];

// ==========================================
// 6. DATA: JOB VACANCIES
// ==========================================
const jobVacanciesData = [
    { org: "Kasba Mohila Degree College", role: "Biology Teacher (জীববিজ্ঞান শিক্ষক)", type: "Full-Time", work: "একাদশ ও দ্বাদশ শ্রেণীর জীববিজ্ঞান ক্লাস", seats: 1 },
    { org: "Dhonnobad Printers", role: "Junior Designer", type: "Part-Time", work: "ব্যানার ও ভিজিটিং কার্ড ডিজাইন", seats: 1 },
    { org: "Maa Pharmacy", role: "Pharmacy Assistant", type: "Intern", work: "ওষুধ গুছিয়ে রাখা ও সাহায্য করা", seats: 2 }
];

// ==========================================
// RENDER FUNCTIONS (FULL VERSION)
// ==========================================

// ✅ নতুন কল বাটন সহ আপডেট করা ইমার্জেন্সি ফাংশন
function renderEmergency() {
    const grid = document.getElementById("emergency-grid");
    if (!grid) return;
    grid.innerHTML = "";
    emergencyNumbers.forEach(item => {
        grid.innerHTML += `
            <div class="card" style="padding: 15px; border: 1px solid #ccc; border-radius: 8px; margin-bottom: 15px;">
                <h3 style="color: #e74c3c; margin-bottom: 5px;">${item.number}</h3>
                <h4 style="margin: 5px 0;">${item.title}</h4>
                <p style="color: #555; margin-bottom: 15px;">${item.desc}</p>
                
                <a href="tel:${item.number}" style="background:#27ae60; color:#fff; text-decoration:none; padding:8px 15px; border-radius:5px; font-weight:bold; display:inline-block;">
                    📞 Call Now
                </a>
            </div>
        `;
    });
}

function renderHospitals() {
    const container = document.getElementById("hospital-info-container");
    if (!container) return;
    container.innerHTML = `
        <div class="info-block" style="border-left-color: #27ae60;">
            <h3>🏥 সরকারি হাসপাতাল (Govt. Hospitals)</h3>
            <p>কসবায় সরকারি স্বাস্থ্যসেবার প্রধান কেন্দ্র একটিই এবং এর অধীনে কিছু কমিউনিটি ক্লিনিক রয়েছে:</p>
            <ul>
                <li>
                    <strong>১. Kasba Upazila Health Complex:</strong> কসবা সদর, ব্রাহ্মণবাড়িয়া।<br>
                    <a href="https://www.google.com/maps/search/Kasba+Upazila+Health+Complex" target="_blank" class="link-btn" style="background-color:#e74c3c;">🗺️ View on Map</a>
                </li>
                <li><strong>২. Government Community Clinics:</strong> কসবার বিভিন্ন ইউনিয়নে তৃণমূল পর্যায়ে অবস্থিত।</li>
            </ul>
        </div>
        
        <div class="info-block">
            <h3>🏥 কসবার প্রাইভেট হাসপাতাল ও ক্লিনিক</h3>
            <ul>
                <li><strong>১. Amir Hossain Shishu General Hospital:</strong> কসবা সদর। <a href="https://www.google.com/maps/search/Amir+Hossain+Shishu+General+Hospital+Kasba" target="_blank" class="link-btn" style="background-color:#e74c3c;">🗺️ View on Map</a></li>
                <li><strong>২. Central Hospital & Diagnostic Center:</strong> কুটি, কসবা। <a href="https://www.google.com/maps/search/Central+Hospital+Kuti+Kasba" target="_blank" class="link-btn" style="background-color:#e74c3c;">🗺️ View on Map</a></li>
                <li><strong>৩. Basundhara Clinic:</strong> কুটি চৌমুহনী, কসবা।</li>
                <li><strong>৪. Square Hospital / Clinic:</strong> কসবা।</li>
                <li><strong>৫. Kasba Popular Diagnostic Center:</strong> নতুন বাজার, কসবা সদর।</li>
                <li><strong>৬. Kasba Ibn Sina Physiotherapy Center:</strong> কসবা সদর।</li>
            </ul>
        </div>

        <div class="info-block" style="border-left-color: #f39c12;">
            <h3>💊 মেডিকেল শপ বা ফার্মেসি (Medical Shops)</h3>
            <p>নিচে প্রধান কিছু এলাকার নাম দেওয়া হলো যেখানে ভালো ও বড় ফার্মেসি পাওয়া যাবে:</p>
            <ul>
                <li><strong>কসবা উপজেলা স্বাস্থ্য কমপ্লেক্স রোড:</strong> হাসপাতালের গেটের ঠিক বাইরে সারাদিন খোলা ফার্মেসি।<br><a href="https://www.google.com/maps/search/Pharmacy+Kasba+Upazila+Health+Complex" target="_blank" class="link-btn" style="background-color:#e74c3c;">🗺️ Find Pharmacies on Map</a></li>
                <li><strong>কসবা নতুন বাজার:</strong> পপুলার ডায়াগনস্টিকের আশেপাশে ভালো ফার্মেসির দোকান।</li>
                <li><strong>কুটি চৌমুহনী বাজার:</strong> বসুন্ধরা ও সেন্ট্রাল হাসপাতালকে কেন্দ্র করে বড় ওষুধের দোকান।</li>
                <li><strong>কসবা পুরাতন বাজার ও রেলওয়ে স্টেশন রোড:</strong> সাধারণ ও রেগুলার ঔষধের দোকানগুলো।</li>
            </ul>
        </div>
    `;
}

function renderFoodData() {
    const container = document.getElementById("food-info-container");
    if (!container) return;

    let restaurantListHTML = "";
    restaurantFoodData.forEach(item => {
        const badgeStyle = item.surplus 
            ? "background: #2ecc71; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px; margin-left: 10px; font-weight: bold;" 
            : "background: #95a5a6; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px; margin-left: 10px; font-weight: bold;";
        
        const extraInfo = item.surplus 
            ? `<span style="font-size: 13px; color: #d35400; display: block; margin-left: 20px; margin-top: 5px;">🕒 সময়: ${item.time} | 🎁 শর্ত: ${item.offerType}</span>` 
            : "";

        restaurantListHTML += `
            <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #ccc;">
                <strong>${item.name}</strong> 
                <span style="${badgeStyle}">${item.surplus ? "✔ অতিরিক্ত খাবার আছে" : "❌ খাবার শেষ"}</span>
                ${extraInfo}
            </li>
        `;
    });

    container.innerHTML = `
        <div class="info-block" style="border-left-color: #e67e22;">
            <h3>🍽️ রেস্টুরেন্ট এবং অতিরিক্ত খাবার (Surplus Food)</h3>
            <p style="margin-bottom: 15px;">দিনের শেষে বেঁচে যাওয়া খাবার গরিব মানুষদের জন্য বিনামূল্যে বা কম দামে এখানে পাওয়া যায়:</p>
            <ul style="list-style-type: none; padding-left: 0;">
                ${restaurantListHTML}
            </ul>
        </div>
        
        <div class="info-block" style="border-left-color: #27ae60;">
            <h3>🤝 কমিউনিটি ফুড শেয়ার / স্বেচ্ছাসেবী সংগঠন</h3>
            <p>পশ্চিমা দেশগুলোর মতো নির্দিষ্ট "ফুড ব্যাংক" না থাকলেও কসবায় বিভিন্ন সংগঠন বিনামূল্যে খাবার বিতরণ করে:</p>
            <ul>
                <li><strong>১. স্থানীয় স্বেচ্ছাসেবী ও যুব সংগঠন:</strong> ছাত্র কল্যাণ পরিষদ, ব্লাড ডোনেশন ক্লাব এবং 'আলোকিত কসবা' এর মতো গ্রুপ।</li>
                <li><strong>২. জাতীয় পর্যায়ের ফাউন্ডেশন:</strong> আস-সুন্নাহ ফাউন্ডেশন এবং বিদ্যানন্দ ফাউন্ডেশন-এর স্থানীয় স্বেচ্ছাসেবকরা।</li>
            </ul>
        </div>
    `;
}

function renderJobsData() {
    const container = document.getElementById("job-info-container");
    if (!container) return;

    let savedJobs = JSON.parse(localStorage.getItem("customJobs")) || [];
    const allJobs = [...jobVacanciesData, ...savedJobs];

    let jobsHTML = "";
    allJobs.forEach(job => {
        const badgeColor = job.type === "Intern" ? "#3498db" : (job.type === "Part-Time" ? "#f39c12" : "#e74c3c");
        jobsHTML += `
            <div style="background: #ffffff; border: 1px solid #dcdde1; padding: 15px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ecf0f1; padding-bottom: 8px; margin-bottom: 10px;">
                    <strong style="color: #2c3e50; font-size: 16px;">🏢 ${job.org}</strong>
                    <span style="background: ${badgeColor}; color: white; padding: 4px 12px; border-radius: 15px; font-size: 12px; font-weight: bold;">${job.type}</span>
                </div>
                <p style="margin: 5px 0; font-size: 14px; color: #34495e;"><strong>📌 পদের নাম:</strong> ${job.role}</p>
                <p style="margin: 5px 0; font-size: 14px; color: #34495e;"><strong>👨‍💻 কাজের ধরন:</strong> ${job.work}</p>
                <p style="margin: 5px 0; font-size: 14px; font-weight: bold; color: #d35400;">🪑 খালি পদ: ${job.seats} টি</p>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="info-block" style="border-left-color: #8e44ad;">
            <h3>💻 ব্যানার ডিজাইন, ডাটা এন্ট্রি এবং কাজের জায়গা</h3>
            <p>স্টুডেন্টরা পার্ট-টাইম বা চুক্তিভিত্তিক কাজের জন্য নিচের প্রতিষ্ঠানগুলোতে যোগাযোগ করতে পারে:</p>
            <ul>
                <li><strong>১. এমএফ কম্পিউটার সেন্টার:</strong> ইমাম পাড়া, কসবা সদর।</li>
                <li><strong>২. তানভীর ফটোকপি ও কম্পিউটার ট্রেনিং সেন্টার:</strong> বায়েক, সালদানদী, কসবা।</li>
                <li><strong>৩. কসবা উপজেলা সুপার মার্কেট ও নতুন বাজার:</strong> ডিজিটাল সাইন ও প্রিন্টিং এর প্রচুর কাজ।</li>
                <li><strong>৪. ধন্যবাদ প্রিন্টার্স:</strong> গ্রাফিক্স ডিজাইনের কাজ। <a href="https://dhonnobadprinters.com/" target="_blank" class="link-btn">🌐 ওয়েবসাইট দেখুন</a></li>
            </ul>
        </div>
        
        <div class="info-block" style="border-left-color: #3498db;">
            <h3>🚀 স্কিল ডেভেলপমেন্ট ও ট্রেনিং সেন্টার</h3>
            <ul>
                <li><strong>১. উপজেলা যুব উন্নয়ন অধিদপ্তর:</strong> কসবা উপজেলা পরিষদ চত্বর।</li>
                <li><strong>২. কসবা সরকারি টেকনিক্যাল স্কুল এন্ড কলেজ:</strong> আইটি ও টেকনিক্যাল কোর্স।</li>
                <li><strong>৩. প্রাইভেট ট্রেনিং সেন্টার:</strong> ইমাম পাড়ার এফএম/এমএফ কম্পিউটার ট্রেনিং সেন্টার ও ইউনিয়ন ডিজিটাল সেন্টার।</li>
            </ul>
        </div>

        <div class="info-block" style="border-left-color: #e74c3c; background-color: #fff9f9;">
            <h3>📢 চলমান চাকরির নিয়োগ ও ইন্টার্নশিপ</h3>
            ${jobsHTML}
        </div>
    `;
}

// ==========================================
// BLOOD DONOR SUBMIT (Google Sheet)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const submitDonorBtn = document.getElementById("submit-donor-btn");
    if (submitDonorBtn) {
        submitDonorBtn.addEventListener("click", function() {
            const donorData = {
                name: document.getElementById("donor-name").value,
                group: document.getElementById("new-donor-group").value,
                area: document.getElementById("new-donor-area").value,
                phone: "'" + document.getElementById("donor-phone").value
            };

            if (!donorData.name || !donorData.group || !donorData.area || !donorData.phone) {
                alert("দয়া করে সব তথ্য দিন!");
                return;
            }

            submitDonorBtn.innerText = "Saving...";
            submitDonorBtn.disabled = true;

            fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(donorData)
            })
            .then(res => res.json())
            .then(() => {
                alert("✅ অভিনন্দন! তথ্য সেভ হয়েছে।");
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

// ==========================================
// BLOOD SEARCH
// ==========================================
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
        if (filtered.length === 0) {
            resDiv.innerHTML = "<p style='color:red; text-align:center;'>দুঃখিত, কোনো ডোনার পাওয়া যায়নি!</p>";
        } else {
            filtered.forEach(d => {
                resDiv.innerHTML += `
                <div class="result-card" style="border: 1px solid #e67e22; padding: 12px; margin-top: 10px; border-radius: 8px; background: #fff;">
                    <strong style="color: #c0392b;">${d.name}</strong> (Group: ${d.group})<br>
                    📍 Area: ${d.area} <br>
                    <button onclick="location.href='tel:${d.phone}'" style="background:#e67e22; color:#fff; border:none; padding:5px 10px; border-radius:4px; margin-top:5px; cursor:pointer;">📞 Call: ${d.phone}</button>
                </div>`;
            });
        }
    } catch (err) {
        resDiv.innerHTML = "<p style='color:red;'>ডাটা লোড করতে সমস্যা হচ্ছে। ইন্টারনেট চেক করুন।</p>";
    }
}

// ==========================================
// MEDICINE FINDER
// ==========================================
function findMedicineShop() {
    const medId = document.getElementById("medicine-select").value;
    const resultDiv = document.getElementById("medicine-shop-result");
    if (!medId) return;
    const medData = medicineDatabase[medId];
    resultDiv.innerHTML = `<div style="padding:10px; background:#e8f8f5; border:1px solid #1abc9c;">✅ ${medData.name} - ${medData.shop} (${medData.area})</div>`;
}

// ==========================================
// JOB SUBMIT (Local Storage)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById("submit-job-btn");
    if (submitBtn) {
        submitBtn.addEventListener("click", function() {
            const orgName = document.getElementById("job-org").value;
            const roleName = document.getElementById("job-role").value;
            const jobType = document.getElementById("job-type").value;
            const seatsNum = document.getElementById("job-seats").value;

            if (orgName === "" || roleName === "" || seatsNum === "") {
                alert("দয়া করে ফর্মের সব তথ্য পূরণ করুন!");
                return;
            }

            const newJob = { org: orgName, role: roleName, type: jobType, work: "নতুন পোস্ট করা কাজ", seats: seatsNum };

            let savedJobs = JSON.parse(localStorage.getItem("customJobs")) || [];
            savedJobs.push(newJob);
            localStorage.setItem("customJobs", JSON.stringify(savedJobs));

            alert("✅ নতুন চাকরির খবর যোগ করা হয়েছে!");
            
            document.getElementById("job-org").value = "";
            document.getElementById("job-role").value = "";
            document.getElementById("job-seats").value = "";

            renderJobsData();
        });
    }
});

// ==========================================
// FINAL INITIALIZATION (সব রেন্ডার হবে)
// ==========================================
window.onload = function() {
    renderEmergency();
    renderHospitals();
    renderFoodData();
    renderJobsData();
};
