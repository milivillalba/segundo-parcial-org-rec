const formCrearReserva = document.querySelector("#formNuevaReserva");

formCrearReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const fecha_hora_salida = document.querySelector("#fecha_ingreso").value;
  const fecha_hora_llegada = document.querySelector("#fecha_salida").value;
  const lugar_vuelo = document.querySelector("#habitacion").value;
  const numero_vuelo = document.querySelector("#cantidad_personas").value;
  const dni_pasajero = document.querySelector("#telefono").value;
  const telefono_pasajero = document.querySelector("#email").value;

  const reserva = {
    nombre,
    apellido,
    fecha_hora_salida,
    fecha_hora_llegada,
    lugar_vuelo,
    numero_vuelo,
    dni_pasajero,
    telefono_pasajero,
  };

  const response = await fetch("http://localhost:4800/api", {
    method: "POST",
    body: JSON.stringify(reserva),
    headers: {
      "Content-Type": "application/json", // Cuando se envían datos JSON al servidor
    },
  });

  const data = await response.json();

  alert(data.message);
  window.location.href = "/";
});
