
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  
  <script>
    // Inicializar AOS
    AOS.init({ once:true, duration:700, easing:'ease-out-cubic' });

    // Año dinámico
    document.getElementById('y').textContent = new Date().getFullYear();

    // Validación Bootstrap
    (()=>{
      const forms=document.querySelectorAll('.needs-validation');
      Array.from(forms).forEach(form=>{
        form.addEventListener('submit',e=>{
          if(!form.checkValidity()){ e.preventDefault(); e.stopPropagation(); }
          form.classList.add('was-validated');
        }, false);
      });
    })();
    
    // ========================================
    // NUEVO: Script para Navbar Sólida (Estilo Urconsa)
    // ========================================
    const mainNavbar = document.getElementById('mainNavbar');
    if (mainNavbar) {
      window.onscroll = () => {
        if (window.scrollY > 50) {
          mainNavbar.classList.add('scrolled');
        } else {
          mainNavbar.classList.remove('scrolled');
        }
      };
    }

    // ========================================
    // NUEVO: Inicialización de Swiper (Carrusel Proyectos)
    // ========================================
    const projectSwiper = new Swiper('.project-slider', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      // loop: true, // Descomenta si quieres que sea infinito
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '#project-next',
        prevEl: '#project-prev',
      },
      breakpoints: {
        // A partir de 768px (tablets), muestra 2 slides
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // A partir de 992px (desktop), muestra 3 slides
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      }
    });
  </script>

  <script src="./js/app.js"></script>