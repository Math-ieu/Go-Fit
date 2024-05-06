

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Participer from './Participer';
import AjoutPlanning from './AjoutPlanning';
import { Link } from 'react-router-dom';
import './client.css'

function Planning() {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/sessions_ferme')
      .then(response => {
        setSessions(response.data);
      });
  }, []);

  const handleClick = (session) => {
    setSelectedSession(session);
  };

  // Group sessions by date
  const sessionsByDate = sessions.reduce((acc, session) => {
    acc[session.date_session] = [...(acc[session.date_session] || []), session];
    return acc;
  }, {});

  const timeSlots = ['06:00-08:00', '08:00-10:00', '10:00-12:00', '14:00-16:00', '16:00-18:00', '18:00-20:00', '20:00-22:00'];

  return (
    <div className="planning-container">
      <table className="planning-table">
        <thead>
          <tr>
            <th className="date-header">Date</th>
            {timeSlots.map((timeSlot) => (
              <th key={timeSlot} className="time-slot-header">{timeSlot}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(sessionsByDate).map(([date, sessions]) => (
            <tr key={date} className="date-row">
              <td className="date-cell">{date} ({sessions[0].jour_de_la_semaine})</td>
              {timeSlots.map((timeSlot) => {
                const session = sessions.find(
                  (session) => session.debut.slice(0, 5) === timeSlot.split("-")[0]
                );
                return (
                  <td
                    key={timeSlot}
                    className={session ? "time-slot-cell occupied" : "time-slot-cell"}
                    onClick={() => session && handleClick(session)}
                  >
                    {session ? session.nom_session : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {selectedSession && (
        <Participer session={selectedSession} onParticipate={() => setSelectedSession(null)} />
      )}
      <Link to="/AjoutPlanning" className="add-planning-button">
        Ajouter un planning
      </Link>
    </div>
  );
}

export default Planning;
