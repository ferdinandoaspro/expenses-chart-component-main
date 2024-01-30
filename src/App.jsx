import Balance from "./components/Balance.jsx"
import Breakdown from "./components/Breakdown.jsx"
import Total from "./components/Total.jsx"
import data from "./assets/data.json"

function App() {
  const currentDay = new Date().getDay();

  const daysList = data.map((obj, i) => {
    return (<li key={obj.day}>
              {i === currentDay - 1 ? <div className="bar currentDay" style={{height: `${obj.amount * 3}px`}}></div> : 
                                      <div className="bar" style={{height: `${obj.amount * 3}px`}}></div>}
              <p>{obj.day}</p>
            </li>
          )
    }
  )

  const total = data.map(obj => obj.amount).reduce((a, b) => a + b)

  return (
    <main>
      <Balance/>
      <div className="container">
        <Breakdown dailySpending={daysList}/>
        <hr/>
        <Total totalSpending={total}/>
      </div>
    </main>
  )
}

export default App
