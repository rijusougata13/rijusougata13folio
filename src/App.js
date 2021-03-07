import Navbar from './containers/navbar/index';
import styled from 'styled-components';
import Intro from './containers/intro/index';

const Wrapper=styled.div`
  margin:0 0 !important;
  padding:0 0 !important;
`;

const ScrollHandler=(e)=>{
  e.preventDefault();
  // var cls=e.target.classList;
  // e.target.classList.remove(cls);
  // e.target.classList.add("Clicked");
  setTimeout(()=>{
     
  window.scrollTo({
      top: 820,
      left: 0,
      behavior: 'smooth'
    });
  },1000)
  // document.getElementById('down_arrow').setAttribute('style','opacity:0');
}


function App() {
  return (
    <Wrapper>
     <Navbar/>
     <Intro clicked={ScrollHandler}/>
    </Wrapper>
  );
}

export default App;
