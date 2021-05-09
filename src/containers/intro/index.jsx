import React,{useEffect,useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Typed from 'react-typed';
import AOS from 'aos';
import Particles from 'react-particles-js';
import 'aos/dist/aos.css'; 
import {IntroDiv,Wrappers,Heading,SubHeading,IntroImg,ImgBody,Wrapper,Button, SideImg,IconsDiv} from './styles/index';
import IntroImage from '../../assets/images/download.png';
import ReactImg from '../../assets/images/react.png';
import CssImg from '../../assets/images/css.png';
import JsImg from '../../assets/images/js.png';
import NodeImg from '../../assets/images/nodejs.png';

import StyledButton from '../../components/button/index';

import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:45%;
  left:45%;
  margin: 0 auto;
  border-color: red;
`;


const Intro=(props)=>{
   
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[])
    const [open,setIsOpen]=useState(0);
    // console.log(open)
    const Clicked=()=>{
        
        
        // setTimeout(()=>{
            setLoading(true);
        setTimeout(()=>{
            props.trigger();
        setIsOpen(true);
            setLoading(false);
        },1500);
        // },1000);
          
        
    }
    return (

       <React.Fragment>
            {
            loading ?
             
                <DotLoader color={"#F37A24"} loading={loading} css={override} size={80}  />
             :
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
            <IconsDiv>
                  <img className="reactImg" src={(ReactImg)}/>
               <img className="cssImg" src={(CssImg)}/>
               <img className="jsImg" src={(JsImg)}/>
               <img className="nodeImg" src={(NodeImg)}/>
            </IconsDiv>
            </Wrappers>
            <Wrappers>
                {/* <IntroImg src={(ReactImg)}></IntroImg> */}
                <img align='right' src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="330" className="gifImg"></img>
               {/* <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="400" height="400" className="gifImg"/>  */}
            </Wrappers>
            
            {/* <SideImg>
               <img className="reactImg" src={(ReactImg)}/>
               <img className="cssImg" src={(CssImg)}/>
               <img className="jsImg" src={(JsImg)}/>
               <img className="nodeImg" src={(NodeImg)}/>
            </SideImg> */}
           {open?null:<Button onClick={Clicked}  >KNOW MORE</Button>} 
           
        </div>
        
         </ImgBody>
        
        }
       </React.Fragment>
       
        
    );
}
export default Intro;
