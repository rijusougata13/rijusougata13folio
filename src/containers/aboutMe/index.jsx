import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Heading,SubHeading,AboutText,Wrappers,AboutImg,Wrapper,Button} from './ styles/index';
import AboutMeImg from '../../assets/images/aboutMeImg.png';


const AboutMe=(props)=>{
  
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
        <Wrapper id="about">
        <Wrappers>
            <AboutText data-aos="fade-up">
                <Heading data-aos="fade-left">Who Am I ?</Heading>
                <SubHeading data-aos="fade-right">I am Sougata Das, currently pursuing b.tech in Computer Science Engineering.I am interested in competetive coding and web devlopment</SubHeading>
            </AboutText>
            <AboutImg src={AboutMeImg}/>
            <Button><a href="/Resume.docx" download="inddex.docx">GET CV </a></Button>
        </Wrappers>
        </Wrapper>
    );
}

export default AboutMe;