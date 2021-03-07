import React, { useState } from 'react';
import styled from 'styled-components';
import {Wrappers,LeftSide,Hamburger,RightSide,Nav,Button}from './styles/index';
import Logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
           <Wrappers>
                <LeftSide src={(Logo)}>
                    {/* <img src={Logo}></img> */}
                </LeftSide>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <RightSide isOpen={isOpen}>
                    <Nav href="#">Home</Nav>
                    <Nav href="#">About</Nav>
                    <Nav href="#">Project</Nav>
                    <Nav href="#">contact us</Nav>
                </RightSide>
           </Wrappers>
                
        </>
    )
}





export default Navbar;