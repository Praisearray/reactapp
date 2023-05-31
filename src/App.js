import { useState } from "react";
import "./App.css";
import DiscussProjectModal from "./components/DiscussProjectModal/DiscussProjectModal";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Navbar setOpenModal={setOpenModal} />
      <HomePage />
      <DiscussProjectModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
      <Footer setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
