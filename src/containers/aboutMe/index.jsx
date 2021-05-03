import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Heading,SubHeading,AboutText,Wrappers,AboutImg,About,Wrapper,Button,SvgDiv,BackgroundImg, BlackWrapper} from './ styles/index';
import AboutMeImg from '../../assets/images/aboutMe.png';
import Background from '../../assets/images/cool-background (1).svg';

const AboutMe=(props)=>{
  
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
       
        <Wrapper id="about">
         <BlackWrapper>
       
         </BlackWrapper>
          <Wrappers>
            
            <Heading>About Me</Heading>
            <About>
            
            <AboutText>	
     
     I am Sougata Das,currently pursuing B.Tech in Computer Science      	 
     Engineering.I am interested in competetive coding and web development. 
     
     
        </AboutText>
            <AboutImg src={AboutMeImg}/>
            
            </About>
            <Button onClick={e=>window.open("https://drive.google.com/file/d/1GBHPkljidWygxsEA8bE9AP0piY6ThPfK/view?usp=sharing")}>
               
                    Download CV
               
                     </Button>
        </Wrappers>
        </Wrapper>
       
    );
}

export default AboutMe;