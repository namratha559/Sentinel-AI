function RiskCard({ data }) {

    if (!data) return null;

    return (
        <div>
            <h2>⚠ AI Risk Analysis</h2>

            <p>Flood Risk : {data.risks.flood}</p>

            <p>Fire Risk : {data.risks.fire}</p>

            <p>Heatwave Risk : {data.risks.heatwave}</p>

        </div>
    );
}

export default RiskCard;