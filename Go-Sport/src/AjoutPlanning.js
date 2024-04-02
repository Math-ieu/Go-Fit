import React, { useState } from "react";
import axios from "axios";
import { Divider } from "@chakra-ui/react";

const AjoutPlanning = () => {
  const [date, setDate] = useState("");
  const [entraineur, setEntraineur] = useState("");
  const [salle, setSalle] = useState("");
  const [heure, setHeure] = useState("");
  const [nom_session, setNomSession] = useState("");
  const [effectif_max, setEffectifMax] = useState("");
  const effectif = 0;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const debut = heure.split("-")[0];
    const fin = heure.split("-")[1];

    const response = await axios.post("http://localhost:3001/ajoutPlanning", {
      date,
      entraineur,
      salle,
      debut,
      fin,
      nom_session,
      effectif_max,
      effectif,
    });

    if (response.data.success) {
      alert("Ajout effectué");
    } else {
      alert("Cet entraineur et cette salle ne sont pas libres à ce moment");
    }
  };

  return (
    <div id='ajout-planing'>
      <form onSubmit={handleSubmit} className="ajout-planing-form">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        {/* Remplacer les options par les entraineurs de votre base de données */}
        <select
          value={entraineur}
          onChange={(e) => setEntraineur(e.target.value)}
          required
        >
          <option value="">Sélectionnez un entraineur</option>
          <option value="1">Entraineur 1</option>
          <option value="2">Entraineur 2</option>
        </select>
        {/* Remplacer les options par les salles de votre base de données */}
        <select
          value={salle}
          onChange={(e) => setSalle(e.target.value)}
          required
        >
          <option value="">Sélectionnez une salle</option>
          <option value="1">Salle 1</option>
          <option value="2">Salle 2</option>
        </select>
        <input
          type="text"
          value={nom_session}
          onChange={(e) => setNomSession(e.target.value)}
          placeholder="Nom de la session"
          required
        />
        <input
          type="number"
          value={effectif_max}
          onChange={(e) => setEffectifMax(e.target.value)}
          placeholder="Effectif max"
          required
        />
        <select
          value={heure}
          onChange={(e) => setHeure(e.target.value)}
          required
        >
          <option value="">Sélectionnez une heure</option>
          <option value="06:00-08:00">06:00-08:00</option>
          <option value="08:00-10:00">08:00-10:00</option>
          <option value="10:00-12:00">10:00-12:00</option>
          <option value="14:00-16:00">14:00-16:00</option>
          <option value="16:00-18:00">16:00-18:00</option>
          <option value="18:00-20:00">18:00-20:00</option>
          <option value="20:00-22:00">20:00-22:00</option>
        </select>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default AjoutPlanning;
