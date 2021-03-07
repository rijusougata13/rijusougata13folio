import Navbar from './containers/navbar/index';
import styled from 'styled-components';

const Wrapper=styled.div`
  margin:0 0 !important;
  padding:0 0 !important;
`;


function App() {
  return (
    <Wrapper>
     <Navbar/>
    </Wrapper>
  );
}

export default App;
