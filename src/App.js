import './App.css';
import {useStore} from './Store/GlobalStore';

function App() {
  const {counter,setCounter} = useStore();

  return (
    <div className="App">
      <button style={{marginTop:"200px"}} onClick={()=>setCounter(counter+1)}>Click Me</button>
      <br />
      <p style={{marginTop:"20px"}}>{counter}</p>
    </div>
  );
}

export default App;
