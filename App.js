// import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const[weight, setWeight] = useState(0);
  const[height, setHeight] = useState(0);
  const[bmi, setBmi] = useState('');
  const[message, setMessage] = useState('');

  //Logic 
   let calcBmi = (e) => {
    e.preventDefault();
    if(weight===0 || height===0)
    {
      alert('please enter a valid weight and height')
    }
    else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('you are underweight')
      }
      else if (bmi>=25 && bmi <30){
        setMessage('you are a healthy weight')
      }

      else{
        setMessage('you are overweight')
      }
    }
   }

//reload
let reload = () => {
  window.location.reload()
}



  return (
    <div className="App">

      <div className='container'>
        <h2>BMI Calculators</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label>
            <input 
            type="text"
             placeholder="Enter weight Value"
             value={weight}
             onChange={(e) => setWeight(e.target.value)}
              />
          </div>
          <div>
            <label>Height (in)</label>
            <input type="text" placeholder="Enter weight Value" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
             />
          </div>

          <div>
            <button className='btn' type='submit'> Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'>
            <h3>Your BMI is {bmi}</h3>
            <p> {message}</p>
          </div>
        </form>
      </div>



    </div>
  );
}

export default App;
