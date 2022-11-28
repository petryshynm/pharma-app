import React, { useState } from 'react'

import { Form, Formik, Field , ErrorMessage} from "formik";
import { useTranslation } from 'react-i18next';
import classnames from 'classnames'
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

import { Button } from '../ClassicButton';

import './FeedbackForm.scss'

export const FeedbackForm = ({classNames}) => {
    const { t } = useTranslation()
    const [isSent, setIsSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const sendEmail = (values) => {
        setLoading(true)
        emailjs.send('service_p21i5ff', 'template_7c75waa', values, 'JILRHyulaSGrzEJVx')
            .then((result) => {
                setIsSent(true)
                setLoading(false)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    if(isSent) return <div>
        <div className='form__title'>{t('form_title')}</div>
        <div className='form__paragraph'>
            {t('form_paragraph')}
        </div>
    </div>

    return <Formik 
        initialValues={{
            name: '',
            email: '',
            message: '',
            phone: '',
        }}
        validationSchema={
            Yup.object({
                name: Yup.string()
                        .required(t('required'))
                        .min(2, t('min_char')),
                email: Yup.string()
                        .required(t('required'))
                        .email(t('invalid_email')),
                message: Yup.string()
                        .required(t('required'))
            })
        }
        onSubmit={sendEmail}
        >
        <Form id="form" className={classnames('form', classNames)}>
            <div className='input-container'>
                <div className="input-wrapper">
                    <Field name="name" type="text" placeholder={t('name')}/>
                    <ErrorMessage className="error" name="user_name" component="div"/>
                </div>
                <div className="input-wrapper">
                    <Field name="email" type="email" placeholder={t('email')}/>
                    <ErrorMessage className="error" name="user_email" component="div"/>
                </div>
            </div>
            <div className="input-wrapper">
                <Field type="phone" name="phone" placeholder={t('phone')}/>
                <ErrorMessage className="error" name="user_phone" component="div"/>
            </div>
            <div className="input-wrapper">
                <Field type="text" name="message" as="textarea" placeholder={t('message')}/>
                <ErrorMessage className="error" name="message" component="div"/>
            </div>
            <Button isDisabled={loading }form="form" type="submit" value={t('send_message')} isInverted/>
        </Form>
    </Formik> 
}