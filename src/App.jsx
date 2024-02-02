import Balance from "./components/Balance.jsx"
import Breakdown from "./components/Breakdown.jsx"
import Total from "./components/Total.jsx"
import data from "./assets/data.json"
import {useState, useEffect} from "react"

function App() {

  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const daysList = data.map((obj, index) => {
    
    const currentDay = new Date().getDay();

    const barClassNames = `bar ${index === currentDay - 1 ? "current-day" : ""}`

    const indexIsHovered = index === isVisible;

    const barHeightMultiplayer = isMobile ? 4 : 3;

    return (<li key={obj.day}>
              <p className="bar-amount" style={{visibility: indexIsHovered ? "visible" : "hidden"}}>${obj.amount}</p>
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
