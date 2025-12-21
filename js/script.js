
const themeCheckbox = document.getElementById('theme-checkbox');
const htmlElement = document.documentElement;
const currentTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeCheckbox) themeCheckbox.checked = theme === 'dark';
}

if (currentTheme) {
  setTheme(currentTheme);
} else {
  if (prefersDarkScheme.matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

if (themeCheckbox) {
    themeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
}

prefersDarkScheme.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    if (e.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
});

// Font Sizer
const fontDecreaseBtn = document.getElementById('font-decrease');
const fontResetBtn = document.getElementById('font-reset');
const fontIncreaseBtn = document.getElementById('font-increase');
const root = document.documentElement;

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 24;
const DEFAULT_FONT_SIZE = 16;

const setFontSize = (size) => {
  const fontSize = Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, parseFloat(size)));
  root.style.fontSize = fontSize + 'px';
  localStorage.setItem('font-size', fontSize);
};

const savedFontSize = localStorage.getItem('font-size');
if (savedFontSize) {
  setFontSize(parseFloat(savedFontSize));
}

if (fontDecreaseBtn) {
    fontDecreaseBtn.addEventListener('click', () => {
        let currentSize = parseFloat(window.getComputedStyle(root).fontSize);
        setFontSize(currentSize - 1);
    });
}

if (fontResetBtn) {
    fontResetBtn.addEventListener('click', () => {
        setFontSize(DEFAULT_FONT_SIZE); 
    });
}

if (fontIncreaseBtn) {
    fontIncreaseBtn.addEventListener('click', () => {
        let currentSize = parseFloat(window.getComputedStyle(root).fontSize);
        setFontSize(currentSize + 1);
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top-btn');

if (backToTopBtn) {
    const toggleBackToTop = () => {
        // Lower threshold to 100px
        if (window.scrollY > 100) { 
            backToTopBtn.style.display = 'flex'; 
        } else {
            backToTopBtn.style.display = 'none';
        }
    };

    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop(); // Run on load

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
} else {
    console.log("Debug: Back to top button NOT found");
}

// Dynamic Copyright Year
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Skills Filtering
const skillSearchInput = document.getElementById('skill-search');
const resetSkillsBtn = document.getElementById('reset-skills-btn');
const skillTags = document.querySelectorAll('.skill-tag');

if (skillSearchInput && resetSkillsBtn) {
    const filterSkills = (searchTerm) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        skillTags.forEach(tag => {
            const skillText = tag.textContent.toLowerCase();
            if (skillText.includes(lowerCaseSearchTerm)) {
                tag.style.display = 'inline-block';
            } else {
                tag.style.display = 'none';
            }
        });
    };

    skillSearchInput.addEventListener('input', (event) => {
        filterSkills(event.target.value);
    });

    resetSkillsBtn.addEventListener('click', () => {
        skillSearchInput.value = '';
        filterSkills(''); 
    });
}
