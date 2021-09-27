import React, {createContext, useState, useEffect} from 'react';
ןצפםרא

export const RecetasContext = createContext() 

const RecetasProvider = (props) => {
    const [recetas, guardarRecetas] = useState([])

    const [busqueda, guardarReceta] = useState({
        nombre: '',
        categoria: ''
    })

    const [consulta, guardarConsulta] = useState(false)

    const {nombre, categoria} = busqueda;

    useEffect(() => {
        const obtenerRecetas = async () => {
          if(consulta) {
            const url = `htpps://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
          }
          obtenerRecetas()
        } 
    }, [busqueda, categoria, consulta, nombre])



    return ( 
        <RecetasContext.Provider
        value={{
            guardarReceta,
            guardarConsulta
        }}>
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;