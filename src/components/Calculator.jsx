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

const makeVisible = () => {
    document.getElementById("custom-input").classList.remove("invisible")
}

const makeInvisible = () => {
    document.getElementById("custom-input").classList.add("invisible")
}

const handleReset = () => {
window.location.reload();
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
    <div class="container">
      <div>
        <div>
          <p>Bill</p>
          <input type="number" className="border-2 border-blue-500" onChange={(e) => setBill(e.target.value)}/>
        </div>
        <div>
          <p>Select tip %</p>
          <input
            type="radio"
            id="5"
            class="tip-button"
            name="tip-amounts"
            value="0.05"
            onClick={(e) => setTipPercent(e.target.value)}
            onClick={makeInvisible}
          /><label for="5">5%</label>
          <input
            type="radio"
            id="10"
            class="tip-button"
            name="tip-amounts"
            value="0.1"
            onClick={(e) => setTipPercent(e.target.value), makeInvisible}
            // onClick={makeInvisible}
          /><label for="10">10%</label>
          <input
            type="radio"
            id="15"
            class="tip-button"
            name="tip-amounts"
            value="0.15"
            onClick={makeInvisible}
            onClick={(e) => setTipPercent(e.target.value)}
          /><label for="15">15%</label>
          <input
            type="radio"
            id="25"
            class="tip-button"
            name="tip-amounts"
            value="0.25"
            onClick={(e) => setTipPercent(e.target.value)}
            onClick={makeInvisible}
          /><label for="25">25%</label>
          <input
            type="radio"
            id="50"
            class="tip-button"
            name="tip-amounts"
            value="0.5"
            onClick={(e) => setTipPercent(e.target.value)}
            onClick={makeInvisible}
          /><label for="50">50%</label>
          <input
            type="radio"
            id="custom"
            class="tip-button"
            name="tip-amounts"
            value="custom"
            onClick={makeVisible}
          /><label for="custom">Custom amount</label>
           <input type="number" id="custom-input" min="0" max="100" className="invisible border-2 border-blue-500" onChange={(e) => setTipPercent(e.target.value / 100)} />
        </div>
        <div id="number-of-people">
          <p className="text-red-900">Number of people</p>
          <select onChange={(e) => setPeople(e.target.value)}>
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
      <div class="right-side">
        <div><p>Tip amount /person £{tipPerPerson.toFixed(2)}</p></div>
        <div><p>Bill amount /person £{totalPerPerson.toFixed(2)}</p></div>
        <div class="reset-button" >
          <button type="button" onClick={handleReset} >Reset</button>
        </div>
      </div>
    </div>
  </body>
    </div>
)
}

export default Calculator