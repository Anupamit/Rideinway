import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';
import Rider from "./Rider"
import Driver from "./Driver"

function App() {
  const [ source, setSource ] = useState("")
  const [ desti, setDesti ] = useState("")
  const [ data, setData]= useState([])

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

  const handleChange = (e) => setSource(e.target.value)
  const handleDestiChange = (e) => setDesti(e.target.value)
  console.log("data", data)
  return (
    <div className="App">
    <Rider
      source={source}
      desti={desti}
      data={data}
      setSource={setSource}
      setDesti={setDesti}
      setData={setData}
      handleChange={handleChange}
      handleDestiChange={handleDestiChange}
      handleClick={handleClick}
    />
    <Driver
    source={source}
    desti={desti}
    data={data}
    setSource={setSource}
    setDesti={setDesti}
    setData={setData}
    handleChange={handleChange}
    handleDestiChange={handleDestiChange}
    handleClick={handleClick}
    />
    </div>
  );
}

export default App;
