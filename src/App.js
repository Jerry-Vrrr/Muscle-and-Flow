import React from "react"; 
import "./App.scss"; 
import Nav from "./Components/Nav";
import MainImage from "./Components/MainImage";
import Programs from "./Components/Programs";

function App() { 
return ( 
 <div className="wrapper"> 
  <Nav />
  <MainImage />
  <Programs />
 </div> ); 
} 
export default App;
