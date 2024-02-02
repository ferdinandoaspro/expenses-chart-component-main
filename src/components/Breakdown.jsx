import "../styles/Breakdown.scss";

function Breakdown({dailySpending}) {

    return (
        <section>
            <h1>Spending - Last 7 days</h1>
            <div className="chart">
                <ul>
                    {dailySpending}
                </ul>
            </div>
        </section>
    )
}

export default Breakdown;