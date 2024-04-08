import React, {useRef, useEffect, useState} from 'react';
import './App.sass';
import './components/Nav.jsx';
import mePng from './assets/me.png';
import Nav from './components/Nav.jsx';
import {useTranslation} from 'react-i18next'; // Importar hook de traducción
import Footer from './components/Footer.jsx';
import {Element, Events, scroller, scrollSpy} from 'react-scroll';
import { useSwipeable } from 'react-swipeable';

function App() {
    const sectionRefs = useRef([]);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [currentPageIndex, setCurrentPageIndex] = useState();
    const [isAnimating, setIsAnimating] = useState(false);
    const {t} = useTranslation();

    const getCurrentPageIndex = () => {
        const scrollPosition = window.scrollY;
        let currentPageIndex = 0;
        sectionRefs.current.forEach((ref, index) => {
            const childrenDiv = ref.childBindings.domNode;
            const topOffset = childrenDiv.offsetTop;
            const bottomOffset = topOffset + childrenDiv.offsetHeight;
            if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
                currentPageIndex = index;
            }
        });
        console.log(currentPageIndex)
        return currentPageIndex;
    };
    const scrollToNextSection = () => {
        const nextSectionIndex = currentPageIndex + 1;
        const nextSectionName = sectionRefs.current[nextSectionIndex].props.name
        scroller.scrollTo(nextSectionName, {smooth: true, duration: 500});
        console.log(nextSectionName)
        setCurrentPageIndex(nextSectionIndex)
    };

    const scrollToPrevSection = () => {
        const nextSectionIndex = currentPageIndex - 1;
        const nextSectionName = sectionRefs.current[nextSectionIndex].props.name
        scroller.scrollTo(nextSectionName, {smooth: true, duration: 500, });
        console.log(nextSectionName)
        setCurrentPageIndex(nextSectionIndex)
    };

    const handleScrollEnd = () => {
        setIsAnimating(false);
    };

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            console.log("User Swiped!", eventData);
            const delta = Math.sign(eventData.deltaY);
            if (delta > 0 && currentPageIndex > 0) {
                scrollToPrevSection();
            } else if (delta < 0 && currentPageIndex < 4) {
                scrollToNextSection();
            }
        }
    });

    useEffect(() => {
        scrollSpy.update();
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        const handleScroll = (event) => {
            if (isAnimating) return;

            setIsAnimating(true);
            const delta = Math.sign(event.deltaY);
            console.log('handleScroll', delta)
            if (delta > 0 && currentPageIndex < 4) {
                scrollToNextSection();
            } else if (delta < 0 && currentPageIndex > 0) {
                scrollToPrevSection();
            }

        };

        // Escuchar el evento de scroll
        window.addEventListener('wheel', handleScroll);


        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentPageIndex, isAnimating]);

    useEffect(() => {
        const currentPageIndex = getCurrentPageIndex();
        setCurrentPageIndex(currentPageIndex);

        Events.scrollEvent.register('end', handleScrollEnd);

        return () => {
            Events.scrollEvent.remove('end', handleScrollEnd);
        };
    }, []);

    return (
        <div {...handlers}>
            <Nav/>
            <Element name='section0' ref={(section) => (sectionRefs.current[0] = section)}>
                <section className={'main-content'} style={{height: windowHeight}}>
                    <div className={'main-div'}>
                        <h1>FullStack<br/>Developer.</h1>
                        <p>{t('main_sub_desc')}</p>
                    </div>
                    <div className={'img-div'}>
                        <img src={mePng} alt="me"/>
                    </div>
                </section>
            </Element>
            <Element name='section1' ref={(section) => (sectionRefs.current[1] = section)}>
                <section className={'section'} style={{height: windowHeight}}>
                    <div>
                        <div className={'development'}>
                            <h1>{t('development.title')}</h1>
                            <p>{t('development.description')}</p>
                        </div>
                        <div className={'goals'}>
                            <h1>{t('goals.title')}</h1>
                            <p>{t('goals.description')}</p>
                        </div>
                    </div>
                </section>
            </Element>
            <Element name='section2' ref={(section) => (sectionRefs.current[2] = section)}>
                <section className={'section'} style={{height: windowHeight}}>
                    <div>
                        <div>
                            <h1>{t('works.title')}</h1>
                            <p>{t('works.description')}</p>
                        </div>
                        <div>
                            <h1>{t('cv.title')}</h1>
                            <p>{t('cv.description')}</p>
                        </div>
                    </div>
                </section>
            </Element>
            <Element name='section3' ref={(section) => (sectionRefs.current[3] = section)}>
                <section className={'section'} style={{height: windowHeight}}>
                    <div>
                        <div>
                            <h1>{t('contact.title')}</h1>
                            <p>{t('contact.description')}</p>
                        </div>
                    </div>
                </section>
            </Element>
            <Element name='section4' ref={(section) => (sectionRefs.current[4] = section)}>
                <section className={'section'} style={{height: windowHeight}}>
                    <Footer/>
                </section>
            </Element>
        </div>
    );
}

export default App;
