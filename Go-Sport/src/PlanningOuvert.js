// PlanningOuvert.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlanningOuvert() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/sessions_ouvert')
      .then(response => {
        console.log('Sessions from API:', response.data);
        setSessions(response.data);
      });
  }, []);

  // Group sessions by date
  const sessionsByDate = sessions.reduce((acc, session) => {
    acc[session.date_session] = [...(acc[session.date_session] || []), session];
    return acc;
  }, {});

  const timeSlots = ['06:00-08:00', '08:00-10:00', '10:00-12:00', '14:00-16:00', '16:00-18:00', '18:00-20:00', '20:00-22:00'];

  return (
    <div className='planning-container'>
      <table className='planning-table'>
        <thead>
          <tr>
            <th>Date</th>
            {timeSlots.map(timeSlot => (
              <th key={timeSlot}>{timeSlot}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(sessionsByDate).map(([date, sessions]) => {
            console.log('Sessions for date', date, ':', sessions);
            return (
              <tr key={date}>
                <td>{date} ({sessions[0].jour_de_la_semaine})</td>
                {timeSlots.map(timeSlot => {
                  const session = sessions.find(session => session.debut.slice(0, 5) === timeSlot.split('-')[0].slice(0, 5));
                  console.log('Session for time slot', timeSlot, ':', session);
                  return (
                    <td key={timeSlot}>
                      {session ? session.nom_session : ''}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlanningOuvert;
