import './App.css';
import reactLogo from './assets/react.svg';
import { decrement, increment, incrementByAmount, useAppDispatch, useAppSelector } from "./store";
import viteLogo from '/vite.svg';

function App() {

  const { counter } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count {counter}</h1>
      <div className="card">
        <button onClick={() => { dispatch(increment()); }} >
          +1
        </button>
        <button onClick={() => { dispatch(decrement()); }} >
          -1
        </button>
        <button onClick={() => { dispatch(incrementByAmount(+2)); }} >
          +2
        </button>
        <button onClick={() => { dispatch(incrementByAmount(-2)); }} >
          -2
        </button>
      </div>
    </>
  );
}

export default App;
