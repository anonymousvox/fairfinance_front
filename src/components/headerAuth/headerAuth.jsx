import LogoUrl from "@/assets/Fair_Finance_R.png";
import React, { useState } from "react";
import { Dropdown, notification } from 'antd';

import bell from "../../assets/svg/bell.svg";
import wallet from "../../assets/svg/wallet.svg";
import user from "../../assets/svg/user.svg";
import CustomModal from "../../modules/modal";
import { Field, Form } from "react-final-form";
import { requiredRule } from '../../utils/validate'


const navigateLink = [
    {
        content: "Проекты для инвестиций",
        link: "/"
    },
    {
        content: "Мои инвестиции",
        link: "/"
    },
    {
        content: "История операций",
        link: "/"
    }
]
const HeaderAuth = props => {

    const [profileConfirmationModalStatus, setProfileConfirmationModalStatus] = useState(false)

    const onClick = ({ key }) => {
        if (key === '0') {
            setProfileConfirmationModalStatus(true)
        }
    }

    const items = [
        {
            label: 'Подтвердить профиль',
            key: '0',
        }
    ];

    const onProfileConfirmationSubmit = (values) => {
        setProfileConfirmationModalStatus(false)
        notification["success"]({
            message: 'Документ отправлен'});
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__left-side">
                    <div className="header__logo">
                        <a href="/"><img className="header__logo-img" src={LogoUrl} title="Fair finance" /></a>
                    </div>
                    <nav className="header__menu">
                        {navigateLink?.map((item, index) => <a className="header__btn-link" key={index}>{item?.content}</a>)}
                    </nav>
                </div>
                <div className="header__right-side">
                    <nav className="header__menu">
                        <button className="header__btn-menu"><img src={bell} alt="bell" /></button>
                        <button className="header__btn-menu">
                            <div className="header__free-money">
                                <div className="header__free-money__left-side">
                                    <div>Свободно</div>
                                    <div>0,0</div>
                                </div>
                                <div className="header__free-money__right-side">
                                    <img src={wallet} alt="wallet" />
                                </div>
                            </div>
                        </button>
                        <button className="header__btn-menu">
                            <Dropdown menu={{ items, onClick }} trigger={['click']}>
                                <div className="header__user-wrapper"><img src={user} alt="user" /></div>
                            </Dropdown>
                        </button>
                    </nav>
                </div>
            </div>
            <CustomModal
                isOpen={profileConfirmationModalStatus}
                onClose={() => setProfileConfirmationModalStatus(false)}
            >
                <Form
                    onSubmit={onProfileConfirmationSubmit}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form__info-wrapper">
                                <h3 className="form__title">Подтвердить профиль</h3>
                            </div>

                            <div className="form__main-row">
                                <div className="form__col-wrapper">
                                    <div className="form__col col50">Загрузите документ</div>
                                    <div className="form__col col50">
                                        <Field
                                            validate={requiredRule}
                                            name="passport-first-photo"
                                            type="file"
                                            render={({ input, meta }) => (
                                                <>
                                                    <input type="file"
                                                        {...input} />
                                                    {meta.touched && meta.error &&
                                                        <div className="form__error">{<span>{meta.error}</span>}</div>}
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form__line"></div>
                            <div className="form__btn-wr">
                                <button type="submit"
                                    className="btn btn__turquoise-bg btn__l-height"
                                    style={{ marginBottom: "10px", fontSize: "13px" }}>Отправить данные
                                </button>
                            </div>
                        </form>
                    )}
                />
            </CustomModal>
        </header>
    );
};

export default HeaderAuth;