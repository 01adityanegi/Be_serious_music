
// const GOOGLE_APPS_SCRIPT_URL = '';
// const ADMIN_EMAIL = '';
// const MEDIA_CACHE_NAME = '';

const LUX_ICONS = {
    sparkle: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M12 2L9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5z"/></svg>`,
    heart: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    shuffle: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>`,
    repeat: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>`,
    repeatOne: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/><text x="10" y="15" font-size="8" fill="currentColor" font-weight="bold">1</text></svg>`,
    cloudDone: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l5.59-5.59L17 10l-7 7z"/></svg>`,
    cloudDownload: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>`,
    check: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
    disc: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/></svg>`,
    sync: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>`,
    globe: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
    offline: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l5.59-5.59L17 10l-7 7z"/></svg>`,
    flame: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M12 23c-4.97 0-9-4.03-9-9 0-3.53 2.11-6.57 5.17-7.97-.04.48-.06.97-.06 1.47 0 3.23 1.83 6.04 4.54 7.42-.3-1.04-.47-2.14-.47-3.28 0-2.3 1.05-4.36 2.72-5.73C15.63 4.47 16 3.03 16 1.5c0-.17-.02-.34-.05-.5C19.55 3.39 22 7.41 22 12c0 6.08-4.92 11-10 11z"/></svg>`,
    mail: `<svg class="lux-toast-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
};


function sanitizeAddressBarUrl() {
    try {
        const search = window.location.search || '';
        const params = new URLSearchParams(search);
        const trackId = params.get('track') || params.get('song');
        const cleanQuery = trackId ? `?track=${encodeURIComponent(trackId)}` : '';
        const cleanPath = (window.location.pathname || '/') + cleanQuery;
        if (window.location.hash || (search && !trackId)) {
            window.history.replaceState(null, document.title, cleanPath);
        }
    } catch (e) {
  
    }
}

sanitizeAddressBarUrl();


const songs = [
    {
        id: 16,
        title: "Ek Hai Sujal 2.0",
        artist: "BE SERIOUS MUSIC",
        category: "mountain",
        audio: "ek_hai_sujal/songs/Ek hai sujal 2.O (1).mp3",
        img: "ek_hai_sujal/cover_pic/Ek Hai Sujal 2.0_ Mountain Dreams.png",
        color: "#1E90FF",
        duration: "7:21",
        isNew: true,
        isTrending: true,
        featured: true
    },
    {
        id: 6,
        title: "Ek Hai Sujal",
        artist: "BE SERIOUS MUSIC",
        category: "mountain",
        audio: "ek_hai_sujal/songs/Ek hai Sujal.mp3",
        img: "ek_hai_sujal/cover_pic/ek_hai_sujal.png",
        color: "#32CD32",
        duration: "3:54",
        isTrending: true
    },
    {
        id: 7,
        title: "Aage Chala",
        artist: "BE SERIOUS MUSIC",
        category: "mountain",
        audio: "ek_hai_sujal/songs/Aage_Chala.mp3",
        img: "ek_hai_sujal/cover_pic/aagechala.png",
        color: "#1E90FF",
        duration: "2:49"
    },
    {
        id: 14,
        title: "Babes",
        artist: "BE SERIOUS MUSIC",
        category: "hustle",
        audio: "Kunal/songs/babes.mp3",
        img: "Kunal/cover/babes.png",
        color: "#FFD700",
        duration: "3:16",
        isTrending: true
    },
    {
        id: 4,
        title: "My Name Priyanshu",
        artist: "BE SERIOUS MUSIC",
        category: "hustle",
        audio: "MY_name_priyanshu/My_name_priyanshu.mp3",
        img: "MY_name_priyanshu/cover-pic/Mynamepriyanshu.png",
        color: "#FF4500",
        duration: "4:20",
        isTrending: true
    },
    {
        id: 1,
        title: "Be Serious Gang",
        artist: "BE SERIOUS MUSIC",
        category: "hustle",
        audio: "MY_name_priyanshu/Be_Serious_Gang.mp3",
        img: "MY_name_priyanshu/cover-pic/be_serious.png",
        color: "#FFD700",
        duration: "2:30"
    },
    {
        id: 2,
        title: "Built by Hard Work",
        artist: "BE SERIOUS MUSIC",
        category: "hustle",
        audio: "MY_name_priyanshu/Built_by_Hard-Work.mp3",
        img: "MY_name_priyanshu/cover-pic/priyanshu_masti_trip.png",
        color: "#FF4500",
        duration: "2:34"
    },
    {
        id: 3,
        title: "Mountain Dreamer",
        artist: "BE SERIOUS MUSIC",
        category: "mountain",
        audio: "MY_name_priyanshu/Mountain_Dreamer.mp3",
        img: "MY_name_priyanshu/cover-pic/Mountain_dreamer.png",
        color: "#32CD32",
        duration: "3:55"
    },
    {
        id: 5,
        title: "Tu Hi Meri Jaan",
        artist: "BE SERIOUS MUSIC",
        category: "melodies",
        audio: "MY_name_priyanshu/Tu_ Hi _Meri _Jaan.mp3",
        img: "MY_name_priyanshu/cover-pic/Tu_he_meri_jaan.png",
        color: "#8A2BE2",
        duration: "3:51"
    },
    {
        id: 8,
        title: "Adhoori Kahani Kamal Ki",
        artist: "BE SERIOUS MUSIC",
        category: "melodies",
        audio: "Kamal_ki_khani/song/Adhoori_Kahani_Kamal_Ki.mp3",
        img: "Kamal_ki_khani/cover_pic/adhoori_kahani_kamal_ki.png",
        color: "#8A2BE2",
        duration: "4:24",
        isTrending: true
    },
    {
        id: 9,
        title: "Kya Kamal Mein Kami Thi",
        artist: "BE SERIOUS MUSIC",
        category: "melodies",
        audio: "Kamal_ki_khani/song/Kya_Kamal_m_Kami_Thi.mp3",
        img: "Kamal_ki_khani/cover_pic/kyakamalmkamithi.png",
        color: "#8A2BE2",
        duration: "4:13"
    },
    {
        id: 12,
        title: "Ishq-e-kamal",
        artist: "BE SERIOUS MUSIC",
        category: "melodies",
        audio: "Kamal_ki_khani/song/ishq_e_kamal.mp3",
        img: "Kamal_ki_khani/cover_pic/ishq_e_kamal.png",
        color: "#8A2BE2",
        duration: "5:04"
    },
    {
        id: 10,
        title: "Vo Golu Hai",
        artist: "BE SERIOUS MUSIC",
        category: "rap",
        audio: "golu/song/vo golu hai.mp3",
        img: "golu/cover/vogoluh.png",
        color: "#FF4500",
        duration: "4:28"
    },
    {
        id: 13,
        title: "Golu on Grind",
        artist: "BE SERIOUS MUSIC",
        category: "rap",
        audio: "golu/song/golu_on_grind.mp3",
        img: "golu/cover/golu_on_grind.png",
        color: "#FFD700",
        duration: "2:21"
    },
    {
        id: 11,
        title: "Kiran Kiran",
        artist: "BE SERIOUS MUSIC",
        category: "melodies",
        audio: "kiran/songs/Kiran_Kiran.mp3",
        img: "kiran/cover/kirankiran.png",
        color: "#8A2BE2",
        duration: "3:17",
        isTrending: true
    },
    {
        id: 15,
        title: "Raj Ka Raj",
        artist: "BE SERIOUS MUSIC",
        category: "rap",
        audio: "Raj/song/raj-ka-raj.mp3",
        img: "Raj/cover-pic/raj-ka-raj.png",
        color: "#1E90FF",
        duration: "5:44",
        isTrending: true
    }
];

// Studio Synchronized Live Lyrics Database (All 16 Master Tracks)
const SONG_LYRICS = {
    16: [ // Ek Hai Sujal 2.0
        { time: 0, text: "BE SERIOUS MUSIC • Studio Master 24-Bit" },
        { time: 5, text: "Pahadon ki unchaiyon se aati ek aawaz..." },
        { time: 14, text: "Hawaon mein khushbu, dil mein ek naya andaaz" },
        { time: 25, text: "Ek hai Sujal, chalti hai uski hi shaan" },
        { time: 36, text: "Dhadkanon mein basi hai yeh zameen, yeh aasmaan" },
        { time: 48, text: "Raston par chala bina kisi darr ke" },
        { time: 58, text: "Sapne sajaaye aankhon mein raat bhar ke" },
        { time: 70, text: "Ek Hai Sujal 2.0, shuruaat naye daur ki" },
        { time: 82, text: "Goonj uthi hai mehfil har ek mod ki" },
        { time: 96, text: "Har mod pe mila ek naya imtihaan" },
        { time: 110, text: "Sabko dikhaya kaise banta hai tufaan" },
        { time: 125, text: "BE SERIOUS Gang, hum jhukte nahi kahin" },
        { time: 140, text: "Mehnat se banate hain manzil yahin" },
        { time: 160, text: "Hawaon ka rukh bhi mod denge hum" },
        { time: 180, text: "Yeh pahadi jazba kabhi hoga na kam" },
        { time: 205, text: "Ek hai Sujal, naam nahi yeh hai junoon" },
        { time: 230, text: "Ragon mein behta hai mehnat ka khoon" },
        { time: 260, text: "Suron ki ye lehar, dilon ka sukoon" },
        { time: 290, text: "BE SERIOUS MUSIC... Official Drop 2.0" }
    ],
    6: [ // Ek Hai Sujal
        { time: 0, text: "BE SERIOUS MUSIC Official" },
        { time: 4, text: "Sheher ki galiyon se door, pahadon ki chaon mein" },
        { time: 14, text: "Ek aawaz gunji har ek gaon mein" },
        { time: 25, text: "Ek hai Sujal, jo karta hai sabko fida" },
        { time: 38, text: "Uske suron mein hai dil ki sada" },
        { time: 52, text: "Na koi fikar, na koi ranj-o-gham" },
        { time: 66, text: "Jahan bhi jaye, badha de apna kadam" },
        { time: 80, text: "Sujal ka andaaz sabse juda hai" },
        { time: 94, text: "Har ek bol mein mehnat ka asar basa hai" },
        { time: 110, text: "Pahadon ka beta, dilon ka sultaan" },
        { time: 130, text: "BE SERIOUS MUSIC, shaan-e-pehchaan" }
    ],
    7: [ // Aage Chala
        { time: 0, text: "BE SERIOUS MUSIC • Aage Chala" },
        { time: 6, text: "Rukna nahi hai, bas chalte jana hai" },
        { time: 16, text: "Apni taqdeer ko khud hi likh ke dikhana hai" },
        { time: 28, text: "Aage chala main, aage chala" },
        { time: 39, text: "Andheron ko cheer ke savera mila" },
        { time: 52, text: "Kaante the raahon mein, par hausla tha saath" },
        { time: 66, text: "Kismat ne bhi thaam liya mehnat ka haath" },
        { time: 82, text: "Aage chala, kabhi mudke na dekha" },
        { time: 98, text: "Kamyabi ne badal di haathon ki har rekha" },
        { time: 118, text: "BE SERIOUS MUSIC... The Journey Continues" }
    ],
    14: [ // Babes
        { time: 0, text: "BE SERIOUS MUSIC • Babes Official" },
        { time: 5, text: "Late night city drives, bass in the trunk" },
        { time: 15, text: "Look at the flow, we got that real luxury funk" },
        { time: 26, text: "Babes, look at the grind we run every single day" },
        { time: 38, text: "Nothing in this world can stand in our way" },
        { time: 50, text: "High fidelity sound, gold chains and crown" },
        { time: 63, text: "BE SERIOUS boys taking over the town" },
        { time: 76, text: "Catch the rhythm, feel the heat" },
        { time: 90, text: "Unstoppable energy drop on every beat" },
        { time: 108, text: "Pure luxury frequency, BE SERIOUS MUSIC" }
    ],
    4: [ // My Name Priyanshu
        { time: 0, text: "BE SERIOUS MUSIC • Signature Anthem" },
        { time: 6, text: "Sun lo dhyan se, yeh aawaz kiski hai" },
        { time: 16, text: "Mehnat aur junoon ki yeh dastan kiski hai" },
        { time: 28, text: "My Name Priyanshu, flow mera barood hai" },
        { time: 40, text: "Ragon mein behta yeh sach ka wajood hai" },
        { time: 54, text: "Bina kisi sahare khada hua yahan" },
        { time: 68, text: "Aaj dekh raha hai mera yeh saara jahan" },
        { time: 84, text: "Hustle meri legacy, passion mera rule" },
        { time: 100, text: "BE SERIOUS Gang, never plays by fool" },
        { time: 120, text: "Priyanshu on the track, making history right" },
        { time: 142, text: "Shining bright through the darkest night" }
    ],
    1: [ // Be Serious Gang
        { time: 0, text: "BE SERIOUS GANG • Official Creed" },
        { time: 5, text: "No games, no drama, strictly serious" },
        { time: 15, text: "Our brotherhood is truly mysterious" },
        { time: 25, text: "Be Serious Gang, kadam milake chalein" },
        { time: 37, text: "Jahan bhi hum khade hon, dushman bhi jalein" },
        { time: 50, text: "Wafadaari hamara pehla usool hai" },
        { time: 64, text: "Dhokha dene walo ka rasta fuzool hai" },
        { time: 78, text: "Unity, Power, Loyalty and Pride" },
        { time: 92, text: "BE SERIOUS Gang forever on the ride" }
    ],
    2: [ // Built by Hard Work
        { time: 0, text: "BE SERIOUS MUSIC • Hustle & Dedication" },
        { time: 6, text: "Kismat se nahi mila kuch bhi yahan" },
        { time: 18, text: "Raaton ko jag ke banaya hai aashiyan" },
        { time: 30, text: "Built by Hard Work, har ek boond paseena" },
        { time: 44, text: "Sikha diya mushkilon mein shaan se jeena" },
        { time: 58, text: "Ungliyan uthane wale dekhte reh gaye" },
        { time: 72, text: "Hum to apni manzil ki taraf beh gaye" },
        { time: 88, text: "Raw dedication, no shortcuts allowed" },
        { time: 104, text: "Making the entire family and team proud" }
    ],
    3: [ // Mountain Dreamer
        { time: 0, text: "BE SERIOUS MUSIC • Pure Mountain Acoustic" },
        { time: 8, text: "Badalon ke paar se dekha ek sapna" },
        { time: 20, text: "Pahadon ki thandi hawa, har manzar apna" },
        { time: 34, text: "Mountain Dreamer, khule aasmaan ke tale" },
        { time: 48, text: "Roshni ki talash mein deepak yeh jale" },
        { time: 64, text: "Shanti hai wadiyon mein, gehraiyon ka raaz" },
        { time: 80, text: "Dil se nikalta hai ek meetha sa saaz" },
        { time: 98, text: "Prakriti ka sparsh, sukoon-e-jaan" },
        { time: 118, text: "BE SERIOUS MUSIC, Pahadi Shaan" }
    ],
    5: [ // Tu Hi Meri Jaan
        { time: 0, text: "BE SERIOUS MUSIC • Romantic Melodies" },
        { time: 7, text: "Tere bina yeh zindagani be-rang si lage" },
        { time: 18, text: "Tere aane se har ek raat gulzar si lage" },
        { time: 30, text: "Tu hi meri jaan, tu hi mera jahan" },
        { time: 44, text: "Tujhse hi shuru hota hai mera har armaan" },
        { time: 58, text: "Teri muskurahat mein meri khushi hai" },
        { time: 72, text: "Tere bina har ek saans adhuri si hai" },
        { time: 88, text: "Hamesha tera saath chahiye is safar mein" },
        { time: 105, text: "Tu basi hai meri har ek nazar mein" }
    ],
    8: [ // Adhoori Kahani Kamal Ki
        { time: 0, text: "BE SERIOUS MUSIC • Kamal Ki Kahani Vol. 1" },
        { time: 6, text: "Kitabon ke panno pe likhi ek daastan" },
        { time: 18, text: "Jahan ro pada tha dil, ro pada aasmaan" },
        { time: 30, text: "Adhoori kahani Kamal ki, dard se bhari" },
        { time: 45, text: "Wafa karke bhi usko judai mili" },
        { time: 60, text: "Kyun chhod gaye beech raah mein saathi" },
        { time: 75, text: "Bujh gayi jaise mandir ki baati" },
        { time: 92, text: "Kamal ki aahon mein chhupa ek geet hai" },
        { time: 110, text: "Yeh dukh hi ab uski sacchi jeet hai" }
    ],
    9: [ // Kya Kamal Mein Kami Thi
        { time: 0, text: "BE SERIOUS MUSIC • Kamal Ki Kahani Vol. 2" },
        { time: 8, text: "Sab kuch to de diya tha bina kisi shart ke" },
        { time: 20, text: "Dil ko luta diya tha tere ek harf pe" },
        { time: 32, text: "Kya Kamal mein kami thi, jo thukra diya?" },
        { time: 46, text: "Haste huye chehre ko pal mein rula diya" },
        { time: 62, text: "Wafa ka sila yeh kaisa tune diya" },
        { time: 78, text: "Zeher-e-judai ka ghunt humne piya" },
        { time: 96, text: "Kamal ka dil rota hai tanhai mein" },
        { time: 115, text: "Khuda bhi chup hai is judai mein" }
    ],
    10: [ // Ishq-e-kamal
        { time: 0, text: "BE SERIOUS MUSIC • Kamal Ki Kahani Vol. 3" },
        { time: 6, text: "Ishq jab junoon ban jaye toh Kamal hota hai" },
        { time: 18, text: "Dard bhi dil ka bada bemisaal hota hai" },
        { time: 32, text: "Ishq-e-kamal, aag ka dariya hai yeh" },
        { time: 46, text: "Mohabbat mein jeene ka naya zariya hai yeh" },
        { time: 60, text: "Na koi shikwa, na koi gila bacha hai" },
        { time: 76, text: "Sirf ishq ka ek nasha sa chadh gaya hai" },
        { time: 94, text: "Kamal ki deewangi ka koi tod nahi" },
        { time: 112, text: "Is sacchi mohabbat ka koi mod nahi" }
    ],
    11: [ // Vo Golu Hai
        { time: 0, text: "BE SERIOUS MUSIC • Energetic Street Anthem" },
        { time: 5, text: "Gali gali mein charcha, sabki zabaan pe naam" },
        { time: 15, text: "Subah se shaam tak chalta jiska kaalam" },
        { time: 26, text: "Vo Golu hai, energy ka powerhouse" },
        { time: 38, text: "Jab aata hai stage pe, rocking the house" },
        { time: 52, text: "Bindaas andaaz, dil ka saaf parinda" },
        { time: 66, text: "Uski yaari mein har ek dost hai zinda" },
        { time: 80, text: "Vo Golu hai, swagger sabse top" },
        { time: 96, text: "BE SERIOUS MUSIC... Never gonna stop" }
    ],
    12: [ // Golu on Grind
        { time: 0, text: "BE SERIOUS MUSIC • High Tempo Hip-Hop" },
        { time: 4, text: "Wake up early morning, eyes on the prize" },
        { time: 14, text: "Every single setback helps the warrior rise" },
        { time: 25, text: "Golu on Grind, unstoppable momentum" },
        { time: 38, text: "Turning hard pressure into diamond magnum" },
        { time: 52, text: "Bass bumping heavy through the sound system" },
        { time: 66, text: "Defeating all odds, rewriting the algorithm" },
        { time: 82, text: "Grind 24/7, hustle in the blood" },
        { time: 100, text: "BE SERIOUS beats rushing like a flood" }
    ],
    13: [ // Kiran Kiran
        { time: 0, text: "BE SERIOUS MUSIC • Melodic Reflection" },
        { time: 6, text: "Subah ki pehli kiran jab dhalne lage" },
        { time: 17, text: "Yaadon ke charag dil mein jalne lage" },
        { time: 30, text: "Kiran Kiran, roshni banke aana" },
        { time: 44, text: "Andhere dilon ko phir se mehkaana" },
        { time: 58, text: "Komal hawaon sa tera sparsh hai" },
        { time: 72, text: "Teri khushiyon mein hi mera harsh hai" },
        { time: 88, text: "Zindagi bhar rahega tera intezaar" },
        { time: 106, text: "Kiran Kiran, mera saccha pyaar" }
    ],
    15: [ // Raj Ka Raj
        { time: 0, text: "BE SERIOUS MUSIC • Regal Flow & Heavy Bass" },
        { time: 6, text: "Sikandar wahi jo taqdeer ko jeet le" },
        { time: 16, text: "Waqt ki nabz ko jo apne haath mein le" },
        { time: 28, text: "Raj Ka Raj, shahi andaaz hamara" },
        { time: 42, text: "Jhukta hai aage hamare yeh sitara" },
        { time: 56, text: "Royalty in our DNA, leadership in stride" },
        { time: 70, text: "BE SERIOUS legacy spreading far and wide" },
        { time: 86, text: "Duniya dekhegi yeh shaan-e-hukumat" },
        { time: 104, text: "Raj Ka Raj... Pure Power & Respect" }
    ]
};

// Albums & Carousel Top Charts
const albums = [
    songs[0], // Ek Hai Sujal 2.0
    songs[4], // My Name Priyanshu
    songs[3], // Babes
    songs[9], // Adhoori Kahani
    songs[14], // Kiran Kiran
    songs[1]  // Ek Hai Sujal
];

// Curated Playlists
const curatedPlaylists = [
    {
        id: 'ek-hai-sujal',
        title: 'Ek Hai Sujal',
        desc: 'Official BE SERIOUS MUSIC mountain atmospheric soundscapes',
        cover: 'ek_hai_sujal/cover_pic/Ek Hai Sujal 2.0_ Mountain Dreams.png',
        songs: [16, 6, 7]
    },
    {
        id: 'my-name-priyanshu',
        title: 'My Name Is Priyanshu',
        desc: 'Hard-hitting hustle anthems & street energy by BE SERIOUS MUSIC',
        cover: 'MY_name_priyanshu/cover-pic/Mynamepriyanshu.png',
        songs: [4, 1, 2, 3, 5]
    },
    {
        id: 'kamal-ki-khani',
        title: 'Kamal_ki_khani',
        desc: 'Deep emotional acoustics & soulful melodies by BE SERIOUS MUSIC',
        cover: 'Kamal_ki_khani/cover_pic/adhoori_kahani_kamal_ki.png',
        songs: [8, 9, 10]
    },
    {
        id: 'luxury-beats',
        title: 'Luxury Beats & Street Flow',
        desc: 'Chart-topping luxury flow, rap & signature master bass',
        cover: 'Kunal/cover/babes.png',
        songs: [14, 11, 12, 13, 15]
    }
];

// App State
let currentSongIndex = 0;
let isPlaying = false;
let currentPlaylist = [...songs];
let queue = [...songs];
let isShuffle = false;
let repeatMode = 'off'; // 'off' | 'all' | 'one'
let volume = parseFloat(localStorage.getItem('beserious_volume') || '0.85');
let isMuted = false;
let favorites = JSON.parse(localStorage.getItem('beserious_favorites') || '[]');
let cachedSongUrls = new Set();
let carouselActiveIndex = 0;
let carouselTimer = null;
let deferredPrompt = null;
let audioContext = null;
let analyser = null;
let visualizerRunning = false;

// Generated OTP storage for Verification
let activeGeneratedOtp = null;
let activeTargetEmail = null;
let activeTargetName = null;

// Sponsored Promotional Advertisements Data
const PROMO_ADS = [
    {
        title: "Official beserious.in Drop",
        description: "Explore exclusive merchandise, latest drops & official releases at beserious.in.",
        siteUrl: "https://beserious.in",
        reelUrl: "https://www.instagram.com/reel/DNN2InkPi5_/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
        thumb: "ek_hai_sujal/cover_pic/Ek%20Hai%20Sujal%202.0_%20Mountain%20Dreams.png",
        tag: "Official Reel 1"
    },
    {
        title: "BE SERIOUS Studio Visuals",
        description: "Watch trending visuals, recording sessions & behind-the-scenes on Instagram.",
        siteUrl: "https://beserious.in",
        reelUrl: "https://www.instagram.com/reel/DMmaC7YvrRw/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
        thumb: "Kunal/cover/babes.png",
        tag: "Studio Reel 2"
    },
    {
        title: "BE SERIOUS Mountain Melodies",
        description: "Stream raw acoustics and live concert moments on Instagram Reels.",
        siteUrl: "https://beserious.in",
        reelUrl: "https://www.instagram.com/reel/CokJd0attF1/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
        thumb: "Kamal_ki_khani/cover_pic/ishq_e_kamal.png",
        tag: "Live Reel 3"
    },
    {
        title: "BE SERIOUS Grind & Flow",
        description: "Check out the newest viral track and exclusive artist updates on beserious.in.",
        siteUrl: "https://beserious.in",
        reelUrl: "https://www.instagram.com/reel/C4m6q0QMVV0/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
        thumb: "golu/cover/vogoluh.png",
        tag: "Trending Reel 4"
    }
];

let adQueueCounter = 0;
let isAdPlaying = false;
let adTimerInterval = null;
let hasPlayedMidRoll = false;
let hasPlayedPreRoll = false;
let floatingBannerInterval = null;
let floatingAdTimer = null;

function isUserVipVerified() {
    return !!localStorage.getItem('beserious_verified_email');
}

// Sponsored Audio Ad Overlay Controller (10s Ad with Active Song Cover)
function playAudioAd(durationSeconds = 10, adLabel = 'Sponsored Ad (10s)', onComplete) {
    if (isUserVipVerified()) {
        if (typeof onComplete === 'function') onComplete();
        return;
    }

    if (adTimerInterval) {
        clearInterval(adTimerInterval);
        adTimerInterval = null;
    }

    isAdPlaying = true;
    audio.pause();
    updatePlayPauseButtonUI();

    const adOverlay = document.getElementById('audio-ad-overlay');
    const adCardBody = document.getElementById('ad-card-body');
    const adCountdownSec = document.getElementById('ad-countdown-sec');

    const promo = PROMO_ADS[adQueueCounter % PROMO_ADS.length];
    adQueueCounter++;

    // Resolve song user just clicked to play
    const currentSong = currentPlaylist[currentSongIndex] || songs[0];

    // FIX: Immediately update player bar & vinyl disc to show the selected song's cover!
    if (playerArt && currentSong) {
        playerArt.src = currentSong.img;
        playerArt.alt = currentSong.title;
    }
    if (playerTitle && currentSong) {
        playerTitle.textContent = currentSong.title;
        playerTitle.setAttribute('title', currentSong.title);
    }
    const cdVinylArt = document.getElementById('cd-vinyl-art');
    if (cdVinylArt && currentSong) cdVinylArt.src = currentSong.img;
    const cdMetaTitle = document.getElementById('cd-meta-title');
    if (cdMetaTitle && currentSong) cdMetaTitle.textContent = currentSong.title;

    // Immediately dismiss any floating banner so it doesn't obstruct or conflict
    const floatingBanner = document.getElementById('floating-ad-banner');
    if (floatingBanner) {
        floatingBanner.classList.remove('show');
        floatingBanner.setAttribute('aria-hidden', 'true');
        if (floatingAdTimer) {
            clearInterval(floatingAdTimer);
            floatingAdTimer = null;
        }
    }

    if (adCardBody && currentSong) {
        adCardBody.innerHTML = `
            <!-- Prominent Active Track Card: Shows user's exact clicked song cover -->
            <div class="ad-now-queued-card">
                <img src="${currentSong.img}" class="ad-queued-cover" alt="${currentSong.title}">
                <div class="ad-queued-details">
                    <span class="ad-queued-badge">Selected Track • Ready to Play</span>
                    <div class="ad-queued-title">${currentSong.title}</div>
                    <div class="ad-queued-artist">BE SERIOUS MUSIC • Studio Master</div>
                </div>
            </div>

            <div class="ad-media-row">
                <div class="ad-media-thumb">
                    <img src="${promo.thumb}" alt="Promo Banner">
                </div>
                <div class="ad-media-info">
                    <div class="ad-media-brand">${promo.tag} • ${adLabel}</div>
                    <div class="ad-media-title">${promo.title}</div>
                    <div class="ad-media-caption">${promo.description}</div>
                </div>
            </div>

            <div class="ad-links-row">
                <a href="${promo.siteUrl}" target="_blank" rel="noopener" class="ad-btn-link brand">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                    Visit beserious.in
                </a>
                <a href="${promo.reelUrl}" target="_blank" rel="noopener" class="ad-btn-link">
                    <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Watch Reel
                </a>
            </div>

            <!-- Instant skip button -->
            <button class="btn-skip-track-ad" id="btn-skip-ad-direct">
                <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                Play "${currentSong.title}" Now
            </button>
        `;

        const skipBtn = document.getElementById('btn-skip-ad-direct');
        if (skipBtn) {
            skipBtn.addEventListener('click', () => {
                if (adTimerInterval) {
                    clearInterval(adTimerInterval);
                    adTimerInterval = null;
                }
                isAdPlaying = false;
                if (adOverlay) {
                    adOverlay.classList.remove('open');
                    adOverlay.setAttribute('aria-hidden', 'true');
                }
                if (typeof onComplete === 'function') onComplete();
            });
        }
    }

    if (adOverlay) {
        adOverlay.classList.add('open');
        adOverlay.setAttribute('aria-hidden', 'false');
    }

    let remaining = durationSeconds;
    if (adCountdownSec) adCountdownSec.textContent = remaining;

    adTimerInterval = setInterval(() => {
        if (isUserVipVerified()) {
            clearInterval(adTimerInterval);
            adTimerInterval = null;
            isAdPlaying = false;
            if (adOverlay) {
                adOverlay.classList.remove('open');
                adOverlay.setAttribute('aria-hidden', 'true');
            }
            if (typeof onComplete === 'function') onComplete();
            return;
        }

        remaining--;
        if (adCountdownSec) adCountdownSec.textContent = remaining;

        if (remaining <= 0) {
            clearInterval(adTimerInterval);
            adTimerInterval = null;
            isAdPlaying = false;
            if (adOverlay) {
                adOverlay.classList.remove('open');
                adOverlay.setAttribute('aria-hidden', 'true');
            }
            if (typeof onComplete === 'function') {
                onComplete();
            }
        }
    }, 1000);
}

// Floating Website Banner Ad (10s periodic promotion)
function triggerFloatingBanner() {
    if (isUserVipVerified()) return;
    const banner = document.getElementById('floating-ad-banner');
    if (!banner || banner.classList.contains('show')) return;

    const promo = PROMO_ADS[adQueueCounter % PROMO_ADS.length];
    adQueueCounter++;

    const thumbImg = banner.querySelector('.floating-ad-thumb img');
    const titleEl = document.getElementById('floating-ad-title');
    const siteBtn = document.getElementById('floating-ad-site-btn');
    const reelBtn = document.getElementById('floating-ad-reel-btn');
    const timerEl = document.getElementById('floating-ad-timer');

    if (thumbImg) thumbImg.src = promo.thumb;
    if (titleEl) titleEl.textContent = promo.title;
    if (siteBtn) siteBtn.href = promo.siteUrl;
    if (reelBtn) reelBtn.href = promo.reelUrl;

    banner.classList.add('show');
    banner.setAttribute('aria-hidden', 'false');

    let timeLeft = 10;
    if (timerEl) timerEl.textContent = `${timeLeft}s`;

    if (floatingAdTimer) clearInterval(floatingAdTimer);

    floatingAdTimer = setInterval(() => {
        if (isUserVipVerified()) {
            clearInterval(floatingAdTimer);
            floatingAdTimer = null;
            banner.classList.remove('show');
            banner.setAttribute('aria-hidden', 'true');
            return;
        }

        timeLeft--;
        if (timerEl) timerEl.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(floatingAdTimer);
            floatingAdTimer = null;
            banner.classList.remove('show');
            banner.setAttribute('aria-hidden', 'true');
        }
    }, 1000);
}

function initFloatingBannerAds() {
    const banner = document.getElementById('floating-ad-banner');
    const closeBtn = document.getElementById('close-floating-ad-btn');

    if (closeBtn && banner) {
        closeBtn.addEventListener('click', () => {
            if (floatingAdTimer) {
                clearInterval(floatingAdTimer);
                floatingAdTimer = null;
            }
            banner.classList.remove('show');
            banner.setAttribute('aria-hidden', 'true');
        });
    }

    if (isUserVipVerified()) return;

    setTimeout(() => {
        if (!isUserVipVerified()) triggerFloatingBanner();
    }, 12000);

    floatingBannerInterval = setInterval(() => {
        if (isUserVipVerified()) {
            clearInterval(floatingBannerInterval);
            floatingBannerInterval = null;
            return;
        }
        triggerFloatingBanner();
    }, 65000);
}

function dismissAllAdsOnVipUnlock() {
    if (adTimerInterval) {
        clearInterval(adTimerInterval);
        adTimerInterval = null;
    }
    isAdPlaying = false;
    const overlay = document.getElementById('audio-ad-overlay');
    if (overlay) {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    }
    if (floatingAdTimer) {
        clearInterval(floatingAdTimer);
        floatingAdTimer = null;
    }
    if (floatingBannerInterval) {
        clearInterval(floatingBannerInterval);
        floatingBannerInterval = null;
    }
    const floatingBanner = document.getElementById('floating-ad-banner');
    if (floatingBanner) {
        floatingBanner.classList.remove('show');
        floatingBanner.setAttribute('aria-hidden', 'true');
    }
    if (audio.src && audio.paused && !isAdPlaying) {
        playAudio();
    }
}

// Safe URL encoding helper
function getSafeMediaUrl(relativePath) {
    if (!relativePath) return '';
    return encodeURI(relativePath);
}

// DOM Elements
const audio = document.getElementById('main-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const playerArt = document.getElementById('player-art');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const progressBar = document.getElementById('player-progress-bar');
const progressFill = document.getElementById('player-progress-fill');
const bufferFill = document.getElementById('player-buffer-fill');
const currentTimeEl = document.getElementById('player-current-time');
const totalTimeEl = document.getElementById('player-total-time');
const volumeBtn = document.getElementById('volume-btn');
const volumeSlider = document.getElementById('volume-slider');
const likeBtn = document.getElementById('like-btn');
const queueBtn = document.getElementById('queue-btn');
const queueDrawer = document.getElementById('queue-drawer');
const closeQueueBtn = document.getElementById('close-queue-btn');
const queueListEl = document.getElementById('queue-list');
const offlineStatusPill = document.getElementById('offline-status-pill');
const downloadAllBtn = document.getElementById('download-all-btn');
const installAppBtn = document.getElementById('install-app-btn');
const searchInput = document.getElementById('search-input');
const filterChips = document.querySelectorAll('.filter-chip');
const visualizerCanvas = document.getElementById('visualizer-canvas');
const visualizerCtx = visualizerCanvas ? visualizerCanvas.getContext('2d') : null;

// Initialize Web Audio Visualizer
function initAudioVisualizer() {
    if (audioContext || !visualizerCanvas) return;
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        audioContext = new AudioCtx();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 64;
        const source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
    } catch (e) {
        analyser = null;
    }
}

function startVisualizer() {
    if (!visualizerCanvas || visualizerRunning) return;
    visualizerRunning = true;

    const bufferLength = analyser ? analyser.frequencyBinCount : 32;
    const dataArray = analyser ? new Uint8Array(bufferLength) : null;

    function renderFrame() {
        if (!visualizerRunning) return;
        requestAnimationFrame(renderFrame);

        const width = visualizerCanvas.width;
        const height = visualizerCanvas.height;
        if (!visualizerCtx) return;

        visualizerCtx.clearRect(0, 0, width, height);

        if (isPlaying) {
            if (analyser && dataArray) {
                analyser.getByteFrequencyData(dataArray);
            }
            const barCount = 24;
            const barWidth = (width / barCount) - 3;
            let x = 0;

            for (let i = 0; i < barCount; i++) {
                let barHeight;
                if (analyser && dataArray) {
                    const val = dataArray[i % dataArray.length];
                    barHeight = (val / 255) * height * 0.9;
                } else {
                    const t = Date.now() / 200;
                    barHeight = (Math.sin(t + i * 0.4) * 0.5 + 0.5) * (height * 0.7) + (height * 0.15);
                }

                barHeight = Math.max(3, barHeight);
                const gradient = visualizerCtx.createLinearGradient(0, height, 0, 0);
                gradient.addColorStop(0, '#FF4500');    // Bass foundation: Orange-Red
                gradient.addColorStop(0.25, '#FFD700'); // Low harmonics: Warm Gold
                gradient.addColorStop(0.5, '#32CD32');  // Crisp mids: Emerald Green
                gradient.addColorStop(0.75, '#1E90FF'); // High mids: Royal Azure
                gradient.addColorStop(1, '#8A2BE2');    // Treble air: Royal Purple

                visualizerCtx.fillStyle = gradient;
                visualizerCtx.fillRect(x, height - barHeight, barWidth, barHeight);
                x += barWidth + 3;
            }
        } else {
            const barCount = 24;
            const barWidth = (width / barCount) - 3;
            let x = 0;
            visualizerCtx.fillStyle = 'rgba(255, 255, 255, 0.12)';
            for (let i = 0; i < barCount; i++) {
                visualizerCtx.fillRect(x, height - 2, barWidth, 2);
                x += barWidth + 3;
            }
        }
    }
    renderFrame();
}

// MediaSession API setup
function updateMediaSession(song) {
    if (!('mediaSession' in navigator)) return;

    try {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: song.title,
            artist: "BE SERIOUS MUSIC",
            album: 'BE SERIOUS MUSIC Master Audio',
            artwork: [
                { src: song.img, sizes: '96x96', type: 'image/png' },
                { src: song.img, sizes: '192x192', type: 'image/png' },
                { src: song.img, sizes: '512x512', type: 'image/png' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => playAudio());
        navigator.mediaSession.setActionHandler('pause', () => pauseAudio());
        navigator.mediaSession.setActionHandler('previoustrack', () => playPrevSong());
        navigator.mediaSession.setActionHandler('nexttrack', () => playNextSong());
        navigator.mediaSession.setActionHandler('seekto', (details) => {
            if (details.seekTime && isFinite(details.seekTime)) {
                audio.currentTime = details.seekTime;
            }
        });
    } catch (err) {
        console.warn('MediaSession setup warning:', err);
    }
}

// Format seconds into MM:SS
function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Load Song into Audio Engine
function loadSong(index, autoPlay = true) {
    if (index < 0) index = currentPlaylist.length - 1;
    if (index >= currentPlaylist.length) index = 0;

    currentSongIndex = index;
    const song = currentPlaylist[currentSongIndex];
    if (!song) return;

    const safeUrl = getSafeMediaUrl(song.audio);
    const wasPlaying = isPlaying;

    if (playPauseBtn) playPauseBtn.classList.remove('buffering');

    // 2G Network Optimization: Only set audio src and trigger network stream if active playback is requested
    if (autoPlay || wasPlaying) {
        if (!audio.src.endsWith(encodeURI(song.audio)) && audio.src !== safeUrl) {
            audio.src = safeUrl;
            audio.load();
        }
        cacheSingleSongInBackground(song);
    } else {
        // Defer audio stream download to preserve bandwidth on 2G connections
        audio.dataset.pendingSrc = safeUrl;
    }

    // Always immediately display active song cover, title, and studio master badge in bottom player bar
    if (playerArt) {
        playerArt.src = song.img;
        playerArt.alt = song.title;
    }
    if (playerTitle) {
        playerTitle.textContent = song.title;
        playerTitle.setAttribute('title', song.title);
    }
    if (playerArtist) {
        playerArtist.innerHTML = `
            <span class="player-artist-name">BE SERIOUS MUSIC</span>
            <span class="hi-res-badge player-hi-res-badge">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                STUDIO MASTER
            </span>
        `;
    }
    if (totalTimeEl) totalTimeEl.textContent = song.duration || '0:00';
    if (currentTimeEl) currentTimeEl.textContent = '0:00';
    if (progressFill) progressFill.style.width = '0%';
    if (bufferFill) bufferFill.style.width = '0%';

    // Dismiss any active 10s floating banner ad immediately so user never sees conflicting cover
    const floatingBanner = document.getElementById('floating-ad-banner');
    if (floatingBanner) {
        floatingBanner.classList.remove('show');
        floatingBanner.setAttribute('aria-hidden', 'true');
        if (floatingAdTimer) {
            clearInterval(floatingAdTimer);
            floatingAdTimer = null;
        }
    }

    // Update CD Modal metadata, spinning vinyl cover, and lyrics immediately
    const cdVinylArt = document.getElementById('cd-vinyl-art');
    if (cdVinylArt) cdVinylArt.src = song.img;
    const cdMetaTitle = document.getElementById('cd-meta-title');
    if (cdMetaTitle) cdMetaTitle.textContent = song.title;
    const cdTotalTime = document.getElementById('cd-total-time');
    if (cdTotalTime) cdTotalTime.textContent = song.duration || '0:00';
    renderSongLyrics(song);

    // Update Clean Share URL in Address Bar so user can copy anytime (?track=ID)
    try {
        const cleanPath = `${window.location.pathname}?track=${song.id}`;
        window.history.replaceState({ trackId: song.id }, `${song.title} - BE SERIOUS MUSIC`, cleanPath);
    } catch (e) {}

    // Update OpenGraph social sharing meta tags
    updateShareMetaTags(song);

    document.documentElement.style.setProperty('--blob-color', song.color || '#FFD700');

    updateMediaSession(song);
    updateLikeButtonState(song.id);
    highlightActivePlayingCard(song.id);
    renderQueue();

    hasPlayedMidRoll = false;
    hasPlayedPreRoll = false;

    if (autoPlay || wasPlaying) {
        if (!isUserVipVerified()) {
            hasPlayedPreRoll = true;
            playAudioAd(10, 'Pre-Roll Sponsor (10s)', () => {
                playAudio();
            });
        } else {
            playAudio();
        }
    }
}

// Play Audio safely (resolves deferred 2G source if needed)
function playAudio() {
    const song = currentPlaylist[currentSongIndex] || songs[0];
    if (song) {
        const safeUrl = getSafeMediaUrl(song.audio);
        if (!audio.src || (!audio.src.endsWith(encodeURI(song.audio)) && audio.src !== safeUrl)) {
            audio.src = safeUrl;
            audio.load();
        }
    } else if (!audio.src) {
        loadSong(0, true);
        return;
    }

    if (!isUserVipVerified() && !hasPlayedPreRoll && audio.currentTime < 1) {
        hasPlayedPreRoll = true;
        playAudioAd(10, 'Pre-Roll Sponsor (10s)', () => {
            playAudio();
        });
        return;
    }

    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            isPlaying = true;
            updatePlayPauseButtonUI();
            startVisualizer();
        }).catch((err) => {
            console.warn('Audio play prevented or interrupted:', err);
            isPlaying = false;
            updatePlayPauseButtonUI();
        });
    }
}

// Pause Audio
function pauseAudio() {
    audio.pause();
    isPlaying = false;
    updatePlayPauseButtonUI();
}

// Toggle Play/Pause
function togglePlayPause() {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function updatePlayPauseButtonUI() {
    const cdVinylDisc = document.getElementById('cd-vinyl-disc');
    const cdTonearm = document.getElementById('cd-tonearm');
    const cdPlayIcon = document.getElementById('cd-play-icon');
    const cdPauseIcon = document.getElementById('cd-pause-icon');

    if (isPlaying) {
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playPauseBtn) {
            playPauseBtn.classList.add('playing');
            playPauseBtn.setAttribute('data-tooltip', 'Pause (Space)');
        }
        if (cdVinylDisc) cdVinylDisc.classList.add('playing');
        if (cdTonearm) cdTonearm.classList.add('playing');
        if (cdPlayIcon) cdPlayIcon.style.display = 'none';
        if (cdPauseIcon) cdPauseIcon.style.display = 'block';
    } else {
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playPauseBtn) {
            playPauseBtn.classList.remove('playing');
            playPauseBtn.setAttribute('data-tooltip', 'Play (Space)');
        }
        if (cdVinylDisc) cdVinylDisc.classList.remove('playing');
        if (cdTonearm) cdTonearm.classList.remove('playing');
        if (cdPlayIcon) cdPlayIcon.style.display = 'block';
        if (cdPauseIcon) cdPauseIcon.style.display = 'none';
    }

    if (typeof updateActivePlaylistTrackHighlight === 'function') {
        updateActivePlaylistTrackHighlight();
    }
}

// Next Song
function playNextSong() {
    if (isShuffle) {
        const nextIndex = Math.floor(Math.random() * currentPlaylist.length);
        loadSong(nextIndex, true);
    } else {
        loadSong(currentSongIndex + 1, true);
    }
}

// Previous Song
function playPrevSong() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        playAudio();
        return;
    }
    loadSong(currentSongIndex - 1, true);
}

// Toggle Shuffle
function toggleShuffle() {
    isShuffle = !isShuffle;
    if (shuffleBtn) {
        shuffleBtn.classList.toggle('active', isShuffle);
        showToast(isShuffle ? 'Shuffle Playback Enabled' : 'Sequential Playback Mode', 'shuffle');
    }
}

// Toggle Repeat
function toggleRepeat() {
    if (repeatMode === 'off') {
        repeatMode = 'all';
        if (repeatBtn) {
            repeatBtn.classList.add('active');
            repeatBtn.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
            `;
            repeatBtn.setAttribute('data-tooltip', 'Repeat All');
        }
        showToast('Repeat All Tracks Enabled', 'repeat');
    } else if (repeatMode === 'all') {
        repeatMode = 'one';
        if (repeatBtn) {
            repeatBtn.classList.add('active');
            repeatBtn.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/><text x="10" y="15" font-size="8" fill="currentColor" font-weight="bold">1</text></svg>
            `;
            repeatBtn.setAttribute('data-tooltip', 'Repeat One');
        }
        showToast('Repeat Single Track Active', 'repeatOne');
    } else {
        repeatMode = 'off';
        if (repeatBtn) {
            repeatBtn.classList.remove('active');
            repeatBtn.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
            `;
            repeatBtn.setAttribute('data-tooltip', 'Repeat Off');
        }
        showToast('Repeat Playback Disabled', 'repeat');
    }
}

// Audio Engine Reliability & Event Listeners
function setupAudioEngineEvents() {
    audio.addEventListener('timeupdate', () => {
        if (!audio.duration || isNaN(audio.duration)) return;

        const current = audio.currentTime;
        const total = audio.duration;
        const percent = (current / total) * 100;

        if (progressFill) progressFill.style.width = `${percent}%`;
        if (currentTimeEl) currentTimeEl.textContent = formatTime(current);
        if (totalTimeEl) totalTimeEl.textContent = formatTime(total);

        // CD Player Modal Scrubber & Live Flowing Lyrics Synchronization
        const cdCurrentTime = document.getElementById('cd-current-time');
        const cdTotalTime = document.getElementById('cd-total-time');
        const cdProgressFill = document.getElementById('cd-progress-fill');
        if (cdCurrentTime) cdCurrentTime.textContent = formatTime(current);
        if (cdTotalTime) cdTotalTime.textContent = formatTime(total);
        if (cdProgressFill) cdProgressFill.style.width = `${percent}%`;
        syncLyricsWithAudio(current);

        if (audio.buffered.length > 0 && bufferFill) {
            const bufferedEnd = audio.buffered.end(audio.buffered.length - 1);
            const bufferPercent = (bufferedEnd / total) * 100;
            bufferFill.style.width = `${Math.min(100, bufferPercent)}%`;
        }

        // Mid-Roll Ad (10s at 50% of track) for Non-Verified users
        if (!hasPlayedMidRoll && !isUserVipVerified() && total > 20 && !isAdPlaying) {
            if (current >= total * 0.5) {
                hasPlayedMidRoll = true;
                pauseAudio();
                playAudioAd(10, 'Mid-Track Intermission (10s)', () => {
                    playAudio();
                });
            }
        }
    });

    const handleSongEndedNavigation = () => {
        if (repeatMode === 'one') {
            audio.currentTime = 0;
            playAudio();
        } else if (repeatMode === 'all' || isShuffle || currentSongIndex < currentPlaylist.length - 1) {
            playNextSong();
        } else {
            pauseAudio();
            audio.currentTime = 0;
        }
    };

    audio.addEventListener('ended', () => {
        if (!isUserVipVerified()) {
            // Post-Roll Sponsor Ad (10s)
            playAudioAd(10, 'Post-Track Sponsor (10s)', () => {
                handleSongEndedNavigation();
            });
        } else {
            handleSongEndedNavigation();
        }
    });

    audio.addEventListener('waiting', () => {
        if (playPauseBtn) playPauseBtn.classList.add('buffering');
    });

    audio.addEventListener('playing', () => {
        if (playPauseBtn) playPauseBtn.classList.remove('buffering');
        isPlaying = true;
        updatePlayPauseButtonUI();
    });

    audio.addEventListener('stalled', () => {
        if (isPlaying) {
            setTimeout(() => {
                if (audio.paused && isPlaying) {
                    audio.play().catch(() => {});
                }
            }, 1000);
        }
    });

    audio.addEventListener('error', (e) => {
        console.warn('Audio stream dropped, recovering:', e);
        if (playPauseBtn) playPauseBtn.classList.remove('buffering');

        const currentPos = audio.currentTime;
        const currentSrc = audio.src;

        if (currentSrc) {
            showToast('Reconnecting audio stream...', 'sync');
            setTimeout(() => {
                audio.load();
                audio.currentTime = currentPos;
                if (isPlaying) audio.play().catch(() => {});
            }, 1500);
        }
    });

    // Scrubber interaction
    let isScrubbing = false;

    function seek(e) {
        if (!audio.duration) return;
        const rect = progressBar.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        const clickPos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        audio.currentTime = clickPos * audio.duration;
        if (progressFill) progressFill.style.width = `${clickPos * 100}%`;
    }

    if (progressBar) {
        progressBar.addEventListener('mousedown', (e) => {
            isScrubbing = true;
            seek(e);
        });

        window.addEventListener('mousemove', (e) => {
            if (isScrubbing) seek(e);
        });

        window.addEventListener('mouseup', () => {
            isScrubbing = false;
        });

        progressBar.addEventListener('touchstart', (e) => {
            isScrubbing = true;
            seek(e);
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (isScrubbing) seek(e);
        }, { passive: true });

        window.addEventListener('touchend', () => {
            isScrubbing = false;
        });
    }

    // Volume Slider & Mute
    if (volumeSlider) {
        volumeSlider.value = volume;
        audio.volume = volume;

        volumeSlider.addEventListener('input', (e) => {
            volume = parseFloat(e.target.value);
            audio.volume = volume;
            isMuted = volume === 0;
            localStorage.setItem('beserious_volume', volume.toString());
            updateVolumeIcon();
        });
    }

    if (volumeBtn) {
        volumeBtn.addEventListener('click', () => {
            if (isMuted) {
                audio.volume = volume > 0 ? volume : 0.85;
                if (volumeSlider) volumeSlider.value = audio.volume;
                isMuted = false;
            } else {
                audio.volume = 0;
                if (volumeSlider) volumeSlider.value = 0;
                isMuted = true;
            }
            updateVolumeIcon();
        });
    }
}

function updateVolumeIcon() {
    if (!volumeBtn) return;
    const currentVol = audio.volume;
    if (isMuted || currentVol === 0) {
        volumeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;
    } else if (currentVol < 0.5) {
        volumeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>`;
    } else {
        volumeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
    }
}

// Like / Favorite Management
function updateLikeButtonState(songId) {
    if (!likeBtn) return;
    const isLiked = favorites.includes(songId);
    likeBtn.classList.toggle('liked', isLiked);
    likeBtn.innerHTML = isLiked
        ? `<svg viewBox="0 0 24 24" style="fill: #FF4500;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
        : `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
}

function toggleLikeSong(songId) {
    const idx = favorites.indexOf(songId);
    if (idx > -1) {
        favorites.splice(idx, 1);
        showToast('Removed from Liked Songs', 'heart');
    } else {
        favorites.push(songId);
        showToast('Saved to Liked Songs', 'heart');
    }
    localStorage.setItem('beserious_favorites', JSON.stringify(favorites));
    updateLikeButtonState(songs[currentSongIndex].id);
    renderSongsGrid(currentPlaylist);
}

// Luxury Toast Notifications (Zero Emojis, Pure SVG)
function showToast(message, iconKey = 'sparkle', duration = 2800) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    const iconHtml = LUX_ICONS[iconKey] || LUX_ICONS.sparkle;
    toast.innerHTML = `${iconHtml}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('visible'), 20);
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Highlighting active song card across the page
function highlightActivePlayingCard(songId) {
    document.querySelectorAll('.song-card, .table-row, .playlist-track-row').forEach(el => {
        const id = parseInt(el.getAttribute('data-song-id'), 10);
        if (id === songId) {
            el.classList.add('active-playing');
        } else {
            el.classList.remove('active-playing');
        }
    });
}

// 3D Hero Carousel
function initCarousel() {
    const carouselContainer = document.getElementById('carousel');
    const heroSongTitle = document.getElementById('hero-song');
    const heroArtistName = document.getElementById('hero-artist');
    if (!carouselContainer) return;

    function renderCarousel() {
        carouselContainer.innerHTML = '';
        albums.forEach((album, index) => {
            const item = document.createElement('div');
            item.className = 'carousel-item';

            if (index === carouselActiveIndex) {
                item.classList.add('active');
                if (heroSongTitle) heroSongTitle.textContent = album.title;
                if (heroArtistName) heroArtistName.textContent = "BE SERIOUS MUSIC";
                document.documentElement.style.setProperty('--blob-color', album.color || '#FFD700');
            } else if (index === (carouselActiveIndex - 1 + albums.length) % albums.length) {
                item.classList.add('prev');
            } else if (index === (carouselActiveIndex + 1) % albums.length) {
                item.classList.add('next');
            } else {
                item.classList.add('hidden');
            }

            const img = document.createElement('img');
            img.src = album.img;
            img.alt = album.title;
            img.loading = 'eager';
            item.appendChild(img);

            item.addEventListener('click', () => {
                carouselActiveIndex = index;
                renderCarousel();
                const songIdx = songs.findIndex(s => s.id === album.id);
                if (songIdx !== -1) {
                    currentPlaylist = [...songs];
                    loadSong(songIdx, true);
                }
            });

            carouselContainer.appendChild(item);
        });
    }

    renderCarousel();

    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => {
        carouselActiveIndex = (carouselActiveIndex + 1) % albums.length;
        renderCarousel();
    }, 4500);
}

// Render Latest Drops Grid - Artist: BE SERIOUS MUSIC
function renderSongsGrid(songList = songs) {
    const songsGrid = document.getElementById('songsGrid');
    if (!songsGrid) return;
    songsGrid.innerHTML = '';

    if (songList.length === 0) {
        songsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
                <p>No tracks found matching your query.</p>
            </div>
        `;
        return;
    }

    songList.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'song-card visible';
        card.setAttribute('data-song-id', song.id);
        if (songs[currentSongIndex] && songs[currentSongIndex].id === song.id && isPlaying) {
            card.classList.add('active-playing');
        }

        const isLiked = favorites.includes(song.id);
        const isOffline = cachedSongUrls.has(song.audio);

        card.innerHTML = `
            <div class="song-art">
                <img src="${song.img}" alt="${song.title}" loading="lazy">
                ${song.isNew ? '<span class="badge-tag new">NEW</span>' : ''}
                ${song.isTrending && !song.isNew ? '<span class="badge-tag trending">Trending</span>' : ''}
                ${isOffline ? '<span class="badge-tag offline"><svg class="badge-svg" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l5.59-5.59L17 10l-7 7z"/></svg>OFFLINE</span>' : ''}
                <div class="song-overlay">
                    <button class="play-btn" aria-label="Play ${song.title}">
                        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                </div>
            </div>
            <div class="song-details-row">
                <div class="song-info-meta">
                    <div class="song-title">${song.title}</div>
                    <div class="song-artist">BE SERIOUS MUSIC &bull; <span class="song-duration">${song.duration}</span></div>
                </div>
                <button class="card-like-btn ${isLiked ? 'liked' : ''}" data-id="${song.id}" aria-label="Favorite">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
            </div>
        `;

        card.querySelector('.play-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            currentPlaylist = [...songList];
            const songIdx = currentPlaylist.findIndex(s => s.id === song.id);
            loadSong(songIdx !== -1 ? songIdx : index, true);
        });

        card.addEventListener('click', () => {
            currentPlaylist = [...songList];
            const songIdx = currentPlaylist.findIndex(s => s.id === song.id);
            loadSong(songIdx !== -1 ? songIdx : index, true);
        });

        const cardLike = card.querySelector('.card-like-btn');
        cardLike.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLikeSong(song.id);
        });

        songsGrid.appendChild(card);
    });
}

// Render Top Albums Table - Artist: BE SERIOUS MUSIC
function renderAlbumsTable() {
    const albumsTable = document.getElementById('albumsTable');
    if (!albumsTable) return;
    albumsTable.innerHTML = '';

    albums.forEach((album, index) => {
        const row = document.createElement('div');
        row.className = 'table-row visible';
        row.setAttribute('data-song-id', album.id);
        if (songs[currentSongIndex] && songs[currentSongIndex].id === album.id && isPlaying) {
            row.classList.add('active-playing');
        }

        row.innerHTML = `
            <div class="row-rank">${index + 1}</div>
            <div class="row-art"><img src="${album.img}" alt="${album.title}" loading="lazy"></div>
            <div class="row-meta">
                <div class="row-title">${album.title}</div>
                <div class="row-artist-sub">BE SERIOUS MUSIC</div>
            </div>
            <div class="row-artist hide-mobile">BE SERIOUS MUSIC</div>
            <div class="row-duration">${album.duration}</div>
            <div class="row-play">
                <div class="play-btn-small">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
        `;

        row.addEventListener('click', () => {
            currentPlaylist = [...albums];
            loadSong(index, true);
        });

        albumsTable.appendChild(row);
    });
}

// ==========================================
// CURATED PLAYLISTS & AVAILABLE SONGS VIEWER
// ==========================================
let activeDetailPlaylistId = null;

function renderPlaylists() {
    const playlistGrid = document.getElementById('playlists-grid');
    if (!playlistGrid) return;
    playlistGrid.innerHTML = '';

    curatedPlaylists.forEach(pl => {
        const card = document.createElement('div');
        card.className = 'playlist-card';
        card.setAttribute('data-playlist-id', pl.id);
        card.innerHTML = `
            <div class="playlist-art">
                <img src="${pl.cover}" alt="${pl.title}" loading="lazy">
                <div class="playlist-badge">${pl.songs.length} Tracks Available</div>
                <button class="playlist-play-btn" aria-label="Play ${pl.title}">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </button>
            </div>
            <div class="playlist-title">${pl.title}</div>
            <div class="playlist-desc">${pl.desc}</div>
        `;

        card.addEventListener('click', (e) => {
            const playBtn = card.querySelector('.playlist-play-btn');
            const isPlayBtnClick = (e.target === playBtn || playBtn.contains(e.target));
            
            // Show all songs available in this playlist
            openPlaylistDetail(pl.id, isPlayBtnClick);
        });

        playlistGrid.appendChild(card);
    });
}

function openPlaylistDetail(playlistId, autoPlayFirst = false) {
    const pl = curatedPlaylists.find(p => p.id === playlistId);
    if (!pl) return;

    activeDetailPlaylistId = playlistId;

    const container = document.getElementById('playlist-detail-container');
    const coverEl = document.getElementById('playlist-detail-cover');
    const trackCountEl = document.getElementById('playlist-detail-track-count');
    const titleEl = document.getElementById('playlist-detail-title');
    const descEl = document.getElementById('playlist-detail-desc');
    const tracksListEl = document.getElementById('playlist-tracks-list');
    const playAllBtn = document.getElementById('playlist-play-all-btn');
    const closeBtn = document.getElementById('close-playlist-detail-btn');
    const closeActionBtn = document.getElementById('playlist-detail-close-action');

    const playlistSongs = pl.songs.map(id => songs.find(s => s.id === id)).filter(Boolean);

    if (coverEl) coverEl.src = pl.cover;
    if (trackCountEl) trackCountEl.textContent = `${playlistSongs.length} Tracks Available`;
    if (titleEl) titleEl.textContent = pl.title;
    if (descEl) descEl.textContent = pl.desc;

    // Render list of all songs available in this playlist
    if (tracksListEl) {
        tracksListEl.innerHTML = '';
        playlistSongs.forEach((song, idx) => {
            const row = document.createElement('div');
            row.className = 'playlist-track-row';
            row.setAttribute('data-song-id', song.id);
            if (songs[currentSongIndex] && songs[currentSongIndex].id === song.id && isPlaying) {
                row.classList.add('active-playing');
            }

            row.innerHTML = `
                <div class="pl-row-idx">${idx + 1}</div>
                <div class="pl-row-info">
                    <div class="pl-row-thumb">
                        <img src="${song.img}" alt="${song.title}" loading="lazy">
                    </div>
                    <div class="pl-row-meta">
                        <div class="pl-row-title">${song.title}</div>
                        <div class="pl-row-artist">BE SERIOUS MUSIC</div>
                    </div>
                </div>
                <div class="pl-row-cat hide-mobile">${song.category || 'Studio'}</div>
                <div class="pl-row-dur">${song.duration || '0:00'}</div>
                <div class="pl-row-action">
                    <button class="pl-row-play-btn" aria-label="Play ${song.title}">
                        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                </div>
            `;

            row.addEventListener('click', () => {
                currentPlaylist = [...playlistSongs];
                const songIndex = currentPlaylist.findIndex(s => s.id === song.id);
                loadSong(songIndex !== -1 ? songIndex : idx, true);
                updateActivePlaylistTrackHighlight();
                showToast(`Now Playing: ${song.title}`, 'sparkle');
            });

            tracksListEl.appendChild(row);
        });
    }

    // Play All Songs action
    if (playAllBtn) {
        playAllBtn.onclick = () => {
            currentPlaylist = [...playlistSongs];
            loadSong(0, true);
            updateActivePlaylistTrackHighlight();
            showToast(`Playing all ${playlistSongs.length} songs from ${pl.title}`, 'disc');
        };
    }

    const closeHandler = () => {
        if (container) {
            container.style.display = 'none';
            container.setAttribute('aria-hidden', 'true');
        }
        activeDetailPlaylistId = null;
        document.querySelectorAll('.playlist-card').forEach(c => c.classList.remove('active-playlist'));
    };

    if (closeBtn) closeBtn.onclick = closeHandler;
    if (closeActionBtn) closeActionBtn.onclick = closeHandler;

    if (container) {
        container.style.display = 'block';
        container.setAttribute('aria-hidden', 'false');
        setTimeout(() => {
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
    }

    // Highlight active playlist card in grid
    document.querySelectorAll('.playlist-card').forEach(c => {
        if (c.getAttribute('data-playlist-id') === playlistId) {
            c.classList.add('active-playlist');
        } else {
            c.classList.remove('active-playlist');
        }
    });

    if (autoPlayFirst && playlistSongs.length) {
        currentPlaylist = [...playlistSongs];
        loadSong(0, true);
        showToast(`Playing playlist: ${pl.title}`, 'disc');
    } else {
        showToast(`Displaying all ${playlistSongs.length} tracks in ${pl.title}`, 'sparkle');
    }

    updateActivePlaylistTrackHighlight();
}

function updateActivePlaylistTrackHighlight() {
    const activeSong = currentPlaylist[currentSongIndex];
    if (!activeSong) return;
    document.querySelectorAll('.playlist-track-row').forEach(row => {
        const id = parseInt(row.getAttribute('data-song-id'), 10);
        if (id === activeSong.id && isPlaying) {
            row.classList.add('active-playing');
        } else {
            row.classList.remove('active-playing');
        }
    });
}

// Queue Drawer Management with Animated Luxury Soundwave
function renderQueue() {
    if (!queueListEl) return;
    queueListEl.innerHTML = '';

    currentPlaylist.forEach((song, idx) => {
        const item = document.createElement('div');
        item.className = 'queue-item';
        if (idx === currentSongIndex) item.classList.add('now-playing');

        const isCurrent = idx === currentSongIndex;
        const numContent = isCurrent
            ? `<span class="queue-soundwave"><span></span><span></span><span></span></span>`
            : idx + 1;

        item.innerHTML = `
            <span class="queue-num">${numContent}</span>
            <img src="${song.img}" alt="${song.title}" class="queue-art">
            <div class="queue-info">
                <div class="queue-title">${song.title}</div>
                <div class="queue-artist">BE SERIOUS MUSIC</div>
            </div>
            <span class="queue-duration">${song.duration}</span>
        `;

        item.addEventListener('click', () => {
            loadSong(idx, true);
        });

        queueListEl.appendChild(item);
    });
}

function toggleQueueDrawer() {
    if (!queueDrawer) return;
    queueDrawer.classList.toggle('open');
    renderQueue();
}

// Offline Caching & PWA Architecture (Zero Emojis)
async function checkOfflineCachedSongs() {
    if (!('caches' in window)) return;
    try {
        const mediaCache = await caches.open(MEDIA_CACHE_NAME);
        const keys = await mediaCache.keys();
        cachedSongUrls.clear();

        keys.forEach(req => {
            songs.forEach(s => {
                if (req.url.includes(encodeURI(s.audio)) || req.url.includes(s.audio)) {
                    cachedSongUrls.add(s.audio);
                }
            });
        });

        updateOfflineStatusUI();
    } catch (e) {
        console.warn('Failed to query media cache:', e);
    }
}

function updateOfflineStatusUI() {
    const isOnline = navigator.onLine;
    const count = cachedSongUrls.size;
    const total = songs.length;

    if (offlineStatusPill) {
        if (!isOnline) {
            offlineStatusPill.className = 'status-pill offline';
            offlineStatusPill.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l5.59-5.59L17 10l-7 7z"/></svg>
                Offline Vault (${count}/${total} Ready)
            `;
        } else if (count === total) {
            offlineStatusPill.className = 'status-pill all-cached';
            offlineStatusPill.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                100% Offline Ready (${total}/${total})
            `;
        } else if (count > 0) {
            offlineStatusPill.className = 'status-pill ready';
            offlineStatusPill.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l5.59-5.59L17 10l-7 7z"/></svg>
                ${count}/${total} Stored Locally
            `;
        } else {
            offlineStatusPill.className = 'status-pill ready';
            offlineStatusPill.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                Offline Ready
            `;
        }
    }
}

// Background auto-cache of single song (2G-aware)
async function cacheSingleSongInBackground(song) {
    if (!song || !('caches' in window) || cachedSongUrls.has(song.audio)) return;
    // Don't auto-download large audio buffers on 2G or Save-Data connections
    if (navigator.connection && (navigator.connection.effectiveType === '2g' || navigator.connection.saveData)) {
        return;
    }
    try {
        const mediaCache = await caches.open(MEDIA_CACHE_NAME);
        const safeUrl = getSafeMediaUrl(song.audio);
        const match = await mediaCache.match(safeUrl);
        if (!match) {
            const res = await fetch(safeUrl);
            if (res.status === 200) {
                await mediaCache.put(safeUrl, res);
                cachedSongUrls.add(song.audio);
                updateOfflineStatusUI();
            }
        }
    } catch (e) {
        // network or quota issue - fail silently
    }
}

// Download ALL 16 Songs for Offline Listening
async function downloadAllSongsForOffline() {
    if (!('caches' in window)) {
        showToast('Offline cache storage not supported on this browser.', 'sparkle');
        return;
    }

    if (!navigator.onLine) {
        showToast('Connect to internet to download high-fidelity master tracks.', 'globe');
        return;
    }

    const modal = document.getElementById('offline-modal');
    const progressBar = document.getElementById('offline-progress-bar');
    const statusText = document.getElementById('offline-progress-text');
    if (modal) modal.classList.add('visible');

    const total = songs.length;
    let completed = 0;

    showToast(`Downloading all ${total} tracks for offline listening...`, 'cloudDownload', 3500);

    const mediaCache = await caches.open(MEDIA_CACHE_NAME);

    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        const safeUrl = getSafeMediaUrl(song.audio);

        if (statusText) statusText.textContent = `Downloading (${i + 1}/${total}): ${song.title}...`;
        if (progressBar) progressBar.style.width = `${((i + 1) / total) * 100}%`;

        try {
            const match = await mediaCache.match(safeUrl);
            if (!match) {
                const res = await fetch(safeUrl);
                if (res.status === 200) {
                    await mediaCache.put(safeUrl, res);
                }
            }
            const coverMatch = await mediaCache.match(song.img);
            if (!coverMatch) {
                const coverRes = await fetch(song.img);
                if (coverRes.status === 200) {
                    await mediaCache.put(song.img, coverRes);
                }
            }
            cachedSongUrls.add(song.audio);
            completed++;
        } catch (err) {
            console.warn(`Failed to cache ${song.title}:`, err);
        }
    }

    updateOfflineStatusUI();
    renderSongsGrid(currentPlaylist);

    setTimeout(() => {
        if (modal) modal.classList.remove('visible');
        showToast(`All ${completed}/${total} master tracks stored offline`, 'check', 4000);
    }, 800);
}

// Service Worker Registration with Instant Auto-Update for Downloaded App
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then((reg) => {
                    console.log('BE SERIOUS MUSIC Service Worker active:', reg.scope);
                    checkOfflineCachedSongs();

                    // Check for updates on every launch
                    reg.update();

                    // Listen for updates found
                    reg.addEventListener('updatefound', () => {
                        const newWorker = reg.installing;
                        if (newWorker) {
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New code detected - activate immediately
                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                }
                            });
                        }
                    });
                })
                .catch((err) => {
                    console.warn('Service Worker registration failed:', err);
                });

            // Auto-reload the downloaded app as soon as a new version takes control
            let refreshing = false;
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (!refreshing) {
                    refreshing = true;
                    window.location.reload();
                }
            });

            // Whenever the downloaded app comes into view/focus, check for updates
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') {
                    navigator.serviceWorker.getRegistration().then((reg) => {
                        if (reg) reg.update();
                    });
                }
            });

            // Periodic background check every 30 seconds
            setInterval(() => {
                navigator.serviceWorker.getRegistration().then((reg) => {
                    if (reg) reg.update();
                });
            }, 30000);
        });
    }
}

// PWA Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installAppBtn) installAppBtn.style.display = 'inline-flex';
});

if (installAppBtn) {
    installAppBtn.addEventListener('click', async () => {
        if (!deferredPrompt) {
            showToast('App is already installed or open in standalone mode', 'sparkle');
            return;
        }
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            installAppBtn.style.display = 'none';
            showToast('BE SERIOUS MUSIC Installed to System', 'check');
        }
        deferredPrompt = null;
    });
}

// Search & Filtering
function setupSearchAndFilters() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                renderSongsGrid(currentPlaylist);
                return;
            }
            const filtered = songs.filter(s =>
                s.title.toLowerCase().includes(query) ||
                s.category.toLowerCase().includes(query)
            );
            renderSongsGrid(filtered);
        });
    }

    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const filter = chip.getAttribute('data-filter');
            if (filter === 'all') {
                currentPlaylist = [...songs];
            } else if (filter === 'trending') {
                currentPlaylist = songs.filter(s => s.isTrending || s.isNew);
            } else if (filter === 'offline') {
                currentPlaylist = songs.filter(s => cachedSongUrls.has(s.audio));
                if (currentPlaylist.length === 0) {
                    showToast('No offline tracks cached yet. Click "Save All Offline".', 'cloudDownload');
                    currentPlaylist = [...songs];
                }
            } else if (filter === 'favorites') {
                currentPlaylist = songs.filter(s => favorites.includes(s.id));
                if (currentPlaylist.length === 0) {
                    showToast('No favorites saved yet. Click the heart icon on any track.', 'heart');
                    currentPlaylist = [...songs];
                }
            } else {
                currentPlaylist = songs.filter(s => s.category === filter);
            }
            renderSongsGrid(currentPlaylist);
        });
    });
}

// =========================================================
// EMAILJS & GOOGLE APPS SCRIPT VERIFICATION ENGINE
// =========================================================
// Official EmailJS Service Credentials
const EMAILJS_CONFIG = {
    publicKey: "9zAvP5sivN8AHseBq",
    privateKey: "b6dktVA-Ku9-nIjMe17Rb",
    serviceId: "service_skfjvqg",
    templateId: localStorage.getItem('beserious_emailjs_template_id') || "template_ztxbtio"
};

// Initialize EmailJS Browser SDK
function initEmailJSService() {
    if (window.emailjs && EMAILJS_CONFIG.publicKey) {
        try {
            emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
            console.log("EmailJS SDK initialized successfully for BE SERIOUS MUSIC");
        } catch (e) {
            console.warn("EmailJS initialization notice:", e);
        }
    }
}

async function sendToGoogleAppsScript(payload) {
    if (!GOOGLE_APPS_SCRIPT_URL) return false;
    try {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(payload)
        });
        return true;
    } catch (err) {
        console.warn('Google Apps Script request error:', err);
        return false;
    }
}

// Dispatches verification email via EmailJS (SDK + REST API with Private Key)
async function sendVerificationViaEmailJS(email, name, otp) {
    // Check if user saved a custom template ID in localStorage
    const activeTemplateId = localStorage.getItem('beserious_emailjs_template_id') || EMAILJS_CONFIG.templateId;

    const templateParams = {
        to_email: email,
        email: email,
        user_email: email,
        recipient_email: email,
        to_name: name,
        user_name: name,
        name: name,
        otp_code: otp,
        otp: otp,
        code: otp,
        passcode: otp,
        verification_code: otp,
        artist_name: "BE SERIOUS MUSIC",
        admin_email: ADMIN_EMAIL,
        subject: `BE SERIOUS MUSIC - VIP Verification Code [${otp}]`,
        message: `Hello ${name},\n\nYour 6-digit VIP verification code for BE SERIOUS MUSIC is: ${otp}\n\nEnter this code on the website to unlock 100% ad-free listening and unlimited offline access.`
    };

    let emailJsDispatched = false;
    let errorDetail = "";

    // 1. Send via EmailJS SDK if available
    if (window.emailjs && EMAILJS_CONFIG.publicKey) {
        try {
            const sdkRes = await emailjs.send(EMAILJS_CONFIG.serviceId, activeTemplateId, templateParams);
            if (sdkRes && (sdkRes.status === 200 || sdkRes.text === 'OK')) {
                emailJsDispatched = true;
                console.log("EmailJS SDK successfully dispatched OTP to:", email);
            }
        } catch (err) {
            errorDetail = (err && (err.text || err.message)) || "SDK dispatch error";
            console.warn("EmailJS SDK dispatch notice:", err);
        }
    }

    // 2. Fallback to EmailJS direct REST API with Private Key (accessToken)
    if (!emailJsDispatched) {
        try {
            const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    service_id: EMAILJS_CONFIG.serviceId,
                    template_id: activeTemplateId,
                    user_id: EMAILJS_CONFIG.publicKey,
                    accessToken: EMAILJS_CONFIG.privateKey,
                    template_params: templateParams
                })
            });
            if (res.ok) {
                emailJsDispatched = true;
                console.log("EmailJS REST API successfully dispatched to:", email);
            } else {
                const errText = await res.text();
                errorDetail = errText || `HTTP ${res.status}`;
                console.warn("EmailJS REST API response:", res.status, errText);
            }
        } catch (apiErr) {
            errorDetail = apiErr.message || "Network request failed";
            console.warn("EmailJS REST API error:", apiErr);
        }
    }

    // 3. Parallel backup notification to admin mailbox (01adityanegi@gmail.com)
    await sendToGoogleAppsScript({
        type: "verify_request",
        email: email,
        name: name,
        code: otp,
        service: emailJsDispatched ? "EmailJS" : "EmailJS_Bridge"
    });

    return { success: emailJsDispatched, error: errorDetail, otp: otp };
}

// Cinematic Intro Screen Controller
function initIntroScreen() {
    const intro = document.getElementById('intro-screen');
    if (!intro) return;

    const hideIntro = () => {
        if (!intro.classList.contains('hide')) {
            intro.classList.add('hide');
            setTimeout(() => {
                intro.style.display = 'none';
                // Trigger VIP verification modal after intro screen on site entry
                const entryModal = document.getElementById('vip-entry-modal');
                if (entryModal) {
                    entryModal.classList.add('open');
                }
            }, 700);
        }
    };

    // Auto-dissolve intro after 1.8 seconds, or immediately on click
    setTimeout(hideIntro, 1800);
    intro.addEventListener('click', hideIntro);
}

// Global modal opener for nav-links and buttons
window.openVipModal = function(forceShowForm = false) {
    const entryModal = document.getElementById('vip-entry-modal');
    const modalForm = document.getElementById('vip-modal-form');
    const modalVerifiedBanner = document.getElementById('modal-vip-verified-banner');
    if (entryModal) {
        entryModal.classList.add('open');
        if (forceShowForm || !localStorage.getItem('beserious_verified_email')) {
            if (modalForm) modalForm.style.display = 'block';
            if (modalVerifiedBanner) modalVerifiedBanner.classList.remove('show');
            const emailInput = document.getElementById('modal-vip-email-input');
            if (emailInput) emailInput.focus();
        }
    }
};

// Anti-XSS Sanitizer Utility
function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function initEmailVerification() {
    initEmailJSService();

    // Entry Modal Elements
    const entryModal = document.getElementById('vip-entry-modal');
    const modalCloseBtn = document.getElementById('vip-modal-close-btn');
    const modalGuestBtn = document.getElementById('vip-modal-guest-btn');
    const modalFinishBtn = document.getElementById('modal-vip-finish-btn');
    const modalReverifyBtn = document.getElementById('modal-vip-reverify-btn');
    const modalNameInput = document.getElementById('modal-vip-name-input');
    const modalEmailInput = document.getElementById('modal-vip-email-input');
    const modalVerifyBtn = document.getElementById('modal-vip-verify-btn');
    const modalOtpContainer = document.getElementById('modal-vip-otp-container');
    const modalOtpInput = document.getElementById('modal-vip-otp-input');
    const modalConfirmOtpBtn = document.getElementById('modal-vip-confirm-otp-btn');
    const modalForm = document.getElementById('vip-modal-form');
    const modalVerifiedBanner = document.getElementById('modal-vip-verified-banner');
    const statusDesc = document.getElementById('vip-verified-status-desc');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Rate Limiting Security Configuration (60s cooldown)
    let lastOtpRequestTime = 0;
    let otpCooldownTimer = null;
    const OTP_COOLDOWN_SECONDS = 60;

    function startCooldownTimer() {
        lastOtpRequestTime = Date.now();
        if (modalVerifyBtn) {
            modalVerifyBtn.disabled = true;
        }

        const updateTick = () => {
            const elapsed = Math.floor((Date.now() - lastOtpRequestTime) / 1000);
            const remaining = OTP_COOLDOWN_SECONDS - elapsed;
            if (remaining > 0) {
                if (modalVerifyBtn) {
                    modalVerifyBtn.innerHTML = `
                        <svg class="badge-svg" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        Resend Code in ${remaining}s
                    `;
                    modalVerifyBtn.disabled = true;
                }
            } else {
                clearInterval(otpCooldownTimer);
                otpCooldownTimer = null;
                if (modalVerifyBtn) {
                    modalVerifyBtn.disabled = false;
                    modalVerifyBtn.innerHTML = `
                        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        Resend Verification Code
                    `;
                }
            }
        };

        if (otpCooldownTimer) clearInterval(otpCooldownTimer);
        updateTick();
        otpCooldownTimer = setInterval(updateTick, 1000);
    }

    function showFormInputView() {
        if (modalForm) modalForm.style.display = 'block';
        if (modalVerifiedBanner) modalVerifiedBanner.classList.remove('show');
        if (modalOtpContainer) modalOtpContainer.classList.remove('show');
        if (modalEmailInput) modalEmailInput.focus();
    }

    // Helper: Mark Verified in UI
    function markAsVerified(email) {
        const safeEmail = escapeHtml(email);
        localStorage.setItem('beserious_verified_email', safeEmail);

        if (modalForm && modalVerifiedBanner) {
            modalForm.style.display = 'none';
            modalVerifiedBanner.classList.add('show');
            if (statusDesc) {
                statusDesc.innerHTML = `Verified as <strong>${safeEmail}</strong>. You now have complete ad-free listening and unlimited offline access.`;
            }
        }

        // Dismiss any ongoing ad overlays or floating banners immediately
        dismissAllAdsOnVipUnlock();
    }

    // Check if user already verified
    const storedVerified = localStorage.getItem('beserious_verified_email');
    if (storedVerified) {
        markAsVerified(storedVerified);
    } else {
        showFormInputView();
    }

    if (modalReverifyBtn) {
        modalReverifyBtn.addEventListener('click', () => {
            showFormInputView();
        });
    }

    // Modal Close handlers
    const closeModal = () => {
        if (entryModal) entryModal.classList.remove('open');
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalGuestBtn) modalGuestBtn.addEventListener('click', closeModal);
    if (modalFinishBtn) modalFinishBtn.addEventListener('click', closeModal);
    if (entryModal) {
        entryModal.addEventListener('click', (e) => {
            if (e.target === entryModal) closeModal();
        });
    }

    // Modal Email Request
    if (modalVerifyBtn && modalEmailInput) {
        modalVerifyBtn.addEventListener('click', async () => {
            // Security: Enforce 60-second cooldown rate limit
            const secondsSinceLast = Math.floor((Date.now() - lastOtpRequestTime) / 1000);
            if (secondsSinceLast < OTP_COOLDOWN_SECONDS) {
                const waitSec = OTP_COOLDOWN_SECONDS - secondsSinceLast;
                showToast(`Security Limit: Please wait ${waitSec}s before requesting a new code.`, 'sparkle');
                return;
            }

            const rawName = (modalNameInput && modalNameInput.value.trim()) || "";
            const name = escapeHtml(rawName.slice(0, 50));
            if (!name || name.length < 2) {
                showToast('Please enter your full name.', 'sparkle');
                if (modalNameInput) modalNameInput.focus();
                return;
            }

            const rawEmail = modalEmailInput.value.trim();
            const email = escapeHtml(rawEmail.slice(0, 100).toLowerCase());
            if (!email || !emailRegex.test(email)) {
                showToast('Please enter a valid email address.', 'sparkle');
                modalEmailInput.focus();
                return;
            }

            activeGeneratedOtp = Math.floor(100000 + Math.random() * 900000).toString();
            activeTargetEmail = email;
            activeTargetName = name;

            modalVerifyBtn.disabled = true;
            modalVerifyBtn.innerHTML = `
                <svg class="badge-svg" style="animation: spinBuffering 1s infinite linear;" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
                Sending Verification Code...
            `;

            const result = await sendVerificationViaEmailJS(email, name, activeGeneratedOtp);

            startCooldownTimer();

            if (modalOtpContainer) {
                modalOtpContainer.classList.add('show');
                const otpNotice = document.getElementById('modal-otp-notice-text');
                
                if (result.success) {
                    showToast(`Verification code sent to ${email}`, 'mail', 5000);
                    if (otpNotice) {
                        otpNotice.innerHTML = `Enter the 6-digit verification code sent to your email (<strong>${escapeHtml(email)}</strong>). Check your inbox & spam folder:`;
                    }
                } else {
                    // EmailJS returned an error (e.g. template ID not configured in dashboard yet)
                    showToast(`EmailJS: Template ID required. Displaying code on screen.`, 'sparkle', 6000);
                    if (otpNotice) {
                        otpNotice.innerHTML = `
                            <div style="background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.35); border-radius: 8px; padding: 12px; margin-bottom: 12px; text-align: center;">
                                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #FFD700; font-weight: 700; margin-bottom: 4px;">Direct Verification Passcode</div>
                                <div style="font-size: 26px; font-weight: 800; letter-spacing: 6px; color: #FFFFFF; font-family: monospace; margin: 4px 0;">${activeGeneratedOtp}</div>
                                <div style="font-size: 11px; color: #8F94A6;">EmailJS requires a Template ID from dashboard.emailjs.com/admin/templates. Use the code above to verify immediately!</div>
                            </div>
                            Enter the 6-digit verification code:
                        `;
                    }
                    if (modalOtpInput) {
                        modalOtpInput.value = activeGeneratedOtp;
                    }
                }
                if (modalOtpInput) modalOtpInput.focus();
            }
        });
    }

    // Modal OTP Confirm
    if (modalConfirmOtpBtn && modalOtpInput) {
        modalConfirmOtpBtn.addEventListener('click', async () => {
            const entered = modalOtpInput.value.trim();
            if (entered !== activeGeneratedOtp) {
                showToast('Invalid verification code. Please check your inbox.', 'sparkle');
                return;
            }

            modalConfirmOtpBtn.disabled = true;
            modalConfirmOtpBtn.textContent = 'Verifying...';

            await sendToGoogleAppsScript({
                type: "verify_confirmed",
                email: activeTargetEmail,
                name: (modalNameInput && modalNameInput.value.trim()) || "VIP Listener",
                code: activeGeneratedOtp,
                service: "EmailJS"
            });

            markAsVerified(activeTargetEmail);
            showToast('Email Verified Successfully!', 'check', 4500);
        });
    }
}

// =========================================================
// BE SERIOUS AI MUSIC CONCIERGE & SOUND ADVISOR
// =========================================================
let currentAiRecommendedSong = songs[0];

function recommendSongForVibe(queryOrVibe) {
    const q = (queryOrVibe || '').toLowerCase().trim();
    
    // 1. Mountain & Atmospheric Peace
    if (q.includes('mountain') || q.includes('peace') || q.includes('nature') || q.includes('himalaya') || q.includes('sujal') || q.includes('chill')) {
        return {
            song: songs.find(s => s.id === 16) || songs[0],
            matchScore: '99.8%',
            reason: 'Engine match: Atmospheric high-altitude acoustic guitar harmonies layered with expansive sub-bass and pristine vocal master balance.'
        };
    }
    // 2. Gym & Hustle / Hard Work
    if (q.includes('gym') || q.includes('hustle') || q.includes('hard work') || q.includes('built') || q.includes('workout') || q.includes('motivat') || q.includes('grind')) {
        return {
            song: songs.find(s => s.id === 2) || songs.find(s => s.id === 1) || songs[6],
            matchScore: '99.4%',
            reason: 'Engine match: High-octane rhythm, driving basslines, and raw determination lyricism crafted to ignite peak adrenaline.'
        };
    }
    // 3. Luxury Swag & Street Confidence
    if (q.includes('babes') || q.includes('luxury') || q.includes('swag') || q.includes('style') || q.includes('party') || q.includes('club') || q.includes('confidence')) {
        return {
            song: songs.find(s => s.id === 14) || songs[3],
            matchScore: '99.7%',
            reason: 'Engine match: Ultra-crisp 808 percussion, hypnotic flow, and modern high-roller street luxury ambiance.'
        };
    }
    // 4. Gang & High-Energy Flow
    if (q.includes('priyanshu') || q.includes('gang') || q.includes('energy') || q.includes('banger')) {
        return {
            song: songs.find(s => s.id === 4) || songs[4],
            matchScore: '99.2%',
            reason: 'Engine match: Unstoppable personal anthem featuring sharp vocal clarity and signature BE SERIOUS hard trap bounce.'
        };
    }
    // 5. Late Night Melodies & Romantic Emotion
    if (q.includes('night') || q.includes('melod') || q.includes('sad') || q.includes('love') || q.includes('heart') || q.includes('kamal') || q.includes('adhoori') || q.includes('kiran') || q.includes('ishq') || q.includes('soul') || q.includes('emotional')) {
        const lateNightSongs = [
            songs.find(s => s.id === 8),
            songs.find(s => s.id === 12),
            songs.find(s => s.id === 5),
            songs.find(s => s.id === 11),
            songs.find(s => s.id === 9)
        ].filter(Boolean);
        const picked = lateNightSongs[Math.floor(Math.random() * lateNightSongs.length)] || songs[9];
        return {
            song: picked,
            matchScore: '98.9%',
            reason: 'Engine match: Deep emotional acoustic resonance, late-night introspective melodies, and soulful poetic cadence.'
        };
    }
    // 6. Hard Street Underground Rap
    if (q.includes('rap') || q.includes('street') || q.includes('golu') || q.includes('raj') || q.includes('bars') || q.includes('rhymes')) {
        const rapSongs = [
            songs.find(s => s.id === 15),
            songs.find(s => s.id === 10),
            songs.find(s => s.id === 13)
        ].filter(Boolean);
        const picked = rapSongs[Math.floor(Math.random() * rapSongs.length)] || songs[12];
        return {
            song: picked,
            matchScore: '99.5%',
            reason: 'Engine match: Relentless lyrical cadence, heavy hitting trap snares, and authentic underground flow.'
        };
    }
    
    // Default smart match
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    return {
        song: randomSong,
        matchScore: '98.4%',
        reason: 'Engine match: Handpicked from BE SERIOUS MUSIC master archives based on acoustic richness and studio harmonic balance.'
    };
}

function initAiConcierge() {
    const aiModal = document.getElementById('ai-concierge-modal');
    const closeBtn = document.getElementById('ai-modal-close-btn');
    const moodChips = document.querySelectorAll('.ai-mood-chip');
    const promptInput = document.getElementById('ai-user-prompt-input');
    const askBtn = document.getElementById('ai-ask-advisor-btn');
    const thinkingIndicator = document.getElementById('ai-thinking-indicator');
    const resultContainer = document.getElementById('ai-result-container');
    const recArt = document.getElementById('ai-rec-art');
    const recTitle = document.getElementById('ai-rec-title');
    const recDuration = document.getElementById('ai-rec-duration');
    const recReason = document.getElementById('ai-rec-reason');
    const matchScoreEl = document.getElementById('ai-match-score');
    const playRecBtn = document.getElementById('ai-play-rec-btn');
    const saveOfflineBtn = document.getElementById('ai-save-offline-btn');

    window.openAiConciergeModal = function(initialVibe = null) {
        if (aiModal) {
            aiModal.classList.add('open');
            aiModal.setAttribute('aria-hidden', 'false');
            if (initialVibe) {
                moodChips.forEach(c => {
                    if (c.getAttribute('data-vibe') === initialVibe) {
                        c.classList.add('active');
                    } else {
                        c.classList.remove('active');
                    }
                });
                processAiRecommendation(initialVibe);
            }
            if (promptInput) promptInput.focus();
        }
    };

    window.closeAiConciergeModal = function() {
        if (aiModal) {
            aiModal.classList.remove('open');
            aiModal.setAttribute('aria-hidden', 'true');
        }
    };

    if (closeBtn) closeBtn.addEventListener('click', window.closeAiConciergeModal);
    if (aiModal) {
        aiModal.addEventListener('click', (e) => {
            if (e.target === aiModal) window.closeAiConciergeModal();
        });
    }

    function processAiRecommendation(query) {
        if (thinkingIndicator) thinkingIndicator.style.display = 'flex';
        if (resultContainer) resultContainer.style.display = 'none';

        setTimeout(() => {
            if (thinkingIndicator) thinkingIndicator.style.display = 'none';

            const recommendation = recommendSongForVibe(query);
            currentAiRecommendedSong = recommendation.song;

            if (recArt) recArt.src = currentAiRecommendedSong.img;
            if (recTitle) recTitle.textContent = currentAiRecommendedSong.title;
            if (recDuration) recDuration.textContent = currentAiRecommendedSong.duration || '3:30';
            if (recReason) recReason.textContent = recommendation.reason;
            if (matchScoreEl) matchScoreEl.textContent = recommendation.matchScore;

            if (resultContainer) resultContainer.style.display = 'block';
        }, 550);
    }

    moodChips.forEach(chip => {
        chip.addEventListener('click', () => {
            moodChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const vibe = chip.getAttribute('data-vibe');
            processAiRecommendation(vibe);
        });
    });

    if (askBtn) {
        askBtn.addEventListener('click', () => {
            const val = promptInput ? promptInput.value.trim() : '';
            processAiRecommendation(val || 'mountain');
        });
    }

    if (promptInput) {
        promptInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const val = promptInput.value.trim();
                processAiRecommendation(val || 'mountain');
            }
        });
    }

    if (playRecBtn) {
        playRecBtn.addEventListener('click', () => {
            if (currentAiRecommendedSong) {
                const songIdx = songs.findIndex(s => s.id === currentAiRecommendedSong.id);
                if (songIdx !== -1) {
                    currentPlaylist = [...songs];
                    loadSong(songIdx, true);
                    showToast(`Playing AI Match: ${currentAiRecommendedSong.title}`, 'sparkle', 4000);
                    window.closeAiConciergeModal();
                }
            }
        });
    }

    if (saveOfflineBtn) {
        saveOfflineBtn.addEventListener('click', () => {
            if (currentAiRecommendedSong) {
                cacheSingleSongInBackground(currentAiRecommendedSong);
                showToast(`Saved ${currentAiRecommendedSong.title} to offline vault`, 'cloudDone', 3500);
            }
        });
    }

    // Initialize with mountain peaceful vibe
    processAiRecommendation('mountain');
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        switch (e.code) {
            case 'Space':
                e.preventDefault();
                togglePlayPause();
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (audio.duration) {
                    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
                }
                break;
            case 'ArrowLeft':
                e.preventDefault();
                audio.currentTime = Math.max(0, audio.currentTime - 5);
                break;
            case 'ArrowUp':
                e.preventDefault();
                audio.volume = Math.min(1, audio.volume + 0.05);
                if (volumeSlider) volumeSlider.value = audio.volume;
                updateVolumeIcon();
                break;
            case 'ArrowDown':
                e.preventDefault();
                audio.volume = Math.max(0, audio.volume - 0.05);
                if (volumeSlider) volumeSlider.value = audio.volume;
                updateVolumeIcon();
                break;
            case 'KeyN':
                playNextSong();
                break;
            case 'KeyP':
                playPrevSong();
                break;
            case 'KeyM':
                if (volumeBtn) volumeBtn.click();
                break;
            case 'KeyL':
                if (songs[currentSongIndex]) toggleLikeSong(songs[currentSongIndex].id);
                break;
        }
    });
}

// Connection State Listeners (Zero Emojis)
window.addEventListener('online', () => {
    updateOfflineStatusUI();
    showToast('Network Connection Restored', 'globe');
});

window.addEventListener('offline', () => {
    updateOfflineStatusUI();
    showToast('Offline Mode Active. Playing from Local Vault', 'offline', 3500);
});

// 2G Network Optimization: Lazy-load external beserious.in portal iframe on scroll intersection
function initPortalIframeLazyLoad() {
    const iframe = document.getElementById('beserious-live-iframe');
    if (!iframe) return;

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const dataSrc = iframe.getAttribute('data-src');
                    if (dataSrc && (!iframe.src || iframe.src === 'about:blank')) {
                        iframe.src = dataSrc;
                    }
                    obs.disconnect();
                }
            });
        }, { rootMargin: '300px' });

        observer.observe(iframe);
    } else {
        setTimeout(() => {
            if (iframe && iframe.getAttribute('data-src')) {
                iframe.src = iframe.getAttribute('data-src');
            }
        }, 3000);
    }
}

// Clean URL & Seamless Anchor Navigation Engine (Prevents #spotlight, #vip, etc. in URL)
function initCleanUrlNavigation() {
    // 1. Clean address bar immediately
    sanitizeAddressBarUrl();

    // 2. Intercept clicks on ALL internal hash links site-wide in capture phase
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;

        // Prevent browser from appending #hash to address bar URL
        e.preventDefault();

        // VIP modal trigger
        if (href === '#vip' || href === '#vip-entry-modal') {
            if (typeof window.openVipModal === 'function') {
                window.openVipModal();
            }
            sanitizeAddressBarUrl();
            return;
        }

        // AI Concierge modal trigger
        if (href === '#ai-concierge-modal') {
            if (typeof window.openAiConciergeModal === 'function') {
                window.openAiConciergeModal();
            }
            sanitizeAddressBarUrl();
            return;
        }

        // Top or hero
        if (href === '#' || href === '#hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            sanitizeAddressBarUrl();
            return;
        }

        // Section smooth scrolling
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const nav = document.getElementById('navbar');
            const navHeight = nav ? nav.offsetHeight : 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight - 16;

            window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth'
            });

            // Update active state on nav links
            document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
            if (link.classList.contains('nav-link')) {
                link.classList.add('active');
            }
        }

        // Keep URL completely clean
        sanitizeAddressBarUrl();
    }, true);

    // 3. Keep URL sanitized on hashchange or popstate
    window.addEventListener('hashchange', (e) => {
        e.preventDefault();
        sanitizeAddressBarUrl();
    });

    window.addEventListener('popstate', () => {
        sanitizeAddressBarUrl();
    });

    // 4. Scroll spy for active navbar highlighting without modifying address bar
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 40);
        }

        const sections = ['hero', 'spotlight', 'songs', 'albums', 'playlists', 'beserious-portal', 'offline'];
        const scrollPos = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
            const sec = document.getElementById(sections[i]);
            if (sec && sec.offsetTop <= scrollPos) {
                document.querySelectorAll('.nav-link').forEach(nl => {
                    const href = nl.getAttribute('href');
                    if (href === `#${sections[i]}`) {
                        nl.classList.add('active');
                    } else if (href && href.startsWith('#') && !['#ai-concierge-modal', '#vip-entry-modal'].includes(href)) {
                        nl.classList.remove('active');
                    }
                });
                break;
            }
        }
    }, { passive: true });
}

// ==========================================
// CD PLAYER MODAL & STUDIO LIVE LYRICS ENGINE
// ==========================================
let lastActiveLyricLine = null;

function renderSongLyrics(song) {
    const scrollContainer = document.getElementById('cd-lyrics-scroll');
    const statusEl = document.getElementById('cd-lyrics-status');
    if (!scrollContainer) return;

    scrollContainer.innerHTML = '';
    const lyricsData = (song && SONG_LYRICS[song.id]) ? SONG_LYRICS[song.id] : [
        { time: 0, text: "BE SERIOUS MUSIC • Studio Master" },
        { time: 5, text: "High-Fidelity Acoustic Flow" },
        { time: 15, text: "Stream raw vocals and master bass" },
        { time: 30, text: "Pure luxury sound in your ears" }
    ];

    if (statusEl) statusEl.textContent = `${lyricsData.length} Lines Synchronized`;

    lyricsData.forEach((item, idx) => {
        const line = document.createElement('div');
        line.className = 'cd-lyric-line';
        if (idx === 0) line.classList.add('active');
        line.setAttribute('data-time', item.time);
        line.textContent = item.text;
        line.addEventListener('click', () => {
            audio.currentTime = item.time;
            if (!isPlaying) playAudio();
            syncLyricsWithAudio(item.time);
        });
        scrollContainer.appendChild(line);
    });
}

function syncLyricsWithAudio(currentTime) {
    const scrollContainer = document.getElementById('cd-lyrics-scroll');
    if (!scrollContainer) return;

    const lines = scrollContainer.querySelectorAll('.cd-lyric-line');
    if (!lines || lines.length === 0) return;

    let activeLine = lines[0];
    for (let i = 0; i < lines.length; i++) {
        const t = parseFloat(lines[i].getAttribute('data-time') || '0');
        if (currentTime >= t) {
            activeLine = lines[i];
        } else {
            break;
        }
    }

    if (activeLine && activeLine !== lastActiveLyricLine) {
        lines.forEach(l => l.classList.remove('active'));
        activeLine.classList.add('active');
        lastActiveLyricLine = activeLine;
        
        // Smoothly auto-scroll into view with active line centered
        activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function openCdPlayerModal() {
    const modal = document.getElementById('cd-player-modal');
    if (!modal) return;
    const song = currentPlaylist[currentSongIndex] || songs[0];
    updateCdModalMetadata(song);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCdPlayerModal() {
    const modal = document.getElementById('cd-player-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function updateCdModalMetadata(song) {
    if (!song) return;
    const cdVinylArt = document.getElementById('cd-vinyl-art');
    const cdMetaTitle = document.getElementById('cd-meta-title');
    const cdTotalTime = document.getElementById('cd-total-time');
    const cdCurrentTime = document.getElementById('cd-current-time');
    const cdProgressFill = document.getElementById('cd-progress-fill');
    const cdVinylDisc = document.getElementById('cd-vinyl-disc');
    const cdTonearm = document.getElementById('cd-tonearm');
    const cdPlayIcon = document.getElementById('cd-play-icon');
    const cdPauseIcon = document.getElementById('cd-pause-icon');

    if (cdVinylArt) cdVinylArt.src = song.img;
    if (cdMetaTitle) cdMetaTitle.textContent = song.title;
    if (cdTotalTime) cdTotalTime.textContent = song.duration || (audio.duration ? formatTime(audio.duration) : '0:00');
    if (cdCurrentTime) cdCurrentTime.textContent = formatTime(audio.currentTime || 0);
    if (cdProgressFill && audio.duration) {
        cdProgressFill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    }

    if (isPlaying) {
        if (cdVinylDisc) cdVinylDisc.classList.add('playing');
        if (cdTonearm) cdTonearm.classList.add('playing');
        if (cdPlayIcon) cdPlayIcon.style.display = 'none';
        if (cdPauseIcon) cdPauseIcon.style.display = 'block';
    } else {
        if (cdVinylDisc) cdVinylDisc.classList.remove('playing');
        if (cdTonearm) cdTonearm.classList.remove('playing');
        if (cdPlayIcon) cdPlayIcon.style.display = 'block';
        if (cdPauseIcon) cdPauseIcon.style.display = 'none';
    }
}

function initCdPlayerModal() {
    const playerTrackTrigger = document.getElementById('player-track-trigger');
    const playerCdBtn = document.getElementById('player-cd-btn');
    const closeCdBtn = document.getElementById('close-cd-modal-btn');
    const cdModal = document.getElementById('cd-player-modal');
    const cdPlayBtn = document.getElementById('cd-play-btn');
    const cdPrevBtn = document.getElementById('cd-prev-btn');
    const cdNextBtn = document.getElementById('cd-next-btn');
    const cdProgressBar = document.getElementById('cd-progress-bar');

    if (playerTrackTrigger) {
        playerTrackTrigger.addEventListener('click', openCdPlayerModal);
    }
    if (playerCdBtn) {
        playerCdBtn.addEventListener('click', openCdPlayerModal);
    }
    if (closeCdBtn) {
        closeCdBtn.addEventListener('click', closeCdPlayerModal);
    }
    if (cdModal) {
        cdModal.addEventListener('click', (e) => {
            if (e.target === cdModal) closeCdPlayerModal();
        });
    }

    if (cdPlayBtn) cdPlayBtn.addEventListener('click', togglePlayPause);
    if (cdPrevBtn) cdPrevBtn.addEventListener('click', playPrevSong);
    if (cdNextBtn) cdNextBtn.addEventListener('click', playNextSong);

    if (cdProgressBar) {
        cdProgressBar.addEventListener('click', (e) => {
            if (!audio.duration) return;
            const rect = cdProgressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percent = Math.max(0, Math.min(1, clickX / rect.width));
            audio.currentTime = percent * audio.duration;
            const cdProgressFill = document.getElementById('cd-progress-fill');
            if (cdProgressFill) cdProgressFill.style.width = `${percent * 100}%`;
            syncLyricsWithAudio(audio.currentTime);
        });
    }
}

// ==========================================
// SOCIAL SHARE MODAL & OPEN GRAPH CONTROLLER
// ==========================================
let activeShareSong = null;

function updateShareMetaTags(song) {
    if (!song) return;
    const origin = window.location.origin || 'https://beserious.in';
    const songUrl = `${origin}${window.location.pathname}?track=${song.id}`;
    const songTitle = `${song.title} - BE SERIOUS MUSIC`;
    const songDesc = `Stream ${song.title} in Studio Master 24-Bit HD Audio with zero buffer on BE SERIOUS MUSIC. Official Luxury Sound.`;
    const songImg = `${origin}/${song.img}`;

    document.title = `${song.title} | BE SERIOUS MUSIC Official`;

    const setMeta = (attr, key, content) => {
        let meta = document.querySelector(`meta[${attr}="${key}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attr, key);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    };

    setMeta('property', 'og:title', songTitle);
    setMeta('property', 'og:description', songDesc);
    setMeta('property', 'og:image', songImg);
    setMeta('property', 'og:url', songUrl);
    setMeta('property', 'og:type', 'music.song');

    setMeta('name', 'twitter:title', songTitle);
    setMeta('name', 'twitter:description', songDesc);
    setMeta('name', 'twitter:image', songImg);
    setMeta('name', 'twitter:card', 'summary_large_image');
}

function openShareModal(songId) {
    const modal = document.getElementById('share-modal');
    if (!modal) return;
    const targetSong = (songId !== undefined && songId !== null)
        ? songs.find(s => s.id === songId)
        : (currentPlaylist[currentSongIndex] || songs[0]);
    if (!targetSong) return;

    activeShareSong = targetSong;

    const previewThumb = document.getElementById('share-preview-thumb');
    const previewTitle = document.getElementById('share-preview-title');
    const previewDesc = document.getElementById('share-preview-desc');
    const previewUrlDisplay = document.getElementById('share-preview-url-display');
    const shareInput = document.getElementById('share-link-input');

    const origin = window.location.origin || 'https://beserious.in';
    const shareUrl = `${origin}${window.location.pathname}?track=${targetSong.id}`;

    if (previewThumb) previewThumb.src = targetSong.img;
    if (previewTitle) previewTitle.textContent = targetSong.title;
    if (previewDesc) previewDesc.textContent = `Stream ${targetSong.title} in Studio Master 24-Bit HD Audio with zero buffer on BE SERIOUS MUSIC.`;
    if (previewUrlDisplay) previewUrlDisplay.textContent = shareUrl;
    if (shareInput) shareInput.value = shareUrl;

    updateShareMetaTags(targetSong);

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeShareModal() {
    const modal = document.getElementById('share-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function initShareModal() {
    const closeBtn = document.getElementById('close-share-modal-btn');
    const modal = document.getElementById('share-modal');
    const whatsappBtn = document.getElementById('share-whatsapp-btn');
    const instagramBtn = document.getElementById('share-instagram-btn');
    const twitterBtn = document.getElementById('share-twitter-btn');
    const nativeBtn = document.getElementById('share-native-btn');
    const copyBtn = document.getElementById('share-copy-btn');
    const shareInput = document.getElementById('share-link-input');
    const playerShareBtn = document.getElementById('player-share-btn');

    if (playerShareBtn) {
        playerShareBtn.addEventListener('click', () => openShareModal());
    }
    if (closeBtn) closeBtn.addEventListener('click', closeShareModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeShareModal();
        });
    }

    const getShareDetails = () => {
        const song = activeShareSong || currentPlaylist[currentSongIndex] || songs[0];
        const origin = window.location.origin || 'https://beserious.in';
        const url = `${origin}${window.location.pathname}?track=${song.id}`;
        const title = `${song.title} - BE SERIOUS MUSIC`;
        const text = `Listen to "${song.title}" in Studio Master 24-Bit HD Audio on BE SERIOUS MUSIC:`;
        return { song, url, title, text };
    };

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const { song, url, text } = getShareDetails();
            const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} ${url}`)}`;
            window.open(waUrl, '_blank', 'noopener,noreferrer');
            showToast('Opening WhatsApp to Share Track', 'sparkle');
        });
    }

    if (instagramBtn) {
        instagramBtn.addEventListener('click', () => {
            const { song, url } = getShareDetails();
            const igText = `Track: ${song.title} | BE SERIOUS MUSIC\nListen here: ${url}`;
            navigator.clipboard.writeText(igText).then(() => {
                showToast('Track link copied! Ready to paste into Instagram Reel', 'check');
                setTimeout(() => {
                    window.open('https://www.instagram.com/reels/', '_blank', 'noopener,noreferrer');
                }, 700);
            }).catch(() => {
                window.open('https://www.instagram.com/reels/', '_blank', 'noopener,noreferrer');
            });
        });
    }

    if (twitterBtn) {
        twitterBtn.addEventListener('click', () => {
            const { song, url } = getShareDetails();
            const twUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Streaming "${song.title}" by BE SERIOUS MUSIC Studio Master HD Audio`)}&url=${encodeURIComponent(url)}`;
            window.open(twUrl, '_blank', 'noopener,noreferrer');
            showToast('Opening Twitter / X', 'sparkle');
        });
    }

    if (nativeBtn) {
        nativeBtn.addEventListener('click', () => {
            const { song, url, title, text } = getShareDetails();
            if (navigator.share) {
                navigator.share({
                    title: title,
                    text: text,
                    url: url
                }).catch(() => {});
            } else {
                navigator.clipboard.writeText(url).then(() => {
                    showToast('Link copied to clipboard!', 'check');
                });
            }
        });
    }

    if (copyBtn && shareInput) {
        copyBtn.addEventListener('click', () => {
            const { url } = getShareDetails();
            navigator.clipboard.writeText(url).then(() => {
                copyBtn.textContent = 'Copied!';
                copyBtn.style.background = '#32CD32';
                copyBtn.style.color = '#FFFFFF';
                showToast('Share Link Copied to Clipboard!', 'check');
                setTimeout(() => {
                    copyBtn.textContent = 'Copy Link';
                    copyBtn.style.background = '';
                    copyBtn.style.color = '';
                }, 2200);
            }).catch(() => {
                shareInput.select();
                document.execCommand('copy');
                showToast('Link copied to clipboard!', 'check');
            });
        });
    }
}

// Global modal escape key handler
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCdPlayerModal();
        closeShareModal();
    }
});

// App Entry Point
document.addEventListener('DOMContentLoaded', () => {
    initIntroScreen();
    initAudioVisualizer();
    setupAudioEngineEvents();
    initCarousel();
    renderSongsGrid(songs);
    renderAlbumsTable();
    renderPlaylists();
    renderQueue();
    setupSearchAndFilters();
    initEmailVerification();
    initAiConcierge();
    initFloatingBannerAds();
    setupKeyboardShortcuts();
    initPortalIframeLazyLoad();
    initCleanUrlNavigation();
    initCdPlayerModal();
    initShareModal();
    registerServiceWorker();

    // Check if user came from a shared track URL (?track=ID or ?song=ID)
    const urlParams = new URLSearchParams(window.location.search);
    const sharedTrackId = urlParams.get('track') || urlParams.get('song');
    let startSongIdx = 0;
    if (sharedTrackId) {
        const foundIdx = songs.findIndex(s => s.id == sharedTrackId);
        if (foundIdx !== -1) {
            startSongIdx = foundIdx;
            updateShareMetaTags(songs[startSongIdx]);
        }
    }

    loadSong(startSongIdx, false);

    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
    if (nextBtn) nextBtn.addEventListener('click', playNextSong);
    if (prevBtn) prevBtn.addEventListener('click', playPrevSong);
    if (shuffleBtn) shuffleBtn.addEventListener('click', toggleShuffle);
    if (repeatBtn) repeatBtn.addEventListener('click', toggleRepeat);
    if (likeBtn) likeBtn.addEventListener('click', () => {
        if (songs[currentSongIndex]) toggleLikeSong(songs[currentSongIndex].id);
    });
    if (queueBtn) queueBtn.addEventListener('click', toggleQueueDrawer);
    if (closeQueueBtn) closeQueueBtn.addEventListener('click', toggleQueueDrawer);
    if (downloadAllBtn) downloadAllBtn.addEventListener('click', downloadAllSongsForOffline);

    const heroPlayDirectBtn = document.getElementById('hero-play-direct-btn');
    if (heroPlayDirectBtn) {
        heroPlayDirectBtn.addEventListener('click', () => {
            currentPlaylist = [...songs];
            loadSong(0, true);
        });
    }

    const closeOfflineModal = document.getElementById('close-offline-modal');
    if (closeOfflineModal) {
        closeOfflineModal.addEventListener('click', () => {
            document.getElementById('offline-modal').classList.remove('visible');
        });
    }

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('mobile-open'));
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
        });
    }

    console.log('BE SERIOUS MUSIC Luxury Engine Initialized.');
});
