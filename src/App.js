import React from "react"; 
import "./App.scss"; 
import Nav from "./Components/Nav";
import MainImage from "./Components/MainImage";
import Programs from "./Components/Programs";
import Who from "./Components/Who";
import ImageCarousel from "./Components/ImageCarousel";

function App() { 
return ( 
 <div className="wrapper"> 
  <Nav />
  <MainImage />
  <Programs />
  <Who />
  <ImageCarousel />
 </div> ); 
} 
export default App;
