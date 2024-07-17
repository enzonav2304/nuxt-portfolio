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
      detailsTitle: "Poduction",
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
          title: "Agenzia Immobilare",
          details: "Compravendita di immobili",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.difalcoimmobiliare.it",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "+39 3357605541",
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
      url: 'https://www.difalcoimmobiliare.it/admin',
      publishDate: "Nov 04, 2021",
      tag: "CMS / UI / javascipt/ Frontend / Nuxt / Vuex / Api / Php / Codeigniter / Auth0",
      clientTitle: "Immobiliare di Falco",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Consente all'agenzia Immobiliare di Falco di mantenere aggiornato il proprio database immobiliare, monitorare le prestazioni, analizzare i dati e pianificare le strategie di ottimizzazione più efficaci per il sito web.",
      techTitle: "Real Estates Control Panel",
      detailsTitle: "Visione",
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
          details: "Immobiliare di Falco",
        },
        {
          id: uuidv4(),
          title: "Agenzia Immobilare",
          details: "Compravendita di immobili",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.difalcoimmobiliare.it",
        },
        {
          id: uuidv4(),
          title: "Telefono",
          details: "+39 3357605541",
        },
      ],
      technologies: [
        "Vuejs",
        "Codeigniter",
        "Auth0",
        "Bootstrap"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Il Pannello di Controllo di Immobiliare di Falco è il CMS dell'agenzia immobiliar, offrendo un sistema centralizzato e controllato per gestire tutte le attività e i dati del sito web. Attraverso la sua intuitiva interfaccia utente, l'agenzia può svolgere una serie di operazioni essenziali, tra cui:",
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
          "• Eseguire operazioni di massa su gruppi di immobili, come l'aggiornamento simultaneo dello stato degli immobili, per un efficiente aggiornamento dei dati.",
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
      category: "Web App",
      img: require('static/new-images/shop-home.png'),
      url: 'https://shoppingplay.netlify.app/',
      github_url: 'https://github.com/TrevorReznick/vue-shopping-cart',
      publishDate: "Nov 04, 2021",
      tag: "Frontend / Vuetify / Vue / Api / IndexedDb / Vuex",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Realizzare un applicazione shopping cart completa utilizzando il sistema di memorizzazione locale di indexedDb",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: require('static/new-images/shop-list1.png')
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: require('static/new-images/shop-list2.png')
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: require('static/new-images/shop-list3.png')
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
          details: "https://shoppingplay.netlify.app",
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
        "Vuejs",
        "Vuetify",
        "Vuex",
        "IndexedDb"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Vue è il framework javascript famoso per la sua facilità di apprendimento, reattività e supporto all'integrazione di Vuex per la gestione dello stato degli articoli. Vue, Vuex e IndexedDB consentono una gestione reattiva, centralizzata ed efficiente dei dati degli articoli per l'intera applicazione. Lo stato degli articoli è memorizzato in Vuex, mentre i dati permanenti sono archiviati in IndexedDB. Le modifiche a Vuex vengono propagate ad IndexedDB e viceversa, garantendo coerenza.",
        },
        {
          id: uuidv4(),
          details:
            "• Il framework Css qui utilizzato è Vuetify, libreria di componenti UI per Vue.js, un framework JavaScript per la creazione di interfacce utente offre un set completo di componenti predefiniti e temi stilizzati, consentendo agli sviluppatori di creare rapidamente interfacce utente moderne e reattive",
        },
        {
          id: uuidv4(),
          details:
            "Per testare l'applicazione, dalla home si possono aggiungere articoli al carrello della spesa; il sistema memorizzerà gli elementi selezionati, fornendo i subtotali relativi ad ogni articolo, totale ex tassazioe e post tassazione",
        },
        {
          id: uuidv4(),
          details:
            "Todo: il sistema è da implementare con invio dell'ordine e relativo dettaglio al server, e in caso di esisto positivo bisognerà gestire l'esisto della risposta",
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
      title: "Nodejs PWA Notification System",
      category: "Backend/Nodejs",
      img: require('static/images/domini-home.png'),
      url: 'https://www.dominiacency.com',
      publishDate: "Nov 04, 2021",
      tag: "Backend / Nodejs / MySql/ OOP/ PWA / React / Cron / Nodemailer",
      clientTitle: "About Client",
      objectivesTitle: "Obiettivi",
      objectivesDetails:
        "Il progetto proposto consiste nello sviluppo di un backend basato su Node.js per gestire il sistema di notifiche push per Progressive Web App (PWA), email e notifiche da un'applicazione, utilizzando il paradigma di programmazione orientata agli oggetti (OOP).",
      techTitle: "Tools & Technologies",
      detailsTitle: "Task",
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
          details: "Domini Agency S.R.L. ",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Social M. Management, Influencer Marketing",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.dominiagency.com",
        },
        {
          id: uuidv4(),
          title: "Whattsup",
          details: "+39 353 422 6003",
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
            "Caratteristiche principali del progetto: ",         
        },
        {
          id: uuidv4(),
          details:
            "• Node.js Backend: Utilizzeremo Node.js, un runtime JavaScript lato server, per creare il backend. Node.js offre un'architettura event-driven e asincrona, che è ideale per le applicazioni che richiedono un alto numero di connessioni simultanee come le notifiche push. ",
        },
        {
          id: uuidv4(),
          details:
            "• Gestione delle Notifiche PWA: Implementeremo il supporto per le notifiche push PWA, consentendo agli utenti di ricevere notifiche direttamente sulle loro app web progressive. Utilizzeremo i servizi di notifica push forniti dai browser come Firebase Cloud Messaging (FCM) per inviare le notifiche. ",
        },
        {
          id: uuidv4(),
          details:
            "• Invio di Email: Integreremo un servizio di invio email Nodemailer per consentire l'invio di notifiche tramite email. Sarà possibile personalizzare il contenuto delle email e includere collegamenti o informazioni pertinenti. Notifiche dall'Applicazione: ",
        },
        {
          id: uuidv4(),
          details:
            "• Creeremo un'API per consentire all'applicazione di inviare notifiche al backend. Questo consentirà all'applicazione di inviare notifiche personalizzate ai suoi utenti tramite il backend, utilizzando diversi canali come le notifiche push e le email. Gestione dell'autenticazione e dell'autorizzazione: Implementeremo un sistema di autenticazione e autorizzazione per garantire che solo gli utenti autorizzati possano inviare notifiche. Potrebbe includere l'uso di token JWT (JSON Web Token) per l'autenticazione e l'autorizzazione basata sui ruoli per controllare l'accesso alle funzionalità di invio delle notifiche.",
        },
        {
          id: uuidv4(),
          details:
            "• Struttura OOP: Implementeremo una struttura orientata agli oggetti per organizzare il codice in classi e moduli riutilizzabili. Questo ci consentirà di gestire in modo efficiente le diverse funzionalità del sistema di notifiche e promuovere la manutenibilità del codice.",
        }
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
        "Realizare un gestionale Javascript e Php per un gioco online, realizzando librerie DRY sia per il lato forntend che per il lato backend",
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
          "• Architettura client-server: Il progetto si basa su un'architettura client-server, dove il client rappresenta l'interfaccia utente del gioco online e il server gestisce la logica di backend e l'interazione con il database.",
        },
        {
          id: uuidv4(),
          details:
          "• JavaScript (ES5): Attualmente, il progetto è sviluppato utilizzando JavaScript nella versione ES5. Si tratta di una versione precedente rispetto ad ES6, ma offre comunque un'ampia gamma di funzionalità per la programmazione lato client. Saranno implementati concetti OOP come classi, oggetti e metodi per organizzare il codice in modo modulare e riutilizzabile.",
        },
        {
          id: uuidv4(),
          details:
          "• Librerie DRY: Durante lo sviluppo del progetto, si farà un tentativo di implementare librerie DRY per evitare la duplicazione del codice e promuovere la riusabilità. Le funzionalità comuni saranno estratte in moduli o classi separati, che potranno essere richiamati e utilizzati in diverse parti dell'applicazione senza la necessità di riscrivere il codice.",
        },
        {
          id: uuidv4(),
          details:
          "• PHP: Il lato server dell'applicazione sarà sviluppato utilizzando PHP per gestire la logica di backend. Saranno implementate funzionalità come la gestione delle richieste del client, l'elaborazione dei dati e l'interazione con il database MySQL.",
        },
        {
          id: uuidv4(),
          details:
          "• Manipolazione del DOM: Utilizzeremo il DOM per interagire con l'interfaccia utente del gioco. La generazione di tabelle dinamiche sarà implementata sia sul lato frontend che sul lato backend. Saranno utilizzati metodi JavaScript per manipolare il DOM e creare tabelle dinamiche in base ai dati ricevuti dal server.",
        },
        {
          id: uuidv4(),
          details:
          "• TODO: Porting allo stack JavaScript più moderno (ES6+): Poiché il progetto è rimasto incompiuto, è possibile considerare un futuro porting allo stack JavaScript più moderno, come ES6 o versioni successive. Il porting consentirà di beneficiare delle nuove funzionalità, delle migliorie di performance e della sintassi più avanzata offerta da ES6 e versioni successive.",
        }
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
      url: 'https://todolist-96d98d.netlify.app/app',
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
            "L'applicazione ToDo List nasce dall'esigenza di avere un calendario di task o appuntamenti sul lavoro che faccio normalmente",
        },
        {
          id: uuidv4(),
          details:
            "Basato su Nuxtjs, il framework Css utilizzato è Tailwindcss, noto per la sua versatilità e la sua potenza, la memorizzazione dei dati avviene tramite i Local Storage; vuex viene utilizzato per la gestione dei contenuti dell'applicazione",
        },
        {
          id: uuidv4(),
          details:
            "La memorizzazione dei dati avviene tramite i Local Storage",
        },
        {
          id: uuidv4(),
          details:
            "Todo: implementare un sistema di memorizzazione multi browser, autenticazione"
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
      title: "ES6 Javascript Porting",
      category: "Web Application",
      img: require('static/images/todo1.png'),
      url: 'https://www.difalcoimmobiliare.it',
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
      title: "Open jAjax Demo",
      category: "Web Application",
      img: require('static/images/todo1.png'),
      url: 'https://www.difalcoimmobiliare.it',
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
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbl",
      title: "Bookshop",
      category: "Web Application",
      img: require('static/new-images/bookshop-home.png'),
      url: 'http://bookshop-t.atwebpages.com/index.php',
      publishDate: "Nov 04, 2021",
      tag: "UI / Css / Dynamic Website / Php / Javascript",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Realizzazione di un sito web dinamico vendita di libri giuridici, banche dati specializzate, per fornire ai professionisti un'ampia gamma di risorse legali affidabili e di alta qualità.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: require('static/new-images/bookshop-home.png'),
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: require('static/new-images/bookshop-details.png')
        },
        {
          id: uuidv4(),
          title: "Apple Design System",
          img: require('static/new-images/bookshop-mission.png')
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
