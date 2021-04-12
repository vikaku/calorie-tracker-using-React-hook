import React, {useState, useEffect} from 'react';
import './App.css';
const App = () => {

  // const breakfast_cal_limit = 498;
  // const morning_snack_cal_limit = 187;
  // const lunch_cal_limit = 498;
  // const evening_snack_cal_limit = 187;
  // const dinner_cal_limit = 498;

  const [initialValue, setCalorie] = useState(0);
  const [initialBreakFastValue, setBreakFastCalorie] = useState(0);
  const [initialMorningValue, setMorningCalorie] = useState(0);
  const [initialLunchValue, setLunchCalorie] = useState(0);
  const [initialEveningValue, setEveningCalorie] = useState(0);
  const [initialDinnerValue, setDinnerCalorie] = useState(0);
  const [modeBrk, setBrkMode] = useState(true);
  const [modeMrg, setMrgMode] = useState(true);
  const [modeLnch, setLnchMode] = useState(true);
  const [modeEvng, setEvngMode] = useState(true);
  const [modeDin, setDinMode] = useState(true);

  const breakfast = [
    {name: "Cow Milk", cal: "167"},
    {name: "Idli", cal: "48"},
    {name: "Dosa", cal: "302"},
    {name: "Weat Chapati", cal: "146"},
    {name: "Boiled Egg", cal: "86"},
    {name: "Aloo Ka Parantha", cal: "182"},
    {name: "Rice", cal: "117"},
    {name: "Tea", cal: "73"},
    {name: "Filter Coffee", cal: "53"},
    {name: "Dhai", cal: "90"},
    {name: "Mixed Vegetable", cal: "82"},
    {name: "Chicken Curry", cal: "359"},
    {name: "Moong Dal", cal: "352"}
  ];

  const morningSnack = [
    {name: "Cow Milk", cal: "167"},
    {name: "Idli", cal: "48"},
    {name: "Dosa", cal: "302"},
    {name: "Weat Chapati", cal: "146"},
    {name: "Boiled Egg", cal: "86"},
    {name: "Aloo Ka Parantha", cal: "182"},
    {name: "Rice", cal: "117"},
    {name: "Tea", cal: "73"},
    {name: "Filter Coffee", cal: "53"},
    {name: "Dhai", cal: "90"},
    {name: "Mixed Vegetable", cal: "82"},
    {name: "Chicken Curry", cal: "359"},
    {name: "Moong Dal", cal: "352"}
  ];

  const lunch = [
    {name: "Cow Milk", cal: "167"},
    {name: "Idli", cal: "48"},
    {name: "Dosa", cal: "302"},
    {name: "Weat Chapati", cal: "146"},
    {name: "Boiled Egg", cal: "86"},
    {name: "Aloo Ka Parantha", cal: "182"},
    {name: "Rice", cal: "117"},
    {name: "Tea", cal: "73"},
    {name: "Filter Coffee", cal: "53"},
    {name: "Dhai", cal: "90"},
    {name: "Mixed Vegetable", cal: "82"},
    {name: "Chicken Curry", cal: "359"},
    {name: "Moong Dal", cal: "352"}
  ];

  const eveningSnack = [
    {name: "Cow Milk", cal: "167"},
    {name: "Idli", cal: "48"},
    {name: "Dosa", cal: "302"},
    {name: "Weat Chapati", cal: "146"},
    {name: "Boiled Egg", cal: "86"},
    {name: "Aloo Ka Parantha", cal: "182"},
    {name: "Rice", cal: "117"},
    {name: "Tea", cal: "73"},
    {name: "Filter Coffee", cal: "53"},
    {name: "Dhai", cal: "90"},
    {name: "Mixed Vegetable", cal: "82"},
    {name: "Chicken Curry", cal: "359"},
    {name: "Moong Dal", cal: "352"}
  ];

  const dinner = [
    {name: "Cow Milk", cal: "167"},
    {name: "Idli", cal: "48"},
    {name: "Dosa", cal: "302"},
    {name: "Weat Chapati", cal: "146"},
    {name: "Boiled Egg", cal: "86"},
    {name: "Aloo Ka Parantha", cal: "182"},
    {name: "Rice", cal: "117"},
    {name: "Tea", cal: "73"},
    {name: "Filter Coffee", cal: "53"},
    {name: "Dhai", cal: "90"},
    {name: "Mixed Vegetable", cal: "82"},
    {name: "Chicken Curry", cal: "359"},
    {name: "Moong Dal", cal: "352"}
  ];

  function handleDinnerCalorie(val)  {
    setCalorie(preValue => preValue + parseInt(val) );
    
    setDinnerCalorie(preValue => preValue + parseInt(val))
    if(parseInt(initialDinnerValue) > 498){
      setDinMode(false)
    } 
  }

  function handleBreakFastCalorie(val)  {
    setCalorie(preValue => preValue + parseInt(val) );
    setBreakFastCalorie(preValue => preValue + parseInt(val))
    if(parseInt(initialBreakFastValue) > 498){
      setBrkMode(false)
    } 
  }
  function handleMorningCalorie(val)  {
    setCalorie(preValue => preValue + parseInt(val) );
    setMorningCalorie(preValue => preValue + parseInt(val))
    if(parseInt(initialMorningValue) > 187){
      setMrgMode(false)
    } 
  }

  function handleLunchCalorie(val)  {
    setCalorie(preValue => preValue + parseInt(val) );
    setLunchCalorie(preValue => preValue + parseInt(val))
    if(parseInt(initialLunchValue) > 498){
      setLnchMode(false)
    } 
  }

  function handleEveningCalorie(val)  {
    setCalorie(preValue => preValue + parseInt(val) );
    setEveningCalorie(preValue => preValue + parseInt(val))
    if(parseInt(initialEveningValue) > 498){
      setEvngMode(false)
    } 
  }
  
  const breakfast_cal_limit = 498;
  const morning_snack_cal_limit = 187;
  const lunch_cal_limit = 498;
  const evening_snack_cal_limit = 187;
  const dinner_cal_limit = 498;

  return (
    
    <div>
      <strong className= "header"> My Daily Calorie Tracker
        <h1>I consumed {initialValue}/1868 Cal Today</h1>
      </strong>
        <div className ="meal-container">
              <ul>
              <label className = "meal-type">BreakFast ({initialBreakFastValue}/{breakfast_cal_limit} Cal)</label>
              {modeBrk === true ?
              
                  breakfast.map((item,id)=>{
                    return <li  key = {id}
                               onClick = {() => handleBreakFastCalorie(item.cal)} 
                               >
                               {item.name}&nbsp;({item.cal}Cal)</li>
                  })
                 : null }
              </ul>
              <ul>
              <label className = "meal-type">Morning snack ({initialMorningValue}/{morning_snack_cal_limit} Cal)</label>
              {modeMrg === true ?
              
                morningSnack.map((item,id)=>{
                    return <li  key = {id}
                               onClick = {() => handleMorningCalorie(item.cal)} 
                               >
                               {item.name}&nbsp;({item.cal}Cal)</li>
                  })
                 : null }
              </ul>
              <ul>
              <label className = "meal-type">Lunch ({initialLunchValue}/{lunch_cal_limit} Cal)</label>
              {modeLnch === true ?
              
                  lunch.map((item,id)=>{
                    return <li  key = {id}
                               onClick = {() => handleLunchCalorie(item.cal)} 
                               >
                               {item.name}&nbsp;({item.cal}Cal)</li>
                  })
                 : null }
              </ul>
              <ul>
              <label className = "meal-type">Evening Snacks ({initialEveningValue}/{evening_snack_cal_limit} Cal)</label>
              {modeEvng === true ?
              
                eveningSnack.map((item,id)=>{
                    return <li  key = {id}
                               onClick = {() => handleEveningCalorie(item.cal)} 
                               >
                               {item.name}&nbsp;({item.cal}Cal)</li>
                  })
                 : null }
              </ul>

        
                <ul>
                <label className = "meal-type">Dinner ({initialDinnerValue}/{dinner_cal_limit} Cal)</label>
                  { modeDin === true ?
                    dinner.map((item,id)=>{
                      return <li key = {id} onClick = {() => handleDinnerCalorie(item.cal)} >{item.name}&nbsp;({item.cal}Cal)</li>
                    })
                   : null}
                </ul>
          </div>
       
    </div>
  );
}

export default App;
