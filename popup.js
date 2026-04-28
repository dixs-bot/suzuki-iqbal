/**
 * ============================================
 * SUZUKI DEALER POPUP BANNER - JavaScript
 * ============================================
 * 
 * KONFIGURASI - Edit bagian ini untuk setiap bulan
 * ============================================
 */

// Aktif/Nonaktifkan Popup
const POPUP_CONFIG = {
  active: true,
  version: "mei2026",
  
  // Periode Program (Format: YYYY-MM-DD)
  startDate: "2026-05-01",
  endDate: "2026-05-31",
  
  // Countdown End (Format: YYYY-MM-DD HH:MM:SS)
  countdownEnd: "2026-05-31 23:59:59",
  
  // Delay muncul (dalam milidetik)
  showDelay: 2500,
  
  // Gambar brosur (ganti setiap bulan)
  brochureImage: "images/promo-mei.jpg",
  brochureAlt: "Promo Suzuki Mei 2026",
  
  // Link WhatsApp (ganti nomor)
  whatsappNumber: "6281234567890",
  whatsappMessage: "Halo, saya tertarik dengan Promo Suzuki Mei 2026",
  
  // Link detail promo
  detailLink: "#promo-detail"
};

/**
 * ============================================
 * POPUP CONTROLLER
 * ============================================
 */
class PopupController {
  constructor(config) {
    this.config = config;
    this.popup = null;
    this.countdownInterval = null;
    this.hasAnimated = false;
    
    // Bind methods
    this.init = this.init.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updateCountdown = this.updateCountdown.bind(this);
  }
  
  /**
   * Inisialisasi Popup
   */
  init() {
    // Cek apakah popup aktif
    if (!this.config.active) {
      console.log('[Popup] Popup tidak aktif');
      return;
    }
    
    // Cek periode
    if (!this.isWithinPeriod()) {
      console.log('[Popup] Di luar periode promo');
      return;
    }
    
    // Cek localStorage
    if (this.hasSeenToday()) {
      console.log('[Popup] Sudah ditampilkan hari ini');
      return;
    }
    
    // Get popup element
    this.popup = document.getElementById('promo-popup');
    if (!this.popup) {
      console.warn('[Popup] Element #promo-popup tidak ditemukan');
      return;
    }
    
    // Update dynamic content
    this.updateDynamicContent();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Start countdown
    this.startCountdown();
    
    // Show popup with delay
    setTimeout(this.show, this.config.showDelay);
  }
  
  /**
   * Cek apakah dalam periode promo
   */
  isWithinPeriod() {
    const now = new Date();
    const start = new Date(this.config.startDate + 'T00:00:00');
    const end = new Date(this.config.endDate + 'T23:59:59');
    
    return now >= start && now <= end;
  }
  
  /**
   * Cek apakah sudah ditampilkan hari ini
   */
  hasSeenToday() {
    const storedVersion = localStorage.getItem('popup_version');
    const storedDate = localStorage.getItem('popup_date');
    const today = new Date().toDateString();
    
    // Jika versi berbeda, reset
    if (storedVersion !== this.config.version) {
      localStorage.removeItem('popup_date');
      localStorage.removeItem('popup_dismissed');
      return false;
    }
    
    // Jika sudah di-dismiss hari ini dengan versi sama
    if (storedDate === today) {
      return true;
    }
    
    return false;
  }
  
  /**
   * Simpan ke localStorage
   */
  saveToStorage() {
    localStorage.setItem('popup_version', this.config.version);
    localStorage.setItem('popup_date', new Date().toDateString());
    localStorage.setItem('popup_dismissed', 'true');
  }
  
  /**
   * Update konten dinamis
   */
  updateDynamicContent() {
    // Update gambar
    const img = document.getElementById('popup-brochure-image');
    if (img) {
      img.src = this.config.brochureImage;
      img.alt = this.config.brochureAlt;
    }
    
    // Update link WhatsApp
    const waBtn = document.getElementById('btn-whatsapp');
    if (waBtn) {
      const waUrl = `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(this.config.whatsappMessage)}`;
      waBtn.href = waUrl;
    }
    
    // Update link detail
    const detailBtn = document.getElementById('btn-detail');
    const imageLink = document.getElementById('popup-image-link');
    if (detailBtn) {
      detailBtn.href = this.config.detailLink;
    }
    if (imageLink) {
      imageLink.href = this.config.detailLink;
    }
  }
  
  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Close button
    const closeBtn = document.getElementById('popup-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', this.handleClose);
    }
    
    // Overlay click (close when clicking outside)
    this.popup.addEventListener('click', this.handleOverlayClick);
    
    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyDown);
    
    // Don't show again checkbox
    const checkbox = document.getElementById('dont-show-today');
    if (checkbox) {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.saveToStorage();
        }
      });
    }
  }
  
  /**
   * Tampilkan popup
   */
  show() {
    if (!this.popup) return;
    
    this.popup.classList.add('active');
    this.popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const closeBtn = document.getElementById('popup-close-btn');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  }
  
  /**
   * Sembunyikan popup
   */
  hide() {
    if (!this.popup) return;
    
    this.popup.classList.remove('active');
    this.popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Clear countdown
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  
  /**
   * Handle close button
   */
  handleClose(e) {
    e.preventDefault();
    e.stopPropagation();
    this.hide();
  }
  
  /**
   * Handle overlay click
   */
  handleOverlayClick(e) {
    if (e.target === this.popup) {
      this.hide();
    }
  }
  
  /**
   * Handle keyboard navigation
   */
  handleKeyDown(e) {
    if (e.key === 'Escape' && this.popup && this.popup.classList.contains('active')) {
      this.hide();
    }
    
    // Tab trap
    if (e.key === 'Tab' && this.popup && this.popup.classList.contains('active')) {
      const focusableElements = this.popup.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
  
  /**
   * Start countdown timer
   */
  startCountdown() {
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  }
  
  /**
   * Update countdown display
   */
  updateCountdown() {
    const endTime = new Date(this.config.countdownEnd).getTime();
    const now = new Date().getTime();
    const distance = endTime - now;
    
    if (distance < 0) {
      // Countdown selesai
      clearInterval(this.countdownInterval);
      this.updateCountdownDisplay(0, 0, 0, 0);
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    this.updateCountdownDisplay(days, hours, minutes, seconds);
  }
  
  /**
   * Update countdown elements
   */
  updateCountdownDisplay(days, hours, minutes, seconds) {
    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');
    
    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }
}

/**
 * ============================================
 * UTILITY: Check DOM Ready
 * ============================================
 */
function domReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

/**
 * ============================================
 * INITIALIZE
 * ============================================
 */
domReady(function() {
  // Create popup instance
  const popupController = new PopupController(POPUP_CONFIG);
  
  // Initialize
  popupController.init();
  
  // Expose to global for debugging
  window.SuzukiPopup = popupController;
});

/**
 * ============================================
 * HELPER: Quick Config Update
 * ============================================
 * Fungsi helper untuk mengupdate konfigurasi dengan cepat
 * 
 * Contoh penggunaan untuk bulan baru:
 * 
 * POPUP_CONFIG.version = "juni2026";
 * POPUP_CONFIG.startDate = "2026-06-01";
 * POPUP_CONFIG.endDate = "2026-06-30";
 * POPUP_CONFIG.countdownEnd = "2026-06-30 23:59:59";
 * POPUP_CONFIG.brochureImage = "images/promo-juni.jpg";
 * POPUP_CONFIG.brochureAlt = "Promo Suzuki Juni 2026";
 */
