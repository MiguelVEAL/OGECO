class NavbarComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Busca el archivo HTML en la carpeta componentes
    fetch('/components/navbar.html')
      .then(response => {
        if (!response.ok) throw new Error('No se pudo cargar el navbar');
        return response.text();
      })
      .then(html => {
        // Inyecta el HTML dentro de la etiqueta <mi-navbar>
        this.innerHTML = html;
        
        // (Opcional) Aquí podrías agregar lógica extra, 
        // como resaltar el link activo según la URL
      })
      .catch(error => console.error('Error cargando el componente:', error));
  }
}

// Registramos la nueva etiqueta
customElements.define('mi-navbar', NavbarComponent);