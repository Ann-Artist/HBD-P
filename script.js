/* =====================================================================
   PRAGATI-GOOGLE  –  script.js
   Full Google Search Engine Interactivity & Real Photo/Video Integration
   ===================================================================== */

/* ============================ 1. CONTENT DATA ============================ */

// --- 1. HER PICS (18 photos - displayed on Knowledge Panel, Profile & Birthday Surprise) ---
const herImages = [
  { src: "assets/her pics/Screenshot_20261005_200156_Instagram.jpg.jpeg", caption: "Pragati - Main Character Vibe", h: 280, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/1000194796.jpg.jpeg", caption: "Bright & Happy Smile", h: 260, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200256_Instagram.jpg.jpeg", caption: "Golden Hour Smile", h: 260, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200314_Instagram.jpg.jpeg", caption: "Pretty in Every Moment", h: 290, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200327_Instagram.jpg.jpeg", caption: "Pure Elegance", h: 250, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200342_Instagram.jpg.jpeg", caption: "Favorite Pragati Shot", h: 270, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200359_Instagram.jpg.jpeg", caption: "Radiant Vibes", h: 230, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200413_Instagram.jpg.jpeg", caption: "Unmatched Energy", h: 280, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200426_Instagram.jpg.jpeg", caption: "Candid Moments", h: 240, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200440_Instagram.jpg.jpeg", caption: "Pragati Special", h: 260, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200509_Instagram.jpg.jpeg", caption: "Stunning Click", h: 290, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200530_Instagram.jpg.jpeg", caption: "Unforgettable Smile", h: 230, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/1000194645.jpg.jpeg", caption: "Campus Portrait", h: 280, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/1000194943.jpg.jpeg", caption: "College Memories", h: 270, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/1000195020.jpg.jpeg", caption: "Sweetest Memory", h: 250, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200136_Instagram.jpg.jpeg", caption: "Outdoors Memory", h: 280, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200213_Instagram.jpg.jpeg", caption: "Candid & Unplanned", h: 300, group: "The Birthday Girl", type: "her" },
  { src: "assets/her pics/Screenshot_20261005_200240_Instagram.jpg.jpeg", caption: "College Day Look", h: 220, group: "The Birthday Girl", type: "her" }
];

// --- 2. OUR PICS (32 photos - Group & Roommate memories) ---
const ourImages = [
  { src: "assets/our pics/WhatsApp Image 2026-10-05 at 7.40.25 PM.jpeg", caption: "Roommate Squad Goals", h: 270, group: "Our Favorite Memories", type: "our" },
  { src: "assets/our pics/WhatsApp Image 2026-10-05 at 7.40.18 PM.jpeg", caption: "Best Friends Forever", h: 250, group: "Our Favorite Memories", type: "our" },
  { src: "assets/our pics/WhatsApp Image 2026-10-05 at 5.34.50 PM.jpeg", caption: "Fun & Laughter Together", h: 280, group: "Our Favorite Memories", type: "our" },
  { src: "assets/our pics/Snapchat-1183438485.jpg.jpeg", caption: "Snapchat Shenanigans", h: 230, group: "College Memories", type: "our" },
  { src: "assets/our pics/Snapchat-937948270.jpg.jpeg", caption: "Hostel Fun Times", h: 240, group: "College Memories", type: "our" },
  { src: "assets/our pics/1000194454.jpg.jpeg", caption: "Late Night Tea Break", h: 260, group: "College Memories", type: "our" },
  { src: "assets/our pics/1000194498.jpg.jpeg", caption: "Unplanned Outing", h: 290, group: "College Memories", type: "our" },
  { src: "assets/our pics/1000194501.jpg.jpeg", caption: "College Campus Vibes", h: 220, group: "College Memories", type: "our" },
  { src: "assets/our pics/1000194510.jpg.jpeg", caption: "Canteen Conversations", h: 270, group: "College Memories", type: "our" },
  { src: "assets/our pics/1000194515.jpg.jpeg", caption: "Together is Better", h: 250, group: "College Memories", type: "our" },
  { src: "assets/our pics/1000194555.jpg.jpeg", caption: "Project Submission Day", h: 280, group: "College Memories", type: "our" },
  { src: "assets/our pics/1000194606.jpg.jpeg", caption: "Smiles Everywhere", h: 240, group: "Our Favorite Memories", type: "our" },
  { src: "assets/our pics/1000194612.jpg.jpeg", caption: "Hostel Lounge Chaos", h: 260, group: "Our Favorite Memories", type: "our" },
  { src: "assets/our pics/1000194618.jpg.jpeg", caption: "Memories Worth Keeping", h: 290, group: "Our Favorite Memories", type: "our" },
  { src: "assets/our pics/1000194630.jpg.jpeg", caption: "Exam Cramming & Laughs", h: 230, group: "Our Favorite Memories", type: "our" },
  { src: "assets/our pics/1000194642.jpg.jpeg", caption: "Crazy Moments", h: 270, group: "Our Favorite Memories", type: "our" },
  { src: "assets/our pics/1000194645.jpg.jpeg", caption: "Inseparable Trio", h: 250, group: "Our Favorite Memories", type: "our" },
  { src: "assets/our pics/1000194678.jpg.jpeg", caption: "Sunny College Days", h: 280, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000194693.jpg.jpeg", caption: "Post Exam Celebration", h: 240, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000194772.jpg.jpeg", caption: "Happy Smiles", h: 260, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000194778.jpg.jpeg", caption: "Special Memories", h: 290, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000194796.jpg.jpeg", caption: "Friendship Magic", h: 230, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000194943.jpg.jpeg", caption: "Good Times Together", h: 270, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000194969.jpg.jpeg", caption: "Roommate Diaries", h: 250, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000195020.jpg.jpeg", caption: "Campus Walk", h: 280, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000195038.jpg.jpeg", caption: "Chilling Together", h: 240, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000195050.jpg.jpeg", caption: "Laughter Unlimited", h: 260, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000195133.jpg.jpeg", caption: "Unfiltered Happiness", h: 290, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000195139.jpg.jpeg", caption: "Awesome Days", h: 230, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000195201.jpg.jpeg", caption: "Cherished Memories", h: 270, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000195204.jpg.jpeg", caption: "Friends Forever", h: 250, group: "Random Moments", type: "our" },
  { src: "assets/our pics/1000195219.jpg.jpeg", caption: "College Chronicles", h: 280, group: "Random Moments", type: "our" }
];

// --- 3. ALL IMAGES MIXED (50 photos total for Images tab) ---
function createMixedImages() {
  const mixed = [];
  const maxLen = Math.max(herImages.length, ourImages.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < herImages.length) mixed.push(herImages[i]);
    if (i < ourImages.length) mixed.push(ourImages[i]);
    if (i + 1 < ourImages.length && i % 2 === 0) mixed.push(ourImages[++i]);
  }
  return mixed;
}

const images = createMixedImages();

// --- 4. REAL VIDEO DATA (4 Videos - Pragati-Only Thumbnails) ---
const videos = [
  { 
    id: "v1",
    title: "Basketball Court Bukchodi | Nothing Serious, Just Timepass", 
    thumbnail: "assets/her pics/Screenshot_20261005_200156_Instagram.jpg.jpeg", 
    source: "assets/videos/Snapchat-1126104030.mp4", 
    duration: "0:15", 
    date: "Campus Memory", 
    channel: "Pragati Clips",
    description: "Just chilling, walking out, and doing absolutely nothing productive.",
    detail: {
      author: "Anusha + Anuja",
      views: "1.8K views",
      content: "Just chilling on the basketball court, walking around, and top-tier timepass!"
    }
  },
  { 
    id: "v2",
    title: "Undar Ka Artist | Carpenter Jugado on Work", 
    thumbnail: "assets/her pics/1000194796.jpg.jpeg", 
    source: "assets/videos/Snapchat-1425987608.mp4", 
    duration: "0:12", 
    date: "Hostel Memory", 
    channel: "Jugaad Chronicles",
    description: "When there is work to be done, creativity and jugaad take over.",
    detail: {
      author: "Anusha + Anuja",
      views: "1.4K views",
      content: "Unleashing the inner carpenter and artist with pure jugaad skills!"
    }
  },
  { 
    id: "v3",
    title: "D-Mart Mein Bakchodi | Top Level Timepass", 
    thumbnail: "assets/her pics/Screenshot_20261005_200256_Instagram.jpg.jpeg", 
    source: "assets/videos/Snapchat-1502337192.mp4", 
    duration: "0:18", 
    date: "Shopping Memory", 
    channel: "D-Mart Diaries",
    description: "Went to D-Mart. Somehow the shopping became secondary.",
    detail: {
      author: "Anusha + Anuja",
      views: "2.1K views",
      content: "A routine D-Mart shopping trip instantly turns into top-level timepass and fun."
    }
  },
  { 
    id: "v4",
    title: "Undar Ka Child, Bahar Playing Scooty", 
    thumbnail: "assets/her pics/Screenshot_20261005_200314_Instagram.jpg.jpeg", 
    source: "assets/videos/Snapchat-1583948655.mp4", 
    duration: "0:10", 
    date: "Random Fun", 
    channel: "Scooty Times",
    description: "Inside: complete child mode. Outside: casually playing on a kid’s scooty.",
    detail: {
      author: "Anusha + Anuja",
      views: "1.9K views",
      content: "Unleashing the inner child while riding around on a kid's scooty!"
    }
  }
];

// --- Standard Search Results ---
const results = [
  {
    id: "res-profile",
    url: "pragati.search › profile",
    fullUrl: "https://pragati.search/profile/pragati-bhachhav",
    title: "Pragati Madhukar Bachhav — Profile & Biography",
    desc: "Information Technology 3rd Year student at JSPM's JSCOE, Pune. Originally from Malegaon. Known for her sassy personality, slaying, reading books & novels, and iconic donkey laugh.",
    meta: "Official Profile • Verified",
    sitelinks: [
      { id: "sl-college", title: "Studies & College", desc: "IT 3rd Year at JSPM's JSCOE." },
      { id: "sl-favorites", title: "Favorites & Hobbies", desc: "Biryani, Light Blue & Pink, Shopping, 2010s Music." },
      { id: "sl-knownfor", title: "Known For", desc: "Early sleeper, Sassy vibe, Slaying, Iconic laugh." },
      { id: "sl-gallery", title: "Photo & Video Gallery", desc: "Curated collection of memories with Anusha + Anuja." }
    ],
    detail: {
      siteName: "Pragati Official Knowledge Graph",
      category: "Personal Profile",
      published: "2026 Edition",
      author: "Anusha + Anuja",
      content: `
        <h3>About Pragati Madhukar Bachhav</h3>
        <p><strong>Pragati Madhukar Bachhav</strong> (also known as <em>Pagati</em>) is a 21-year-old Information Technology student in her 3rd Year at JSPM's Jayawantrao Sawant College of Engineering (JSCOE), Pune. Originally from Malegaon, she lives in Pune for her studies.</p>
        <blockquote>"All the best for the future! May you get everything you wish for. Lots of Love!!!" — Anusha + Anuja</blockquote>
        <h3>Profile Overview</h3>
        <ul>
          <li><strong>Born:</strong> 6 October 2005 (Age 21)</li>
          <li><strong>Hometown &amp; Based in:</strong> Malegaon &bull; Currently based in Pune</li>
          <li><strong>Education:</strong> Information Technology, 3rd Year at JSPM's JSCOE</li>
          <li><strong>Favorites:</strong> Non-veg &amp; Biryani, Light Blue &amp; Pink, 2010s Hindi songs &amp; Akshay Kumar songs</li>
          <li><strong>Hobbies &amp; Loves:</strong> Reading books &amp; novels, Shopping</li>
          <li><strong>Known For:</strong> Being the early sleeper, her sassy personality, "Slaying", and her iconic donkey-like laugh</li>
        </ul>
      `
    }
  },
  {
    id: "res-college",
    url: "pragati.search › college-life",
    fullUrl: "https://pragati.search/college/jscoe-it-3rd-year",
    title: "Pragati Bhachhav | JSPM's JSCOE — Information Technology (3rd Year)",
    desc: "Academic journey of Pragati Madhukar Bachhav in Information Technology at JSPM's Jayawantrao Sawant College of Engineering, Pune.",
    meta: "Updated Recently • 3 min read",
    sitelinks: [],
    detail: {
      siteName: "Campus Chronicles",
      category: "College Life",
      published: "2026",
      author: "Anusha + Anuja",
      content: `
        <h3>JSPM's JSCOE IT Department</h3>
        <p>Pragati is in her 3rd Year of Information Technology at JSCOE, Pune. From campus lectures to study breaks with 2010s Hindi &amp; Akshay Kumar songs playing in the background, her presence makes college life bright and fun.</p>
      `
    }
  },
  {
    id: "res-memories",
    url: "pragati.search › memories-vault",
    fullUrl: "https://pragati.search/memories/vault-21",
    title: "Pragati Bhachhav — Photos, Clips & Timeline",
    desc: "A collection of photos and videos captured across awesome moments with Anusha + Anuja. Check out the Images and Videos tabs for the full view.",
    meta: "Photos • Videos • Gallery",
    sitelinks: [],
    detail: {
      siteName: "Pragati Media Vault",
      category: "Archive",
      published: "2026",
      author: "Anusha + Anuja",
      content: `
        <h3>The Memory Vault</h3>
        <p>Browse through captured candid moments, campus memories, study breaks, and birthday celebrations shared with Anusha + Anuja.</p>
        <p>Use the <strong>Images</strong> and <strong>Videos</strong> tabs at the top of Google Search to inspect photos and video clips!</p>
      `
    }
  },
  {
    id: "res-today",
    url: "pragati.search › birthday-special",
    fullUrl: "https://pragati.search/today/birthday-21",
    title: "Pragati Bhachhav — 21st Birthday Reveal",
    desc: "Turning 21 on 6 October 2005! Birthday wishes from Anusha + Anuja, candle blowing reveal, and memories.",
    meta: "Special Occasion • Level 21 Unlocked",
    sitelinks: [],
    detail: {
      siteName: "Birthday Special Log",
      category: "Special Occasion",
      published: "6 October 2026",
      author: "Anusha + Anuja",
      content: `
        <h3>Happy 21st Birthday Pragati!</h3>
        <p>“All the best for the future! May you get everything you wish for. Lots of Love!!!” — From Anusha + Anuja</p>
      `
    }
  }
];

// --- Knowledge Panel Profile ---
const profile = {
  name: "Pragati Madhukar Bachhav",
  aka: "Pagati",
  subtitle: "Also known as Pagati",
  about: [
    { label: "Age", value: "21" },
    { label: "Born", value: "6 October 2005" },
    { label: "From", value: "Malegaon" },
    { label: "Based in", value: "Pune" },
    { label: "Studies", value: "Information Technology, 3rd Year" },
    { label: "College", value: "JSPM's JSCOE" }
  ],
  favorites: [
    { label: "Food", value: "Non-veg & Biryani" },
    { label: "Colors", value: "Light Blue & Pink" },
    { label: "Music", value: "2010s Hindi songs & Akshay Kumar songs" },
    { label: "Hobby", value: "Reading books & novels" },
    { label: "Loves", value: "Shopping" }
  ],
  knownFor: [
    "Being the early sleeper",
    "Her sassy personality",
    "“Slaying”",
    "Her iconic donkey-like laugh"
  ]
};

// --- Posts ("What people are saying") ---
const posts = [
  {
    id: "post-1",
    title: "Sassy Queen & Biryani Enthusiast",
    body: "Reading novels, shopping, delicious biryani treats, and sleeping early by 10 PM. Pragati is truly irreplaceable!",
    who: "Anusha",
    meta: "Message • Today",
    detail: {
      siteName: "Message from Anusha",
      category: "Friend Note",
      published: "2026",
      author: "Anusha",
      content: `
        <h3>Dear Pragati,</h3>
        <p>From studying IT at JSCOE to reading novels and shopping, spending time with you is always full of fun.</p>
        <p>“All the best for the future! May you get everything you wish for. Lots of Love!!!”</p>
      `
    }
  },
  {
    id: "post-2",
    title: "Iconic Laugh & Endless Slaying",
    body: "Her laugh literally sounds like a donkey and she slays every single day! Happy 21st Birthday Pagati!",
    who: "Anuja",
    meta: "Message • Today",
    detail: {
      siteName: "Message from Anuja",
      category: "Friend Note",
      published: "2026",
      author: "Anuja",
      content: `
        <h3>To Pragati (Pagati)!</h3>
        <p>To our favorite early sleeper! 2010s Hindi songs, Akshay Kumar movie tracks, light blue &amp; pink aesthetics, and endless laughter.</p>
        <p>“All the best for the future! May you get everything you wish for. Lots of Love!!!”</p>
      `
    }
  },
  {
    id: "post-3",
    title: "From Anusha + Anuja",
    body: "Celebrating 21 years of Pragati Madhukar Bachhav! Sending lots of love on your special day.",
    who: "Anusha + Anuja",
    meta: "Special Wish • 6 Oct",
    detail: {
      siteName: "Wish from Anusha + Anuja",
      category: "Birthday Wish",
      published: "2026",
      author: "Anusha + Anuja",
      content: `
        <h3>Birthday Wishes for Pragati</h3>
        <p>“All the best for the future! May you get everything you wish for. Lots of Love!!!”</p>
        <p>With lots of love, <strong>Anusha + Anuja</strong></p>
      `
    }
  }
];

// --- News items (6 Main Google News-Style Articles) ---
const news = [
  {
    id: "news-1",
    src: "CAMPUS CHRONICLES",
    title: "Pragati Bhachhav Turns 21, Still Chooses Sleep Over Everything",
    desc: "Sources confirm that the birthday girl remains committed to her early-sleeper lifestyle.",
    time: "2 hours ago",
    thumb: "assets/her pics/Screenshot_20261005_200156_Instagram.jpg.jpeg",
    detail: {
      siteName: "Campus Chronicles",
      category: "Campus News",
      published: "2 hours ago",
      author: "Anusha + Anuja",
      content: `
        <h3>Pragati Bhachhav Turns 21, Still Chooses Sleep Over Everything</h3>
        <p><strong>PUNE / CAMPUS</strong> — Sources close to Pragati Madhukar Bachhav confirm that despite turning 21 today, her strict early-sleeper lifestyle remains completely non-negotiable.</p>
        <p>Witnesses state that whenever evening plans are discussed, Pragati's default response remains an unbothered <em>"I'm going to sleep"</em>.</p>
        <p>“Her commitment to early sleeping is legendary,” remarked her friends Anusha + Anuja. “No matter how exciting the evening is, 10 PM hits and Pagati is ready for bed.”</p>
      `
    }
  },
  {
    id: "news-2",
    src: "THE DAILY SHOPPER",
    title: "Breaking News: Pagati Spotted Shopping Again",
    desc: "Witnesses report that Pragati entered a shopping store with no intention of leaving empty-handed.",
    time: "4 hours ago",
    thumb: "assets/her pics/Screenshot_20261005_200314_Instagram.jpg.jpeg",
    detail: {
      siteName: "The Daily Shopper",
      category: "Shopping & Lifestyle",
      published: "4 hours ago",
      author: "Anusha + Anuja",
      content: `
        <h3>Breaking News: Pagati Spotted Shopping Again</h3>
        <p><strong>PUNE</strong> — Eyewitnesses in Pune reported seeing Pragati Madhukar Bachhav browsing through retail stores with unmatched determination and flair.</p>
        <p>According to sources, Pragati loves shopping so much that any quick store visit immediately transforms into a full-scale wardrobe update.</p>
        <p>“If there's a light blue or pink outfit in sight, you can be 100% sure it's coming home with her,” confirmed witnesses.</p>
      `
    }
  },
  {
    id: "news-3",
    src: "HOSTEL GAZETTE",
    title: "Scientists Finally Study Pragati’s Legendary Donkey Laugh",
    desc: "Researchers are still trying to understand how one laugh can be heard from three rooms away.",
    time: "6 hours ago",
    thumb: "assets/our pics/WhatsApp Image 2026-10-05 at 7.40.25 PM.jpeg",
    detail: {
      siteName: "Hostel Gazette",
      category: "Feature Story",
      published: "6 hours ago",
      author: "Anusha + Anuja",
      content: `
        <h3>Scientists Study Pragati’s Legendary Laugh</h3>
        <p><strong>HOSTEL LOUNGE</strong> — Acoustic researchers have initiated an in-depth study into the powerful sound frequencies of Pragati's iconic laugh.</p>
        <p>Described by friends as sounding delightfully like a donkey, Pragati's unfiltered, contagious laughter easily penetrates three closed doors and brightens up the entire floor.</p>
        <p>“It is physically impossible not to laugh along when Pagati starts laughing,” reported hostel residents.</p>
      `
    }
  },
  {
    id: "news-4",
    src: "INSIDER NEWS",
    title: "21-Year-Old Pragati Declared Officially Sassy",
    desc: "Friends unanimously agree that ‘sassy’ is the most accurate description.",
    time: "8 hours ago",
    thumb: "assets/her pics/Screenshot_20261005_200413_Instagram.jpg.jpeg",
    detail: {
      siteName: "Insider News",
      category: "Personality Spotlight",
      published: "8 hours ago",
      author: "Anusha + Anuja",
      content: `
        <h3>21-Year-Old Pragati Declared Officially Sassy</h3>
        <p><strong>JSCOE CAMPUS</strong> — A committee of best friends has officially classified Pragati Madhukar Bachhav as 100% sassy on her 21st birthday.</p>
        <p>Whether turning down late-night study sessions to get her beauty sleep or slaying every campus outfit, her sassy charm remains unmatched.</p>
        <p>“Sassy is not just a personality trait for Pragati; it's a lifestyle,” noted the committee.</p>
      `
    }
  },
  {
    id: "news-5",
    src: "FOOD & CAMPUS TIMES",
    title: "Pune Student Pragati Chooses Biryani Over Almost Everything",
    desc: "Sources close to her confirm that non-veg and biryani remain among her top priorities.",
    time: "12 hours ago",
    thumb: "assets/our pics/1000194454.jpg.jpeg",
    detail: {
      siteName: "Food & Campus Times",
      category: "Culinary News",
      published: "12 hours ago",
      author: "Anusha + Anuja",
      content: `
        <h3>Pune Student Pragati Chooses Biryani Over Almost Everything</h3>
        <p><strong>PUNE CULINARY LOG</strong> — Reliable sources confirm that when deciding what to eat, non-veg and Biryani will win against any competing meal option 10 times out of 10 for Pragati.</p>
        <p>Friends note that offering Biryani is the fastest way to get Pragati's full attention and guarantee a great mood.</p>
      `
    }
  },
  {
    id: "news-6",
    src: "LITERARY WEEKLY",
    title: "Local Reader Finishes Another Novel, Immediately Looks for the Next One",
    desc: "Pragati continues her long-running relationship with books and novels.",
    time: "1 day ago",
    thumb: "assets/her pics/Screenshot_20261005_200426_Instagram.jpg.jpeg",
    detail: {
      siteName: "Literary Weekly",
      category: "Book Review",
      published: "1 day ago",
      author: "Anusha + Anuja",
      content: `
        <h3>Local Reader Finishes Another Novel in Record Time</h3>
        <p><strong>BOOKWORM DAILY</strong> — Information Technology student Pragati Bachhav has successfully completed yet another novel, immediately turning her attention to finding her next read.</p>
        <p>When not slaying or sleeping early, Pragati can usually be found immersed in a good book or novel with her favorite 2010s Hindi &amp; Akshay Kumar playlist in the background.</p>
      `
    }
  }
];

// --- Additional Short News Headlines ---
const quickNews = [
  {
    id: "qnews-1",
    src: "DAILY BULLETIN",
    title: "Pagati Says ‘I’m Going to Sleep’ — Friendship Group Not Surprised",
    time: "1 hour ago",
    detail: {
      siteName: "Daily Bulletin",
      category: "Quick Update",
      published: "1 hour ago",
      author: "Anusha + Anuja",
      content: "<h3>Quick Update</h3><p>When evening plans were announced, Pragati declared <em>\"I'm going to sleep\"</em>. Her friendship group reported zero surprise.</p>"
    }
  },
  {
    id: "qnews-2",
    src: "TRENDING TODAY",
    title: "Urgent Update: Pragati Has Been Seen Slaying Again",
    time: "3 hours ago",
    detail: {
      siteName: "Trending Today",
      category: "Quick Update",
      published: "3 hours ago",
      author: "Anusha + Anuja",
      content: "<h3>Urgent Update</h3><p>Eyewitnesses confirm that Pragati Madhukar Bachhav was spotted slaying again with maximum sassy energy.</p>"
    }
  },
  {
    id: "qnews-3",
    src: "MUSIC WIRE",
    title: "Akshay Kumar Songs Continue to Dominate Pragati’s Playlist",
    time: "5 hours ago",
    detail: {
      siteName: "Music Wire",
      category: "Quick Update",
      published: "5 hours ago",
      author: "Anusha + Anuja",
      content: "<h3>Music Wire</h3><p>2010s Hindi hit tracks and Akshay Kumar chartbusters continue to hold the #1 spot on Pragati's daily music playlist.</p>"
    }
  },
  {
    id: "qnews-4",
    src: "COLOR TRENDS",
    title: "Light Blue and Pink Officially Declared Pragati Colors",
    time: "7 hours ago",
    detail: {
      siteName: "Color Trends",
      category: "Quick Update",
      published: "7 hours ago",
      author: "Anusha + Anuja",
      content: "<h3>Color Trends</h3><p>Light Blue and Pink have been officially designated as Pragati's signature favorite colors.</p>"
    }
  },
  {
    id: "qnews-5",
    src: "HOSTEL CHRONICLES",
    title: "21 Years of Pragati: Friends Still Trying to Keep Up",
    time: "10 hours ago",
    detail: {
      siteName: "Hostel Chronicles",
      category: "Quick Update",
      published: "10 hours ago",
      author: "Anusha + Anuja",
      content: "<h3>Hostel Chronicles</h3><p>As Pragati turns 21, her friends Anusha + Anuja admit they are still trying to keep up with her sassy vibe, reading speed, and shopping energy!</p>"
    }
  }
];

// --- Birthday Letter ---
const message = {
  title: "Happy 21st Birthday, Pragati!",
  subtitle: "(a.k.a. Pagati)",
  sign: "With lots of love,<br><strong>Anusha &amp; Anuja</strong>"
};

const suggestionList = [
  "Pragati Bhachhav",
  "Pragati Bhachhav profile",
  "Pragati college memories",
  "Pragati Birthday"
];
const wishText = "“All the best for the future! May you get everything you wish for. Lots of Love!!!” — From Anusha + Anuja ❤️";
const resultCount = "About 1,840 results (0.46 seconds)";

/* ========================= 2. SEARCH TRIGGERS ========================= */
const searchTriggers = {
  "pragati bhachhav": (q) => showProfile(q),
  "pragati bachhav": (q) => showProfile(q),
  "pragati": (q) => showProfile(q),
  "pagati": (q) => showProfile(q),
  "pragati birthday": (q) => showBirthdaySurprise(q),
  "pragati bhachhav profile": (q) => showProfile(q),
  "pragati college memories": (q) => { showProfile(q); setTab("news"); },
  "birthday": (q) => showBirthdaySurprise(q)
};

function handleSearch(raw) {
  const q = normalize(raw);
  if (!q) return;
  const fn = searchTriggers[q];
  fn ? fn(raw.trim()) : showProfile(raw.trim());
}

/* =========================== 3. HELPERS =========================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const normalize = (s) => s.toLowerCase().replace(/\s+/g, " ").trim();
const esc = (s) => s ? s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])) : "";

function placeholder(label, h = 260, i = 0) {
  const c = ["#fce8e6", "#e8f0fe", "#e6f4ea", "#fef7e0", "#f3e8fd"][i % 5];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='${h}'><rect width='100%' height='100%' fill='${c}'/><text x='50%' y='50%' font-family='Arial' font-size='18' fill='#5f6368' text-anchor='middle'>${label}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function fixImgs(root) {
  $$("img[data-h]", root).forEach((im) =>
    im.addEventListener("error", () => { im.src = placeholder(im.dataset.l || "Photo", +im.dataset.h || 220, +im.dataset.i || 0); }, { once: true }));
}

const imgTag = (o, i) => `<img src="${encodeURI(o.src)}" alt="Photo ${i + 1}" data-h="${o.h || 220}" data-i="${i}" data-l="Photo ${i + 1}" loading="lazy">`;
const vidTag = (v, i) => `<img src="${encodeURI(v.thumbnail)}" alt="${esc(v.title)}" data-h="225" data-i="${i}" data-l="Video ${i + 1}">`;

function galleryHTML(list) {
  return `<div class="gallery">${list.map((o) => {
    const idx = list.indexOf(o);
    return `<figure data-i="${idx}">${imgTag(o, idx)}</figure>`;
  }).join("")}</div>`;
}

function videosHTML() {
  return `<div class="vgrid">${videos.map((v, i) =>
    `<div class="vitem" data-v="${i}">
      <div class="vthumb">${vidTag(v, i)}<span class="dur">${v.duration}</span></div>
      <div>
        <div style="font-size:12px;color:#70757a;margin-bottom:4px">YouTube &bull; ${esc(v.channel || "Pragati Clips")} &bull; ${v.date}</div>
        <h3 style="font-size:17px;color:#1a0dab;font-weight:400;margin-bottom:6px">${esc(v.title)}</h3>
        <p style="font-size:13px;color:#4d5156;line-height:1.5">${esc(v.description)}</p>
        <p style="font-size:12px;color:#70757a;margin-top:6px">${v.detail ? v.detail.views : "1.5K views"} &bull; Uploaded by ${v.detail ? v.detail.author : "Anusha + Anuja"}</p>
      </div>
    </div>`
  ).join("")}</div>`;
}

/* ============================== 4. VIEWS ============================== */
let currentView = "home", currentQuery = "";

function showView(id) {
  $$(".view").forEach((v) => { v.classList.remove("active", "show"); });
  const el = $("#" + id);
  el.classList.add("active");
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("show")));
  currentView = id;
  window.scrollTo(0, 0);
}

function showHome() { 
  stopBirthday(); 
  $$("input").forEach((i) => (i.value = "")); 
  showView("home"); 
}

function showProfile(q) {
  stopBirthday();
  currentQuery = q || "Pragati Bhachhav";
  $("#resultsInput").value = currentQuery;
  showView("results");
  setTab("all");
}

function entityHTML() {
  const p = profile;
  const n = news[0];

  return `
  <div class="cols">
    <!-- LEFT COLUMN: SEARCH RESULTS -->
    <div class="main">
      
      <!-- RESULTS LIST -->
      ${results.map((r) => `
        <div class="res" data-res-id="${r.id}">
          <div class="res-url-box">
            <div class="res-favicon">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#5f6368"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <div>
              <div class="res-domain">${r.url}</div>
            </div>
          </div>
          <h3 onclick="openResultDetail('${r.id}')">${esc(r.title)}</h3>
          <p>${esc(r.desc)}</p>
          ${r.meta ? `<div class="res-meta">${r.meta}</div>` : ""}
          ${r.sitelinks && r.sitelinks.length > 0 ? `
            <div class="sitelinks-grid">
              ${r.sitelinks.map(s => `
                <div class="sitelink-item" onclick="openResultDetail('${r.id}')">
                  <h4>${esc(s.title)}</h4>
                  <p>${esc(s.desc)}</p>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>
      `).join("")}

      <!-- WHAT PEOPLE ARE SAYING -->
      <h3 class="sec-title">What people are saying</h3>
      <p class="sec-sub">Messages and memories from friends</p>
      <div class="posts-grid">
        ${posts.map((o) => `
          <div class="post-card" onclick="openPostDetail('${o.id}')">
            <h4>${esc(o.title)}</h4>
            <p>${esc(o.body)}</p>
            <div class="post-author">
              <div class="post-av">${o.who[0]}</div>
              <div>
                <strong>${esc(o.who)}</strong><br>
                <span style="color:#70757a">${o.meta}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- TOP STORIES -->
      <h3 class="sec-title">Top Stories</h3>
      <p class="sec-sub">Stories from campus & college life</p>
      ${news.slice(0, 3).map((item) => `
        <div class="ncard" onclick="openNewsDetail('${item.id}')">
          <div class="ncard-content">
            <div class="src">${esc(item.src)}</div>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.desc)}</p>
            <small>${esc(item.time)}</small>
          </div>
          ${item.thumb ? `<div class="ncard-thumb"><img src="${encodeURI(item.thumb)}" alt="News thumbnail" loading="lazy"></div>` : ""}
        </div>
      `).join("")}

    </div>

    <!-- RIGHT COLUMN: KNOWLEDGE PANEL (ONLY HER PICS) -->
    <aside class="about-panel">
      <div class="kp-header">
        <h2 class="kp-title">${esc(p.name)}</h2>
        <p class="kp-subtitle"><em>${esc(p.subtitle)}</em></p>
      </div>

      <div class="kp-collage" onclick="openLightbox(0, herImages)">
        <div class="kp-col-main">
          ${imgTag(herImages[0], 0)}
        </div>
        <div class="kp-col-side">
          <div>${imgTag(herImages[1], 1)}</div>
          <div>${imgTag(herImages[2], 2)}</div>
        </div>
      </div>

      <!-- ABOUT SECTION -->
      <div class="kp-section">
        <h3 class="kp-sec-header">About</h3>
        <div class="kp-facts">
          ${p.about.map((f) => `
            <div class="kp-fact-row" onclick="openFactDetail('${esc(f.label)}', '${esc(f.value)}')">
              <span>${esc(f.label)}</span>
              <span>${esc(f.value)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- FAVORITES SECTION -->
      <div class="kp-section">
        <h3 class="kp-sec-header">Favorites</h3>
        <div class="kp-facts">
          ${p.favorites.map((f) => `
            <div class="kp-fact-row" onclick="openFactDetail('${esc(f.label)}', '${esc(f.value)}')">
              <span>${esc(f.label)}</span>
              <span>${esc(f.value)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- KNOWN FOR SECTION -->
      <div class="kp-section">
        <h3 class="kp-sec-header">Known For</h3>
        <div class="kp-bullet-list">
          ${p.knownFor.map((item) => `
            <div class="kp-bullet-item" onclick="openFactDetail('Known For', '${esc(item)}')">&bull; ${esc(item)}</div>
          `).join("")}
        </div>
      </div>
    </aside>
  </div>`;
}

function setTab(tab) {
  $$("#tabs .tab-btn").forEach((b) => b.classList.toggle("on", b.dataset.tab === tab));
  const box = $("#tabContent");
  
  if (tab === "all") {
    box.innerHTML = entityHTML();
  } else if (tab === "images") {
    box.innerHTML = galleryHTML(images);
  } else if (tab === "videos") {
    box.innerHTML = videosHTML();
  } else if (tab === "news") {
    box.innerHTML = `
      <div class="news-list">
        ${news.map((n) => `
          <div class="ncard" onclick="openNewsDetail('${n.id}')">
            <div class="ncard-content">
              <div class="src">${esc(n.src)}</div>
              <h3>${esc(n.title)}</h3>
              <p>${esc(n.desc)}</p>
              <small>${esc(n.time)}</small>
            </div>
            ${n.thumb ? `<div class="ncard-thumb"><img src="${encodeURI(n.thumb)}" alt="News thumbnail" loading="lazy"></div>` : ""}
          </div>
        `).join("")}
      </div>

      <div class="quick-news-sec">
        <h3 class="quick-news-title">More Stories &amp; Quick Coverage</h3>
        <div class="quick-news-grid">
          ${quickNews.map((qn) => `
            <div class="quick-news-item" onclick="openQuickNewsDetail('${qn.id}')">
              <div>
                <div class="src" style="font-size:11px;color:#70757a;margin-bottom:2px">${esc(qn.src)}</div>
                <h4>${esc(qn.title)}</h4>
              </div>
              <span>${esc(qn.time)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  fixImgs(box);
}

/* ========================== 5. DETAIL MODAL HANDLERS ========================== */

function openDetailModal(data) {
  $("#dSiteName").textContent = data.siteName || "pragati.search";
  $("#dUrl").textContent = data.url || "https://pragati.search/details";
  $("#dTitle").textContent = data.title || "Detail View";
  $("#dTag").textContent = data.category || "Article";
  $("#dDate").textContent = data.published || "2026 Edition";
  $("#dAuthor").textContent = data.author ? `By ${data.author}` : "Verified Result";
  $("#dBody").innerHTML = data.content || "<p>No detailed information available.</p>";

  $("#detailModal").classList.add("open");
}

function openResultDetail(resId) {
  const r = results.find((item) => item.id === resId) || results[0];
  openDetailModal({
    siteName: r.detail.siteName,
    url: r.fullUrl,
    title: r.title,
    category: r.detail.category,
    published: r.detail.published,
    author: r.detail.author,
    content: r.detail.content
  });
}

function openNewsDetail(newsId) {
  const n = news.find((item) => item.id === newsId) || news[0];
  openDetailModal({
    siteName: n.detail.siteName,
    url: "https://news.google.com/article/" + n.id,
    title: n.title,
    category: n.detail.category,
    published: n.detail.published,
    author: n.detail.author,
    content: n.detail.content
  });
}

function openQuickNewsDetail(qId) {
  const q = quickNews.find((item) => item.id === qId) || quickNews[0];
  openDetailModal({
    siteName: q.detail.siteName,
    url: "https://news.google.com/quick-update",
    title: q.title,
    category: q.detail.category,
    published: q.detail.published,
    author: q.detail.author,
    content: q.detail.content
  });
}

function openPostDetail(postId) {
  const p = posts.find((item) => item.id === postId) || posts[0];
  openDetailModal({
    siteName: p.detail.siteName,
    url: "https://pragati.search/messages/" + p.who.toLowerCase(),
    title: p.title,
    category: p.detail.category,
    published: p.detail.published,
    author: p.detail.author,
    content: p.detail.content
  });
}

function openFactDetail(label, value) {
  openDetailModal({
    siteName: "Google Knowledge Graph",
    url: "https://pragati.search/knowledge-panel",
    title: `${label}: ${value}`,
    category: "Verified Knowledge Fact",
    published: "Live Data",
    author: "Knowledge Graph",
    content: `
      <h3>${label} — ${value}</h3>
      <p>This is a verified fact about <strong>Pragati Bhachhav</strong> stored in the Knowledge Graph.</p>
    `
  });
}

/* ========================== 6. SUGGESTIONS & AUTOCOMPLETE ========================== */

function bindSearch(form) {
  const input = $("input", form);
  const list = $(".suggest", form);
  let activeIndex = -1;

  const submit = (v) => { 
    list.classList.remove("open"); 
    input.blur(); 
    handleSearch(v ?? input.value); 
  };

  input.addEventListener("input", () => {
    const q = normalize(input.value);
    const matches = q ? suggestionList.filter((s) => normalize(s).includes(q)) : [];
    
    if (matches.length > 0 && q) {
      list.innerHTML = matches.map((s, idx) => `
        <li data-idx="${idx}">
          <svg class="s-ico" viewBox="0 0 24 24"><path d="M15.5 14h-.8l-.3-.3A6.5 6.5 0 1 0 14 15.5l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>
          <span>${esc(s)}</span>
        </li>
      `).join("");
      list.classList.add("open");
    } else {
      list.classList.remove("open");
    }
  });

  input.addEventListener("keydown", (e) => {
    const items = $$("li", list);
    if (!list.classList.contains("open") || items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % items.length;
      items.forEach((li, idx) => li.classList.toggle("active-suggest", idx === activeIndex));
      input.value = items[activeIndex].querySelector("span").textContent;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      items.forEach((li, idx) => li.classList.toggle("active-suggest", idx === activeIndex));
      input.value = items[activeIndex].querySelector("span").textContent;
    }
  });

  list.addEventListener("mousedown", (e) => { 
    const li = e.target.closest("li"); 
    if (li) { 
      const txt = li.querySelector("span").textContent;
      input.value = txt; 
      submit(txt); 
    } 
  });

  form.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    submit(); 
  });

  input.addEventListener("blur", () => setTimeout(() => list.classList.remove("open"), 200));
}

/* ======================= 7. LIGHTBOX & VIDEO ======================= */

let lbIndex = 0;
let currentLightboxList = images;

function openLightbox(i, customList) {
  const list = customList || currentLightboxList || images;
  lbIndex = (i + list.length) % list.length;
  currentLightboxList = list;
  
  const o = list[lbIndex];
  const im = $("#lbImg");
  im.src = encodeURI(o.src);
  im.addEventListener("error", () => { im.src = placeholder("Photo " + (lbIndex + 1), 400, lbIndex); }, { once: true });
  
  $("#lbInfoGroup").textContent = o.group || "Photo Collection";
  $("#lightbox").classList.add("open");
}

function openVideo(i) {
  const v = videos[i] || videos[0];
  const el = $("#mainVideo");
  const miss = $("#vMissMsg");

  miss.style.display = "none";
  el.onerror = () => { miss.style.display = "block"; };
  el.src = encodeURI(v.source); 
  el.load();

  $("#vTitle").textContent = v.title;
  $("#vDesc").textContent = v.description + " " + (v.detail ? v.detail.content : "");
  $("#vMeta").textContent = `Duration: ${v.duration} • Added on ${v.date}`;
  $("#videoModal").classList.add("open");
}

function closeModals() {
  $$(".modal").forEach((m) => m.classList.remove("open"));
  const el = $("#mainVideo"); 
  if (el) { el.pause(); el.removeAttribute("src"); el.load(); }
}

/* ====================== 8. BIRTHDAY EXPERIENCE ====================== */

const cv = $("#confetti"), cx = cv.getContext("2d");
const COLORS = ["#f4a6b8", "#ffd36e", "#8ec5fc", "#b8e0c4", "#d4b5f0", "#ea4335", "#4285f4"];
let parts = [], raf = null, confettiTimer = null, timers = [];

function sizeCanvas() { cv.width = innerWidth; cv.height = innerHeight; }

function addConfetti(n, burst) {
  for (let i = 0; i < n; i++) {
    parts.push({
      x: burst ? innerWidth / 2 : Math.random() * innerWidth,
      y: burst ? innerHeight * 0.55 : -10,
      vx: burst ? (Math.random() - 0.5) * 16 : (Math.random() - 0.5) * 2,
      vy: burst ? -Math.random() * 14 - 4 : Math.random() * 2 + 1.5,
      s: Math.random() * 8 + 4,
      r: Math.random() * 6,
      vr: Math.random() * 0.2 - 0.1,
      c: COLORS[i % COLORS.length]
    });
  }
  if (!raf) raf = requestAnimationFrame(tick);
}

function tick() {
  cx.clearRect(0, 0, cv.width, cv.height);
  parts = parts.filter((p) => p.y < cv.height + 20);
  parts.forEach((p) => {
    p.x += p.vx; p.y += p.vy; p.vy = Math.min(p.vy + 0.15, 3.5); p.r += p.vr;
    cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); cx.restore();
  });
  raf = parts.length ? requestAnimationFrame(tick) : null;
}

function makeBalloons() {
  $("#balloons").innerHTML = Array.from({ length: 12 }, (_, i) =>
    `<div class="balloon" style="left:${4 + i * 8}%;background:${COLORS[i % COLORS.length]};animation-duration:${12 + (i % 4) * 3}s;animation-delay:${-i * 1.8}s"></div>`
  ).join("");
}

function buildBirthdayContent() {
  $(".candles").innerHTML = '<div class="candle"></div>'.repeat(5);
  $("#cake").classList.remove("out");
  $("#wishMsg").textContent = ""; 
  $("#wishBtn").disabled = false;

  // Render ONLY her photos on the birthday surprise page (No videos, keep letter note!)
  $("#bPhotos").innerHTML = `
    <div class="reveal">
      <h3 style="font-size:24px;margin:40px 0 18px;color:#202124;font-weight:500">The Birthday Girl</h3>
      ${galleryHTML(herImages)}
    </div>
  `;

  // Render the note/letter from Anusha & Anuja
  $("#letter").innerHTML = `
    <h2 style="font-size:28px;color:#202124;text-align:center;margin-bottom:4px;font-weight:700">Happy 21st Birthday, Pragati!</h2>
    <h4 style="font-size:17px;color:#70757a;text-align:center;margin-bottom:24px;font-weight:400;font-style:italic">*(a.k.a. Pagati)*</h4>

    <p>All the best for the future! May you get everything you wish for. Keep smiling, keep being the quirky person you are, and always stay the beautiful soul that you are. Lots of Love!!!</p>

    <p>From Malegaon to JSPM's JSCOE in Pune, from being a 3rd Year IT student to a book-and-novel lover, from shopping trips to biryani cravings, and from 2010s Hindi songs to Akshay Kumar songs — you've given us so many little moments that we will always remember.</p>

    <p>You are one of the most caring people we know, always there to support us and somehow always ready with the best advice. You're surprisingly mature when it comes to making important decisions, but then the tiniest little thing that makes you happy can bring out your completely childish side — and sometimes even those happy tears!</p>

    <p>You're smart… but also somehow the dumbest person at the most unexpected moments. And honestly, that's what makes you <strong>you</strong>. Behind all the sass, chaos, and bakchodi is a genuinely beautiful soul that we are lucky to have in our lives.</p>

    <p>And of course, we cannot forget your <strong>legendary donkey laugh</strong>. Honestly, that laugh is an emotion of its own. Please never change it — just maybe try not to make the entire room hear it every time. 😂</p>

    <p>Our certified <strong>early sleeper</strong>, professional <strong>slayer</strong>, bookworm, biryani lover and full-time shopper — please keep smiling and being as quirky as you are.</p>

    <p style="margin-bottom:10px">We just have one small request for your 21st year...</p>

    <div style="background:#fff0f3;border-left:4px solid #ea4335;padding:16px 20px;border-radius:12px;margin:16px 0 24px">
      <strong style="color:#d93025;font-size:16px;display:block;margin-bottom:6px;letter-spacing:0.5px">PLEASE DO LESS SHOPPING.</strong>
      <span style="font-size:14px;color:#3c4043">Your skincare collection and dress collection have officially started competing for their own room. 😭</span>
    </div>

    <p>Jokes apart, we genuinely hope this year brings you happiness, success, good people, beautiful memories and everything you've been wishing for.</p>

    <p style="font-size:19px;font-weight:700;color:#1a73e8;margin-top:24px;text-align:center">Happy 21st Birthday, Pagati! ❤️</p>

    <div class="sign" style="text-align:right;margin-top:28px;font-size:15px;color:#5f6368">
      With lots of love,<br>
      <strong style="font-size:18px;color:#202124">Anusha &amp; Anuja</strong>
    </div>
  `;
  fixImgs($("#birthday"));
}

function showBirthdaySurprise(q) {
  showProfile(q || "Pragati Birthday");
  timers.push(setTimeout(() => {
    buildBirthdayContent(); 
    makeBalloons(); 
    sizeCanvas();
    showView("birthday");

    timers.push(setTimeout(() => {
      addConfetti(80); 
      confettiTimer = setInterval(() => addConfetti(4), 350);
      timers.push(setTimeout(() => clearInterval(confettiTimer), 8000));
    }, 400));

    observeReveals();
  }, 900));
}

function stopBirthday() { 
  timers.forEach(clearTimeout); 
  timers = []; 
  clearInterval(confettiTimer); 
  parts = []; 
}

function observeReveals() {
  const io = new IntersectionObserver((es) => es.forEach((e) => { 
    if (e.isIntersecting) { 
      e.target.classList.add("in"); 
      io.unobserve(e.target); 
    } 
  }), { threshold: 0.1 });
  $$("#birthday .reveal").forEach((el) => io.observe(el));
}

// "Make a wish" button handler
$("#wishBtn").addEventListener("click", () => {
  $("#cake").classList.add("out"); 
  $("#wishBtn").disabled = true;
  addConfetti(150, true); 
  $("#wishMsg").textContent = wishText;
});

/* ============================== 9. INIT & EVENT LISTENERS ============================== */

// Search box bindings
bindSearch($("#homeForm"));
bindSearch($("#resultsForm"));

// Search buttons
$(".go").addEventListener("click", () => handleSearch($("#homeInput").value));
$(".lucky").addEventListener("click", () => showBirthdaySurprise("Pragati Birthday"));

// Logos & Nav
$("#homeLogo").addEventListener("click", showHome);
$("#homeLink").addEventListener("click", showHome);
$("#bdayBack").addEventListener("click", () => showProfile(currentQuery || "Pragati Bhachhav"));

// Top Nav Apps button & dropdown
const toggleApps = () => $("#appsDropdown").classList.toggle("open");
$("#appsBtn").addEventListener("click", toggleApps);
$("#resultsAppsBtn").addEventListener("click", toggleApps);

document.addEventListener("click", (e) => {
  if (!e.target.closest("#appsBtn") && !e.target.closest("#resultsAppsBtn") && !e.target.closest("#appsDropdown")) {
    $("#appsDropdown").classList.remove("open");
  }
});

// App Menu items
$("#appSearch").addEventListener("click", showHome);
$("#appPhotos").addEventListener("click", () => { showProfile(currentQuery); setTab("images"); });
$("#appYoutube").addEventListener("click", () => { showProfile(currentQuery); setTab("videos"); });
$("#appNews").addEventListener("click", () => { showProfile(currentQuery); setTab("news"); });

// Share Link button in detail modal
$("#shareDetailBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Link copied to clipboard!");
});

// Tabs
$("#tabs").addEventListener("click", (e) => { 
  const b = e.target.closest("button"); 
  if (b && b.dataset.tab) setTab(b.dataset.tab); 
});

// Global Click Delegation for Photos, Videos, and Modals
document.addEventListener("click", (e) => {
  const fig = e.target.closest(".gallery figure"); 
  if (fig) {
    const parentContainer = fig.closest("#bPhotos, #tabContent");
    if (parentContainer && parentContainer.id === "bPhotos") {
      openLightbox(+fig.dataset.i || 0, herImages);
    } else {
      openLightbox(+fig.dataset.i || 0, images);
    }
  }

  const kp = e.target.closest(".kp-collage");
  if (kp) openLightbox(0, herImages);

  const v = e.target.closest(".vitem"); 
  if (v) openVideo(+v.dataset.v || 0);

  if (e.target.matches("[data-close]") || e.target.classList.contains("modal")) closeModals();
});

// Lightbox Navigation
$("#lbPrev").addEventListener("click", () => openLightbox(lbIndex - 1));
$("#lbNext").addEventListener("click", () => openLightbox(lbIndex + 1));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModals();
  if ($("#lightbox").classList.contains("open")) {
    if (e.key === "ArrowLeft") openLightbox(lbIndex - 1);
    if (e.key === "ArrowRight") openLightbox(lbIndex + 1);
  }
});

// Clear input buttons
$$(".clear-btn").forEach((b) => b.addEventListener("click", () => {
  const form = b.closest("form");
  const input = $("input", form);
  input.value = "";
  input.focus();
}));

addEventListener("resize", sizeCanvas);
sizeCanvas();

// Initial View: Start at Google Home
showView("home");
