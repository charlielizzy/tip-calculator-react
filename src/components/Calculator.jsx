import { React, useState, useEffect } from "react"

const Calculator = () => {
const [bill, setBill] = useState();
const [tipPercent, setTipPercent] = useState();
const [people, setPeople] = useState(1);
const [tipPerPerson, setTipPerPerson] = useState();
const [totalPerPerson, setTotalPerPerson] = useState();
const [inputChecked, setInputChecked] = useState(false)

const calculateTipPerPerson = (bill, tipPercent, people) => {
    setTipPerPerson((bill * tipPercent) / people)
  };

const calculateTotalPerPerson = (bill, tipPerPerson, people) => {
    setTotalPerPerson((bill / people) + tipPerPerson) ;
  };

const handleReset = () => {
setBill(0);
setTipPercent(0);
setPeople(1);
setTipPerPerson(0);
setTotalPerPerson(0);
}

const handleCheck = (e) => {
setTipPercent(e.target.value);
setInputChecked(true)
}

  useEffect(() => {
      if (bill && tipPercent && people && tipPerPerson) {
        calculateTipPerPerson(bill, tipPercent, people);
        calculateTotalPerPerson(bill, tipPerPerson, people)
      };
  }, [bill, tipPercent, people, tipPerPerson])

console.log("bill", bill);
console.log("tipPercent", tipPercent);
console.log("people", people);
console.log("tipPerPerson", tipPerPerson);
console.log("totalPerPerson", totalPerPerson);

return (
    <div className="flex justify-center flex-col">
    <h2 className="flex justify-center uppercase tracking-widest">Spli</h2>
    <h2 className="flex justify-center uppercase tracking-widest">Tter</h2>
    <div className="container bg-white flex flex-row justify-center w-[920px] min-h-fit rounded-3xl">
      <div className="left-side w-[379px] h-[388px] m-[48px] content-around">
        <div>
          <p>Bill</p>
          <input type="number" className="mb-8 border-2 border-blue-500" value={bill} onChange={(e) => setBill(e.target.value)}/>
        </div>
        <div>
          <p>Select tip %</p>
          <input
            type="radio"
            id="5"
            class="tip-button"
            name="tip-amounts"
            value="0.05"
            checked={tipPercent === "0.05"}
            onClick={handleCheck}
          /><label for="5">5%</label>
          <input
            type="radio"
            id="10"
            class="tip-button"
            name="tip-amounts"
            value="0.1"
            checked={tipPercent === "0.1"}
            onClick={handleCheck}
          /><label for="10">10%</label>
          <input
            type="radio"
            id="15"
            class="tip-button"
            name="tip-amounts"
            value="0.15"
            checked={tipPercent === "0.15"}
            onClick={handleCheck}
          /><label for="15">15%</label>
          <input
            type="radio"
            id="25"
            class="tip-button"
            name="tip-amounts"
            value="0.25"
            checked={tipPercent === "0.25"}
            onClick={handleCheck}
          /><label for="25">25%</label>
          <input
            type="radio"
            id="50"
            class="tip-button"
            name="tip-amounts"
            value="0.5"
            checked={tipPercent === "0.5"}
            onClick={handleCheck}
          /><label for="50">50%</label>
          <label for="custom">Custom amount</label>
           <input type="number" id="custom" min="0" max="100" className="mb-8 border-2 border-blue-500" onChange={(e) => setTipPercent(e.target.value / 100)} value={inputChecked ? "" : tipPercent * 100} onFocus={() =>  setInputChecked(false)}/>
        </div>
        <div id="number-of-people">
          <p className="">Number of people</p>
          <input type="number" className="border-2 border-blue-500" value={people} min="1" max="8" onChange={(e) => setPeople(e.target.value)}/>
        </div>
      </div>
      <div class="right-side flex flex-col justify-between bg-[#00474b] w-[333px] h-[337px] rounded-2xl m-[32px] p-[40px] text-white">
        <div><p>Tip amount /person</p><p className="text-white">{tipPerPerson ? `£${tipPerPerson.toFixed(2)}` : null}</p></div>
        <div><p>Bill amount /person {totalPerPerson ? `£${totalPerPerson.toFixed(2)}` : null}</p></div>
        <div class="reset-button" >
          <button type="button" className="bg-[#26c0ab] text-[#00474b] w-[333px] h-[48px] rounded-sm" onClick={handleReset} >Reset</button>
        </div>
      </div>
    </div>
    </div>
)
}

export default Calculator