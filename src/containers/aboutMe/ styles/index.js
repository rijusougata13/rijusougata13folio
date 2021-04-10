import styled from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';
import {StyledButton} from '../../../components/button/styles/index';
import BackgroundImage from '../../../assets/images/cool-background (1).svg';



export const Wrapper=styled.div`
    width:100%;
    height:110vh;
    position:relative;
    background:#141A16;
   
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

export const SvgDiv=styled.div`
    position:absolute;
    top:0;
`;
export const Button = styled(StyledButton)`
    padding: 1rem;
    transition: transform .3s;
    border-radius:20px;
    position:absolute;
    bottom:1rem;
    margin:2rem 2rem;
    z-index:1;
   
    a{
        color:red;
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

export const BackgroundImg=styled.img`
    position:absolute;
    right:0;
    top:5rem;
    z-index:1;
`;

export const Wrappers = styled.div`
 background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23064e77'/%3E%3Cstop offset='1' stop-color='%230a7dbe'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%238f8f8f'/%3E%3Cstop offset='0.09' stop-color='%23b3b3b3'/%3E%3Cstop offset='0.18' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.31' stop-color='%23dbdbdb'/%3E%3Cstop offset='0.44' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.59' stop-color='%23f2f2f2'/%3E%3Cstop offset='0.75' stop-color='%23fafafa'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.5' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
background-attachment: relative;
background-repeat: no-repeat;
background-position: top left;
background-size:12rem;
    height:80vh;
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:#141A16;
    margin:0rem 0rem;
    padding:0 0;
    justify-content:center;
    overflow:hidden;
    position:relative;
    @media(max-width:900px){
        flex-direction:column;
        height:100vh;
    }

    

    /* &:after{
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
     */
   
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