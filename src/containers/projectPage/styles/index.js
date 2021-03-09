import styled from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';
import {StyledButton} from '../../../components/button/styles/index';

export const Wrappers = styled.div`
    height:100%;
    width:100%;
    background-color:#a4152c;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    /* z-index:-100; */
    
    /* flex-direction:row; */
`;

export const Wrapper = styled.div`
    height:100%;
    max-width:100%; 
    position:absolute;
    display:flex;
    word-wrap: break-word;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`;

export const Heading =styled(StyledHeading)`
    /* position:absolute; */
    color:goldenrod;
    font-weight:1000;
    letter-spacing:.4rem;
    font-size:2rem;
    box-sizing:border-box;
    padding:0rem 1rem;
    margin-top:-10rem;
 @media(max-width:700px){
        margin-top:-2rem;
        font-size:1.2rem;
        padding:1rem;
        letter-spacing:0;
    }
    
`

export const SubHeading =styled(StyledSubHeading)`
    /* position:absolute; */
     color:#fff;
    font-weight:300;
    letter-spacing:.1rem;
    font-size:1rem;
    box-sizing:border-box;
    padding:1rem 1rem;
    margin-top:-10rem;
    margin-left:2rem;
    margin-right:2rem;
    overflow:hidden;
    @media(max-width:900px){
        font-size:.9rem;
        padding:1rem;
        margin-top:-2rem;
    }

`
export const Button = styled(StyledButton)`
    padding: 1.5rem;
    transition: transform .3s;
    border-radius:20px;
    position:absolute;
    bottom:1rem;
    margin:2rem 2rem;
    &:hover {
        cursor:pointer;
        transform: scale(1.1);
    }
    @media (max-width: 750px) {
        font-size: 10px;
        bottom:1rem;
        margin:0;
        padding:.5rem;
    }
` ;

export const SliderDiv=styled.div`
   height:100%;
    width:100%;
    background-color:#a4152c;
    transition:all .2s;
    :focus{
        outline:none;
    }

    .slick-dots{
        background-color:red;
    }
    
`;