import './Footer.sass'
import {t} from "i18next";
import React, {useEffect} from "react";
import {Events, Link} from "react-scroll";

const Footer = ({setCurrentPageIndex}) => {


    return <>
        <div className={'footer-wrapper'}>
            <div className={'footer-menu'}>
                <ul>
                    <li className={'footer-menu-title footer-menu-item'}>{t('pages.contact')}</li>
                    <li className={'footer-menu-item'}><a
                        href="mailto:work@marcostoribio.info">work@marcostoribio.info</a>
                    </li>
                    <li className={'footer-menu-item'}><a
                        href="https://www.linkedin.com/in/marcos-toribio">LinkedIn/marcos-toribio</a>
                    </li>
                </ul>
                <ul>
                    <li className={'footer-menu-title footer-menu-item'}>{t('pages.name')}</li>
                    <li className={'footer-menu-item'}>
                        <Link to={'section1'} smooth={true} duration={500}>{t('pages.about_me')}</Link>
                    </li>
                    <li className={'footer-menu-item'}>
                        <Link to={'section2'} smooth={true} duration={500}>{t('pages.works')}</Link>
                    </li>
                    <li className={'footer-menu-item'}>
                        <a href="/cv" target="_blank" rel="noopener noreferrer">{t('pages.cv')}</a>
                    </li>
                </ul>
            </div>
            <div className={'footer-end'}>© Marcos Toribio 2024</div>
        </div>
    </>
}

export default Footer