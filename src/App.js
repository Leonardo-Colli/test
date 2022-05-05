//import React, { Component } from 'react';
//import api from './api';
import {useEffect, useState} from 'react';
import axios from 'axios';
import TarjetaRestaurantes from './TarjetaRestaurantes';
import TarjetaBares from './TarjetaBares';

const App = () =>{

  const [restaurantes, setListadoRestaurantes] = useState([]);
  const [bares, setListadoBares] = useState([]);
  
  useEffect(()=>{

    const obtenerRestaurantes = async () =>{
      const url ='http://3.219.136.91:8080/api/restaurantes';
      const result = await axios.get(url);

      setListadoRestaurantes(result.data)
    }
    obtenerRestaurantes()
  },[])

  useEffect(()=>{

    const obtenerBares = async () =>{
      const url ='http://3.219.136.91:8080/api/bares';
      const result = await axios.get(url);

      setListadoBares(result.data)
    }
    obtenerBares()
  },[])

 
  return(
    
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col">
          <h1 className="mt-5">Restaurantes</h1>
          {restaurantes.length ===0 && <p>Cargando...</p>}
          {
            restaurantes.map((personas, i)=>{
              return(
               <TarjetaRestaurantes  data={personas} key={personas.id}/>
              )
            })
          }
        </div>
        <div className="col">
        <h1 className="mt-5">Bares</h1>
          {bares.length ===0 && <p>Cargando...</p>}
          {
            bares.map((personas, i)=>{
              return(
                <TarjetaBares  data={personas} key={personas.id}/>
              )
            })
          }
        </div>

        <div className="col"></div>

      </div>
    </div>
  ) 
};

export default App





/*class App extends Component {

  state = {
    restaurantes: [],
    bares: [],
  }
  async componentDidMount(){
    const response = await api.get('restaurantes');
    this.setState({ restaurantes: response.data });
  }

  render(){
    
    const{ restaurantes } = this.state;
    
    return (
      <>
       <div className="container">
        <div className="row mb-3">
          <div className="col">
          <h1 className="mt-5"> Restaurantes</h1>
          {restaurantes.map(restaurant => (
            <div className="card">{restaurant.nombre}
             </div>
            
           
          ))}
          
          </div>
        </div>
      </div>
      </>
    );
  };

};*/
