import Header from "./Header";
import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Rider from "./Rider"
import Driver from "./Driver"

function App() {
  const [ source, setSource ] = useState("")
  const [ desti, setDesti ] = useState("")
  const [driverSource, setDriverSource] = useState("")
  const [ driverDesti, setDriverDesti ] = useState("")
  const [ data, setData]= useState([])
  const [ driveData, setDriverData]= useState([])

  const handleClick = () => {
    const arr = []
    let dt = {
      source,
      desti
    }
    arr.push(dt)
    setData([...data,...arr])
    setSource("")
    setDesti("")
  }

  const handleDriverClick = () => {
    const arr = []
    let dt = {
      driverSource,
      driverDesti
    }
    arr.push(dt)
    setDriverData([...driveData,...arr])
    setDriverSource("")
    setDriverDesti("")
  }

  const handleChange = (e) => setSource(e.target.value)
  const handleDestiChange = (e) => setDesti(e.target.value)
  const handleDriverSource = (e) => setDriverSource(e.target.value)
  const handleDriverDestiChange = (e) => setDriverDesti(e.target.value)
  console.log("data", data)
  return (
    <>
    <Header />

    <div className="App">
    <Rider
      source={source}
      desti={desti}
      driveData={driveData}
      setSource={setSource}
      setDesti={setDesti}
      setData={setData}
      handleChange={handleChange}
      handleDestiChange={handleDestiChange}
      handleClick={handleClick}
    />
    <Driver
    driverSource={driverSource}
    driverDesti={driverDesti}
    data={data}
    handleDriverSource={handleDriverSource}
    handleDriverDestiChange={handleDriverDestiChange}
    handleDriverClick={handleDriverClick}
    />
    </div>
    </>
  );
}

export default App;
