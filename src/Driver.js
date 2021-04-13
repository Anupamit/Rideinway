
function Driver({driverSource, driverDesti, handleDriverSource, data, handleDriverDestiChange, handleDriverClick}) {
  return (

    <div>
     <header>Driver</header>
     <input
       type="text"
        onChange={handleDriverSource}
        value={driverSource}
      />
      <input
        type="text"
         onChange={handleDriverDestiChange}
         value={driverDesti}
       />
       <button onClick={handleDriverClick}>Sent</button>

    <div>
      {data.map(dt => (
        <div>
         <p>{dt.source} to {dt.desti}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Driver;
