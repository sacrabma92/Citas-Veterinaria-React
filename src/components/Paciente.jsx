

const Paciente = () => {
  return (
<div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5">
  <p className="font-bold mb-3 text-gray-700 uppercase">
    Nombre <span className="font-normal normal-case">Hoke</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">
    Juan <span className="font-normal normal-case">Hoke</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">
    Email: <span className="font-normal normal-case">correo@corre.com</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">
    Fecha Salida{" "}
    <span className="font-normal normal-case">10 Diciembnre 2022</span>
  </p>

  <p className="font-bold mb-3 text-gray-700 uppercase">
    Sintomas{" "}
    <span className="font-normal normal-case">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolores a
      dolor ex veritatis ipsum natus soluta mollitia laborum quae voluptas
      autem, consequatur dolorum, non esse quasi labore ipsam quia.
    </span>
  </p>
</div>
  )
}

export default Paciente