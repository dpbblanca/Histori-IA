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
    let isDarkMode = localStorage.getItem('theme') !== 'light'; // dark por defecto

    // ========== INICIALIZACIÓN ==========
    function init() {
        initMermaid();
        applyTheme();
        populateSelector();
        attachEventListeners();
    }

    // ========== INICIALIZACIÓN DE MERMAID ==========
    function getMermaidTheme() {
        return isDarkMode ? 'dark' : 'default';
    }

    function initMermaid() {
        if (typeof mermaid === 'undefined') return;
        mermaid.initialize({
            startOnLoad: false,
            theme: getMermaidTheme(),
            securityLevel: 'loose',
            themeVariables: isDarkMode ? {
                primaryColor:         '#1e3054',
                primaryBorderColor:   '#00e5a0',
                primaryTextColor:     '#f0f4f8',
                secondaryColor:       '#172540',
                secondaryBorderColor: '#254068',
                secondaryTextColor:   '#9ab0c8',
                tertiaryColor:        '#111d2e',
                tertiaryBorderColor:  '#1e3054',
                tertiaryTextColor:    '#9ab0c8',
                lineColor:            '#00c288',
                edgeLabelBackground:  '#111d2e',
                titleColor:           '#00e5a0',
                nodeTextColor:        '#f0f4f8',
                fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                fontSize:   '14px',
            } : {
                fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                fontSize:   '14px',
            },
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                rankSpacing: 120,
                nodeSpacing: 150,
                curve: 'linear'
            }
        });
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

        // Re-inicializar Mermaid con el nuevo tema antes de re-renderizar
        initMermaid();

        // Re-renderizar diagrama con el nuevo tema
        if (currentContent) {
            renderDiagram(currentContent.mermaid);
        }
    }

    function updateThemeButtonText() {
        themeToggle.textContent = isDarkMode ? '☀️ Claro' : '🌓 Contraste';
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
        document.querySelector('.card-title').textContent = content.title;
        document.querySelector('.card-category').textContent = content.category;
        document.querySelector('.card-period').textContent = content.period;
        document.querySelector('.card-cat').textContent = content.category;
        document.querySelector('.card-description').textContent = content.description;
        document.querySelector('.card-learning-goal').textContent = content.learningGoal;

        renderDiagram(content.mermaid);

        contentCard.classList.remove('hidden');
        contentCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

        stopSpeech();
        speakBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
    }

    // ========== RENDERIZADO DE DIAGRAMAS ==========
    function renderDiagram(mermaidCode) {
        const container = document.getElementById('diagramContainer');

        // Limpiar contenedor Y eliminar la marca de procesado
        container.innerHTML = '';
        container.removeAttribute('data-processed'); // <-- FIX: permite re-renderizar
        container.className = 'mermaid';

        // Insertar código Mermaid
        container.textContent = mermaidCode;
        container.setAttribute('role', 'img');
        container.setAttribute('aria-label', 'Mapa conceptual interactivo');

        // Renderizar con Mermaid
        if (typeof mermaid !== 'undefined') {
            try {
                mermaid.run({ nodes: [container] }); // más preciso que mermaid.run()
            } catch (e) {
                // Fallback para versiones antiguas de Mermaid
                try {
                    mermaid.init(undefined, container);
                } catch (e2) {
                    console.error('Error rendering mermaid:', e2);
                }
            }
        }
    }

    // ========== SÍNTESIS DE VOZ ==========
    function speak(text) {
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
        currentUtterance.onend = () => { stopSpeech(); };
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
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });

        contentSelector.addEventListener('change', (e) => {
            if (e.target.value) {
                selectContentById(e.target.value);
            }
        });

        themeToggle.addEventListener('click', toggleTheme);

        speakBtn.addEventListener('click', () => {
            if (currentContent) speak(currentContent.speech);
        });

        stopBtn.addEventListener('click', stopSpeech);
        printBtn.addEventListener('click', exportToPDF);

        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key === 's') {
                e.preventDefault();
                speakBtn.click();
            }
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                themeToggle.click();
            }
            if (e.key === 'Escape' && document.getElementById('diagramModal').hidden) {
                searchInput.value = '';
                searchResults.innerHTML = '';
                searchInput.focus();
            }
        });

        contentSelector.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') e.preventDefault();
        });
    }

    // ========== UTILIDADES DE ACCESIBILIDAD ==========
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
