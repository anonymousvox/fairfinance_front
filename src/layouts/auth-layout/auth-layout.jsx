import React from 'react';
import Logo from '@images/logo-circle.png?url'

const AuthLayout = ({ children, title }) => {
    return (
        <div className="auth-layout">
            <div className="container">
                <div className="auth-layout__container">
                    <div className="auth-layout__item auth-layout__item--left">
                        <h1 className="auth-layout__title">{title}</h1>
                        {children}
                    </div>
                    <div className="auth-layout__item auth-layout__item--right">
                        <h2 className="auth-layout__header">p2b-платформа</h2>
                        <img src={Logo} alt="" className="auth-layout__logo" />
                        <h3 className="auth-layout__header">Будь среди первых!</h3>
                        <h3 className="auth-layout__descr">Инвестируй в малый бизнес на своей платформе</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;