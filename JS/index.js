
// Logique générale dans la page

$(document).ready(function() {
  $("#PartieJeu").hide();
  
})

$("#submit").on('click', function(){
  var joueur = $("#nom").val();
  $("body").data(joueur);
  $("#AjoutUser").hide();
  $("#PartieJeu").show();
  alert($("body").data());
})

//#region Morpion Jeu logique
// Fonction qui vérifie si la case sélectionnée par le joueur est libre
function estValide(button) {
  return button.innerHTML.length == 0;
}

// Fonction qui ajoute le symbole correspondant au joueur à la case sélectionnée
function setSymbol(btn, symbole, peutJouer) {
  if (peutJouer == 1) {
    btn.innerHTML = symbole;
  }
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
const AfficheurStatut = function (element) {
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
  var peutJouer = true;
  const statut = new AfficheurStatut(document.querySelector("#StatutJeu"));
  statut.sendMessage(
    "Le jeu peut commencer ! <br /> Joueur " +
      joueurs[tour] +
      " c'est votre tour."
  );
  if (peutJouer == true) {
    for (let i = 0, len = Cases.length; i < len; i++) {
      Cases[i].addEventListener("click", function () {
        if (!estValide(this)) {
          if (peutJouer == true) {
            statut.sendMessage(
              "Case occupée ! <br />Joueur " +
                joueurs[tour] +
                " c'est toujours à vous !"
            );
          }
        } else {
          setSymbol(this, joueurs[tour], peutJouer);
          let jeuEstFini = rechercherVainqueur(Cases, joueurs, tour);

          if (jeuEstFini) {
            peutJouer = false;
            statut.sendMessage(
              "Le joueur " +
                joueurs[tour] +
                ' a gagné ! <br /> <a href="index.html">Rejouer</a>'
            );

            return;
          }
          if (matchNul(Cases)) {
            peutJouer = false;
            statut.sendMessage(
              'Match Nul ! <br/> <a href="index.html" unset>Rejouer</a>'
            );

            return;
          }
          if (peutJouer == true) {
            tour++;
            tour = tour % 2;
            statut.sendMessage(
              "Joueur " + joueurs[tour] + " c'est à vous !"
            );
          }
        }
      });
    }
  }
}


//#endregion

//#region Gestion utilisateurs



//#endregion

