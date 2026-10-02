(function () {
  var stored = null;
  try {
    stored = localStorage.getItem('portfolio-lang');
  } catch (e) {}

  var lang = (stored === 'en' || stored === 'zh')
    ? stored
    : ((navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en');

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.setAttribute('data-lang', lang);

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
})();
