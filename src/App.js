import './App.css';

import { ContextProvider } from './Context/Context';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  return (

    <>
    <ContextProvider>
      <div className="App">
        <NavBar/>
        <Home/>
      </div>
    </ContextProvider>
    </>
    
  );
}

export default App;
