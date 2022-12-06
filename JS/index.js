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
        pions[0].style.backgroundColor = "#90EE90";
        setTimeout(function () {
            pions[1].style.backgroundColor = "#90EE90";
        }, 500)
        setTimeout(function () {
            pions[2].style.backgroundColor = "#90EE90";
        }, 1000)

        return true;
    }

    if (
        pions[3].innerHTML == type[tour] &&
        pions[4].innerHTML == type[tour] &&
        pions[5].innerHTML == type[tour]
    ) {
        pions[3].style.backgroundColor = "#90EE90";
        setTimeout(function () {
            pions[4].style.backgroundColor = "#90EE90";
        }, 500)
        setTimeout(function () {
            pions[5].style.backgroundColor = "#90EE90";
        }, 1000)
        return true;
    }

    if (
        pions[6].innerHTML == type[tour] &&
        pions[7].innerHTML == type[tour] &&
        pions[8].innerHTML == type[tour]
    ) {
        pions[6].style.backgroundColor = "#90EE90";
        setTimeout(function () {
            pions[7].style.backgroundColor = "#90EE90";
        }, 500)
        setTimeout(function () {
            pions[8].style.backgroundColor = "#90EE90";
        }, 1000)
        return true;
    }

    if (
        pions[0].innerHTML == type[tour] &&
        pions[3].innerHTML == type[tour] &&
        pions[6].innerHTML == type[tour]
    ) {
        pions[0].style.backgroundColor = "#90EE90";
        setTimeout(function () {
            pions[3].style.backgroundColor = "#90EE90";
        }, 500)
        setTimeout(function () {
            pions[6].style.backgroundColor = "#90EE90";
        }, 1000)
        return true;
    }

    if (
        pions[1].innerHTML == type[tour] &&
        pions[4].innerHTML == type[tour] &&
        pions[7].innerHTML == type[tour]
    ) {
        pions[1].style.backgroundColor = "#90EE90";
        setTimeout(function () {
            pions[4].style.backgroundColor = "#90EE90";
        }, 500)
        setTimeout(function () {
            pions[7].style.backgroundColor = "#90EE90";
        }, 1000)
        return true;
    }

    if (
        pions[2].innerHTML == type[tour] &&
        pions[5].innerHTML == type[tour] &&
        pions[8].innerHTML == type[tour]
    ) {
        pions[2].style.backgroundColor = "#90EE90";
        setTimeout(function () {
            pions[5].style.backgroundColor = "#90EE90";
        }, 500)
        setTimeout(function () {
            pions[8].style.backgroundColor = "#90EE90";
        }, 1000)
        return true;
    }

    if (
        pions[0].innerHTML == type[tour] &&
        pions[4].innerHTML == type[tour] &&
        pions[8].innerHTML == type[tour]
    ) {
        pions[0].style.backgroundColor = "#90EE90";
        setTimeout(function () {
            pions[4].style.backgroundColor = "#90EE90";
        }, 500)
        setTimeout(function () {
            pions[8].style.backgroundColor = "#90EE90";
        }, 1000)
        return true;
    }

    if (
        pions[2].innerHTML == type[tour] &&
        pions[4].innerHTML == type[tour] &&
        pions[6].innerHTML == type[tour]
    ) {
        pions[2].style.backgroundColor = "#90EE90";
        setTimeout(function () {
            pions[4].style.backgroundColor = "#90EE90";
        }, 500)
        setTimeout(function () {
            pions[6].style.backgroundColor = "#90EE90";
        }, 1000)
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
    // On crée un tableau de cases où chaque cases est un button dans le html
    let Cases = document.querySelectorAll("#Jeu button");
    // Longueur du tableau de cases créé au-dessus
    let len = Cases.length;
    // liste des joueurs
    let joueurs = [joueurX, joueurO];
    // liste des symboles à placer dans le jeu
    let type = ["❌", "⭕"];
    // index qui définit quel joueu doit jouer
    let tour = 0;
    // Booléen qui indique si un joueur peut encore placer un symbole ou non
    let canPlay = true;

    $("#StatutJeu").html(
        "Le jeu peut commencer ! <br /> " +
        joueurs[tour] +
        " c'est votre tour."
    );
    if (canPlay) {
        for (let i = 0; i < len; i++) {
            Cases[i].addEventListener("click", function () {
                if ($(this).length === 0) {
                    if (canPlay) {
                        $("#StatutJeu").html(
                            "Case occupée ! <br /> " +
                            joueurs[tour] +
                            " c'est toujours à vous !"
                        );
                    }
                } else {
                    if (canPlay) {
                        $(this).html(type[tour])
                    }
                    let jeuEstFini = Winner(Cases, type, tour);

                    if (jeuEstFini) {
                        canPlay = false;
                        $("#StatutJeu").html(
                            joueurs[tour] +
                            ' a gagné ! <br /> <a href="index.html">Rejouer</a>'
                        );

                        return;
                    }
                    if (Nul(Cases)) {
                        canPlay = false;
                        $("#StatutJeu").html(
                            'Match Nul ! <br/> <a href="index.html" unset>Rejouer</a>'
                        );

                        return;
                    }
                    if (canPlay) {
                        tour++;
                        tour = tour % 2;
                        $("#StatutJeu").html(
                            joueurs[tour] + " c'est à vous !"
                        );
                    }
                }
            });
        }
    }
}
