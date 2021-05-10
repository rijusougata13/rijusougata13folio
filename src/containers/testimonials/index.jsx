import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Heading,SubHeading,BodyWrapper,Text,AboutText,Wrappers,AboutImg,About,Wrapper,Button,SvgDiv,BackgroundImg, BlackWrapper, TestimonialCard} from './ styles/index';
import AboutMeImg from '../../assets/images/aboutMe.png';
import Background from '../../assets/images/cool-background (1).svg';

const Testimonials=(props)=>{
  
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
        <Wrapper id="testimonials">
      
            <Heading>Testimonials</Heading>
            <BodyWrapper>
               
                 <TestimonialCard>
                <div>
                <SubHeading >Sougata</SubHeading>   
                <p style={{color:"#532360"}}>senior</p>
                </div>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo obcaecati cum aspernatur, tempore exercitationem saepe, corporis suscipit officiis, veritatis pariatur molestias non dolorem praesentium cumque quisquam esse voluptas. Tempore .</Text>
               </TestimonialCard>
                  <TestimonialCard>
                <div>
                <SubHeading >Sougata</SubHeading>   
                <p style={{color:"#532360"}}>senior</p>
                </div>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo obcaecati cum aspernatur, tempore exercitationem saepe, corporis suscipit officiis, veritatis pariatur molestias non dolorem praesentium cumque quisquam esse voluptas. Tempore .</Text>
               </TestimonialCard>

            </BodyWrapper>
        </Wrapper>
       
    );
}

export default Testimonials;