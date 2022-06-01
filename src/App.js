import logo from './logo.svg';
import './App.css';
import {ThemeContext} from "./contents/ThemeContext.jsx"
import { useContext } from "react";

 function App() {
   const {status,handleStatus} = useContext(ThemeContext);
  return (
    // App-Light  App-header
    <div className="App">
      <header className={status ? "App-Light" : "App-header"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={{padding:" 15px 55px 15px 55px",fontSize:"22px", borderRadius:"8px"}} onClick={handleStatus}>{status ? "Dark" : "Light"}</button>
        <h1>{status ? "Switch To Dark Mode" : "Switch To Light Mode"}</h1>
      </header>
    </div>
  );
}


export default App;