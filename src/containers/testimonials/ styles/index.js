import styled from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';
import {StyledButton} from '../../../components/button/styles/index';
import BackgroundImage from '../../../assets/images/cool-background (1).svg';
import BackgroundImageFixed from '../../../assets/images/backgroundFixed.jpg';


export const Wrapper=styled.div`
    height:110%;
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;

`;


export const Button = styled(StyledButton)`
    padding: 1rem;
    transition: transform .3s;
    border-radius:20px;
    
    
    margin:2rem 2rem;
    z-index:1;
   background:#93B289;
    a{
        color:black;
        text-decoration:none;
    }

    &:hover {
        cursor:pointer;
        transform: scale(1.1);
    }
     @media(max-width:900px){
        top:25rem;
        bottom:25rem;
        left:50%;
        padding:1rem;
        margin:0;
        font-size:10px;
    }
    @media(max-width:600px){
        top:25rem;
        bottom:25rem;
        left:50%;
        padding:1rem;
        margin:0;
        font-size:10px;
    }
` ;



export const Heading =styled(StyledHeading)`

    color:#D8AF74;
    font-weight:1000;
    letter-spacing:.4rem;
    font-family: 'Itim', 'cursive';
    font-size:2.8rem;
    display:flex;
    justify-content:flex-start;
    flex:1;
    margin-top:1rem;
 @media(max-width:700px){
        font-size:1.2rem;
        padding:1rem;
    }
    
`;

export const BodyWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    flex-wrap:wrap;
    flex:5;
    width:100%;
    height:100%;
    /* background:red; */

`;

export const SubHeading =styled(StyledSubHeading)`
        /* padding:2rem; */
        font-size: 2rem;
        color:#000045;
        /* margin-bottom:1rem; */
        font-weight:500;
        font-family: 'Itim', 'cursive';
         font-family: 'Open Sans', 'sans-serif';

    @media(max-width:900px){
        font-size:1rem;
        padding:1rem;
    }

`;

export const Text =styled(StyledSubHeading)`
        /* padding:rem; */
        padding:1rem;
        font-size: 1rem;
        color:black;
        flex:5;
        display:flex;
        font-weight:500;
        font-family: 'Itim', 'cursive';
    font-family: 'Open Sans', 'sans-serif';
    @media(max-width:900px){
        font-size:1rem;
        /* padding:1rem; */
    }

`;

export const TestimonialCard=styled.div`
    width:40vw;
    height:30vh;
    /* box-sizing:border-box; */
    padding:1rem;
    background:#1D7E96;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin:2rem;
    flex-direction:column;

    @media(max-width:900px){
        height:20%;
        width:80%;
    }
`;


