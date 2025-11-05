
const themeCheckbox = document.getElementById('theme-checkbox');
const htmlElement = document.documentElement;
const currentTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeCheckbox.checked = theme === 'dark';
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

themeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

prefersDarkScheme.addEventListener('change', (e) => {
  // Only change theme if no user preference is stored
  if (!localStorage.getItem('theme')) {
    if (e.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
});

// Collapsible Sections
document.querySelectorAll('.section-header').forEach(header => {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.section-icon');

  // Initially collapse all sections except the first (Summary)
  if (header.parentElement.id !== 'summary') {
    content.style.display = 'none';
    icon.textContent = '+';
    header.setAttribute('aria-expanded', 'false');
  } else {
    icon.textContent = '-';
    header.setAttribute('aria-expanded', 'true');
  }

  const toggleSection = () => {
    const isExpanded = header.getAttribute('aria-expanded') === 'true';
    content.style.display = isExpanded ? 'none' : 'block';
    icon.textContent = isExpanded ? '+' : '-';
    header.setAttribute('aria-expanded', !isExpanded);
    header.focus(); // Set focus to the header after toggling
  };

  header.addEventListener('click', toggleSection);

  header.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSection();
    }
  });
});

// Font Sizer
const fontDecreaseBtn = document.getElementById('font-decrease');
const fontResetBtn = document.getElementById('font-reset');
const fontIncreaseBtn = document.getElementById('font-increase');
const root = document.documentElement;

const setFontSize = (size) => {
  root.style.fontSize = size + 'px';
  localStorage.setItem('font-size', size);
};

const savedFontSize = localStorage.getItem('font-size');
if (savedFontSize) {
  setFontSize(savedFontSize);
}

fontDecreaseBtn.addEventListener('click', () => {
  let currentSize = parseFloat(window.getComputedStyle(root).fontSize);
  setFontSize(currentSize - 1);
});

fontResetBtn.addEventListener('click', () => {
  setFontSize(18); // Reset to default
});

fontIncreaseBtn.addEventListener('click', () => {
  let currentSize = parseFloat(window.getComputedStyle(root).fontSize);
  setFontSize(currentSize + 1);
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Show button after scrolling down 200px
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic Copyright Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Skills Filtering
const skillSearchInput = document.getElementById('skill-search');
const resetSkillsBtn = document.getElementById('reset-skills-btn');
const skillTags = document.querySelectorAll('.skill-tag');

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
  filterSkills(''); // Show all skills
});
