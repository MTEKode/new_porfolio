import './Footer.sass'
import {t} from "i18next";
import React from "react";

const Footer = () => {

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
                    <li className={'footer-menu-item'}>{t('pages.about_me')}</li>
                    <li className={'footer-menu-item'}>{t('pages.works')}</li>
                    <li className={'footer-menu-item'}>{t('pages.cv')}</li>
                </ul>
            </div>
            <div className={'footer-end'}>© Marcos Toribio 2024</div>
        </div>
    </>
}

export default Footer