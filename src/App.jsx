import Balance from "./components/Balance.jsx"
import Breakdown from "./components/Breakdown.jsx"
import Total from "./components/Total.jsx"
import data from "./assets/data.json"
import {useState, useEffect} from "react"

function App() {

  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const getDayIndex = () => {

    const day = new Date().getDay()
    const currentDay = day !== 0 ? day - 1 : 6

    return currentDay
  }

  const daysList = data.map((obj, index) => {

    const isCurrentDay = index === getDayIndex()
    const barClassNames = `bar ${isCurrentDay ? "current-day" : ""}`
    const isHovered = index === isVisible
    const barHeightMultiplayer = isMobile ? 4 : 3

    return (<li key={obj.day}>
              <p className="bar-amount" style={{visibility: isHovered ? "visible" : "hidden"}}>${obj.amount}</p>
              <div
                className={barClassNames}
                onMouseOver={() => setIsVisible(index)}
                onMouseLeave={() => setIsVisible(false)}
                style={{height: `${obj.amount * barHeightMultiplayer}px`}}>
              </div>
              <p className="bar-day">{obj.day}</p>
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
