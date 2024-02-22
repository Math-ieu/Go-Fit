import React from 'react';
import PlanningEntraineur from './PlanningEntraineur';
import PlanningOuvertEntraineur from './PlanningOuvertEntraineur';
function HomeEntraineur({ user }) {
  return (
    <div>
      <h1>Bonjour, bienvenue sur Entraineur !</h1>
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
      <h1>Nos Entrainements ouverts</h1>
      <PlanningOuvertEntraineur/>

      <h1>Nos Entrainements fermés</h1>
      <PlanningEntraineur/>
    </div>
  );
}

export default HomeEntraineur;
