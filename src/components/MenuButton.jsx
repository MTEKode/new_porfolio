import React, {useState} from 'react';
import {useSpring, animated} from '@react-spring/web';
import './MenuButton.sass';
import {t} from "i18next";
import {Link} from "react-scroll";

const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {x, opacity} = useSpring({
        x: isOpen ? 1 : 0,
        opacity: isOpen ? 1 : 0,
        from: {x: 0, opacity: 0},
        config: {tension: 300, friction: 10}
    });

    const {y} = useSpring({
        y: isOpen ? 0 : 100,
        from: {y: 100},
        config: {tension: 300, friction: 10}
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={'menu-button-wrapper'}>
            <button className={'menu-toggle-btn'} onClick={toggleMenu}
                    style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                <animated.div
                    style={{
                        width: 40,
                        height: 40,
                        transform: x.to({
                            range: [0, 1],
                            output: [0, -90]
                        }).to((x) => `rotate(${x}deg)`),
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{color: 'white'}}>{isOpen ? '✖' : '☰'}</span>
                    </div>
                </animated.div>
            </button>
            <animated.div className={'menu-content'}
                          style={{
                              opacity: opacity,
                              display: isOpen ? 'block' : 'none',
                          }}
            >
                <animated.p style={{transform: y.to(y => `translateY(${y}%)`), marginTop: 0}}
                            className={'menu-text-separator'}>
                    {t('pages.name')}
                </animated.p>
                <animated.p style={{transform: y.to(y => `translateY(${y}%)`)}}>
                    <Link to={'section1'} smooth={true} duration={500}>{t('pages.about_me')}</Link>
                </animated.p>
                <animated.p style={{transform: y.to(y => `translateY(${y}%)`)}}>
                    <Link to={'section3'} smooth={true} duration={500}>{t('pages.works')}</Link>
                </animated.p>
                <animated.p style={{transform: y.to(y => `translateY(${y}%)`)}} className={'menu-text-separator'}>
                    {t('pages.contact')}
                </animated.p>
                <animated.p style={{transform: y.to(y => `translateY(${y}%)`)}}>
                    <a href="mailto:work@marcostoribio.info">work@marcostoribio.info</a>
                </animated.p>
                <animated.p style={{transform: y.to(y => `translateY(${y}%)`)}}>
                    <a href="https://www.linkedin.com/in/marcos-toribio">LinkedIn/marcos-toribio</a>
                </animated.p>
                <animated.p style={{transform: y.to(y => `translateY(${y}%)`)}}
                            className={'menu-text-separator'}>{t('lang.name')}</animated.p>
                <animated.p style={{transform: y.to(y => `translateY(${y}%)`)}} className={'menu-lang-btn'}>
                    <a>en</a>
                </animated.p>
            </animated.div>
        </div>
    );
};

export default MenuButton;
