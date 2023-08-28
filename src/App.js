import react, { useState } from "react";
import "./App.scss";
import Nav from "./Components/Nav";
import MainImage from "./Components/MainImage";
import Programs from "./Components/Programs";
import Who from "./Components/Who";
import ImageCarousel from "./Components/ImageCarousel";
import SignupModal from "./Components/SignupModal";

function App() {
  const [modalIsOpen, setIsOpen] = react.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="wrapper">
      <Nav />
      <SignupModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <MainImage setIsOpen={setIsOpen} openModal={openModal} />
      <Programs setIsOpen={setIsOpen} openModal={openModal} />
      <Who />
      <ImageCarousel />
    </div>
  );
}
export default App;
