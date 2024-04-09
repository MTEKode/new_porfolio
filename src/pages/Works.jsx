import './Works.sass'
import React from "react";
import {t} from "i18next";


const Works = () => {
    return <>
        <div className={'works-wrapper'}>
            <div className={'articles works'}>
                <div className={'article-content'}>
                    <h1>{t('works.title')}</h1>
                    <a href="https://github.com/MTEKode" target="_blank" rel="noopener noreferrer">
                        <button className={'primary-btn'}>
                            <span className={'primary-btn-fill'}></span>
                            <span className={'primary-btn-text'}>{t('works.projects')}</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className={'articles cv'}>
                <div className={'article-content'}>
                    <h1>{t('cv.title')}</h1>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <button className={'primary-btn'}>
                            <span className={'primary-btn-fill'}></span>
                            <span className={'primary-btn-text'}>{t('works.cv')}</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </>
;
}

export default Works;