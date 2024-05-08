import React from 'react'
import { Header, Banner, About, Workouts, Pricing, Community, Faq, Join, Footer } from './components/index'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InscriptionConnexion from './Inscription_Connexion';
import PayerFacture from './ReglerFacture';
import ClientTable from './ClientTable';
import EntraineurTable from './EntraineurTable';
import AjoutEntraineur from './AjoutEntraineur';
import AjouterClient from './AjouterClient';
import AjoutEquipement from './AjoutEquipement';
import EquipmentTable from './EquipmentTable';
import Planning from './Planning';
import PlanningOuvert from './PlanningOuvert';
import Participer from './Participer';
import AjoutPlanning from './AjoutPlanning'
import AbonnementTable from './AbonnementTable';
import AjoutAbonnement from './AjoutAbonnement';
import RapportTable from './RapportTable';
import Connexion from './Connexion';
import Inscription from './Register';
import HomeClient from './HomeClient';
import FactureClient from './FactureClient';
import PaiementClient from './PaiementClient';
import HomeEntraineur from './HomeEntraineur';
import HomeGestionnaire from './HomeGestionnaire';
import PlanningEntraineur from './PlanningEntraineur';
import PlanningOuvertEntraineur from './PlanningOuvertEntraineur';
import PlanningGestionnaire from './PlanningGestionnaire';
import PlanningOuvertGestionnaire from './PlanningOuvertGestionnaire';
import FacturePaiement from './FacturePaiement';
import Graph from './stats/graph';
import AbonnementClient from './AbonnementClient';
import EquipmentClientDiv from './EquipmentClientDiv';
import EntraineurAbonnementDiv from './EntraineurAbonnementDiv';
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/AbonnementClient" element={<AbonnementClient />} />
          <Route path="/PayerFacture" element={<PayerFacture />} />
          <Route path="/EquipmentClientDiv" element={<EquipmentClientDiv />} />
          <Route path="/EntraineurAbonnementDiv" element={<EntraineurAbonnementDiv />} />
          <Route path="/AjouterClient" element={<AjouterClient />} />
          <Route path="/AjoutEquipement" element={<AjoutEquipement />} />
          <Route path="/ClientTable" element={<ClientTable />} />
          <Route path="/FacturePaiement" element={<FacturePaiement />} />
          <Route path="/EntraineurTable" element={<EntraineurTable />} />
          <Route path="/AjoutEntraineur" element={<AjoutEntraineur />} />
          <Route path="/Planning" element={<Planning />} />
          <Route path="/AbonnementTable" element={<AbonnementTable />} />
          <Route path="/AjoutAbonnement" element={<AjoutAbonnement />} />
          <Route path="/AjoutPlanning" element={<AjoutPlanning />} />
          <Route path="/PlanningOuvert" element={<PlanningOuvert />} />
          <Route path="/Participer" element={<Participer />} />
          <Route path="/PlanningEntraineur" element={<PlanningEntraineur />} />
          <Route path="/PlanningOuvertEntraineur" element={<PlanningOuvertEntraineur />} />
          <Route path="/PlanningGestionnaire" element={<PlanningGestionnaire />} />
          <Route path="/PlanningOuvertGestionnaire" element={<PlanningOuvertGestionnaire />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/FactureClient" element={<FactureClient />} />
          <Route path="/PaiementClient" element={<PaiementClient />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/HomeClient" element={<HomeClient />} />
          <Route path="/HomeEntraineur" element={<HomeEntraineur />} />
          <Route path="/HomeGestionnaire" element={<HomeGestionnaire />} />
          <Route path="/RapportTable" element={<RapportTable />} />
          <Route path="/EquipmentTable" element={<EquipmentTable />} />
          <Route path="/Go-Fit" element={<InscriptionConnexion />} />
          <Route path="/stats" element={<Graph />} />
          <Route path="/" element={<>
            <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
              <Header />
              <Banner />
              <About />
              <Workouts />
              <Pricing />
              <Community />
              <Faq />
              <Join />
              <Footer />
            </div>
          </>} />
        </Routes>
      </div>
    </Router>

  )
}

export default App;