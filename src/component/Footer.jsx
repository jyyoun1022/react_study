import React, { useState  } from "react";

function Footer({ address , callback}) {
  const [vars, setVars] = useState(0);

  
  const inputFooter = (e) => {
    callback(e.target.value);
    setVars(e.target.value);
  };
  return (
    <div>
      <input onChange={inputFooter}></input>
      <h1>Footer</h1>
      <p>{address}</p>

      <h3>{vars}</h3>
    </div>
  );
}

export default Footer;
