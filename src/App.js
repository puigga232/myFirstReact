import "./styles.css";
import { useState } from "react";

export default function App() {
  const [cuenta, setCuenta] = useState(0);
  const [incremento, setIncremento] = useState(1);
  const Aumentar = () => {
    setCuenta(cuenta + parseInt(incremento));
  };
  const Disminuir = () => {
    setCuenta(cuenta - parseInt(incremento));
  };
  const onChange = (evento) => {
    const value = evento.target.value;
    setIncremento(value);
  };
  return (
    <div className="App">
      <h1>Hello AbelP</h1>
      <div>
        <input
          type="number"
          placeholder="Valor por el que incrementar"
          onChange={onChange}
          value={incremento}
        />
      </div>
      <br />
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
