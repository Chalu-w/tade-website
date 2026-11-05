// script.js - Comprehensive Multilingual & Interactive System for Waahii Tadaasaa Badadaa Biography
// Supported Languages: 'om' (Afaan Oromoo), 'en' (English), 'am' (አማርኛ)

let currentLanguage = 'om';
let currentReaderMode = 'all'; // 'all' or 'paged'
let currentChapter = 1;
const totalChapters = 10;
let baseFontSize = 16.5;

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMobileNav();
  initReaderControls();
  highlightActiveNavOnScroll();
  initFloatingBottomButton();
});

// ==================== 1. MULTILINGUAL TRANSLATION SYSTEM ====================

function setLanguage(lang) {
  if (!['om', 'en', 'am'].includes(lang)) {
    lang = 'om';
  }
  currentLanguage = lang;

  // Persist preference in localStorage
  try {
    localStorage.setItem('waahii_selected_language', lang);
  } catch (e) {
    // localStorage might be disabled in private mode
  }

  // Update HTML and body lang attribute
  document.documentElement.lang = lang;
  if (document.body) {
    document.body.setAttribute('lang', lang);
  }

  // Update switcher buttons UI
  const btnOm = document.getElementById('langBtnOm') || document.getElementById('omBtn');
  const btnEn = document.getElementById('langBtnEn') || document.getElementById('enBtn');
  const btnAm = document.getElementById('langBtnAm');

  if (btnOm) btnOm.classList.toggle('active', lang === 'om');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnAm) btnAm.classList.toggle('active', lang === 'am');

  if (typeof TRANSLATIONS === 'undefined') {
    console.error('TRANSLATIONS dictionary not loaded');
    return;
  }

  const ui = TRANSLATIONS.ui;

  // 1. Navigation & Brand
  const brandNameEl = document.querySelector('.brand-name');
  if (brandNameEl && ui.brandName) brandNameEl.textContent = ui.brandName[lang];

  const brandTaglineEl = document.querySelector('.brand-tagline');
  if (brandTaglineEl && ui.brandTagline) brandTaglineEl.textContent = ui.brandTagline[lang];

  const navMap = {
    '#home': ui.navHome,
    '#tribute': ui.navTribute,
    '#biography': ui.navBiography,
    '#timeline': ui.navEducation,
    '#career': ui.navCareer,
    '#gallery': ui.navGallery,
    '#connect': ui.navConnect,
    '#videos': ui.navVideos
  };

  const updateNavLinkText = link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (navMap[href]) {
      link.textContent = navMap[href][lang];
    } else if (href === 'index.html' || href === 'index.html#home') {
      link.textContent = ui.navHome[lang];
    } else if (href === 'index.html#connect') {
      link.textContent = ui.navConnect[lang];
    } else if (href === 'index.html#videos') {
      link.textContent = ui.navVideos[lang];
    } else if (href === 'biography.html') {
      if (ui.btnReadBiography) {
        link.textContent = ui.btnReadBiography[lang];
      }
    }
  };

  document.querySelectorAll('.nav-links a').forEach(updateNavLinkText);
  document.querySelectorAll('.footer-links a').forEach(updateNavLinkText);

  // 2. Hero Section & Biography Entry Buttons
  const heroBadge = document.querySelector('.hero-section .gold-badge');
  if (heroBadge && ui.heroBadge) heroBadge.textContent = ui.heroBadge[lang];

  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle && ui.heroSubtitle) heroSubtitle.textContent = ui.heroSubtitle[lang];

  const heroDesc = document.querySelector('.hero-description');
  if (heroDesc && ui.heroDesc) heroDesc.textContent = ui.heroDesc[lang];

  // Biography Entry Button Text (OM: Seenaa Isaa Dubbisi | EN: Read His Biography | AM: የህይወት ታሪኩን ያንብቡ)
  document.querySelectorAll('.btn-biography-entry .bio-btn-text, .bio-btn-text').forEach(el => {
    if (ui.btnReadBiography && ui.btnReadBiography[lang]) {
      el.textContent = ui.btnReadBiography[lang];
    }
  });

  const btnExplore = document.querySelector('.hero-cta-group a[href="#biography"] span:first-child');
  if (btnExplore && ui.btnExploreBio) btnExplore.textContent = ui.btnExploreBio[lang];

  const btnWatch = document.querySelector('.hero-cta-group a[href="#videos"] span:first-child');
  if (btnWatch && ui.btnWatchVideo) btnWatch.textContent = ui.btnWatchVideo[lang];

  const btnJourney = document.querySelector('.hero-cta-group a[href="#timeline"] span:first-child');
  if (btnJourney && ui.btnDiscoverJourney) btnJourney.textContent = ui.btnDiscoverJourney[lang];

  // Dedicated Biography Page Banner / Hero (if present)
  const bioHeroBadge = document.querySelector('.bio-page-hero .gold-badge');
  if (bioHeroBadge && ui.bioPageHeroBadge) bioHeroBadge.textContent = ui.bioPageHeroBadge[lang];

  const bioHeroTitle = document.querySelector('.bio-page-hero .hero-title .gold-gradient-text');
  if (bioHeroTitle && ui.bioPageHeroTitle) bioHeroTitle.textContent = ui.bioPageHeroTitle[lang];

  const bioHeroSubtitle = document.querySelector('.bio-page-hero .hero-subtitle');
  if (bioHeroSubtitle && ui.bioPageHeroSubtitle) bioHeroSubtitle.textContent = ui.bioPageHeroSubtitle[lang];

  const bioBackBtnText = document.querySelector('.btn-back-home .btn-label');
  if (bioBackBtnText && ui.bioPageBackBtn) bioBackBtnText.textContent = ui.bioPageBackBtn[lang];

  const bioStartReadingText = document.querySelector('.btn-start-reading .btn-label');
  if (bioStartReadingText && ui.bioStartReadingBtn) bioStartReadingText.textContent = ui.bioStartReadingBtn[lang];

  const bioViewPhotosText = document.querySelector('.btn-view-photos .btn-label');
  if (bioViewPhotosText && ui.bioViewPhotosBtn) bioViewPhotosText.textContent = ui.bioViewPhotosBtn[lang];

  const heroQuote = document.querySelector('.hero-quote-snippet p');
  if (heroQuote && ui.heroQuote) heroQuote.textContent = ui.heroQuote[lang];

  const portraitTitle = document.querySelector('.portrait-title');
  if (portraitTitle && ui.portraitDirectorTitle) portraitTitle.textContent = ui.portraitDirectorTitle[lang];

  // 3. Personal Tribute Section
  const tributePill = document.querySelector('#tribute .gold-pill');
  if (tributePill && ui.tributePill) tributePill.textContent = ui.tributePill[lang];

  const tributeTitle = document.querySelector('#tribute .section-title');
  if (tributeTitle && ui.tributeTitle) tributeTitle.textContent = ui.tributeTitle[lang];

  const tributeHighlight = document.querySelector('.tribute-highlight span:nth-child(2)');
  if (tributeHighlight && ui.tributeHighlight) tributeHighlight.textContent = ui.tributeHighlight[lang];

  const tributeCaptionSub = document.querySelector('.tribute-caption span');
  if (tributeCaptionSub) {
    tributeCaptionSub.textContent = (lang === 'en')
      ? 'My Uncle & Lifelong Inspiration'
      : (lang === 'am' ? 'አጎቴ እና የሕይወት መነሳሻዬ' : 'Essuma Koo & Fakkeenya Jireenyaa Koo');
  }

  // Render Tribute Paragraphs
  const tributeParagraphs = document.querySelector('.tribute-paragraphs');
  if (tributeParagraphs && TRANSLATIONS.tribute) {
    const t = TRANSLATIONS.tribute;
    tributeParagraphs.innerHTML = `
      <p>${t.p1[lang]}</p>
      <p>${t.p2[lang]}</p>
      <p>${t.p3[lang]}</p>
      <p>${t.p4[lang]}</p>
      <p>${t.p5[lang]}</p>
      <p class="tribute-closing">${t.p6[lang]}</p>
    `;
  }

  // Dedication Card
  const dedicationRole = document.querySelector('.dedication-role');
  if (dedicationRole && ui.tributeRoleLabel) dedicationRole.textContent = ui.tributeRoleLabel[lang];

  const nephewStatus = document.querySelector('.nephew-status');
  if (nephewStatus && ui.nephewStatus) nephewStatus.textContent = ui.nephewStatus[lang];

  const nephewMotto = document.querySelector('.nephew-motto');
  if (nephewMotto && ui.nephewMotto) nephewMotto.textContent = ui.nephewMotto[lang];

  // 4. Biography Book Shell & Toolbar
  const bookPill = document.querySelector('#biography .gold-pill');
  if (bookPill && ui.bookPill) bookPill.textContent = ui.bookPill[lang];

  const bookTitle = document.querySelector('#biography .section-title');
  if (bookTitle && ui.bookTitle) bookTitle.textContent = ui.bookTitle[lang];

  const bookSubtitle = document.querySelector('#biography .section-subtitle');
  if (bookSubtitle && ui.bookSubtitle) bookSubtitle.textContent = ui.bookSubtitle[lang];

  const tocTitle = document.querySelector('.toc-title span:last-child');
  if (tocTitle && ui.tocHeader) tocTitle.textContent = ui.tocHeader[lang];

  const viewAllBtn = document.getElementById('viewAllBtn');
  if (viewAllBtn && ui.btnViewAll) viewAllBtn.textContent = ui.btnViewAll[lang];

  const viewPagedBtn = document.getElementById('viewPagedBtn');
  if (viewPagedBtn && ui.btnViewPaged) viewPagedBtn.textContent = ui.btnViewPaged[lang];

  const textSizeLabel = document.querySelector('.font-size-controls span');
  if (textSizeLabel && ui.textSizeLabel) textSizeLabel.textContent = ui.textSizeLabel[lang];

  // Update TOC List Button Titles
  const tocItems = document.querySelectorAll('#tocList .toc-item');
  tocItems.forEach((btn, idx) => {
    const nameSpan = btn.querySelector('.toc-name');
    if (nameSpan && TRANSLATIONS.chapters[idx]) {
      nameSpan.textContent = TRANSLATIONS.chapters[idx].title[lang];
    }
  });

  // 5. Render All 10 Biography Chapters
  renderChaptersStream(lang);

  // 6. Education Timeline
  const timelinePill = document.querySelector('#timeline .gold-pill');
  if (timelinePill && ui.timelinePill) timelinePill.textContent = ui.timelinePill[lang];

  const timelineTitle = document.querySelector('#timeline .section-title');
  if (timelineTitle && ui.timelineTitle) timelineTitle.textContent = ui.timelineTitle[lang];

  const timelineSubtitle = document.querySelector('#timeline .section-subtitle');
  if (timelineSubtitle && ui.timelineSubtitle) timelineSubtitle.textContent = ui.timelineSubtitle[lang];

  const timelineNodes = document.querySelectorAll('.timeline-node');
  timelineNodes.forEach((node, idx) => {
    if (TRANSLATIONS.timelineNodes[idx]) {
      const data = TRANSLATIONS.timelineNodes[idx];
      const lvl = node.querySelector('.node-level');
      const ttl = node.querySelector('.node-title');
      const dsc = node.querySelector('.node-desc');
      if (lvl) lvl.textContent = data.level[lang];
      if (ttl) ttl.textContent = data.title[lang];
      if (dsc) dsc.textContent = data.desc[lang];
    }
  });

  // 7. Career Section
  const careerPill = document.querySelector('#career .gold-pill');
  if (careerPill && ui.careerPill) careerPill.textContent = ui.careerPill[lang];

  const careerTitle = document.querySelector('#career .section-title');
  if (careerTitle && ui.careerTitle) careerTitle.textContent = ui.careerTitle[lang];

  const careerCards = document.querySelectorAll('.career-card');
  careerCards.forEach((card, idx) => {
    if (TRANSLATIONS.careerCards[idx]) {
      const data = TRANSLATIONS.careerCards[idx];
      const ttl = card.querySelector('h3');
      const dsc = card.querySelector('p');
      if (ttl) ttl.textContent = data.title[lang];
      if (dsc) dsc.textContent = data.desc[lang];
    }
  });

  // 8. Photo Gallery Section
  const galleryPill = document.querySelector('#gallery .gold-pill');
  if (galleryPill && ui.galleryPill) galleryPill.textContent = ui.galleryPill[lang];

  const galleryTitle = document.querySelector('#gallery .section-title');
  if (galleryTitle && ui.galleryTitle) galleryTitle.textContent = ui.galleryTitle[lang];

  const gallerySubtitle = document.querySelector('#gallery .section-subtitle');
  if (gallerySubtitle && ui.gallerySubtitle) gallerySubtitle.textContent = ui.gallerySubtitle[lang];

  document.querySelectorAll('.gallery-card .overlay-text').forEach(ot => {
    if (ui.zoomText) ot.textContent = ui.zoomText[lang];
  });

  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach((card, idx) => {
    if (TRANSLATIONS.galleryItems[idx]) {
      const data = TRANSLATIONS.galleryItems[idx];
      const ttl = card.querySelector('.gallery-info h4');
      const dsc = card.querySelector('.gallery-info p');
      if (ttl) ttl.textContent = data.title[lang];
      if (dsc) dsc.textContent = data.desc[lang];
    }
  });

  // 9. Connect Section
  const connectPill = document.querySelector('#connect .gold-pill');
  if (connectPill && ui.connectPill) connectPill.textContent = ui.connectPill[lang];

  const connectTitle = document.querySelector('#connect .section-title');
  if (connectTitle && ui.connectTitle) connectTitle.textContent = ui.connectTitle[lang];

  const connectSubtitle = document.querySelector('#connect .section-subtitle');
  if (connectSubtitle && ui.connectSubtitle) connectSubtitle.textContent = ui.connectSubtitle[lang];

  const fbBtnSpan = document.querySelector('a[href*="facebook.com/tadesse.bedada.92"] span[data-en], a[href*="facebook.com/tadesse.bedada.92"] span');
  if (fbBtnSpan && ui.viewFbBtn) fbBtnSpan.textContent = ui.viewFbBtn[lang];

  const tiktokBtnSpan = document.querySelector('a[href*="tiktok.com/@tadesse1231bedada"] span[data-en], a[href*="tiktok.com/@tadesse1231bedada"] span');
  if (tiktokBtnSpan && ui.viewTikTokBtn) tiktokBtnSpan.textContent = ui.viewTikTokBtn[lang];

  const phoneBtnSpan = document.querySelector('a[href="tel:0911470097"] span');
  if (phoneBtnSpan && ui.callBtn) phoneBtnSpan.textContent = ui.callBtn[lang];

  const phoneNetTitle = document.querySelector('a[href="tel:0911470097"]')?.closest('.social-profile-card')?.querySelector('.social-network-title');
  if (phoneNetTitle) {
    phoneNetTitle.textContent = (lang === 'am') ? 'ስልክ' : (lang === 'en' ? 'TELEPHONE' : 'BILBILA');
  }

  // 10. Videos Section
  const videosPill = document.querySelector('#videos .gold-pill');
  if (videosPill && ui.videosPill) videosPill.textContent = ui.videosPill[lang];

  const videosTitle = document.querySelector('#videos .section-title');
  if (videosTitle && ui.videosTitle) videosTitle.textContent = ui.videosTitle[lang];

  const videosSubtitle = document.querySelector('#videos .section-subtitle');
  if (videosSubtitle && ui.videosSubtitle) videosSubtitle.textContent = ui.videosSubtitle[lang];

  const adminHeader = document.querySelector('.admin-header h3');
  if (adminHeader && ui.adminHeader) adminHeader.textContent = ui.adminHeader[lang];

  const adminDesc = document.querySelector('.admin-header p');
  if (adminDesc && ui.adminDesc) adminDesc.textContent = ui.adminDesc[lang];

  const addVideoBtnSpan = document.querySelector('#addVideoBtn span');
  if (addVideoBtnSpan && ui.adminBtn) addVideoBtnSpan.textContent = ui.adminBtn[lang];

  // Bottom Biography Section (if present)
  const bottomBioPill = document.querySelector('.bottom-biography-cta-section .gold-pill');
  if (bottomBioPill && ui.bottomBioPill) bottomBioPill.textContent = ui.bottomBioPill[lang];

  const bottomBioTitle = document.querySelector('.bottom-biography-cta-section .section-title');
  if (bottomBioTitle && ui.bottomBioTitle) bottomBioTitle.textContent = ui.bottomBioTitle[lang];

  const bottomBioSubtitle = document.querySelector('.bottom-biography-cta-section .section-subtitle');
  if (bottomBioSubtitle && ui.bottomBioSubtitle) bottomBioSubtitle.textContent = ui.bottomBioSubtitle[lang];

  // 11. Footer
  const footerTagline = document.querySelector('.site-footer .footer-brand p');
  if (footerTagline && ui.footerTagline) footerTagline.textContent = ui.footerTagline[lang];

  const footerBottomCopy = document.querySelector('.site-footer .footer-bottom p:first-child');
  if (footerBottomCopy && ui.footerCopy) footerBottomCopy.textContent = ui.footerCopy[lang];

  const footerMotto = document.querySelector('.site-footer .footer-motto');
  if (footerMotto && ui.footerMotto) footerMotto.textContent = ui.footerMotto[lang];

  // Update chapter navigation bar
  updateChapterNavUI();
}

function renderChaptersStream(lang) {
  const container = document.getElementById('chaptersDisplay');
  if (!container || !TRANSLATIONS.chapters) return;

  container.innerHTML = TRANSLATIONS.chapters.map((ch, idx) => {
    const chapNum = idx + 1;
    let extraMedia = '';

    // Chapter 5: Official Ethiopian Public Service University photograph
    if (chapNum === 5) {
      const capSub = (lang === 'en')
        ? 'The prestigious institution where Waahii Tadasaa Badadaa pursued higher education in public administration and governance.'
        : (lang === 'am')
        ? 'የኢትዮጵያ ሲቪል ሰርቪስ ዩኒቨርሲቲ – ክቡር አቶ ታደሠ በደዳ በህዝብ አስተዳደርና በመንግሥት አመራር የከፍተኛ ትምህርታቸውንና የማስተርስ ድግሪያቸውን ያጠናቀቁበት ታላቅ የትምህርት ተቋም።'
        : 'Yuunivarsitii Tajaajila Uummataa Itoophiyaa – Dhaabbata barnoota olaanaa fi ogummaa tajaajila mootummaa itti qoratanii fi cimsatan.';

      extraMedia = `
        <div class="chapter-image-container">
          <img src="ethiopian-public-service-university.jpg" 
               alt="Ethiopian Public Service University" 
               class="chapter-feature-img" 
               onclick="openLightbox('ethiopian-public-service-university.jpg', 'Ethiopian Public Service University')">
          <div class="image-gold-caption">
            <span class="gold-cap-title">ETHIOPIAN PUBLIC SERVICE UNIVERSITY</span>
            <span class="gold-cap-sub">${capSub}</span>
          </div>
        </div>
      `;
    }

    // Paragraphs
    const paragraphsHtml = ch.paragraphs.map(p => `<p>${p[lang]}</p>`).join('');

    // List items (Chapter 9)
    let listHtml = '';
    if (ch.listItems && ch.listItems.length > 0) {
      listHtml = `
        <ul class="gold-bullet-list">
          ${ch.listItems.map(item => `<li>${item[lang]}</li>`).join('')}
        </ul>
      `;
    }

    // Closing paragraph (Chapter 9)
    let closingHtml = '';
    if (ch.closing && ch.closing[lang]) {
      closingHtml = `<p>${ch.closing[lang]}</p>`;
    }

    // Final quote box (Chapter 10)
    let finalQuoteHtml = '';
    if (ch.finalQuote && ch.finalQuote[lang]) {
      finalQuoteHtml = `
        <div class="quote-gold-box">
          <p class="final-quote-text">${ch.finalQuote[lang]}</p>
        </div>
      `;
    }

    return `
      <article class="chapter-card" id="chap-${chapNum}" data-chapter="${chapNum}">
        <div class="chapter-header">
          <span class="chapter-badge">${ch.badge[lang]}</span>
          <h3 class="chapter-heading">${ch.title[lang]}</h3>
          <div class="gold-book-sep"></div>
        </div>
        ${extraMedia}
        <div class="chapter-body">
          ${paragraphsHtml}
          ${listHtml}
          ${closingHtml}
          ${finalQuoteHtml}
        </div>
      </article>
    `;
  }).join('');

  // Re-apply current user-selected font size
  document.querySelectorAll('.chapter-body').forEach(body => {
    body.style.fontSize = `${baseFontSize}px`;
  });

  // Re-apply current reader mode (all vs paged)
  if (currentReaderMode === 'paged') {
    showChapter(currentChapter);
  }
}

function initLanguage() {
  let saved = 'om';
  try {
    saved = localStorage.getItem('waahii_selected_language') || 'om';
  } catch (e) {
    saved = 'om';
  }
  setLanguage(saved);
}

// ==================== 2. MOBILE NAVIGATION TOGGLE ====================

function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    // Close menu when clicking any link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  }
}

// ==================== 3. BOOK READER & CHAPTER NAVIGATION ====================

function initReaderControls() {
  updateChapterNavUI();
}

function switchReaderMode(mode) {
  currentReaderMode = mode;

  const allBtn = document.getElementById('viewAllBtn');
  const pagedBtn = document.getElementById('viewPagedBtn');
  const navControls = document.getElementById('chapterNavControls');
  const chapters = document.querySelectorAll('.chapter-card');

  if (mode === 'all') {
    if (allBtn) allBtn.classList.add('active');
    if (pagedBtn) pagedBtn.classList.remove('active');
    if (navControls) navControls.classList.remove('show');

    // Show all chapters
    chapters.forEach(card => (card.style.display = 'block'));
  } else {
    if (allBtn) allBtn.classList.remove('active');
    if (pagedBtn) pagedBtn.classList.add('active');
    if (navControls) navControls.classList.add('show');

    // Show only the current chapter
    showChapter(currentChapter);
  }
}

function showChapter(chapNum) {
  currentChapter = chapNum;
  const chapters = document.querySelectorAll('.chapter-card');

  if (currentReaderMode === 'paged') {
    chapters.forEach(card => {
      const num = parseInt(card.getAttribute('data-chapter'), 10);
      card.style.display = num === chapNum ? 'block' : 'none';
    });
  }

  // Update TOC active state
  document.querySelectorAll('.toc-item').forEach((item, idx) => {
    item.classList.toggle('active', idx + 1 === chapNum);
  });

  updateChapterNavUI();
}

function jumpToChapter(chapNum) {
  currentChapter = chapNum;

  if (currentReaderMode === 'paged') {
    showChapter(chapNum);
  } else {
    // In all-view mode, scroll smoothly to the target chapter
    const target = document.getElementById(`chap-${chapNum}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Update TOC active item
  document.querySelectorAll('.toc-item').forEach((item, idx) => {
    item.classList.toggle('active', idx + 1 === chapNum);
  });

  updateChapterNavUI();
}

function navigateChapter(direction) {
  let target = currentChapter + direction;
  if (target < 1) target = 1;
  if (target > totalChapters) target = totalChapters;

  jumpToChapter(target);

  const container = document.getElementById('chaptersDisplay');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateChapterNavUI() {
  const indicator = document.getElementById('chapIndicator');
  const prevBtn = document.getElementById('prevChapBtn');
  const nextBtn = document.getElementById('nextChapBtn');

  if (indicator) {
    if (currentLanguage === 'en') {
      indicator.textContent = `Chapter ${currentChapter} of ${totalChapters}`;
    } else if (currentLanguage === 'am') {
      indicator.textContent = `ምዕራፍ ${currentChapter} ከ ${totalChapters}`;
    } else {
      indicator.textContent = `Boqonnaa ${currentChapter} / ${totalChapters}`;
    }
  }

  if (prevBtn) {
    prevBtn.disabled = currentChapter <= 1;
    prevBtn.style.opacity = currentChapter <= 1 ? '0.4' : '1';
    if (currentLanguage === 'en') {
      prevBtn.textContent = '← Previous Chapter';
    } else if (currentLanguage === 'am') {
      prevBtn.textContent = '← ያለፈው ምዕራፍ';
    } else {
      prevBtn.textContent = '← Boqonnaa Duraa';
    }
  }

  if (nextBtn) {
    nextBtn.disabled = currentChapter >= totalChapters;
    nextBtn.style.opacity = currentChapter >= totalChapters ? '0.4' : '1';
    if (currentLanguage === 'en') {
      nextBtn.textContent = 'Next Chapter →';
    } else if (currentLanguage === 'am') {
      nextBtn.textContent = 'ቀጣዩ ምዕራፍ →';
    } else {
      nextBtn.textContent = 'Boqonnaa Itti Aanu →';
    }
  }
}

// ==================== 4. FONT SIZE ADJUSTER ====================

function changeFontSize(delta) {
  baseFontSize += delta * 1.5;
  if (baseFontSize < 14) baseFontSize = 14;
  if (baseFontSize > 24) baseFontSize = 24;

  document.querySelectorAll('.chapter-body').forEach(body => {
    body.style.fontSize = `${baseFontSize}px`;
  });
}

// ==================== 5. FULLSCREEN LIGHTBOX VIEWER ====================

function openLightbox(imageSrc, captionText) {
  const modal = document.getElementById('imageLightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  if (modal && img) {
    img.src = imageSrc;
    if (caption) caption.textContent = captionText || 'Tadaasaa Badadaa';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('imageLightbox');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

// Close lightbox on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// ==================== 6. ADMINISTRATOR VIDEO EMBEDDING PORTAL ====================

function extractTikTokId(url) {
  const clean = url.trim().split('?')[0].split('#')[0];
  const parts = clean.split('/').filter(Boolean);
  return parts.pop() || '';
}

function handleAddAdminVideos() {
  const input = document.getElementById('tiktokUrlsInput');
  const gallery = document.getElementById('videoGallery');

  if (!input || !gallery) return;
  const rawText = input.value.trim();
  if (!rawText) {
    const msg = (currentLanguage === 'en')
      ? 'Please paste at least one TikTok video URL.'
      : (currentLanguage === 'am' ? 'እባክዎ ቢያንስ አንድ የቲክቶክ ቪዲዮ ሊንክ ያስገቡ።' : 'Moo qaraa toora URL viidiyoo TikTok galchaa.');
    alert(msg);
    return;
  }

  const lines = rawText.split('\n');
  let addedCount = 0;

  lines.forEach(line => {
    const url = line.trim();
    if (!url) return;

    let embedSrc = '';
    const id = extractTikTokId(url);

    if (url.includes('tiktok.com/embed/v2/')) {
      embedSrc = url;
    } else if (id) {
      embedSrc = `https://www.tiktok.com/embed/v2/${id}`;
    }

    if (embedSrc) {
      const card = document.createElement('div');
      card.className = 'video-card';
      const heading = (currentLanguage === 'en')
        ? 'Verified TikTok Moment'
        : (currentLanguage === 'am' ? 'እውነተኛ የቲክቶክ ክሊፕ' : 'Viidiyoo TikTok Qabatamaa');
      const openText = (currentLanguage === 'en')
        ? 'Open in TikTok App'
        : (currentLanguage === 'am' ? 'በቲክቶክ አፕሊኬሽን ክፈት' : 'TikTok irratti Bani');

      card.innerHTML = `
        <div class="video-frame-container">
          <iframe 
            src="${embedSrc}" 
            title="TikTok Video - ${id}" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
            loading="lazy">
          </iframe>
        </div>
        <div class="video-info-box">
          <h4>${heading}</h4>
          <p>${url}</p>
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="video-direct-link">
            <span>${openText}</span> ↗
          </a>
        </div>
      `;
      gallery.appendChild(card);
      addedCount++;
    }
  });

  input.value = '';
  if (addedCount > 0) {
    const successMsg = (currentLanguage === 'en')
      ? `Successfully embedded ${addedCount} video(s)!`
      : (currentLanguage === 'am' ? `${addedCount} ቪዲዮ(ዎች) በተሳካ ሁኔታ ተካተዋል！` : `Viidiyoon ${addedCount} milkaa'inaan dabalamuun galmaa'eera!`);
    alert(successMsg);
  }
}

// ==================== 7. ACTIVE NAV LINK HIGHLIGHT ON SCROLL ====================

function highlightActiveNavOnScroll() {
  const sections = document.querySelectorAll('main section');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      const rawHref = item.getAttribute('href') || '';
      if (rawHref.startsWith('#')) {
        const href = rawHref.substring(1);
        item.classList.toggle('active', href === currentId);
      }
    });
  });
}

// ==================== 8. FLOATING BOTTOM BIOGRAPHY BUTTON ====================

function initFloatingBottomButton() {
  const bar = document.getElementById('floatingBottomBar');
  if (!bar) return;

  const updateVisibility = () => {
    // Reveal after scrolling past top hero (220px)
    if (window.scrollY > 220) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();
}
