import Navbar from './containers/navbar/index';
import styled from 'styled-components';
import Intro from './containers/intro/index';
import AboutMe from './containers/aboutMe/index';
import ProjectPage from './containers/projectPage/index';
import Contact from './containers/contact/index';

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
  return (
    <Wrapper>
     <Navbar/>
     <Intro clicked={ScrollHandler}/>
     <AboutMe/>
     <ProjectPage/>
     <Contact/>
    </Wrapper>
  );
}

export default App;
