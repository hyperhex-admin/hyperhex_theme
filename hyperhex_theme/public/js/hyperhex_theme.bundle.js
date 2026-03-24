/* ============================================================
   HYPERHEX THEME — Desk JS
   Micro-interactions, dynamic enhancements for ERPNext v15
   ============================================================ */

(function () {
  'use strict';

  // ── Theme Switcher Override ──────────────────────────────────
  frappe.ui.ThemeSwitcher = class HyperHexThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
      super();
    }

    fetch_themes() {
      return new Promise((resolve) => {
        this.themes = [
          { name: "light", label: "HyperHex Light", info: "Industrial Light Theme" },
          { name: "dark", label: "HyperHex Dark", info: "Industrial Dark Theme" },
          { name: "automatic", label: "Automatic", info: "Follows system preference" }
        ];
        this.current_theme = localStorage.getItem('desk_theme') || frappe.boot?.theme || 'dark';
        resolve(this.themes);
      });
    }

    set_theme(theme) {
      localStorage.setItem('desk_theme', theme);
      
      frappe.call({
        method: "hyperhex_theme.overrides.switch_theme.switch_theme",
        args: { theme: theme }
      });

      if (theme === 'automatic') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
    }
  };

  // ── Automatic theme detection ───────────────────────────────
  function init_auto_theme() {
    const stored = localStorage.getItem('desk_theme');
    if (stored === 'automatic' || !stored) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', stored);
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    const stored = localStorage.getItem('desk_theme');
    if (stored === 'automatic' || !stored) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });

  // Apply stored theme on load and init HyperHex
  frappe.init && frappe.init(function() {
    init_auto_theme();
    HyperHex.init();
  });

  document.addEventListener('DOMContentLoaded', function() {
    init_auto_theme();
    HyperHex.init();
  });

  // Fallback if frappe.init already fired
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(function() {
      init_auto_theme();
      HyperHex.init();
    }, 100);
  }

  $(document).on('page-change', function () {
    HyperHex.onPageChange();
  });

  var HyperHex = {

    init: function () {
      this.syncThemeAttribute();
      this.injectFavicon();
      this.styleNavbarBrand();
      this.addHexGridToHome();
      this.onPageChange();
      console.log('%c⬡ HyperHex Theme Loaded', 'color:#00FFB2;font-family:monospace;font-size:12px;');
    },

    syncThemeAttribute: function () {
      const theme = localStorage.getItem('desk_theme') || frappe.boot?.theme || 'dark';
      if (theme === 'automatic') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
    },

    onPageChange: function () {
      this.syncThemeAttribute();
      this.addPageEntryAnimation();
      this.styleStatusBadges();
      this.enhanceFormHead();
      this.styleNumberCards();
    },

    injectFavicon: function () {
      var existing = document.querySelector('link[rel="icon"]');
      if (existing) existing.remove();
      var link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpolygon points='16,2 30,9 30,23 16,30 2,23 2,9' fill='%23060A0F' stroke='%2300FFB2' stroke-width='2'/%3E%3Ctext x='16' y='22' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='12' fill='%2300FFB2'%3EHX%3C/text%3E%3C/svg%3E";
      document.head.appendChild(link);
    },

    styleNavbarBrand: function () {
      var brand = document.querySelector('.navbar-brand');
      if (brand && brand.textContent.trim()) {
        if (!brand.querySelector('.hx-brand')) {
          var text = brand.textContent.trim();
          brand.innerHTML = '<span class="hx-brand" style="font-family:\'Bebas Neue\',sans-serif;letter-spacing:.1em;font-size:1.4rem;color:#EEF4FA;">' + text + '</span>';
        }
      }
    },

    addHexGridToHome: function () {
      var modules = document.querySelectorAll('.desk-link, .module-icon');
      modules.forEach(function (el, i) {
        el.style.animationDelay = (i * 40) + 'ms';
        el.classList.add('hx-module-fadein');
      });
    },

    addPageEntryAnimation: function () {
      var content = document.querySelector('.layout-main-section');
      if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(10px)';
        content.style.transition = 'opacity .25s ease, transform .25s ease';
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
          });
        });
      }
    },

    styleStatusBadges: function () {
      var inProgress = document.querySelectorAll('.indicator-pill.orange, .indicator-pill.yellow');
      inProgress.forEach(function (el) {
        el.style.animation = 'hx-pulse 2s ease-in-out infinite';
      });
    },

    enhanceFormHead: function () {
      var formHead = document.querySelector('.form-page .page-head');
      if (formHead && !formHead.classList.contains('hx-enhanced')) {
        formHead.classList.add('hx-enhanced');
        var statusLabel = formHead.querySelector('.indicator-pill');
        if (statusLabel) {
          statusLabel.style.fontFamily = "'DM Mono', monospace";
          statusLabel.style.fontSize = '.65rem';
          statusLabel.style.letterSpacing = '.1em';
          statusLabel.style.textTransform = 'uppercase';
        }
      }
    },

    styleNumberCards: function () {
      var cards = document.querySelectorAll('.number-card');
      cards.forEach(function (card) {
        var num = card.querySelector('.number, .widget-head .number');
        if (num) {
          num.style.fontFamily = "'Bebas Neue', sans-serif";
          num.style.color = '#00FFB2';
          num.style.fontSize = '2.5rem';
          num.style.letterSpacing = '.04em';
        }
      });
    }
  };

  var style = document.createElement('style');
  style.textContent = `
    @keyframes hx-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: .6; }
    }
    .hx-module-fadein {
      animation: hx-fadein .4s ease both;
    }
    @keyframes hx-fadein {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

})();
