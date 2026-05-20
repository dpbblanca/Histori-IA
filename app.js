/* ============================================================
   HISTORI-IA - LÓGICA DE LA APLICACIÓN
   Manejo de búsqueda, temas, síntesis de voz y funcionalidades
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
    // ========== ELEMENTOS DEL DOM ==========
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const contentSelector = document.getElementById('contentSelector');
    const contentCard = document.getElementById('contentCard');
    const themeToggle = document.getElementById('themeToggle');
    const speakBtn = document.getElementById('speakBtn');
    const stopBtn = document.getElementById('stopBtn');
    const printBtn = document.getElementById('printBtn');

    // ========== VARIABLES GLOBALES ==========
    let currentContent = null;
    let speechSynthesis = window.speechSynthesis;
    let currentUtterance = null;
    let isDarkMode = localStorage.getItem('theme') === 'dark';

    // ========== INICIALIZACIÓN ==========
    function init() {
        // Initialize Mermaid FIRST
        if (typeof mermaid !== 'undefined') {
            mermaid.initialize({ 
                startOnLoad: false,
                theme: 'default',
                securityLevel: 'loose',
                flowchart: {
                    useMaxWidth: true,
                    htmlLabels: true,
                    rankSpacing: 120,
                    nodeSpacing: 150,
                    curve: 'linear'
                }
            });
        }
        
        applyTheme();
        populateSelector();
        attachEventListeners();
    }

    // ========== GESTIÓN DE TEMAS ==========
    function applyTheme() {
        const theme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        updateThemeButtonText();
    }

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        applyTheme();
        
        // Re-renderizar diagrama
        if (currentContent) {
            renderDiagram(currentContent.mermaid);
        }
    }

    function updateThemeButtonText() {
        const texts = {
            light: '🌓 Contraste',
            dark: '☀️ Claro'
        };
        themeToggle.textContent = isDarkMode ? texts.dark : texts.light;
    }

    // ========== POBLACIÓN DEL SELECTOR ==========
    function populateSelector() {
        if (typeof historicalContent === 'undefined') {
            console.error('historicalContent no está definido en data.js');
            return;
        }

        contentSelector.innerHTML = '<option value="">-- Selecciona un contenido --</option>';
        
        historicalContent.forEach(content => {
            const option = document.createElement('option');
            option.value = content.id;
            option.textContent = content.title;
            contentSelector.appendChild(option);
        });
    }

    // ========== BÚSQUEDA Y FILTRADO ==========
    function performSearch(query) {
        if (!query.trim()) {
            searchResults.innerHTML = '';
            return;
        }

        const lowerQuery = query.toLowerCase();
        const results = historicalContent.filter(content => 
            content.title.toLowerCase().includes(lowerQuery) ||
            content.category.toLowerCase().includes(lowerQuery) ||
            content.description.toLowerCase().includes(lowerQuery)
        );

        renderSearchResults(results);
    }

    function renderSearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: var(--spacing-lg);">No se encontraron resultados.</p>';
            return;
        }

        searchResults.innerHTML = results.map(content => `
            <div class="search-result-item" tabindex="0" data-id="${content.id}">
                <strong>${content.title}</strong>
                <small>${content.category} • ${content.period}</small>
            </div>
        `).join('');

        // Agregar listeners a los resultados
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => selectContentById(item.dataset.id));
            item.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectContentById(item.dataset.id);
                }
            });
        });
    }

    // ========== SELECCIÓN DE CONTENIDO ==========
    function selectContentById(id) {
        const content = historicalContent.find(c => c.id === id);
        if (content) {
            currentContent = content;
            contentSelector.value = id;
            displayContent(content);
        }
    }

    function displayContent(content) {
        // Actualizar tarjeta
        document.querySelector('.card-title').textContent = content.title;
        document.querySelector('.card-category').textContent = content.category;
        document.querySelector('.card-period').textContent = content.period;
        document.querySelector('.card-cat').textContent = content.category;
        document.querySelector('.card-description').textContent = content.description;
        document.querySelector('.card-learning-goal').textContent = content.learningGoal;

        // Renderizar diagrama
        renderDiagram(content.mermaid);

        // Mostrar tarjeta
        contentCard.classList.remove('hidden');
        contentCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Resetear botones de audio
        stopSpeech();
        speakBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
    }

    // ========== RENDERIZADO DE DIAGRAMAS ==========
    function renderDiagram(mermaidCode) {
        const container = document.getElementById('diagramContainer');
        
        // Limpiar contenedor
        container.innerHTML = '';
        
        // Insertar código Mermaid
        container.textContent = mermaidCode;
        container.setAttribute('role', 'img');
        container.setAttribute('aria-label', 'Mapa conceptual interactivo');
        
        // Renderizar con Mermaid
        if (typeof mermaid !== 'undefined') {
            try {
                mermaid.run();
            } catch (e) {
                console.error('Error rendering mermaid:', e);
            }
        }
    }

    // ========== SÍNTESIS DE VOZ ==========
    function speak(text) {
        // Cancelar cualquier reproducción anterior
        speechSynthesis.cancel();

        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.lang = 'es-ES';
        currentUtterance.rate = 0.9;
        currentUtterance.pitch = 1;
        currentUtterance.volume = 1;

        currentUtterance.onstart = () => {
            speakBtn.classList.add('hidden');
            stopBtn.classList.remove('hidden');
            speakBtn.setAttribute('aria-disabled', 'true');
            stopBtn.setAttribute('aria-disabled', 'false');
        };

        currentUtterance.onend = () => {
            stopSpeech();
        };

        currentUtterance.onerror = (event) => {
            console.error('Error en síntesis de voz:', event.error);
            stopSpeech();
            alert('Error al reproducir audio. Asegúrate de que tu navegador soporta Web Speech API.');
        };

        speechSynthesis.speak(currentUtterance);
    }

    function stopSpeech() {
        speechSynthesis.cancel();
        speakBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
        speakBtn.setAttribute('aria-disabled', 'false');
        stopBtn.setAttribute('aria-disabled', 'true');
    }

    // ========== EXPORTACIÓN A PDF ==========
    function exportToPDF() {
        if (!currentContent) {
            alert('Selecciona un contenido primero');
            return;
        }

        window.print();
    }

    // ========== GESTIÓN DE EVENTOS ==========
    function attachEventListeners() {
        // Búsqueda en tiempo real
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });

        // Selector desplegable
        contentSelector.addEventListener('change', (e) => {
            if (e.target.value) {
                selectContentById(e.target.value);
            }
        });

        // Botón de tema
        themeToggle.addEventListener('click', toggleTheme);

        // Botones de audio
        speakBtn.addEventListener('click', () => {
            if (currentContent) {
                speak(currentContent.speech);
            }
        });

        stopBtn.addEventListener('click', stopSpeech);

        // Botón de impresión
        printBtn.addEventListener('click', exportToPDF);

        // Atajos de teclado
        document.addEventListener('keydown', (e) => {
            // Alt+S: Hablar
            if (e.altKey && e.key === 's') {
                e.preventDefault();
                speakBtn.click();
            }
            // Alt+T: Cambiar tema
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                themeToggle.click();
            }
            // Escape: Cerrar búsqueda
            if (e.key === 'Escape') {
                searchInput.value = '';
                searchResults.innerHTML = '';
                searchInput.focus();
            }
        });

        // Prevenir submisión del selector
        contentSelector.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    }

    // ========== UTILIDADES DE ACCESIBILIDAD ==========
    
    // Anuncio de contenido dinámico para lectores de pantalla
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => announcement.remove(), 1000);
    }

    // ========== INICIAR APLICACIÓN ==========
    init();
});
