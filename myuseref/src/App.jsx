import React, { useRef } from 'react';
import Example from './componentes/caso2';

function App() {
  // Crea 3 referencias para almacenar 3 elementos del DOM distintos
  const inputEl1 = useRef(null);
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);

  // Establece el foco en el primer elemento del DOM cuando se hace clic en el botón
  const handleClick1 = () => inputEl1.current.focus();

  // Establece el foco en el segundo elemento del DOM cuando se hace clic en el botón
  const handleClick2 = () => inputEl2.current.focus();

  // Establece el foco en el tercer elemento del DOM cuando se hace clic en el botón
  const handleClick3 = () => inputEl3.current.focus();

  return (
    <>
      <input ref={inputEl1} type="text" />
      <button onClick={handleClick1}>Dar foco al primer input</button>
      <br />
      <input ref={inputEl2} type="text" />
      <button onClick={handleClick2}>Dar foco al segundo input</button>
      <br />
      <input ref={inputEl3} type="text" />
      <button onClick={handleClick3}>Dar foco al tercer input</button>
      <Example/>
    </>
  );
}
export default App;