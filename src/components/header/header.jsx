import React, { useEffect, useRef, useState } from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import classNames from 'classnames';

import LogoUrl from '../../assets/Fair_Finance_R.png?url'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)



    useEffect(() => {
        if (isOpen) {
            disableBodyScroll(menuRef.current);
        } else {
            enableBodyScroll(menuRef.current);
        }
        return () => clearAllBodyScrollLocks();
    }, [isOpen, menuRef])

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <div className="header__logo">
                        <a href="/"><img className="header__logo-img" src={LogoUrl} title="Fair finance" /></a>
                    </div>

                    <nav className={classNames('header__menu', { 'header__menu-active': isOpen })} ref={menuRef}>
                        <a className="header__menu-item" href="https://fairfin.ru/inv">Инвесторам</a>
                        <a className="header__menu-item" href="https://fairfin.ru/borrower">Заёмщикам</a>
                        <a className="header__menu-item" href="https://fairfin.ru/partners">Партнёрам</a>
                        <a className="header__menu-item" href="https://fairfin.ru/docs">О платформе</a>
                        <a className="header__menu-item" href="https://fairfin.ru/press">Пресса</a>
                        <button className="header__menu-close-btn" onClick={() => setIsOpen(false)}></button>
                    </nav>

                    <a href="https://lk.fairfin.ru/auth/" className="header__btn btn btn__blue-bg">Поехали</a>

                    <a href="https://lk.fairfin.ru/auth/" className="header__login-btn"></a>
                    <button type="button" className="header__menu-btn" onClick={() => setIsOpen(true)}></button>
                </div>
            </div>
        </header>
    );
};

export default Header;