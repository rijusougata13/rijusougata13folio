import React, { useState } from 'react';
import styled from 'styled-components';
import {Wrappers,LeftSide,Hamburger,RightSide,Nav,Button}from './styles/index';
import Logo from '../../assets/images/logo.png';
import {Link} from 'react-scroll';


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
                    <Nav href="#"><Link  to="home" activeClass spy={true} smooth={true}>  Home </Link></Nav>
                    <Nav href="#"> <Link  to="about" spy={true} smooth={true}>  About</Link></Nav>
                    <Nav href="#"><Link  to="projects" spy={true} smooth={true}>  Project </Link></Nav>
                    <Nav href="#"><Link  to="contact" spy={true} smooth={true}>  Contact</Link></Nav>
                    {/* <Nav href="/Resume.docx" download="inddex.docx"> Resume </Nav> */}
                </RightSide>
           </Wrappers>
                
        </>
    )
}





export default Navbar;