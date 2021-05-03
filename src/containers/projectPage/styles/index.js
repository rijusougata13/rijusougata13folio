import styled ,{css} from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';
import {StyledButton} from '../../../components/button/styles/index';
import BackgroundImageFixed from '../../../assets/images/backgroundFixed3.jpg';


export const Wrappers = styled.div`
    height:100vh;
    width:100%;
    background-color:#413E62;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    
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
    @media(max-width:800px){
        height:60vh;
    }
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
    text-transform:uppercase;
    color:#99B8E9;
    font-weight:1000;
    letter-spacing:.4rem;
    font-size:2rem;
    box-sizing:border-box;
    padding:0rem 1rem;
    margin-top:-8rem;
    
 @media(max-width:800px){
        margin-top:-2rem;
        font-size:1.2rem;
        padding:1rem;
        letter-spacing:0;
    }
    @media(max-width:600px){
        font-size:.5rem;
        letter-spacing:.2rem;
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
    display:flex;
    align-items:center;
    justify-content:center;
    @media(max-width:900px){
        font-size:.9rem;
        padding:1rem;
        margin-top:-2rem;
    }

    @media(max-width:600px){
        font-size:.5rem;
        letter-spacing:.2rem;
    }

`



export const Button = styled(StyledButton)`
    padding: 1rem;
    transition: transform .3s;
    border-radius:20px;
    position:absolute;
    bottom:1rem;
    margin:0rem 2rem;
    margin-top:2rem;
    ${({change})=>

        change &&
        css`
            position:absolute;
            top:0;
            right:0;
            height:2rem;
            align-items:center;
            display:flex;


             @media (max-width: 750px) {
                top:2rem;
                right:1rem;
                border-radius:5px;
                padding:1rem;
        font-size: 10px;
        bottom:1rem;
        margin:0;
        padding:.5rem;
    }

        `


    }

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
    @media(max-width:600px){
        padding:0;
        margin:0;
        font-size:8px;
      
    }
` ;

export const SliderDiv=styled.div`
    position:relative;
    padding:2rem 0rem;
       background: url(${BackgroundImageFixed}) center no-repeat fixed;
   background-size:100%;
    /* background-color:#413E62; */
    transition:all .2s;
    width:100%;
    height:100vh;
    margin-top:0rem;
    .slick-dots li button:before{
        color:goldenrod;
    }

    ${({open})=>

        open &&
        css`
           background-color:#413E62;
        `
    }


    .heading{
        font-size:3rem;
        font-weight:800;
        color:#ECA51D;
        display:flex;
        align-items:center;
        justify-content:center;
        text-transform:uppercase;

         @media(max-width:700px){
        font-size:2rem;
        padding:1rem;
        /* margin-top:-4rem; */
    }
    }

    .toggle{
        @media(max-width:700px){
            top:12px;

        }
    }
    
    overflow: hidden;
    :focus{
        outline:none;
    }
    
    .slick-dots{
        
        /* background-color:#413E62; */
        overflow: hidden;
        height:2rem;
        ${({open})=>

        open &&
        css`
           /* background-color:#413E62; */
        `
    }
        @media(max-width:800px){
            height:25px;
        }
    }
    
    @media(max-width:800px){
         padding-top:0rem;
        padding-bottom:5rem;
        width:100vw;
        height:100%;
    }
  
`;