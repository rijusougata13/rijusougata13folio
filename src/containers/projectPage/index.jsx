import React,{useEffect,useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Wrappers,Heading,Button,SubHeading,Wrapper,SliderDiv}from './styles/index';
import Card from '../../components/card/index';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectPage=(props)=>{

       useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const [isOpen,setIsOpen]=useState(false);

    const config = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true, // enable center mode
  centerPadding: '50px', // set center padding
  responsive:[
    {
    breakpoint:1024,
    settings:{
        slidesToShow:2,
        slidesToScroll:3,
        infinite:true,
        dots:true,
    }
    }
    ,
    {
        breakpoint:700,
        settings:{
            slidesToShow:2,
            slidesToScroll:2,
            initialSlide:2,
        }
        }
    

]
        

};
    
    const projectArray=[
        {
            "heading":"hangman",
            "body":"play a text based hangman game with your friends",
            "link":"https://github.com/rijusougata13/hangman",
        },
        {
            "heading":"PDFTOAUDIO",
            "body":"convert your pdf to audio format",
            "link":"https://github.com/rijusougata13/pdf_to_audio",
        },
        {
            "heading":"RCCNOTICE",
            "body":"rcc iit college notice board scrapper",
            "link":"https://github.com/rijusougata13/rcc_collge_notice_web_scrapper",
        },
        {
            "heading":"SnakePro",
            "body":"A different level snake game(only for pros)",
            "link":"https://github.com/rijusougata13/snake_game_modified_version",
        },
        {
            "heading":"Movie Recommender",
            "body":"A recommender web app for movies",
            "link":"https://github.com/rijusougata13/movie-recommender",
        },
        {
            "heading":"NetflixClone",
            "body":"Tried to clone netflix",
            "link":"https://github.com/rijusougata13/netflix-clone",
        },
        {
            "heading":"GrandHotel",
            "body":"A hotel website with html and css only",
            "link":"https://github.com/rijusougata13/hotelGrand",
        },
       
    ]


      const competitivetArray=[
        {
            "heading":"codechef",
            "body":"hey click here to visit my codechef profile",
            "link":"https://www.codechef.com/users/rijusougata13",
        },
        {
            "heading":"codeforces",
            "body":"hey click here to visit my codeforces profile",
            "link":"https://codeforces.com/profile/rijusougata13",
        },
        {
            "heading":"atcoder",
            "body":"hey click here to visit my atcoder profile",
            "link":"https://atcoder.jp/users/rijusougata13",
        },
         {
            "heading":"hackerearth",
            "body":"hey click here to visit my hackerearth profile",
            "link":"https://www.hackerearth.com/@rijusougata13",
        },
       
    ]
        var open;
    return(


        // <Wrappers>
  
        <SliderDiv  open={isOpen} id="projects"  >
         { isOpen ? <p className="heading" ><div data-aos="fade-left">MY PROJECTS</div> </p>:<p className="heading" ><div data-aos="fade-right">competitive coding</div> </p> }
            <Button change onClick={()=>setIsOpen(!isOpen)} >Toggle</Button>

            
            <Slider {...config} >
        {
           isOpen ?(

            projectArray.map(project=>(
                <Card >
                <Wrapper >
                <Heading data-aos="fade-down-right">{project.heading}</Heading>
                <SubHeading data-aos="fade-up-left">{project.body}</SubHeading>
                </Wrapper>
                <Button>Read More</Button>
           
                </Card>
            ))
           ) :(
               competitivetArray.map(project=>(
                <Card>
                <Wrapper>
                <Heading data-aos="fade-down-right">{project.heading}</Heading>
                <SubHeading data-aos="fade-up-left">{project.body}</SubHeading>
                </Wrapper>
                <Button onClick={event =>  window.location.href=project.link} >Visit There</Button>
           
                </Card>
            ))
           )
           
        }
        </Slider>
        </SliderDiv>
        //  </Wrappers>
       
    );
}

export default ProjectPage;