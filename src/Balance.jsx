import logo from "./assets/images/logo.svg"

function Balance() {
    return (
        <div className="balance-section">
            <div className="balance-amount">
                <p>My Balance</p>
                <p>$921.48</p>
            </div>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Balance;