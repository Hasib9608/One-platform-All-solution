// ==========================================
// 1. DATA: EMERGENCY NUMBERS (BANGLADESH)
// এখানে বাংলাদেশের সব ইমার্জেন্সি নাম্বার সেভ করা আছে
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
// এখানে কসবার ব্লাড ডোনার এবং ব্লাড ব্যাংকের তথ্য আছে
// ==========================================
const bloodDonors = [
    { name: "Kasba Life Care Diagnostic", group: "Any", area: "kasba sadar", phone: "01977-964599", type: "Center" },
    { name: "Blood for B.Baria Org", group: "Any", area: "kasba sadar", phone: "Available", type: "Organization" },
    { name: "Rahim (Volunteer)", group: "O+", area: "kuti", phone: "017XX-XXXXXX", type: "Person" },
    { name: "Sumon (Volunteer)", group: "A+", area: "mehari", phone: "018XX-XXXXXX", type: "Person" }
];

// ==========================================
// 3. DATA: MEDICINE DATABASE (NEW)
// এখানে কসবার সাধারণ ঔষধ এবং ফার্মেসির লোকেশন ম্যাপ লিংক সহ আছে
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
// ওয়েবসাইট ওপেন হলেই এই ফাংশনগুলো রান হয়ে সব ডাটা স্ক্রিনে দেখাবে
// ==========================================
window.onload = function() {
    renderEmergency(); // ইমার্জেন্সি নাম্বার লোড করবে
    renderHospitals(); // হাসপাতাল ও ম্যাপ লোড করবে
    renderFoodData();  // রেস্টুরেন্ট ডাটা লোড করবে
    renderJobsData();  // জব ও স্কিল ডাটা লোড করবে
};

// ইমার্জেন্সি সেকশন দেখানোর ফাংশন
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

// হাসপাতাল সেকশন দেখানোর ফাংশন (Map Link সহ)
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

// ফুড ও রেস্টুরেন্ট সেকশন দেখানোর ফাংশন
function renderFoodData() {
    const container = document.getElementById("food-info-container");
    container.innerHTML = `
        <div class="info-block" style="border-left-color: #e67e22;">
            <h3>🍽️ কসবার কয়েকটি পরিচিত রেস্টুরেন্ট</h3>
            <ul>
                <li>১. দি ফুড প্যালেস (The Food Palace)</li>
                <li>২. টেস্টি বাইট রেস্টুরেন্ট (Tasty Bite Restaurant)</li>
                <li>৩. ঢাকা কাচ্চি ভাই (Dhaka Kacchi Bhai)</li>
                <li>৪. আল কারিমা রেস্টুরেন্ট (Al Karima Restaurant)</li>
                <li>৫. কাচ্চি ডাইন রেস্টুরেন্ট (Kacchi Dine Restaurant)</li>
            </ul>
            <p style="font-size:14px; margin-top:10px;"><em>নোট: এখানে কাচ্চি বিরিয়ানি থেকে শুরু করে ফাস্টফুড, চাইনিজ এবং রেগুলার বাংলা খাবার পাওয়া যায়।</em></p>
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

// স্কিল ও জব সেকশন দেখানোর ফাংশন
function renderJobsData() {
    const container = document.getElementById("job-info-container");
    container.innerHTML = `
        <div class="info-block" style="border-left-color: #8e44ad;">
            <h3>💻 ব্যানার ডিজাইন, ডাটা এন্ট্রি এবং কাজের জায়গা</h3>
            <p>স্টুডেন্টরা পার্ট-টাইম বা চুক্তিভিত্তিক ডিজাইনের কাজের জন্য নিচের প্রতিষ্ঠানগুলোতে যোগাযোগ করতে পারে:</p>
            <ul>
                <li><strong>১. এমএফ কম্পিউটার সেন্টার:</strong> ইমাম পাড়া, কসবা সদর।</li>
                <li><strong>২. তানভীর ফটোকপি ও কম্পিউটার ট্রেনিং সেন্টার:</strong> বায়েক, সালদানদী, কসবা।</li>
                <li><strong>৩. কসবা উপজেলা সুপার মার্কেট ও নতুন বাজার:</strong> ডিজিটাল সাইন ও প্রিন্টিং এর প্রচুর কাজ।</li>
                <li><strong>৪. ধন্যবাদ প্রিন্টার্স (Dhonnobad Printers):</strong> গ্রাফিক্স ডিজাইনের কাজের জন্য চমৎকার প্রতিষ্ঠান। <br>
                <a href="https://dhonnobadprinters.com/" target="_blank" class="link-btn">🌐 ধন্যবাদ প্রিন্টার্স ওয়েবসাইট ভিজিট করুন</a></li>
            </ul>
        </div>
        <div class="info-block" style="border-left-color: #3498db;">
            <h3>🚀 স্কিল ডেভেলপমেন্ট ও ট্রেনিং সেন্টার (শেখার জায়গা)</h3>
            <ul>
                <li><strong>১. উপজেলা যুব উন্নয়ন অধিদপ্তর:</strong> কসবা উপজেলা পরিষদ চত্বর। (সরকারি সনদের সুবিধাসহ কম খরচে কোর্স)।</li>
                <li><strong>২. কসবা সরকারি টেকনিক্যাল স্কুল এন্ড কলেজ:</strong> আইটি এবং টেকনিক্যাল শর্ট কোর্স।</li>
                <li><strong>৩. প্রাইভেট ট্রেনিং সেন্টার:</strong> ইমাম পাড়ার এফএম/এমএফ কম্পিউটার ট্রেনিং সেন্টার, এবং ইউনিয়ন ডিজিটাল সেন্টার (UDC)-সমূহ।</li>
            </ul>
        </div>
    `;
}

// ==========================================
// 5. SEARCH BLOOD FUNCTION
// ব্লাড ডোনার খোঁজার লজিক
// ==========================================
function searchBlood() {
    const group = document.getElementById("blood-group").value;
    const area = document.getElementById("blood-area").value.toLowerCase().trim();
    const res = document.getElementById("blood-results");
    res.innerHTML = "";
    
    // ইউজার যে গ্রুপ এবং এরিয়া সিলেক্ট করেছে তার সাথে ডাটাবেজ মেলাবে
    const results = bloodDonors.filter(d => 
        (d.group === "Any" || group === "" || d.group === group) && 
        (area === "" || d.area.includes(area))
    );

    // যদি কেউ না থাকে তবে এই মেসেজ দেখাবে
    if(results.length===0) res.innerHTML = "<p>No donors found. Please contact nearest hospital.</p>";
    else results.forEach(d => {
        const badge = d.type === "Person" ? "badge-safe" : "badge-org";
        res.innerHTML += `
        <div class="result-card">
            <div>
                <strong>${d.name}</strong> <span class="badge ${badge}">${d.type}</span><br>
                🩸 Group: ${d.group} | 📍 ${d.area.charAt(0).toUpperCase() + d.area.slice(1)}
            </div>
            <button onclick="alert('Calling ${d.phone}...')">📞 Contact</button>
        </div>`;
    });
}

// ==========================================
// 6. SEARCH MEDICINE FUNCTION (NEW)
// নির্দিষ্ট ঔষধ কসবার কোন ফার্মেসিতে পাওয়া যাবে তা খোঁজার লজিক
// ==========================================
function findMedicineShop() {
    const medId = document.getElementById("medicine-select").value;
    const resultDiv = document.getElementById("medicine-shop-result");
    
    // যদি কোন ঔষধ সিলেক্ট না করে বাটনে ক্লিক করে
    if (!medId) {
        resultDiv.innerHTML = "<p style='color: red;'>অনুগ্রহ করে একটি ঔষধ সিলেক্ট করুন!</p>";
        return;
    }

    // সিলেক্ট করা ঔষধের ডাটা বের করে আনবে
    const medData = medicineDatabase[medId];
    
    // স্ক্রিনে ফলাফল এবং গুগপ ম্যাপের লিংক দেখাবে
    resultDiv.innerHTML = `
        <div style="background: #e8f8f5; padding: 15px; border-radius: 8px; display: inline-block; text-align: left; border: 1px solid #1abc9c;">
            <h4 style="color: #16a085; margin-bottom: 5px;">✅ ${medData.name} পাওয়া যাচ্ছে!</h4>
            <p><strong>ফার্মেসি:</strong> ${medData.shop}</p>
            <p><strong>এলাকা:</strong> 📍 ${medData.area}</p>
            <a href="${medData.mapLink}" target="_blank" class="link-btn" style="background-color: #2980b9; margin-top: 10px;">🗺️ Open in Google Maps</a>
        </div>
    `;
}
// ==========================================
// 7. DATA: RESTAURANTS & SURPLUS FOOD (NEW)
// দিনের শেষে বেঁচে যাওয়া খাবারের ডাটা
// ==========================================
const restaurantFoodData = [
    { name: "১. দি ফুড প্যালেস", surplus: true, offerType: "বিনামূল্যে (Donation)", time: "রাত ১০টার পর" },
    { name: "২. টেস্টি বাইট রেস্টুরেন্ট", surplus: true, offerType: "অর্ধেক দামে (50% Off)", time: "রাত ৯:৩০ এর পর" },
    { name: "৩. ঢাকা কাচ্চি ভাই", surplus: false, offerType: "খাবার শেষ", time: "-" },
    { name: "৪. আল কারিমা রেস্টুরেন্ট", surplus: true, offerType: "বিনামূল্যে (Donation)", time: "রাত ১১টার পর" },
    { name: "৫. কাচ্চি ডাইন রেস্টুরেন্ট", surplus: false, offerType: "খাবার শেষ", time: "-" }
];

// ফুড ও রেস্টুরেন্ট সেকশন দেখানোর ফাংশন (আপডেটেড)
function renderFoodData() {
    const container = document.getElementById("food-info-container");

    // রেস্টুরেন্ট লিস্ট এবং ব্যাজ তৈরি করার লজিক
    let restaurantListHTML = "";
    restaurantFoodData.forEach(item => {
        // যদি খাবার থাকে তাহলে সবুজ ব্যাজ, না থাকলে ছাই রঙের ব্যাজ
        let badgeStyle = item.surplus 
            ? "background: #2ecc71; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px; margin-left: 10px; font-weight: bold;" 
            : "background: #95a5a6; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px; margin-left: 10px; font-weight: bold;";
        
        // খাবার থাকলে সময় এবং ধরন দেখাবে
        let extraInfo = item.surplus 
            ? `<span style="font-size: 13px; color: #d35400; display: block; margin-left: 20px; margin-top: 5px;">🕒 সময়: ${item.time} | 🎁 শর্ত: ${item.offerType}</span>` 
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
            <p style="margin-bottom: 15px;">দিনের শেষে বেঁচে যাওয়া খাবার গরিব মানুষদের জন্য বিনামূল্যে বা কম দামে এখানে পাওয়া যায়:</p>
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
// 8. DATA: JOB & INTERNSHIP VACANCIES (NEW)
// কসবার বিভিন্ন প্রতিষ্ঠানের চাকরির সুযোগ
// ==========================================
const jobVacanciesData = [
    { 
        org: "Kasba Mohila Degree College", 
        role: "Biology Teacher (জীববিজ্ঞান শিক্ষক)", 
        type: "Full-Time", 
        work: "একাদশ ও দ্বাদশ শ্রেণীর জীববিজ্ঞান ক্লাস ও ল্যাব পরিচালনা", 
        seats: 1, 
        website: "https://www.kmuc.edu.bd/", 
        mapLink: "https://www.google.com/maps/search/Kasba+Mohila+Degree+College" 
    },
    { 
        org: "Dhonnobad Printers", 
        role: "Junior Designer", 
        type: "Part-Time", 
        work: "অ্যাডোব ইলাস্ট্রেটর দিয়ে ব্যানার ও ভিজিটিং কার্ড ডিজাইন", 
        seats: 1, 
        website: "https://dhonnobadprinters.com/", 
        mapLink: "" 
    },
    { 
        org: "Maa Pharmacy", 
        role: "Pharmacy Assistant", 
        type: "Intern", 
        work: "ওষুধ গুছিয়ে রাখা ও প্রেসক্রিপশন পড়তে সাহায্য করা", 
        seats: 2, 
        website: "", 
        mapLink: "" 
    },
    { 
        org: "MF Computer Center", 
        role: "Data Entry Operator", 
        type: "Part-Time", 
        work: "অনলাইন ফরম ফিলাপ, ইমেইল এবং টাইপিং এর কাজ", 
        seats: 3, 
        website: "", 
        mapLink: "" 
    }
];

// স্কিল ও জব সেকশন দেখানোর ফাংশন (আপডেটেড)
function renderJobsData() {
    const container = document.getElementById("job-info-container");

    // শপ এবং কর্পোরেট ভ্যাকেন্সি কার্ড তৈরির লজিক
    let jobsHTML = "";
    jobVacanciesData.forEach(job => {
        // চাকরির ধরন অনুযায়ী ব্যাজের রঙ বদলাবে
        let badgeColor = "";
        if(job.type === "Intern") badgeColor = "#3498db"; // নীল রঙ
        else if(job.type === "Part-Time") badgeColor = "#f39c12"; // কমলা রঙ
        else badgeColor = "#e74c3c"; // লাল রঙ (Full-Time)

        // ওয়েবসাইট ও ম্যাপের বাটন যোগ করা (যদি ডাটাবেজে লিংক দেওয়া থাকে)
        let actionButtons = "";
        if(job.website) {
            actionButtons += `<a href="${job.website}" target="_blank" style="display:inline-block; margin-top:10px; margin-right:10px; background:#2ecc71; color:white; padding:6px 12px; text-decoration:none; border-radius:5px; font-size:12px; font-weight:bold;">🌐 ওয়েবসাইট ভিজিট করুন</a>`;
        }
        if(job.mapLink) {
            actionButtons += `<a href="${job.mapLink}" target="_blank" style="display:inline-block; margin-top:10px; background:#e74c3c; color:white; padding:6px 12px; text-decoration:none; border-radius:5px; font-size:12px; font-weight:bold;">🗺️ গুগল ম্যাপ লোকেশন</a>`;
        }

        jobsHTML += `
            <div style="background: #ffffff; border: 1px solid #dcdde1; padding: 15px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ecf0f1; padding-bottom: 8px; margin-bottom: 10px;">
                    <strong style="color: #2c3e50; font-size: 16px;">🏢 ${job.org}</strong>
                    <span style="background: ${badgeColor}; color: white; padding: 4px 12px; border-radius: 15px; font-size: 12px; font-weight: bold;">${job.type}</span>
                </div>
                <p style="margin: 5px 0; font-size: 14px; color: #34495e;"><strong>📌 পদের নাম:</strong> ${job.role}</p>
                <p style="margin: 5px 0; font-size: 14px; color: #34495e;"><strong>👨‍💻 কাজের ধরন:</strong> ${job.work}</p>
                <p style="margin: 5px 0; font-size: 14px; font-weight: bold; color: #d35400;">🪑 খালি পদ (Vacancy): ${job.seats} টি</p>
                ${actionButtons}
            </div>
        `;
    });

    // স্ক্রিনে আগের দুটো ব্লকের নিচে নতুন জব ভ্যাকেন্সি ব্লক যোগ করা হলো
    container.innerHTML = `
        <div class="info-block" style="border-left-color: #8e44ad;">
            <h3>💻 ব্যানার ডিজাইন, ডাটা এন্ট্রি এবং কাজের জায়গা</h3>
            <p>স্টুডেন্টরা পার্ট-টাইম বা চুক্তিভিত্তিক ডিজাইনের কাজের জন্য নিচের প্রতিষ্ঠানগুলোতে যোগাযোগ করতে পারে:</p>
            <ul>
                <li style="background: #f8f9fa; padding: 10px; border: 1px solid #eee; margin-bottom: 8px; border-radius: 5px;"><strong>১. এমএফ কম্পিউটার সেন্টার:</strong> ইমাম পাড়া, কসবা সদর।</li>
                <li style="background: #f8f9fa; padding: 10px; border: 1px solid #eee; margin-bottom: 8px; border-radius: 5px;"><strong>২. তানভীর ফটোকপি ও কম্পিউটার ট্রেনিং সেন্টার:</strong> বায়েক, সালদানদী, কসবা।</li>
                <li style="background: #f8f9fa; padding: 10px; border: 1px solid #eee; margin-bottom: 8px; border-radius: 5px;"><strong>৩. কসবা উপজেলা সুপার মার্কেট ও নতুন বাজার:</strong> ডিজিটাল সাইন ও প্রিন্টিং এর প্রচুর কাজ।</li>
                <li style="background: #f8f9fa; padding: 10px; border: 1px solid #eee; margin-bottom: 8px; border-radius: 5px;"><strong>৪. ধন্যবাদ প্রিন্টার্স (Dhonnobad Printers):</strong> গ্রাফিক্স ডিজাইনের কাজের জন্য চমৎকার প্রতিষ্ঠান।</li>
            </ul>
        </div>
        
        <div class="info-block" style="border-left-color: #3498db;">
            <h3>🚀 স্কিল ডেভেলপমেন্ট ও ট্রেনিং সেন্টার (শেখার জায়গা)</h3>
            <ul>
                <li style="background: #f8f9fa; padding: 10px; border: 1px solid #eee; margin-bottom: 8px; border-radius: 5px;"><strong>১. উপজেলা যুব উন্নয়ন অধিদপ্তর:</strong> কসবা উপজেলা পরিষদ চত্বর। (সরকারি সনদের সুবিধাসহ কম খরচে কোর্স)।</li>
                <li style="background: #f8f9fa; padding: 10px; border: 1px solid #eee; margin-bottom: 8px; border-radius: 5px;"><strong>২. কসবা সরকারি টেকনিক্যাল স্কুল এন্ড কলেজ:</strong> আইটি এবং টেকনিক্যাল শর্ট কোর্স।</li>
                <li style="background: #f8f9fa; padding: 10px; border: 1px solid #eee; margin-bottom: 8px; border-radius: 5px;"><strong>৩. প্রাইভেট ট্রেনিং সেন্টার:</strong> ইমাম পাড়ার এফএম/এমএফ কম্পিউটার ট্রেনিং সেন্টার।</li>
            </ul>
        </div>

        <div class="info-block" style="border-left-color: #e74c3c; background-color: #fff9f9;">
            <h3>📢 চলমান চাকরির নিয়োগ ও ইন্টার্নশিপ (Job Vacancies)</h3>
            <p style="margin-bottom: 15px; font-size: 14px; color: #555;">কসবার বিভিন্ন প্রতিষ্ঠান, কলেজ এবং কর্পোরেট সেক্টরে পার্ট-টাইম, ফুল-টাইম বা ইন্টার্নশিপ করার বর্তমান সুযোগ:</p>
            ${jobsHTML}
        </div>
    `;
}
