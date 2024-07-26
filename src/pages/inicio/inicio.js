// src/pages/inicio/inicio.js
import React from "react";
import { CContainer, CRow, CCol, CButton } from "@coreui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./inicio.css";

const Inicio = () => {
    return (
        <CContainer
            fluid
            className="inicio-container d-flex flex-column align-items-center justify-content-center"
        >
            <CRow className="align-items-center">
                <CCol className="text-center">
                    <img
                        src={logo}
                        alt="A Cozinha Folhada"
                        className="logo mb-3"
                    />
                </CCol>
                <CCol className="d-flex flex-column align-items-center menuCol">
                    <CButton color="light" className="botao-navegacao my-3">
                        <Link to="/cardapio" className="classeLinks">
                            Cardápio
                        </Link>
                    </CButton>
                    <CButton color="light" className="botao-navegacao my-3">
                        <Link to="/pratosestacao" className="classeLinks">
                            Pratos da estação
                        </Link>
                    </CButton>
                    <CButton color="light" className="botao-navegacao my-3">
                        <Link to="/espaco" className="classeLinks">
                            O espaço
                        </Link>
                    </CButton>
                    <CButton color="light" className="botao-navegacao my-3">
                        <Link to="/FAQ" className="classeLinks">
                            FAQ de delivery
                        </Link>
                    </CButton>
                    <CButton color="light" className="botao-navegacao my-3">
                        <Link to="/sobrenos" className="classeLinks">
                            Sobre nós
                        </Link>
                    </CButton>
                    <CRow className="redes-sociais mt-3">
                        <CCol className="d-flex justify-content-center gap-3">
                            <a
                                href="https://facebook.com"
                                className="social-link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M22 12.07C22 5.77 17.18 1 10.96 1 4.68 1 0 5.9 0 12.07 0 17.7 3.66 22 8.47 23V14.68H5.9V12.07h2.57V9.77c0-2.65 1.54-4.1 3.88-4.1 1.12 0 2.29.2 2.29.2v2.57h-1.29c-1.27 0-1.66.8-1.66 1.6v1.93h2.77l-.44 2.61h-2.33V23c4.81-1 8.57-5.27 8.57-10.93z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                className="social-link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 2.16c3.16 0 3.54.01 4.78.07 1.17.05 1.8.25 2.22.42a4.62 4.62 0 011.68 1.01 4.62 4.62 0 011.01 1.68c.17.42.37 1.05.42 2.22.06 1.24.07 1.62.07 4.78s-.01 3.54-.07 4.78c-.05 1.17-.25 1.8-.42 2.22a4.62 4.62 0 01-1.01 1.68 4.62 4.62 0 01-1.68 1.01c-.42.17-1.05.37-2.22.42-1.24.06-1.62.07-4.78.07s-3.54-.01-4.78-.07c-1.17-.05-1.8-.25-2.22-.42a4.62 4.62 0 01-1.68-1.01 4.62 4.62 0 01-1.01-1.68c-.17-.42-.37-1.05-.42-2.22-.06-1.24-.07-1.62-.07-4.78s.01-3.54.07-4.78c.05-1.17.25-1.8.42-2.22a4.62 4.62 0 011.01-1.68 4.62 4.62 0 011.68-1.01c.42-.17 1.05-.37 2.22-.42 1.24-.06 1.62-.07 4.78-.07m0-2.16c-3.22 0-3.63.01-4.89.07-1.27.06-2.13.26-2.88.56a6.69 6.69 0 00-2.47 1.49 6.69 6.69 0 00-1.49 2.47c-.3.75-.5 1.61-.56 2.88-.06 1.26-.07 1.67-.07 4.89s.01 3.63.07 4.89c.06 1.27.26 2.13.56 2.88a6.69 6.69 0 001.49 2.47 6.69 6.69 0 002.47 1.49c.75.3 1.61.5 2.88.56 1.26.06 1.67.07 4.89.07s3.63-.01 4.89-.07c1.27-.06 2.13-.26 2.88-.56a6.69 6.69 0 002.47-1.49 6.69 6.69 0 001.49-2.47c.3-.75.5-1.61.56-2.88.06-1.26.07-1.67.07-4.89s-.01-3.63-.07-4.89c-.06-1.27-.26-2.13-.56-2.88a6.69 6.69 0 00-1.49-2.47 6.69 6.69 0 00-2.47-1.49c-.75-.3-1.61-.5-2.88-.56-1.26-.06-1.67-.07-4.89-.07zM12 6.6c-2.98 0-5.4 2.42-5.4 5.4s2.42 5.4 5.4 5.4 5.4-2.42 5.4-5.4-2.42-5.4-5.4-5.4zm0 9c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6zm7.5-10.2c0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2.54-1.2 1.2-1.2 1.2.54 1.2 1.2z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                className="social-link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M22.46 6.03c-.77.34-1.61.56-2.48.66a4.32 4.32 0 001.88-2.39 8.77 8.77 0 01-2.75 1.05 4.28 4.28 0 00-7.28 3.91 12.15 12.15 0 01-8.83-4.48 4.28 4.28 0 001.33 5.7A4.26 4.26 0 012 9.8v.05a4.28 4.28 0 003.43 4.19c-.49.13-1.01.17-1.54.06a4.28 4.28 0 004 2.96A8.6 8.6 0 012 19.16 12.13 12.13 0 008.09 21c7.45 0 11.53-6.18 11.53-11.53 0-.17-.01-.34-.02-.51a8.23 8.23 0 002.02-2.1z" />
                                </svg>
                            </a>
                        </CCol>
                    </CRow>
                </CCol>
            </CRow>
        </CContainer>
    );
};

export default Inicio;
