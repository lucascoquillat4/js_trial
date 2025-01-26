class Combattant {
    constructor(nom, pointsDeVie, attaque, precision) {
      this.nom = nom;
      this.pointsDeVie = pointsDeVie;
      this.attaque = attaque;
      this.precision = precision;
    }
  
    // Fonction pour attaquer
    attaquer(adversaire) {
      console.log(`${this.nom} tente d'attaquer ${adversaire.nom}...`);
      if (this.testerPrecision()) {
        console.log(`L'attaque de ${this.nom} touche ${adversaire.nom} pour ${this.attaque} points de dégâts !`);
        adversaire.pointsDeVie -= this.attaque;
        if (adversaire.pointsDeVie < 0) adversaire.pointsDeVie = 0;
      } else {
        console.log(`${this.nom} manque son attaque !`);
      }
    }
  
    // Fonction pour tester la précision
    testerPrecision() {
      const chance = Math.random();
      return chance < this.precision;
    }
  
    // Afficher les stats du combattant
    afficherStats() {
      console.log(`${this.nom} - PV : ${this.pointsDeVie}, Attaque : ${this.attaque}, Précision : ${this.precision}`);
    }
  }
  
  // Initialisation des deux combattants
  const combattant1 = new Combattant("Alexandre", 120, 15, 0.7);
  const combattant2 = new Combattant("Oswell", 100, 20, 0.6);
  
  // Affichage des stats initiales
  console.log("Début du combat ! Voici les stats initiales :");
  combattant1.afficherStats();
  combattant2.afficherStats();
  
  // Boucle de combat
  while (combattant1.pointsDeVie > 0 && combattant2.pointsDeVie > 0) {
    combattant1.attaquer(combattant2);
    if (combattant2.pointsDeVie > 0) {
      combattant2.attaquer(combattant1);
    }
  
    // Affichage des points de vie après chaque tour
    console.log("--- Statut après ce tour ---");
    combattant1.afficherStats();
    combattant2.afficherStats();
  }
  
  // Déterminer le vainqueur
  if (combattant1.pointsDeVie > 0) {
    console.log(`${combattant1.nom} remporte le combat !`);
  } else {
    console.log(`${combattant2.nom} remporte le combat !`);
  }
  

  