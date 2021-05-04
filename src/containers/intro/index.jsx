import React,{useEffect,useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Typed from 'react-typed';
import AOS from 'aos';
import Particles from 'react-particles-js';
import 'aos/dist/aos.css'; 
import {IntroDiv,Wrappers,Heading,SubHeading,IntroImg,ImgBody,Wrapper,Button, SideImg} from './styles/index';
import IntroImage from '../../assets/images/download.png';
import ReactImg from '../../assets/images/react.png';
import CssImg from '../../assets/images/css.png';
import JsImg from '../../assets/images/js.png';
import NodeImg from '../../assets/images/nodejs.png';

import StyledButton from '../../components/button/index';




const Intro=(props)=>{
    
    const [open,setIsOpen]=useState(0);
    // console.log(open)
    const Clicked=()=>{
        props.trigger();
        setIsOpen(true);
    }
    return (
        <ImgBody id="home" >
             <Particles
            style={{
            "left":"0",
            "position": "absolute",
            "height": "100vh",
            "width":"100vw",
            "z-index": 1,
            }}
            params={{
                particles:{
                    
                    number:{
                        value:20,
                        density:{
                            
                            enable:true,
                            value_area:900,
                        }
                    },
                    shape:{
                        type:"circle",
                        stroke:{
                            width:6,
                            color:"#f9ab00",
                        }
                    }
                }
            }}
            />
        <div className='overlay'>
            {/* <Wrapper> */}
            <Wrappers>
            <SubHeading >Hey</SubHeading>
            <Heading className="Heading" >I AM SOUGATA DAS</Heading>
            <Typed 
            className="TypedText"
            strings={["web-developer","competitive coder"]}
            typeSpeed={40}
            backSpeed={60}
            backDelay={1000}            
            loop
            />
            </Wrappers>
            {/* <Wrappers>
                <IntroImg src={(ReactImg)}></IntroImg>
            </Wrappers> */}
            <SideImg>
               <img className="reactImg" src={(ReactImg)}/>
               <img className="cssImg" src={(CssImg)}/>
               <img className="jsImg" src={(JsImg)}/>
               <img className="nodeImg" src={(NodeImg)}/>
            </SideImg>
           {open?null:<Button onClick={Clicked}  >KNOW MORE</Button>} 
            {/* </Wrapper> */}
        </div>
        
    </ImgBody>
    );
}
export default Intro;
