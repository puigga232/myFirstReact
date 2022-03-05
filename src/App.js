import "./styles.css";
import { useState } from "react";

export default function App() {
  const [cuenta, setCuenta] = useState(0);
  const [incremento, setIncremento] = useState(1);
  const Aumentar = () => {
    setCuenta(cuenta + 1);
  };
  const Disminuir = () => {
    setCuenta(cuenta - 1);
  };
  return (
    <div className="App">
      <h1>Hello Abel</h1>
      <div>
        <button onClick={Aumentar}>Aumentar</button>
      </div>
      <br />
      <div>{cuenta}</div>
      <br />
      <div>
        <button onClick={Disminuir}>Disminuir</button>
      </div>
    </div>
  );
}
