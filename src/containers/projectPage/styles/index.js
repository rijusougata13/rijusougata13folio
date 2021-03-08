import styled from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';
import {StyledButton} from '../../../components/button/styles/index';

export const Wrappers = styled.div`
    height:100vh;
    width:100%;
    background-color:#a4152c;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Wrapper = styled.div`
    height:100vh;
    max-width:20rem; 
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Heading =styled(StyledHeading)`

    color:goldenrod;
    font-weight:1000;
    letter-spacing:.4rem;
    font-size:2rem;
    box-sizing:border-box;
    margin:1rem 2rem;
 @media(max-width:700px){
        font-size:1.2rem;
        padding:1rem;
    }
    
`

export const SubHeading =styled(StyledSubHeading)`
    display:flex;
    flex-wrap:wrap;
    width:10rem;
    color:#fff;
    font-weight:500;
    font-size:1.2rem;
    box-sizing:border-box;
    margin:1rem 2rem;
    @media(max-width:900px){
        font-size:1rem;
        padding:1rem;
    }

`
export const Button = styled(StyledButton)`
    padding: 1.5rem;
    transition: transform .3s;
    border-radius:20px;
    position:absolute;
    bottom:2rem;
    &:hover {
        cursor:pointer;
        transform: scale(1.1);
    }
    @media (max-width: 750px) {
        font-size: 10px;
    }
` ;
