// personnage
let personnage = {
    nom: "Lucas",
    argent: 100, //argent disponible
  };
  
//boutique
  let boutique = {
    produit: "Chocolatine",
    quantite: 10, //quantité initiale
    prix: 8, //prix unitaire
  };
  
  //achats
  function acheterProduit(personnage, boutique) {
    let produitsAchetes = 0; 
  
    //achats à effectuer
    while (personnage.argent >= boutique.prix && boutique.quantite > 0) {
      personnage.argent -= boutique.prix; 
      boutique.quantite--; //dim nbre de produits en boutique
      produitsAchetes++; // augm nbre de produits achetés
    }
  
    //affichage console
    console.log(`${personnage.nom} a acheté ${produitsAchetes} ${boutique.produit}(s).`);
    console.log(`Il reste ${personnage.argent}€ à ${personnage.nom}.`);
    console.log(
      `Le produit est ${boutique.quantite === 0 ? "en rupture de stock" : "encore disponible"}.`
    );
  }
  
  // Appel de la fonction pour effectuer les achats
  acheterProduit(personnage, boutique);
  