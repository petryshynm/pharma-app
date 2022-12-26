import React, { useState } from 'react'

import { Form, Formik, Field , ErrorMessage } from "formik";
import { useTranslation } from 'react-i18next';
import classnames from 'classnames'
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

import { Button } from '../ClassicButton';

import './FeedbackForm.scss'

const serviceId = process.env.REACT_APP_SERVICE_ID
const templateId = process.env.REACT_APP_TEMPLATE_ID
const publicKey = process.env.REACT_APP_PUBLIC_KEY

export const FeedbackForm = ({classNames, isSending, setSending}) => {
    const { t } = useTranslation()
    const [isSent, setIsSent] = useState(false)

    const sendEmail = (values) => {
        setSending(true)
        emailjs.send(serviceId, templateId, values, publicKey)
            .then((result) => {
                setIsSent(true)
                setSending(false)
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
            user_name: '',
            user_email: '',
            message: '',
            user_phone: '',
        }}
        validationSchema={
            Yup.object({
                user_name: Yup.string()
                        .required(t('required'))
                        .min(2, t('min_char')),
                user_email: Yup.string()
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
                    <Field name="user_name" type="text" placeholder={t('name')}/>
                    <ErrorMessage className="error" name="user_name" component="div"/>
                </div>
                <div className="input-wrapper">
                    <Field name="user_email" type="email" placeholder={t('email')}/>
                    <ErrorMessage className="error" name="user_email" component="div"/>
                </div>
            </div>
            <div className="input-wrapper">
                <Field type="tel" name="user_phone" placeholder={t('phone')}/>
                <ErrorMessage className="error" name="user_phone" component="div"/>
            </div>
            <div className="input-wrapper">
                <Field type="text" name="message" as="textarea" placeholder={t('message')}/>
                <ErrorMessage className="error" name="message" component="div"/>
            </div>
            <Button isDisabled={isSending} form="form" type="submit" value={t('send_message')} isInverted/>
        </Form>
    </Formik> 
}