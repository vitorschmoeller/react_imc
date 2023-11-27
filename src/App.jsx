import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
function App() {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0);
    const [imc,setImc] = useState(0);
    const [mostraImc,setMostraImc] = useState(false);
    const alturaFloat = parseFloat(altura);
    const pesoFloat = parseFloat(peso);

    
      function calculaImc(){
        const atribui = pesoFloat/Math.pow(alturaFloat,2);
        setImc(atribui);
      }
      function pesoIdeal(){
        const imcArredondado = imc.toFixed(2);
        if(imc > 30){
          return(
            <>
            <h2>IMC: {imcArredondado}</h2>
            <h3 className='redflag'>Você está obeso</h3>
            </>
          )
        }else if(imc >=25){
          return(
            <>
            <h2>IMC: {imcArredondado}</h2>
            <h3 className='redflag'>Você está Sobrepeso</h3>
            </>
          )
        }else if(imc >= 18.5){
          return(
            <>
            <h2 className='green'>IMC: {imcArredondado}</h2>
            <h3>Você está normal</h3>
            </>
          )
        }else {
          return(
            <>
            <h2 className='redflag'>IMC: {imcArredondado}</h2>
            <h3>Você está com baixo peso</h3>
            </>
          )
        }
      }

      // const hellen = () =>{
      //   if(alturaFloat == 1.56){
      //     return(
      //       <h1>Tu é um mamão</h1>
      //     )
      //   }
      // }

  return (
    <>
    <body>
      
    
    <div className='container d-flex align-items-center justify-content-center'>
    
      <form className='form-group '>
        <h1 className=' d-flex justify-content-center mb-5'>Calculadora Imc</h1>
        <div className='row'>
        
          <div className='col-12'>
            <label className='ms-1 mb-1' htmlFor="peso">Digite seu peso:</label>
          <input required onChange={evento => setPeso(evento.target.value)} id='peso' className='form-control mb-2' type="text" placeholder='digite seu peso' />
          <label className='ms-1 mb-1' htmlFor="peso">Digite sua altura:</label>
          <input required onChange={evento => setAltura(evento.target.value)} className='form-control' type="text"  placeholder='digite sua altura' />
          </div>
          </div>
          
        <button onClick={evento =>{
          calculaImc();
          setMostraImc(!mostraImc)
        }} className='mt-3 btn btn-dark' type="button">Calcular</button>
        
        {mostraImc && (
          // <h1>{pesoFloat/Math.pow(alturaFloat,2)}  {imc}</h1>
          <>
          
          {pesoIdeal()}
          
          </>
        )}
        
      </form>
    </div>
    </body>
    </>
  )
}

export default App
