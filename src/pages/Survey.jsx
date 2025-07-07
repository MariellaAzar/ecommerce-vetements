import React, { useState } from 'react';
import './Survey.css';

function Survey() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="survey-container">
      <h2>💬 Aide-nous à nous améliorer !</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Quelle a été ton expérience d'achat ?
            <select required>
              <option value="">-- Choisis une option --</option>
              <option value="excellent">✨ Excellente</option>
              <option value="good">😊 Bonne</option>
              <option value="average">😐 Moyenne</option>
              <option value="bad">🙁 Mauvaise</option>
            </select>
          </label>

          <label>
            Un commentaire ou une suggestion ?
            <textarea placeholder="Écris ici..." rows="4" />
          </label>

          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <div className="thanks-message">
          <h3>Merci pour ton retour 💖</h3>
          <p>Ton avis nous aide à créer une meilleure expérience ✨</p>
        </div>
      )}
    </div>
  );
}

export default Survey;
