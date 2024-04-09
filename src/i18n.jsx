import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            pages: {
                name: 'Paginas',
                contact: 'Contacto',
                about_me: 'Sobre mí',
                works: 'Trabajos',
                cv: 'Curriculum'
            },
            lang: {
                name: 'Idioma'
            },
            main_sub_desc: 'Con una pasión por el aprendizaje continuo y la adopción de las últimas tecnologías, me destaco en la creación de soluciones web integrales, con énfasis en el desarrollo de backend sólido y escalable, siempre buscando superar los límites de la innovación.',
            development: {
                title: 'Desarrollo',
                description: 'Quizás no sea el típico diseñador detrás de una interfaz gráfica, pero diseño. Mi enfoque está en adaptarme a cambios y nuevas tecnologías. Soy autodidacta y estoy comprometido a crear soluciones funcionales y eficientes, aunque el diseño no sea mi fuerte.',
            },
            goals: {
                title: 'Metas',
                description: 'Como desarrollador fullstack, mi fuerte está en Ruby, pero también me desenvuelvo en otros lenguajes como Python y Java. Actualmente, estoy inmerso en un proyecto personal utilizando Python con TensorFlow. Mi habilidad principal radica en crear aplicaciones robustas y escalables, adaptándome a los desafíos técnicos y optimizando el rendimiento en cada paso del desarrollo.',
            },
            works: {
                name: 'Trabajos',
                title: 'Proyectos',
                subtitle: 'Trabajos, Proyectos, Experimentos...',
                projects: 'Ver mis proyectos',
                cv: 'Ver mi Curriculum'
            },
            cv: {
                title: 'Curriculum Vitae',
            },
            contact: {
                name: 'Contacto',
                title: 'Enviame un mensaje!',
                subtitle: 'Tienes alguna pregunta? Escribeme :)',
                form: {
                    send: 'Enviar',
                    name: 'Tu nombre',
                    email: 'Tu email',
                    msg: 'Tu mensaje'
                }
            },
        }
    },
    en: {
        translation: {
            about_me: "About me"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;