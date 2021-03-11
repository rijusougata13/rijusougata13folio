import React from 'react';
import {Wrappers,ExternalWrapper,Heading,SubHeading}from './styles/index';
import {FaRunning,FaFacebook,FaDumbbell,FaAddressBook,FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa";

const contact=(props)=>{

    return(
        <ExternalWrapper className="contact">
            <Heading>Contact Me</Heading>
            <Wrappers>
                <ul>
                <li onClick={event =>  window.location.href='https://www.facebook.com/sougatadas.das.946'}><FaFacebook size='2rem'/></li>
                   <li onClick={event =>  window.location.href='https://www.instagram.com/sougata_013/'}><FaInstagram size='2rem'/></li>
                  <li onClick={event =>  window.location.href='https://www.linkedin.com/in/sougata-das-0a477016a/'} ><FaLinkedin size='2rem'/></li>
                 <li onClick={event =>  window.location.href='https://github.com/rijusougata13'}> <FaGithub size='2rem'/></li>
                </ul>
            </Wrappers>
        </ExternalWrapper>
    );
};

export default contact;
