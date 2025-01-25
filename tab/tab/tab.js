    // JavaScript
    const tabs = document.querySelectorAll("li"); // Sélectionner tous les <li>
    const contents = document.querySelectorAll(".content div"); // Sélectionner toutes les <div> dans .content

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // 1. Retirer la classe "tab-active" de tous les <li>
        tabs.forEach((t) => t.classList.remove("tab-active"));

        // 2. Retirer la classe "active" de toutes les <div>
        contents.forEach((content) => content.classList.remove("active"));

        // 3. Ajouter la classe "tab-active" à l'élément <li> cliqué (this)
        this.classList.add("tab-active");

        // 4. Vérifier quelle classe "tab-nomDuContenu" est présente sur <li>
        if (this.classList.contains("tab-home")) {
          document.querySelector(".home").classList.add("active");
        } else if (this.classList.contains("tab-about")) {
          document.querySelector(".about").classList.add("active");
        } else if (this.classList.contains("tab-contact")) {
          document.querySelector(".contact").classList.add("active");
        }
      });
    });