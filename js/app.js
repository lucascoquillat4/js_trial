//guerrier1
let guerrier1 = {
    nom: "Alexander ", // Nom
    vie: 100, // Points de vie
    attack: 25, // Valeur d'attaque
    precision: 0.8, // Valeur de precison
  };
  
//guerrier2
  let guerrier2 = {
    nom: "Ragnar", // Nom
    vie: 150, // Points de vie
    attack: 15, // Valeur d'attaque
    precision: 0.6 // Valeur de précision
  };
  
  //attaque
  function attaquer(guerrier1, guerrier2) {
    let attaquer = 0; 
  
    //achats suite
    while (personnage.argent >= boutique.prix && boutique.quantite > 0) {
      personnage.argent -= boutique.prix; 
      boutique.quantite--; //dim nbre de produits en boutique
      produitsAchetes++; // augm nbre de produits achetés
    }
  
    //affichage console
    console.log(`${personnage.nom} a acheté ${produitsAchetes} ${boutique.produit}(s).`); //console log nbre de produits achetés
    console.log(`Il reste ${personnage.argent}€ à ${personnage.nom}.`); //console log argent restant
    console.log(`Le produit est ${boutique.quantite === 0 ? "en rupture de stock" : "encore disponible"}.` //console log rupture
    );
  }
  
  // Appel de la fonction pour effectuer les achats
  acheterProduit(personnage, boutique);
  