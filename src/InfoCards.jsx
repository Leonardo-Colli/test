import React from 'react'

const Infocards = ({id, nombre, concepto_es}) => {

    return(
        <>
        <div className="card-container">
            <header>
                <h2>{nombre}</h2>
            </header>
        </div>
        </>
    );
}
export default Infocards