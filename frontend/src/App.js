import { useState } from 'react';
import './App.css';
import BottomSheet from './Components/BottomSheet';

function App() {
  const[show,setShow] = useState(false);
  return (
    <div className="App">
      <button style={{margin:"2% 0%"}} onClick={()=>setShow(!show)}>{show?"Hide Bottom Sheet":"Show Bottom Sheet"}</button>
      {show?<BottomSheet />:null}
    </div>
  );
}

export default App;
