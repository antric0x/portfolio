import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from 'react'
import './App.css'
import Greeting from './Greeting.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
  </StrictMode>,
);

export default App
