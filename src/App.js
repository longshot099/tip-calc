import React,{useRef,useEffect,useState} from 'react';
import Bill from './Components/Bill'
import TipPercent from './Components/TipPercent'
import PeopleCount from './Components/PeopleCount'
import './App.css';

function App() {
  const billRef = useRef();
  const tipPercentRef = useRef();
  const peopleCountRef = useRef();
  const tipRef = useRef();
  const totalRef = useRef();

  const outputTip = useRef(); // = (tipPercent / 100) * bill
  const outputTotal = useRef(); //  = bill + tip
  
  // STATES
  let [bill,setBill] = useState(0);
  let [tipPercent,setTipPercent] = useState(15);
  let [people,setPeople] = useState(1);

function calculate(){
  let tip = (tipPercent/100) * bill;
  let totalEach = (bill + tip)/people; // total each person have to pay if more than 1 person

  if(people > 1){
    tip = tip/people;
    tipRef.current.innerHTML =  `Tip <span class = 'per-person'>per person</span>: $${tip.toFixed(2)}`
    totalRef.current.innerHTML =  `Total <span class = 'per-person'>per person</span>: $${totalEach.toFixed(2)}`
  }
  else{
  tipRef.current.innerHTML =  `Tip:$${tip.toFixed(2)}`
  totalRef.current.innerHTML =  `Total:$${totalEach.toFixed(2)}`
  }
}

  function billEvent(){
    setBill(parseFloat(Math.abs(billRef.current.value)))
  }

  function billFocusOut(){
    let positiveBill = Math.abs(billRef.current.value);
    billRef.current.value = positiveBill; 
    calculate();
  }

  function tipPercentEvent(){
    setTipPercent(parseInt(Math.abs(tipPercentRef.current.value)));
  }
  
  function tipFocusOut(){
    // we only want the tip percentage to be an INTEGER
    // detects if tipPercent is a decimal, if so then round it to nearest int
    let positiveTip = Math.abs(tipPercentRef.current.value);
    tipPercentRef.current.value = positiveTip;

    if(parseFloat(tipPercentRef.current.value) % 1 != 0){ 
      tipPercentRef.current.value = Math.round(Math.abs(tipPercentRef.current.value));
      setTipPercent(parseInt(Math.abs(tipPercentRef.current.value)));
    }
    calculate();
  }   
  function peopleEvent(){
    setPeople(parseInt(Math.abs(peopleCountRef.current.value)));
  }

  function peopleFocusOut(){
    let positiveCount = Math.abs(peopleCountRef.current.value)
    peopleCountRef.current.value = positiveCount;
    if(parseFloat(peopleCountRef.current.value) % 1 != 0){
      peopleCountRef.current.value = Math.floor(peopleCountRef.current.value);
      setPeople(parseInt(Math.abs(peopleCountRef.current.value)));
    }
    calculate();
  }
  function noDelete(e){
    // prevent backspace from executing 
    if(e.keyCode == '8')
      e.preventDefault();
  }

  //----------------------render----------------------------------------///
  return (
    <div className = 'app'>
      <Bill onChange = {billEvent} onBlur = {billFocusOut}ref = {billRef} placeholder = 'Total amount'/>
      <TipPercent onKeyDown = {noDelete}onBlur = {tipFocusOut} onChange = {tipPercentEvent} ref = {tipPercentRef}/>
      <PeopleCount onKeyDown = {noDelete} onChange ={peopleEvent} onBlur = {peopleFocusOut} ref = {peopleCountRef}/>

      <div className = 'tip'>
      <h1 ref = {tipRef}>Tip:<span ref = {outputTip}></span></h1>
      </div>

      <div className = 'total'>
        <h1 ref = {totalRef}>Total:<span ref = {outputTotal}></span></h1>
      </div>
    </div>
  );
}

export default App;
