import { useState, useEffect } from 'react';
import axios from 'axios'
import Cotizador from './components/Cotizador'
//import InfoMoneda from './components/InfoMoneda';
import './App.css';
//import useMonedas from './hooks/useMonedas';

function App() {

  //LISTAR LAS OPCIONES DE MONEDAS SELECCIONADAS.
//let listadoMonedas = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
//console.log(listadoMonedas)

//CREAMOS EL STATE PARA PEDIR AL FORMULARIO LA CRIPTO SELECCIONADA Y GUARDARLA EN EL STATE
//SE LA PASAMOS AL COMPONENTE COTIZADOR
  const [criptomoneda, setCriptomoneda] = useState ('')

  const [infoMoneda, setInfoMoneda] = useState({})

  const [graficoMoneda, setGraficoMoneda] = useState([''])

    useEffect(()=> {
      const consultarAPIMoneda = async () => {
        if(criptomoneda === "") return null;
       // console.log(criptomoneda)
        let urlMoneda = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${criptomoneda}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
      
        const datosMoneda = await axios.get(urlMoneda)
        setInfoMoneda(datosMoneda.data[0])      
      }


      const consultarAPIGraficoMoneda = async () => {
        if(criptomoneda === "") return null;

        let urlGrafico = `https://api.coingecko.com/api/v3/coins/${criptomoneda}/market_chart?vs_currency=usd&days=30`;
      
        const datosGraficosMoneda = await axios.get(urlGrafico)
        //console.log(datosGraficosMoneda.data)
        setGraficoMoneda(datosGraficosMoneda.data.prices)
      }

      consultarAPIMoneda();
      consultarAPIGraficoMoneda() 

    }, [criptomoneda])

    //console.log(graficoMoneda)
  
  return (
    <div>
      <Cotizador 
        setCriptomoneda = {setCriptomoneda}
        infoMoneda = {infoMoneda}
        graficoMoneda = {graficoMoneda}

      />

        
    
    
      
    </div>
  );
}

export default App;
