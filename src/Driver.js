
function Driver({desti, source, setSource, setDesti, handleClick, data, handleChange, handleDestiChange}) {
  return (

    // <div>
    //  <header>Driver</header>
    //  <input
    //    type="text"
    //     onChange={handleChange}
    //     value={source}
    //   />
    //   <input
    //     type="text"
    //      onChange={handleDestiChange}
    //      value={desti}
    //    />
    //    <button onClick={handleClick}>Sent</button>
    // </div>

    <div>
      {data.map(dt => (
        <div>
         <p>{dt.source} to {dt.desti}</p>
        </div>
      ))}
    </div>
  );
}

export default Driver;
