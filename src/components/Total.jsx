import "../styles/Total.scss";

function Total({totalSpending}) {
    return (
        <div className="total">
            <div className="total-section">
                <p>Total this month</p>
                <p className="total-spending">${totalSpending}</p>
            </div>
            <div className="percent-section">
                <p className="percent-difference">+2.4%</p>
                <p>from last month</p>
            </div>
        </div>
    )
}

export default Total;