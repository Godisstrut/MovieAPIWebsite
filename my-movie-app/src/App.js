import './App.css';
import MovieCard from './MovieCard';
import { useState } from 'react'; 

function App() {
  const [age, setAge] = useState(0);
  
  const IncreaseAge = () => {
    setAge(age + 1);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }
  return (
    <div className="App">
      <MovieCard name="Sagan om ringen" />
      <User name="Erik" age={28} email="erik@gmail.com" />
      <User name="Karin" age={26} email="karin@gmail.com" />
      {age}
      <button onClick={IncreaseAge} >Increase age</button>
      <input type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h1> {props.age} </h1>
      <h1> {props.email} </h1>
    </div>
  );
}

export default App;
