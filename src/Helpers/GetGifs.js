import React from 'react';

export const getGifs = async ( category ) => {
    //EL METODO ENCODEURI ES PARA QUE SE CODIFIQUEN LOS ESPACIOS Y SIMBOLOS
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ddgdkPU5whV3XXIbG4gjgCb4H052ZVm1&q=${ encodeURI(  category  )}&limit=10`
    const resp = await fetch(url);
    //destructuring de la data para poder usarla como funcion y usar el .map
    const { data } = await resp.json();
    
    //una funcion que retorne un obj con los valores de la data
    const gifs = data.map( img => {
       return {
           id: img.id,
           title: img.title,
           url : img.images?.downsized_medium.url
           //con el "?" hacemos la condicion de que si vienen las imagenes, utilice el resto de valores

       } 
    })

    //COMO NO ESTA SETIMAGES, RETORNAMOS LA PROMISE PARA TRABAJAR CON LOS GIFS
    return gifs;
}