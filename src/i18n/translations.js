export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Skills",
      education: "Educación",
      contact: "Contacto",
    },
    header: {
      eyebrow: "Desarrollador de Software",
      subtitle:
        "Estudiante de Ingeniería en Computación. Construyo aplicaciones web completas, desde el diseño hasta el código en producción.",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "Sobre mí",
      headlinePre: "Convierto ideas en ",
      headlineEm: "interfaces claras",
      headlinePost: " y funcionales.",
      paragraph:
        "Soy estudiante de Ingeniería en Computación en la Universidad de la República y desarrollador de software. Mi formación académica me dio las bases; el resto lo construí de forma autodidacta, con cursos, documentación y proyectos propios que me permitieron trabajar tanto en frontend con React y Next.js como en backend con Node.js. Estoy abierto a distintos roles dentro del desarrollo y busco dar el salto a mi primera experiencia profesional en la industria.",
      facts: [
        { key: "rol", value: "Desarrollador de Software" },
        { key: "formación", value: "Ing. en Computación, Udelar" },
        { key: "stack", value: "Next.js / Tailwind CSS / Supabase" },
        { key: "inglés", value: "Avanzado (C2), Univ. of Michigan" },
        { key: "ubicación", value: "Montevideo, Uruguay" },
        { key: "estado", value: "Buscando primera experiencia" },
      ],
    },
    skills: {
      eyebrow: "Skills",
      headlinePre: "Con lo que ",
      headlineEm: "trabajo",
      headlinePost: ".",
      categories: {
        Lenguaje: "Lenguajes",
        Framework: "Frameworks",
        Herramienta: "Herramientas",
      },
    },
    education: {
      eyebrow: "Educación",
      headlinePre: "Formación ",
      headlineEm: "continua",
      headlinePost: ".",
      scrollHint: "Seguí scrolleando",
      degree: {
        title: "Ingeniero en Computación",
        subtitle: "Facultad de Ingeniería · Udelar",
      },
    },
    projects: {
      eyebrow: "Proyectos",
      headlinePre: "Cosas que ",
      headlineEm: "construí",
      headlinePost: ".",
      liveLabel: "Ver sitio",
      githubLabel: "Ver en GitHub",
      whatItDoes: "Qué hace",
      stackLabel: "Stack",
      back: "Volver a proyectos",
      items: {
        ironfuel: {
          type: "E-COMMERCE",
          badge: null,
          description:
            "Tienda online de suplementos deportivos con checkout propio y panel de administración.",
          longDescription:
            "E-commerce completo de suplementos deportivos: catálogo navegable, carrito persistente, autenticación de usuarios y checkout con seguimiento de pedidos de punta a punta.",
          features: [
            "Catálogo con paginación, filtros por categoría/subcategoría/marca y búsqueda",
            "Página de detalle con productos relacionados por marca y categoría",
            "Carrito con panel lateral animado y persistencia en localStorage",
            "Registro con confirmación por email y rutas protegidas",
            "Checkout con validación y métodos de pago (transferencia, efectivo, Mercado Pago)",
            "Historial de pedidos con estados: pendiente → confirmado → en camino → entregado",
          ],
        },
        questlog: {
          type: "EDTECH",
          badge: null,
          description:
            "Plataforma que gamifica el estudio: convierte tus materias en misiones, niveles y recompensas.",
          longDescription:
            "Cada sesión de estudio es una misión, cada materia es un desafío y cada día que estudiás suma a tu racha. A medida que progresás subís de nivel, desbloqueás títulos y ganás monedas para gastar en la tienda.",
          features: [
            "Sesiones de estudio que dan XP y monedas, con racha diaria y multiplicadores",
            "Sistema de niveles calculado automáticamente en la base de datos",
            "Onboarding RPG: elegís avatar y arquetipo (Caballero del Saber, Mago del Conocimiento o Elfo Explorador)",
            "Árbol de 15 habilidades que cambian cómo jugás: más XP, rachas más fuertes, bonus de monedas",
            "Flashcards y trivia con recompensas extra",
          ],
        },
        playrank: {
          type: "GAMING",
          badge: null,
          description:
            "Aplicación para ratear, descubrir nuevas experiencias y elegir tu videojuegos favoritos.",
          longDescription:
            "Rateá tus juegos favoritos, armá tu Top 5, descubrí qué jugar según tu mood y encontrá los mejores precios. Toda la data de juegos sale de la API de RAWG, y el comparador de precios cruza tiendas como Steam, GOG y Epic en tiempo real.",
          features: [
            "Explorar juegos con filtros por género y plataforma, ordenados por metacritic, rating o fecha",
            "Página de cada juego con descripción, screenshots, trailer y tags",
            "Sistema de rating de 1 a 5 estrellas con persistencia local",
            "Playlist de favoritos con estadísticas personales",
            "Top 5 personal reordenable",
            "Comparador de precios entre Steam, GOG, Epic y más tiendas",
          ],
        },
        reservapp: {
          type: "SAAS",
          badge: "EN DESARROLLO",
          description:
            "Sistema de reserva de turnos para negocios de servicios: peluquerías, estudios, consultorios.",
          longDescription:
            "Plataforma de gestión de turnos online para negocios uruguayos. Conecta negocios con sus clientes, permitiendo reservar turnos 24/7 desde una página pública única por negocio.",
          features: [
            "Agenda inteligente con visualización de turnos y sin superposiciones",
            "Gestión de empleados con servicios y horarios asignados por persona",
            "Recordatorios automáticos antes de cada turno",
            "Horarios flexibles: días, feriados y franjas configurables",
            "Página pública propia por negocio con URL única para compartir",
            "Roles diferenciados: dueño de negocio y cliente, con onboarding propio para cada uno",
          ],
        },
      },
    },
    contact: {
      eyebrow: "Contacto",
      headlinePre: "Trabajemos ",
      headlineEm: "juntos",
      headlinePost: ".",
      blurb:
        "¿Tenés un proyecto en mente o una oportunidad para charlar? Escribime, siempre estoy abierto a nuevas conversaciones.",
      modal: {
        titlePre: "Enviame un ",
        titleEm: "correo",
        titlePost: ".",
        subtitle: (email) => `Completá el formulario y me llega directo a ${email}.`,
        nameLabel: "Tu nombre",
        namePlaceholder: "Nombre y apellido",
        emailLabel: "Tu email",
        emailPlaceholder: "tu@email.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Contame sobre tu proyecto o propuesta...",
        send: "Enviar mensaje",
        sending: "Enviando...",
        errorMsg: (email) =>
          `No se pudo enviar el mensaje. Probá de nuevo o escribime directo a ${email}.`,
        successTitlePre: "Mensaje ",
        successTitleEm: "enviado",
        successTitlePost: ".",
        successBlurb: "Gracias por escribirme, te respondo a la brevedad.",
        close: "Cerrar",
        subjectPrefix: "Contacto desde el portfolio",
      },
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    header: {
      eyebrow: "Software Developer",
      subtitle:
        "Computer Engineering student. I build complete web applications, from design to production code.",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About me",
      headlinePre: "I turn ideas into ",
      headlineEm: "clear interfaces",
      headlinePost: " that work.",
      paragraph:
        "I'm a Computer Engineering student at Universidad de la República and a software developer. My academic background gave me the fundamentals; the rest I built on my own, through courses, documentation, and personal projects that let me work across the frontend with React and Next.js as well as the backend with Node.js. I'm open to different roles within development and looking to land my first professional experience in the industry.",
      facts: [
        { key: "role", value: "Software Developer" },
        { key: "education", value: "Computer Eng., Udelar" },
        { key: "stack", value: "Next.js / Tailwind CSS / Supabase" },
        { key: "english", value: "Advanced (C2), Univ. of Michigan" },
        { key: "location", value: "Montevideo, Uruguay" },
        { key: "status", value: "Looking for my first role" },
      ],
    },
    skills: {
      eyebrow: "Skills",
      headlinePre: "What I ",
      headlineEm: "work with",
      headlinePost: ".",
      categories: {
        Lenguaje: "Languages",
        Framework: "Frameworks",
        Herramienta: "Tools",
      },
    },
    education: {
      eyebrow: "Education",
      headlinePre: "Ongoing ",
      headlineEm: "learning",
      headlinePost: ".",
      scrollHint: "Keep scrolling",
      degree: {
        title: "Computer Engineer",
        subtitle: "School of Engineering · Udelar",
      },
    },
    projects: {
      eyebrow: "Projects",
      headlinePre: "Things I've ",
      headlineEm: "built",
      headlinePost: ".",
      liveLabel: "View site",
      githubLabel: "View on GitHub",
      whatItDoes: "What it does",
      stackLabel: "Stack",
      back: "Back to projects",
      items: {
        ironfuel: {
          type: "E-COMMERCE",
          badge: null,
          description:
            "Online sports supplement store with its own checkout and admin panel.",
          longDescription:
            "A complete sports supplement e-commerce: browsable catalog, persistent cart, user authentication, and checkout with end-to-end order tracking.",
          features: [
            "Catalog with pagination, filters by category/subcategory/brand, and search",
            "Product detail page with related items by brand and category",
            "Cart with an animated side panel and localStorage persistence",
            "Sign-up with email confirmation and protected routes",
            "Checkout with validation and payment methods (bank transfer, cash, Mercado Pago)",
            "Order history with statuses: pending → confirmed → on the way → delivered",
          ],
        },
        questlog: {
          type: "EDTECH",
          badge: null,
          description:
            "A platform that gamifies studying: turns your subjects into quests, levels, and rewards.",
          longDescription:
            "Every study session is a quest, every subject is a challenge, and every day you study adds to your streak. As you progress you level up, unlock titles, and earn coins to spend in the shop.",
          features: [
            "Study sessions that grant XP and coins, with daily streaks and multipliers",
            "Level system calculated automatically in the database",
            "RPG onboarding: pick an avatar and archetype (Knight of Knowledge, Mage of Wisdom, or Elven Explorer)",
            "A 15-skill tree that changes how you play: more XP, stronger streaks, coin bonuses",
            "Flashcards and trivia with extra rewards",
          ],
        },
        playrank: {
          type: "GAMING",
          badge: null,
          description:
            "An app to rate, discover new experiences, and pick your favorite video games.",
          longDescription:
            "Rate your favorite games, build your Top 5, find out what to play based on your mood, and get the best prices. All game data comes from the RAWG API, and the price comparator checks stores like Steam, GOG, and Epic in real time.",
          features: [
            "Explore games with filters by genre and platform, sorted by metacritic, rating, or date",
            "A page for each game with description, screenshots, trailer, and tags",
            "1-to-5-star rating system with local persistence",
            "Favorites playlist with personal stats",
            "A reorderable personal Top 5",
            "Price comparator across Steam, GOG, Epic, and more stores",
          ],
        },
        reservapp: {
          type: "SAAS",
          badge: "IN PROGRESS",
          description:
            "A booking system for service businesses: hair salons, studios, clinics.",
          longDescription:
            "An online booking platform for Uruguayan businesses. It connects businesses with their customers, letting them book appointments 24/7 from a single public page per business.",
          features: [
            "Smart schedule view with no overlapping bookings",
            "Staff management with services and hours assigned per person",
            "Automatic reminders before each appointment",
            "Flexible hours: configurable days, holidays, and time slots",
            "A dedicated public page per business with a shareable URL",
            "Distinct roles: business owner and customer, each with their own onboarding",
          ],
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      headlinePre: "Let's work ",
      headlineEm: "together",
      headlinePost: ".",
      blurb:
        "Have a project in mind or an opportunity to talk about? Reach out, I'm always open to new conversations.",
      modal: {
        titlePre: "Send me an ",
        titleEm: "email",
        titlePost: ".",
        subtitle: (email) => `Fill out the form and it lands straight in ${email}.`,
        nameLabel: "Your name",
        namePlaceholder: "First and last name",
        emailLabel: "Your email",
        emailPlaceholder: "you@email.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project or proposal...",
        send: "Send message",
        sending: "Sending...",
        errorMsg: (email) =>
          `Couldn't send the message. Try again or email me directly at ${email}.`,
        successTitlePre: "Message ",
        successTitleEm: "sent",
        successTitlePost: ".",
        successBlurb: "Thanks for reaching out, I'll get back to you soon.",
        close: "Close",
        subjectPrefix: "Portfolio contact",
      },
    },
  },
};
