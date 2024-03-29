
// _app.js
import { PrimeReactProvider } from 'primereact/api';
import DropdownComponent from './components/Dropdown';
import VerticalBarComponent from './components/VerticalBar';
import PieChartComponent from './components/Pie';
import InputNumberComponent from './components/InputNumber';
import './graph.css'

export default function Graph({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <div>
                <InputNumberComponent />
                <DropdownComponent data={["year", "month", 'week', 'day']} />
                <VerticalBarComponent data={{ "homme": [12, 23, 45, 56, 67, 45, 67, 21, 56, 70, 7, 20], "femme": [23, 45, 67, 87, 99, 34, 56, 78, 9, 40, 23, 11] }} />
                <PieChartComponent data={{ "labels": ["A", "B", "c"], "content": [300, 400, 500] }} />
            </div>
        </PrimeReactProvider>
    );
}
