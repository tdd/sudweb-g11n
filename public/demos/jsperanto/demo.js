(function() {
  var keys = ['title', 'h1', '#lblLangs', '#lblCount', '#great', '#extraordinary', '#awesome'];
  var locWas;

  $(function() {
    applyLocale();
    bindLocaleSelector();
  });

  function applyLocale(loc) {
    loc = 'string' == typeof loc ? loc : $('html').attr('lang');
    var count = +$('#counts').val();

    function doApply() {
      locWas = loc;
      for (var index = 0, len = keys.length; index < len; ++index) {
        sel = keys[index];
        $(sel).text($.t(sel, { count: count }));
      }
    }

    if (locWas !== loc)
      $.jsperanto.init(doApply, { lang: loc });
    else
      doApply();
  }

  function bindLocaleSelector() {
    $('#languages').on('change', function() {
      resetLocale(this.value);
    });
    $('#counts').on('change', applyLocale);
  }

  function resetLocale(loc) {
    $('html').attr('lang', loc);
    applyLocale(loc);
  }
})();
