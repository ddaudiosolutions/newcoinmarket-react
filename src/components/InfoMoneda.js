

import { Fragment } from "react"
import {Card} from 'react-bootstrap'



const InfoMoneda = ({infoMoneda}) => {

    const unaHora = Number(infoMoneda.price_change_percentage_1h_in_currency).toFixed(3);    
    const horas24 = Number(infoMoneda.price_change_percentage_24h_in_currency).toFixed(3);  
    const dias7 = Number(infoMoneda.price_change_percentage_7d_in_currency).toFixed(3);
   
    
   return ( 

            <Fragment>                
                <Card.Body>                             
                    <Card.Img className='d-block image-thumbnail mx-auto' style={{maxWidth:'8rem'}} src={infoMoneda.image} alt='logoMoneda' />
                    <Card.Title className='text-center mt-3'>                   
                        <h2>{infoMoneda.name}</h2>
                    </Card.Title>  
                
                 <Card.Title className='text-center mt-3'>                    
                        <h5>Current Price: {infoMoneda.current_price}€</h5> 
                    </Card.Title>                    
               

                     <Card.Title style={{"backgroundColor": (unaHora <= 0 ? "red" : "#39d809")}} className='text-center mt-3 '>
                         <h5 > Price Change (1h) {unaHora} % </h5>
                        </Card.Title>                    
                    
                    <Card.Title style={{"backgroundColor": (horas24 <= 0 ? "red" : "#39d809")}} className='text-center mt-3'>
                        <h5>Price Change (24h) {horas24} % </h5>
                    </Card.Title>  

                    <Card.Title style={{"backgroundColor": (dias7 <= 0 ? "red" : "#39d809")}} className='text-center mt-3'>
                        <h5>Price Change (7d) {dias7} %</h5>
                    </Card.Title>    
                    
                </Card.Body>
            </Fragment>
        
         );
}
 
export default InfoMoneda;