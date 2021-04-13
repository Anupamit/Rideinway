


function Rider({desti, source, setSource, setDesti, handleClick, data, handleChange, handleDestiChange }) {
  return (
    <div>
     <header>Rider</header>
     <input
       type="text"
        onChange={handleChange}
        value={source}
      />
      <input
        type="text"
         onChange={handleDestiChange}
         value={desti}
       />
       <button onClick={handleClick}>Sent</button>
    </div>
  );
}

export default Rider;
