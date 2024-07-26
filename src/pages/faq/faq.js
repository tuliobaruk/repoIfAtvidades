import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import logo from "../../assets/logoFlor.png";


const FAQ = () => {
    return (
      <CContainer
      fluid
      className="cardapio-container d-flex flex-column align-items-center justify-content-center"
  >
      <CRow className="align-items-start">
          <CCol className="text-center">
              <img
                  src={logo}
                  alt="A Cozinha Folhada"
                  className="logob mb-3"
              />
          </CCol>
          <CCol className="d-flex flex-column align-items-start menuColb">
              <h1 className="cardapio-text">FAQ de<br></br>
              Delivery</h1>
          </CCol>
      </CRow>

      <CRow>
          <CCol className="d-flex flex-column align-items-start menuColb">
              <h1 className="cardapio-text-abaixo">
                  COMIDA FEITA COM INGREDIENTES À <br></br> BASE DE
                  PLANTAS E MUITO AMOR
              </h1>
          </CCol>
      </CRow>
  </CContainer>
    );
};

export default FAQ;
