import { useState, useEffect } from 'react'

const Formulario = (pacientes, setPacientes ) => {

  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();

    // Validacion del Formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay un cambo vacio');

      setError(true);
      return;
    }
    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre, propietario, email, fecha, sintomas
    }

    // console.log(objetoPaciente);
    
    setPacientes([...pacientes, objetoPaciente]);
  }


  return (
    <div className='md:w-1/2 lg:w2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        
        <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {' '} <span className='text-indigo-600 font-bold '>Administralos</span></p>

        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5' action="">
          { error && <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
                        <p>Todos los campos son obligatorios</p>
                      </div>
                      }
          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="nombre">Nombre Mastoca</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" id='nombre' placeholder='Nombre de la Mascota' value={nombre} onChange={ (e) => setNombre(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="propietario">Nombre Propietario</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" id='propietario' placeholder='Nombre del Propietario' value={propietario} onChange={ (e) => setPropietario(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email:</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="email" id='email' placeholder='Correo Electronico' value={email} onChange={ (e) => setEmail(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Fecha de Salida</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="date" id='alta' value={fecha} onChange={ (e) => setFecha(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Sintomas</label>
            <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' name="" id="sintomas" placeholder='Describe los sintomas' value={sintomas} onChange={ (e) => setSintomas (e.target.value) }/>
          </div>

          <input className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-opacity' type="submit" value="Agregar Paciente" />
        </form>
    </div>
  )
}

export default Formulario