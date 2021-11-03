import { Fragment } from "react";
import { Line } from "react-chartjs-2";

const GraficoMensual = ({moneda, graficoMoneda }) => {

    let dataPointsV = [];
    let dataSetTime = [];
    
if( graficoMoneda === [""]) return null;

  for (let i = 0; i < graficoMoneda.length; i++) {
    let fecha = graficoMoneda[i][0];
    let fechas = new Date(fecha);
    let myDate = fechas.getUTCDate() + "/" + (fechas.getMonth() + 1);
    dataSetTime.push(myDate);
    //console.log(dataSetTime)
  }
//CONVERTIMOS LOS VALORES DE COTIZACIÓN A NUMBERS
  for (let i = 0; i < graficoMoneda.length; i++) {
    // let fecha = graficoMoneda.prices[i][0]
    let precio = Number(graficoMoneda[i][1]).toFixed(3);
    dataPointsV.push(precio);
    
  }  
  //console.log(dataPointsV)
  var numbersV = dataPointsV.map(Number)
   //console.log(typeof numbersV)
   
   
//SIMPLIFICAMOS LAS FECHAS

const datesProm = [chunk(dataSetTime, 24)]

   function chunk (dataSetTime) {
    const datesProm = [];
    for ( let i = 0; i < dataSetTime.length; i++){       
        datesProm.push([dataSetTime[i]])
    }
    return datesProm
   }
  //console.log(datesProm[0].length)
   const datesPromMedio = []
   //sumamos los 24 valores de cada array
   for (let i = 0; i<datesProm[0].length; i++){
     let total = datesProm[0][i];    
     datesPromMedio.push(total[0])
   }
   //ELIMINAMOS EL ÚLTIMO ELEMENTO DEL ARRAY PARA QUE NO DE UN ERROR EN EL PROMEDIO
   datesPromMedio.pop()
  // console.log(datesPromMedio)

//ARREGLAR LA SIMPLIFICACION DE DATOS DEL GRAFICO PARA NO COLAPSAR LA LINEA.
//dividimos el array en subarrays de 24 valores (un dia completo de 24 horas)

    
const datosProm = [chunkProm(numbersV, 24)]
  
  function chunkProm (numbersV, size) {

    const datosProm = [];
    for ( let i = 0; i < numbersV.length; i++){
      const last = datosProm[datosProm.length - 1];
      if(!last || last.length === size) {
        datosProm.push([numbersV[i]])
      }
      else {
        last.push(numbersV[i])
      }

    }
    return datosProm
   }
   
  
   //console.log(datosProm[0])
   const datosPromMedia = []
   //sumamos los 24 valores de cada array
   for (let i = 0; i<datosProm[0].length; i++){
   
     let total = datosProm[0][i].reduce((a, b) => a + b, 0);
    //console.log(total)
     const datosMediados = total/24;
     datosPromMedia.push(datosMediados)
    // console.log(datosPromMedia)
    //ELIMINAMOS EL ÚLTIMO ELEMENTO DEL ARRAY PARA QUE NO DE UN ERROR EN EL PROMEDIO
    if(datosPromMedia[30] < datosPromMedia[29])
    {
      datosPromMedia.pop()
    }
   }
  
   

    

  var colors = [
    "#007bff",
    "#0097fc",
    "#333333",
    "#c3e6cb",
    "#dc3545",
    "#ed872d",
  ];

  return (
    <Fragment>
      <div className="">
        <Line
          data={{
            labels: datesPromMedio,
            datasets: [
              {
                borderWidth: 0,
                label: "Valor Promedio Diario",
                data: datosPromMedia,
                backgroundColor: "transparent",
                borderColor: colors[1],
                pointStyle: "circle",
              },
            ],
          }}
          width={600}
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {                     
                    //beginAtZero: true,
                    //stepSize: 10000
                  },
                },
              ],
              // xAxes: [
              //   {
              //     type: "time",
              //     time: { 
              //         displayFormats:{
              //             day: 'MMM D'
              //         }                
                    
                    
              //     },
              //   },
              // ],
            },
          }}
        />
      </div>
    </Fragment>
  );
};

export default GraficoMensual;
