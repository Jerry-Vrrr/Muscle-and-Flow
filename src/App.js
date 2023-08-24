import React from "react"; 
import "./App.scss"; 
import Nav from "./Components/Nav";
import MainImage from "./Components/MainImage";
import Programs from "./Components/Programs";
import Who from "./Components/Who";

function App() { 
return ( 
 <div className="wrapper"> 
  <Nav />
  <MainImage />
  <Programs />
  <Who />
 </div> ); 
} 
export default App;
