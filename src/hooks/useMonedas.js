import { Fragment, useState } from "react";

const useMonedas = (label, stateInicial, listacripto) => {
  //console.log (stateInicial)
  //STATE DEL CUSTOM HOOK
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => {
    return (
      <Fragment>
        <select
          className="form-select"
          onChange={(e) => {
            actualizarState(e.target.value);
          }}
          value={state}
          
        >
          <option value="">Selecciona Tu CriptoMoneda</option>
          {listacripto.map((cripto) => (
            <option data-testid='select-cripto' key={cripto.id} value={cripto.id}>
              {cripto.name}
            </option>
          ))}
        </select>
      </Fragment>
    );
  };
  //RETORNAMOS EL STATE, LO QUE SE VERÁ EN PANTALLA, Y FN QUE MODIFICA EL STATE
  return [state, Seleccionar, actualizarState];
};

export default useMonedas;
