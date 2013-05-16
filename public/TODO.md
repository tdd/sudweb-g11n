To-Do Élaboratoire G11n JS @ Sud Web

SLIDES

* Intégration avec les frameworks et loaders
  * Côté client :
    * [RequireJS](http://requirejs.org/docs/api.html#i18n)
    * Backbone ? -> rien de base, voir selon techno de vue
    * Chaplin ?
    * Marionnette ?
    * Angular -> http://docs.angularjs.org/guide/i18n
    * Handlebars -> rien de spécial, on peut coller un helper sur ce qu'on veut…
    * Jade -> https://github.com/thomasklemm/jade-i18n
    * Ember ?
      -> http://mcdowall.info/posts/getting-started-with-internationalization-i18n-in-ember-js/
      -> https://github.com/zendesk/ember-i18n‎
      -> https://github.com/jamesarosen/ember-i18n‎
      -> https://github.com/andrzejsliwa/ember-i18n‎
    * Batman ?
      -> https://github.com/Shopify/batman/blob/master/src/extras/batman.i18n.coffee
  * Côté serveur (Node) :
    * [i18n-node](https://github.com/mashpie/i18n-node) (style Rails/i18n.t, autonome, compatible Webtranslateit) et son upgrade par John Resig, [i18n-node-2](https://github.com/jeresig/i18n-node-2) (plus abouti)
    * [i18next-node](http://i18next.com/node/) propose une grosse pelletée de fonctionnalités (interpolation complexe mais 2 éléments de contexte max) + sa propre UI de gestion, tout l'interfaçage Express, etc.
    * [node-jus-i18n](https://github.com/naholyr/node-jus-i18n), un peu par copinage, déjà pas mal de choses mais pas encore là pour les pluralisations riches, et toujours juste 2 niveaux de contexte.

DEMO REPOS

* DONE: Démo "silex"
* MessageFormat, Numeral, et Moment.js
* Polyglot.js ou i18next ?
* Conversion des dépôts pour un chargement RequireJS avec gestion i18n
