// Histori-IA Application Logic
// No external frameworks, vanilla JavaScript

class HistoriIA {
    constructor() {
        this.currentContent = null;
        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.isPlaying = false;
        this.isDarkTheme = false;
        this.isHighContrast = false;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.loadStoredPreferences();
        this.populateSelector();
        this.initializeMermaid();
    }

    // ===== DOM INITIALIZATION =====
    
    initializeElements() {
        // Search
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        
        // Selector
        this.contentSelector = document.getElementById('contentSelector');
        
        // Content Card
        this.contentCard = document.getElementById('contentCard');
        this.cardTitle = document.querySelector('.card-title');
        this.cardCategory = document.querySelector('.card-category');
        this.cardPeriod = document.querySelector('.card-period');
        this.cardCat = document.querySelector('.card-cat');
        this.cardDescription = document.querySelector('.card-description');
        this.cardLearningGoal = document.querySelector('.card-learning-goal');
        this.diagramContainer = document.getElementById('diagramContainer');
        
        // Controls
        this.speakBtn = document.getElementById('speakBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.printBtn = document.getElementById('printBtn');
        
        // Theme
        this.themeToggle = document.getElementById('themeToggle');
    }

    initializeEventListeners() {
        // Search
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        
        // Selector
        this.contentSelector.addEventListener('change', (e) => this.handleSelectChange(e));
        
        // Controls
        this.speakBtn.addEventListener('click', () => this.handleSpeak());
        this.stopBtn.addEventListener('click', () => this.handleStop());
        this.printBtn.addEventListener('click', () => this.handlePrint());
        
        // Theme
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    // ===== THEME MANAGEMENT =====
    
    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        this.applyTheme();
        localStorage.setItem('theme-dark', this.isDarkTheme);
    }

    applyTheme() {
        const body = document.body;
        
        if (this.isDarkTheme) {
            body.classList.add('dark-theme');
            body.classList.remove('high-contrast');
            this.isHighContrast = false;
        } else {
            body.classList.remove('dark-theme');
        }
        
        this.updateThemeButton();
    }

    loadStoredPreferences() {
        const darkTheme = localStorage.getItem('theme-dark') === 'true';
        if (darkTheme) {
            this.isDarkTheme = true;
            this.applyTheme();
        }
    }

    updateThemeButton() {
        const themes = this.isDarkTheme ? '☀️ Normal' : '🌓 Contraste';
        this.themeToggle.textContent = themes;
    }

    // ===== SEARCH FUNCTIONALITY =====
    
    handleSearch(event) {
        const query = event.target.value.toLowerCase().trim();
        
        if (query.length === 0) {
            this.searchResults.innerHTML = '';
            return;
        }
        
        const results = this.searchContent(query);
        this.displaySearchResults(results);
    }

    searchContent(query) {
        return historicalContent.filter(item => {
            const searchIn = `
                ${item.title} 
                ${item.category} 
                ${item.description} 
                ${item.period}
            `.toLowerCase();
            
            return searchIn.includes(query);
        });
    }

    displaySearchResults(results) {
        if (results.length === 0) {
            this.searchResults.innerHTML = '<p style="color: var(--text-secondary);">No se encontraron resultados.</p>';
            return;
        }
        
        this.searchResults.innerHTML = results.map(item => `
            <div class="search-result-item" role="button" tabindex="0" 
                 data-id="${item.id}"
                 onclick="app.selectContentById('${item.id}')"
                 onkeypress="if(event.key==='Enter') app.selectContentById('${item.id}')">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-category">${item.category} • ${item.period}</div>
            </div>
        `).join('');
    }

    // ===== CONTENT SELECTION =====
    
    populateSelector() {
        const options = historicalContent.map(item => 
            `<option value="${item.id}">${item.title}</option>`
        ).join('');
        
        this.contentSelector.innerHTML = '<option value="">-- Selecciona un contenido --</option>' + options;
    }

    handleSelectChange(event) {
        const id = event.target.value;
        if (id) {
            this.selectContentById(id);
        }
    }

    selectContentById(id) {
        const content = historicalContent.find(item => item.id === id);
        if (content) {
            this.displayContent(content);
            this.contentSelector.value = id;
            this.searchResults.innerHTML = '';
            this.searchInput.value = '';
            
            // Scroll to content card
            this.contentCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    displayContent(content) {
        this.currentContent = content;
        
        // Update card
        this.cardTitle.textContent = content.title;
        this.cardCategory.textContent = content.category;
        this.cardPeriod.textContent = content.period;
        this.cardCat.textContent = content.category;
        this.cardDescription.textContent = content.description;
        this.cardLearningGoal.textContent = content.learningGoal;
        
        // Update diagram
        this.updateDiagram(content.mermaid);
        
        // Show card
        this.contentCard.classList.remove('hidden');
        
        // Reset speech
        this.stopSpeech();
        this.updateSpeechButtons();
        
        // Update page title and meta
        document.title = `${content.title} - Histori-IA`;
    }

    updateDiagram(mermaidCode) {
        this.diagramContainer.textContent = mermaidCode;
        
        // Re-render mermaid
        if (window.mermaid) {
            try {
                window.mermaid.contentLoaderContentNotFound = [];
                window.mermaid.run();
            } catch (e) {
                console.error('Error rendering diagram:', e);
            }
        }
    }

    // ===== SPEECH SYNTHESIS =====
    
    handleSpeak() {
        if (!this.currentContent) return;
        
        if (this.isPlaying) {
            this.resumeSpeech();
            return;
        }
        
        const text = this.currentContent.speech;
        const utterance = new SpeechSynthesisUtterance(text);
        
        utterance.lang = 'es-ES';
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        utterance.onstart = () => {
            this.isPlaying = true;
            this.updateSpeechButtons();
        };
        
        utterance.onend = () => {
            this.isPlaying = false;
            this.updateSpeechButtons();
        };
        
        utterance.onerror = (event) => {
            console.error('Speech error:', event);
            this.isPlaying = false;
            this.updateSpeechButtons();
        };
        
        this.currentUtterance = utterance;
        this.speechSynthesis.speak(utterance);
        this.updateSpeechButtons();
    }

    handleStop() {
        this.stopSpeech();
    }

    stopSpeech() {
        this.speechSynthesis.cancel();
        this.isPlaying = false;
        this.currentUtterance = null;
        this.updateSpeechButtons();
    }

    resumeSpeech() {
        if (this.speechSynthesis.paused) {
            this.speechSynthesis.resume();
            this.isPlaying = true;
            this.updateSpeechButtons();
        }
    }

    updateSpeechButtons() {
        if (this.isPlaying) {
            this.speakBtn.classList.add('hidden');
            this.stopBtn.classList.remove('hidden');
        } else {
            this.speakBtn.classList.remove('hidden');
            this.stopBtn.classList.add('hidden');
        }
    }

    // ===== PRINT / PDF EXPORT =====
    
    handlePrint() {
        if (!this.currentContent) return;
        
        // Open print dialog
        window.print();
    }

    // ===== KEYBOARD NAVIGATION =====
    
    handleKeyboard(event) {
        // Escape to stop speech
        if (event.key === 'Escape') {
            this.stopSpeech();
        }
        
        // Alt + S to speak
        if (event.altKey && event.key === 's') {
            event.preventDefault();
            this.handleSpeak();
        }
        
        // Alt + T to toggle theme
        if (event.altKey && event.key === 't') {
            event.preventDefault();
            this.toggleTheme();
        }
    }

    // ===== MERMAID INITIALIZATION =====
    
    initializeMermaid() {
        if (window.mermaid) {
            window.mermaid.initialize({
                startOnLoad: true,
                theme: 'default',
                securityLevel: 'loose',
                flowchart: {
                    useMaxWidth: true,
                    htmlLabels: true
                }
            });
        }
    }

    // ===== ACCESSIBILITY =====
    
    announceToScreenReaders(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            announcement.remove();
        }, 1000);
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new HistoriIA();
    console.log('Histori-IA initialized');
});

// Handle page visibility for speech
document.addEventListener('visibilitychange', () => {
    if (document.hidden && window.app && window.app.isPlaying) {
        window.app.stopSpeech();
    }
});
