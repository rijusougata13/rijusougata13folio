import Navbar from './containers/navbar/index';
import styled from 'styled-components';
import Intro from './containers/intro/index';
import AboutMe from './containers/aboutMe/index';
import ProjectPage from './containers/projectPage/index';
import Contact from './containers/contact/index';
import Creator from './containers/creator/index';
import Feedback from './containers/feedback';
import Skill from './containers/skills/index';
import React,{useState} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import LoadingPage from './components/loadingPage';


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
    window.scrollTo(20,20);
  //  scroll.scrollToBottom();
}

  return (
    <Wrapper>
     {/* <LoadingPage/> */}
     {statee?<Navbar/>:null} 
     <Intro clicked={ScrollHandler} trigger={triggerState} />
     {statee?<AboutMe/>:null} 
     {statee?<Skill/>:null} 
     {statee?<ProjectPage/>:null} 
     
     {statee?<Contact/>:null} 
     
      {statee?<Creator/>:null}
    
   
     
    </Wrapper>
  );
}

export default App;
