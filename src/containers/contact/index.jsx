<<<<<<< HEAD
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
=======
import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Wrappers,ExternalWrapper,Heading,SubHeading}from './styles/index';
import {FaRunning,FaFacebook,FaDumbbell,FaAddressBook,FaInstagram,FaLinkedin,FaGithub,FaTwitter,FaEmail} from "react-icons/fa";
import Mail from '../../assets/images/gmail.ico';

const Contact=(props)=>{
   useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <ExternalWrapper className="contact">
            <Heading data-aos="fade-down">Connect With Me</Heading>
            <Wrappers data-aos="fade-up">
                <ul>
                <li onClick={event =>  window.location.href='https://github.com/rijusougata13'}> <FaGithub size='2rem'/></li>
                <li onClick={event =>  window.location.href='https://www.facebook.com/sougatadas.das.946'}><FaFacebook size='2rem'/></li>
                   <li onClick={event =>  window.location.href='https://www.instagram.com/sougata_013/'}><FaInstagram size='2rem'/></li>
                  <li onClick={event =>  window.location.href='https://www.linkedin.com/in/sougata-das-0a477016a/'} ><FaLinkedin size='2rem'/></li>
                <li onClick={event =>  window.location.href='https://twitter.com/sougata13072001'} ><FaTwitter size='2rem'/></li>
                <li onClick={event =>  window.location.href='mailto:rijusougata13@gmail.com'} ><img src={Mail}></img></li>            
                </ul>
            </Wrappers>
        </ExternalWrapper>
    );
};

export default Contact;
>>>>>>> main
