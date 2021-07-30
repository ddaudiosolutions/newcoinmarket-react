import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import useMonedas from "../hooks/useMonedas";
import axios from "axios";
import InfoMoneda from "./InfoMoneda";
import GraficoMensual from "./GraficoMensual";

//FORMULARIO
const Cotizador = ({ setCriptomoneda, infoMoneda, graficoMoneda }) => {
  //STATE DE CRIPTOMONEDAS
  const [listacripto, setListacripto] = useState([]);

  //UAMOS EL CUSTOM HOOK USEMONEDAS()
  const [moneda, SeleccionarMoneda] = useMonedas("", "", listacripto);
  //console.log(moneda)

  //EJECUTAMOS LA
  useEffect(() => {
    const consultarAPI = async () => {
      let listadoMonedas =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";

      const resultado = await axios.get(listadoMonedas);
      setListacripto(resultado.data); //MANDA LAS 10 MONEDAS A LISTACRIPTO
      //console.log(listacripto)
    };
    consultarAPI();
    //setCriptomoneda(moneda);
  }, [moneda]);

  return (
    <div className="container d-flex  justify-content-center align-items-center mt-5">
      <div className="row">
        <div className="col-md-12 ">
          <div className="card shadow">
            <img
              className="card-image-top"
              src="/Cryptocurrency-arbitration.jpg"
              alt="cotizadorLogo"
            />
            <Card.Body>
              <Card.Title className="text-center">
                COTIZADOR DE MONEDAS
              </Card.Title>
              <form
                onChange={setCriptomoneda(moneda)}
                >
                    <SeleccionarMoneda />
              </form>
              

              {moneda !== "" ? (
                <InfoMoneda infoMoneda={infoMoneda} />
              ) : null}
             
               {moneda !== "" ? (
                  <GraficoMensual 
                  graficoMoneda = {graficoMoneda}
                  moneda = {moneda} />  
                                ) : null}         
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizador;
