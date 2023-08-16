import {useState} from "react";
function Form({onaddLibro}) {
    const[nombre,setNombre]=useState("");
    const[apellido,setApellido]=useState("");

const handleSubmit = (e)=>{
    e.preventDeFault();
    if(nombre) {
        onAddLibro({nombre})
        setNombre("");
        
    }

};
return( 
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Nombre del libro" value={nombre} onchange={(e)=>setNombre(e.target.values)}></input>
    <input type="text" placeholder="Tipo de libro" value={tipoLibro} onchange={(e)=>setNombre(e.target.values)}></input>
    <button type="submit">Enviar</button>

    if (nombre.length < 3) {
      setError('Minimo 3 caracteres');
    } else (textoIngresado.startsWith(' ')) {
      setError('Debe haber algo escrito');
    } 

if (tipoLibro.length < 6) {
      setError('Minimo 6 caracteres');
          } else {
            setError setError('');
          };

</form>
)
}

export default Form;

