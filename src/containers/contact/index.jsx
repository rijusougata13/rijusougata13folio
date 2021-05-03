
import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Wrappers,ExternalWrapper,Heading,SubHeading, LinkWrapper}from './styles/index';
import {FaRunning,FaFacebook,FaDumbbell,FaAddressBook,FaInstagram,FaLinkedin,FaGithub,FaTwitter,FaEmail} from "react-icons/fa";
import Mail from '../../assets/images/gmail.ico';

const Contact=(props)=>{
   useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <ExternalWrapper className="contact">
            {/* <Heading 
            data-aos="fade-down"
            >Connect With Me</Heading> */}
            {/* <Wrappers >
                <ul>
                <li onClick={event =>  window.open('https://github.com/rijusougata13')}> <FaGithub size='2rem'/></li>
                <li onClick={event =>  window.open('https://www.facebook.com/rijusougata13/')}><FaFacebook size='2rem'/></li>
                   <li onClick={event =>  window.open('https://www.instagram.com/rijusougata13/')}><FaInstagram size='2rem'/></li>
                  <li onClick={event =>  window.open('https://www.linkedin.com/in/sougata-das-0a477016a/')} ><FaLinkedin size='2rem'/></li>
                <li onClick={event =>  window.open('https://twitter.com/rijusougata13')} ><FaTwitter size='2rem'/></li>
                <li onClick={event =>  window.open('mailto:rijusougata13@gmail.com')} ><img src={Mail}></img></li>            
                </ul>
            </Wrappers> */}
            <LinkWrapper>
                {/* <ul> */}
                <li onClick={event =>  window.open('https://github.com/rijusougata13')}> <FaGithub size='2rem' color="#F35258" /></li>
                <li onClick={event =>  window.open('https://www.facebook.com/rijusougata13/')}><FaFacebook size='2rem' color="#9DCC9A"/></li>
                   <li onClick={event =>  window.open('https://www.instagram.com/rijusougata13/')}><FaInstagram size='2rem' color="#2344C0"/></li>
                  <li onClick={event =>  window.open('https://www.linkedin.com/in/sougata-das-0a477016a/')} ><FaLinkedin size='2rem' color="#CB2B8A"/></li>
                <li onClick={event =>  window.open('https://twitter.com/rijusougata13')} ><FaTwitter size='2rem' color="#4696F3"/></li>
                <li onClick={event =>  window.open('mailto:rijusougata13@gmail.com')} ><img src={Mail} style={{width:"1.5rem"}}></img></li>            
                {/* </ul> */}
            </LinkWrapper>
        </ExternalWrapper>
    );
};

export default Contact;
