import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Cotizador from "../components/Cotizador";
import InfoMoneda from '../components/InfoMoneda'
import userEvent from "@testing-library/user-event";
import { criptos} from '../__Mocks__/criptomonedas'
import axios from 'axios';

const mockAxios = axios;

 test("<useMonedas />", async () => {


// // consumir datos fake
mockAxios.get=jest.fn().mockResolvedValue({data: criptos})
  render(<Cotizador />);
  //VERIFICAR CANTIDAD DE MONEDAS
  const monedas = screen.findAllByTestId("select-cripto");
  expect(await monedas).toHaveLength(10);

 });

// describe('Logo Moneda', () => {
//   it('Debe Mostrar Logo Moneda', ()=>{
//     render (<InfoMoneda />)
//     expect (screen.getByAltText('logoMoneda')).toBeInTheDocument()
//   })
  
// })
