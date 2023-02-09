

let users = []; /* Cette ligne déclare un tableau vide appelé "users" */

fetch("https://randomuser.me/api/?results=20") /* Cette ligne envoie une demande HTTP GET à l'URL spécifiée pour obtenir des données JSON. */
  .then((response) => response.json()) /* Cette ligne prend la réponse de la demande HTTP et la convertit en objet JavaScript en appelant la méthode json(). */
  .then((data) => { /* Cette ligne définit une fonction de rappel pour traiter les données obtenues à partir de la requête HTTP. */
    users = data.results; /* Cette ligne affecte la propriété "results" de l'objet "data" à la variable "users". */
    displayUsers(); /* Cette ligne appelle la fonction displayUsers(). */
  });

function displayUsers() { /* Cette ligne déclare une fonction appelée "displayUsers" */
  for (let i = 0; i < users.length; i++) { /* Cette boucle for itère sur chaque élément dans le tableau "users". */
    let user = users[i]; /* Cette ligne déclare une variable "user" qui est égale à l'élément actuel de la boucle dans le tableau "users". */
    let card = document.createElement("div"); /* Cette ligne crée un nouvel élément div appelé "card". */
    card.classList.add("card"); /* Cette ligne ajoute la classe "card" à l'élément "card". */

    let gender = user.gender === "male" ? "Homme" : "Femme"; /* Cette ligne déclare une variable "gender" qui est égale à "Homme" si la propriété "gender" de l'objet "user" est "male", sinon elle est égale à "Femme". */
    let name = user.name.title + " " + user.name.first + " " + user.name.last; /* Cette ligne déclare une variable "name" qui est égale à la concaténation de la propriété "title", "first", et "last" de l'objet "user.name". */
    let email = user.email; /* Cette ligne déclare une variable "email" qui est égale à la propriété "email" de l'objet "user". */
    let image = user.picture.medium; /* Cette ligne déclare une variable "image" qui est égale à la propriété "medium" de l'objet "user.picture". */

    card.innerHTML = `
      <p>Genre : ${gender}</p> 
      <p>Nom : ${name}</p>
      <p>Email : ${email}</p>
      <img src="${image}" />
    `; /* Cette ligne définit le contenu HTML de l'élément "card" en utilisant une expression template JavaScript 
        qui inclut des variables telles que "gender", "name", "email" et "image". */

    document.querySelector(".container").appendChild(card); /* Cette ligne sélectionne le premier élément avec la classe "container" 
                                                            et ajoute l'élément "card" en tant que dernier enfant de cet élément. */
  }
}
