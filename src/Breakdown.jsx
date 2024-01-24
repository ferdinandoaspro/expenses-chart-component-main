function Breakdown({days, expenses}) {

    return (
        <section>
            <h1>Spending - Last 7 days</h1>
            <div>
                <ul>{expenses}</ul>
                <ul>{days}</ul>
            </div>
        </section>
    )
}

export default Breakdown;