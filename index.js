// Fonction qui vérifie si la case sélectionnée par le joueur est libre
function estValide(button) {
  return button.innerHTML.length == 0;
}

// Fonction qui ajoute le symbole correspondant au joueur à la case sélectionnée
function setSymbol(btn, symbole) {
  btn.innerHTML = symbole;
}

/* 
Fonction qui recherche une combinaison gagnant faite par un joueur 
et affiche les cases en vert si une combinaison est trouvée
*/
function rechercherVainqueur(pions, joueurs, tour) {
  if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[1].innerHTML == joueurs[tour] &&
    pions[2].innerHTML == joueurs[tour]
  ) {
    pions[0].style.backgroundColor = "#9ACD32";
    pions[1].style.backgroundColor = "#9ACD32";
    pions[2].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[3].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[5].innerHTML == joueurs[tour]
  ) {
    pions[3].style.backgroundColor = "#9ACD32";
    pions[4].style.backgroundColor = "#9ACD32";
    pions[5].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[6].innerHTML == joueurs[tour] &&
    pions[7].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]
  ) {
    pions[6].style.backgroundColor = "#9ACD32";
    pions[7].style.backgroundColor = "#9ACD32";
    pions[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[3].innerHTML == joueurs[tour] &&
    pions[6].innerHTML == joueurs[tour]
  ) {
    pions[0].style.backgroundColor = "#9ACD32";
    pions[3].style.backgroundColor = "#9ACD32";
    pions[6].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[1].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[7].innerHTML == joueurs[tour]
  ) {
    pions[1].style.backgroundColor = "#9ACD32";
    pions[4].style.backgroundColor = "#9ACD32";
    pions[7].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[2].innerHTML == joueurs[tour] &&
    pions[5].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]
  ) {
    pions[2].style.backgroundColor = "#9ACD32";
    pions[5].style.backgroundColor = "#9ACD32";
    pions[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]
  ) {
    pions[0].style.backgroundColor = "#9ACD32";
    pions[4].style.backgroundColor = "#9ACD32";
    pions[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pions[2].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[6].innerHTML == joueurs[tour]
  ) {
    pions[2].style.backgroundColor = "#9ACD32";
    pions[4].style.backgroundColor = "#9ACD32";
    pions[6].style.backgroundColor = "#9ACD32";
    return true;
  }
}

// Fonction qui détecte si il y a match nul
function matchNul(pions) {
  for (let i = 0, len = pions.length; i < len; i++) {
    if (pions[i].innerHTML.length == 0) return false;
  }

  return true;
}

// Fonction qui gére l'affichage du statut du jeu en cours
const Afficheur = function (element) {
  const affichage = element;

  function setText(message) {
    affichage.innerHTML = message;
  }

  return { sendMessage: setText };
};

// Fonction main qui met en place la logique du jeu du morpion
function main() {
  const Cases = document.querySelectorAll("#Jeu button");
  const joueurs = ["X", "O"];
  let tour = 0;
  const jeuEstFini = false;
  const afficheur = new Afficheur(document.querySelector("#StatutJeu"));
  afficheur.sendMessage(
    "Le jeu peut commencer ! <br /> Joueur " +
      joueurs[tour] +
      " c'est votre tour."
  );
  for (let i = 0, len = Cases.length; i < len; i++) {
    Cases[i].addEventListener("click", function () {
      if (jeuEstFini) return;

      if (!estValide(this)) {
        afficheur.sendMessage(
          "Case occupée ! <br />Joueur " +
            joueurs[tour] +
            " c'est toujours à vous !"
        );
      } else {
        setSymbol(this, joueurs[tour]);
        let jeuEstFini = rechercherVainqueur(Cases, joueurs, tour);

        if (jeuEstFini) {
          afficheur.sendMessage(
            "Le joueur " +
              joueurs[tour] +
              ' a gagné ! <br /> <a href="index.html">Rejouer</a>'
          );
          return;
        }
        if (matchNul(Cases)) {
          afficheur.sendMessage(
            'Match Nul ! <br/> <a href="index.html" unset>Rejouer</a>'
          );
          return;
        }
        tour++;
        tour = tour % 2;
        afficheur.sendMessage("Joueur " + joueurs[tour] + " c'est à vous !");
      }
    });
  }
}

main();
