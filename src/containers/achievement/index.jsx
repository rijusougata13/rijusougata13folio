import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Heading,SubHeading,AchivementTab,Wrappers,AboutImg,About,Wrapper,Button,SvgDiv,BackgroundImg, BlackWrapper} from './ styles/index';
import AboutMeImg from '../../assets/images/aboutMe.png';
import Background from '../../assets/images/cool-background (1).svg';

const Achievement=(props)=>{
  
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
       
        <Wrapper id="achievement">
         {/* <BlackWrapper>
       
         </BlackWrapper> */}
         <Heading>Achievement</Heading>
        <AchivementTab>
           
            <li>google kick start Round A 2021</li>
            <span className="span">Secured 1637 global rank in kick start Round A 2021</span>
                 <li>TCS Codevita Season 9</li>
            <span className="span">Secured Global Rank:536 in Tcs Codevita Season 9 Round 2</span>
                 <li>IBM-Master The Mainframe Batch (level 3 2020)</li>
            <span className="span"><a href="https://www.youracclaim.com/badges/3d48bf71-348a-45a2-a14a-a8bdb93c36eb/public_url">Click Here to See Credential</a>
                </span>
                
        </AchivementTab>
        </Wrapper>
       
    );
}

export default Achievement;