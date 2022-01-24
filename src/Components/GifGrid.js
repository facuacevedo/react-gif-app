import React from 'react'
import { getGifs } from '../Helpers/GetGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    //USAR EL SEGUNDO PARAMETRO VACIO HARA QUE SE DISPARE SOLAMENTE 1 VEZ EL USEEFFECT
    
    // const [images, setImages] = useState([ ]);

    // useEffect( ()=>{
    //     // COMO GETGIFS ES UNA PROMMISE, PODEMOS TRABAJAR CON EL RESOLVE Y HACER UN .THEN
    //     getGifs( category )
    //     .then( imgs => setImages( imgs ))
    // }, [ category ])

// AÑADIENDO CATEGORY EL USEEFFECT, HACEMOS QUE ESCUCHE ANTE CUALQUEIR CAMBIO EN LA CATEGORIA
    const { data:images, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category } </h3>
            {/* EL OPERAOR && SIRVE COMO EL TERNARIO PERO SIN UNA OPCION ELSE, MAS SIMPLIFICADO */}
            { loading && <p>Loading...</p>}

            { 
            <div className='card-grid'>
                { 
                        images.map( ( img ) => 
                        <GifGridItem 
                            key = { img.id }
                            //ESTA ES UNA MANERA DE PASAR LAS PROPS DE FORMA INDEPENDIENTE Y LUEGO HACER DESTRUCTURING
                            //EN EL COMPONENTE PADRE
                            {...img}
                            />
                        )
                    }
            </div> }
        </>
    )
}
