///////////////// GESTION DES TABS

/// JE RÉCUPÈRE TOUS LES ÉLÉMENTS QUI ONT LA CLASSE .TAB

let listTab = document.getElementsByClassName("tab");

// je capte l'événement click sur toutes mes tabs
for (let i = 0; i < listTab.length; i++) {
    const tab = listTab[i];
    tab.addEventListener("click", function() {

        // j'enlève la classe active sur les autres menus
        for (let i = 0; i < listTab.length; i++) {
            const tab = listTab[i];
            tab.classList.remove("active");
        }

        // j'ajoute la classe active sur le menu sur lequel j'ai cliqué 
        this.classList.add("active");

        // je récupère toutes les classes du menu
        let classTab = this.classList;

        // je fais disparaitre tous mes contenus
        let listContent = document.getElementsByClassName("content");
        for (let i = 0; i < listContent.length; i++) {
            const content = listContent[i];
            content.classList.remove("visible");
        }

        // afficher le contenu du menu
        if(classTab.contains("content1")) {
            document.querySelector("#content .content1").classList.add("visible");
        } else if(classTab.contains("content2")) {
            document.querySelector("#content .content2").classList.add("visible");
        } else {
            document.querySelector("#content .content3").classList.add("visible");
        }

    });
    
}