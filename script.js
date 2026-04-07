// ==========================================
// 1. DATA: EMERGENCY NUMBERS (BANGLADESH)
// ==========================================
const emergencyNumbers = [
    { title: "National Emergency", number: "999", desc: "Police, Fire Service, Ambulance" },
    { title: "Health Info & Ambulance", number: "16263", desc: "Shasthya Batayan (24/7)" },
    { title: "Women & Child Abuse", number: "109", desc: "Toll-free National Helpline" },
    { title: "National Info/Services", number: "333", desc: "Govt info, services & complaints" },
    { title: "Disaster Warning", number: "1090", desc: "Weather & natural disaster info" }
];

// ==========================================
// 2. DATA: BLOOD DONORS
// ==========================================
const bloodDonors = [
    { name: "Kasba Life Care Diagnostic", group: "Any", area: "kasba sadar", phone: "01977-964599", type: "Center" },
    { name: "Blood for B.Baria Org", group: "Any", area: "kasba sadar", phone: "Available", type: "Organization" },
    { name: "Rahim (Volunteer)", group: "O+", area: "kuti", phone: "017XX-XXXXXX", type: "Person" },
    { name: "Sumon (Volunteer)", group: "A+", area: "mehari", phone: "018XX-XXXXXX", type: "Person" }
];

// ==========================================
// 3. DATA: MEDICINE DATABASE 
// ==========================================
const medicineDatabase = {
    "napa": { name: "Napa / Paracetamol", shop: "Maa Pharmacy", area: "কসবা নতুন বাজার", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+in+Kasba+Natun+Bazar" },
    "seclo": { name: "Seclo 20mg", shop: "Station View Medical", area: "রেলওয়ে স্টেশন রোড, কসবা", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+Kasba+Railway+Station" },
    "alatrol": { name: "Alatrol", shop: "Health Complex Gate Pharmacy", area: "আড়াইবাড়ী (হাসপাতাল গেইট)", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+Kasba+Upazila+Health+Complex" },
    "monas": { name: "Monas 10", shop: "Popular Pharmacy", area: "কসবা নতুন বাজার", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+in+Kasba+Natun+Bazar" },
    "flagyl": { name: "Flagyl 400mg", shop: "Bhai Bhai Medical", area: "কুটি চৌমুহনী বাজার", stock: "Available", mapLink: "https://www.google.com/maps/search/Pharmacy+Kuti+Chowmuhani" }
};

// ==========================================
// 4. INITIALIZATION & RENDERING
// ==========================================
window.onload = function() {
    renderEmergency(); 
    renderHospitals(); 
    renderFoodData();  
    renderJobsData();  
};

function renderEmergency() {
    const grid = document.getElementById("emergency-grid");
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

function renderHospitals() {
    const container = document.getElementById("hospital-info-container");
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
                <li>
                    <strong>১. Amir Hossain Shishu General Hospital:</strong> কসবা সদর।<br>
                    <a href="https://www.google.com/maps/search/Amir+Hossain+Shishu+General+Hospital+Kasba" target="_blank" class="link-btn" style="background-color:#e74c3c;">🗺️ View on Map</a>
                </li>
                <li>
                    <strong>২. Central Hospital & Diagnostic Center:</strong> কুটি, কসবা।<br>
                    <a href="https://www.google.com/maps/search/Central+Hospital+Kuti+Kasba" target="_blank" class="link-btn" style="background-color:#e74c3c;">🗺️ View on Map</a>
                </li>
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
                <li>
                    <strong>কসবা উপজেলা স্বাস্থ্য কমপ্লেক্স রোড:</strong> হাসপাতালের গেটের ঠিক বাইরে সারাদিন খোলা ফার্মেসি।<br>
                    <a href="https://www.google.com/maps/search/Pharmacy+Kasba+Upazila+Health+Complex" target="_blank" class="link-btn" style="background-color:#e74c3c;">🗺️ Find Pharmacies on Map</a>
                </li>
                <li><strong>কসবা নতুন বাজার:</strong> পপুলার ডায়াগনস্টিকের আশেপাশে ভালো ফার্মেসির দোকান।</li>
                <li><strong>কুটি চৌমুহনী বাজার:</strong> বসুন্ধরা ও সেন্ট্রাল হাসপাতালকে কেন্দ্র করে বড় ওষুধের দোকান।</li>
                <li><strong>কসবা পুরাতন বাজার ও রেলওয়ে স্টেশন রোড:</strong> সাধারণ ও রেগুলার ঔষধের দোকানগুলো।</li>
            </ul>
        </div>
    `;
}

// ==========================================
// 5. SEARCH & ADD BLOOD FUNCTION (UPDATED)
// ==========================================

// --- নতুন ব্লাড ডোনার ফর্ম সাবমিট করার লজিক ---
document.addEventListener('DOMContentLoaded', function() {
    const submitDonorBtn = document.getElementById("submit-donor-btn");
    
    if(submitDonorBtn) {
        submitDonorBtn.addEventListener("click", function() {
            const name = document.getElementById("donor-name").value;
            const group = document.getElementById("new-donor-group").value;
            const area = document.getElementById("new-donor-area").value;
            const phone = document.getElementById("donor-phone").value;

            // ফর্মের কোনো ফিল্ড ফাঁকা আছে কি না চেক করা
            if(name === "" || group === "" || area === "" || phone === "") {
                alert("দয়া করে ফর্মের সব তথ্য সঠিকভাবে পূরণ করুন!");
                return;
            }

            // নতুন ডোনারের ডেটা তৈরি
            const newDonor = {
                name: name,
                group: group,
                area: area,
                phone: phone,
                type: "Person"
            };

            // লোকাল স্টোরেজে ডেটা সেভ করা
            let savedDonors = JSON.parse(localStorage.getItem("customDonors")) || [];
            savedDonors.push(newDonor);
            localStorage.setItem("customDonors", JSON.stringify(savedDonors));

            alert("✅ ধন্যবাদ! আপনাকে ব্লাড ডোনার হিসেবে সফলভাবে যুক্ত করা হয়েছে।");
            
            // সাবমিট করার পর ফর্মের লেখাগুলো মুছে ফেলা
            document.getElementById("donor-name").value = "";
            document.getElementById("new-donor-group").value = "";
            document.getElementById("new-donor-area").value = "";
            document.getElementById("donor-phone").value = "";

            // কেউ সার্চ করে থাকলে সাথে সাথে লিস্ট আপডেট করা
            searchBlood();
        });
    }
});

// --- ব্লাড ডোনার খোঁজার লজিক ---
function searchBlood() {
    const group = document.getElementById("blood-group").value;
    const area = document.getElementById("blood-area").value.toLowerCase().trim();
    const res = document.getElementById("blood-results");
    res.innerHTML = "";
    
    // লোকাল স্টোরেজ থেকে নতুন ডোনারদের তথ্য নিয়ে আসা
    let savedDonors = JSON.parse(localStorage.getItem("customDonors")) || [];
    
    // আপনার আগের ডাটাবেজ (bloodDonors) এবং নতুন ডাটা একসাথে করা
    const allDonors = [...bloodDonors, ...savedDonors];

    // ইউজার যে ব্লাড গ্রুপ এবং এরিয়া সিলেক্ট করেছে তার সাথে মেলানো
    const results = allDonors.filter(d => 
        (d.group === "Any" || group === "" || d.group === group) && 
        (area === "" || d.area.toLowerCase().includes(area))
    );

    // রেজাল্ট দেখানো
    if(results.length === 0) {
        res.innerHTML = "<p style='color:red; font-weight:bold; text-align:center;'>এই এলাকায় এই গ্রুপের কোনো ডোনার পাওয়া যায়নি। জরুরি প্রয়োজনে নিকটস্থ হাসপাতালে যোগাযোগ করুন।</p>";
    } else {
        results.forEach(d => {
            const badge = d.type === "Person" ? "badge-safe" : "badge-org";
            res.innerHTML += `
            <div class="result-card" style="background: #fff; border: 1px solid #e67e22; padding: 12px; border-radius: 8px; margin-top: 10px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <div>
                    <strong style="color: #c0392b; font-size: 16px;">${d.name}</strong> 
                    <span style="background: #e74c3c; color: white; padding: 3px 8px; border-radius: 12px; font-size: 11px; margin-left: 5px;">${d.type}</span><br>
                    <span style="display:inline-block; margin-top:5px;">🩸 Group: <strong>${d.group}</strong> | 📍 ${d.area.charAt(0).toUpperCase() + d.area.slice(1)}</span>
                </div>
                <button onclick="alert('Calling ${d.phone}...') " style="background: #e67e22; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight:bold;">📞 Call</button>
            </div>`;
        });
    }
}

// ==========================================
// 6. SEARCH MEDICINE FUNCTION 
// ==========================================
function findMedicineShop() {
    const medId = document.getElementById("medicine-select").value;
    const resultDiv = document.getElementById("medicine-shop-result");
    
    if (!medId) {
        resultDiv.innerHTML = "<p style='color: red;'>অনুগ্রহ করে একটি ঔষধ সিলেক্ট করুন!</p>";
        return;
    }

    const medData = medicineDatabase[medId];
    
    resultDiv.innerHTML = `
        <div style="background: #e8f8f5; padding: 15px; border-radius: 8px; display: inline-block; text-align: left; border: 1px solid #1abc9c;">
            <h4 style="color: #16a085; margin-bottom: 5px;">✅ ${medData.name} পাওয়া যাচ্ছে!</h4>
            <p><strong>ফার্মেসি:</strong> ${medData.shop}</p>
            <p><strong>এলাকা:</strong> 📍 ${medData.area}</p>
            <a href="${medData.mapLink}" target="_blank" class="link-btn" style="background-color: #2980b9; margin-top: 10px;">🗺️ Open in Google Maps</a>
        </div>
    `;
}

// ==========================================
// 7. DATA: RESTAURANTS & SURPLUS FOOD
// ==========================================
const restaurantFoodData = [
    { name: "১. দি ফুড প্যালেস", surplus: true, offerType: "বিনামূল্যে (Donation)", time: "রাত ১০টার পর" },
    { name: "২. টেস্টি বাইট রেস্টুরেন্ট", surplus: true, offerType: "অর্ধেক দামে (50% Off)", time: "রাত ৯:৩০ এর পর" },
    { name: "৩. ঢাকা কাচ্চি ভাই", surplus: false, offerType: "খাবার শেষ", time: "-" },
    { name: "৪. আল কারিমা রেস্টুরেন্ট", surplus: true, offerType: "বিনামূল্যে (Donation)", time: "রাত ১১টার পর" },
    { name: "৫. কাচ্চি ডাইন রেস্টুরেন্ট", surplus: false, offerType: "খাবার শেষ", time: "-" }
];

function renderFoodData() {
    const container = document.getElementById("food-info-container");

    let restaurantListHTML = "";
    restaurantFoodData.forEach(item => {
        let badgeStyle = item.surplus 
            ? "background: #2ecc71; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px; margin-left: 10px; font-weight: bold;" 
            : "background: #95a5a6; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px; margin-left: 10px; font-weight: bold;";
        
        let extraInfo = item.surplus 
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
            <p>পশ্চিমা দেশগুলোর মতো নির্দিষ্ট "ফুড ব্যাংক" না থাকলেও কসবায় বিভিন্ন সংগঠন বিনামূল্যে খাবার বিতরণ বা ত্রাণ দেওয়ার কাজ করে:</p>
            <ul>
                <li><strong>১. স্থানীয় স্বেচ্ছাসেবী ও যুব সংগঠন:</strong> ছাত্র কল্যাণ পরিষদ, ব্লাড ডোনেশন ক্লাব এবং 'আলোকিত কসবা' এর মতো গ্রুপ প্রায়ই "১ টাকার আহার" আয়োজন করে।</li>
                <li><strong>২. জাতীয় পর্যায়ের ফাউন্ডেশন:</strong> আস-সুন্নাহ ফাউন্ডেশন (As-Sunnah Foundation) এবং বিদ্যানন্দ ফাউন্ডেশন (Bidyanondo)-এর স্থানীয় স্বেচ্ছাসেবকরা কসবায় খাদ্য সহায়তা করে।</li>
            </ul>
        </div>
    `;
}

// ==========================================
// 🍲 RESTAURANTS & FOOD SHARE RENDERING
// ==========================================
function renderFoodData() {
    const container = document.getElementById("food-info-container");
    if(!container) return;
    
    container.innerHTML = `
        <div class="info-block" style="border-left: 5px solid #9b59b6; padding: 15px; background: #fff; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #8e44ad;">🍱 রেস্টুরেন্ট এবং অতিরিক্ত খাবার (Surplus Food)</h3>
            <p style="font-size: 0.9rem; margin-bottom: 10px;">দিনের শেষে বেঁচে যাওয়া খাবার গরিব মানুষের জন্য বিনামূল্যে বা কম দামে এখানে পাওয়া যায়:</p>
            
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 10px; border: 1px solid #ddd;">
                <strong>১. দি ফুড প্যালেস</strong> <span style="color: green;">✔ অতিরিক্ত খাবার আছে</span><br>
                <small>🕒 সময়: রাত ১০টার পর | 🎁 শর্ত: বিনামূল্যে (Donation)</small>
            </div>
            
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 10px; border: 1px solid #ddd;">
                <strong>২. টেস্টি বাইট রেস্টুরেন্ট</strong> <span style="color: green;">✔ অতিরিক্ত খাবার আছে</span><br>
                <small>🕒 সময়: রাত ৯:৩০ এর পর | 🎁 শর্ত: অর্ধেক দামে (50% Off)</small>
            </div>
            
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; margin-bottom: 10px; border: 1px solid #ddd;">
                <strong>৩. ঢাকা কাচ্চি ডাই</strong> <span style="color: red;">✘ খাবার শেষ</span>
            </div>
        </div>

        <div class="info-block" style="border-left: 5px solid #27ae60; padding: 15px; background: #fff; border-radius: 8px;">
            <h3 style="color: #2ecc71;">🧡 কমিউনিটি ফুড শেয়ার / সেচ্ছাসেবী সংগঠন</h3>
            <p style="font-size: 0.9rem;">কসবায় বিভিন্ন সংগঠন বিনামূল্যে খাবার বিতরণ বা ত্রাণ দেওয়ার কাজ করে:</p>
            <ul>
                <li><strong>স্থানীয় সেচ্ছাসেবী ও যুব সংগঠন:</strong> ছাত্র কল্যাণ পরিষদ, ব্লাড ডোনেশন ক্লাব ইত্যাদি।</li>
                <li><strong>জাতীয় পর্যায়ের ফাউন্ডেশন:</strong> আস-সুন্নাহ ফাউন্ডেশন, বিদ্যানন্দ ফাউন্ডেশন।</li>
            </ul>
        </div>
    `;
}

// ==========================================
// 💻 LOCAL SKILLS & JOB OPPORTUNITIES RENDERING
// ==========================================
function renderJobsData() {
    const container = document.getElementById("job-info-container");
    if(!container) return;
    
    container.innerHTML = `
        <div class="info-block" style="border-left: 5px solid #2980b9; padding: 15px; background: #fff; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #3498db;">🖥️ ব্যানার ডিজাইন, ডাটা এন্ট্রি এবং কাজের জায়গা</h3>
            <p style="font-size: 0.9rem;">স্টুডেন্টরা পার্ট-টাইম কাজের জন্য নিচের প্রতিষ্ঠানগুলোতে যোগাযোগ করতে পারে:</p>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 8px; border-bottom: 1px solid #eee;">১. এম.এফ কম্পিউটার সেন্টার: ইমাম পাড়া, কসবা সদর।</li>
                <li style="padding: 8px; border-bottom: 1px solid #eee;">২. তানভীর ফটোকপি ও কম্পিউটার ট্রেনিং সেন্টার: বায়েক, কসবা।</li>
                <li style="padding: 8px;">৩. ধন্যবাদ প্রিন্টার্স (Dhonnobad Printers): গ্রাফিক্স ডিজাইনের কাজের জন্য।</li>
            </ul>
        </div>

        <div class="info-block" style="border-left: 5px solid #e67e22; padding: 15px; background: #fff; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #d35400;">🚀 স্কিল ডেভেলপমেন্ট ও ট্রেনিং সেন্টার</h3>
            <ul>
                <li><strong>উপজেলা যুব উন্নয়ন অধিদপ্তর:</strong> সরকারি সনদসহ কোর্স।</li>
                <li><strong>কসবা সরকারি টেকনিক্যাল স্কুল এন্ড কলেজ:</strong> আইটি ও শর্ট কোর্স।</li>
            </ul>
        </div>

        <div class="info-block" style="border-left: 5px solid #c0392b; padding: 15px; background: #fff; border-radius: 8px;">
            <h3 style="color: #e74c3c;">📢 চলমান চাকরির নিয়োগ ও ইন্টার্নশিপ</h3>
            
            <div style="border: 1px solid #eee; padding: 10px; border-radius: 5px; margin-top: 10px;">
                <span style="background: #e74c3c; color: #fff; padding: 2px 6px; border-radius: 3px; float: right; font-size: 0.7rem;">Full-Time</span>
                <strong>🏫 Kasba Mohila Degree College</strong><br>
                <small>📌 পদের নাম: Biology Teacher</small><br>
                <small>🪑 খালি পদ: ১ টি</small>
            </div>

            <div style="border: 1px solid #eee; padding: 10px; border-radius: 5px; margin-top: 10px;">
                <span style="background: #f39c12; color: #fff; padding: 2px 6px; border-radius: 3px; float: right; font-size: 0.7rem;">Part-Time</span>
                <strong>🖨️ Dhonnobad Printers</strong><br>
                <small>📌 পদের নাম: Junior Designer</small><br>
                <small>🪑 খালি পদ: ১ টি</small>
            </div>
        </div>
    `;
}
