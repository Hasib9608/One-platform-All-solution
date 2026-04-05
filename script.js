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
// 3. INITIALIZATION & RENDERING
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
                <li><strong>১. Kasba Upazila Health Complex:</strong> কসবা সদর, ব্রাহ্মণবাড়িয়া।</li>
                <li><strong>২. Government Community Clinics:</strong> কসবার বিভিন্ন ইউনিয়নে তৃণমূল পর্যায়ে অবস্থিত (যেমন: জাজিয়ারা, শাহপুর ইত্যাদি)।</li>
            </ul>
        </div>
        <div class="info-block">
            <h3>🏥 কসবার প্রাইভেট হাসপাতাল ও ক্লিনিক</h3>
            <ul>
                <li><strong>১. Amir Hossain Shishu General Hospital:</strong> কসবা সদর।</li>
                <li><strong>২. Central Hospital & Diagnostic Center:</strong> কুটি, কসবা।</li>
                <li><strong>৩. Basundhara Clinic:</strong> কুটি চৌমুহনী, কসবা।</li>
                <li><strong>৪. Square Hospital / Clinic:</strong> কসবা।</li>
                <li><strong>৫. Kasba Popular Diagnostic Center:</strong> নতুন বাজার (হোল্ডিং নং ১৭১), কসবা সদর।</li>
                <li><strong>৬. Kasba Ibn Sina Physiotherapy Center:</strong> কসবা সদর।</li>
            </ul>
        </div>
        <div class="info-block" style="border-left-color: #f39c12;">
            <h3>💊 মেডিকেল শপ বা ফার্মেসি (Medical Shops)</h3>
            <p>পুরো উপজেলায় পাড়ায় পাড়ায় অসংখ্য ফার্মেসি রয়েছে। নিচে প্রধান কিছু এলাকার নাম দেওয়া হলো যেখানে ভালো ও বড় ফার্মেসি পাওয়া যাবে:</p>
            <ul>
                <li><strong>কসবা উপজেলা স্বাস্থ্য কমপ্লেক্স রোড:</strong> হাসপাতালের গেটের ঠিক বাইরে সারাদিন খোলা ফার্মেসি।</li>
                <li><strong>কসবা নতুন বাজার:</strong> পপুলার ডায়াগনস্টিকের আশেপাশে ভালো ফার্মেসির দোকান।</li>
                <li><strong>কুটি চৌমুহনী বাজার:</strong> বসুন্ধরা ও সেন্ট্রাল হাসপাতালকে কেন্দ্র করে বড় ওষুধের দোকান।</li>
                <li><strong>কসবা পুরাতন বাজার ও রেলওয়ে স্টেশন রোড:</strong> সাধারণ ও রেগুলার ঔষধের দোকানগুলো।</li>
            </ul>
        </div>
    `;
}

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
// 4. SEARCH BLOOD FUNCTION
// ==========================================
function searchBlood() {
    const group = document.getElementById("blood-group").value;
    const area = document.getElementById("blood-area").value.toLowerCase().trim();
    const res = document.getElementById("blood-results");
    res.innerHTML = "";
    
    const results = bloodDonors.filter(d => 
        (d.group === "Any" || group === "" || d.group === group) && 
        (area === "" || d.area.includes(area))
    );

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