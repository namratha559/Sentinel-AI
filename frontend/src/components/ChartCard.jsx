import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function ChartCard({ data }) {

    if (!data || !data.forecast) return null;

    const labels = data.forecast.map(day => day.date);

    const maxTemp = data.forecast.map(day => day.max_temp);

    const minTemp = data.forecast.map(day => day.min_temp);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Max Temperature",
                data: maxTemp,
                borderColor: "red",
                backgroundColor: "red"
            },
            {
                label: "Min Temperature",
                data: minTemp,
                borderColor: "blue",
                backgroundColor: "blue"
            }
        ]
    };

    return (

        <div>

            <h2>📈 Temperature Forecast</h2>

            <Line data={chartData} />

        </div>

    );
}

export default ChartCard;