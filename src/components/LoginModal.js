import React, { useState } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap"
import LoginModal from "./LoginModal"
import ".././App.css";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 20rem;
    height: 80%;
    padding: 16px;
    background: rgb(25, 31, 44);
    border-radius: 10px;
    text-align: center;

    @media ${(props) => props.theme.device.MobileLandscape}{
        width: 90%;
    }
`;


{showModal ? 
    <Background onClick={closeModal}>
   <ModalContainer onClick={e => e.stopPropagation()}>
     <div>메뉴</div>
 <CloseIcon onClick={closeModal}></CloseIcon>
 </ModalContainer>
 </Background> : null}