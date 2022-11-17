import './App.css';
import { useState } from 'react'
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

function App() {
  const [login, setLogin] = usestate(null)

  return (
    <div className="App">
      <Header />
      <NavBar />
    </div>
  );
}

export default App;