import Navbar from './containers/navbar/index';
import styled from 'styled-components';
import Intro from './containers/intro/index';
import AboutMe from './containers/aboutMe/index';
import ProjectPage from './containers/projectPage/index';
import Contact from './containers/contact/index';
import Creator from './containers/creator/index';
import Feedback from './containers/feedback';
import React,{useState} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


const Wrapper=styled.div`
  margin:0 0 !important;
  padding:0 0 !important;
`;

const ScrollHandler=(e)=>{
  e.preventDefault();
  setTimeout(()=>{
     
  window.scrollTo({
      top: 820,
      left: 0,
      behavior: 'smooth'
    });
  },1000)
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


function App() {

const [statee, setState] = useState(false);
const   triggerState = ()=> {
    setState(true);
   scroll.scrollToBottom();
}

  return (
    <Wrapper>
     {/* <Navbar/> */}
     {statee?<Navbar/>:null} 
     <Intro clicked={ScrollHandler} trigger={triggerState} />
     {statee?<AboutMe/>:null} 
     
     {statee?<ProjectPage/>:null} 
     
     {statee?<Contact/>:null} 
     
     {/* <Feedback/> */}
      {statee?<Creator/>:null} 
     
    </Wrapper>
  );
}

export default App;
