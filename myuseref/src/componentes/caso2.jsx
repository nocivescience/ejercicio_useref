import React, { useRef } from 'react';

function Example() {
  // Crea 3 referencias para almacenar 3 valores distintos
  const inputValue = useRef('');
  const checkboxValue = useRef(false);
  const selectValue = useRef('option-1');

  // Actualiza el valor de la referencia del elemento de entrada de texto cuando se escribe en él
  const handleInputChange = (event) => {
    inputValue.current = event.target.value;
  };

  // Actualiza el valor de la referencia del elemento de selección cuando se cambia su valor
  const handleSelectChange = (event) => {
    selectValue.current = event.target.value;
  };

  // Actualiza el valor de la referencia del elemento de checkbox cuando se hace clic en él
  const handleCheckboxChange = () => {
    checkboxValue.current = !checkboxValue.current;
  };

  return (
    <>
      <input ref={inputValue} type="text" onChange={handleInputChange} />
      <br />
      <select ref={selectValue} onChange={handleSelectChange}>
        <option value="option-1">Opción 1</option>
        <option value="option-2">Opción 2</option>
        <option value="option-3">Opción 3</option>
      </select>
      <br />
      <input ref={checkboxValue} type="checkbox" onChange={handleCheckboxChange} />
    </>
  );
}
export default Example;