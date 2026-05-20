// Historical content data for Histori-IA
// All content is manually curated for educational use

const historicalContent = [
    {
        id: "restauracion",
        title: "Sistema de la Restauración",
        category: "Proceso político",
        period: "1874-1902",
        learningGoal: "Comprender la relación entre monarquía, Constitución de 1876, turnismo, caciquismo y estabilidad política.",
        description: "La Restauración fue el período de reconstrucción política y social tras la Primera República. Se caracterizó por el restablecimiento de la Monarquía borbónica bajo Alfonso XII (1874-1885) y Alfonso XIII (1886-1931), la promulgación de la Constitución de 1876, y el sistema de turnismo dinástico entre los partidos Liberal y Conservador. Este régimen buscaba proporcionar estabilidad política a través de la alternancia pacífica en el poder, aunque se basaba en el fraude electoral y el caciquismo.",
        speech: "La Restauración fue el período que comenzó en 1874 cuando se restablece la monarquía borbónica. Durante este tiempo, Alfonso XII primero y Alfonso XIII después, gobiernan España. La característica principal es el sistema de turnismo dinástico, es decir, la alternancia entre los partidos Liberal y Conservador. Aunque aparentemente había estabilidad política, en realidad el sistema se basaba en el fraude electoral y el caciquismo, donde los caciques locales controlaban el voto. Este sistema se mantiene hasta 1902.",
        mermaid: `flowchart LR
    A["🏛️ Restauración<br/>1874-1902"] --> B["👑 Monarquía<br/>Borbónica"]
    A --> C["📜 Constitución<br/>1876"]
    A --> D["🔄 Turnismo<br/>Dinástico"]
    
    B --> B1["Alfonso XII<br/>1874-1885"]
    B --> B2["Alfonso XIII<br/>1886-1931"]
    
    C --> C1["Monarquía<br/>Constitucional"]
    C --> C2["Bipartidismo"]
    
    D --> D1["Partido<br/>Conservador"]
    D --> D2["Partido<br/>Liberal"]
    
    A --> E["⚙️ Mecanismos"]
    E --> E1["Fraude<br/>Electoral"]
    E --> E2["Caciquismo"]
    
    style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
    style B fill:#0f766e,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style C fill:#0f766e,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style D fill:#0f766e,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style E fill:#d97706,stroke:#1e3a8a,stroke-width:2px,color:#fff`
    },
    {
        id: "canovas",
        title: "Antonio Cánovas del Castillo",
        category: "Personaje histórico",
        period: "1828-1897",
        learningGoal: "Reconocer el papel de Cánovas como arquitecto del sistema de la Restauración y su influencia en la política española.",
        description: "Político conservador español (1828-1897) que fue el principal arquitecto del sistema político de la Restauración. Cánovas ideó el sistema de turnismo dinástico y la Constitución de 1876, que permitía la alternancia pacífica en el poder entre liberales y conservadores. Fue Presidente del Gobierno en varias ocasiones y su objetivo era proporcionar estabilidad a través del consenso entre las dos grandes fuerzas políticas. Su modelo de consenso elitista, aunque frágil, mantuvo la estabilidad política durante casi treinta años.",
        speech: "Antonio Cánovas del Castillo fue un político conservador que vivió entre 1828 y 1897. Es considerado el arquitecto del sistema de la Restauración. Cánovas fue Presidente del Gobierno en varias ocasiones y diseñó la Constitución de 1876 y el sistema de turnismo. Su idea principal era que el Partido Conservador y el Partido Liberal se alternaran en el poder de forma pacífica. Aunque este sistema se basaba en el fraude electoral y no era verdaderamente democrático, logró proporcionar cierta estabilidad política a España durante muchos años.",
        mermaid: `flowchart TD
    A["👤 Antonio Cánovas<br/>del Castillo<br/>1828-1897"] --> B["📍 Posiciones"]
    A --> C["💡 Aportaciones"]
    A --> D["⏱️ Legado"]
    
    B --> B1["Presidente<br/>del Gobierno"]
    B --> B2["Líder Conservador"]
    
    C --> C1["Constitución<br/>de 1876"]
    C --> C2["Sistema de<br/>Turnismo"]
    C --> C3["Estabilidad<br/>Política"]
    
    D --> D1["Modelo de<br/>Consenso Elitista"]
    D --> D2["Influencia hasta<br/>1931"]
    
    style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
    style B fill:#0f766e,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style C fill:#0f766e,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style D fill:#d97706,stroke:#1e3a8a,stroke-width:2px,color:#fff`
    },
    {
        id: "sagasta",
        title: "Práxedes Mateo Sagasta",
        category: "Personaje histórico",
        period: "1825-1903",
        learningGoal: "Entender el papel de Sagasta como líder del Partido Liberal y su rol en la estabilidad del sistema.",
        description: "Político liberal español (1825-1903) que fue el principal líder del Partido Liberal durante la Restauración. Sagasta fue Presidente del Gobierno en múltiples ocasiones y representaba la rama más progresista del liberalismo español del período. Trabajó estrechamente con Cánovas en el sistema de turnismo, aceptando la alternancia pacífica en el poder como mecanismo para garantizar la estabilidad. Su liderazgo fue clave para mantener la cohesión del Partido Liberal y permitir el funcionamiento del sistema bipartidista de la Restauración.",
        speech: "Práxedes Mateo Sagasta fue un político liberal que vivió entre 1825 y 1903. Era el líder del Partido Liberal durante la Restauración y trabajó junto a Cánovas para mantener el sistema de turnismo. Sagasta fue también Presidente del Gobierno varias veces. A diferencia de otros liberales, aceptó el acuerdo con los conservadores de alternarse en el poder. Esto permitió que el sistema funcionara durante muchos años, aunque fuera un sistema basado en la manipulación electoral.",
        mermaid: `flowchart TD
    A["👤 Práxedes Mateo<br/>Sagasta<br/>1825-1903"] --> B["🎯 Rol Político"]
    A --> C["📋 Acciones"]
    A --> D["🤝 Relaciones"]
    
    B --> B1["Líder del Partido<br/>Liberal"]
    B --> B2["Presidente del<br/>Gobierno"]
    
    C --> C1["Acepta Turnismo"]
    C --> C2["Reforma<br/>Electoral"]
    C --> C3["Estabilidad<br/>Política"]
    
    D --> D1["Acuerdo con<br/>Cánovas"]
    D --> D2["Bipartidismo<br/>Consensuado"]
    
    style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
    style B fill:#0f766e,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style C fill:#0f766e,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style D fill:#d97706,stroke:#1e3a8a,stroke-width:2px,color:#fff`
    },
    {
        id: "turnismo",
        title: "Turnismo Dinástico",
        category: "Concepto político",
        period: "1874-1923",
        learningGoal: "Comprender el mecanismo de alternancia bipartidista y sus implicaciones para la democracia española.",
        description: "Sistema político basado en la alternancia regular y pactada entre el Partido Conservador y el Partido Liberal en el ejercicio del poder. El turnismo garantizaba que ambos partidos accedieran al gobierno de forma ordenada, evitando conflictos violentos. Sin embargo, era un mecanismo profundamente fraudulento, basado en la manipulación electoral, el caciquismo y la compra de votos. El Ministerio de la Gobernación aseguraba los resultados electorales deseados. Aunque proporcional estabilidad aparente, el turnismo impedía la verdadera competencia política democrática y excluía a nuevas fuerzas políticas.",
        speech: "El turnismo dinástico fue un sistema donde el Partido Conservador y el Partido Liberal se alternaban en el poder de forma ordenada y pacífica. Este sistema comenzó en 1874 con la Restauración. La idea era que ningún partido permaneciera en el poder de forma indefinida, sino que se alternaran regularmente. Sin embargo, para que esto funcionara, se utilizaba el fraude electoral masivo. El Ministerio de la Gobernación controlaba los resultados electorales. Aunque esto creaba cierta estabilidad, impedía que nuevos partidos participaran en la política y no era democrático.",
        mermaid: `flowchart LR
    A["🔄 Turnismo<br/>Dinástico"] --> B["Alternancia<br/>Pactada"]
    A --> C["Mecanismos<br/>de Control"]
    A --> D["Consecuencias"]
    
    B --> B1["Partido<br/>Conservador"]
    B --> B2["Partido<br/>Liberal"]
    B --> B3["Rotación<br/>Ordenada"]
    
    C --> C1["Fraude<br/>Electoral"]
    C --> C2["Caciquismo"]
    C --> C3["Compra<br/>de Votos"]
    
    D --> D1["✓ Estabilidad"]
    D --> D2["✗ Falta de<br/>Democracia"]
    D --> D3["✗ Exclusión<br/>Política"]
    
    style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
    style D1 fill:#16a34a,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style D2 fill:#dc2626,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style D3 fill:#dc2626,stroke:#1e3a8a,stroke-width:2px,color:#fff`
    },
    {
        id: "caciquismo",
        title: "Caciquismo",
        category: "Concepto social",
        period: "1874-1923",
        learningGoal: "Analizar cómo el caciquismo fue el fundamento del fraude electoral y la manipulación política en la Restauración.",
        description: "Red de poder local basada en grandes terratenientes, caciques, que controlaban las regiones españolas. Los caciques influían en el voto de sus campesinos, arrendatarios y dependientes mediante promesas, amenazas o coerción directa. Este sistema permitía que los resultados electorales fueran predeterminados y manipulados desde Madrid, donde el Ministerio de la Gobernación indicaba qué resultados eran deseados. El caciquismo no era una característica de la Restauración únicamente, sino que sus raíces eran profundas en la historia española y se extendió más allá de 1923.",
        speech: "El caciquismo fue un sistema de poder basado en los caciques, que eran grandes terratenientes locales que tenían poder político y social en sus regiones. Los caciques controlaban el voto de los campesinos, trabajadores y dependientes que vivían en sus tierras. Utilizaban promesas, amenazas u otros métodos para conseguir que votaran según sus intereses. El caciquismo fue fundamental para el fraude electoral en la Restauración. Cuando el Ministerio de la Gobernación quería que ganara un partido, el gobierno local, controlado por los caciques, manipulaba los votos. Esto hacía que el sistema de turnismo fuera posible.",
        mermaid: `flowchart TD
    A["🏛️ Caciquismo"] --> B["Estructura"]
    A --> C["Mecanismos"]
    A --> D["Impacto"]
    
    B --> B1["Caciques<br/>Terratenientes"]
    B --> B2["Poder Local"]
    B --> B3["Redes de<br/>Dependencia"]
    
    C --> C1["Coerción"]
    C --> C2["Favores"]
    C --> C3["Amenazas"]
    
    D --> D1["Control<br/>Electoral"]
    D --> D2["Fraude<br/>Masivo"]
    D --> D3["Exclusión<br/>Política"]
    
    style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
    style B fill:#0f766e,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style C fill:#d97706,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style D fill:#dc2626,stroke:#1e3a8a,stroke-width:2px,color:#fff`
    },
    {
        id: "constitucion1876",
        title: "Constitución de 1876",
        category: "Marco legal",
        period: "1876-1931",
        learningGoal: "Entender los principios constitucionales de la Restauración y su rol en la legitimación del sistema político.",
        description: "Marco legal fundamental de la Restauración que establecía una monarquía constitucional con un sistema bipartidista. La Constitución de 1876 permitía la coexistencia de dos grandes fuerzas políticas, Conservadores y Liberales, en una supuesta igualdad de poder. Formalmente garantizaba derechos y libertades, pero en la práctica estos se limitaban sistemáticamente mediante leyes especiales y decretos gubernamentales. La Constitución fue utilizada para legitimar el sistema de turnismo y el orden político establécido, proporcionando un marco de legalidad a un sistema fundamentalmente fraudulento. Permanecería en vigor desde 1876 hasta 1931, cuando fue sustituida tras la proclamación de la Segunda República.",
        speech: "La Constitución de 1876 fue el marco legal de la Restauración. Establecía que España era una monarquía constitucional, es decir, que el rey no tenía poder absoluto sino que estaba limitado por la ley. La Constitución permitía la existencia de dos partidos principales, Conservadores y Liberales, que se alternaban en el poder. Formalmente, la Constitución garantizaba derechos y libertades. Sin embargo, en la práctica, estos derechos eran limitados. Por ejemplo, había restricciones al voto, a la libertad de prensa y a la libertad de asociación. La Constitución fue una herramienta para legitimar el sistema de la Restauración, dándole una apariencia de legalidad.",
        mermaid: `flowchart LR
    A["📜 Constitución<br/>1876"] --> B["Estructura<br/>Formal"]
    A --> C["Garantías<br/>Teóricas"]
    A --> D["Limitaciones<br/>Prácticas"]
    
    B --> B1["Monarquía<br/>Constitucional"]
    B --> B2["Bipartidismo"]
    B --> B3["Cortes<br/>Legislativas"]
    
    C --> C1["Derechos<br/>Civiles"]
    C --> C2["Libertades<br/>Públicas"]
    C --> C3["División de<br/>Poderes"]
    
    D --> D1["Sufragio<br/>Censitario"]
    D --> D2["Limitación de<br/>Libertades"]
    D --> D3["Control<br/>Ejecutivo"]
    
    style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
    style B fill:#0f766e,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style C fill:#16a34a,stroke:#1e3a8a,stroke-width:2px,color:#fff
    style D fill:#dc2626,stroke:#1e3a8a,stroke-width:2px,color:#fff`
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = historicalContent;
}
