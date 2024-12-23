import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function () {

  Swal.fire({
    title: "Stella",
    html: `
      <p class="text-left mb-3">
        Stella es tu secretaria, hasta el momento ella será la encargada de tu organización, pídele que registre un evento o recordatorio y dile cuántos minutos antes del evento debe empezar a notificarte, ella se encargará del resto, o tal vez tengas una lista de tareas que tienen los requisitos del software que estás desarrollando, primero pídele regístrala luego puedes pedirle que te muestre la lista de tareas pendientes, si ya completaste la tarea puedes hacer click sobre ella para marcarla como completada y también puedes solicitarle su lista de tareas completadas.
      </p>

      <p class="text-left mb-3">
        ¿Necesitas instalar un programa? Pídeselo a Stella, ella te solicitará el nombre el programa y te devolverá una lista de programas, haz click sobre el programa a instalar y ella se encargará del resto.
      </p>
    `,
    // icon: "success",
    width: '800px'
  });

  };