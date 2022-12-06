// Logique générale dans la page

$(document).ready(function () {
    let active = false;
    if (active === false) {
        $('#PartieJeu').hide();
    } else {
        $('#PartieJeu').attach();
    }
})

let joueurX = null;
let joueur0 = null;

$("#jouerButton").on('click', function () {
    joueurX = $('#nomX').val();
    joueurO = $('#nomO').val();
    $("#PartieJeu").show();
    $("#AjoutUser").hide();
    $("#JouerDiv").hide();
    main();
})

/* 
Fonction qui recherche une combinaison gagnante faite par un joueur 
et affiche les cases en vert si une combinaison est trouvée
*/
function Winner(pions, type, tour) {
    if (
        pions[0].innerHTML == type[tour] &&
        pions[1].innerHTML == type[tour] &&
        pions[2].innerHTML == type[tour]
    ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[1].style.backgroundColor = "#9ACD32";
        pions[2].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[3].innerHTML == type[tour] &&
        pions[4].innerHTML == type[tour] &&
        pions[5].innerHTML == type[tour]
    ) {
        pions[3].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[6].innerHTML == type[tour] &&
        pions[7].innerHTML == type[tour] &&
        pions[8].innerHTML == type[tour]
    ) {
        pions[6].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[0].innerHTML == type[tour] &&
        pions[3].innerHTML == type[tour] &&
        pions[6].innerHTML == type[tour]
    ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[3].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[1].innerHTML == type[tour] &&
        pions[4].innerHTML == type[tour] &&
        pions[7].innerHTML == type[tour]
    ) {
        pions[1].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[2].innerHTML == type[tour] &&
        pions[5].innerHTML == type[tour] &&
        pions[8].innerHTML == type[tour]
    ) {
        pions[2].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[0].innerHTML == type[tour] &&
        pions[4].innerHTML == type[tour] &&
        pions[8].innerHTML == type[tour]
    ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[2].innerHTML == type[tour] &&
        pions[4].innerHTML == type[tour] &&
        pions[6].innerHTML == type[tour]
    ) {
        pions[2].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }
}

// Fonction qui détecte si il y a match nul
function Nul(pions) {
    for (let i = 0, len = pions.length; i < len; i++) {
        if (pions[i].innerHTML.length == 0) return false;
    }
    return true;
}

// Fonction main qui met en place la logique du jeu du morpion
function main() {
    const Cases = document.querySelectorAll("#Jeu button");
    const joueurs = [joueurX, joueurO];
    const type = ["X", "O"];
    let tour = 0;
    let peutJouer = true;
    let statut = $("#StatutJeu");
    statut.html(
        "Le jeu peut commencer ! <br /> " +
        joueurs[tour] +
        " c'est votre tour."
    );
    if (peutJouer) {
        for (let i = 0, len = Cases.length; i < len; i++) {
            Cases[i].addEventListener("click", function () {
                if ($(this).length === 0) {
                    if (peutJouer) {
                        statut.html(
                            "Case occupée ! <br /> " +
                            joueurs[tour] +
                            " c'est toujours à vous !"
                        );
                    }
                } else {
                    if (peutJouer) {
                        $(this).html(type[tour])
                    }
                    let jeuEstFini = Winner(Cases, type, tour);

                    if (jeuEstFini) {
                        peutJouer = false;
                        statut.html(
                            joueurs[tour] +
                            ' a gagné ! <br /> <a href="index.html">Rejouer</a>'
                        );

                        return;
                    }
                    if (Nul(Cases)) {
                        peutJouer = false;
                        statut.html(
                            'Match Nul ! <br/> <a href="index.html" unset>Rejouer</a>'
                        );

                        return;
                    }
                    if (peutJouer) {
                        tour++;
                        tour = tour % 2;
                        statut.html(
                            joueurs[tour] + " c'est à vous !"
                        );
                    }
                }
            });
        }
    }
}
