function actualizarReloj() {
    const ahora = new Date();
    const objetivo = new Date(ahora.getFullYear(), 17, 7, 10, 0, 0);

    if (ahora > objetivo) {
      objetivo.setFullYear(objetivo.getFullYear() + 1);
    }

    const diferencia = objetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    const formato = (n) => String(n).padStart(2, '0');

    document.getElementById('cuenta').textContent =
      `${formato(dias)}:${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;
  }

  setInterval(actualizarReloj, 1000);
  actualizarReloj();
