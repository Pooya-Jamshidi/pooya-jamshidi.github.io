(() => {
  const tabs = [...document.querySelectorAll('.tab')];
  const panels = [...document.querySelectorAll('.panel')];
  const valid = new Set(tabs.map(tab => tab.hash.slice(1)));
  const themeToggle = document.getElementById('theme-toggle');
  const search = document.getElementById('publication-search');
  const publications = [...document.querySelectorAll('#full-publication-list .publication')];
  const count = document.getElementById('publication-count');
  const empty = document.getElementById('publication-empty');

  function activateTab() {
    const requested = window.location.hash.slice(1).toLowerCase();
    const current = valid.has(requested) ? requested : 'about';
    tabs.forEach(tab => {
      const active = tab.hash === `#${current}`;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach(panel => {
      panel.hidden = panel.id !== `panel-${current}`;
    });
    document.title = `${current.charAt(0).toUpperCase() + current.slice(1)} — Pooya Jamshidi`;
  }

  function navigateTo(id, focusTab = false) {
    if (window.location.hash !== `#${id}`) {
      window.location.hash = id;
    } else {
      activateTab();
    }
    if (focusTab) document.getElementById(`tab-${id}`).focus();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  document.querySelector('.tabs').addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const index = tabs.indexOf(document.activeElement);
    let next;
    if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else next = (index - 1 + tabs.length) % tabs.length;
    navigateTo(tabs[next].hash.slice(1), true);
  });

  window.addEventListener('hashchange', activateTab);
  activateTab();

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111a17' : '#f7f8f6';
  }

  let initialTheme;
  try { initialTheme = localStorage.getItem('pj-theme'); } catch (_) {}
  applyTheme(initialTheme === 'light' || initialTheme === 'dark' ? initialTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('pj-theme', theme); } catch (_) {}
  });

  search.addEventListener('input', () => {
    const term = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    publications.forEach(publication => {
      const matches = publication.dataset.search.includes(term);
      publication.hidden = !matches;
      if (matches) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'work' : 'works'}`;
    empty.hidden = visible !== 0;
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
