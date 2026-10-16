// TP SonarCloud : code volontairement perfectible pour l'analyse.
// Aucune donnee personnelle : exemples fictifs uniquement.

var notes = [12, 15, 8, 18, 10];
var texteInutile = 'Je ne suis jamais utilise';

function calculerMoyenne(tableau) {
  var somme = 0;
  for (var i = 0; i < tableau.length; i++) {
    somme = somme + tableau[i];
  }
  return somme / tableau.length;
}

function afficherResultat(moyenne) {
  if (moyenne == 10) {
    console.log('Juste la moyenne');
  } else {
    if (moyenne > 10) {
      console.log('Admis');
    } else {
      console.log('Non admis');
    }
  }
}

function addition(a, b) {
  return a + b;
}

function sommeDeuxNotes(a, b) {
  return a + b;
}

var moyenne = calculerMoyenne(notes);
console.log('Moyenne :', moyenne);
afficherResultat(moyenne);
console.log('Addition :', addition(5, 3));
console.log('Somme de deux notes :', sommeDeuxNotes(10, 12));
