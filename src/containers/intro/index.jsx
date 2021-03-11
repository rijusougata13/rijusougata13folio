import React from 'react';
import Typed from 'react-typed';
import AOS from 'aos';
import Particles from 'react-particles-js';
// import 'aos/dist/aos.css'; 
import {IntroDiv,Wrappers,Heading,SubHeading,IntroImg,ImgBody,Wrapper,Button} from './styles/index';
import IntroImage from '../../assets/images/download.png';
import StyledButton from '../../components/button/index';




const intro=(props)=>{
    
    return (
        <ImgBody id="home">
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
                        value:100,
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
            <SubHeading>Hey</SubHeading>
            <Heading className="Heading">I AM SOUGATA DAS</Heading>
            <Typed 
            className="TypedText"
            strings={["web-developer","competitive coder"]}
            typeSpeed={40}
            backSpeed={60}
            backDelay={1000}            
            loop
            />
            </Wrappers>
            <Wrappers>
                <IntroImg src={(IntroImage)}></IntroImg>
            </Wrappers>
            {/* <Button onClick={props.clicked} className="button">KNOW MORE</Button> */}
            {/* </Wrapper> */}
        </div>
        
    </ImgBody>
    );
}
export default intro;
