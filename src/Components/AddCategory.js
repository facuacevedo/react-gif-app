import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("Hola mundo");

    const handleInputChange = ({ target }) => {
        console.log( target )
        setInputValue( target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()

        if( inputValue.trim().length > 2){
            // VALIDACION SI LAS LO QUE RECIBE EL INPUT ES MAYOR A 2 CARACTERES, SIN ESPACIOS EN LOS EXTREMOS
            // LO SETEE EN CATEGORIES Y VACIE EL CONTENIDO DE INPUTVALUE
            setCategories([ inputValue ])
            //CAMBIANDO LA POSICION DE CATS E INPUTVALUE, CAMBIARA EL ORDEN EN EL QUE SE IMPRIMEN EN EL DOM
            setInputValue("")
        } 
        console.log("Submit hecho")
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}