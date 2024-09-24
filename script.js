//09_sapin

function afficherEtoiles(n) {
  const etoiles = "*".repeat(n);
  return console.log(etoiles);
}
afficherEtoiles(2)
afficherEtoiles(5)

function afficherRectangle(hauteur, largeur) {
  const etoileRectangle = "*".repeat(largeur);
  for (let i = 0; i < hauteur; i++) {
    console.log(etoileRectangle);
  }
}

afficherRectangle(5, 5);