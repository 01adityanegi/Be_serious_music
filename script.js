// Songs data (populated from the 'songs ' folder)
const TRENDING_ICON = `
<svg class="trending-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="url(#trending-gradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 7H22V13" stroke="url(#trending-gradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
        <linearGradient id="trending-gradient" x1="2" y1="17" x2="22" y2="7" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF1D8E"/>
            <stop offset="1" stop-color="#FF5D2D"/>
        </linearGradient>
    </defs>
</svg>
`;

const songs = [
    { id: 14, title: "Babes", artist: "BE_SERIOUS_MUSIC Artist", src: "Kunal/songs/babes.mp3", img: "Kunal/cover/babes.png", isNew: true, isTrending: true },
    { id: 4, title: "My Name Priyanshu", artist: "BE_SERIOUS_MUSIC Artist", src: "MY_name_priyanshu/My_name_priyanshu.mp3", img: "MY_name_priyanshu/cover-pic/Mynamepriyanshu.png", isTrending: true },
    { id: 1, title: "Be Serious Gang", artist: "BE_SERIOUS_MUSIC Artist", src: "MY_name_priyanshu/Be_Serious_Gang.mp3", img: "MY_name_priyanshu/cover-pic/be_serious.png" },
    { id: 2, title: "Built by Hard Work", artist: "BE_SERIOUS_MUSIC Artist", src: "MY_name_priyanshu/Built_by_Hard-Work.mp3", img: "MY_name_priyanshu/cover-pic/priyanshu_masti_trip.png" },
    { id: 3, title: "Mountain Dreamer", artist: "BE_SERIOUS_MUSIC Artist", src: "MY_name_priyanshu/Mountain_Dreamer.mp3", img: "MY_name_priyanshu/cover-pic/Mountain_dreamer.png" },
    { id: 5, title: "Tu Hi Meri Jaan", artist: "BE_SERIOUS_MUSIC Artist", src: "MY_name_priyanshu/Tu_ Hi _Meri _Jaan.mp3", img: "MY_name_priyanshu/cover-pic/Tu_he_meri_jaan.png" },
    { id: 6, title: "Ek Hai Sujal", artist: "BE_SERIOUS_MUSIC Artist", src: "ek_hai_sujal/songs/Ek hai Sujal.mp3", img: "ek_hai_sujal/cover_pic/ek_hai_sujal.png", isNew: true, isTrending: true },
    { id: 7, title: "Aage Chala", artist: "BE_SERIOUS_MUSIC Artist", src: "ek_hai_sujal/songs/Aage_chala.mp3", img: "ek_hai_sujal/cover_pic/aagechala.png" },
    { id: 8, title: "Adhoori Kahani Kamal Ki", artist: "BE_SERIOUS_MUSIC Artist", src: "Kamal_ki_khani/song/Adhoori_Kahani_Kamal_Ki.mp3", img: "Kamal_ki_khani/cover_pic/adhoori_kahani_kamal_ki.png", isNew: true, isTrending: true },
    { id: 9, title: "Kya Kamal Mein Kami Thi", artist: "BE_SERIOUS_MUSIC Artist", src: "Kamal_ki_khani/song/Kya_Kamal_m_Kami_Thi.mp3", img: "Kamal_ki_khani/cover_pic/kyakamalmkamithi.png" },
    { id: 10, title: "Vo Golu Hai", artist: "BE_SERIOUS_MUSIC Artist", src: "golu/song/vo golu hai.mp3", img: "golu/cover/vogoluh.png", isNew: true },
    { id: 11, title: "Kiran Kiran", artist: "BE_SERIOUS_MUSIC Artist", src: "kiran/songs/Kiran_Kiran.mp3", img: "kiran/cover/kirankiran.png", isNew: true, isTrending: true },
    { id: 12, title: "Ishq-e-kamal", artist: "BE_SERIOUS_MUSIC Artist", src: "Kamal_ki_khani/song/ishq_e_kamal.mp3", img: "Kamal_ki_khani/cover_pic/ishq_e_kamal.png", isNew: true },
    { id: 13, title: "Golu on Grind", artist: "BE_SERIOUS_MUSIC Artist", src: "golu/song/golu_on_grind.mp3", img: "golu/cover/golu_on_grind.png", isNew: true },
    { id: 15, title: "Raj Ka Raj", artist: "BE_SERIOUS_MUSIC Artist", src: "Raj/song/raj-ka-raj.mp3", img: "Raj/cover-pic/raj-ka-raj.png", isNew: true, isTrending: true }
];

const reviewerProfiles = [
    { name: 'Aadi', comment: title => `${title} has an incredible energy and is a total mood lifter.` },
    { name: 'Priyanshu', comment: title => `${title} has premium vibes and a standout chorus.` },
    { name: 'Kunal', comment: title => `${title} is polished, powerful and instantly replayable.` },
    { name: 'Raj', comment: title => `${title} feels cinematic and premium from start to finish.` },
    { name: 'Karan', comment: title => `${title} has a perfect rhythm and unforgettable hook.` },
    { name: 'Kamal', comment: title => `${title} is smooth, bold and packed with energy.` },
    { name: 'Gaurav', comment: title => `${title} has a beautiful melody and huge replay value.` },
    { name: 'Kamal Binwal', comment: title => `${title} sounds incredible and is radio-ready.` },
    { name: 'Rahul', comment: title => `${title} delivers premium production and strong vocals.` },
    { name: 'Sujal', comment: title => `${title} is fire — every part of it hits.` }
];

let reviewBannerTimeout;
let reviewBannerInterval;
let reviewBannerReviews = [];
let reviewBannerIndex = 0;

function titleCase(text) {
    return text.toString().replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}

function formatReviewText(text) {
    return titleCase(text);
}

function getSongReviews(songId) {
    const song = songs.find(s => s.id === songId);
    const dynamicReviews = song ? reviewerProfiles.map(profile => ({
        user: titleCase(profile.name),
        rating: 5,
        comment: formatReviewText(profile.comment(song.title))
    })) : [];

    return [
        ...dynamicReviews,
        ...((reviews[songId] || []).map(rev => ({
            user: titleCase(rev.user),
            rating: rev.rating,
            comment: formatReviewText(rev.comment)
        })))
    ];
}

function updateReviewBannerContent() {
    if (!reviewBanner || !reviewBannerReviews.length) return;

    const review = reviewBannerReviews[reviewBannerIndex];
    reviewBanner.innerHTML = `
        <div class="review-banner-card">
            <div class="review-banner-item">
                <span class="review-banner-user">${review.user}</span>
                <span class="review-banner-comment">${review.comment}</span>
            </div>
        </div>
    `;
}

function hideReviewBanner() {
    if (!reviewBanner) return;
    reviewBanner.classList.remove('visible');
    reviewBanner.classList.add('hidden');
    clearInterval(reviewBannerInterval);
}

function showSongReviewBanner(song) {
    if (!reviewBanner) return;

    reviewBannerReviews = getSongReviews(song.id);
    if (!reviewBannerReviews.length) return;

    reviewBannerIndex = 0;
    updateReviewBannerContent();
    reviewBanner.classList.remove('hidden');
    reviewBanner.classList.add('visible');

    clearTimeout(reviewBannerTimeout);
    clearInterval(reviewBannerInterval);

    reviewBannerInterval = setInterval(() => {
        reviewBannerIndex = (reviewBannerIndex + 1) % reviewBannerReviews.length;
        updateReviewBannerContent();
    }, 2600);

    reviewBannerTimeout = setTimeout(hideReviewBanner, reviewBannerReviews.length * 2600 + 2000);
}

// Playlists data structure
const playlists = {
    "Luxury Vibes": [4, 6, 5, 7, 13, 14],  // My Name Priyanshu, Ek Hai Sujal, Tu Hi Meri Jaan, Aage Chala
    "Late Night Jazz": [1, 2, 3, 7, 14, 12, 8, 9],  // Be Serious Gang, Built by Hard Work, Mountain Dreamer, Aage Chala
    "My Name Priyanshu": [4, 1, 2, 3, 5]  // Without Ek Hai Sujal
};

let userPlaylists = ["My Name Priyanshu", "Luxury Vibes", "Late Night Jazz"];
let filteredSongs = [...songs];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

// DOM Elements
const songGrid = document.getElementById('song-grid');
const priyanshuGrid = document.getElementById('priyanshu-playlist');
const mostLikedGrid = document.getElementById('most-liked-grid');
const heroSongTitle = document.getElementById('hero-song-title');
const heroSongArtist = document.getElementById('hero-song-artist');
const heroSection = document.getElementById('current-cover-section');
const heroPlayBtn = document.getElementById('hero-play-btn');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const playerTrackImg = document.getElementById('player-track-img');
const reviewBanner = document.getElementById('song-review-banner');
const searchInput = document.getElementById('main-search-input');
const playlistList = document.getElementById('user-playlists');
const createPlaylistBtn = document.getElementById('create-playlist-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressBarBg = document.getElementById('progress-bar-bg');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const volumeSlider = document.getElementById('volume-slider');
const currentTitleEl = document.getElementById('current-title');
const currentArtistEl = document.getElementById('current-artist');
currentArtistEl.innerText = "BE_SERIOUS_MUSIC Premium";

// Auth Modal Elements
const authModal = document.getElementById('auth-modal');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const listenerCountEl = document.getElementById('listener-count');
const profilePic = document.getElementById('profile-pic');

let isUserLoggedIn = false;
let currentListenerCount = 45176; // Start with the "real" number from the user's view
let currentUser = null;

// Advertisement Popup Configuration
const adUrls = ['beserious.in', 'beseriousofficial.in', 'adityanegi.in'];
let adPopupTimeout = null;
let adShownForCurrentSong = false;

// Instagram Ads Configuration
const adReels = [
    'https://www.instagram.com/reel/DWAeYN1E_bF/embed',
    'https://www.instagram.com/reel/DUvTh6xE9W9/embed'
];
let currentAdIndex = 0;

// Play Statistics
let songPlays = JSON.parse(localStorage.getItem('thehits_plays')) || {};

// Admin Email
const ADMIN_EMAIL = '01adityanegi@gmail.com';

// Likes Data (songId -> array of names)
let songLikes = JSON.parse(localStorage.getItem('thehits_likes')) || {};


const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyEIiwhJkboySko_EOA-cT1ZQl3pdg5XJWCRY88JR7g6Fywi4UE-zhiPefKNrffkblIeA/exec';

// Check if Google Apps Script URL is configured
function isGoogleAppsScriptConfigured() {
    return GOOGLE_APPS_SCRIPT_URL && !GOOGLE_APPS_SCRIPT_URL.includes('YOUR_DEPLOYMENT_ID');
}

// Send email via Google Apps Script
async function sendEmailViaGoogleAppsScript(emailType, userData) {
    if (!isGoogleAppsScriptConfigured()) {
        console.warn('⚠️ Google Apps Script URL not configured.');
        return false;
    }

    try {
        // Using text/plain (no-cors) to avoid preflight issues
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({
                type: emailType,
                name: userData.name,
                email: userData.email,
                password: userData.password || '',
                phone: userData.phone || '',
                message: userData.message || ''
            })
        });

        // With no-cors, we can't read the response, so we assume success if no exception
        return true;
    } catch (error) {
        console.error('⚠️ Error sending email:', error);
        return false;
    }
}

// Handle Contact Form Inquiry
async function sendInquiry(name, email, message) {
    showNotification('Sending inquiry...', 'info');
    const success = await sendEmailViaGoogleAppsScript('inquiry', { name, email, message });
    if (success) {
        showNotification('✅ Inquiry sent! We will contact you soon.', 'success');
    } else {
        showNotification('❌ Failed to send inquiry. Try again.', 'error');
    }
}


// Initialize Website
function init() {
    renderTrendingHits();
    renderPriyanshuPlaylist();
    renderMostLikedSongs();
    // Default to Babes (new song at index 0)
    currentSongIndex = 0;
    loadSong(currentSongIndex);
    setupEventListeners();
    animateEntry();
    initAuthSystem();
    setupLogoutHandler();
    initListenerCounter();
    handleNetflixIntro();
    initLuxuryAnimations();
}

function handleNetflixIntro() {
    const intro = document.getElementById('netflix-intro');
    if (intro) {
        // Hide after 3.5s (duration of animation)
        setTimeout(() => {
            intro.classList.add('fade-out');
            // Remove from DOM after transition
            setTimeout(() => {
                intro.remove();
            }, 1000);
        }, 3500);
    }
}

// Auth System Functions
function toggleAuthForm(event) {
    event.preventDefault();
    loginForm.classList.toggle('active-form');
    signupForm.classList.toggle('active-form');
    // Clear error messages
    document.querySelectorAll('.auth-error').forEach(el => el.remove());
}

// Get all stored accounts from localStorage
function getAllAccounts() {
    const accounts = localStorage.getItem('thehits_accounts');
    return accounts ? JSON.parse(accounts) : {};
}

// Save account to localStorage
function saveAccount(email, name, password) {
    const accounts = getAllAccounts();
    accounts[email] = { name, password, createdAt: new Date().toISOString() };
    localStorage.setItem('thehits_accounts', JSON.stringify(accounts));
}

// Check if account exists
function accountExists(email) {
    const accounts = getAllAccounts();
    return accounts.hasOwnProperty(email);
}

// Verify login credentials
function verifyLogin(email, password) {
    const accounts = getAllAccounts();
    if (accounts[email] && accounts[email].password === password) {
        return accounts[email];
    }
    return null;
}

// Generate avatar from user initials - Luxury Style
function generateUserAvatar(name) {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const colors = ['#1DB954', '#FF1D8E', '#FF5D2D', '#7928CA', '#0070F3'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
        <defs>
            <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
                <stop offset="100%" style="stop-color:#000;stop-opacity:0.8" />
            </linearGradient>
        </defs>
        <rect width="200" height="200" rx="100" fill="url(#avatar-grad)"/>
        <text x="100" y="105" font-size="80" fill="white" text-anchor="middle" dy=".3em" font-weight="900" font-family="'Montserrat', sans-serif" letter-spacing="-2">${initials}</text>
    </svg>`;

    return 'data:image/svg+xml;base64,' + btoa(svg);
}

// Send welcome email (simulated - shows confirmation)
function sendWelcomeEmail(name, email, password, phone) {
    const createdDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    console.log('📧 Sending welcome email via Google Apps Script...');
    console.log(`To: ${email}, Name: ${name}`);

    // Send via Google Apps Script
    sendEmailViaGoogleAppsScript('signup', {
        name: name,
        email: email,
        password: password,
        phone: phone
    }).then(success => {
        if (success) {
            showNotification(`✅ Welcome email sent to ${email}!`, 'success');
        } else {
            showNotification(`Could not send email. Check console for details.`, 'error');
        }
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#1DB954' : (type === 'error' ? '#FF6B6B' : 'linear-gradient(135deg, #1e3a8a, #2563eb)')};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
}

function showError(formElement, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'auth-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        background: #FF6B6B;
        color: white;
        padding: 12px 16px;
        border-radius: 6px;
        margin-bottom: 16px;
        font-size: 0.9rem;
        animation: slideIn 0.3s ease;
    `;
    formElement.insertBefore(errorDiv, formElement.firstChild);

    // Auto-remove error after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentElement) {
            errorDiv.remove();
        }
    }, 5000);
}

function hideAuthModal() {
    authModal.classList.add('hidden');
    isUserLoggedIn = true;
    updateUserProfile();
    greetUser();
}

function updateUserProfile() {
    const profilePic = document.getElementById('profile-pic');
    const nameDisplay = document.getElementById('user-name-display');
    const dropdownName = document.getElementById('dropdown-user-name');

    if (currentUser && profilePic) {
        profilePic.src = generateUserAvatar(currentUser.name);
        if (nameDisplay) nameDisplay.textContent = currentUser.name;
        if (dropdownName) dropdownName.textContent = currentUser.name;
        updateTopSongUI();
    } else {
        if (nameDisplay) nameDisplay.textContent = 'Guest';
        if (dropdownName) dropdownName.textContent = 'Guest';
        const vibeChar = document.getElementById('vibe-character');
        if (vibeChar) vibeChar.classList.add('hidden');
    }
}

function trackSongPlay(songId) {
    songPlays[songId] = (songPlays[songId] || 0) + 1;
    localStorage.setItem('thehits_plays', JSON.stringify(songPlays));
    updateTopSongUI();
}

function updateTopSongUI() {
    const topSongBadge = document.getElementById('top-song-badge');
    if (!topSongBadge) return;

    let maxPlays = 0;
    let topSongId = null;

    for (const id in songPlays) {
        if (songPlays[id] > maxPlays) {
            maxPlays = songPlays[id];
            topSongId = parseInt(id);
        }
    }

    if (topSongId !== null) {
        const song = songs.find(s => s.id === topSongId);
        if (song) {
            topSongBadge.textContent = `#1 Stan: ${song.title}`;

            const vibeChar = document.getElementById('vibe-character');
            if (vibeChar) {
                vibeChar.src = song.img;
                vibeChar.classList.remove('hidden');
            }
        }
    } else {
        topSongBadge.textContent = "No plays yet";
    }
}

function greetUser() {
    if (currentUser) {
        showNotification(`Welcome back, ${currentUser.name}! 🎵`, 'success');
    }
}

function initAuthSystem() {
    // Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;

            // Clear previous error messages
            document.querySelectorAll('.auth-error').forEach(el => el.remove());

            if (!email || !password) {
                showError(loginForm, 'Please fill in all fields');
                return;
            }

            // Verify login credentials
            const account = verifyLogin(email, password);

            if (account) {
                currentUser = { name: account.name, email: email };
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userName', account.name);

                updateUserProfile(); // Added this line
                hideAuthModal();
                loginForm.reset();
            } else if (accountExists(email)) {
                showError(loginForm, 'Invalid password. Please try again.');
            } else {
                showError(loginForm, 'Account not found. Please sign up first.');
            }
        });
    }

    // Signup Form Submission
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const phone = document.getElementById('signup-phone').value.trim();
            const password = document.getElementById('signup-password').value;
            const confirmPass = document.getElementById('signup-confirm').value;

            // Clear previous error messages
            document.querySelectorAll('.auth-error').forEach(el => el.remove());

            // Validation
            if (!name || !email || !phone || !password || !confirmPass) {
                showError(signupForm, 'Please fill in all fields');
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                showError(signupForm, 'Please enter a valid email address');
                return;
            }

            if (password.length < 6) {
                showError(signupForm, 'Password must be at least 6 characters long');
                return;
            }

            if (password !== confirmPass) {
                showError(signupForm, 'Passwords do not match');
                return;
            }

            if (accountExists(email)) {
                showError(signupForm, 'Email already registered. Please log in.');
                return;
            }

            // Save account
            saveAccount(email, name, password);

            // Send welcome email
            sendWelcomeEmail(name, email, password, phone);

            // Log user in
            currentUser = { name: name, email: email };
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', name);

            updateUserProfile();
            hideAuthModal();
            signupForm.reset();
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            sendInquiry(name, email, message);
            contactForm.reset();
        });
    }

    // Check if user is already logged in
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    if (storedEmail && storedName) {
        currentUser = { name: storedName, email: storedEmail };
        hideAuthModal();
    }
}

// Listener Counter Functions
function initListenerCounter() {
    if (listenerCountEl) {
        updateListenerCount();
        // Update listener count every 2 seconds (Real-time feel)
        setInterval(() => {
            currentListenerCount += Math.floor(Math.random() * 20) - 10; // More frequent, smaller changes
            if (currentListenerCount < 40000) currentListenerCount = 40000;
            updateListenerCount();
        }, 2000);
    }
}

function updateListenerCount() {
    if (listenerCountEl) {
        // Use GSAP for smooth count animation
        const countObj = { val: parseInt(listenerCountEl.textContent.replace(/,/g, '')) || 0 };
        gsap.to(countObj, {
            val: currentListenerCount,
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
                listenerCountEl.textContent = Math.floor(countObj.val).toLocaleString();
            }
        });
    }
}

// Render Trending Hits (Only trending songs)
function renderTrendingHits(data = null) {
    const songsToRender = data || songs.filter(s => s.isTrending);
    const songHTML = songsToRender.map((song) => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const newBadge = song.isNew ? '<span class="new-badge">NEW</span>' : '';
        const trendingBadge = song.isTrending ? `<span class="trending-badge">${TRENDING_ICON} TRENDING</span>` : '';
        return `
            <div class="song-card" onclick="playSong(${originalIndex})">
                ${trendingBadge || newBadge}
                <img src="${song.img}" alt="${song.title}">
                <h3>${song.title}</h3>
                <div class="card-footer">
                    <p>${song.artist}</p>
                    <button class="review-btn" onclick="event.stopPropagation(); openReviewModal(${song.id})">Review</button>
                </div>
            </div>
        `;
    }).join('');

    if (songGrid) songGrid.innerHTML = songHTML;
}

// Render My Name Priyanshu Playlist (Only songs from this album)
function renderPriyanshuPlaylist() {
    const priyanshuSongIds = playlists["My Name Priyanshu"];
    const priyanshuSongs = songs.filter(song => priyanshuSongIds.includes(song.id));

    const songHTML = priyanshuSongs.map((song) => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const newBadge = song.isNew ? '<span class="new-badge">NEW</span>' : '';
        const trendingBadge = song.isTrending ? `<span class="trending-badge">${TRENDING_ICON} TRENDING</span>` : '';
        return `
            <div class="song-card" onclick="playSong(${originalIndex})">
                ${trendingBadge || newBadge}
                <img src="${song.img}" alt="${song.title}">
                <h3>${song.title}</h3>
                <div class="card-footer">
                    <p>${song.artist}</p>
                    <button class="review-btn" onclick="event.stopPropagation(); openReviewModal(${song.id})">Review</button>
                </div>
            </div>
        `;
    }).join('');

    if (priyanshuGrid) priyanshuGrid.innerHTML = songHTML;
}

// Render Song Cards (for general use)
function renderSongs(data = songs) {
    renderTrendingHits(data);
}

function renderPlaylists() {
    if (playlistList) {
        playlistList.innerHTML = userPlaylists.map(pl => `
            <li onclick="filterByPlaylist('${pl}')">${pl}</li>
        `).join('');
    }
}

function filterByPlaylist(name) {
    // Get songs for the selected playlist
    if (playlists[name]) {
        const playlistSongIds = playlists[name];
        const playlistSongs = songs.filter(song => playlistSongIds.includes(song.id));
        renderSongs(playlistSongs);
        showSection('home');
    } else {
        alert(`Playlist not found: ${name}`);
    }
}

// Advertisement Popup Function
function showAdPopup() {
    const randomUrl = adUrls[Math.floor(Math.random() * adUrls.length)];

    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'music-ad-popup';
    popupOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10001;
        backdrop-filter: blur(10px);
    `;

    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        border-radius: 20px;
        padding: 40px;
        text-align: center;
        max-width: 90%;
        width: 450px;
        box-shadow: 0 20px 60px rgba(255, 29, 142, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
    `;

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: none;
        color: white;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
    `;
    closeButton.onmouseover = () => {
        closeButton.style.transform = 'rotate(90deg)';
        closeButton.style.color = '#ff4d4d';
    };
    closeButton.onmouseout = () => {
        closeButton.style.transform = 'rotate(0deg)';
        closeButton.style.color = 'white';
    };
    closeButton.onclick = () => {
        if (popupOverlay && popupOverlay.parentNode) {
            popupOverlay.parentNode.removeChild(popupOverlay);
        }
    };

    const timerEl = document.createElement('div');
    timerEl.style.cssText = `
        position: absolute;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 15px;
        border-radius: 20px;
        color: #ff4d4d;
        font-size: 14px;
        font-weight: 600;
    `;
    timerEl.innerText = '15s';

    const title = document.createElement('h2');
    title.textContent = '🎵 Advertisement';
    title.style.cssText = `
        color: white;
        font-family: 'Playfair Display', serif;
        margin-bottom: 20px;
        font-size: 28px;
        background: linear-gradient(45deg, #FF1D8E, #FF5D2D);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    `;

    const message = document.createElement('p');
    message.textContent = 'Support BE_SERIOUS_MUSIC by visiting:';
    message.style.cssText = `
        color: #cccccc;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 25px;
        font-size: 16px;
    `;

    const urlContainer = document.createElement('div');
    urlContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 25px;
    `;

    const urlsToShow = [randomUrl, 'instagram.com/beserious_official'];
    urlsToShow.forEach((url, index) => {
        const link = document.createElement('a');
        link.href = index === 0 ? `https://${url}` : `https://${url}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = url;
        link.style.cssText = `
            display: block;
            background: linear-gradient(45deg, #FF1D8E, #FF5D2D);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            text-decoration: none;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s ease;
        `;
        link.onmouseover = () => {
            link.style.transform = 'translateY(-2px)';
            link.style.boxShadow = '0 10px 25px rgba(255, 29, 142, 0.4)';
        };
        link.onmouseout = () => {
            link.style.transform = 'translateY(0px)';
            link.style.boxShadow = 'none';
        };
        urlContainer.appendChild(link);
    });

    popupContent.appendChild(closeButton);
    popupContent.appendChild(timerEl);
    popupContent.appendChild(title);
    popupContent.appendChild(message);
    popupContent.appendChild(urlContainer);
    popupOverlay.appendChild(popupContent);

    document.body.appendChild(popupOverlay);

    let timeLeft = 15;
    timerEl.innerText = '15s';
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (popupOverlay && popupOverlay.parentNode) {
                popupOverlay.parentNode.removeChild(popupOverlay);
            }
        }
    }, 1000);

    setTimeout(() => {
        clearInterval(timerInterval);
        if (popupOverlay && popupOverlay.parentNode) {
            popupOverlay.parentNode.removeChild(popupOverlay);
        }
    }, 15000);
}

// Show Ad at Start or Random Point During Playback
function maybeShowAdPopup() {
    if (adShownForCurrentSong) return;

    const showAtStart = Math.random() < 0.3;

    if (showAtStart) {
        showAdPopup();
        adShownForCurrentSong = true;
    } else if (audio.duration) {
        const randomPoint = Math.random() * 0.5 + 0.25;
        const triggerTime = audio.duration * randomPoint;
        const checkInterval = setInterval(() => {
            if (audio.currentTime >= triggerTime && !adShownForCurrentSong) {
                clearInterval(checkInterval);
                showAdPopup();
                adShownForCurrentSong = true;
            }
        }, 1000);
    }
}

// Reset ad flag when song changes
function resetAdFlag() {
    adShownForCurrentSong = false;
}

// Render Hero 3D Carousel
function renderHeroCarousel(currentIndex) {
    const track = document.getElementById('hero-carousel-track');
    if (!track) return;

    const numSongs = songs.length;
    let prevIndex = (currentIndex - 1 + numSongs) % numSongs;
    let nextIndex = (currentIndex + 1) % numSongs;

    const itemsHTML = [prevIndex, currentIndex, nextIndex].map((idx, pos) => {
        let className = 'hidden-item';
        if (pos === 0) className = 'prev';
        if (pos === 1) className = 'active';
        if (pos === 2) className = 'next';
        
        const song = songs[idx];
        return `
            <div class="carousel-item ${className}" onclick="event.stopPropagation(); playSong(${idx})">
                <img src="${song.img}" alt="${song.title}">
            </div>
        `;
    }).join('');

    track.innerHTML = itemsHTML;
}

// Load Song
function loadSong(index) {
    const song = songs[index];
    trackSongPlay(song.id);
    audio.src = song.src;
    currentTitleEl.innerText = song.title;
    currentArtistEl.innerText = song.artist;
    if (playerTrackImg) playerTrackImg.src = song.img;

    // Update Hero Section (Cover Pic)
    if (heroSongTitle) heroSongTitle.innerText = song.title;
    if (heroSongArtist) heroSongArtist.innerText = song.artist;
    
    renderHeroCarousel(index);

    resetAdFlag();
    showSongReviewBanner(song);

    // Update Like Button State
    const likeBtn = document.getElementById('hero-like-btn');
    if (likeBtn) {
        if (currentUser && (songLikes[song.id] || []).includes(currentUser.name)) {
            likeBtn.classList.add('active');
        } else {
            likeBtn.classList.remove('active');
        }
    }

    renderLikes(song.id);
    currentSongIndex = index;

    // Show music change popup
    showNotification(`Now Playing: ${song.title} - ${song.artist}`, 'info');
}

// Render Likes for a song
function renderLikes(songId) {
    const display = document.getElementById('liked-users-display');
    if (!display) return;

    const likes = songLikes[songId] || [];
    if (likes.length === 0) {
        display.innerHTML = '';
        return;
    }

    const namesText = likes.map(name => `<strong>${name}</strong>`).join(', ');
    const suffix = likes.length === 1 ? 'likes' : 'like';
    display.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#ff4d4d" stroke="#ff4d4d" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> <span>${namesText} ${suffix} this song</span>`;
}

// Like Song Function
function likeSong(songId) {
    if (!currentUser) {
        showNotification('Please sign in to like songs!', 'error');
        return;
    }

    if (!songLikes[songId]) {
        songLikes[songId] = [];
    }

    const index = songLikes[songId].indexOf(currentUser.name);
    const likeBtn = document.getElementById('hero-like-btn');

    if (index === -1) {
        // Add like
        songLikes[songId].push(currentUser.name);
        if (likeBtn) {
            likeBtn.classList.add('active');
            likeBtn.classList.add('like-animation');
            setTimeout(() => likeBtn.classList.remove('like-animation'), 400);
        }
        showNotification('Song liked! ❤️');
    } else {
        // Remove like
        songLikes[songId].splice(index, 1);
        if (likeBtn) likeBtn.classList.remove('active');
    }

    localStorage.setItem('thehits_likes', JSON.stringify(songLikes));
    renderLikes(songId);
    renderMostLikedSongs();
}

// Render Most Liked Songs Section
function renderMostLikedSongs() {
    if (!mostLikedGrid) return;

    // Target specific songs by ID
    const targetIds = [11, 6, 8];
    const likedSongsList = songs.filter(s => targetIds.includes(s.id));

    mostLikedGrid.innerHTML = '';

    likedSongsList.forEach(song => {
        const likeCount = (songLikes[song.id] || []).length;
        const songIndex = songs.findIndex(s => s.id === song.id);

        const card = document.createElement('div');
        card.className = 'song-card';
        if (song.isTrending) card.classList.add('featured-song');
        card.onclick = () => playSong(songIndex);

        let badgeHtml = `
            <div class="like-count-badge">
                <svg width="12" height="12" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                ${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}
            </div>
        `;

        card.innerHTML = `
            ${badgeHtml}
            <img src="${song.img}" alt="${song.title}">
            <h3>${song.title}</h3>
            <div class="card-footer">
                <p>${song.artist}</p>
                <button class="review-btn" onclick="event.stopPropagation(); openReviewModal(${song.id})">Review</button>
            </div>
        `;
        mostLikedGrid.appendChild(card);
    });
}

// Play/Pause Logic
function togglePlay() {
    if (!audio.src) return;
    if (isPlaying) {
        audio.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (heroPlayBtn) heroPlayBtn.innerText = 'Play Mix';
    } else {
        audio.play();
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (heroPlayBtn) heroPlayBtn.innerText = 'Pause Mix';
        maybeShowAdPopup();
    }
    isPlaying = !isPlaying;
}

function playSong(index) {
    loadSong(index);
    isPlaying = false;
    togglePlay();
}

// Event Listeners
function setupEventListeners() {
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlay);
    if (heroPlayBtn) heroPlayBtn.addEventListener('click', togglePlay);

    const heroLikeBtn = document.getElementById('hero-like-btn');
    if (heroLikeBtn) {
        heroLikeBtn.addEventListener('click', () => {
            const currentSong = songs[currentSongIndex];
            likeSong(currentSong.id);
        });
    }

    // Keyboard Spacebar for Play/Pause
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            // Check if the active element is an input field
            const activeElement = document.activeElement;
            const isInputField = activeElement.tagName === 'INPUT' ||
                activeElement.tagName === 'TEXTAREA';

            // Only toggle play if not typing in a form field
            if (!isInputField) {
                e.preventDefault();
                togglePlay();
            }
        }
    });

    // Search Logic - Global and Robust
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            if (term === '') {
                renderTrendingHits(songs);
                renderPriyanshuPlaylist();
                return;
            }

            const filtered = songs.filter(song =>
                song.title.toLowerCase().includes(term) ||
                song.artist.toLowerCase().includes(term)
            );

            // Show searched songs in the main grid
            renderTrendingHits(filtered);

            // Hide other sections during search for clarity
            const exclusiveSection = document.getElementById('exclusive-playlists');
            if (exclusiveSection) exclusiveSection.style.display = term ? 'none' : 'block';

            const priyanshuSection = document.getElementById('priyanshu-playlist').parentElement;
            if (priyanshuSection) priyanshuSection.style.display = term ? 'none' : 'block';
        });
    }

    // Navigation Switching
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            showSection(section);

            // Update active state
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Playlist Creation
    if (createPlaylistBtn) {
        createPlaylistBtn.addEventListener('click', () => {
            const name = prompt("Enter playlist name:");
            if (name) {
                userPlaylists.push(name);
                renderPlaylists();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            playSong(currentSongIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            playSong(currentSongIndex);
        });
    }

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            if (progressBarFill) progressBarFill.style.width = `${percent}%`;
            if (currentTimeEl) currentTimeEl.innerText = formatTime(audio.currentTime);
            if (totalDurationEl) totalDurationEl.innerText = formatTime(audio.duration);
        }
    });

    if (progressBarBg) {
        progressBarBg.addEventListener('click', (e) => {
            const width = progressBarBg.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;
            if (duration) audio.currentTime = (clickX / width) * duration;
        });
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = e.target.value;
        });
    }

    audio.addEventListener('ended', () => {
        handleSongEnded();
    });

    function handleSongEnded() {
        // Show Ad and wait for it to finish or be skipped
        showAdOverlay();
    }

    function showAdOverlay() {
        let adOverlay = document.getElementById('ad-overlay');
        const reelUrl = adReels[currentAdIndex];
        currentAdIndex = (currentAdIndex + 1) % adReels.length;

        if (!adOverlay) {
            adOverlay = document.createElement('div');
            adOverlay.id = 'ad-overlay';
            document.body.appendChild(adOverlay);
        }

        adOverlay.innerHTML = `
            <div class="ad-container">
                <div class="ad-header">
                    <span class="ad-tag">SPONSORED</span>
                    <span class="ad-timer">Music resumes in 15s</span>
                    <button id="skip-ad-btn" class="skip-btn hidden">Skip Ad</button>
                </div>
                <div class="reel-wrapper">
                    <iframe src="${reelUrl}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                </div>
            </div>
        `;

        adOverlay.style.display = 'flex';

        let timeLeft = 15;
        const timerEl = adOverlay.querySelector('.ad-timer');
        const skipBtn = adOverlay.querySelector('#skip-ad-btn');

        const interval = setInterval(() => {
            timeLeft--;
            if (timerEl) timerEl.innerText = `Music resumes in ${timeLeft}s`;

            if (timeLeft <= 3 && skipBtn) {
                skipBtn.classList.remove('hidden');
            }

            if (timeLeft <= 0) {
                clearInterval(interval);
                hideAdOverlay();
                if (nextBtn) nextBtn.click();
            }
        }, 1000);

        if (skipBtn) {
            skipBtn.onclick = () => {
                clearInterval(interval);
                hideAdOverlay();
                if (nextBtn) nextBtn.click();
            };
        }
    }

    function hideAdOverlay() {
        const adOverlay = document.getElementById('ad-overlay');
        if (adOverlay) {
            adOverlay.style.display = 'none';
        }
    }

    // Contact Form Submission - Enhanced with Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
            const emailInput = contactForm.querySelector('input[placeholder="Email Address"]');
            const messageInput = contactForm.querySelector('textarea');
            const btn = contactForm.querySelector('button');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            // Validation
            if (!name || !email || !message) {
                showNotification('❌ Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('❌ Please enter a valid email address', 'error');
                return;
            }

            // Message length validation
            if (message.length < 10) {
                showNotification('❌ Please write a detailed message (at least 10 characters)', 'error');
                return;
            }

            if (message.length > 5000) {
                showNotification('❌ Message is too long (max 5000 characters)', 'error');
                return;
            }

            // Animate button on submit
            if (typeof gsap !== 'undefined') {
                gsap.to(btn, {
                    scale: 0.95,
                    duration: 0.1
                });
                gsap.to(btn, {
                    scale: 1,
                    duration: 0.2,
                    delay: 0.1,
                    ease: 'back.out(2)'
                });
            }

            const originalText = btn.innerText;
            btn.innerText = '📤 Sending...';
            btn.disabled = true;

            console.log('📧 Sending inquiry via Google Apps Script...');
            console.log('From:', { name, email });
            console.log('Message:', message);

            // Send via Google Apps Script
            sendEmailViaGoogleAppsScript('inquiry', {
                name: name,
                email: email,
                message: message
            }).then(success => {
                if (success) {
                    showNotification('✅ Your inquiry has been sent! Check your email.', 'success');
                    showNotification(`📧 Admin will respond to ${email}`, 'success');

                    // Clear form with animation
                    if (typeof gsap !== 'undefined') {
                        gsap.to(contactForm, {
                            opacity: 0.8,
                            duration: 0.3,
                            onComplete: () => {
                                contactForm.reset();
                                gsap.to(contactForm, {
                                    opacity: 1,
                                    duration: 0.3
                                });
                            }
                        });
                    } else {
                        contactForm.reset();
                    }
                } else {
                    showNotification('⚠️ Could not send inquiry. Check browser console.', 'error');
                    console.error('Email sending failed. Make sure Google Apps Script URL is configured!');
                }
                btn.innerText = originalText;
                btn.disabled = false;
            }).catch(err => {
                console.error('Inquiry submission error:', err);
                showNotification('⚠️ Network error. Please try again.', 'error');
                btn.innerText = originalText;
                btn.disabled = false;
            });
        });
    }
}

function handleArtistInquiry(data) {
    sendEmailViaGoogleAppsScript('inquiry', data)
        .then(success => {
            if (success) {
                showNotification('🚀 Inquiry sent! We\'ll be in touch.', 'success');
            } else {
                showNotification('❌ Submission failed. Try again later.', 'error');
            }
        });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.app-section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    const target = document.getElementById(`${sectionId}-section`);
    if (target) {
        target.classList.add('active');
        target.style.display = 'block';
    } else if (sectionId === 'search') {
        showSection('home');
        if (searchInput) searchInput.focus();
    }
}

function openPlaylist(name, imgSrc) {
    showSection('playlist-detail');

    const plTitle = document.getElementById('pl-detail-title');
    const plImg = document.getElementById('pl-detail-img');
    const plTracklist = document.getElementById('playlist-tracklist');

    if (plTitle) plTitle.innerText = name;
    if (plImg) plImg.src = imgSrc || 'MY_name_priyanshu/cover-pic/playlist_pic.png';

    // Get songs for the selected playlist
    let playlistSongs = [];
    if (playlists[name]) {
        const playlistSongIds = playlists[name];
        playlistSongs = songs.filter(song => playlistSongIds.includes(song.id));
    }

    if (plTracklist) {
        plTracklist.innerHTML = playlistSongs.map((song, index) => {
            const originalIndex = songs.findIndex(s => s.id === song.id);
            return `
                <div class="track-item" onclick="playSong(${originalIndex})">
                    <span class="num">${index + 1}</span>
                    <span class="title">${song.title}</span>
                    <span class="artist">${song.artist}</span>
                </div>
            `;
        }).join('');
    }

    // Play all button logic
    const playAllBtn = document.getElementById('pl-play-all');
    if (playAllBtn && playlistSongs.length > 0) {
        const firstSongIndex = songs.findIndex(s => s.id === playlistSongs[0].id);
        playAllBtn.onclick = () => playSong(firstSongIndex);
    }
}

// Utility: Format Time
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Instagram Popup Function
function showInstagramPopup(event) {
    event.preventDefault(); // Prevent default link behavior

    // Create popup overlay
    const popupOverlay = document.createElement('div');
    popupOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;

    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        border-radius: 20px;
        padding: 40px;
        text-align: center;
        max-width: 90%;
        width: 400px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
    `;

    // Close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: none;
        color: white;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
    `;
    closeButton.onmouseover = () => {
        closeButton.style.transform = 'rotate(90deg)';
        closeButton.style.color = '#ff4d4d';
    };
    closeButton.onmouseout = () => {
        closeButton.style.transform = 'rotate(0deg)';
        closeButton.style.color = 'white';
    };
    closeButton.onclick = () => {
        document.body.removeChild(popupOverlay);
    };

    // Instagram logo
    const instagramLogo = document.createElement('img');
    instagramLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg';
    instagramLogo.alt = 'Instagram';
    instagramLogo.style.cssText = `
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
        filter: brightness(0) invert(1);
    `;

    // Title
    const title = document.createElement('h2');
    title.textContent = 'Follow BE_SERIOUS_MUSIC on Instagram';
    title.style.cssText = `
        color: white;
        font-family: 'Playfair Display', serif;
        margin-bottom: 15px;
        font-size: 24px;
    `;

    // Subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Get exclusive behind-the-scenes content, new releases, and more!';
    subtitle.style.cssText = `
        color: #cccccc;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 30px;
        font-size: 16px;
        line-height: 1.5;
    `;

    // Follow button
    const followButton = document.createElement('a');
    followButton.href = 'https://www.instagram.com/beserious_official?igsh=M2loNW12dDJrcTlw';
    followButton.target = '_blank';
    followButton.rel = 'noopener noreferrer';
    followButton.textContent = 'Follow on Instagram';
    followButton.style.cssText = `
        display: inline-block;
        background: linear-gradient(45deg, #FF1D8E, #FF5D2D);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 18px;
        transition: all 0.3s ease;
        box-shadow: 0 10px 20px rgba(255, 29, 142, 0.3);
        border: none;
        cursor: pointer;
    `;
    followButton.onmouseover = () => {
        followButton.style.transform = 'translateY(-3px)';
        followButton.style.boxShadow = '0 15px 25px rgba(255, 29, 142, 0.4)';
    };
    followButton.onmouseout = () => {
        followButton.style.transform = 'translateY(0px)';
        followButton.style.boxShadow = '0 10px 20px rgba(255, 29, 142, 0.3)';
    };

    // Assemble popup
    popupContent.appendChild(closeButton);
    popupContent.appendChild(instagramLogo);
    popupContent.appendChild(title);
    popupContent.appendChild(subtitle);
    popupContent.appendChild(followButton);
    popupOverlay.appendChild(popupContent);

    // Add to body
    document.body.appendChild(popupOverlay);

    // Animate in
    popupContent.style.opacity = '0';
    popupContent.style.transform = 'scale(0.9)';
    setTimeout(() => {
        popupContent.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        popupContent.style.opacity = '1';
        popupContent.style.transform = 'scale(1)';
    }, 10);
}

// ============================================
// PREMIUM ANIMATIONS - PRIME & LUXURY EFFECTS
// ============================================

// Prime Animations - High energy, quick movements
function addPrimeAnimations() {
    if (typeof gsap === 'undefined') return;

    // Prime hover effect on cards
    document.querySelectorAll('.song-card, .playlist-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            gsap.to(this, {
                scale: 1.08,
                y: -10,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: '0 20px 40px rgba(29, 185, 84, 0.4)'
            });
        });

        card.addEventListener('mouseleave', function () {
            gsap.to(this, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            });
        });
    });

    // Prime button animations
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            gsap.to(this, {
                scale: 1.12,
                duration: 0.25,
                ease: 'back.out(1.7)',
                boxShadow: '0 0 30px rgba(29, 185, 84, 0.6)'
            });
        });

        btn.addEventListener('mouseleave', function () {
            gsap.to(this, {
                scale: 1,
                duration: 0.25,
                ease: 'power2.out'
            });
        });
    });
}

// Luxury Animations - Smooth, elegant movements
function addLuxuryAnimations() {
    if (typeof gsap === 'undefined') return;

    // Luxury glow effect on player
    const playerBar = document.querySelector('.player-bar');
    if (playerBar) {
        gsap.to(playerBar, {
            boxShadow: '0 0 30px rgba(29, 185, 84, 0.3), 0 10px 40px rgba(0, 0, 0, 0.5)',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Luxury smooth scroll animation on sections
    document.querySelectorAll('.section-container').forEach((section, index) => {
        const observerOptions = { threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(entry.target, {
                        opacity: 0,
                        y: 40,
                        duration: 1.2,
                        ease: 'power3.out',
                        delay: index * 0.1
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(section);
    });

    // Luxury hero section animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.to(heroContent, {
            backgroundPositionX: '120%',
            duration: 20,
            repeat: -1,
            ease: 'none'
        });
    }
}

// Enhanced Player Button Animations
function addPlayerAnimations() {
    if (typeof gsap === 'undefined') return;

    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    [playPauseBtn, prevBtn, nextBtn].forEach(btn => {
        if (!btn) return;

        btn.addEventListener('click', function () {
            gsap.to(this, {
                scale: 0.88,
                duration: 0.1
            });
            gsap.to(this, {
                scale: 1,
                duration: 0.2,
                delay: 0.1,
                ease: 'back.out(2)'
            });
        });

        btn.addEventListener('mouseenter', function () {
            gsap.to(this, {
                scale: 1.2,
                duration: 0.25,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', function () {
            gsap.to(this, {
                scale: 1,
                duration: 0.25,
                ease: 'power2.out'
            });
        });
    });

    // Play icon rotation animation when playing
    const originalTogglePlay = window.togglePlay;
    window.togglePlay = function () {
        originalTogglePlay.call(this);

        if (isPlaying) {
            gsap.to(playPauseBtn, {
                rotation: 360,
                duration: 0.6,
                ease: 'back.out(1.7)'
            });
        }
    };
}

// Track image rotation effect
function addTrackImageAnimation() {
    if (typeof gsap === 'undefined') return;

    const trackImg = document.getElementById('player-track-img');
    if (trackImg && isPlaying) {
        gsap.to(trackImg, {
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: 'none'
        });
    } else if (trackImg) {
        gsap.to(trackImg, { rotation: 0, duration: 0.5 });
    }
}

// Animations with GSAP
function animateEntry() {
    if (typeof gsap !== 'undefined') {
        // Initial page load animations
        gsap.from('.sidebar', { x: -100, opacity: 0, duration: 1, ease: 'power4.out' });
        gsap.from('.hero-content h1', { y: 50, opacity: 0, duration: 1, delay: 0.5, ease: 'power4.out' });
        gsap.from('.song-card', {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.8,
            ease: 'back.out(1.7)'
        });

        // Apply premium animations
        addPrimeAnimations();
        addLuxuryAnimations();
        addPlayerAnimations();
        addTrackImageAnimation();
    }
}

// ============================================
// REVIEW SYSTEM
// ============================================

let currentReviewSongId = null;
let reviews = JSON.parse(localStorage.getItem('thehits_reviews')) || {};

function openReviewModal(songId) {
    currentReviewSongId = songId;
    const song = songs.find(s => s.id === songId);
    if (!song) return;

    const modal = document.getElementById('review-modal');
    const titleEl = document.getElementById('review-song-title');

    titleEl.innerText = song.title;

    // Pre-fill user name if logged in
    const reviewUserInput = document.getElementById('review-user');
    if (reviewUserInput) {
        if (currentUser) {
            reviewUserInput.value = currentUser.name;
            reviewUserInput.readOnly = true;
        } else {
            reviewUserInput.value = '';
            reviewUserInput.readOnly = false;
        }
    }

    modal.classList.remove('hidden');
    renderReviews(songId);
}

function closeReviewModal() {
    const modal = document.getElementById('review-modal');
    modal.classList.add('hidden');
    currentReviewSongId = null;
}

function renderReviews(songId) {
    const listEl = document.getElementById('reviews-list');
    const songReviews = getSongReviews(songId).map(rev => ({
        user: titleCase(rev.user),
        rating: rev.rating,
        comment: formatReviewText(rev.comment)
    }));

    if (songReviews.length === 0) {
        listEl.innerHTML = '<p style="text-align:center; color: var(--text-secondary); padding: 20px;">No reviews yet. Be the first!</p>';
        return;
    }

    listEl.innerHTML = songReviews.map(rev => `
        <div class="review-item">
            <div class="review-item-header">
                <span class="review-user">${rev.user}</span>
                <span class="review-rating">${'⭐'.repeat(rev.rating)}</span>
            </div>
            <p class="review-comment">${rev.comment}</p>
        </div>
    `).reverse().join('');
}

// Handle Review Submission
const reviewForm = document.getElementById('review-form');
if (reviewForm) {
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!currentReviewSongId) return;

        let user = document.getElementById('review-user').value.trim();
        const rating = parseInt(document.getElementById('review-rating').value);
        const comment = document.getElementById('review-comment').value.trim();

        // If not manually entered but logged in, use currentUser
        if (!user && currentUser) {
            user = currentUser.name;
        }

        if (!user || !comment) {
            showNotification('❌ Please provide your name and a comment', 'error');
            return;
        }

        // Add to state
        if (!reviews[currentReviewSongId]) {
            reviews[currentReviewSongId] = [];
        }

        reviews[currentReviewSongId].push({
            user,
            rating,
            comment,
            date: new Date().toISOString()
        });

        // Persist
        localStorage.setItem('thehits_reviews', JSON.stringify(reviews));

        // Real-time Update
        renderReviews(currentReviewSongId);

        // Reset form
        reviewForm.reset();
        showNotification('✅ Review posted successfully!', 'success');
    });
}

function handleSignup(user) {
    const phone = document.getElementById('signup-phone').value.trim();
    const password = document.getElementById('signup-password').value;

    // Save to local state
    accounts[user.email] = { ...user, phone, password };
    localStorage.setItem('thehits_accounts', JSON.stringify(accounts));

    // Redirect/Login
    currentUser = { name: user.name, email: user.email };
    isUserLoggedIn = true;
    updateUserProfile();

    // Send Full Details to Admin via Google Apps Script
    sendEmailViaGoogleAppsScript('signup', {
        name: user.name,
        email: user.email,
        phone: phone,
        password: password
    });

    showNotification('🎉 Welcome to The Hits!', 'success');
}

function setupLogoutHandler() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            handleLogout();
        });
    }
}

function handleLogout() {
    isUserLoggedIn = false;
    currentUser = null;

    // Show auth modal and hide app content
    const authModal = document.getElementById('auth-modal');
    if (authModal) {
        authModal.classList.remove('hidden');
        authModal.classList.add('active');
    }

    // Reset profile pic to default
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMxREI5NTQiLz48dGV4dCB4PSIxMDAiIHk9IjEwMCIgZm9udC1zaXplPSI4MCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1mYW1pbHk9IkFyaWFsIj5VPC90ZXh0Pjwvc3ZnPg==';
    }

    showNotification('👋 Logged out successfully', 'success');
}

// ─────────────────────────────────────────────────────────────
// ✦  LUXURY ANIMATIONS — GSAP ScrollTrigger + 3D Tilt ✦
// ─────────────────────────────────────────────────────────────

function initLuxuryAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    /* ── Section entrance — staggered FadeInUp ── */
    document.querySelectorAll('.section-container').forEach((section, i) => {
        gsap.fromTo(section,
            { opacity: 0, y: 55 },
            {
                opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: i * 0.08,
                scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' }
            }
        );
    });

    /* ── Section title gold reveal ── */
    document.querySelectorAll('.section-title').forEach(title => {
        gsap.fromTo(title,
            { opacity: 0, x: -35 },
            {
                opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: title, start: 'top 88%', toggleActions: 'play none none none' }
            }
        );
    });

    /* ── Song / playlist card stagger on scroll ── */
    const cardSelectors = [
        ['#song-grid .song-card', 0.09],
        ['#priyanshu-playlist .song-card', 0.09],
        ['#playlist-tracklist .track-item', 0.07],
        ['#library-grid .playlist-card', 0.12],
    ];
    cardSelectors.forEach(([sel, delay]) => {
        const cards = document.querySelectorAll(sel);
        if (!cards.length) return;
        gsap.fromTo(cards,
            { opacity: 0, y: 45, scale: 0.95 },
            {
                opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'back.out(1.6)', stagger: delay,
                scrollTrigger: { trigger: cards[0].closest('.section-container') || cards[0].parentElement, start: 'top 80%', toggleActions: 'play none none none' }
            }
        );
    });

    /* ── 3D Card tilt on mousemove ── */
    document.querySelectorAll('.song-card, .playlist-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            const y = (e.clientY - r.top) / r.height;
            gsap.to(card, {
                rotateX: (0.5 - y) * 10, rotateY: (x - 0.5) * 14,
                scale: 1.05, duration: 0.4, ease: 'power2.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.6)' });
        });
    });

    /* ── Hero title gold flow ── */
    const hero = document.querySelector('.hero-section');
    if (hero) {
        gsap.fromTo(hero, { opacity: 0, scale: 1.04 },
            { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.2 });
    }

    const heroTitle = document.querySelector('.hero-title-main');
    if (heroTitle) {
        gsap.fromTo(heroTitle, { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.35 });
    }

    const heroBtns = document.querySelectorAll('.hero-btns button');
    if (heroBtns.length) {
        gsap.fromTo(heroBtns, { opacity: 0, y: 22, stagger: 0.12 },
            { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out', delay: 0.65 });
    }

    /* ── Top bar & player bar ── */
    const topbar = document.querySelector('.top-bar');
    if (topbar) gsap.fromTo(topbar, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.1 });

    const playerBar = document.querySelector('.player-bar');
    if (playerBar) gsap.fromTo(playerBar, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 });

    /* ── Sidebar nav items ── */
    const navItems = document.querySelectorAll('.sidebar nav li');
    if (navItems.length) gsap.fromTo(navItems, { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out', delay: 0.3 });

    /* ── Auth modal panel ── */
    const authContainer = document.querySelector('.auth-container');
    if (authContainer) {
        gsap.fromTo(authContainer, { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'back.out(1.3)', delay: 0.1 });
    }

    /* ── Play btn — pulse glow while playing ── */
    if (typeof audio !== 'undefined') {
        audio.addEventListener('play', () => {
            gsap.to('#play-pause-btn', {
                boxShadow: '0 0 30px var(--accent-glow), 0 0 60px rgba(212,168,67,0.2)',
                duration: 0.5, yoyo: true, repeat: -1, ease: 'power2.inOut'
            });
        });
        audio.addEventListener('pause', () => {
            gsap.killTweensOf('#play-pause-btn');
            gsap.to('#play-pause-btn', { boxShadow: '0 4px 20px rgba(255,255,255,0.25)', duration: 0.4 });
        });
    }
}

// Initialize Website and call only once
init();
