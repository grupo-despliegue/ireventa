(function () {
  const ls = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (ls === 'dark' || (!ls && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  function setTheme(mode) {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (icon) icon.textContent = '🌞';
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (icon) icon.textContent = '🌙';
    }
  }

  setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }
});
