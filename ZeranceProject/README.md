# ZelanceProject

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)]

Une petite description du projet

## Pour commencer

Ce projet m'aura tenu en alêne durant ces 5 derniers jours. Préparant actuellement une évaluation sur PHP, je n'ai pu y accorder qu'une à 2h par jour, c'est la raison pour laquelle je vous le rends si tardivement. Aucune excuse cependant, soyez certain que j'ai véritablement fait de mon mieux.

Vous trouverez dans ce ReadMe chacune des étapes de développement ainsi que les points bloquants auxquels j'ai dû faire face et les éventuelles solutions trouvées. C'est en toute transparence que je vous confirme la consommation de la quasi-totalité du temps imparti, soit 7 h, pour ce projet auquel j'ai énormément réfléchi ( jusque dans mes rêves) et sur lequel j'ai adoré travailler, apprenant par la même occasion 2 ou 3 choses.

Un grand merci à vous pour ce challenge, quelle qu'en soit l'issue !

## Historique détaillés


# Section 1 ( Header ) :

Commençons par le commancement. Le menu est la première chose que j'ai implémenté une fois mon index.html correctement structuré en 5 sections distinctes. J'ai d'abord eu l'idée d'utiliser Bootstrap avec une Navbar préconçu mais me suis finalement ravisé au profit d'un menu plus traditionnel. J'ai décidé de faire disparaitre celui-ci en dessous d'une certaine résolution pour ne pas gêner l'aspect général de la page avec une superposition inutile de plusieurs elements. Le popup quant à lui m'aura donné quelques sueurs pour finalement me voir capituler sur l'implémentation de l'API ( je ne suis tout simplement pas parvenu à la faire fonctionner, je n'en avais jamais vu de ce type avant ). Les animations de celui-ci sont gérées par JS en partie dont les bases viennent d'un partage en opensource ( n'ayant jamais développé de formulaire de contact en popup ). Vient ensuite l'intégration du logo et de son texte, sans difficulté particulière. Au total, 90% du contenu aura été créé en moins d'une heure, quand les 10% restants ( l'API ) m'aura probablement couté une heure supplémentaire.

# Section 2 ( Bannière ) :

La bannière n'a pas été particulièrement compliqué à intégrer. J'ai fait appel aux medias queries pour la partie responsive et me suis heurté à un problème particulièrement frustrant concernant le mot "Shopify". En effet, la manière dont est souligné celui-ci m'a donné bien du fil à retordre... J'ai eu beau faire appel à ma créativité ( tânto en essayant de modifier la propriété de <\u> dans le CSS, tânto en "fixant" directement l'element graphique récupéré sur la maquette ) mais rien n'y fit. Je me suis résigné à utiliser <\u> de manière basique en lui appliquant la couleur demandée préalablement récupérée sur la maquette. Un peu moins de 45 min auront été nécessaires avant que je ne capitule sur ce dernier point.


# Section 3 ( Portfolio ) :

Pour le portfolio, j'ai utilisé Bootstrap afin que la partie responsive soit gérée le plus simplement possible. La maquette ne comportant pas d'image de haute résolution, j'ai préféré récupérer celles sur votre site. Chacune redirige bien évidemment vers le site du client correspondant. Une heure pour en arriver au résultat définitif ( en comptant les quelques retouches de fin de projet ).


# Section 4 ( Slider ) :

Le slider. Il n'a pas été simple de "m'approcher" du résultat souhaité. Si j'ai déjà intégré plusieurs carrousels par le passé, jamais je n'ai eu à travailler sur des caractéristiques telles que celles-ci. Si je suis parvenu à générer un carrousel affichant le début de l'image suivante, c'est presque sans le faire exprès. Après moulte recherche sur la lib adéquate, je fini par tomber sur Slick. Je teste alors plusieurs des carrousels disponibles sur leur platform et finis par tomber sur celui qui me semble correspondre le mieux. Mais voila, pour une raison que j'ignore, et ce malgré mes nombreuses tentatives, je perds l'affichage de la fleche permettant de faire défiler les images. De même, la partie responsive n'est pas gérée comme elle devrait l'être. En revanche, il n'a pas été aussi difficile d'implementer le texte demandé et d'appliquer le hover sur les mots "Voir plus", à l'exeption de l'underline dont les soucis d'intégration sont déjà mentionnés en section 2 du ReadMe. Cela m'aura pris 2 heures pour en arriver à ce résultat.

# Section 5 ( Loop ) :

La phrase infinie m'aura pris à elle seule plus d'une heure pour être animée sans avoir recours à JS. Je ne suis pas parvenu à la faire défiler de manière "fluide" comme espéré mais je pense être sur la bonne voie. Comme vous le constaterez, les mots qui attendent d'apparaitre à la suite de la phrase sont déjà présents en dessous de celle-ci au lieu d'être hors champ. Cette section fera partie des éléments sur lesquels je vais continuer à travailler, même après vous avoir rendu le projet.



### Pré-requis

- Bootstrap 4.3 ou plus
- Slick
- Jquery
- GenderAPI
- Visual Code Studio ( ou tout autre éditeur de code )
- Google Chrome ( préféré )

### Installation

1. Téléchargez le dossier puis dézippez-le.

2. Ouvrez le dossier avec Visual Code Studio.

3. Assurez-vous que les differentes feuilles sont liées à l'index.html.

4. Télécharger l'extension "Live Serveur".

5. Ouvrez l'index.html avec l'extension Live Server ( click droit + "Open With Live Server" ).

6. Enjoy !

### Contenu


* dossier ZeranceProject :
- index.html ( structure de la page web )
- dossier CSS
- dossier JS
- dossier IMG
---------------------
* CSS :
- normalize.css ( feuille de style déstinée à unifier la valeur de nombreux attributs css pour les rendre identiques sur les différents navigateurs )
- style.css ( feuille de style contenant la grande majorité du style destiné à l'index.html )
- slick/slick-theme.css ( feuilles de style destinées à la mise en forme et à une partie du fonctionnement de la section 4 )
---------------------
* JS :
- gender.js ( feuille JS déstiné au fonctionnement de l'API eponyme )
- script.js ( feuille JS destiné aux fonctions et autres boucles nécessaire au bon fonctionnement de certains éléments du site )
- slick.min.js ( feuille JS destiné au fonctionnement du carousel de la section 4 )
---------------------
* IMG :
- logo ( logo du site internet )
- images ( images contenu dans le carousel et dans la section 3 )
- yellow-uderline ( element de style destiné aux mots "Shopify" et "Voir plus" )



## Fabriqué avec

* [Visual Studio Code](https://code.visualstudio.com/) - Editeur de code
* [Git](https://github.com/) - Pour gérer le versioning et le partage de ressource 
* [Gender.js](https://gender-api.com/fr/) - API renvoyant le genre d'une personne d'après son nom
* [Bootstrap](https://getbootstrap.com/) - Librairie CSS
* [Slick.css / Slick-theme.css / Slick.min.js](https://kenwheeler.github.io/slick/) - Librairie JS/CSS


## Versions

**Dernière version stable :** 1.2

## Auteurs


* **Timothy NAIR** _alias_ [@tevmoney](https://github.com/tevmoney)


## License

Ce projet n'est pas sous licence.


