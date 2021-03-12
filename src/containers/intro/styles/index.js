import styled from 'styled-components';
import { keyframes } from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';
import BackgroundImage from '../../../assets/images/background.jpg';
import {StyledButton} from '../../../components/button/styles/index';

export const Button=styled(StyledButton)`
    position:absolute;
    margin-left:40vw;
    bottom:10%;
    border-radius:5px;
    transition:all 5s;
    @media(max-width:800px){
        margin-left:10vw;
    }

    .Clicked{
      position:absolute;
      top:40rem;
      width: 15rem;
      padding: 1rem 1rem;
      font-size:1rem;
      color:#333;
      letter-spacing: .1rem;
      border:none;
      border-radius: 10rem;
      outline: none;
      background:linear-gradient(to right, gold, goldenrod);
      cursor: pointer;
      animation: anim 1.5s 1s backwards;
      transition:all 12s;

}
    :hover{
    background:linear-gradient(to right, goldenrod, gold);
}
    :focus{
        transform:scale(141.0) ; 
        opacity:0;
        background-color:goldenrod;
        
    }
`;

export const ImgBody=styled.div`
    height:100vh;
    width:vw;
    background: url(${BackgroundImage}) no-repeat ;
    background-size: 100% 100%;

    position:relative;
    .overlay  {
        position:relative;
        width:100%;
        height:100%;
        background:rgba(3, 4, 1, .6);
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        @media(max-width:700px){
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }
    }


`


const animate =keyframes`
    
0%{
    
    filter:hue-rotate(0deg);
}
100%{
    filter:hue-rotate(360deg);
}

`;
export const Heading =styled(StyledHeading)`
    padding:1rem;
    letter-spacing:.3rem;
    color:#fff;
    text-shadow:0 0 50px #0f0,
                0 0 100px #0f0,
                0 0 150px #0f0,
                0 0 200px #0f0,
                0 0 250px #0f0;

    animation:${animate} 5s linear infinite;



    
 @media(max-width:700px){
        font-size:1.5rem;
        letter-spacing:.1rem;
        text-shadow:50px 50px 50px #0f0;
              
    }
    
`;


export const SubHeading =styled(StyledSubHeading)`
        padding:1rem;
        font-size: 2rem;
        letter-spacing:.3rem;
    @media(max-width:700px){
        font-size:1.4rem;
        font-weight: bolder;
        letter-spacing:.1rem;
        
    }

`
export const Wrappers = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
    margin:1rem 5rem;
    padding:0 0;
    @media(max-width:700px){
        align-item:center;
    }
    .TypedText{
    
    color: white;
    font-size: 1.5rem;
    padding:1rem;

    @media(max-width:700px){
        font-size:1rem;
        font-weight: light;
        letter-spacing:.1rem;
        
    }
    } 

    .tsparticles-canvas-el {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
}
`;

export const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    margin:1rem 5rem;
    padding:0 0;
    

`;
export const IntroImg=styled.img`
    width:25rem;
    height:30rem;
    transform:rotate(60deg);
    @media(max-width:1000px){
        width:10rem;
        height:10rem;
    }
`;

