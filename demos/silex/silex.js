(function() {
  var TRANSLATIONS = {
    fr: {
      title: 'g11n basique avec nos p’tites mains • Élaboratoire Internationalisation JS de Christophe Porteneuve à SudWeb 2013',
      h1: 'g11n basique avec nos p’tites mains',
      label: 'Changez la langue :',
      '#great': 'C’est génial !',
      '#extraordinary': 'C’est extraordinaire !',
      '#awesome': 'C’est vraiment fabuleux !'
    },
    en: {
      title: 'Basic g11n with our bare hands • JS g11n workshop by Christophe Porteneuve at SudWeb 2013',
      h1: 'Basic g11n with our bare hands',
      label: 'Switch language:',
      '#great': 'This is great!',
      '#extraordinary': 'This is extraordinary!',
      '#awesome': 'This is awesome!'
    },
    'fr-CP': {
      title: 'g11n basique avec JS à poil • Élaboratoire Internationalisation JS de Christophe Porteneuve à SudWeb 2013',
      h1: 'g11n basique avec JS à poil',
      label: 'Change donc la langue, galopin :',
      '#great': 'Ça envoie du pâté !',
      '#extraordinary': 'Ça arrache le slip !',
      '#awesome': 'Ça roxxe des poneys !'
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    applyLocale();
    bindLocaleSelector();
  });

  function applyLocale(loc) {
    loc = 'string' == typeof loc ? loc : document.documentElement.getAttribute('lang');

    var repo = TRANSLATIONS[loc];

    for (var sel in repo)
      document.querySelector(sel).innerText = repo[sel];
  }

  function bindLocaleSelector() {
    document.getElementById('languages').addEventListener('change', function(e) {
      resetLocale(e.target.value);
    }, false);
  }

  function resetLocale(loc) {
    document.documentElement.setAttribute('lang', loc);
    applyLocale(loc);
  }
})();
