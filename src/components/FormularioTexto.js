import React, { useState } from 'react';

function FormularioTexto(props) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};
    if (!nombre) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!email) {
      nuevosErrores.email = "Debe ingresar el e-mail";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nuevosErrores.email = "E-mail no válido."
    }
    return nuevosErrores;
  }

  const manejarEnvio = (event) => {
    event.preventDefault();
    const erroresValidados = validar();
    setErrores(erroresValidados);
    if (Object.keys(erroresValidados).length === 0) {
      console.log(`Nombre: ${nombre}, email: ${email}`);
    }
  }

  return (
    <form className='container p-4' onSubmit={manejarEnvio}>
      <div className='mb-3'>
        <label className='form-label'>Nombre</label>
        <input
          className={`form-control ${errores.nombre ? 'is-invalid' : ''} `}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <div
          className='invalid-feedback'>{errores.nombre}
        </div>}
      </div>

      <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input
          className={`form-control ${errores.email ? 'is-invalid' : ''} `}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errores.email && <div
          className='invalid-feedback'>{errores.email}
        </div>}
      </div>
      <button className='btn btn-success' type='submit'>Enviar</button>
    </form>
  );
}

export default FormularioTexto;