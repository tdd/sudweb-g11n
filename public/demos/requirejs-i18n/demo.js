requirejs.config({
  config: {
    i18n: {
      locale: (window.location.search.match(/\blang=([\w-]+)\b/) || [])[1] || navigator.language
    }
  }
})

require(['i18n!nls/translations'], function(translations) {
  applyLocale(translations);
});

function applyLocale(repo) {
  for (var sel in repo)
    document.querySelector(sel).innerText = repo[sel];
}
