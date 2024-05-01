import React, { useState } from "react";

function AjoutEntraineur() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [photo, setPhoto] = useState(null);
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phraseAccroche, setPhraseAccroche] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleSexeChange = (event) => {
    setSexe(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleAdresseChange = (event) => {
    setAdresse(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    setIsValidEmail(re.test(String(event.target.value).toLowerCase()));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsValidPassword(re.test(String(event.target.value)));
  };

  const handlePhraseAccrocheChange = (event) => {
    setPhraseAccroche(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("prenom", prenom);
    formData.append("sexe", sexe);
    formData.append("photo", photo);
    formData.append("adresse", adresse);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phraseAccroche", phraseAccroche);

    const response = await fetch("http://localhost:3001/ajoutEntraineur", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      alert("Nouvel entraîneur ajouté");
    } else {
      alert("une erreur sest produite ");
    }
  };

  return (
    <div id="aj-entraineur">
      <div className="ajout-ent-container">
        <h1>AJOUT ENTRAINEUR</h1>
        <form onSubmit={handleSubmit} className="ajout-entr-form">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={handleNomChange}
          />
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={handlePrenomChange}
          />
          <select value={sexe} onChange={handleSexeChange}>
            <option value="">Sélectionnez votre sexe</option>
            <option value="M">Monsieur</option>
            <option value="F">Madame</option>
          </select>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handlePhotoChange}
          />
          <input
            type="text"
            placeholder="Adresse"
            value={adresse}
            onChange={handleAdresseChange}
          />
          <input
            type="text"
            placeholder="Adresse mail"
            value={email}
            onChange={handleEmailChange}
          />
          {!isValidEmail && email !== "" && (
            <p style={{ color: "orange" }}>
              Ceci n'est pas une adresse mail valide
            </p>
          )}
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isValidPassword && password !== "" && (
            <p style={{ color: "orange" }}>
              Le mot de passe doit contenir au moins 8 caractères, dont une
              majuscule, une minuscule, un chiffre et un caractère spécial
            </p>
          )}
          <textarea
            placeholder="Phrase d'accroche"
            value={phraseAccroche}
            onChange={handlePhraseAccrocheChange}
          />
          <button
            type="submit"
            disabled={!isValidEmail || !isValidPassword}
            style={{
              backgroundColor:
                isValidEmail && isValidPassword ? "orange" : "grey",
            }}
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default AjoutEntraineur;
