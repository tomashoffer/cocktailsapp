import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
    const [busqueda, guadarBusqueda] = useState({
        nombre: '',
        categoria: ''

    })
// extraccion de datos de los context
    const {categorias} = useContext(CategoriasContext)
    const {buscarRecetas, guardarConsulta} = useContext(RecetasContext)
// funcion para leer los contenidos
const obtenerDatosReceta = e => {
    guadarBusqueda({
        ...busqueda, 
        [e.target.name] : e.target.value,
    })
}



    return ( 
        <form 
        class='col-12' 
        onSubmit={e => {
            e.preventDefault();
            buscarRecetas(busqueda); 
            guardarConsulta(true)}}>
            <fieldset>
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset> 
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        name="nombre"
                        className="form-control" 
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                     />
                </div>
                <div className="col-md-4">
                    <select name="categoria" className="form-control" onChange={obtenerDatosReceta}>
                        <option value="">-- Selecciona Categoría</option>
                        {categorias.map(categoria=>(
                            <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary" 
                        value="Buscar Bebidas"
                     />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;