import React from "react";
import HeaderAuth from "@/components/headerAuth";
import Footer from "@/components/footer/index.js";
import MainWrappers from "@/wrappers/main-wrappers";
import RegistorInvestorForm from "@/components/forms/index.js";

const RegisterInvestor = props => {
    return (
        <div className="register-investor">
            <HeaderAuth/>
            <MainWrappers>
                <div className="register-investor__bunner">
                    <h3>Регистрация инвестора</h3>
                </div>
                <div className="register-investor__form-wrapper">
                    <RegistorInvestorForm/>
                </div>

            </MainWrappers>
            <Footer/>
        </div>
    );
};

export default RegisterInvestor;