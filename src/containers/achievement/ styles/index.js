import styled from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';
import {StyledButton} from '../../../components/button/styles/index';
import BackgroundImage from '../../../assets/images/cool-background (1).svg';
import BackgroundImageFixed from '../../../assets/images/backgroundFixed.jpg';


export const Wrapper=styled.div`
    width:100%;
    height:100%;
    position:relative;
    background:#141A16;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;

   background: url(${BackgroundImageFixed}) center no-repeat fixed;

   background-size:100%;
    
    &:before{
     content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background:black;
    height:100%;
    width:100%;
   opacity: 0.8;
    }

    .svg{
        top:0rem;
        color:blue;
        position:relative;
        @media(max-width:1000px){
            top:4rem;
        }
        @media(max-width:800px){
            top:0rem;
        }
    }
    .svgBottom{
       
        top:100%;
        color:blue;
        position:relative;
        @media(max-width:1100px){
            top:101%;
        }
        @media(max-width:1000px){
            top:115%;
        }
        @media(max-width:900px){
            top:100%;
        }
        @media(max-width:800px){
            top:0%;
        }
    }

`;

export const BlackWrapper=styled.div`
    height:100%;
    opacity:.7;
    background:black;
    position:relative;
    top:0;
    left:0;

`;

export const AchivementTab=styled.div`
   
   
  
    height:70%;
    width:90vw;
    color:#f2f2f2;
    text-align:left;
    font-size:2rem;
    padding:2rem;
    display:flex;
    flex-wrap:wrap;
    align-items:left;
    margin:2rem 0;
    flex-direction:column;
    justify-content:flex-start;
    background: rgba( 13, 70, 107, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
   
    z-index:1;


    .span{
        font-size:1rem;
        margin:10px 3rem;

        a{
            color:#f2f2f2;
        }
          @media(max-width:900px){
            font-size:1rem;
        }
    }

    li{
         color:#ff4b00;
        @media(max-width:900px){
            font-size:1.2rem;
           
        }
    }
`;

export const Heading =styled(StyledHeading)`

    color:#D8AF74;
    font-weight:1000;
    letter-spacing:.4rem;
    font-family: 'Itim', 'cursive';
    font-size:2.8rem;
    margin-top:5rem;
    z-index:3;
 @media(max-width:700px){
        font-size:1.2rem;
        padding:1rem;
    }
    
`