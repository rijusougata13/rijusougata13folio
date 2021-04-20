import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Heading,SubHeading,AboutText,Wrappers,AboutImg,Wrapper,Button,SvgDiv,BackgroundImg} from './ styles/index';
import AboutMeImg from '../../assets/images/aboutMeImg.png';
import Background from '../../assets/images/cool-background (1).svg';

const AboutMe=(props)=>{
  
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
        
        <Wrapper id="about">
       
        <Wrappers>
            <BackgroundImg src={Background} alt="" />
            <AboutText data-aos="fade-up">
                <Heading data-aos="fade-left">Who Am I ?</Heading>
                <SubHeading data-aos="fade-right">I am Sougata Das, currently pursuing b.tech in Computer Science Engineering.I am interested in competetive coding and web devlopment</SubHeading>
            </AboutText>
            <AboutImg src={AboutMeImg}/>
            <Button><a href="/Resume.docx" download="inddex.docx">GET CV </a></Button>
        
        </Wrappers>
        {/* <div className="svg">
  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
    <path fill="#0F0644" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
         </div>
         <div className="svgBottom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0F0644" fill-opacity="1" d="M0,256L24,250.7C48,245,96,235,144,208C192,181,240,139,288,138.7C336,139,384,181,432,208C480,235,528,245,576,229.3C624,213,672,171,720,133.3C768,96,816,64,864,74.7C912,85,960,139,1008,154.7C1056,171,1104,149,1152,149.3C1200,149,1248,171,1296,160C1344,149,1392,107,1416,85.3L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
</svg>
</div> */}
        </Wrapper>
    );
}

export default AboutMe;