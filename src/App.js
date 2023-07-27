import Axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function App() {
 
const [text,setText]=useState("")
const dsss=(a)=>{
  setText(a)
}
  return (
    <div>
     
        <h4>React Dropdown Component</h4>
        <Dropdown>
          <Dropdown.Toggle variant="success">Open Menu</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>{dsss("Home")}}>Home Page</Dropdown.Item>
            <Dropdown.Item  onClick={()=>{dsss("Setting")}}>Settings</Dropdown.Item>
            <Dropdown.Item  onClick={()=>{dsss("Logout")}}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h1 style={{ position: 'relative' }}>{text}</h1>
      </div>
 
  );
}

export default App;
