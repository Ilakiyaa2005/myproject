import React, { useState } from "react";

function App() {
  const [usd, setUsd] = useState("");
  const [inr, setInr] = useState("");

  const convertToINR = () => {
    setInr((usd * 83).toFixed(2)); // Example rate: 1 USD = 83 INR
  };

  return (
    <>
      <h1>Currency Converter</h1>
      <input
        placeholder="USD"
        value={usd}
        onChange={(e) => setUsd(e.target.value)}
      />
      <button onClick={convertToINR}>Convert to INR</button>
      {inr && <p>INR: {inr}</p>}
    </>
  );
}

export default App;