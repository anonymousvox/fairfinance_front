import {Form, Field} from 'react-final-form'
import {phoneConfirmationValidateRules} from "@/utils/validate.js";
import InputMask from "react-input-mask";
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import React, {useState} from "react";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

const RegistorInvestorForm = props => {

    const [addressMatches, setAddressMatches] = useState(false);
    const [isAgreeRules, setIsAgreeRules] = useState(false);
    const [isAgreePersonalData, setIsAgreePersonalData] = useState(false);
    const [isAgreeFormatTable, setIsAgreeFormatTable] = useState(false);
    const [isAgreePassportData, setIsAgreePassportData] = useState(true);
    const [visibleInformation, setVisibleInformation] = useState(false);

    return (
        <div className="form">

            <Form
                onSubmit={() => console.log("submit")}
                render={({handleSubmit}) => (<form onSubmit={() => console.log("submit")}>
                    <h3 className="form__title">Введите ваши данные</h3>

                    <div className="form__main-row">
                        <div className="form__col-wrapper">
                            <div className="form__col col50">
                                <Field
                                    name="FIO"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">ФИО</div>
                                            <input className="form__input" placeholder="Введите ФИО" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="form__col col25">
                                <Field
                                    name="INN"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">ИНН</div>
                                            <input className="form__input" placeholder="Введите ИНН" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="form__col col25">
                                <Field
                                    name="SNILS"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">СНИЛС</div>
                                            <input className="form__input" placeholder="Введите СНИЛС" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                        </div>

                    </div>

                    <h3 className="form__title">Паспортные данные</h3>

                    <div className="form__main-row">
                        <div className="form__col-wrapper">
                            <div className="form__col col25">
                                <Field
                                    name="date-birthday"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">Дата рождения</div>
                                            <input type="date" className="form__input"
                                                   placeholder="Дата рождения" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="form__col col75">
                                <Field
                                    name="place-birthday"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">Место рождения</div>
                                            <input className="form__input"
                                                   placeholder="Введите место рождения" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                        </div>

                    </div>

                    <div className="form__main-row">
                        <div className="form__col-wrapper">
                            <div className="form__col col25">
                                <Field
                                    name="passport-ser"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">Серия</div>
                                            <input className="form__input"
                                                   placeholder="Введите серию паспорта" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="form__col col25">
                                <Field
                                    name="passport-num"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">Номер</div>
                                            <input className="form__input"
                                                   placeholder="Введите номер паспорта" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="form__col col25">
                                <Field
                                    name="passport-date-issue"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">Дата выдачи</div>
                                            <input type="date" className="form__input"
                                                   placeholder="Дата выдачи" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="form__col col25">
                                <Field
                                    name="passport-code"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">Код подразделения</div>
                                            <input className="form__input"
                                                   placeholder="Введите код подразделения" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                        </div>

                    </div>

                    <div className="form__main-row">
                        <div className="form__col-wrapper">
                            <div className="form__col col100">
                                <Field
                                    name="passport-issues-whom"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">Кем выдан</div>
                                            <input className="form__input"
                                                   placeholder="Введите наименование органа" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form__main-row">
                        <div className="form__col-wrapper">
                            <div className="form__col col100">
                                <Field
                                    name="passport-registration-address"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">Адрес регистрации</div>
                                            <label>
                                                <Checkbox
                                                    checked={addressMatches}
                                                    onChange={(e) => setAddressMatches(e.target.checked)}
                                                />
                                                &nbsp;&nbsp;Адреса регистрации и фактического проживания
                                                совпадают</label>
                                            {addressMatches ? null : <input className="form__input"
                                                                            placeholder="Введите адрес регистрации" {...input} />}
                                            {meta.touched && meta.error && !addressMatches &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form__main-row">
                        <div className="form__col-wrapper">
                            <div className="form__col col100">
                                <Field
                                    name="passport-registration-address"
                                    render={({input, meta}) => (
                                        <>
                                            <div className="form__label">Адрес фактического проживания</div>
                                            <input className="form__input"
                                                   placeholder="Введите адрес проживания" {...input} />
                                            {meta.touched && meta.error &&
                                                <div className="form__error">{<span>{meta.error}</span>}</div>}
                                        </>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form__info-wrapper"><h3 className="form__title">Загрузите фото</h3>
                        <a className="my-anchor-element"><span
                            className="form__infoTrigger">?</span></a>
                        <Tooltip anchorSelect=".my-anchor-element" place="top">
                            <ul>
                                <li>• Паспорт должен просматриваться полностью;</li>
                                <li>• ВСЕ данные (номер, ФИО, место выдачи и пр.) должны хорошо читаться (не быть размыты)</li>
                                <li>• На селфи лицо и паспорт должны полностью просматриваться, данные паспорта не должны быть закрыты;</li>
                            </ul>



                        </Tooltip>


                    </div>

                    <div className="form__main-row">
                        <div className="form__col-wrapper">
                            <div className="form__col col50">фото первого разворота паспорта (с фотографией)</div>
                            <div className="form__col col50">
                                <Field
                                    name="passport-first-photo"
                                    type="file"
                                    render={({input, meta}) => (
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
                        <div className="form__col-wrapper">
                            <div className="form__col col50">фото страницы с регистрацией (пропиской)</div>
                            <div className="form__col col50 mt-40">
                                <Field
                                    name="passport-second-photo"
                                    type="file"
                                    render={({input, meta}) => (
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

                    <h3 className="form__title">Принадлежность к публичным должностым лицам</h3>

                    <div className="form__main-row">
                        <div className="form__radio-group">
                            <label><input type="radio" value="public" name="public"/> я публичное должностное
                                лицо</label>
                            <label><input type="radio" value="nonPublic" name="public"/> я не являюсь публичным
                                должностным лицом</label>
                        </div>
                    </div>

                    <h3 className="form__title">Я буду инвестировать как</h3>

                    <div className="form__main-row">
                        <div className="form__radio-group">
                            <label><input type="radio" value="fiz" name="invest"/> физическое лицо</label>
                            <label><input type="radio" value="ind" name="invest"/> индивидуальный
                                предприниматель</label>
                            <label><input type="radio" value="ur" name="invest"/> юридическое лицо</label>
                        </div>
                    </div>

                    <h3 className="form__title">Подтвердите согласие</h3>

                    <div className="form__main-row">
                        <div className="form__radio-group">
                            <label>
                                <Checkbox
                                    checked={isAgreeRules}
                                    onChange={(e) => setIsAgreeRules(e.target.checked)}
                                /> я согласен с правилами платформы
                            </label>
                            <label>
                                <Checkbox
                                    checked={isAgreePersonalData}
                                    onChange={(e) => setIsAgreePersonalData(e.target.checked)}
                                /> я согласен на обработку персональных данных</label>
                            <label>
                                <Checkbox
                                    checked={isAgreeFormatTable}
                                    onChange={(e) => setIsAgreeFormatTable(e.target.checked)}
                                /> я согласен на формирование анкеты клиента согласно ФЗ-115</label>
                            <label>
                                <Checkbox
                                    checked={isAgreePassportData}
                                    onChange={(e) => setIsAgreePassportData(e.target.checked)}
                                /> подтвердить паспортные данные</label>
                        </div>
                    </div>

                    <div className="form__line"></div>

                    <div className="form__btn-wr">
                        <button type="submit"
                                className="btn btn__turquoise-bg btn__l-height" s
                                style={{marginBottom: "10px", fontSize: "13px"}}>Отправить данные
                        </button>
                    </div>

                </form>)}
            />
        </div>
    );
};

export default RegistorInvestorForm;