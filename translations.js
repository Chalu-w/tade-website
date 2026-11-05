// translations.js - Complete Three-Language Translation System for Waahii Tadaasaa Badadaa Biography
// Languages: 'om' (Afaan Oromoo), 'en' (English), 'am' (አማርኛ)

const TRANSLATIONS = {
  // ======================== UI LABELS & NAVIGATION ========================
  ui: {
    brandName: {
      om: "TADASAA BADADAA",
      en: "TADASAA BADADAA",
      am: "ታደሠ በደዳ"
    },
    brandTagline: {
      om: "Seenaa Jireenyaa & Yaadannoo",
      en: "Biography & Tribute",
      am: "የሕይወት ታሪክ እና መታሰቢያ"
    },
    navHome: {
      om: "Fuula Duraa",
      en: "Home",
      am: "ዋና ገጽ"
    },
    navTribute: {
      om: "Fakkeenya Koo",
      en: "Tribute",
      am: "የክብር መታሰቢያ"
    },
    navBiography: {
      om: "Kitaaba Seenaa",
      en: "Biography Book",
      am: "የታሪክ መጽሐፍ"
    },
    navEducation: {
      om: "Barnoota",
      en: "Education",
      am: "ትምህርት"
    },
    navCareer: {
      om: "Hoggansa & Hojii",
      en: "Career & Leadership",
      am: "አመራርና የሥራ ጉዞ"
    },
    navGallery: {
      om: "Suuraalee",
      en: "Photo Gallery",
      am: "የፎቶ ማህደር"
    },
    navConnect: {
      om: "Wal-Qunnamaa",
      en: "Connect",
      am: "አግኙአቸው"
    },
    navVideos: {
      om: "Viidiyoo",
      en: "Videos",
      am: "ቪዲዮዎች"
    },

    // Hero Section
    heroBadge: {
      om: "Seenaa Jireenyaa & Galmee Seenaa",
      en: "Official Biography & Digital Archive",
      am: "ይፋዊ የሕይወት ታሪክ እና ዲጂታል ማህደር"
    },
    heroSubtitle: {
      om: "IMALA KAKA'UMSAA BARNOOTAA, HOGGANSA FI MILKAAYINAA",
      en: "AN INSPIRING JOURNEY OF EDUCATION, LEADERSHIP AND ACHIEVEMENT",
      am: "አነቃቂ የትምህርት፣ የአመራር እና የስኬት ጉዞ"
    },
    heroDesc: {
      om: "Giddugaleessa Oromiyaa Aanaa Meettaa irraa gara Finfinneetti – Imala Mul'ataa, Beekumsaa, Naamusa Olaanaa fi Kutannoo.",
      en: "From Central Oromia, Meettaa District to Addis Ababa – A Journey of Vision, Knowledge, Exceptional Discipline, and Determination.",
      am: "ከማዕከላዊ ኦሮሚያ ሜጣ ወረዳ እስከ አዲስ አበባ – የራዕይ፣ የዕውቀት፣ የላቀ ሥነ-ምግባር እና የቁርጠኝነት ጉዞ።"
    },
    btnExploreBio: {
      om: "Kitaaba Seenaa Dubbisi",
      en: "Explore Biography",
      am: "የታሪክ መጽሐፉን ያንብቡ"
    },
    btnReadBiography: {
      om: "Seenaa Isaa Dubbisi",
      en: "Read His Biography",
      am: "የህይወት ታሪኩን ያንብቡ"
    },
    bioPageHeroBadge: {
      om: "Seenaa Jireenyaa Guutuu & Galmee Seenaa",
      en: "Complete Official Memorial Biography",
      am: "ይፋዊ ሙሉ የህይወት ታሪክ እና ዲጂታል ማህደር"
    },
    bioPageHeroTitle: {
      om: "SEENAA JIREENYAA TADASAA BADADAA",
      en: "THE COMPLETE LIFE STORY OF TADASAA BADADAA",
      am: "የታደሠ በደዳ ረጋሣ የተሟላ የህይወት ታሪክ"
    },
    bioPageHeroSubtitle: {
      om: "Kitaaba Seenaa Boqonnaa 10, Suuraalee Qabatamaa, Imala Barnootaa fi Hoggansa Tajaajila Mootummaa",
      en: "Complete 10-Chapter Biography Book, Archival Photographs, Educational Journey & Distinguished Public Leadership",
      am: "ባለ 10 ምዕራፍ የተሟላ የታሪክ መጽሐፍ፣ እውነተኛ የፎቶ ማህደር፣ የትምህርት ጉዞ እና የላቀ የመንግሥት አመራር አገልግሎት"
    },
    bioPageBackBtn: {
      om: "Gara Fuula Duraatti Deebi'aa",
      en: "Return to Homepage",
      am: "ወደ ዋናው ገጽ ተመለስ"
    },
    bioStartReadingBtn: {
      om: "Boqonnaa 1ffaa Jalqabaa",
      en: "Start Reading Chapters",
      am: "ምዕራፍ 1ን ማንበብ ጀምር"
    },
    bioViewPhotosBtn: {
      om: "Suuraalee Ilaalaa",
      en: "View Photo Archive",
      am: "የፎቶ ማህደሩን ተመልከት"
    },
    bottomBioPill: {
      om: "Galmee Seenaa Guutuu",
      en: "Complete Memorial Archive",
      am: "የተሟላ የታሪክ ማህደር"
    },
    bottomBioTitle: {
      om: "SEENAA JIREENYAA GUUTUU DUBBISI",
      en: "READ THE COMPLETE BIOGRAPHY",
      am: "የተሟላውን የህይወት ታሪክ ያንብቡ"
    },
    bottomBioSubtitle: {
      om: "Seenaa jireenyaa qabatamaa, boqonnaalee 10, suuraalee, imala barnootaa fi milkaa'ina isaanii guutuu asitti argattu.",
      en: "Discover his full life story across 10 chapters, educational pathway, archival photographs, and lifetime achievements.",
      am: "ባለ 10 ምዕራፍ የተሟላ የህይወት ታሪካቸውን፣ የትምህርት ጉዟቸውን፣ የፎቶ ማህደራቸውን እና የስኬት ውጤቶቻቸውን እዚህ ያግኙ።"
    },
    btnWatchVideo: {
      om: "Viidiyoo Ilaalaa",
      en: "Watch Featured Video",
      am: "ቪዲዮዎችን ይመልከቱ"
    },
    btnDiscoverJourney: {
      om: "Imala Barnootaa",
      en: "Discover His Journey",
      am: "የትምህርት ጉዞውን ይቃኙ"
    },
    heroQuote: {
      om: "Milkaa'inni dhugaan qabeenya qofa keessatti hin madaalamu. Beekumsa, naamusa, hojii, itti gaafatamummaa fi bu'aa hawaasaaf argamsiisuunis madaalama.",
      en: "True success is not measured only by material wealth. It is measured by wisdom, discipline, leadership, accountability, and the positive impact brought to the community.",
      am: "እውነተኛ ስኬት በሀብት ብዛት ብቻ አይለካም። በዕውቀት፣ በሥነ-ምግባር፣ በሥራ ወዳድነት፣ በኃላፊነት ስሜትና ለማኅበረሰቡ በሚበረከት በጎ አስተዋጽዖም ይለካል！"
    },
    portraitDirectorTitle: {
      om: "Daarektara Hojiiwwan Galii, Qorannoo fi Kabachiisa Seeraa",
      en: "Director of Customs, Revenue Operations & Law Enforcement",
      am: "የቀረጥና ስብስባት አሰራርና የህግ ማስከበር አገልግሎት ዳይሬክተር"
    },

    // Personal Tribute
    tributePill: {
      om: "Yaadannoo fi Galata Dhuunfaa",
      en: "Special Personal Tribute",
      am: "ልዩ የግል መታሰቢያ እና ክብር"
    },
    tributeTitle: {
      om: "ESSUMA KOO, ABBAA KOO, FAKKEENYA JIREENYAA KOO",
      en: "MY UNCLE, MY FATHER, MY LIFELONG ROLE MODEL",
      am: "አጎቴ፣ አባቴ፣ የሕይወት አርአያዬ"
    },
    tributeHighlight: {
      om: "Tadaasaa Badadaa, essuma koo, fakkeenya koo fi kaka'umsa imala barnootaa fi jireenya koo ti.",
      en: "Tadasaa Baddadaa is my uncle, my role model, and the greatest inspiration of my educational and life journey.",
      am: "ታደሠ በደዳ፤ አጎቴ፣ የሕይወት አርአያዬ እና የትምህርትም ሆነ የሕይወት ጉዞዬ ታላቅ መነሳሻ ነው።"
    },
    tributeRoleLabel: {
      om: "Jaalala fi kabaja guddaadhaan ilmaa isaatiin kan qophaa'e:",
      en: "Created with deep love & reverence by his nephew:",
      am: "በታላቅ ፍቅርና አክብሮት በእህቱ ልጅ የተዘጋጀ፦"
    },
    nephewStatus: {
      om: "Barataa Yunivarsiitii | Mul'ata Essuma Isaatiin Kan Ta'e",
      en: "University Student | Inspired by his Uncle's Path",
      am: "የዩኒቨርሲቲ ተማሪ | በአጎቱ የሕይወት ጎዳና የተነሳሳ"
    },
    nephewMotto: {
      om: "“Imalli isaa barnoota kootiif kaka'umsa, mul'ata kootiif humna, abjuu koo gara dhugaatti jijjiiruuf immoo jabina naaf kenna.”",
      en: "“His journey inspires my education, strengthens my vision, and motivates me to work tirelessly toward my dreams.”",
      am: "“የእርሱ የሕይወት ጉዞ ለትምህርቴ መነሳሻ፣ ለራዕዬ ብርታት፣ ሕልሜንም ወደ እውን ለመቀየር የማይናወጥ ጥንካሬ ይሰጠኛል።”"
    },

    // Biography Book Toolbar
    bookPill: {
      om: "Kitaaba Seenaa Jireenyaa Guutuu - Boqonnaa 1 hanga 10",
      en: "Complete 10-Chapter Biography Book",
      am: "ሙሉ ባለ 10 ምዕራፍ የሕይወት ታሪክ መጽሐፍ"
    },
    bookTitle: {
      om: "SEENAA JIREENYAA TADAASAA BADADAA",
      en: "THE LIFE STORY OF TADASAA BADADAA",
      am: "የታደሠ በደዳ የሕይወት ታሪክ"
    },
    bookSubtitle: {
      om: "Seenaa jireenyaa qabatamaa, gabaabaatti osoo hin kutamin guutummaatti akka kitaabaatti qindaa'e.",
      en: "The authentic, complete life story organized like a digital biography book without summaries or omissions.",
      am: "እውነተኛና ያልተቆራረጠ የተሟላ የሕይወት ታሪክ፤ በዲጂታል የታሪክ መጽሐፍ መልክ የቀረበ።"
    },
    tocHeader: {
      om: "Baafata Boqonnaalee Kitaabichaa",
      en: "Table of Contents (Book Chapters)",
      am: "የመጽሐፉ ምዕራፎች ማውጫ"
    },
    btnViewAll: {
      om: "Boqonnaa Hundumaa Agarsiisi",
      en: "View All Chapters",
      am: "ሁሉንም ምዕራፎች አሳይ"
    },
    btnViewPaged: {
      om: "Boqonnaa Tokko Tokkoon",
      en: "Chapter by Chapter Mode",
      am: "በየምዕራፉ ገጽ ለገጽ"
    },
    textSizeLabel: {
      om: "Guddina Qubee:",
      en: "Text Size:",
      am: "የፊደል መጠን፦"
    },
    prevChapter: {
      om: "← Boqonnaa Duraa",
      en: "← Previous Chapter",
      am: "← ያለፈው ምዕራፍ"
    },
    nextChapter: {
      om: "Boqonnaa Itti Aanu →",
      en: "Next Chapter →",
      am: "ቀጣዩ ምዕራፍ →"
    },

    // Education Timeline
    timelinePill: {
      om: "Imala Barnootaa & Sadarkaa",
      en: "Educational Pathway",
      am: "የትምህርት ጉዞና ደረጃዎች"
    },
    timelineTitle: {
      om: "ADEEMSA BARNOOTAA TADASAA BADADAA",
      en: "HIS EDUCATIONAL JOURNEY",
      am: "የትምህርት ጉዞ እና የዕውቀት አድማስ"
    },
    timelineSubtitle: {
      om: "Sadarkaa sadarkaadhaan beekumsa horachuu fi Master's Degree argachuu.",
      en: "Step-by-step academic excellence from early foundation to Master's degree distinction.",
      am: "ከመሠረታዊ ትምህርት እስከ ማስተርስ ድግሪ የተጓዘበት ደረጃ በደረጃ የዕውቀት ጎዳና።"
    },

    // Career Section
    careerPill: {
      om: "Hoggansa & Tajaajila Mootummaa",
      en: "Public Leadership & Service",
      am: "የመንግሥት አመራርና ሕዝባዊ አገልግሎት"
    },
    careerTitle: {
      om: "HOJII MOOTUMMAA FI MILKAA'INA GURGUDDOO",
      en: "PROFESSIONAL CAREER & ACHIEVEMENTS",
      am: "የሙያ ሥራ እና ታላላቅ ስኬቶች"
    },

    // Gallery
    galleryPill: {
      om: "Galmee Suuraalee",
      en: "Visual Archive",
      am: "የፎቶ ማህደር"
    },
    galleryTitle: {
      om: "SUURAALEE KABAJAMOO TADASAA",
      en: "PORTRAIT & PHOTO GALLERY",
      am: "የክቡር አቶ ታደሠ ፎቶዎች"
    },
    gallerySubtitle: {
      om: "Suuraalee qabatamaa hoggansa isaanii fi kabaja isaanii calaqqisiisan.",
      en: "Authentic photographs reflecting his leadership, institutions, and prestigious moments.",
      am: "አመራራቸውን፣ የተማሩበትን ተቋም እና ክብርን የሚያንፀባርቁ እውነተኛ ፎቶግራፎች።"
    },
    zoomText: {
      om: "Guddisi Ilaali",
      en: "Click to Expand Fullscreen",
      am: "አጉልተው ይመልከቱ"
    },

    // Connect Section
    connectPill: {
      om: "Karaalee Qunnamsiisaa",
      en: "Official Channels",
      am: "ይፋዊ የመገናኛ አድራሻዎች"
    },
    connectTitle: {
      om: "WALIIN QUNNAMAA",
      en: "CONNECT WITH HIM",
      am: "ከእርሳቸው ጋር ይገናኙ"
    },
    connectSubtitle: {
      om: "Toora miidiyaa hawaasummaa isaanii kan dhugaa kanaan wal-qunnamaa.",
      en: "Connect directly via verified social media profiles and direct phone line.",
      am: "በእውነተኛ የማኅበራዊ ሚዲያ ገጾቻቸውና በስልክ በቀጥታ ይገናኙ።"
    },
    viewFbBtn: {
      om: "Fuula Facebook Ilaalaa",
      en: "View Facebook Profile",
      am: "የፌስቡክ ገጻቸውን ይመልከቱ"
    },
    viewTikTokBtn: {
      om: "Fuula TikTok Ilaalaa",
      en: "View TikTok Profile",
      am: "የቲክቶክ ገጻቸውን ይመልከቱ"
    },
    callBtn: {
      om: "Bilbilaa: 0911470097",
      en: "Call: 0911470097",
      am: "ይደውሉ፦ 0911470097"
    },

    // Video Section
    videosPill: {
      om: "Viidiyoo Filatamaa",
      en: "Featured Media",
      am: "ተወዳጅ ቪዲዮዎች"
    },
    videosTitle: {
      om: "VIIDIYOO FI YEREEWWAN ADDAA",
      en: "HIS VIDEOS & MOMENTS",
      am: "ቪዲዮዎች እና ልዩ ጊዜያት"
    },
    videosSubtitle: {
      om: "Viidiyoo qabatamaa TikTok isaanii fi waraabbiiwwan kallattiin asumaan ilaalaa.",
      en: "Watch authentic video recordings and TikTok moments directly on the website.",
      am: "እውነተኛ የቪዲዮ ክሊፖችና የቲክቶክ ቅንብሮችን እዚሁ በቀጥታ ይመልከቱ።"
    },
    adminHeader: {
      om: "Kutaa Hojjataa: Viidiyoo Dabalataa Galchuu",
      en: "Administrator Video Management",
      am: "የአስተዳዳሪ ክፍል፦ ተጨማሪ ቪዲዮዎችን ማካተቻ"
    },
    adminDesc: {
      om: "Toora URL viidiyoo TikTok as keessa galchuun kallattiin galmee keessatti dabalaa.",
      en: "Paste verified TikTok URLs (one per line) to embed new videos dynamically.",
      am: "የቲክቶክ ቪዲዮ ሊንክ እዚህ በማስገባት በቀጥታ በገጹ ላይ ያክሉ።"
    },
    adminBtn: {
      om: "Viidiyoo Galmee Keessatti Dabali",
      en: "Embed Videos Automatically",
      am: "ቪዲዮውን በቀጥታ አካትት"
    },

    // Footer
    footerTagline: {
      om: "Seenaa Jireenyaa, Dhaamsa fi Fakkeenya Barnootaa",
      en: "Biography, Educational Legacy and Inspiration",
      am: "የሕይወት ታሪክ፣ የትምህርት ቅርስና የታላቅነት አርአያ"
    },
    footerCopy: {
      om: "© 2026 Tadaasaa Badadaa. Qophiin kun jaalala fi kabaja guddaadhaan ilmaa keessan Chala Warku tiin qindaa'e.",
      en: "© 2026 Tadasaa Baddadaa. Dedicated with profound love & reverence by his nephew Chala Warku.",
      am: "© 2026 ታደሠ በደዳ። በታላቅ ፍቅርና አክብሮት በእህቱ ልጅ ጫላ ወርቁ የተዘጋጀ።"
    },
    footerMotto: {
      om: "“Milkaa'inni har'aa bu'aa murannoo kaleessaa ti; egereen boruus bu'aa hojii har'aati.”",
      en: "“Today's success is the harvest of yesterday's perseverance; tomorrow's future is the fruit of today's dedication.”",
      am: "“የዛሬው ስኬት የትናንቱ ጽናት ውጤት ነው፤ የነገው ብሩህ ተስፋም የዛሬው ጥረት ፍሬ ነው።”"
    }
  },

  // ======================== PERSONAL TRIBUTE PARAGRAPHS ========================
  tribute: {
    p1: {
      om: "Namoonni jireenya keenya keessatti yeroo hunda nu waliin jiraatan qofa osoo hin taane, karaa jireenyaa keenya irratti ifa nuuf ta'an jiru. Namoonni akkanaa imala keenya keessatti abdii, kaka'umsa fi mul'ata nuuf ta'u.",
      en: "There are special individuals who don't just walk alongside us in life, but shine as a guiding light upon our path. Such remarkable people serve as beacons of hope, daily inspiration, and lifelong vision in our journey.",
      am: "በሕይወታችን ውስጥ ሁልጊዜ አብረውን የሚኖሩ ሰዎች ብቻ ሳይሆኑ፣ በሕይወት ጎዳናችን ላይ እንደ ፋና የሚያበሩልን ብርቅዬ ሰዎች አሉ። እንደነዚህ ያሉ ታላላቅ ሰዎች በጉዟችን ውስጥ ተስፋ፣ መነሳሳት እና ራዕይ ይሆኑናል።"
    },
    p2: {
      om: "Tadaasaa Badadaa anaaf essuma koo qofa miti; inni fakkeenya jireenyaa, nama irraa baradhuu fi nama milkaa'ina isaa ilaaluun gara fuulduraatti tarkaanfachuuf kaka'umsa argadhuudha.",
      en: "Tadasaa Baddadaa is not merely an uncle to me; he is my living role model, a mentor from whom I learn every day, and an exemplar whose achievements fuel my drive to forge ahead toward my own dreams.",
      am: "ታደሠ በደዳ ለእኔ አጎቴ ብቻ አይደለም፤ እርሱ የሕይወት አርአያዬ፣ ዘወትር የምማርበት መካሪዬ እና ስኬቱን እያየሁ ወደፊት እንድራመድ ብርታት የማገኝበት ታላቅ ሰው ነው።"
    },
    p3: {
      om: "Imalli isaa ijoollummaa irraa kaasee barnoota jaallachuun, sadarkaa barnootaa garaagaraa keessa darbuun, beekumsa isaa guddisuun hanga milkaa'ina har'a irra ga'eetti anaaf barumsa guddaa dha.",
      en: "His incredible path—from cherishing education in early childhood, advancing through rigorous academic milestones, expanding his wisdom, to attaining the high standing he commands today—is a profound masterclass for me.",
      am: "ከህፃንነቱ ጀምሮ ለትምህርት ባለው ታላቅ ፍቅር፣ የተለያዩ የትምህርት እርከኖችን አልፎ ዕውቀቱን በማስፋት ዛሬ ለደረሰበት ታላቅ ክብርና ስኬት የበቃበት ጎዳና ለእኔ እጅግ ታላቅ ትምህርት ነው።"
    },
    p4: {
      om: "Yeroo ani yunivarsiitii keessa baradhu, seenaa isaa yaadachuun kaayyoo koo irratti akka cichu na jajjabeessa. Inni naaf fakkeenya nama barnootaaf kutannoo qabu, hojii isaa irratti cichuufi mul'ata isaa gara dhugoominaatti jijjiiruuf hojjetuuti.",
      en: "Now, as I pursue my own university studies, remembering his perseverance motivates me to stay deeply grounded in my purpose. To me, he is the ultimate standard of a person committed to learning, relentless in service, and determined to turn vision into reality.",
      am: "በአሁኑ ወቅት በዩኒቨርሲቲ ውስጥ ትምህርቴን ስከታተል፣ የእርሱን ታሪክ ማስታወስ በዓላማዬ ላይ ጸንቼ እንድቆም ብርታት ይሰጠኛል። እርሱ ለእኔ ለትምህርት ቁርጠኛ የሆነ፣ በሥራው ላይ የማይደራደር እና ራዕዩን ወደ እውነት ለመቀየር የሚተጋ ታላቅ አርአያዬ ነው።"
    },
    p5: {
      om: "Ani milkaa'ina isaa qofa hin dinqisiifadhu; karaa inni ittiin milkaa'ina isaa ijaare, jaalala barnootaa isaa fi kutannoo jireenya isaa keessatti agarsiise nan dinqisiifadha.",
      en: "I do not merely admire his success; I admire the moral pathway through which he constructed it—his unwavering love for knowledge, his integrity, and the sheer grit he demonstrated in every phase of his life.",
      am: "እኔ ስኬቱን ብቻ አይደለም የማደንቀው፤ ይልቁንም ያንን ስኬት የገነባበትን ቅን መንገድ፣ ለዕውቀት ያለውን ጥልቅ ፍቅር እና በሕይወቱ ውስጥ ያሳየውን የማይበገር ቁርጠኝነት አብዝቼ አደንቃለሁ።"
    },
    p6: {
      om: "Seenaa isaa irraa barachuun, aniis guyyaa tokko kaayyoo koo galmaan ga'ee nama biroof fakkeenya ta'uu hawwa.",
      en: "Learning continually from his life story, I too aspire to fulfill my highest educational aspirations and one day stand as an inspiring role model for others, just as he is for me.",
      am: "ከእርሱ ታሪክ በመማር፣ እኔም አንድ ቀን ዓላማዬን ከዳር አድርሼ ለሌሎች ወጣቶች በጎ አርአያ ለመሆን ዘወትር እተጋለሁ።"
    }
  },

  // ======================== ALL 10 BIOGRAPHY CHAPTERS ========================
  chapters: [
    // CHAPTER 1
    {
      num: 1,
      badge: {
        om: "BOQONNAA 1",
        en: "CHAPTER 1",
        am: "ምዕራፍ 1"
      },
      title: {
        om: "SEENSA – EENYUMMAA FI SEENAA JIREENYAA",
        en: "INTRODUCTION – IDENTITY AND THE ESSENCE OF A LIFE STORY",
        am: "መግቢያ – ማንነት እና የሕይወት ታሪክ"
      },
      paragraphs: [
        {
          om: "Seenaa jireenyaa nama tokkoo keessatti wanti nama ajaa'ibu qabeenya inni qabu, aangoo inni irra jiru ykn sadarkaa inni irra ga'e qofa miti. Caalaatti, wanti seenaa isaa addaa taasisu mul'ata inni ijoollummaa irraa qabu, kutannoo inni agarsiisu, rakkoolee keessa darbuun gara galma isaatti imaluufi bu'aa hojii isaa hawaasaaf argamsiisuudha.",
          en: "In evaluating an individual's life story, what truly inspires is neither the material wealth they accumulate nor the public office they hold. Rather, what makes a life story truly extraordinary is the clarity of vision held since childhood, the unwavering determination exhibited, the obstacles surmounted on the road to the goal, and the lasting contributions delivered to society.",
          am: "በአንድ ሰው የሕይወት ታሪክ ውስጥ የሚያስደንቀው ነገር ያለው ሀብት፣ የያዘው ሥልጣን ወይም የደረሰበት ማዕረግ ብቻ አይደለም። ይልቁንም ታሪኩን ልዩ የሚያደርገው ከልጅነቱ ጀምሮ የነበረው ራዕይ፣ ያሳየው ቁርጠኝነት፣ ፈተናዎችን አልፎ ወደ ግቡ መጓዙና ለህብረተሰቡ ያስገኘው በጎ የሥራ ፍሬ ነው።"
        },
        {
          om: "Tadaasaa Badadaa nama dhalootaan Giddugaleessa Aanaa Meettaa irraa ta'e yoo ta'u, seenaa jireenyaa isaa keessatti barnoota, hojii, tajaajila mootummaa, dandeettii of ijaaruu fi milkaa'ina jireenyaa waliin walqabatu qaba.",
          en: "Tadasaa Baddadaa was born in Central Oromia, Meettaa District. His biography is an interconnected tapestry of educational dedication, professional diligence, public service, continuous self-cultivation, and tangible life accomplishments.",
          am: "ታደሠ በደዳ በትውልድ ከማዕከላዊ ኦሮሚያ ሜጣ ወረዳ የሆነ ሲሆን፣ በሕይወት ታሪኩ ውስጥ ትምህርትን፣ ጠንካራ ሥራን፣ የመንግሥት አገልግሎትን፣ ራስን በዕውቀት የመገንባት ብቃትን እና ከስኬት ጋር የተቆራኙ ሁለንተናዊ እሴቶችን ያካተተ ነው።"
        },
        {
          om: "Inni nama ijoollummaa irraa kaasee barnootaaf fedhii guddaa qabu, carraa barnootaa akka carraa jireenya isaa jijjiiruuttis ilaalaa guddateedha. Jalqaba jireenya isaa irraa eegalee, barnoota akka furtuu beekumsaa, bilisummaa yaadaa fi guddina hawaasaatti ilaaluun mul'ata isaa gara fuulduraatti diriirse.",
          en: "From his earliest childhood years, he possessed an insatiable hunger for education, viewing every learning opportunity as the true vehicle to transform his destiny. From the dawn of his youth, he regarded education as the master key to wisdom, freedom of thought, and community advancement, directing his lifelong vision firmly toward the future.",
          am: "እርሱ ከልጅነቱ ጀምሮ ለትምህርት ታላቅ ፍላጎት የነበረው ሲሆን፣ የትምህርት ዕድልን የሕይወት ጎዳናውን እንደሚቀይር ታላቅ ዕድል አድርጎ እያየ ያደገ ሰው ነው። ከሕይወቱ መጀመሪያ አንስቶ ትምህርትን የዕውቀት፣ የነፃ አስተሳሰብና የማኅበረሰብ ዕድገት ቁልፍ አድርጎ በመመልከት ራዕዩን ወደፊት ዘረጋ።"
        },
        {
          om: "Seenaa isaa keessatti dhalootaa fi bakka inni irraa ka'e, maatii, barnoota, muuxannoo hojii fi milkaa'inni inni argate walitti hidhamanii mul'atu. Kunis seenaa nama tokkoo qofa osoo hin taane, dhaloonni har'aa barnootaaf jaalala qabaachuun, kaayyoo ofii murteessuun, carraa argame itti fayyadamuun gara galma guddaatti ce'uu akka danda'u yaadachiisa.",
          en: "In his narrative, his birthplace, family upbringing, academic progression, professional expertise, and crowning achievements are seamlessly intertwined. This serves not only as an individual's chronicle, but as a living testament reminding today's youth that through passion for education, clear goal-setting, and seized opportunities, one can rise to remarkable heights.",
          am: "በታሪኩ ውስጥ ትውልዱና የመነሻ ስፍራው፣ ቤተሰቡ፣ ትምህርቱ፣ የሥራ ልምዱ እና ያገኘው ስኬት እጅግ የተሳሰሩ ሆነው ይታያሉ። ይህም የአንድ ግለሰብ ታሪክ ብቻ ሳይሆን፣ የዛሬው ወጣት ትውልድ ለትምህርት ፍቅር በማሳደር፣ ዓላማውን በመወሰን እና ያገኘውን ዕድል በሚገባ በመጠቀም ወደ ታላቅ ከፍታ መድረስ እንደሚችል ማሳሰቢያ ነው።"
        }
      ]
    },

    // CHAPTER 2
    {
      num: 2,
      badge: {
        om: "BOQONNAA 2",
        en: "CHAPTER 2",
        am: "ምዕራፍ 2"
      },
      title: {
        om: "DHALOOTAA FI IJOOLLUMMAA",
        en: "BIRTH AND CHILDHOOD",
        am: "ውልደት እና የልጅነት ዘመን"
      },
      paragraphs: [
        {
          om: "Tadaasaa Badadaa dhalootaan Giddugaleessa Aanaa Meettaa irraa kan ta'eedha. Naannoo aadaa, duudhaa, hawaasummaa fi jireenya ummataa keessatti guddate. Bakki namni tokko keessatti dhalatu seenaa isaa keessatti iddoo qabaatus, egereen nama tokkoo dhaloota qofa irratti kan murtaa'u miti. Mul'ata, carraa, barnootaa fi hojii cimaatu gara fuulduraatti isa geessa.",
          en: "Tadasaa Baddadaa was born in Central Oromia, Meettaa District. He was raised in an environment rich in cultural heritage, social solidarity, and communal values. While one's birthplace holds a treasured place in history, a person's future is never defined solely by where they begin; vision, opportunity, education, and relentless hard work propel them forward.",
          am: "ታደሠ በደዳ በትውልድ ከማዕከላዊ ኦሮሚያ ሜጣ ወረዳ ነው። በባህል፣ በማኅበራዊ እሴት እና በህዝብ አኗኗር ውስጥ አደገ። አንድ ሰው የተወለደበት ስፍራ በታሪኩ ውስጥ የራሱ ቦታ ቢኖረውም፣ የአንድ ሰው የወደፊት ዕጣ ፈንታ በትውልድ ቦታው ብቻ አይወሰንም፤ ይልቁንም ራዕይ፣ ዕድል፣ ትምህርትና ጠንካራ ሥራ ነው ወደፊት የሚያራምዱት።"
        },
        {
          om: "Ijoollummaa isaa irraa eegalee fedhii barnootaa qabaachuun amala isaa keessaa isa beekamaa ture. Barnootaaf jaalala qabaachuun isaa, jireenya isaa gara fuulduraatti jijjiiruuf bu'uura guddaa ta'eera.",
          en: "From early childhood, an ardent passion for learning was his defining characteristic. This deep love for education laid the bedrock upon which his entire future and transformation were built.",
          am: "ከልጅነቱ ጀምሮ ለትምህርት የነበረው ከፍተኛ ፍላጎት ከባህሪያቱ ዋነኛውና ተጠቃሹ ነበር። ለትምህርት የነበረው ፍቅርም የወደፊት ሕይወቱን ወደ ተሻለ ደረጃ ለመለወጥ ታላቅ መሠረት ሆነው።"
        },
        {
          om: "Yeroo sana maatiin isaa Aanaa Meettaa keessatti abbootii qabeenyaa turan. Haala jireenyaa maatii isaanii keessatti carraan barnootaa ilma isaanii deeggaruuf jiru, mul'ata isaa gara hojiitti jijjiiruuf gargaarsa ta'eera.",
          en: "During that era, his family was well-established and respected landowners in Meettaa District. Within the supportive environment of his family, the opportunity to champion their son's education helped turn his youthful dreams into practical realities.",
          am: "በወቅቱ ቤተሰቦቹ በሜጣ ወረዳ ውስጥ የተከበሩና የሀብት ባለቤት ነበሩ። በቤተሰባቸው የአኗኗር ሁኔታ ውስጥ የልጃቸውን ትምህርት ለመደገፍ የነበረው ምቹ ዕድል፣ ራዕዩን ወደ ተግባር ለመለወጥ ታላቅ እገዛ አድርጓል።"
        },
        {
          om: "Maatiin isaa fedhii fi dandeettii barnootaa ilma isaanii hubachuun mana barumsaa isa galchanii barnoota isaa akka itti fufu taasisan. Deeggarsi maatii kunis adeemsa barnootaa isaa keessatti shoora guddaa qaba.",
          en: "Recognizing their son's aptitude and appetite for knowledge, his parents enrolled him in school and encouraged him to pursue his studies with diligence. This parental support played a vital role in his educational journey.",
          am: "ቤተሰቦቹ የልጃቸውን የትምህርት ፍላጎትና ተሰጥኦ በመረዳት ትምህርት ቤት አስገብተው ትምህርቱን እንዲቀጥል አደረጉ። ይህ የቤተሰብ ድጋፍም በትምህርት ጉዞው ውስጥ ታላቅ ሚና ነበረው።"
        },
        {
          om: "Dhugaan jiru, daa'imni tokko abjuu qabaachuu danda'a; garuu abjuun sun gara dhugoominaatti akka ce'uuf deeggarsi maatii, carraan barnootaa fi kutannoon dhuunfaa barbaachisaadha. Seenaa Waahii keessatti walitti dhufeenyi wantoota kanaa bu'uura adeemsa jireenyaa isaa ta'ee mul'ata.",
          en: "The truth is that every child may harbor dreams; yet for those dreams to materialize, family backing, access to education, and personal perseverance are indispensable. In Tadasaa's life, the harmony of these forces served as the cornerstone of his ascension.",
          am: "እውነታው ግን ማንኛውም ህፃን ህልም ሊኖረው ይችላል፤ ነገር ግን ያ ህልም ወደ እውን እንዲቀየር የቤተሰብ ድጋፍ፣ የትምህርት ዕድል እና የግል ቁርጠኝነት እጅግ አስፈላጊ ናቸው። በታደሠ ታሪክ ውስጥ የእነዚህ ነገሮች መጣመር የሕይወት ጎዳናው መሠረት ሆኖ ይታያል።"
        }
      ]
    },

    // CHAPTER 3
    {
      num: 3,
      badge: {
        om: "BOQONNAA 3",
        en: "CHAPTER 3",
        am: "ምዕራፍ 3"
      },
      title: {
        om: "BARNOOTA SADARKAA JALQABAA FI GIDDU-GALEESSAA",
        en: "PRIMARY AND MIDDLE SCHOOL EDUCATION",
        am: "የመጀመሪያና መካከለኛ ደረጃ ትምህርት"
      },
      paragraphs: [
        {
          om: "Barnoonni bu'uura jireenya namaa ti. Namni beekumsa argatu addunyaa haala adda ta'een ilaala, rakkoo hiikuuf yaada qabaata, murtoo ofii hubannoo irratti hundaa'ee kennuu danda'a.",
          en: "Education is the foundation of human life. A person equipped with knowledge perceives the world through a broader lens, formulates creative solutions to complex challenges, and makes decisions rooted in discernment.",
          am: "ትምህርት የሰው ልጅ ሕይወት መሠረት ነው። ዕውቀትን ያገኘ ሰው ዓለምን በተለየና በሰፋ ዕይታ ይመለከታል፣ ችግሮችን ለመፍታት አዳዲስ ሃሳቦችን ያመነጫል፣ ውሳኔዎችንም በማስተዋል ላይ ተመስርቶ መስጠት ይችላል።"
        },
        {
          om: "Tadaasaa Badadaa barnoota isaa Holeta School keessatti jalqabuun adeemsa barnootaa isaa itti fufe.",
          en: "Tadasaa Baddadaa commenced his formal schooling at Holeta School, steadily advancing in his academic pursuits.",
          am: "ታደሠ በደዳ መደበኛ ትምህርቱን በሆለታ ትምህርት ቤት በመጀመር የትምህርት ጉዞውን በጽናት ቀጠለ።"
        },
        {
          om: "Mana barumsaa keessatti barachuun isaa bu'uura beekumsaa fi dandeettii jireenyaa isaaf ta'e. Barnoonni sadarkaa kanaa dubbisuu, barreessuu, shallaguu, yaaduu fi hawaasa waliin jiraachuu keessatti nama gargaara.",
          en: "Studying in school provided him with essential foundational knowledge and life competencies. Education at this level refines reading, writing, mathematics, critical reasoning, and social harmony within the community.",
          am: "በትምህርት ቤት ውስጥ መማሩ ለእርሱ የመሠረታዊ ዕውቀትና የሕይወት ክህሎቶች መነሻ ሆነው። በዚህ ደረጃ የሚገኝ ትምህርት ማንበብን፣ መጻፍን፣ ማስላትን፣ ማሰብን እና ከህብረተሰብ ጋር ተስማምቶ መኖርን ያስተምራል።"
        },
        {
          om: "Yeroo barnoota isaa keessatti jaalalli inni barnootaaf qabu daran guddate. Barnoota akka dirqama guyyaa guyyaa qofaatti osoo hin taane, akka karaa egeree isaa ittiin ijaarratuutti ilaalaa ture.",
          en: "Throughout his school days, his affection for education grew ever stronger. He viewed learning not merely as a daily routine, but as the highway through which he was actively designing his destiny.",
          am: "በትምህርት ዘመኑ ሁሉ ለትምህርት ያለው ፍቅር ከቀን ወደ ቀን እጅግ እየጨመረ ሄደ። ትምህርትን እንደ ዕለታዊ ግዴታ ብቻ ሳይሆን የወደፊት ሕይወቱን የሚገነባበት ታላቅ ጎዳና አድርጎ ይመለከተው ነበር።"
        },
        {
          om: "Mana barumsaa keessatti argamuun, barsiisota irraa barachuun, barattoota waliin muuxannoo qooddachuun fi beekumsa haaraa argachuun adeemsa guddina isaa keessatti shoora qaba.",
          en: "Attending class faithfully, learning attentively from teachers, exchanging perspectives with fellow students, and absorbing new knowledge played an indelible part in his intellectual maturity.",
          am: "በትምህርት ቤት ውስጥ መገኘት፣ ከመምህራን መማር፣ ከተማሪዎች ጋር ልምድ መለዋወጥ እና አዳዲስ ዕውቀቶችን ማግኘት በእድገቱ ሂደት ውስጥ የላቀ ሚና ነበረው።"
        },
        {
          om: "Holeta School keessatti barachuun isaa imala barnootaa keessatti tarkaanfii jalqabaa barbaachisaa ture.",
          en: "His schooling at Holeta School constituted a vital and formative first milestone on his long academic road.",
          am: "በሆለታ ትምህርት ቤት ውስጥ መማሩ በረዥሙ የትምህርት ጉዞው ውስጥ ወሳኝ የመጀመሪያ እርምጃ ነበር።"
        }
      ]
    },

    // CHAPTER 4
    {
      num: 4,
      badge: {
        om: "BOQONNAA 4",
        en: "CHAPTER 4",
        am: "ምዕራፍ 4"
      },
      title: {
        om: "HOLETA PREPARATORY SCHOOL FI MUL'ATA YUNIVARSIITII",
        en: "HOLETA PREPARATORY SCHOOL AND UNIVERSITY VISION",
        am: "የሆለታ መሰናዶ ትምህርት ቤት እና የዩኒቨርሲቲ ራዕይ"
      },
      paragraphs: [
        {
          om: "Barnoota sadarkaa duraa xumuruun qofti galma isaa hin turre. Fedhii barnootaa fi mul'ata gara fuulduraa qabaachuun, barnoota isaa sadarkaa itti aanutti ceesise.",
          en: "Completing primary schooling was by no means the ceiling of his ambition. Propelled by intellectual appetite and long-term vision, he transitioned forward into preparatory education.",
          am: "የመጀመሪያ ደረጃ ትምህርትን ማጠናቀቅ ብቻ የፍላጎቱ ማብቂያ አልነበረም። ለትምህርት ባለው ከፍተኛ ጥማትና የወደፊት ራዕይ በመመራት ትምህርቱን ወደ ቀጣዩ ከፍተኛ ደረጃ አሸጋገረ።"
        },
        {
          om: "Kanaaf, Holeta Preparatory School keessatti barnoota qophii yunivarsiitii itti fufe.",
          en: "Consequently, he enrolled in Holeta Preparatory School to prepare for entry into higher education.",
          am: "ስለሆነም ለዩኒቨርሲቲ መግቢያ የሚያዘጋጀውን ትምህርት በሆለታ መሰናዶ ትምህርት ቤት ውስጥ ቀጠለ።"
        },
        {
          om: "Sadarkaan qophii yunivarsiitii kun barataa tokkoof yeroo murteessaa dha. Sababni isaas, barataan beekumsa isaa cimsuu, dandeettii qorannoo fi yaada madaaluu guddisuu, akkasumas gara barnoota olaanaatti ce'uuf of qopheessa.",
          en: "The preparatory phase is a pivotal chapter in any scholar's life. It is the time when students solidify their knowledge, develop analytical and critical faculties, and prime themselves for the demands of university scholarship.",
          am: "ይህ የዩኒቨርሲቲ መሰናዶ ደረጃ ለማንኛውም ተማሪ ወሳኝ ወቅት ነው። ምክንያቱም ተማሪው ዕውቀቱን የሚያጠናክርበት፣ የምርምር እና የማመዛዘን ችሎታውን የሚያዳብርበት እንዲሁም ወደ ከፍተኛ ትምህርት ለመሸጋገር ራሱን የሚያዘጋጅበት ወቅት ስለሆነ ነው።"
        },
        {
          om: "Tadaasaa Badadaa sadarkaa kana keessatti adeemsa barnootaa isaa itti fufuun mul'ata isaa gara yunivarsiitiitti ceesisuuf tattaaffii taasise.",
          en: "Tadasaa Baddadaa applied himself rigorously throughout this period, directing all his energy toward qualifying for university admission.",
          am: "ታደሠ በደዳ በዚህ ደረጃ የትምህርት ጉዞውን በትጋት በመቀጠል ራዕዩን ወደ ዩኒቨርሲቲ ለማሸጋገር ከፍተኛ ጥረት አደረገ።"
        },
        {
          om: "Barnoota isaa keessatti sadarkaa tokko irraa gara sadarkaa biraatti ce'uun isaa, kaayyoo isaa galmaan ga'uuf tarkaanfii walitti aansaa fudhachuu isaa agarsiisa.",
          en: "His steady progression from one academic tier to the next illustrated his disciplined, step-by-step methodology to achieve his life goals.",
          am: "በትምህርቱ ከአንዱ ደረጃ ወደ ሌላው ደረጃ በተከታታይ መሸጋገሩ፣ ግቡን ለማሳካት ተከታታይና ጽኑ እርምጃዎችን እየወሰደ መጓዙን ያሳያል።"
        },
        {
          om: "Namni galma guddaa qabaatu tokko imala isaa guyyaa tokko keessatti hin xumuru. Tarkaanfii xixiqqoo walitti aanan fudhachuun, carraa argate fayyadamuun, beekumsa isaa guddisuun gara milkaa'inaatti ce'a.",
          en: "A person with grand ambitions does not finish the journey in a single day. By taking consistent strides, maximizing every available opportunity, and expanding wisdom, one crosses the threshold into lasting triumph.",
          am: "ታላቅ ዓላማ ያለው ሰው ጉዞውን በአንድ ጀምበር አያጠናቅቅም። ተከታታይ አነስተኛ ግን ወሳኝ እርምጃዎችን በመውሰድ፣ ያገኘውን ዕድል በመጠቀምና ዕውቀቱን በማሳደግ ወደ ስኬት ይሸጋገራል።"
        }
      ]
    },

    // CHAPTER 5
    {
      num: 5,
      badge: {
        om: "BOQONNAA 5",
        en: "CHAPTER 5",
        am: "ምዕራፍ 5"
      },
      title: {
        om: "ETHIOPIAN PUBLIC SERVICE UNIVERSITY FI BARNOOTA OLAANAA",
        en: "ETHIOPIAN PUBLIC SERVICE UNIVERSITY AND HIGHER EDUCATION",
        am: "የኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርሲቲ እና የከፍተኛ ትምህርት ጉዞ"
      },
      paragraphs: [
        {
          om: "Adeemsi barnootaa Tadaasaa Badadaa sadarkaa mana barumsaa qofatti hin dhaabbanne. Barnoota olaanaa itti fufuun beekumsa fi dandeettii isaa daran guddisate.",
          en: "Tadasaa Baddadaa's academic voyage did not conclude at the school level. Progressing into higher education, he expanded his intellectual horizon and professional leadership capabilities.",
          am: "የታደሠ በደዳ የትምህርት ጉዞ በትምህርት ቤት ደረጃ ብቻ አልቆመም። ከፍተኛ ትምህርቱን በመቀጠል ዕውቀቱንና ሙያዊ ብቃቱን እጅግ አዳበረ።"
        },
        {
          om: "Inni Ethiopian Public Service University keessatti barachuun beekumsa barnootaa fi ogummaa isaa itti fufe.",
          en: "He pursued his undergraduate and advanced professional studies at the prestigious Ethiopian Public Service University.",
          am: "እርሱም በኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርሲቲ በመማር አካዳሚያዊ ዕውቀቱንና ሙያዊ ክህሎቱን አጠናክሮ ቀጠለ።"
        },
        {
          om: "Barnoonni dhaabbata akkanaa keessatti argamu tajaajila mootummaa, bulchiinsa, hoggansa, itti gaafatamummaa, sirna hojii mootummaa fi misooma hawaasaa irratti hubannoo horachuuf carraa uuma.",
          en: "Education in such an institutional pillar provides comprehensive mastery in public service, governance, ethical leadership, administrative law, institutional procedures, and socio-economic community development.",
          am: "በእንደዚህ ዓይነት ተቋም ውስጥ የሚገኝ ትምህርት በመንግሥት አገልግሎት፣ በህዝብ አስተዳደር፣ በአመራርነት፣ በተጠያቂነት፣ በመንግሥት አሠራር ሥርዓት እና በማኅበረሰብ ልማት ላይ ጥልቅ ዕውቀት ለመቅሰም ሰፊ ዕድል ይፈጥራል።"
        },
        {
          om: "Adeemsa barnoota olaanaa isaa keessatti beekumsa argate gara jireenya hojii isaatti fiduun, muuxannoo hojii fi dandeettii isaa guddisuuf carraa argate.",
          en: "Integrating the insights gained during his university years into practical governance, he earned substantial operational experience and enhanced his administrative leadership.",
          am: "በከፍተኛ ትምህርቱ ሂደት ያገኘውን ዕውቀት ወደ ተግባራዊ የሥራ ዓለም በማምጣት፣ የሥራ ልምዱንና አመራርነቱን ለማሳደግ ታላቅ ዕድል አገኘ።"
        },
        {
          om: "Barnoonni olaanaa kunis adeemsa isaa keessatti sadarkaa guddaa qaba. Sababni isaas, beekumsi nama tokkoo guddina dhuunfaa isaa qofaaf osoo hin taane, hawaasa fi dhaabbilee keessatti gahee bu'a qabeessa akka qabaatu isa gargaara.",
          en: "This higher education phase represented a defining milestone in his career. Knowledge is not solely for private advancement, but enables a leader to make profound, lasting contributions across state institutions and society.",
          am: "ይህ የከፍተኛ ትምህርት ደረጃ በጉዞው ውስጥ እጅግ የጎላ ስፍራ ነበረው። ምክንያቱም የሰው ልጅ ዕውቀት ለግል ዕድገቱ ብቻ ሳይሆን፣ በማኅበረሰቡና በተቋማት ውስጥ ውጤታማና በጎ ሚና እንዲኖረው ስለሚያግዘው ነው።"
        },
        {
          om: "Barnoota isaa itti fufuun sadarkaa Master's Degree irra ga'uun beekumsa isaa daran cimsate. Kunis jaalala barnootaa isaa fi fedhii yeroo dheeraaf of guddisuu qabu agarsiisa.",
          en: "Continuing his academic elevation, he earned his Master's Degree, reaching postgraduate distinction. This stands as an enduring monument to his love for learning and lifelong commitment to self-development.",
          am: "ትምህርቱን ይበልጥ በመግፋት የማስተርስ ድግሪ (Master's Degree) ደረጃ ላይ በመድረስ ዕውቀቱን አጠናከረ። ይህም ለትምህርት ያለውን ጥልቅ ፍቅር እና ራስን ዘወትር በዕውቀት የማሳደግ ጽኑ ፍላጎቱን በግልጽ ያሳያል።"
        }
      ]
    },

    // CHAPTER 6
    {
      num: 6,
      badge: {
        om: "BOQONNAA 6",
        en: "CHAPTER 6",
        am: "ምዕራፍ 6"
      },
      title: {
        om: "FORM OF GOVERNMENT FI TAJAAJILA HOJII",
        en: "FORM OF GOVERNMENT AND PUBLIC SERVICE",
        am: "የመንግሥት ሥርዓት እና የህዝብ አገልግሎት"
      },
      paragraphs: [
        {
          om: "Barnoonni namaaf karaa hojii banuu danda'a. Garuu beekumsa argame gara hojii qabatamaatti jijjiiruun imala jireenyaa keessatti gahee guddaa qaba.",
          en: "While education unlocks doors to employment, translating theoretical knowledge into tangible, principled action holds the supreme role in one's life journey.",
          am: "ትምህርት ለሰው ልጅ የሥራን መንገድ ሊከፍት ይችላል። ነገር ግን የተገኘውን ዕውቀት ወደ ተግባራዊ ሥራ መለወጥ በሕይወት ጉዞ ውስጥ እጅግ የላቀ ሚና አለው።"
        },
        {
          om: "Waahii Tadaasaa Badadaa hojii isaa keessatti Form of Government irratti bobba'uun magaalaa Finfinnee keessatti hojii fi itti gaafatamummaa isaa itti fufe.",
          en: "Tadasaa Baddadaa engaged in state governance, carrying forward his professional service and executive responsibilities in Addis Ababa (Finfinnee).",
          am: "ታደሠ በደዳ በሥራው በመንግሥት ሥርዓትና አስተዳደር ውስጥ በመሰማራት በአዲስ አበባ ከተማ ውስጥ ኃላፊነቱንና አገልግሎቱን ቀጠለ።"
        },
        {
          om: "Hojii mootummaa keessatti argamuun naamusa hojii, itti gaafatamummaa, yeroo kabajuu, seera hojii hordofuu fi tajaajila kennuu irratti hubannoo barbaada.",
          en: "Serving within public administration demands high professional discipline, unwavering accountability, strict punctuality, adherence to legal procedures, and a citizen-centered service culture.",
          am: "በመንግሥት ሥራ ውስጥ ማገልገል የሥራ ሥነ-ምግባርን፣ ተጠያቂነትን፣ ሰዓት ማክበርን፣ የሕግ የበላይነትን መከተልን እና ጥራት ያለው አገልግሎት መስጠትን በጥልቀት መረዳትን ይጠይቃል።"
        },
        {
          om: "Tajaajilli mootummaa hojii nama tokkoo qofa osoo hin taane, hojii dhaabbataafi hawaasa bal'aa waliin walqabata. Kanaaf, hojii mootummaa keessatti gaheen nama tokkoo hojii isaa sirnaan raawwachuu, itti gaafatamummaa fudhachuu fi hojii isaa keessatti amanamummaa agarsiisuu dha.",
          en: "Civil service is not an isolated individual activity; it impacts public institutions and the entire society. Therefore, a public servant's duty is to execute tasks with excellence, embrace accountability, and exemplify unassailable honesty.",
          am: "የመንግሥት አገልግሎት የአንድ ግለሰብ ሥራ ብቻ ሳይሆን፣ ከተቋማትና ከሰፊው ማኅበረሰብ ጋር የተቆራኘ ነው። ስለሆነም በመንግሥት አገልግሎት ውስጥ የአንድ ግለሰብ ድርሻ ሥራውን በአግባቡ መፈፀም፣ ኃላፊነትን መውሰድ እና በሥራው ላይ ፍጹም ታማኝነትን ማሳየት ነው።"
        },
        {
          om: "Seenaa hojii isaa keessatti barnoota irraa argate, beekumsa, muuxannoo fi dandeettii isaa fayyadamuun adeemsa hojii isaa itti fufe.",
          en: "Throughout his career, he applied his academic background, technical knowledge, seasoned experience, and leadership abilities to elevate public administration.",
          am: "በሥራ ታሪኩ ሁሉ ከትምህርቱ ያገኘውን ዕውቀት፣ ልምድ እና ክህሎት በመጠቀም የሥራውን ሂደት በስኬት መርቷል።"
        }
      ]
    },

    // CHAPTER 7
    {
      num: 7,
      badge: {
        om: "BOQONNAA 7",
        en: "CHAPTER 7",
        am: "ምዕራፍ 7"
      },
      title: {
        om: "FINFINNEE KEESSATTI MILKAA'INA FI HOJIIWWAN GURGUDDOO",
        en: "ACHIEVEMENTS AND MAJOR MILESTONES IN ADDIS ABABA",
        am: "በአዲስ አበባ የተመዘገቡ ታላላቅ ስኬቶችና ሥራዎች"
      },
      paragraphs: [
        {
          om: "Finfinneen magaalaa guddoo Itoophiyaa fi wiirtuu hojii, daldalaa, bulchiinsaa fi sochii diinagdee ti. Magaalaa guddittii keessatti hojii gaggeessuun beekumsa, muuxannoo, kutannoo fi carraa ofii sirnaan fayyadamuu gaafata.",
          en: "Addis Ababa (Finfinnee) is the capital of Ethiopia and the nerve center of commerce, diplomacy, administration, and economic dynamism. Leading initiatives in this metropolis demands acute knowledge, managerial depth, tenacity, and the prudent execution of opportunities.",
          am: "አዲስ አበባ የኢትዮጵያ ዋና ከተማና የሥራ፣ የንግድ፣ የአስተዳደር እንዲሁም የኢኮኖሚ እንቅስቃሴ ማዕከል ናት። በዚህች ታላቅ ከተማ ውስጥ ሥራን በስኬት መምራት ዕውቀትን፣ ልምድን፣ ቁርጠኝነትን እና ዕድሎችን በአግባቡ መጠቀምን ይጠይቃል።"
        },
        {
          om: "Tadaasaa Badadaa hojii isaa keessatti magaalaa Finfinnee keessatti iddoo guddaa qabaachuun, hojiiwwan gurguddoo irratti bobba'uun jireenya isaa keessatti tarkaanfii milkaa'inaa galmeesseera.",
          en: "Holding notable leadership responsibilities in Addis Ababa, Tadasaa Baddadaa engaged in critical public and developmental undertakings, marking exemplary milestones throughout his life.",
          am: "ታደሠ በደዳ በሥራው በአዲስ አበባ ከተማ ውስጥ ታላቅ ስፍራ በመያዝ፣ በታላላቅ የሥራ ኃላፊነቶች ላይ በመሰማራት በሕይወቱ ውስጥ አስደናቂ የስኬት ምዕራፎችን አስመዝግቧል።"
        },
        {
          om: "Inni abbaa gamoo ta'uunis qabeenya ijaaruu fi hojii isaa gara sadarkaa biraatti ceesisuu keessatti bu'aa argamsiiseera.",
          en: "Achieving economic empowerment through entrepreneurship and property development, he became a commercial building owner in Addis Ababa, expanding his achievements to higher economic frontiers.",
          am: "በተጨማሪም የንግድ ሕንፃ ባለቤት (አባ ገሞ) በመሆን ሀብትን በማፍራትና ሥራውን ወደ ላቀ ደረጃ በማሸጋገር ረገድ ከፍተኛ ውጤት አስመዝግቧል።"
        },
        {
          om: "Gamoon ijaarame tokko qabeenya nama tokkoo qofa miti; akka haala itti fayyadama isaatti hojii, tajaajila, carraa daldalaa fi faayidaa hawaasaaf bu'uura ta'uu danda'a.",
          en: "A commercial building is not merely private property; depending on its utilization, it forms the foundation for employment, public services, commerce, and wider community benefits.",
          am: "የተገነባ ሕንፃ የግለሰብ ንብረት ብቻ አይደለም፤ እንደ አጠቃቀሙ ሁኔታ ለሥራ ዕድል ፈጠራ፣ ለአገልግሎት፣ ለንግድ እንቅስቃሴ እና ለህብረተሰብ ጥቅም ታላቅ መሠረት ሊሆን ይችላል።"
        },
        {
          om: "Milkaa'inni inni argate kun imala jireenyaa keessatti hojii, carraa, beekumsa fi murannoo walitti fiduun bu'aa argamsiisuun akka danda'amu ibsa.",
          en: "The success he achieved illustrates how aligning hard work, timely opportunities, knowledge, and perseverance creates lasting and meaningful impact.",
          am: "ይህ ያስመዘገበው ስኬት በሕይወት ጉዞ ውስጥ ጠንካራ ሥራን፣ ዕድልን፣ ዕውቀትን እና ጽናትን በማጣመር ታላቅ ውጤት ማስመዝገብ እንደሚቻል ማሳያ ነው።"
        }
      ]
    },

    // CHAPTER 8
    {
      num: 8,
      badge: {
        om: "BOQONNAA 8",
        en: "CHAPTER 8",
        am: "ምዕራፍ 8"
      },
      title: {
        om: "BARNOOTA, KUTANNOO FI MUL'ATA FUULDURAA",
        en: "EDUCATION, PERSEVERANCE AND FUTURE VISION",
        am: "ትምህርት፣ ጽናት እና የወደፊት ራዕይ"
      },
      paragraphs: [
        {
          om: "Seenaa jireenyaa Tadaasaa Badadaa keessatti wanti adda durummaan mul'atu jaalala barnootaa fi adeemsa of guddisuu dha.",
          en: "The most prominent hallmark of Tadasaa Baddadaa's life story is an unrelenting love for education and continuous personal growth.",
          am: "በታደሠ በደዳ የሕይወት ታሪክ ውስጥ ጎልቶ የሚታየው ዋነኛው እሴት ለትምህርት ያለው ፍቅር እና ራስን ዘወትር የማሳደግ ጽኑ ጉዞ ነው።"
        },
        {
          om: "Barnoonni isaa Holeta Government School irraa jalqabee, Holeta Preparatory School, Ethiopian Public Service University fi sadarkaa Master's Degree ga'uun adeemsa beekumsaa isaa ibsa.",
          en: "His educational trajectory—originating at Holeta School, progressing through Holeta Preparatory School, culminating at the Ethiopian Public Service University, and achieving a Master's Degree—illustrates an exemplary quest for knowledge.",
          am: "የትምህርት ጉዞው ከሆለታ ትምህርት ቤት ጀምሮ፣ በሆለታ መሰናዶ ትምህርት ቤት፣ በኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርሲቲ እና እስከ ማስተርስ ድግሪ (Master's Degree) ድረስ መዝለቁ የዕውቀት ጎዳናውን በግልጽ ያሳያል።"
        },
        {
          om: "Imalli kun nama tokkoof barnoonni karaa jireenya isaa jijjiiruu danda'u keessaa tokko ta'uu agarsiisa.",
          en: "This voyage proves conclusively that education remains one of the most potent, life-transforming forces available to humankind.",
          am: "ይህ ጉዞ ለአንድ ግለሰብ ትምህርት የሕይወቱን አቅጣጫ ሊለውጡ ከሚችሉ ታላላቅ መንገዶች ዋነኛው መሆኑን ያረጋግጣል።"
        },
        {
          om: "Kutannoon imala kana keessatti barbaachisaa ture. Namni kaayyoo qabaatu, carraa argate fayyadamu, beekumsa isaa cimsatu fi hojii isaa irratti xiyyeeffatu gara fuulduraatti ce'uu danda'a.",
          en: "Perseverance was vital across every stage. An individual who maintains a resolute purpose, maximizes opportunities, solidifies knowledge, and dedicates themselves to their calling will inevitably triumph.",
          am: "በዚህ ጉዞ ውስጥ ጽናት እጅግ አስፈላጊ ነበር። ዓላማ ያለው፣ ያገኘውን ዕድል የሚጠቀም፣ ዕውቀቱን የሚያጠናክር እና በሥራው ላይ ትኩረት የሚያደርግ ሰው ሁልጊዜም ወደፊት መራመድ ይችላል።"
        },
        {
          om: "Milkaa'inni dhugaan qabeenya qofa keessatti hin madaalamu. Beekumsa, naamusa, hojii, itti gaafatamummaa fi bu'aa hawaasaaf argamsiisuunis madaalama.",
          en: "Genuine success is not weighed in material acquisitions alone. It is equally calibrated through wisdom, integrity, diligence, accountability, and the tangible betterment brought to humanity.",
          am: "እውነተኛ ስኬት በቁሳዊ ሀብት ብቻ አይለካም። በዕውቀት፣ በሥነ-ምግባር፣ በሥራ ወዳድነት፣ በኃላፊነት ስሜትና ለህብረተሰቡ በሚበረከት በጎ አስተዋጽዖም ጭምር ይለካል።"
        }
      ]
    },

    // CHAPTER 9
    {
      num: 9,
      badge: {
        om: "BOQONNAA 9",
        en: "CHAPTER 9",
        am: "ምዕራፍ 9"
      },
      title: {
        om: "DHAAMSA DHALOOTA HAARAATIIF",
        en: "A TIMELESS MESSAGE TO THE NEXT GENERATION",
        am: "ለአዲሱ ትውልድ የተላለፈ መልእክት"
      },
      paragraphs: [
        {
          om: "Seenaa Tadaasaa Badadaa irraa dhaloonni haaraan yaada hedduu argachuu danda'a:",
          en: "From the lived experiences of Tadasaa Baddadaa, the rising generation can glean profound and timeless principles:",
          am: "ከታደሠ በደዳ የሕይወት ታሪክ አዲሱ ትውልድ በርካታ ጠቃሚ ምክሮችንና መርሆችን መቅሰም ይችላል፦"
        }
      ],
      listItems: [
        {
          om: "<strong>Tokkoffaa, barnootaaf jaalala qabaachuun murteessaa dha:</strong> Barnoonni namaaf karaa beekumsaa, hubannoo fi carraa jireenyaa banuu danda'a.",
          en: "<strong>First, fostering a passion for education is essential:</strong> Education opens boundless horizons of wisdom, deep comprehension, and transformative life opportunities.",
          am: "<strong>አንደኛ፣ ለትምህርት ፍቅር ሊኖረን ይገባል፦</strong> ትምህርት የዕውቀትን፣ የማስተዋልን እና የሕይወት ዕድሎችን በር ይከፍታል።"
        },
        {
          om: "<strong>Lammaffaa, kaayyoo jireenyaa qabaachuun barbaachisaa dha:</strong> Namni bakka ga'uu barbaadu beekee, tarkaanfii barbaachisaa fudhachuu qaba.",
          en: "<strong>Second, holding a clear purpose in life is vital:</strong> One must envision the destination clearly and take disciplined, decisive steps toward it.",
          am: "<strong>ሁለተኛ፣ በሕይወት ውስጥ ግልጽ ዓላማ መያዝ ያስፈልጋል፦</strong> የት መድረስ እንደሚፈልግ የሚያውቅ ሰው አስፈላጊውን እርምጃ በቆራጥነት መውሰድ አለበት።"
        },
        {
          om: "<strong>Sadaffaa, deeggarsa maatii fi hawaasaa kabajuu qaba:</strong> Milkaa'inni nama tokkoo yeroo baay'ee deeggarsa namoota biroo waliin walqabata.",
          en: "<strong>Third, honoring the support of family and community is indispensable:</strong> An individual's success is almost always intertwined with the sacrifices and encouragement of others.",
          am: "<strong>ሦስተኛ፣ የቤተሰብንና የማኅበረሰብን ድጋፍ ማክበር ተገቢ ነው፦</strong> የአንድ ግለሰብ ስኬት ብዙውን ጊዜ ከሌሎች ሰዎች ድጋፍና አጋርነት ጋር የተቆራኘ ነው።"
        },
        {
          om: "<strong>Afraffaa, carraa argame sirnaan fayyadamuu qaba:</strong> Carraan yeroo hundumaa hin turu; yeroo argametti itti fayyadamuun barbaachisaa dha.",
          en: "<strong>Fourth, seizing opportunities prudently is crucial:</strong> Opportunities do not linger indefinitely; grasping and utilizing them with urgency defines progress.",
          am: "<strong>አራተኛ፣ ያገኙትን ዕድል በአግባቡ መጠቀም ያስፈልጋል፦</strong> ዕድል ሁልጊዜ ተደላድላ አትጠብቅም፤ በተገኘችበት ቅጽበት በአግባቡ መጠቀም ወሳኝ ነው።"
        },
        {
          om: "<strong>Shanaffaa, hojii irratti amanamummaa fi itti gaafatamummaa qabaachuun:</strong> Bu'uura guddina yeroo dheeraa ti.",
          en: "<strong>Fifth, integrity and accountability in one's vocation:</strong> These form the immutable pillars of long-term sustainable greatness and honor.",
          am: "<strong>አምስተኛ፣ በሥራ ላይ ታማኝነት እና ኃላፊነት ሊኖረን ይገባል፦</strong> ይህ ለዘላቂ ዕድገትና ለስኬት የማይናወጥ መሠረት ነው።"
        }
      ],
      closing: {
        om: "Dhaloonni har'aa seenaa namoota jireenya isaanii keessatti tarkaanfii gara fuulduraa fudhatan irraa barachuun, kaayyoo mataa isaanii ijaaruu qabu.",
        en: "Today's generation must draw inspiration from leaders who pioneered forward through dedication, shaping their own purposeful visions for the future.",
        am: "የዛሬው ትውልድ በሕይወታቸው ውስጥ ወደፊት የተራመዱ ታላላቅ ሰዎችን ታሪክ በማጥናት የራሳቸውን ዓላማ በጽናት ሊገነቡ ይገባል።"
      }
    },

    // CHAPTER 10
    {
      num: 10,
      badge: {
        om: "BOQONNAA 10",
        en: "CHAPTER 10",
        am: "ምዕራፍ 10"
      },
      title: {
        om: "XUMURA – SEENAA JIREENYAA FI YAADANNOO",
        en: "CONCLUSION – LIFE LEGACY AND LASTING MEMORY",
        am: "ማጠቃለያ – የሕይወት ታሪክና ዘላለማዊ አሻራ"
      },
      paragraphs: [
        {
          om: "Walumaagalatti, seenaa jireenyaa Waahii Tadaasaa Badadaa keessatti dhalootaa fi ijoollummaa Giddugaleessa Aanaa Meettaa irraa jalqabee, barnoota, guddina dhuunfaa, hojii fi milkaa'ina Finfinnee keessatti argate hanga har'aatti adeemsa jireenyaa bal'aan jira.",
          en: "In synthesis, the life story of Tadasaa Baddadaa reflects an expansive, inspiring journey—beginning from his birth and childhood in Central Oromia, Meettaa District, advancing through education and personal discipline, and culminating in his governance leadership and milestones in Addis Ababa.",
          am: "በአጠቃላይ በታደሠ በደዳ የሕይወት ታሪክ ውስጥ ከማዕከላዊ ኦሮሚያ ሜጣ ወረዳ ውልደትና ልጅነት ጀምሮ፣ በትምህርት፣ በግል ጥረት፣ በሥራ እንዲሁም በአዲስ አበባ ውስጥ እስካስመዘገበው ታላቅ ስኬት ድረስ ሰፊና አስተማሪ የሕይወት ጉዞ አለ።"
        },
        {
          om: "Inni Holeta School keessatti barnoota isaa jalqabe; Holeta Preparatory School keessatti itti fufe; Ethiopian Public Service University keessatti barnoota olaanaa hordofuun beekumsa isaa cimsate; Master's Degree irra ga'uunis sadarkaa barnootaa isaa guddisate.",
          en: "He began his schooling at Holeta School; advanced to Holeta Preparatory School; consolidated his governance scholarship at the Ethiopian Public Service University; and elevated his academic credential by attaining his Master's Degree.",
          am: "መደበኛ ትምህርቱን በሆለታ ትምህርት ቤት ጀመረ፤ በሆለታ መሰናዶ ትምህርት ቤት ቀጠለ፤ በኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርሲቲ ከፍተኛ ትምህርቱን በመከታተል ዕውቀቱን አጠናከረ፤ በማስተርስ ድግሪም (Master's Degree) የትምህርት ደረጃውን አሳደገ።"
        },
        {
          om: "Akkasumas, Form of Government keessatti hojii isaa Finfinnee keessatti itti fufuun, abbaa gamoo ta'uun hojii fi qabeenya isaa ijaarrachuu keessatti tarkaanfii guddaa fudhateera.",
          en: "Furthermore, dedicating his professional vocation to public administration in Addis Ababa, and becoming a commercial building owner, he took monumental strides in wealth creation and institutional leadership.",
          am: "እንዲሁም በመንግሥት አገልግሎት ውስጥ ሥራውን በአዲስ አበባ ከተማ በመቀጠል፣ የንግድ ሕንፃ ባለቤት በመሆን በሥራውና በኢኮኖሚው መስክ ታላቅ እርምጃ ተራምዷል።"
        },
        {
          om: "Seenaa jireenyaa isaa keessatti wanti yaadatamuu qabu tokko: bakka namni tokko irraa ka'e qofa osoo hin taane, mul'ata inni qabu, carraa itti fayyadamuufi hojii inni hojjetu gara fuulduraa isaa keessatti gahee qaba.",
          en: "What must be eternally remembered from his life: one's starting point does not decide the destination. Rather, it is the vision one holds, the opportunities seized, and the moral labor invested that shape human destiny.",
          am: "በሕይወት ታሪኩ ውስጥ ሊታወስ የሚገባው አንዱ ቁምነገር፦ አንድ ሰው የተነሳበት መነሻ ብቻ ሳይሆን፣ ያለው ራዕይ፣ የሚጠቀምበት ዕድል እና የሚሰራው ጠንካራ ሥራ የወደፊት ሕይወቱን በመወሰን ረገድ የላቀ ድርሻ እንዳለው ነው።"
        },
        {
          om: "Dhaloonni nama tokkoo bakka inni irraa ka'e ibsa; garuu kutannoon isaa, barnoonni isaa fi hojii isaa bakka inni ga'u keessatti gahee olaanaa qabu.",
          en: "One's origin explains where the journey began; but it is determination, education, and ethical labor that determine where one ultimately arrives.",
          am: "የሰው ልጅ የትውልድ ሥፍራ ከየት እንደተነሳ ያሳያል፤ ቁርጠኝነቱ፣ ትምህርቱ እና የሥራ ትጋቱ ግን የት እንደሚደርስ የሚወስኑ ወሳኝ ኃይሎች ናቸው።"
        },
        {
          om: "Tadaasaa Badadaa seenaa jireenyaa isaa keessatti imala barnootaa, hojii fi guddina dhuunfaa walitti fiduun, seenaa dhalootaaf yaadannoo ta'u qabu.",
          en: "Tadasaa Baddadaa harmonized academic elevation, public stewardship, and personal integrity into a rich life story that stands as an enduring beacon for posterity.",
          am: "ታደሠ በደዳ በሕይወት ታሪኩ ውስጥ የትምህርት ጉዞን፣ የሥራ ፍቅርንና የግል ዕድገትን በማጣመር ለትውልድ የሚተላለፍ የማይረሳ በጎ አሻራ አስቀምጧል።"
        }
      ],
      finalQuote: {
        om: "“Milkaa'inni har'aa bu'aa murannoo kaleessaa ti; egereen boruus bu'aa hojii har'aati.”",
        en: "“Today's success is the fruit of yesterday's perseverance; tomorrow's future is the harvest of today's dedication.”",
        am: "“የዛሬው ስኬት የትናንቱ ጽናት ውጤት ነው፤ የነገው ብሩህ ተስፋም የዛሬው ጥረት ፍሬ ነው።”"
      }
    }
  ],

  // ======================== TIMELINE NODES ========================
  timelineNodes: [
    {
      num: 1,
      level: {
        om: "Sadarkaa 1ffaa & Giddugaleessaa",
        en: "Primary & Middle School",
        am: "የመጀመሪያ እና መካከለኛ ደረጃ ትምህርት"
      },
      title: {
        om: "Holeta School",
        en: "Holeta School",
        am: "የሆለታ ትምህርት ቤት"
      },
      desc: {
        om: "Bu'uura beekumsaa fi dandeettii jireenyaa kan itti ijaarrate; barnoota akka karaa egeree isaa ittiin ijaarratuutti ilaalaa ture.",
        en: "Initiated his educational journey, cultivating a passion for reading, writing, critical thinking, and lifelong learning.",
        am: "የመሠረታዊ ዕውቀትና የሕይወት ክህሎት መሠረት የጣለበት፤ ትምህርትን የወደፊት ሕይወቱን የሚገነባበት መንገድ አድርጎ የተመለከተበት ወቅት።"
      }
    },
    {
      num: 2,
      level: {
        om: "Qophii Yunivarsiitii",
        en: "Preparatory Education",
        am: "የዩኒቨርሲቲ መሰናዶ ትምህርት"
      },
      title: {
        om: "Holeta Preparatory School",
        en: "Holeta Preparatory School",
        am: "የሆለታ መሰናዶ ትምህርት ቤት"
      },
      desc: {
        om: "Sadarkaa murteessaa beekumsa cimsuu, yaada madaaluu fi gara barnoota olaanaatti ce'uuf of qopheesse.",
        en: "Prepared with rigorous academic discipline and analytical skills to transition to higher education.",
        am: "ዕውቀቱን ያጠናከረበት፣ የማመዛዘን ችሎታውን ያሳደገበት እና ወደ ከፍተኛ ትምህርት ለመሸጋገር ራሱን ያዘጋጀበት ወሳኝ ደረጃ።"
      }
    },
    {
      num: 3,
      level: {
        om: "Barnoota Olaanaa",
        en: "Higher Education",
        am: "ከፍተኛ ትምህርት"
      },
      title: {
        om: "Ethiopian Public Service University",
        en: "Ethiopian Public Service University",
        am: "የኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርሲቲ"
      },
      desc: {
        om: "Tajaajila mootummaa, bulchiinsa, hoggansa, itti gaafatamummaa fi misooma hawaasaa irratti beekumsa ogummaa horate.",
        en: "Mastered public administration, leadership, government institutional systems, and community governance.",
        am: "በመንግሥት አገልግሎት፣ በህዝብ አስተዳደር፣ በአመራርነት፣ በተጠያቂነት እና በማኅበረሰብ ልማት ላይ ጥልቅ ሙያዊ ዕውቀት የቀሰመበት።"
      }
    },
    {
      num: 4,
      level: {
        om: "Digirii Lammaffaa",
        en: "Postgraduate Degree",
        am: "ሁለተኛ ድግሪ (ማስተርስ)"
      },
      title: {
        om: "Master's Degree",
        en: "Master's Degree Distinction",
        am: "የማስተርስ ድግሪ (Master's Degree)"
      },
      desc: {
        om: "Sadarkaa Master's Degree irra ga'uun jaalala barnootaa isaa fi fedhii yeroo dheeraaf of guddisuu qabu agarsiise.",
        en: "Achieved postgraduate academic distinction, confirming his continuous pursuit of personal development and national service.",
        am: "የማስተርስ ድግሪ ደረጃ ላይ በመድረስ ለትምህርት ያለውን ጥልቅ ፍቅርና ራስን ዘወትር በዕውቀት የማሳደግ ጽኑ ፍላጎቱን ያረጋገጠበት።"
      }
    }
  ],

  // ======================== CAREER CARDS ========================
  careerCards: [
    {
      icon: "🏛️",
      title: {
        om: "Form of Government & Tajaajila",
        en: "Form of Government & Public Service",
        am: "የመንግሥት ሥርዓትና የህዝብ አገልግሎት"
      },
      desc: {
        om: "Magaalaa Finfinnee keessatti hojii fi itti gaafatamummaa mootummaa irratti bobba'uun naamusa hojii, seera kabajuu fi amanamummaa olaanaadhaan tajaajilaa jira.",
        en: "Dedicated public service in Addis Ababa (Finfinnee), demonstrating strict work ethic, accountability, punctuality, and adherence to legal frameworks.",
        am: "በአዲስ አበባ ከተማ ውስጥ በመንግሥት ኃላፊነት ላይ በመሰማራት በከፍተኛ የሥራ ሥነ-ምግባር፣ የሕግ የበላይነትን በማክበር እና በታማኝነት ማገልገል።"
      }
    },
    {
      icon: "⚖️",
      title: {
        om: "Daarektarummaa & Kabachiisa Seeraa",
        en: "Directorate Leadership",
        am: "የዳይሬክተርነት አመራርና የሕግ የበላይነት"
      },
      desc: {
        om: "Hojiiwwan galii mootummaa, qorannoo dambiiwwanii fi kabachiisa seeraa irratti hoggansa ammayyaa fi iftoomina qabu diriirsuun beekama.",
        en: "Director of Customs, Revenue Operations, and Law Enforcement Service (ታደሠ በደዳ ረጋሣ - የቀረጥና ስብስባት አሰራርና የህግ ማስከበር አገልግሎት ዳይሬክተር). Spearheading regulatory compliance, ethical enforcement, and institutional transparency.",
        am: "የቀረጥና ስብስባት አሰራርና የህግ ማስከበር አገልግሎት ዳይሬክተር በመሆን ዘመናዊ፣ ግልጽና ፍትሐዊ የሆነ የሕግ የበላይነትንና የአሠራር ሥርዓትን መምራት።"
      }
    },
    {
      icon: "🏢",
      title: {
        om: "Abbaa Gamoo & Milkaa'ina Qabeenyaa",
        en: "Building Ownership & Economic Milestone",
        am: "የሕንፃ ባለቤትነትና የኢኮኖሚ ስኬት"
      },
      desc: {
        om: "Magaalaa Finfinnee keessatti abbaa gamoo ta'uunis qabeenya ijaaruu fi hojii isaa gara sadarkaa biraatti ceesisuu keessatti bu'aa argamsiiseera.",
        en: "Achieved economic elevation by becoming a commercial building owner in Addis Ababa, fostering commerce, employment, and societal service.",
        am: "በአዲስ አበባ ከተማ ውስጥ የንግድ ሕንፃ ባለቤት (አባ ገሞ) በመሆን የኢኮኖሚ አቅምን ማሳደግ፣ የሥራ ዕድል መፍጠርና ለህብረተሰብ ሁለንተናዊ ጥቅም ማበርከት።"
      }
    },
    {
      icon: "🌱",
      title: {
        om: "Fakkeenya Dhaloota Haaraa",
        en: "Role Model for the Youth",
        am: "ለአዲሱ ትውልድ በጎ አርአያ"
      },
      desc: {
        om: "Dhaloonni har'aa barnootaaf jaalala qabaachuun, kaayyoo ofii murteessuun, fi hojii irratti amanamummaa agarsiisuun gara milkaa'inaatti akka ce'an fakkeenya gaarii ta'a.",
        en: "Instills the principles that true success is built through perseverance, knowledge, integrity, family respect, and long-term societal vision.",
        am: "አዲሱ ትውልድ ለትምህርት ፍቅር እንዲኖረው፣ ዓላማውን እንዲያጸና፣ እና በሥራው ላይ በታማኝነት በመትጋት ወደ ስኬት እንዲሻገር የሚያበረታታ አርአያ።"
      }
    }
  ],

  // ======================== GALLERY ITEMS ========================
  galleryItems: [
    {
      title: {
        om: "Tadaasaa Badadaa Raggaasaa",
        en: "Tadasaa Baddadaa Regassa",
        am: "ታደሠ በደዳ ረጋሣ"
      },
      desc: {
        om: "Waajjira Hojii fi Mallattoo Daarektarummaa",
        en: "Executive Office Desk & Directorate Plaque",
        am: "የሥራ ቢሮ እና የዳይሬክተርነት ይፋዊ ሰሌዳ"
      }
    },
    {
      title: {
        om: "Hoggansa fi Amanamummaa",
        en: "Public Leadership & Integrity",
        am: "አመራርነት እና ታማኝነት"
      },
      desc: {
        om: "Naamusa fi itti gaafatamummaa tajaajila ummataa",
        en: "Guiding teams with accountability and precision",
        am: "በተጠያቂነትና በታማኝነት የሚመራ ህዝባዊ አገልግሎት"
      }
    },
    {
      title: {
        om: "Essuma Koo, Fakkeenya Koo",
        en: "My Uncle, My Role Model",
        am: "አጎቴ፣ የሕይወት አርአያዬ"
      },
      desc: {
        om: "Dhaloota haaraatiif ifa fi kaka'umsa",
        en: "A beacon of hope for younger generations",
        am: "ለአዲሱ ትውልድ ብሩህ ፋናና መነሳሻ"
      }
    },
    {
      title: {
        om: "Yuunivarsitii Tajaajila Uummataa",
        en: "Ethiopian Public Service University",
        am: "የኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርሲቲ"
      },
      desc: {
        om: "Dhaabbata Barnoota Olaanaa fi Digirii Lammaffaa",
        en: "Higher Education & Master's Degree Alma Mater",
        am: "የከፍተኛ ትምህርትና የማስተርስ ድግሪያቸውን የተማሩበት ተቋም"
      }
    }
  ]
};

if (typeof window !== 'undefined') {
  window.TRANSLATIONS = TRANSLATIONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS };
}
