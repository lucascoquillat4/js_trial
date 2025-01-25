const form = document.getElementById("form");
    const pseudo = document.getElementById("pseudo");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const qcm = document.getElementsByName("qcm");
    const messages = document.getElementById("messages");

    const isValidQCM = () => {
      return Array.from(qcm).some((input) => input.checked);
    };

    const setError = (element, message) => {
      const parent = element.parentElement;
      const errorDisplay = parent.querySelector("small");
      errorDisplay.textContent = message;
      element.classList.add("invalid");
      element.classList.remove("valid");
    };

    const setSuccess = (element) => {
      const parent = element.parentElement;
      const errorDisplay = parent.querySelector("small");
      errorDisplay.textContent = "";
      element.classList.add("valid");
      element.classList.remove("invalid");
    };

    const validateForm = () => {
      let isValid = true;

      // Validation du pseudo
      if (pseudo.value.length < 6) {
        setError(pseudo, "Le pseudo doit comporter au moins 6 caractères.");
        isValid = false;
      } else {
        setSuccess(pseudo);
      }

      // Validation de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        setError(email, "Veuillez entrer une adresse email valide.");
        isValid = false;
      } else {
        setSuccess(email);
      }

      // Validation du mot de passe
      if (password.value.length < 8) {
        setError(password, "Le mot de passe doit comporter au moins 8 caractères.");
        isValid = false;
      } else {
        setSuccess(password);
      }

      // Validation de la confirmation du mot de passe
      if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        setError(confirmPassword, "Les mots de passe ne correspondent pas.");
        isValid = false;
      } else {
        setSuccess(confirmPassword);
      }

      // Validation du QCM
      const qcmContainer = qcm[0].parentElement;
      const qcmErrorDisplay = qcmContainer.querySelector("small");
      if (!isValidQCM()) {
        qcmErrorDisplay.textContent = "Veuillez sélectionner une option.";
        isValid = false;
      } else {
        qcmErrorDisplay.textContent = "";
      }

      return isValid;
    };

    document.getElementById("submit").addEventListener("click", () => {
      messages.innerHTML = "";
      if (validateForm()) {
        messages.innerHTML = '<p class="success">Formulaire validé avec succès !</p>';
      } else {
        messages.innerHTML = '<p class="error">Veuillez corriger les erreurs.</p>';
      }
    });