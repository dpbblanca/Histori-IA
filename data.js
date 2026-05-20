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
        description: "La Restauración fue el régimen político español establecido en 1874 tras la Primera República. Se caracterizó por la vuelta de la monarquía borbónica, la promulgación de la Constitución de 1876 y la implementación del sistema de turnismo dinástico entre los partidos Liberal y Conservador. Este sistema buscaba garantizar la estabilidad política mediante acuerdos entre la élite política, aunque se basaba en prácticas fraudulentas como el caciquismo. La Restauración duró hasta 1902, cuando Alfonso XIII alcanzó la mayoría de edad, y representó un período de relativa estabilidad que permitió ciertos avances económicos e institucionales, aunque sin resolver los problemas sociales y territoriales de fondo.",
        speech: "La Restauración fue el régimen político español establecido en 1874 tras la Primera República. Se caracterizó por la vuelta de la monarquía borbónica con la Constitución de 1876 y el sistema de turnismo dinástico. Este régimen se basaba en acuerdos entre Conservadores y Liberales, aunque con prácticas de caciquismo electoral. La Restauración duró hasta 1902 y representó un período de estabilidad política, aunque sin resolver problemas sociales profundos.",
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
            
            style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
            style D fill:#16a34a,stroke:#000,stroke-width:2px,color:#fff
            style E fill:#ea580c,stroke:#000,stroke-width:2px,color:#fff
            style F fill:#0f766e,stroke:#fff,stroke-width:2px,color:#fff
            style G fill:#ea580c,stroke:#fff,stroke-width:2px,color:#fff
        `
    },

    {
        id: "canovas",
        title: "Antonio Cánovas del Castillo",
        category: "Personaje histórico",
        period: "1828-1897",
        learningGoal: "Analizar la función de Cánovas como artífice de la Restauración y su influencia en la política española del siglo XIX.",
        description: "Antonio Cánovas del Castillo (1828-1897) fue el político español más influyente de la Restauración. Historiador, escritor y orador, Cánovas fue el ideólogo y artífice del sistema de la Restauración. Como presidente del Gobierno en múltiples ocasiones, implementó la Constitución de 1876 y el sistema de turnismo con el Partido Liberal de Sagasta. Su objetivo principal era crear un sistema político estable que evitase los conflictos y revoluciones del pasado. Cánovas fue también un defensor de la monarquía como institución estabilizadora. Su importancia radica en que logró establecer un régimen que, aunque basado en el fraude, proporcionó estabilidad institucional durante casi tres décadas. Fue asesinado en 1897 por un anarquista.",
        speech: "Antonio Cánovas del Castillo fue el artífice político de la Restauración. Como historiador y presidente del gobierno, diseñó el sistema de turnismo y la Constitución de 1876. Su objetivo era crear estabilidad política mediante acuerdos entre la élite. Aunque su sistema se basaba en fraude electoral y caciquismo, logró mantener la monarquía constitucional durante casi treinta años.",
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
            
            style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
            style E fill:#16a34a,stroke:#000,stroke-width:2px,color:#fff
            style D4 fill:#ea580c,stroke:#000,stroke-width:2px,color:#fff
        `
    },

    {
        id: "sagasta",
        title: "Práxedes Mateo Sagasta",
        category: "Personaje histórico",
        period: "1825-1900",
        learningGoal: "Comprender el rol de Sagasta como líder del Partido Liberal y su alternancia política con Cánovas.",
        description: "Práxedes Mateo Sagasta (1825-1900) fue el líder del Partido Liberal español durante la Restauración. Junto a Antonio Cánovas del Castillo, protagonizó el sistema de turnismo dinástico que caracterizó el período 1874-1902. Mientras que Cánovas representaba el conservadurismo, Sagasta lideraba un liberalismo moderado que aceptaba los marcos fundamentales del régimen restaurador. Como presidente del Gobierno en varias ocasiones, Sagasta implementó reformas graduales como la Ley de Sufragio Universal de 1890, demostrando una mayor apertura a cambios sociales que los conservadores. Sin embargo, como Cánovas, también participaba en las prácticas de caciquismo y fraude electoral que caracterizaban el sistema. Sagasta falleció en 1900, poco antes del fin de la Restauración.",
        speech: "Práxedes Mateo Sagasta fue el líder del Partido Liberal durante la Restauración. Junto a Cánovas, estableció el sistema de turnismo político. Aunque más progresista, Sagasta también participaba en el fraude electoral y caciquismo. Destacó por implementar reformas graduales, incluyendo el sufragio universal en 1890.",
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
            
            style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
            style E fill:#16a34a,stroke:#000,stroke-width:2px,color:#fff
            style D3 fill:#ea580c,stroke:#000,stroke-width:2px,color:#fff
        `
    },

    {
        id: "turnismo",
        title: "Turnismo Dinástico",
        category: "Proceso político",
        period: "1874-1902",
        learningGoal: "Comprender el mecanismo del turnismo como sistema de control político y sus limitaciones democráticas.",
        description: "El turnismo dinástico fue el mecanismo político central de la Restauración. Se basaba en un acuerdo tácito entre los dos partidos principales: el Partido Conservador de Cánovas y el Partido Liberal de Sagasta. Ambos partidos se comprometían a alternar en el gobierno de forma pacífica, respetando los resultados electorales previamente establecidos. El sistema funcionaba mediante la manipulación electoral: el partido en el gobierno ganaba elecciones de forma asegurada gracias al caciquismo y el fraude. Cuando llegaba el momento del turno, el rey disolvía el Cortes, se convocaban nuevas elecciones, y el otro partido ganaba por mayoría. Este sistema garantizaba la estabilidad política y evitaba conflictos entre élites, pero socavaba los principios democráticos. El turnismo permitió que ambos partidos compartieran el poder de forma ordenada, aunque sin verdadera competencia electoral. Su colapso se produjo a principios del siglo XX, cuando surgieron nuevas fuerzas políticas que no aceptaban las reglas del juego.",
        speech: "El turnismo dinástico fue un acuerdo entre Conservadores y Liberales para alternar en el gobierno. El rey disolvía las Cortes y nuevas elecciones daban la victoria al partido predestinado, gracias al caciquismo. Este sistema garantizaba estabilidad pero basándose en fraude electoral. El turnismo colapsó cuando surgieron nuevas fuerzas políticas.",
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
            
            style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
            style D1 fill:#16a34a,stroke:#000,stroke-width:2px,color:#fff
            style D2 fill:#16a34a,stroke:#000,stroke-width:2px,color:#fff
            style D3 fill:#ea580c,stroke:#000,stroke-width:2px,color:#fff
            style F fill:#0f766e,stroke:#fff,stroke-width:2px,color:#fff
        `
    },

    {
        id: "caciquismo",
        title: "Caciquismo",
        category: "Concepto político",
        period: "1874-1902",
        learningGoal: "Analizar el caciquismo como sistema de control electoral y social durante la Restauración.",
        description: "El caciquismo fue el sistema de control político y social que sustentaba la Restauración en el nivel local. Un cacique era una figura de poder local (terrateniente, comerciante, propietario industrial) que controlaba políticamente a su comunidad mediante diversos mecanismos: coerción económica (amenaza de desempleo o pérdida de tierras), clientelismo (ofrecimiento de favores y empleos), violencia o intimidación, y falsificación de resultados electorales. Los caciques eran intermediarios entre el gobierno central y la población local. Su poder se basaba en la estructura rural de la economía española y la dependencia económica de campesinos y trabajadores. El estado los permitía operar porque garantizaban resultados electorales predecibles que confirmaban al gobierno en el poder. El caciquismo afectaba especialmente a zonas rurales y atrasadas económicamente, perpetuando un sistema político basado en el fraude y la corrupción. La criticidad del caciquismo radicaba en que vaciaba de contenido la democracia formal, convirtiendo las elecciones en rituales sin significado real.",
        speech: "El caciquismo fue el sistema local que sustentaba la Restauración. Los caciques eran personajes poderosos que controlaban electoralmente sus comunidades mediante presión económica, amenazas y fraude. Utilizaban su poder económico para obligar a la población a votar de determinada manera. El caciquismo permitía manipular elecciones a nivel local.",
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
            
            style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
            style F fill:#ea580c,stroke:#000,stroke-width:2px,color:#fff
            style G fill:#0f766e,stroke:#fff,stroke-width:2px,color:#fff
        `
    },

    {
        id: "constitucion-1876",
        title: "Constitución de 1876",
        category: "Marco legal",
        period: "1876-1931",
        learningGoal: "Comprender los principios constitucionales y su aplicación práctica durante la Restauración.",
        description: "La Constitución de 1876 fue el marco legal que sustentó la Restauración durante 55 años (1876-1931). Redactada por moderados liderados por Cánovas, fue una constitución flexible que permitía múltiples interpretaciones. Sus características principales incluyen: la soberanía compartida entre Corona y Cortes (monarquía limitada), un sistema bicameral (Congreso y Senado), sufragio censitario inicialmente (limitado a hombres con cierto nivel de renta), derechos individuales sujetos a leyes ordinarias, y una Iglesia reconocida como confesión del Estado. La flexibilidad de la constitución fue tanto su fortaleza como su debilidad: permitía adaptar el régimen a diferentes circunstancias políticas, pero también facilitaba su manipulación mediante interpretaciones amplias. A pesar de su texto moderado, la constitución fue constantemente violada en la práctica, especialmente en lo referente a derechos políticos y libertades. El cambio de sufragio a universal masculino en 1890 amplió el cuerpo electoral, pero los mecanismos de fraude se mantuvieron. La Constitución de 1876 fue derogada en 1931 con la llegada de la Segunda República.",
        speech: "La Constitución de 1876 fue el marco legal de la Restauración. Establecía una monarquía limitada, Cortes bicamerales y derechos sujetos a leyes ordinarias. Era flexible, lo que permitía su manipulación e interpretación según conveniencia. El sufragio fue censitario hasta 1890, cuando se hizo universal masculino. La Constitución fue constantemente violada en práctica, aunque formalmente se respetaba.",
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
            
            style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
            style F fill:#0f766e,stroke:#fff,stroke-width:2px,color:#fff
            style D5 fill:#ea580c,stroke:#000,stroke-width:2px,color:#fff
        `
    }
];

// Verificación de que los datos estén disponibles
console.log(`Histori-IA: ${historicalContent.length} contenidos cargados correctamente`);
