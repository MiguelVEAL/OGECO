// footer.js
class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Hacemos fetch al archivo html externo
        // NOTA: Asegúrate de que la ruta './footer.html' sea correcta según tu estructura de carpetas
        fetch('/components/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar el footer: ${response.statusText}`);
                }
                return response.text();
            })
            .then(htmlContent => {
                this.innerHTML = htmlContent;
                // Opcional: Si necesitaras reinicializar tooltips u otros scripts de JS aquí, lo harías después de cargar el HTML.
            })
            .catch(error => {
                console.error('Error cargando el componente footer:', error);
                this.innerHTML = '<p class="text-danger text-center">Error cargando el pie de página.</p>';
            });
    }
}

customElements.define('mi-footer', FooterComponent);