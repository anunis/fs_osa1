import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
      {text}
  </button>
)

const Tilasto = (props) => {
  let yhteensa = props.good + props.neutral + props.bad
  let keskiarvo = (props.good -props.bad) / yhteensa
  let posi = props.good / yhteensa *100 + " %"

  if (yhteensa == 0) {
    return (
      <div>
        Ei palautteita
      </div>
    )
  }

  return (
    <div>
      {/*StatisticLine*/}
        <table>
          <tbody>
            <StatisticLine text="Hyvä" value={props.good}></StatisticLine>
            <StatisticLine text="Ok" value={props.neutral}></StatisticLine>
            <StatisticLine text="Huono" value={props.bad}></StatisticLine>

            <StatisticLine text="Yhteensä" value={yhteensa}></StatisticLine>
            <StatisticLine text="Keskiarvo" value={keskiarvo}></StatisticLine>
           <StatisticLine text="Positiivisia" value={posi}></StatisticLine>
          </tbody>
        </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
    
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick1 = () => {
    console.log('hyvä')
    setGood(good +1)
  }
  const handleClick2 = () => {
    console.log('ok')
    setNeutral(neutral +1)
  }
  const handleClick3 = () => {
    console.log('huono')
    setBad(bad +1)
  }

  return (
    <div>
      <h1>Anna palautetta </h1>
      
     {/* tähän palautenapit */}
      <button onClick={handleClick1}>
        hyvä
      </button>
      <button onClick={handleClick2}>
        ok
      </button>
      <button onClick={handleClick3}>
        huono
      </button>

    <h2>Tilasto</h2>
    {/* <p>Hyvä {good}</p>
    <p>Neutraali {neutral}</p>
    <p>Huono {bad}</p>
    <p>Yhteensä {good + neutral + bad}</p>
    <p>Keskiarvo {(good - bad) / (good + neutral + bad)} </p>
    <p>Positiivisia {good / (good + neutral + bad) *100} %</p> */}
    <Tilasto good={good} neutral={neutral} bad={bad} />
    </div>
  )
}



ReactDOM.render(<App />, 
  document.getElementById('root')
)