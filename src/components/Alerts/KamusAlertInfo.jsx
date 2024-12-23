import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function () {

  Swal.fire({
    title: "Kamus",
    html: `
      <p class="text-left">
        Kamus es tu asistente de programación, puedes consultarle hasta el momento sobre HTML, CSS, JS y PHP vanilla. También puedes pedirle que cree por tí plantillas Vite de React, Vanilla, Vue, Preact, Lit, Svelte, Solid, Qwik o solicita o clonar un repositorio de GITHUB y solicitar investigar en la Web
      </p>
    `,
    // icon: "success",
    width: '800px'
  });

  };