import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  
  const handleButtonClick=(value)=>{
    setInput((prevInput) => prevInput + value);
  }

  const handleClear =()=>{
    setInput("");
    setOutput("");
  }

  const handleCalculate=()=>{
    try {
      if (input==="") {
        setOutput("Error: Incomplete Expression");
        return;
      }
      const result = eval(input);
      setOutput(result);
    } catch (error) {
      setOutput("Error");
    }
  }

  return (
    <div style={{
      display: "flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"

    }}>
    <h1>React Calculator</h1>
    <input type="text" value={input} readOnly />
    <div style={{height:"10px"}}>{output}</div>
    <div style={{
      display: "grid",
      gridTemplateColumns:"30px 30px 30px 30px" ,
      gap: "10px",
      marginTop:"20px" 
    }}>
      <button onClick={() => handleButtonClick("7")}>7</button>
      <button onClick={() => handleButtonClick("8")}>8</button>
      <button onClick={() => handleButtonClick("9")}>9</button>
      <button onClick={() => handleButtonClick("+")}>+</button>
      <button onClick={() => handleButtonClick("4")}>4</button>
      <button onClick={() => handleButtonClick("5")}>5</button>
      <button onClick={() => handleButtonClick("6")}>6</button>
      <button onClick={() => handleButtonClick("-")}>-</button>
      <button onClick={() => handleButtonClick("1")}>1</button>
      <button onClick={() => handleButtonClick("2")}>2</button>
      <button onClick={() => handleButtonClick("3")}>3</button>
      <button onClick={() => handleButtonClick("*")}>*</button>
      <button onClick={() => handleButtonClick("0")}>0</button>
      <button onClick={() => handleButtonClick("/")}>/</button>
      <button onClick={handleClear}>C</button>
      <button onClick={handleCalculate}>=</button>
    </div>
  </div>
  );
}

export default App;
