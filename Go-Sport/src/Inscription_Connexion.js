import React, { useState } from "react";
import {Heading, Text} from "@chakra-ui/react";
import HomeClient from "./HomeClient";
import HomeEntraineur from "./HomeEntraineur";
import HomeGestionnaire from "./HomeGestionnaire";
import BG from "./assets/img/banner/bg.png";

// Fonction pour la page d'inscription
function Inscription({ setPage }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [motivation, setMotivation] = useState("");
  const [goal, setGoal] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [registrationDate, setRegistrationDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [photo, setPhoto] = useState(null);
  console.log(registrationDate);
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
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

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleMotivationChange = (event) => {
    setMotivation(event.target.value);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleTrainingTypeChange = (event) => {
    setTrainingType(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const handleRegistrationDateChange = (event) => {
    setRegistrationDate(event.target.value);
  };

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("sex", sex);
    formData.append("weight", weight);
    formData.append("height", height);
    formData.append("motivation", motivation);
    formData.append("goal", goal);
    formData.append("trainingType", trainingType);
    formData.append("phone", phone);
    formData.append("birthDate", birthDate);
    formData.append("registrationDate", registrationDate);
    formData.append("photo", photo);

    const response = await fetch("http://localhost:3001/inscription", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      alert("inscription réussite");
      setFirstName("");
      setLastName("");
      setAddress("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setIsValidEmail(false);
      setIsValidPassword(false);
      setSex("");
      setWeight("");
      setHeight("");
      setMotivation("");
      setGoal("");
      setTrainingType("");
      setPhone("");
      setBirthDate("");
      setRegistrationDate(new Date().toISOString().substring(0, 10));
    } else {
      alert("une erreur sest produite ");
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>INSCRIPTION</h1>
      <form onSubmit={handleSubmit1}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <input
              type="text"
              placeholder="Prénom"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <input
              type="text"
              placeholder="Nom"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <input
              type="text"
              placeholder="Adresse"
              value={address}
              onChange={handleAddressChange}
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
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {password !== confirmPassword && confirmPassword !== "" && (
              <p style={{ color: "orange" }}>
                Les mots de passe ne correspondent pas
              </p>
            )}
            <select value={sex} onChange={handleSexChange}>
              <option value="">Sélectionnez votre sexe</option>
              <option value="M">Monsieur</option>
              <option value="F">Madame</option>
            </select>
            <input
              type="number"
              placeholder="Poids"
              value={weight}
              onChange={handleWeightChange}
            />
            <input
              type="number"
              placeholder="Taille"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Motivation"
              value={motivation}
              onChange={handleMotivationChange}
            />
            <select value={goal} onChange={handleGoalChange}>
              <option value="">Sélectionnez votre objectif</option>
              <option value="functional_training">
                Entraînement Fonctionnel pour une Meilleure Performance
                Quotidienne
              </option>
              <option value="flexibility">
                Amélioration de la Flexibilité et de la Mobilité
              </option>
              <option value="endurance">Amélioration de l'Endurance</option>
              <option value="strength">Amélioration de la Force</option>
              <option value="weight_loss">Perte de Poids</option>
              <option value="muscle_gain">Prise de Masse Musculaire</option>
            </select>
            <select value={trainingType} onChange={handleTrainingTypeChange}>
              <option value="">Sélectionnez votre type d'entraînement</option>
              <option value="global">Globale</option>
              <option value="cardio">Cardio</option>
              <option value="yoga">Yoga</option>
              <option value="speed_agility">
                Entraînement de Vitesse et Agilité
              </option>
              <option value="balance_coordination">
                Entraînement en Équilibre et Coordination
              </option>
              <option value="boxing_kickboxing">
                Entraînement de Boxe ou de Kickboxing
              </option>
            </select>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Téléphone"
              value={phone}
              onChange={handlePhoneChange}
            />
            <input
              type="date"
              placeholder="Date de naissance"
              value={birthDate}
              onChange={handleBirthDateChange}
            />
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(event) => setPhoto(event.target.files[0])}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={
            !isValidEmail || !isValidPassword || password !== confirmPassword
          }
          style={{
            backgroundColor:
              isValidEmail && isValidPassword && password === confirmPassword
                ? "orange"
                : "grey",
          }}
        >
          S'inscrire
        </button>
      </form>
      <p style={{ color: "white" }}>
        Vous avez déjà un compte ?{" "}
        <span style={{ color: "orange" }} onClick={() => setPage("login")}>
          Connectez-vous
        </span>
      </p>
    </div>
  );
}

// Fonction pour la page de connexion
function Connexion({ setPage, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    setIsValidEmail(re.test(String(event.target.value).toLowerCase()));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { table, user } = await response.json();
      setPage("Home" + table.charAt(0).toUpperCase() + table.slice(1));
      setUser(user);
    } else {
      const error = await response.json();
      window.alert("Adresse email ou mot de passe incorrect");
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>CONNEXION</h1>
      <form onSubmit={handleFormSubmit}>
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
        <button
          type="submit"
          disabled={!isValidEmail || password === ""}
          style={{
            backgroundColor:
              isValidEmail && password !== "" ? "orange" : "grey",
          }}
        >
          Se connecter
        </button>
      </form>
      <p style={{ color: "white" }}>
        Vous êtes nouveau ?{" "}
        <span style={{ color: "orange" }} onClick={() => setPage("register")}>
          Inscrivez-vous
        </span>
      </p>
    </div>
  );
}

function InscriptionConnexion() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  const handleLoginRedirect = () => {
    setPage("login");
  };

  const handleRegisterRedirect = () => {
    setPage("register");
  };

  return (
    <div id="home">
      <div className="home-client">
        <div className="overlay">
          {page === "home" && (
            <span>
              <Heading>RÉVELEZ VOTRE POTENTIEL</Heading>
              <button>JE CRÉE MON COMPTE</button>
              <Text onClick={handleLoginRedirect}>J'ai déjà un compte</Text>
            </span>
          )}
          {page === "register" && <Inscription setPage={setPage} />}
          {page === "login" && (
            <Connexion setPage={setPage} setUser={setUser} />
          )}
          {page === "HomeClient" && <HomeClient user={user} />}
          {page === "HomeEntraineur" && <HomeEntraineur user={user} />}
          {page === "HomeGestionnaire" && <HomeGestionnaire user={user} />}
        </div>
      </div>
    </div>
  );
}

export default InscriptionConnexion;
