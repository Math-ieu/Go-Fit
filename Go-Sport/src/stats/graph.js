
// _app.js
import { PrimeReactProvider } from 'primereact/api';
import DropdownComponent from './components/Dropdown';
import VerticalBarComponent from './components/VerticalBar';
import PieChartComponent from './components/Pie';
import InputNumberComponent from './components/InputNumber';
import { useState, useEffect } from 'react';
import {
    fetchStatsMembresInscritHomme, fetchStatsMembresInscritFemme, fetchStatsMembresParTypeAbonnement,
    fetchStatsMembreParEntrainementFerme, fetchStatsMembreParEntrainementOuvert, fetchStatsMembresInscritParMoisAnneeHomme, fetchStatsMembresInscritParMoisAnneeFemme,
} from './api';
import './graph.css';

export default function Graph({ Component, pageProps }) {
    const [selectedValueInscritHommeFemme, setSelectedValueInscritHommeFemme] = useState(null);
    const [selectedValueInscritParAbonnement, setSelectedValueInscritParAbonnement] = useState(null);
    const [selectedValueInscritParPeriode, setSelectedValueInscritParPeriode] = useState(null);
    const [selectedValueEntrainement, setSelectedValueEntrainement] = useState(null);

    const [chosenValueInscritParPeriode, setChosenValueInscritParPeriode] = useState(2);
    const [chosenValueEntrainement, setChosenValueEntrainement] = useState(2);

    const handleValueChangeInscritHommeFemme = (value) => {
        setSelectedValueInscritHommeFemme(value);
    };
    const handleValueChangeInscritParPeriode = (value) => {
        setSelectedValueInscritParPeriode(value);
    };
    const handleValueChangeInscritParAbonnement = (value) => {
        setSelectedValueInscritParAbonnement(value);
    };
    const handleValueChangeEntrainement = (value) => {
        setSelectedValueEntrainement(value);
    };

    const handleValueChangeChosenInscritParPeriode = (value) => {
        setChosenValueInscritParPeriode(value);
    };

    const handleValueChangeChosenEntrainement = (value) => {
        setChosenValueEntrainement(value);
    };


    const [statsMembresInscritHomme, setStatsMembresInscritHomme] = useState(null);
    const [statsMembresInscritFemme, setStatsMembresInscritFemme] = useState(null);
    const [statsMembresParTypeAbonnement, setStatsMembresParTypeAbonnement] = useState(null);
    const [statsMembreParEntrainementFerme, setStatsMembreParEntrainementFerme] = useState(null);
    const [statsMembreParEntrainementOuvert, setStatsMembreParEntrainementOuvert] = useState(null);
    const [statsMembreInscritParMoisAnneeHomme, setStatsMembreInscritParMoisAnneeHomme] = useState(null);
    const [statsMembreInscritParMoisAnneeFemme, setStatsMembreInscritParMoisAnneeFemme] = useState(null);
    useEffect(() => {
        const fetchDataMembresInscritHomme = async () => {
            const intervale = chosenValueInscritParPeriode;
            const periode = selectedValueInscritParPeriode;
            const data = await fetchStatsMembresInscritHomme(intervale, periode);
            if (data) {
                setStatsMembresInscritHomme(data);
            }
        };
        const fetchDataMembresInscritFemme = async () => {
            const intervale = chosenValueInscritParPeriode;
            const periode = selectedValueInscritParPeriode;
            const data = await fetchStatsMembresInscritFemme(intervale, periode);
            if (data) {
                setStatsMembresInscritFemme(data);
            }
        };
        const fetchDataMembresParTypeAbonnement = async () => {
            const idAbonnement = 'votreIdAbonnement';
            const data = await fetchStatsMembresParTypeAbonnement(idAbonnement);
            if (data) {
                setStatsMembresParTypeAbonnement(data);
            }
        };
        const fetchDataMembreParEntrainementFerme = async () => {
            const intervale = selectedValueEntrainement;
            const periode = chosenValueEntrainement;
            const data = await fetchStatsMembreParEntrainementFerme(intervale, periode);
            if (data) {
                setStatsMembreParEntrainementFerme(data);
            }
        };

        const fetchDataMembreParEntrainementOuvert = async () => {
            const intervale = selectedValueEntrainement;
            const periode = chosenValueEntrainement;
            const data = await fetchStatsMembreParEntrainementOuvert(intervale, periode);
            if (data) {
                setStatsMembreParEntrainementOuvert(data);
            }
        };

        const fetchDataMembresInscritParMoisAnneeFemme = async () => {
            const annee = selectedValueInscritHommeFemme;
            const data = await fetchStatsMembresInscritParMoisAnneeFemme(annee);
            if (data) {
                setStatsMembreInscritParMoisAnneeFemme(data);
            }
        };
        const fetchDataMembresInscritParMoisAnneeHomme = async () => {
            const annee = selectedValueInscritHommeFemme;
            const data = await fetchStatsMembresInscritParMoisAnneeHomme(annee);
            if (data) {
                setStatsMembreInscritParMoisAnneeHomme(data);
            }
        };
        fetchDataMembresInscritHomme();
        fetchDataMembresInscritFemme();
        fetchDataMembresParTypeAbonnement();
        fetchDataMembreParEntrainementOuvert();
        fetchDataMembreParEntrainementFerme();
        fetchDataMembresInscritParMoisAnneeHomme();
        fetchDataMembresInscritParMoisAnneeFemme();
    }, []);

    return (
        <PrimeReactProvider>
            <div className='graph'>
                <div className='inscrit_homme_femme'>
                    <DropdownComponent data={["2021", "2022", '2023', '2024']} placeholder={"annee"} selectedValue={selectedValueInscritHommeFemme} onValueChange={handleValueChangeInscritHommeFemme} />
                    <VerticalBarComponent data={{ "homme": [12, 23, 45, 56, 67, 45, 67, 21, 56, 70, 7, 20], "femme": [23, 45, 67, 87, 99, 34, 56, 78, 9, 40, 23, 11] }} />
                </div>
                <div className='incsrit_par_periode_intervale'>
                    <div className='input'>
                        <InputNumberComponent selectedValue={chosenValueInscritParPeriode} onValueChange={handleValueChangeChosenInscritParPeriode} />
                        <DropdownComponent data={["year", "month", 'week', 'day']} placeholder={"Période"} selectedValue={selectedValueInscritParPeriode} onValueChange={handleValueChangeInscritParPeriode} />
                    </div>
                    <PieChartComponent data={{ "labels": ["A", "B", "c"], "content": [300, 400, 500] }} />
                </div>
                <div className='inscrit_par_abonnement'>
                    <DropdownComponent data={["year", "month", 'week', 'day']} placeholder={"Période"} selectedValue={selectedValueInscritParAbonnement} onValueChange={handleValueChangeInscritParAbonnement} />
                    <PieChartComponent data={{ "labels": ["A", "B", "c"], "content": [300, 400, 500] }} />
                </div>
                <div className='entrainement'>
                    <div className='input'>
                        <InputNumberComponent selectedValue={chosenValueEntrainement} onValueChange={handleValueChangeChosenEntrainement} />
                        <DropdownComponent data={["year", "month", 'week', 'day']} placeholder={"Période"} selectedValue={selectedValueEntrainement} onValueChange={handleValueChangeEntrainement} />
                    </div>
                    <PieChartComponent data={{ "labels": ["Entrainement Fermé", "Entrainement Ouvert"], "content": [20, 89] }} />
                </div>
            </div>
        </PrimeReactProvider>
    );
}
