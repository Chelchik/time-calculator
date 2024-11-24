import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNumber } from './features/inputValueSlice';
import { timesInDays, timesInHours, timesInMinutes, timesInWeek } from './features/submitSlice';

function App() {
  const inputValue = useSelector(selectNumber);
  const timeInWeek = useSelector(timesInWeek);
  const timeInDays = useSelector(timesInDays);
  const timeInHours = useSelector(timesInHours);
  const timeInMinutes = useSelector(timesInMinutes);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    console.log(inputValue);

    dispatch({
      type: "INPUT_VALUE",
      payload: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "submit",
      payload: inputValue
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder='Enter Number' id='time-input' value={inputValue} onChange={handleInput} />

        <input type="submit" id='submit' value='Enter' />

        <h3>{inputValue}</h3>

        <h3>Time in week: {(timeInWeek)}</h3>
        <h3>Time in Days: {(timeInDays)}</h3>
        <h3>Time in Hours: {(timeInHours)}</h3>
        <h3>Time in Minutes: {(timeInMinutes)}</h3>

      </form>
    </div>
  );
}

export default App;
