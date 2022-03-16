# WebService_API

L’objectif est l’amélioration du WebService permettant la gestion d’une liste de film.

Vous pouvez actuellement lister des films … mais que ferez-vous quand vous en aurez 100 ? 200 à lister ?

De plus une liste de 200 éléments n’a pas d’intérêt en l’état, seul une fraction de ces résultats intéresse l’utilisateur final (développeur ou simple usager du web)

# Ce qu’il manque au WebService

* Il doit permettre de rechercher par titre ou par description (petit indice, sur une route de collection on peu passer des paramètres , les query)
* Le résultat doit être paginé (page 1 sur 22, 10 éléments par page par exemple)
* Un film doit être attaché à une ou plusieurs catégories
* On doit pouvoir lister les catégories d’un film et inversement (la notions des sous-ressources et leurs URI)
* Il faut penser au développeur qui va utiliser le webservice … Personne ne lit la doc (RTFM en est né), il devra pouvoir retourner du JSON HAL
