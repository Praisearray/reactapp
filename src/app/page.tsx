'use client'

import { useState } from "react";
import DiscussProjectModal from "./components/DiscussProjectModal/DiscussProjectModal";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Navbar setOpenModal={setOpenModal} />
      <HomePage />
      <DiscussProjectModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
      <Footer setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
