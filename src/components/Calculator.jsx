import { React, useState, useEffect } from "react"

const Calculator = () => {
const [bill, setBill] = useState(Number);
const [tipPercent, setTipPercent] = useState(Number);
const [people, setPeople] = useState(1);
const [tipPerPerson, setTipPerPerson] = useState(Number);
const [totalPerPerson, setTotalPerPerson] = useState(Number);

const calculateTipPerPerson = (bill, tipPercent, people) => {
    setTipPerPerson((bill * tipPercent) / people)
  };

const calculateTotalPerPerson = (bill, tipPerPerson, people) => {
    setTotalPerPerson((bill / people) + tipPerPerson) ;
  };

  const returnCustom = () => {
      return (
          <input type="number" onChange={(e) => setTipPercent(e.target.value)} />
      )
    
  }

  useEffect(() => {
      calculateTipPerPerson(bill, tipPercent, people);
      calculateTotalPerPerson(bill, tipPerPerson, people);
  }, [bill, tipPercent, people, tipPerPerson])

console.log("bill", bill);
console.log("tipPercent", tipPercent);
console.log("people", people);
console.log("tipPerPerson", tipPerPerson);
console.log("totalPerPerson", totalPerPerson);

return (
    <div>
        <body>
    <h2 className="text-red-900">Spli</h2>
    <br />
    <h2>Tter</h2>
    <div id="container" class="container">
      <div id="left-side">
        <div id="bill-amount">
          <p>Bill</p>
          <input type="number" id="bill-input" onChange={(e) => setBill(e.target.value)}/>
        </div>
        <div id="tip-percentage">
          <p>Select tip %</p>
          <input
            type="radio"
            id="5"
            class="tip-button"
            name="tip-amounts"
            value="0.05"
            onClick={(e) => setTipPercent(e.target.value)}
          /><label for="5">5%</label>
          <input
            type="radio"
            id="10"
            class="tip-button"
            name="tip-amounts"
            value="0.1"
            onClick={(e) => setTipPercent(e.target.value)}
          /><label for="10">10%</label>
          <input
            type="radio"
            id="15"
            class="tip-button"
            name="tip-amounts"
            value="0.15"
            onClick={(e) => setTipPercent(e.target.value)}
          /><label for="15">15%</label>
          <input
            type="radio"
            id="25"
            class="tip-button"
            name="tip-amounts"
            value="0.25"
            onClick={(e) => setTipPercent(e.target.value)}
          /><label for="25">25%</label>
          <input
            type="radio"
            id="50"
            class="tip-button"
            name="tip-amounts"
            value="0.5"
            onClick={(e) => setTipPercent(e.target.value)}
          /><label for="50">50%</label>
          <input
            type="radio"
            id="custom"
            class="tip-button"
            name="tip-amounts"
            value="custom"
            onClick={returnCustom()}
          /><label for="custom">Custom amount</label>
          
        </div>
        <div id="number-of-people">
          <p className="text-red-900">Number of people</p>
          <select id="number-of-people" onChange={(e) => setPeople(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>
      <div id="right-side" class="right-side">
        <div id="tip-pp"><p>Tip amount /person £{tipPerPerson.toFixed(2)}</p></div>
        <div id="total-pp"><p>Bill amount /person £{totalPerPerson.toFixed(2)}</p></div>
        <div id="reset-button" class="reset-button">
          <button type="button">Reset</button>
        </div>
      </div>
    </div>
  </body>
    </div>
)
}

export default Calculator