


const TarjetaRestaurantes = ({data}) =>{
  





return(
    <>
    
    <div className="card" style={{width: '18rem;'}} key={data.id}>
        <div className="card-body">
            <h5 className="card-title"> {data.nombre}</h5>
            <p class="card-text"> {data.concepto_es}</p>
            <button class="btn btn-dark" onclick="{ver(data.id)}">Ver mas</button>
        </div>
    </div>
    <div id="vista">
       
    </div>
    </>
)
}
export default TarjetaRestaurantes