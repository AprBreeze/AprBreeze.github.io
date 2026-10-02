(function () {
  function apply(lang, persist) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.setAttribute('data-lang', lang);

    if (persist) {
      try {
        localStorage.setItem('portfolio-lang', lang);
      } catch (e) {}
    }

    var title = document.querySelector('title');
    if (title) {
      var nextTitle = lang === 'zh' ? title.getAttribute('data-title-zh') : title.getAttribute('data-title-en');
      if (nextTitle) title.textContent = nextTitle;
    }

    var desc = document.querySelector('meta[name="description"]');
    if (desc) {
      var nextDesc = lang === 'zh' ? desc.getAttribute('data-desc-zh') : desc.getAttribute('data-desc-en');
      if (nextDesc) desc.setAttribute('content', nextDesc);
    }

    document.querySelectorAll('[data-aria-en]').forEach(function (el) {
      var value = lang === 'zh' ? el.getAttribute('data-aria-zh') : el.getAttribute('data-aria-en');
      if (value) el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-alt-en]').forEach(function (el) {
      var value = lang === 'zh' ? el.getAttribute('data-alt-zh') : el.getAttribute('data-alt-en');
      if (value) el.setAttribute('alt', value);
    });

    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      var on = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-set-lang');
      apply(lang, true);
      document.dispatchEvent(new CustomEvent('portfolio-lang-change', { detail: { lang: lang } }));
    });
  });

  apply(document.documentElement.getAttribute('data-lang') || 'en', false);
})();
