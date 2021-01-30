//alert("Hey boy");

document.body.onload = addElement;


function addElement () {
  // crée un nouvel élément div
  var referenceNode = document.querySelector('#SIvCob');
  var newH1 = document.createElement("h1");
  newH1.setAttribute("id", "age");
  // et lui donne un peu de contenu
  var newContent = document.createTextNode('Tu as 22 ans');
  // ajoute le nœud texte au nouveau div créé
  newH1.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentH1 = document.getElementById('h1');
  referenceNode.after(newH1);
}
