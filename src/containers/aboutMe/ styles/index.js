import styled from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';


export const Wrappers = styled.div`
    height:80vh;
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:rgba(20,20,22,1);
    margin:0rem 0rem;
    padding:0 0;
    justify-content:center;
    @media(max-width:900px){
        flex-direction:column;
        height:100vh;
    }

`;

export const Heading =styled(StyledHeading)`

    color:#1c100f;
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
        color:#fff;
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
    background-color:#8e8e9b;
    color:white;
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

    @media(max-width:900px){
        height:50%;
        width:8rem;
    }
`;