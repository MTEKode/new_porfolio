import './Curriculum.sass'
import {useEffect, useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Curriculum = () => {
    const data = {
        about_me: 'Soy un desarrollador web con 9 años de experiencia en Ruby on\n' +
            '                        Rails. Me considero autodidacta, con gran capacidad de\n' +
            '                        aprendizaje y adaptación a nuevas tecnologías. Además, soy un\n' +
            '                        apasionado de la Inteligencia Artificial y me encuentro en\n' +
            '                        constante formación para adquirir nuevas habilidades.\n' +
            '                        Estoy buscando nuevos retos y oportunidades para poner mi\n' +
            '                        experiencia al servicio de otros. Puedo trabajar de forma\n' +
            '                        autónoma y en equipo, y estoy motivado por ofrecer soluciones\n' +
            '                        innovadoras y de alta calidad.',
        exp: [
            {
                date: '2014 - 2017',
                title: 'FullStack Developer',
                company: 'ForumDigital LS',
                desc: 'Trabajamos en varios proyectos, el más grande fue\n' +
                    'un marketplace para Pymes y autónomos en Ruby\n' +
                    'on Rails, AngularJS y MongoDB. También hicimos\n' +
                    'los despliegues y la configuración de los servidores\n' +
                    'con Google Cloud.\n' +
                    'Aprendí todo sobre estas tecnologías y trabajé en\n' +
                    'proyectos variados y desafiantes.'
            },
            {
                date: '2017 - 2018',
                title: 'Frontend Developer',
                company: 'Axpe Consulting',
                desc: 'Mi primera experiencia en una empresa más\n' +
                    'grande. Estuve en varios proyectos con PHP, pero\n' +
                    'en el proyecto que mas trabaje fue como externo\n' +
                    'para ISBAN en AngularJS donde hicimos un\n' +
                    'handover en Madrid para el mismo. Aprendí a\n' +
                    'utilizar metodologías Agile.'
            },
            {
                date: '2018 - 2023',
                title: 'FullStack Developer',
                company: 'Farmy.ch',
                desc: 'Trabajé en el mantenimiento y desarrollo de un\n' +
                    'ecommerce sobre Ruby on Rails. Al principio tenia\n' +
                    'un papel mas Fullstack, pero luego el proyecto\n' +
                    'creció y se dividió en equipos, yo formé parte del\n' +
                    'equipo de Backend.\n' +
                    'También desarrollé la gestión de rutas y envíos de\n' +
                    'los pedidos con Java(Graphopper).'
            },
        ],
        studies: [
            {
                date: '2012 - 2014',
                title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
                company: 'Centro FP Maria Auxiliadora'
            },
            {
                date: '2023',
                title: 'UAMY-CP2-3x: Introducción a la robótica e industria 4.0',
                company: 'EdX'
            },
            {
                date: '2024',
                title: 'Curso completo de Inteligencia Artificial con Python',
                company: 'Frogames.com'
            },
        ]
    }
    const printRef = useRef(null)

    useEffect(() => {
        document.body.style.overflowY = 'scroll'; // Establecer overflow-y del cuerpo como scroll
    }, []);

    const handleDownloadPdf = () => {
        const input = document.getElementById('cv-wrapper');
        printRef.current.classList.add('to-print')
        html2canvas(input, {
            windowWidth: 1920,
            windowHeight: 1080,
            scale: 0.7
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save('curriculum.pdf');

            printRef.current.classList.remove('to-print')
        });
    };

    return <>
        <div className="cv-wrapper" id='cv-wrapper' ref={printRef}>
            <button className='cv-download-button' onClick={handleDownloadPdf}>
                <span>&#8595;</span>Download
            </button>
            <div className='cv-left-column'>
                <div className='cv-left-column-contact'>
                    <a className='link-style' href="/">marcostoribio.info</a>
                    <p>Barcelona, España</p>
                    <a className='link-style' href='mailto:work@marcostoribio.info'>work@marcostoribio.info</a>
                    <br/>
                    <a className='link-style'
                       href="https://www.linkedin.com/in/marcos-toribio">LinkedIn/marcos-toribio</a>
                </div>
                <div className='cv-left-column-tech'>
                    <h4>Tecnologias</h4>
                    <ul>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>Postgresql</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                    </ul>
                </div>
            </div>
            <div className='cv-main-container'>
                <div className='cv-main-title'>
                    <h1>Marcos Toribio</h1>
                    <h3>Fullstack Developer</h3>
                    <p>{data.about_me}</p>
                </div>
                <div className='cv-main-exp'>
                    <h2><span className='link-style'>Experiencia</span></h2>
                    {data.exp.map((item, index) => (
                        <div key={index} className='cv-main-exp-item'>
                            <div className='cv-main-exp-item-date'>
                                {item.date}
                            </div>
                            <div className='cv-main-exp-item-container'>
                                <div className='cv-main-exp-item-title'>
                                    {item.title}
                                </div>
                                <div className='cv-main-exp-item-company'>
                                    {item.company}
                                </div>
                                <div className='cv-main-exp-item-desc'>
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='cv-main-studies'>
                    <h2><span className='link-style'>Estudios</span></h2>
                    {data.studies.map((item, index) => (
                        <div key={index} className='cv-main-studies-item'>
                            <div className='cv-main-exp-item-date'>
                                {item.date}
                            </div>
                            <div className='cv-main-exp-item-container'>
                                <div className='cv-main-exp-item-title'>
                                    {item.title}
                                </div>
                                <div className='cv-main-exp-item-company'>
                                    {item.company}
                                </div>
                                <div className='cv-main-exp-item-desc'>
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default Curriculum;