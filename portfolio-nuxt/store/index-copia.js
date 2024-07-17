import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Immobiliare di Falco",
      category: "Real Estate App",
      img: require('static/new-images/difalco-website.png'),
      url: 'https://www.difalcoimmobiliare.it',
      publishDate: "Nov 04, 2022",
      tag: "Frontend / Bootstrap / Nuxt / Api / Auth0 / Codeigniter",
      clientTitle: "Il cliente",
      objectivesTitle: "Obiettivi",
      objectivesDetails:
        "Piattaforma online che facilita la ricerca e l'accesso a una vasta selezione di annunci immobiliari nell'area di Agrigento, offrendo agli utenti strumenti e risorse utili per supportare le decisioni legate all'acquisto o all'affitto di una proprietà.",
      techTitle: "Real Estate Web App",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: require('static/new-images/list.png')
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: require('static/new-images/estate.png')
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: require('static/new-images/difalco-website2.png'),
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Immobiliare di Falco",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.difalcoimmobiliare.it",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "Javascript",
        "Php",
        "Auth0",
        "Nuxt.js",
        "Codeigniter",
        "Bootstrap5"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Il sito web Immobiliare di Falco è una piattaforma digitale che consente all'agenzia di gestire il proprio database di immobili e interagire in modo efficiente con i propri clienti. Sviluppato con JavaScript, Php, NuxtCodeigniter, Auth0 e database MySql",
        },
        {
          id: uuidv4(),
          details:
            "Quando un utente accede al nostro sito web, ha la possibilità di cercare immobili in vendita o in affitto utilizzando una vasta gamma di filtri e opzioni di ricerca. Grazie alla nostra efficiente piattaforma, i risultati vengono restituiti in modo tempestivo, offrendo una selezione di immobili corrispondenti ai criteri desiderati. Tutti i dati relativi agli immobili sono memorizzati nel nostro affidabile database MySQL, che contiene informazioni dettagliate sulle caratteristiche, i prezzi, le ubicazioni e i contatti."
        },
        {
          id: uuidv4(),
          details:
            "L'utente ha la comodità di visualizzare schede complete per ciascun immobile di interesse, con tutte le informazioni necessarie. Inoltre, abbiamo implementato nuove funzionalità che permettono agli utenti di richiedere appuntamenti per visitare gli immobili direttamente tramite il sito web. Semplicemente selezionando l'immobile desiderato, gli utenti possono scegliere una data e un orario di visita e inviare la richiesta all'agenzia responsabile. Oltre a ciò, offriamo anche la possibilità agli utenti di inviare la propria scheda immobile, qualora abbiano una proprietà da vendere o affittare. Utilizzando un modulo appositamente progettato, gli utenti possono inserire tutte le informazioni pertinenti sulla loro proprietà e inviarle direttamente alle agenzie partner tramite il nostro sito web. Con queste nuove funzionalità, il nostro sito web offre un'esperienza completa e interattiva, consentendo agli utenti di cercare, visualizzare, richiedere appuntamenti e persino inviare le proprie schede immobiliari, tutto in un unico luogo comodo e intuitivo.",
        },
        /*
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        */
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "CP Immobiliare di Falco",
      category: "CMS Agenzia Immobilare",
      img: require('static/new-images/difalco-auth.png'),
      publishDate: "Nov 04, 2021",
      tag: "CMS / UI / javascipt/ Frontend / Nuxt / Vuex / Api / Php / Codeigniter / Auth0",
      clientTitle: "Immobiliare di Falco",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Consente all'agenzia Immobiliare di Falco di mantenere aggiornato il proprio database immobiliare, monitorare le prestazioni, analizzare i dati e pianificare le strategie di ottimizzazione più efficaci per il sito web.",
      techTitle: "Real Estates Control Panel",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: require('static/new-images/home-admin.png')
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: require('static/new-images/home-admin1.png')
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: require('static/new-images/home-admin2.png')
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "Nuxtjs",
        "Codeigniter",
        "Auth0",
        "Bootstrap"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Il Pannello di Controllo di Immobiliare di Falco rappresenta una potente risorsa per le agenzie immobiliari, offrendo un sistema centralizzato e controllato per gestire tutte le attività e i dati del sito web. Attraverso la sua intuitiva interfaccia utente, l'agenzia può svolgere una serie di operazioni essenziali, tra cui:",
        },
        {
          id: uuidv4(),
          details:
          "• Aggiungere nuovi immobili al database con procedure guidate e veloci. È possibile specificare dettagli cruciali come l'ubicazione, le caratteristiche, il prezzo, le immagini e una descrizione completa."
        },
        {
          id: uuidv4(),
          details:
          "• Effettuare modifiche o aggiornamenti ai dettagli di qualsiasi immobile esistente in modo semplice e rapido. È possibile modificare il prezzo, le caratteristiche, le descrizioni, le immagini, gli indirizzi e altre informazioni in qualsiasi momento.",
        },
        {
          id: uuidv4(),
          details:
          "• Eseguire operazioni di massa su gruppi di immobili, come l'aggiornamento simultaneo dei prezzi in tutta l'offerta, per un efficiente aggiornamento dei dati.",
        },
        {
          id: uuidv4(),
          details:
          "• Utilizzare potenti filtri, opzioni di ordinamento e strumenti di ricerca per individuare rapidamente qualsiasi immobile all'interno del database.",
        },
        {
          id: uuidv4(),
          details:
          "• Gestire le autorizzazioni degli utenti per limitare l'accesso a specifiche aree del Pannello di Controllo.",
        },        
        {
          id: uuidv4(),
          details:
            "Inoltre, il Pannello di Controllo garantisce una gestione coerente, coordinata e basata sui dati per tutte le attività del sito web. Permette all'agenzia di mantenere il proprio database immobiliare sempre aggiornato, monitorare le prestazioni, analizzare i dati e pianificare le strategie di ottimizzazione più efficaci per il sito web. Con questa soluzione all'avanguardia, le agenzie immobiliari possono gestire in modo efficiente e strategico il proprio sito web per massimizzare il successo e fornire una migliore esperienza agli utenti",
        },
        /*
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        */
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "Shopping Play",
      category: "UI/UX Design",
      img: require('static/new-images/shop-home.png'),
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/mobile-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Vue è stato scelto come framework front-end per la sua facilità di apprendimento, reattività e supporto all'integrazione di Vuex per la gestione dello stato degli articoli. Vue, Vuex e IndexedDB consentono una gestione reattiva, centralizzata ed efficiente dei dati degli articoli per l'intera applicazione. Lo stato degli articoli è memorizzato in Vuex, mentre i dati permanenti sono archiviati in IndexedDB. Le modifiche a Vuex vengono propagate ad IndexedDB e viceversa, garantendo coerenza.",
        },
        {
          id: uuidv4(),
          details:
            "• Lo stack tecnologico Vue, Vuex e IndexedDB consente una gestione dei dati degli articoli reattiva, centralizzata, coerente ed efficace per l'intera applicazione. I dati sono disponibili in qualsiasi punto dell'app senza dover ricaricare o riconsultare il database. L'aggiunta, la modifica o l'eliminazione di un articolo provoca la modifica dello stato in Vuex, che quindi aggiorna il database IndexedDB. Tutte le modifiche ai dati degli articoli sono così memorizzate in modo permanente.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
      title: "Nodejs Notification System",
      category: "Backend/Nodejs",
      img: require('static/images/domini-home.png'),
      publishDate: "Nov 04, 2021",
      tag: "Web / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Cloud Storage Platform",
          img: require('static/images/domini-login.png'),
        },
        {
          id: uuidv4(),
          title: "Cloud Storage Platform",
          img: require('static/images/domini-notif1.png'),
        },
        {
          id: uuidv4(),
          title: "Cloud Storage Platform",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "Javascript",
        "Nodejs",
        "Cron",
        "Nodemailer",
        "PWA",
        "React",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Il progetto di calendario task nasce dall'esigenza di disporre di un tool centralizzato per pianificare e gestire le attività quotidiane. Nuxt è stato scelto come framework server-side render per offrire un'esperienza utente rapida e reattiva. Tailwind CSS fornisce una personalizzazione granulare del design senza bloccare il layout. I dati delle task (titolo, descrizione, data di scadenza, priorità, ecc.) sono memorizzati in LocalStorage e non su un database. L'utente può aggiungere, completare, posticipare e cancellare le proprie task attraverso un'interfaccia intuitiva. Le task vengono visualizzate come eventi sul calendario e raggruppate per giorno per avere sempre una panoramica del proprio planning. Il progetto mira a semplificare la produttività e il raggiungimento degli obiettivi giornalieri attraverso un unico tool progettato per essere minimalista, reattivo e incentrato sul flusso di lavoro dell'utente. La scelta di Nuxt, Tailwind CSS e LocalStorage consente un'esperienza task-management reattiva ed efficace, mantenendo al contempo una bassa complessità tecnologica ed elevata personalizzazione. Rileviamo i punti chiave sulle tecnologie (Nuxt, Tailwind CSS, LocalStorage), gestione dei dati e obiettivi del progetto al fine di fornire una descrizione concisa senza perdere in rilevanti dettagli.",
        },
        /*
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        */
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
      title: "Gestionale Supremacy",
      category: "Mobile Application",
      img: require('static/images/suprem-dashb.png'),
      publishDate: "Nov 04, 2021",
      tag: "UI / Mobile",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Il progetto di calendario task nasce dall'esigenza di disporre di un tool centralizzato per pianificare e gestire le attività quotidiane. Nuxt è stato scelto come framework server-side render per offrire un'esperienza utente rapida e reattiva. Tailwind CSS fornisce una personalizzazione granulare del design senza bloccare il layout. I dati delle task (titolo, descrizione, data di scadenza, priorità, ecc.) sono memorizzati in LocalStorage e non su un database. L'utente può aggiungere, completare, posticipare e cancellare le proprie task attraverso un'interfaccia intuitiva. Le task vengono visualizzate come eventi sul calendario e raggruppate per giorno per avere sempre una panoramica del proprio planning. Il progetto mira a semplificare la produttività e il raggiungimento degli obiettivi giornalieri attraverso un unico tool progettato per essere minimalista, reattivo e incentrato sul flusso di lavoro dell'utente. La scelta di Nuxt, Tailwind CSS e LocalStorage consente un'esperienza task-management reattiva ed efficace, mantenendo al contempo una bassa complessità tecnologica ed elevata personalizzazione. Rileviamo i punti chiave sulle tecnologie (Nuxt, Tailwind CSS, LocalStorage), gestione dei dati e obiettivi del progetto al fine di fornire una descrizione concisa senza perdere in rilevanti dettagli.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Social App",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Social App",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Social App",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Vue e Firebird costituiscono lo stack tecnologico scelto per l'implementazione dell'architettura di autenticazione utente. Vue è stato selezionato come framework front-end per la sua facilità d'uso, reattività e integrazione con i plugin necessari. Firebird è un database relazionale utilizzato per memorizzare in modo permanente i token di accesso e refresh degli utenti autenticati. Il sistema memorizza i token su Firebird utilizzando una tabella dedicata e una strategia di mapping O/R (Object-Relational) per mantenerne l'integrità. Abbiamo aggiornato i paragrafi relativi al framework front-end scelto, al database e alla strategia di memorizzazione permanente dei dati per Riflettere lo stack Vue e Firebird anziché Nuxt e soluzione basata su database. Il riepilogo della Architettura e degli obiettivi dell'autenticazione rimane pertanto invariato. Controlla che questa versione aggiornata della descrizione rifletta correttamente le tecnologie scelte (Vue, Firebird) e l'approccio generale al progetto. Sono disponibile a fornire ulteriori modifiche per migliorare la chiarezza e l'accuratezza dei contenuti.",
        },
        /*
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        */
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
      title: "My Todo",
      category: "Web Application",
      img: require('static/images/todo1.png'),
      publishDate: "Nov 04, 2021",
      tag: "UI / Mobile",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
      title: "Test Project",
      category: "Web Application",
      img: require('static/images/todo1.png'),
      publishDate: "Nov 04, 2021",
      tag: "UI / Mobile",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
  ],
  clientsHeading: "Some of the brands I worked with",
  clients: [
    {
      id: uuidv4(),
      title: "Amazon",
      img: "../brands/amazon_gray.png",
    },
    {
      id: uuidv4(),
      title: "Sony",
      img: "../brands/sony_gray.png",
    },
    {
      id: uuidv4(),
      title: "Adidas",
      img: "../brands/adidas_gray.png",
    },
    {
      id: uuidv4(),
      title: "FILA",
      img: "../brands/fila_gray.png",
    },
    {
      id: uuidv4(),
      title: "NB",
      img: "../brands/nb_gray.png",
    },
    {
      id: uuidv4(),
      title: "SAMSUNG",
      img: "../brands/samsung_gray.png",
    },
    {
      id: uuidv4(),
      title: "CANON",
      img: "../brands/canon_gray.png",
    },
    {
      id: uuidv4(),
      title: "PUMA",
      img: "../brands/puma_gray.png",
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Sistemista per più di vent’anni e appassionato di tecnologie web sin dai primi anni 2000, con una profonda esperienza nello sviluppo di applicazioni web dinamiche in php e database relazionali, oltre che nell’approfondimento del linguaggio Javascript e dell’interazione con il backend attraverso Ajax. Dal 2018 ho abbracciato lo sviluppo di Node.js e delle librerie Vuejs e React, nonchè del framework Nuxt.js. Alla ricerca di nuovi stimoli e spunti, curioso e attento agli ultimi sviluppi che l'IA sta facendo in molti campi, sopratutto nellla nuova offerta di formidabili strumenti di sviluppo tutti in itinere.",
    },
    {
      id: uuidv4(),
      /*bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",*/
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/realstoman",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/realstoman",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://linkedin.com/in/realstoman",
    },
    {
      id: uuidv4(),
      name: "Youtube",
      icon: "youtube",
      url: "https://youtube.com/c/realstoman",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
