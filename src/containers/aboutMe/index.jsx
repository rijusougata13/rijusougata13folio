import React from 'react';
import {Heading,SubHeading,AboutText,Wrappers,AboutImg,Wrapper} from './ styles/index';
import AboutMeImg from '../../assets/images/aboutMeImg.png';

const aboutMe=(props)=>{
    return(
        <Wrapper id="about">
        <Wrappers>
            <AboutText>
                <Heading>Who Am I ?</Heading>
                <SubHeading>I am Sougata Das, currently pursuing my b.tech in Computer Science Engineering.I am interested in competetive coding and web devlopment</SubHeading>
            </AboutText>
            <AboutImg src={AboutMeImg}/>
        </Wrappers>
        </Wrapper>
    );
}

export default aboutMe;