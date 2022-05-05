const TarjetaBares = ({data}) =>{

    return(
        <div className="card" style={{width: '18rem;'}} key={data.id}>
            <div className="card-body">
                <h5 className="card-title"> {data.nombre}</h5>
                
                <button type="button" class="btn btn-dark">Ver mas</button>
            </div>
        </div>
    )
    }
    export default TarjetaBares