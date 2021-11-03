//importar las utilidades de react testing libray, 
//el componente que voy a testear (aunque aún no exista) 
//y comenzar con mi primera prueba.

import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import '@testing-library/jest-dom' //NECESARIO PARA TOBEINTHEDOCUMENT()
import Cotizador from '../components/Cotizador'
import InfoMoneda from '../components/InfoMoneda'

beforeEach(()=> render(<Cotizador />)) //para no estar con render en cada prueba

test('Cotizador mount', ()=> {
        expect(screen.getByText('COTIZADOR DE MONEDAS')).toBeInTheDocument()
       // await waitForElementToBeRemoved(()=>screen.queryByText(/loading/i))
   
});

test('Cotizador Imagen', ()=> {    
        expect(screen.getByAltText('cotizadorLogoMain')).toBeInTheDocument()
    
});

// describe('Logo Moneda', ()=>{
//     it('Debe mostrar el Logo de la Moneda',()=>{
//         render(<InfoMoneda />)
//         expect(screen.getByAltText('logoMoneda')).toBeInTheDocument()
//     })
// })