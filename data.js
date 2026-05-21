/* ============================================================
   HISTORI-IA - BASE DE DATOS DE CONTENIDOS HISTÓRICOS
   Contenidos curados manualmente para Historia de España 2º Bach
   ============================================================ */

const historicalContent = [
    {
        id: "restauracion",
        title: "Sistema de la Restauración",
        category: "Proceso político",
        period: "1874-1902",
        learningGoal: "Comprender la relación entre monarquía, Constitución de 1876, turnismo, caciquismo y estabilidad política.",
        description: "La Restauración fue el régimen político español establecido en 1874 tras la Primera República. Se caracterizó por la vuelta de la monarquía borbónica, la promulgación de una nueva constitución moderada (1876) y el establecimiento del turnismo dinástico. Este sistema permitió una cierta estabilidad política durante 28 años, aunque basada en el fraude electoral y el caciquismo. La Restauración representó un compromiso entre modernización y tradición, intentando conciliar la monarquía con un régimen constitucional limitado.",
        speech: "La Restauración fue el régimen político español establecido en 1874 tras la Primera República. Se caracterizó por la vuelta de la monarquía borbónica con la Constitución de 1876, que establecía una monarquía limitada. El sistema se basaba en el turnismo dinástico: conservadores y liberales se alternaban en el gobierno de forma pactada. Sin embargo, este sistema de aparente democracia se sustentaba en el fraude electoral y el caciquismo local. A pesar de estos problemas, la Restauración logró mantener cierta estabilidad política durante tres décadas, aunque a costa de la verdadera participación democrática.",
        mermaid: `flowchart TD
            A["🏛️ Restauración Borbónica<br/>(1874-1902)"] --> B["📋 Pilares Fundamentales"]
            A --> C["🎭 Principales Figuras"]
            
            B --> B1["Monarquía Constitucional<br/>Alfonso XII"]
            B --> B2["Constitución de 1876<br/>Moderada y flexible"]
            B --> B3["Turnismo Dinástico<br/>Cánovas - Sagasta"]
            B --> B4["Caciquismo Electoral<br/>Control local"]
            
            C --> C1["Antonio Cánovas<br/>del Castillo"]
            C --> C2["Práxedes Mateo<br/>Sagasta"]
            
            B1 --> D["✅ Estabilidad Política"]
            B2 --> D
            B3 --> D
            B4 --> E["⚠️ Fraude Electoral"]
            
            D --> F["Legado: Régimen<br/>hasta 1902"]
            E --> G["Problema: Crítica<br/>social creciente"]
            
            style A fill:#2563eb,stroke:#059669,stroke-width:3px,color:#fff
            style D fill:#10b981,stroke:#000,stroke-width:2px,color:#fff
            style E fill:#f59e0b,stroke:#000,stroke-width:2px,color:#fff
            style F fill:#059669,stroke:#fff,stroke-width:2px,color:#fff
            style G fill:#f59e0b,stroke:#fff,stroke-width:2px,color:#fff
        `
    },

    {
        id: "canovas",
        title: "Antonio Cánovas del Castillo",
        category: "Personaje histórico",
        period: "1828-1897",
        learningGoal: "Analizar la función de Cánovas como artífice de la Restauración y su influencia en la política española del siglo XIX.",
        description: "Antonio Cánovas del Castillo (1828-1897) fue el político español más influyente de la Restauración. Historiador, escritor y orador de formación, Cánovas fue el ideólogo y artífice del régimen restauracionista. Como presidente del gobierno en varias ocasiones, diseñó los pilares institucionales de la Restauración: la Constitución de 1876 y el sistema de turnismo. Su visión conservadora priorizaba la estabilidad monárquica sobre la democracia real. Fue asesinado en 1897 por el anarquista Angiolillo, lo que marcó el inicio del declive del sistema.",
        speech: "Antonio Cánovas del Castillo fue el artífice político de la Restauración. Como historiador y presidente del gobierno, diseñó el sistema de turnismo y la Constitución de 1876. Su pensamiento era moderadamente conservador: defendía una monarquía fuerte pero constitucional. Cánovas mantuvo una tensa relación con el Partido Liberal de Sagasta, pero ambos compartían el objetivo de mantener el orden y evitar revoluciones. Su asesinato en 1897 por un anarquista debilitó el sistema que había creado.",
        mermaid: `flowchart LR
            A["👤 Antonio Cánovas<br/>del Castillo<br/>(1828-1897)"] --> B["Formación y Carrera"]
            A --> C["Logros Políticos"]
            A --> D["Legado"]
            
            B --> B1["Historiador y escritor"]
            B --> B2["Orador destacado"]
            B --> B3["Diputado desde 1854"]
            
            C --> C1["Ideólogo de la<br/>Restauración"]
            C --> C2["Presidente del Gobierno<br/>múltiples ocasiones"]
            C --> C3["Constitución de 1876"]
            C --> C4["Sistema de Turnismo"]
            
            D --> D1["Estabilidad política<br/>1874-1902"]
            D --> D2["Régimen Constitucional"]
            D --> D3["Monarquía conservadora"]
            D --> D4["Asesinado 1897<br/>por anarquista"]
            
            C1 --> E["Visión: España estable<br/>y monárquica"]
            C3 --> E
            C4 --> E
            
            style A fill:#2563eb,stroke:#059669,stroke-width:3px,color:#fff
            style E fill:#10b981,stroke:#000,stroke-width:2px,color:#fff
            style D4 fill:#f59e0b,stroke:#000,stroke-width:2px,color:#fff
        `
    },

    {
        id: "sagasta",
        title: "Práxedes Mateo Sagasta",
        category: "Personaje histórico",
        period: "1825-1900",
        learningGoal: "Comprender el rol de Sagasta como líder del Partido Liberal y su alternancia política con Cánovas.",
        description: "Práxedes Mateo Sagasta (1825-1900) fue el líder del Partido Liberal español durante la Restauración. Junto a Antonio Cánovas del Castillo, protagonizó el sistema de turnismo político. Aunque representaba el liberalismo más moderado, Sagasta aceptó los términos del pacto restauracionista. Como presidente del gobierno en varias ocasiones, implementó reformas graduales como el sufragio universal masculino en 1890. Sin embargo, también participó activamente en el fraude electoral y el caciquismo que caracterizaban el régimen.",
        speech: "Práxedes Mateo Sagasta fue el líder del Partido Liberal durante la Restauración. Junto a Cánovas, estableció el sistema de turnismo político. Aunque más progresista que su rival conservador, Sagasta aceptó el marco institucional de la Restauración. Su principal logro fue la ampliación del sufragio a nivel universal masculino en 1890, una medida progresista para la época. Pero como Cánovas, Sagasta también utilizó el fraude electoral y el caciquismo para mantener su poder. Su muerte en 1900 coincidió con el inicio de la crisis del sistema.",
        mermaid: `flowchart LR
            A["👤 Práxedes Mateo Sagasta<br/>(1825-1900)"] --> B["Posición Política"]
            A --> C["Acciones Principales"]
            A --> D["Comparativa con Cánovas"]
            
            B --> B1["Líder del Partido<br/>Liberal"]
            B --> B2["Liberalismo moderado"]
            B --> B3["Aceptación del régimen<br/>restaurador"]
            
            C --> C1["Presidente del Gobierno<br/>múltiples ocasiones"]
            C --> C2["Sufragio Universal<br/>1890"]
            C --> C3["Reformas sociales<br/>graduales"]
            C --> C4["Caciquismo electoral"]
            
            D --> D1["Cánovas: Conservador<br/>Sagasta: Liberal"]
            D --> D2["Sistema de alternancia<br/>pacífica"]
            D --> D3["Ambos: Fraude electoral"]
            D --> D4["Sagasta: Más reformista"]
            
            C2 --> E["Logro: Expansión del voto"]
            
            style A fill:#2563eb,stroke:#059669,stroke-width:3px,color:#fff
            style E fill:#10b981,stroke:#000,stroke-width:2px,color:#fff
            style D3 fill:#f59e0b,stroke:#000,stroke-width:2px,color:#fff
        `
    },

    {
        id: "turnismo",
        title: "Turnismo Dinástico",
        category: "Proceso político",
        period: "1874-1902",
        learningGoal: "Comprender el mecanismo del turnismo como sistema de control político y sus limitaciones democráticas.",
        description: "El turnismo dinástico fue el mecanismo político central de la Restauración. Se basaba en un acuerdo tácito entre los dos partidos principales: el Partido Conservador de Cánovas y el Partido Liberal de Sagasta. El sistema funcionaba así: el rey disolvía las Cortes, nuevas elecciones daban la victoria al partido predeterminado (mediante el fraude electoral y el caciquismo), y ese partido formaba gobierno. Cuando el rey lo decidía, disolvía nuevamente las Cortes y le tocaba el turno al otro partido. Este sistema permitió una cierta estabilidad durante 28 años, pero a costa de convertir la democracia en una farsa.",
        speech: "El turnismo dinástico fue un acuerdo entre Conservadores y Liberales para alternar en el gobierno. El rey disolvía las Cortes y nuevas elecciones daban la victoria al partido predeterminado mediante fraude. Cuando el rey lo decidía, tocaba el turno al otro partido. Este sistema permitió una aparente estabilidad política y evitó revoluciones, pero vaciaba de contenido la democracia parlamentaria. El turnismo se basaba en el caciquismo local y en la falsificación sistemática de las elecciones. A pesar de sus limitaciones democráticas, el sistema funcionó durante casi tres décadas.",
        mermaid: `flowchart TD
            A["🎭 Turnismo Dinástico<br/>(1874-1902)"] --> B["Actores"]
            A --> C["Mecanismo"]
            A --> D["Resultados"]
            
            B --> B1["Partido Conservador<br/>Cánovas"]
            B --> B2["Partido Liberal<br/>Sagasta"]
            B --> B3["Monarquía<br/>como árbitro"]
            
            C --> C1["Acuerdo de alternancia"]
            C --> C2["Elecciones fraudulentas"]
            C --> C3["Caciquismo electoral"]
            C --> C4["Disolución de Cortes<br/>por el Rey"]
            
            D --> D1["✅ Estabilidad política"]
            D --> D2["✅ Paz social relativa"]
            D --> D3["❌ Falsa democracia"]
            D --> D4["❌ Distancia del<br/>pueblo"]
            D --> D5["❌ Colapso s. XX"]
            
            C1 --> E["Pacto implícito:<br/>Compartir poder"]
            C2 --> E
            C3 --> E
            
            E --> F["Sistema de control<br/>sin democracia real"]
            
            style A fill:#2563eb,stroke:#059669,stroke-width:3px,color:#fff
            style D1 fill:#10b981,stroke:#000,stroke-width:2px,color:#fff
            style D2 fill:#10b981,stroke:#000,stroke-width:2px,color:#fff
            style D3 fill:#f59e0b,stroke:#000,stroke-width:2px,color:#fff
            style F fill:#059669,stroke:#fff,stroke-width:2px,color:#fff
        `
    },

    {
        id: "caciquismo",
        title: "Caciquismo",
        category: "Concepto político",
        period: "1874-1902",
        learningGoal: "Analizar el caciquismo como sistema de control electoral y social durante la Restauración.",
        description: "El caciquismo fue el sistema de control político y social que sustentaba la Restauración en el nivel local. Un cacique era una figura de poder local (terrateniente, comerciante o industrial) que controlaba la población de su zona mediante la presión económica, el clientelismo y la amenaza de violencia. Los caciques manipulaban las elecciones, falsificaban resultados y aseguraban que sus electores votasen según sus instrucciones. Este sistema permitía que los gobiernos centrales controlasen las elecciones sin necesidad de fraude manifiesto a nivel nacional, simplemente coordinándose con los caciques locales.",
        speech: "El caciquismo fue el sistema local que sustentaba la Restauración. Los caciques eran personajes poderosos que controlaban electoralmente sus comunidades mediante presión económica, amenazas de desempleo y violencia. Un campesino que dependía del cacique para trabajar no podía votar libremente: si votaba mal, perdía su empleo. Los caciques falsificaban actas, compraban votos y eliminaban de los registros a los votantes que no les convenían. Este sistema de corrupción y fraude era conocido como el voto de paja. El caciquismo convertía el sufragio en una farsa absoluta.",
        mermaid: `flowchart TD
            A["🕷️ Caciquismo<br/>Sistema de Control Local"] --> B["Actores"]
            A --> C["Mecanismos de Control"]
            A --> D["Resultados"]
            
            B --> B1["Caciques locales"]
            B --> B2["Terratenientes y burgueses"]
            B --> B3["Trabajadores dependientes"]
            B --> B4["Campesinos sin tierra"]
            
            C --> C1["Coerción económica"]
            C --> C2["Amenaza de desempleo"]
            C --> C3["Clientelismo y favores"]
            C --> C4["Falsificación electoral"]
            C --> C5["Violencia e intimidación"]
            
            D --> D1["Elecciones predecibles"]
            D --> D2["Confirmación del gobierno"]
            D --> D3["Estabilidad aparente"]
            D --> D4["Vaciamiento democrático"]
            D --> D5["Corrupción generalizada"]
            
            C1 --> E["'Vota así o pierdes<br/>tu trabajo'"]
            C3 --> E
            
            E --> F["Fraude sistemático"]
            C4 --> F
            C5 --> F
            
            F --> G["Democracia formal<br/>sin contenido real"]
            
            style A fill:#2563eb,stroke:#059669,stroke-width:3px,color:#fff
            style F fill:#f59e0b,stroke:#000,stroke-width:2px,color:#fff
            style G fill:#059669,stroke:#fff,stroke-width:2px,color:#fff
        `
    },

    {
        id: "constitucion-1876",
        title: "Constitución de 1876",
        category: "Marco legal",
        period: "1876-1931",
        learningGoal: "Comprender los principios constitucionales y su aplicación práctica durante la Restauración.",
        description: "La Constitución de 1876 fue el marco legal que sustentó la Restauración durante 55 años (1876-1931). Redactada por moderados liderados por Cánovas, fue una constitución flexible que buscaba conciliar tradición y modernidad. Establecía una monarquía limitada, Cortes bicamerales (Senado y Congreso), y una serie de derechos sujetos a desarrollo por leyes ordinarias. Su gran flexibilidad permitía interpretaciones distintas según los gobiernos, lo que facilitaba la aplicación selectiva de derechos. Esta característica hizo que la Constitución fuese un instrumento muy útil para justificar legalmente las prácticas de fraude y caciquismo.",
        speech: "La Constitución de 1876 fue el marco legal de la Restauración. Establecía una monarquía limitada, Cortes bicamerales y derechos sujetos a leyes ordinarias. Era flexible, lo que permitía que los gobiernos la interpretasen de formas muy distintas. Por ejemplo, permitía tanto el sufragio censitario como el universal, dependiendo de la ley electoral que se aprobase. La Iglesia Católica era reconocida como confesión del Estado, reflejando la ideología conservadora del régimen. Aunque formalmente establecía un sistema constitucional, en la práctica era constantemente violada mediante el fraude electoral y el caciquismo.",
        mermaid: `flowchart TD
            A["📋 Constitución de 1876"] --> B["Pilares Fundamentales"]
            A --> C["Características"]
            A --> D["Impacto Práctico"]
            
            B --> B1["Monarquía Limitada"]
            B --> B2["Soberanía compartida<br/>Corona-Cortes"]
            B --> B3["Sistema Bicameral"]
            
            C --> C1["Sufragio censitario<br/>después universal"]
            C --> C2["Iglesia como confesión<br/>del Estado"]
            C --> C3["Derechos sujetos a<br/>leyes ordinarias"]
            C --> C4["Flexibilidad interpretativa"]
            
            D --> D1["✅ Legitimidad legal<br/>del régimen"]
            D --> D2["⚠️ Interpretación flexible"]
            D --> D3["❌ Constante violación<br/>en la práctica"]
            D --> D4["❌ Derechos limitados"]
            D --> D5["Derogada en 1931<br/>República"]
            
            C4 --> E["Permite manipulación<br/>por los gobiernos"]
            E --> F["Régimen de facto vs<br/>de jure"]
            
            style A fill:#2563eb,stroke:#059669,stroke-width:3px,color:#fff
            style F fill:#059669,stroke:#fff,stroke-width:2px,color:#fff
            style D5 fill:#f59e0b,stroke:#000,stroke-width:2px,color:#fff
        `
    }
];

// Verificación de que los datos estén disponibles
console.log(`Histori-IA: ${historicalContent.length} contenidos cargados correctamente`);
