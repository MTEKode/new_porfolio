import './contact.sass'
import React from "react";
import {t} from "i18next";

const Contact = () => {
    return <>
        <div className={'contact-wrapper'}>
            <div className={'contact-article'}>
                <h1>{t('contact.title')}</h1>
                <p>{t('contact.subtitle')}</p>
                <div className={'contact-form'}>
                    <label className={'custom-input-label'}>
                        <span className={'custom-input-text'}>{t('contact.form.name')}</span>
                        <input className={'custom-input'} type="text"/>
                    </label>
                    <label className={'custom-input-label'}>
                    <span className={'custom-input-text'}>{t('contact.form.email')}</span>
                        <input className={'custom-input'} type="email"/>
                    </label>
                    <label className={'custom-textarea-label'}>
                        <span className={'custom-input-text'}>{t('contact.form.msg')}</span>
                        <textarea className={'custom-textarea'} name="mensaje-text"></textarea>
                    </label>
                    <button type={"submit"} className={'primary-btn'}>
                        <span className={'primary-btn-fill'}></span>
                        <span className={'primary-btn-text'}>{t('contact.form.send')}</span>
                    </button>
                </div>
            </div>
        </div>
    </>
};
export default Contact;