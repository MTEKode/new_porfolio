import './aboutMe.sass'
import React from "react";
import {t} from "i18next";


const AboutMe = () => {
    return <>
        <div className={'aboutme-wrapper'}>
            <div className={'articles development'}>
                <div className={'article-content'}>
                    <h1>{t('development.title')}</h1>
                    <p>{t('development.description')}</p>
                </div>
            </div>
            <div className={'articles goals'}>
                <div className={'article-content'}>
                    <h1>{t('goals.title')}</h1>
                    <p>{t('goals.description')}</p>
                </div>
            </div>
        </div>
    </>;
}

export default AboutMe;