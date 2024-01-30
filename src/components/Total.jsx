import "../styles/Total.scss";

function Total({totalSpending}) {
    return (
        <div className="total">
            <div className="total-section">
                <p>Total this month</p>
                <p>${totalSpending}</p>
            </div>
            <div className="percent-section">
                <p>+2.4%</p>
                <p>from last month</p>
            </div>
        </div>
    )
}

export default Total;