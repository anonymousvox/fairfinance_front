import React from 'react';
import { Form, Field } from 'react-final-form'
import InputMask from "react-input-mask";
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import AuthLayout from '../../layouts/auth-layout';

import { emailValidateRules, phoneConfirmationValidateRules, registerNameRules, requiredRule } from '../../utils/validate';

const Registration = () => {

    const onSubmit = (values) => {
        console.log("Test", values)
    }

    // import.meta.env.VITE_APP_API_URL

    return (
        <>
            <Header />
            <AuthLayout title={<>Регистрация на&nbsp;платформе</>}>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                                name="name"
                                validate={registerNameRules}
                                render={({ input, meta }) => (
                                    <>
                                        <div className="auth-layout__label">Имя</div>
                                        <input className="auth-layout__input" {...input} />
                                        {meta.touched && meta.error && <div className="auth-layout__error">{<span>{meta.error}</span>}</div>}
                                    </>
                                )}
                            />
                            <Field
                                name="phone"
                                validate={phoneConfirmationValidateRules}
                                render={({ input, meta }) => (
                                    <>
                                        <div className="auth-layout__label">Номер телефона</div>
                                        <InputMask
                                            disabled={false}
                                            formatChars={{
                                                '0': '[0-9]'
                                            }}
                                            mask="+7 (900) 000-00-00"
                                            {...input}
                                        >
                                            {InputProps => <input className="auth-layout__input" {...InputProps} />}
                                        </InputMask>
                                        {meta.touched && meta.error && <div className="auth-layout__error">{<span>{meta.error}</span>}</div>}
                                    </>
                                )}
                            />
                            <Field
                                name="email"
                                type="email"
                                validate={emailValidateRules}
                                render={({ input, meta }) => (
                                    <>
                                        <div className="auth-layout__label">Email</div>
                                        <input className="auth-layout__input" {...input} />
                                        {meta.touched && meta.error && <div className="auth-layout__error">{<span>{meta.error}</span>}</div>}
                                    </>
                                )}
                            />

                            <div className="auth-layout__select-container">
                                <Field
                                    name="user_type"
                                    component="select"
                                    className="auth-layout__select"
                                >
                                    <option value="investor">Я Скаут</option>
                                </Field>
                            </div>
                            <Field
                                name="terms"
                                type="checkbox"
                                validate={requiredRule}
                                render={({ input, meta }) => (
                                    <>
                                        <label className="auth-layout__checkbox-container">
                                            <input {...input} />
                                            <span className="auth-layout__checkbox-text">Нажимая на кнопку подтверждения, я соглашаюсь с <a href="https://lk.fairfin.ru/media/5_ПРИЛОЖЕНИЕ_ПОЛИТИКА_КОНФИДЕЦИАЛЬНОСТИ.pdf" target="_blank">политикой обработки персональных данных</a></span>
                                        </label>
                                        {meta.touched && meta.error && <div className="auth-layout__error">{<span>{meta.error}</span>}</div>}
                                    </>
                                )}
                            />
                            <Field
                                name="rules"
                                type="checkbox"
                                validate={requiredRule}
                                render={({ input, meta }) => (
                                    <>
                                        <label className="auth-layout__checkbox-container">
                                            <input {...input} />
                                            <span className="auth-layout__checkbox-text">Я ознакомлен с <a href="https://lk.fairfin.ru/media/Правила_21.08.2021.pdf" target="_blank">правилами платформы</a></span>
                                        </label>
                                        {meta.touched && meta.error && <div className="auth-layout__error">{<span>{meta.error}</span>}</div>}
                                    </>
                                )}
                            />
                            <div className="auth-layout__actions">
                                <button type="submit" className="btn btn__blue-bg btn__full-width btn__l-height">Поехали</button>
                                <Link to="/" className="btn btn__turquoise-bg btn__full-width btn__l-height">Войти в личный кабинет</Link>
                            </div>
                        </form>
                    )}
                />
            </AuthLayout>
        </>
    );
};

export default Registration;