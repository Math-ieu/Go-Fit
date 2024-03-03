import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FactureClient from './FactureClient';
import PaiementClient from './PaiementClient';
import Planning from './Planning';
import PlanningOuvert from './PlanningOuvert';

function HomeClient({ user }) {
  const [page, setPage] = useState('home');
  const user1 = user;
  if (page === 'factures') {
    return <FactureClient user={user} />;
  }

  if (page === 'paiements') {
    return <PaiementClient user={user} />;
  }
  if (page === 'HomeClient') {
    return <HomeClient user={user} />;
  }

  return (
    <div>
      <h1>Bonjour, bienvenue {user1.firstname} !</h1>
      <table>
        <tbody>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        </tbody>
      </table>
      <h1>Mes factures</h1>
      <FactureClient user={user1} />

      <h1>Mes paiements</h1>
      <PaiementClient user={user1} />

      <h1>Nos Entrainements ouverts</h1>
      <PlanningOuvert />

      <h1>Nos Entrainements fermés</h1>
      <Planning />


      <button onClick={() => setPage('factures')}>Mes factures</button>
      <button onClick={() => setPage('paiements')}>Mes paiements</button>

    </div>
  );
}

export default HomeClient;
