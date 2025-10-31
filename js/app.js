 
document.addEventListener("DOMContentLoaded", () => {
  
  /**
   * Esta es la función que anima un solo número
   * @param {HTMLElement} elemento - El elemento <span> que contiene el número
   */
  const animarContador = (elemento) => {
    // Obtenemos el valor final desde el atributo 'data-target'
    const valorFinal = parseInt(elemento.dataset.target, 10);
    
    // Duración total de la animación (en milisegundos)
    const duracion = 2000; // 2 segundos
    
    // Con qué frecuencia se actualizará el número (en milisegundos)
    const tiempoPaso = 20; 
    
    // Calculamos cuántos pasos tomará la animación
    const pasosTotales = duracion / tiempoPaso;
    
    // Calculamos cuánto debe incrementar el número en cada paso
    const incremento = valorFinal / pasosTotales;
    
    let valorActual = 0;

    const actualizarValor = () => {
      valorActual += incremento;

      // Si el número actual supera o iguala al objetivo
      if (valorActual >= valorFinal) {
        elemento.innerText = valorFinal; // Mostramos el número final exacto
        clearInterval(intervalo); // Detenemos la animación
      } else {
        // Mostramos el número actual redondeado
        elemento.innerText = Math.round(valorActual);
      }
    };
    
    // Creamos un intervalo que se ejecutará cada 'tiempoPaso'
    const intervalo = setInterval(actualizarValor, tiempoPaso);
  };

  /**
   * El "Observador" que vigila cuándo entras a la sección
   * para disparar la animación.
   */
  const opciones = {
    threshold: 0.5 // Se dispara cuando el 50% del elemento esté visible
  };

  const observador = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
      // Si el elemento (el número) está entrando en la pantalla...
      if (entrada.isIntersecting) {
        const elemento = entrada.target;
        
        // Empezamos la animación
        animarContador(elemento); 
        
        // Dejamos de observar este elemento para que la animación no se repita
        observador.unobserve(elemento);
      }
    });
  }, opciones);

  
  // --- INICIO DE LA EJECUCIÓN ---
  
  // 1. Buscamos TODOS los elementos que tengan la clase ".contador"
  const contadores = document.querySelectorAll(".contador");
  
  // 2. Le decimos al observador que "vigile" cada uno de ellos
  contadores.forEach(contador => {
    observador.observe(contador);
  });

});