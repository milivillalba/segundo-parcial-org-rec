const formReserva = document.querySelector("#formNuevaReserva");
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fecha_hora_salida = document.querySelector("#fecha_ingreso");
const fecha_hora_llegada = document.querySelector("#fecha_salida");
const lugar_vuelo = document.querySelector("#habitacion");
const numero_vuelo = document.querySelector("#cantidad_personas");
const dni_pasajero = document.querySelector("#telefono");
const telefono_pasajero = document.querySelector("#email");

document.addEventListener("DOMContentLoaded", async () => {
  // Traemos la reserva que se va a editar
  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  // Mostrar en el formulario los datos de la reserva que se quiere actualizar
  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_hora_salida.value = data.fecha_hora_salida;
  fecha_hora_llegada.value = data.fecha_hora_llegada;
  lugar_vuelo.value = data.lugar_vuelo;
  numero_vuelo.value = data.numero_vuelo;
  dni_pasajero.value = data.dni_pasajero;
  telefono_pasajero.value = data.telefono_pasajero;
});

formReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_hora_salida: fecha_hora_salida.value,
    fecha_hora_llegada: fecha_hora_llegada.value,
    lugar_vuelo: lugar_vuelo.value,
    numero_vuelo: numero_vuelo.value,
    dni_pasajero: dni_pasajero.value,
    telefono_pasajero: telefono_pasajero.value,
  };

  // Se envían los nuevos datos al servidor express
  const response = await fetch(`http://localhost:4800/api/${reservaId}`, {
    method: "PUT",
    body: JSON.stringify(reservaActualizada),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respToJson = await response.json();

  if (response.status !== 200) {
    return Swal.fire({
      title: "Error",
      text: respToJson.message,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }

  // Mostrar mensajes al usuario
  Swal.fire({
    title: "Reserva actualizada",
    text: respToJson.message,
    icon: "success",
    confirmButtonText: "Aceptar",
  });
  // const data = await response.json();

  // Mostrar mensajes al usuario
  // alert(data.message);

  // Redireccionar al usuario
});
