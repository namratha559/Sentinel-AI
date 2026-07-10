function SummaryCard({ data }) {

    if (!data) return null;

    return (
        <div>
            <h2>🧠 AI Weather Summary</h2>

            <p>{data.summary}</p>

        </div>
    );

}

export default SummaryCard;