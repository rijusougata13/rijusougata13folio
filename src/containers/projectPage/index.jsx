import React from 'react';
import {Wrappers,Heading,Button,SubHeading,Wrapper,SliderDiv}from './styles/index';
import Card from '../../components/card/index';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectPage=(props)=>{

    const config = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true, // enable center mode
  centerPadding: '50px' // set center padding

        

};
    
    const projectArray=[
        {
            "heading":"github",
            "body":"follow me",
            "link":"github.com",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
       
    ]
    return(
        // <Wrappers>
        <SliderDiv>
            <Slider {...config} >
        {
            projectArray.map(project=>(
                <Card>
                <Wrapper>
                <Heading>{project.heading}</Heading>
                <SubHeading>{project.body}</SubHeading>
                </Wrapper>
                <Button>Read More</Button>
           
            </Card>
            ))
        }
        </Slider>
        </SliderDiv>
        // </Wrappers>
    );
}

export default projectPage;