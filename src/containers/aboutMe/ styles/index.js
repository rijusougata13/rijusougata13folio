import styled from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';
import {StyledButton} from '../../../components/button/styles/index';



export const Wrapper=styled.div`
    width:100%;
    height:100%;
    position:relative;
`;


export const Wrappers = styled.div`
    height:80vh;
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:#bd4d2a;
    margin:0rem 0rem;
    padding:0 0;
    justify-content:center;
    overflow:hidden;
    position:relative;
    @media(max-width:900px){
        flex-direction:column;
        height:100vh;
    }

    &:after{
        content:"";
        background:linear-gradient(to right,red,blue);
        width:150%;
        height:150%;
        position:absolute;
        left:-50rem;
        top:0rem;
        transform:translateX(-100%);
        transform:rotate(45deg);
        transition:all 1s;
        opacity:0;
        display:hidden;

        @media(max-width:800px){
            left:0;
            top:10rem;
        }
    }

    &:hover:after{
        transform:translateY(0%);
        transform:rotate(45deg);
        opacity:1;
        display:inline;
    } 
    

    &:before{
        content:"";
        background:linear-gradient(to left,red,blue);
        width:150%;
        height:150%;
        position:absolute;
        right:-60rem;
        top:0rem;
        transform:translateX(100%);
        transform:rotate(45deg);
        transition:all 1s;
        opacity:0;
        display:hidden;

        @media(max-width:800px){
            left:-10rem;
            width:200%;
            height:200%;
            top:-45rem;
        }
    }

    &:hover:before{
        transform:translateY(0%);
        transform:rotate(45deg);
        opacity:1;
        display:inline;
    } 
    
`;

export const Heading =styled(StyledHeading)`

    color:#D8AF74;
    font-weight:1000;
    letter-spacing:.4rem;
    font-size:1.8rem;
 @media(max-width:700px){
        font-size:1.2rem;
        padding:1rem;
    }
    
`

export const SubHeading =styled(StyledSubHeading)`
        padding:2rem;
        font-size: 2rem;
        color:#E68769;
        font-weight:500;
    @media(max-width:900px){
        font-size:1rem;
        padding:1rem;
    }

`


export const AboutText=styled.div`
    /* position:absolute; */
    max-height:50%;
    width:80%;
    background-color:#2B393F;
    color:#151F31;
    padding-top:2rem;
    padding-bottom:2rem;
    margin-left:2rem;
    padding-left:2rem;
    padding-right: 10rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius:5rem;
    justify-content:space-around;
    box-shadow: 10px 5px 10px #fff;
    overflow:hidden;
    z-index:1;
    @media(max-width:900px){
        box-sizing:border-box;
      width:20rem;
      margin:0 0;
      padding:2rem 2rem;
    }
    

    
   
   
`;

export const AboutImg=styled.img`
    height:35rem;
    width:15rem;
    margin-left:-13rem;
    z-index:1;
    transform:rotateY(-15deg) rotate3d(50deg);
    @media(max-width:900px){
        height:50%;
        width:8rem;
    }
`;