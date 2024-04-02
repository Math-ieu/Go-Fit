import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeClient from './HomeClient';
import HomeEntraineur from './HomeEntraineur';
import HomeGestionnaire from './HomeGestionnaire';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const navigate = useNavigate(); 

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
    const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const { table, user } = await response.json();
        switch (table) {
          case 'client':
            navigate('/HomeClient', { user }); // Utilisez navigate ici
            break;
          case 'entraineur':
            navigate('/HomeEntraineur', { user }); // Utilisez navigate ici
            break;
          case 'gestionnaire':
            navigate('/HomeGestionnaire', { user }); // Utilisez navigate ici
            break;
          default:
            window.alert('Erreur : table inconnue');
        }
    } else {
        const error = await response.json();
        window.alert('Erreur : ' + error.error);
    }
  };

  return (
    <div id='connexion'>
      
      <div className='connexion'>
        <h1>CONNEXION</h1>
        <form onSubmit={handleFormSubmit} className='con-form'>
          <input type="text" placeholder="Adresse mail" value={email} onChange={handleEmailChange} />
          {!isValidEmail && email !== '' && <p style={{ color: 'orange' }}>Ceci n'est pas une adresse mail valide</p>}
          <input type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} />
          <button type="submit" disabled={!isValidEmail || password === ''} style={{ backgroundColor: isValidEmail && password !== '' ? 'orange' : 'grey' }}>Se connecter</button>
        </form>
        <p style={{ color: 'white', cursor:'pointer' }}>Vous êtes nouveau ? <span style={{ color: 'orange' }} onClick={() => navigate('/Inscription')}>Inscrivez-vous</span></p>
      </div>
    </div>
  );
}

export default Connexion;
