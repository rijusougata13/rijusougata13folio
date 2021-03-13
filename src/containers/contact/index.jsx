import React from 'react';
import {Wrappers,ExternalWrapper,Heading,SubHeading}from './styles/index';
import {FaRunning,FaFacebook,FaDumbbell,FaAddressBook,FaInstagram,FaLinkedin,FaGithub,FaTwitter,FaEmail} from "react-icons/fa";
import Mail from '../../assets/images/gmail.ico';

const contact=(props)=>{

    return(
        <ExternalWrapper className="contact">
            <Heading>Connect With Me</Heading>
            <Wrappers>
                <ul>
                <li onClick={event =>  window.location.href='https://github.com/rijusougata13'}> <FaGithub size='2rem'/></li>
                <li onClick={event =>  window.location.href='https://www.facebook.com/rijusougata13'}><FaFacebook size='2rem'/></li>
                   <li onClick={event =>  window.location.href='https://www.instagram.com/rijusougata13/'}><FaInstagram size='2rem'/></li>
                  <li onClick={event =>  window.location.href='https://www.linkedin.com/in/rijusougata13/'} ><FaLinkedin size='2rem'/></li>
                <li onClick={event =>  window.location.href='https://twitter.com/rijusougata13'} ><FaTwitter size='2rem'/></li>
                       <li onClick={event =>  window.location.href='mailto:rijusougata13@gmail.com'} ><img src={Mail}></img></li>            
                </ul>
            </Wrappers>
        </ExternalWrapper>
    );
};

export default contact;
