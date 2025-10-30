
    // AOS
    AOS.init({ once:true, duration:700, easing:'ease-out-cubic' });

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

    // Año dinámico
    document.getElementById('y').textContent = new Date().getFullYear();
 