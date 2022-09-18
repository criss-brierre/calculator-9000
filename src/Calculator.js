import logo from './logo.svg';
import './Calculator.css';
import Screen from './Component/BeautifulScreen/BeautifulScreen';
import ButtonNumber from './Component/AmazingNumberButton/AmazingNumberButton';
import ButtonOperation from './Component/GreatOperationButton/GreatOperationButton';
import Equal from './Component/MagnificientEqualButton/MagnificientEqualButton';
import Ac from './Component/MagnificientAcButton/MagnificientAcButton';
import Save from './Component/MagnificientSaveButton/MagnificientSaveButton';
import OverComp from './Component/ItSOverNineThousand/ItSOverNineThousand';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
var stringMath = require('string-math');



const Calculator = () => {
  const [number, setNumber] = useState([]);
  const [Result, setResult] = useState("");
  const [TempNumber, setTempNumber] = useState([]);

  const Savebdd = async () => {
    // POST request using axios with async/await
    if (Result == "" && TempNumber.length == 0){
      alert("Vous devez faire un calcul avant d'utiliser le bouton SAVE")
    } else {
    const calc = TempNumber.join("");
    const resultat = Result;
    const CalcSave = { Calc: calc, Resultat: resultat};
    const response = await fetch("http://localhost/SaveCalcScript/SaveCalcScript.php", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc. // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, // manual, *follow, error // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(CalcSave) // body data type must match "Content-Type" header
    });
  }
  }

 

  const Calc = () => {
    let TabNum = [...number];
    if (isNaN(TabNum[TabNum.length -1])){
      TabNum.pop();
    }

  setResult(stringMath(TabNum.join("")));
  setTempNumber(number);
    var temp = [];
    setNumber(temp);
    let partial = TabNum.join("");
  }
  const Reset = () => {
    let temp = [];
    setNumber(temp);
    setResult(0);
  }

  const Over9000 = () => {
    if (parseFloat(Result) >9000) {
      return true;
    } else {
      return false;
    }
  }

  const changeNumb = (newNumb) => {
    if (isNaN(number[number.length -1])&& number.length > 0){
      if(isNaN(newNumb)){
        var temp = [...number];
        temp.pop();
        setNumber(temp);
        setNumber([...temp, newNumb]) 
      } else {
        setNumber([...number, newNumb])
      }
    }else {
      setNumber([...number, newNumb])
    }
    }
  
   

  return(
    <div className="container">
      <h1  className= "Title">Calculator9000</h1>
  <div className="calc-body">
     <><Screen value = {number} value2 = {Result}/><ButtonOperation numb={changeNumb}/> <ButtonNumber numb={changeNumb}/>  
     <div className="calc-button-row">
     <Ac reset = {Reset}/> <Save saveBeggin = {Savebdd} /> <Equal calc = {Calc}/> 
     </div>
     </>
     </div>
     <OverComp IsOver = {Over9000}/>
     
     </div>
     );
}
export default Calculator;
