import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function RainChart({ data }) {

    if (!data || !data.forecast) return null;

    const labels = data.forecast.map(day => day.date);

    const rain = data.forecast.map(day => day.rain_probability);

    return (

        <div>

            <h2>🌧 Rain Probability</h2>

            <Bar

                data={{

                    labels,

                    datasets: [

                        {

                            label: "Rain %",

                            data: rain

                        }

                    ]

                }}

            />

        </div>

    );

}

export default RainChart;