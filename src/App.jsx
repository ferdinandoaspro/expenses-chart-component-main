import Balance from "./Balance.jsx"
import Breakdown from "./Breakdown.jsx"
import Total from "./Total.jsx"
import data from "./assets/data.json"

function App() {
  const days = data.map(obj => <li>{obj.day}</li>)
  const expenses = data.map(obj => <li>{obj.amount}</li>)
  const total = data.map(obj => obj.amount).reduce((a, b) => a + b)

  return (
    <main>
      <Balance/>
      <Breakdown days={days} expenses={expenses}/>
      <Total spending={total}/>
    </main>
  )
}

export default App
