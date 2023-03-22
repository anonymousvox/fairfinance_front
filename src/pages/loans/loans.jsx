import React from "react";
import HeaderAuth from "@/components/headerAuth";
import Footer from "@/components/footer/index.js";
import MainWrappers from "@/wrappers/main-wrappers";
import { Link } from 'react-router-dom';

const Loans = props => {
    return (
        <div className="loans">
            <HeaderAuth />
            <MainWrappers>
                <div className="loans__main-container">
                    <div className="loans__bunner">
                        <h3>Табло заявок</h3>
                        <div>Проекты доступные для инвестиций</div>
                    </div>
                    <div className="loans__registration-wrapper">
                        <Link to="/register/investor/" className="btn btn__blue-bg">
                            ЗАВЕРШИТЬ РЕГИСТРАЦИЮ
                        </Link>
                    </div>

                </div>
            </MainWrappers>
            <Footer />
        </div>
    );
};

export default Loans;