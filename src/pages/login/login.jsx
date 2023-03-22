import React from 'react';
import {Form, Field} from 'react-final-form'
import InputMask from "react-input-mask";
import {Link} from 'react-router-dom';

import Header from '../../components/header';
import AuthLayout from '../../layouts/auth-layout';

import AuthService from '../../services/auth-service';

import {loginPwdRules, phoneConfirmationValidateRules} from '../../utils/validate';

const Auth = new AuthService();

const Login = () => {
    const onSubmit = async (values) => {
        try {
            const res = await Auth.login(values);

        } catch (err) {
            console.log(err)
        } finally {

        }
    }

    // import.meta.env.VITE_APP_API_URL

    return (
        <>
            <Header/>
            <AuthLayout title="">
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                                name="phone"
                                validate={phoneConfirmationValidateRules}
                                render={({input, meta}) => (
                                    <>
                                        <div className="auth-layout__label">Телефон</div>
                                        <InputMask
                                            disabled={false}
                                            formatChars={{
                                                '0': '[0-9]'
                                            }}
                                            mask="+7 (000) 000-00-00"
                                            {...input}
                                        >
                                            {InputProps => <input className="auth-layout__input" {...InputProps} />}
                                        </InputMask>
                                        {meta.touched && meta.error &&
                                            <div className="auth-layout__error">{<span>{meta.error}</span>}</div>}
                                    </>
                                )}
                            />
                            <Field
                                name="password"
                                type="password"
                                validate={loginPwdRules}
                                render={({input, meta}) => (
                                    <>
                                        <div className="auth-layout__label">Пароль</div>
                                        <input className="auth-layout__input" {...input} />
                                        {meta.touched && meta.error &&
                                            <div className="auth-layout__error">{<span>{meta.error}</span>}</div>}
                                    </>
                                )}
                            />
                            <Field name="login" type="hidden" initialValue="" component="input"/>
                            <div className="auth-layout__remember">
                                <label className="auth-layout__remember-container">
                                    <input type="checkbox"/>
                                    <div className="auth-layout__remember-text">Запомнить меня</div>
                                </label>
                                <a href="https://lk.fairfin.ru/reset/" className="auth-layout__reset">Забыли пароль?</a>
                            </div>
                            <div className="auth-layout__actions">
                                <Link to="/new/loans/" >
                                    <button type="submit"
                                            className="btn btn__turquoise-bg btn__full-width btn__l-height"
                                            //Удалить, когда будет запрос авторизации
                                            style={{marginBottom: "10px"}}>Поехали
                                    </button>
                                </Link>
                                <Link to="/register"
                                      className="btn btn__turquoise-bg btn__full-width btn__l-height">Зарегестрироваться</Link>
                            </div>
                        </form>
                    )}
                />
            </AuthLayout>
        </>
    );
};

export default Login;