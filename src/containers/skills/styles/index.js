import styled ,{css} from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';
import {StyledButton} from '../../../components/button/styles/index';
import { keyframes } from 'styled-components';


export const Wrappers = styled.div`
    height:130vh;
    width:100%;
    position:relative;
    background-color:red;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
    padding:2rem 1rem;
    position:relative;
   
    @media(max-width:800px){
        
        justify-content:space-around;
    }
`;
export const SkillTab2=styled.div`
    
    text-align:right;
   display:flex;
    justify-content:space-evenly;
    /* align-items:right !important; */
    width:100%;
    height:100%;
    background-color:green;
    color:red;
    position:absolute;
    font-size:2rem;
   clip-path:circle(20% at 100% 100%);
    transition:clip-path 1s;
     list-style:none;
    padding:0;
    z-index:0;
    flex-direction:column;
    margin-right:5rem;
    
    h2{
        margin-right:20rem;
        @media(max-width:800px){
            margin-right:10rem;
            font-size:1.5rem;
        }
    }

    li{
        
        margin:0rem 1rem;
        color:black;

        @media(max-width:500px){
            font-size:1rem;
        }
        
    }

    .bar{
        background:#353b48;
        display:block;
        height:2px;
        width:40rem;
        border:1px solid rgba(0,0,0,.3);
        border-radius:3px;
        overflow:hidden;
        box-shadow:0 0 10px #2187e7b3;
    }
    
    .bar span{
        height:2px;
        float:left;
        background:#2187e7;

    }

    .python{
        width:80%;
       
    }
     .flask{
        width:50%;
    }
     .django{
        width:10%;
    }
     .node{
        width:10%;
    }

    &:hover{
       clip-path:circle(110% at 100% 100%);
    } 


`;

export const SkillTab1=styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:left;
    width:100%;
    height:100%;
    flex-direction:column;
    background-color:green;
    color:red;
    font-size:2rem;
    padding:2rem 2rem;
    clip-path:circle(20% at 0% 0%);
    transition:clip-path 1s;
    list-style:none;
    padding:0;
    z-index:0;

   
    h2{
        margin-left:25rem;

        @media(max-width:800px){
            margin-left:10rem;
            font-size:1.5rem;
        }
    }

    li{
        
        margin:0rem 1rem;
        color:black;

        @media(max-width:500px){
            font-size:1rem;
        }
        
    }

    .bar{
        background:#353b48;
        display:block;
        height:2px;
        width:40rem;
        border:1px solid rgba(0,0,0,.3);
        border-radius:3px;
        overflow:hidden;
        box-shadow:0 0 10px #2187e7b3;
    }
    
    .bar span{
        height:2px;
        float:left;
        background:#2187e7;

    }

    .html{
        width:90%;
       
    }
     .css{
        width:80%;
    }
     .js{
        width:70%;
    }
     .react{
        width:60%;
    }

    
    &:hover{
       clip-path:circle(110% at 0% 0%);
    } 

        /* &:hover+${SkillTab2}{
       clip-path:circle(10% at 100% 100%);
        
    }  */
`;



export const Wrapper = styled.div`
    background-color:blue;
    display:flex;
    width:100%;
    height:100vh;
    padding:0rem 0rem;
    justify-content:space-between;
    align-items:left;
    flex-direction:column;
    margin-top:10rem;
    transition:all 1s;
    position: relative;
    &:hover{
        background-color:pink;
    }


    .backend{
        position:absolute;
        color:black;
        font-size:4rem;
        bottom:0rem;
        left:13rem;
    }

    .frontend{
        position:absolute;
        color:black;
        font-size:4rem;
        top:0rem;
        right:13rem;
    }


    @media(max-width:800px){
        width:100vw;
        height:90vh;
        margin-top:0rem;
    }
`;


export const Heading =styled(StyledHeading)`

    text-transform:uppercase;
    color:goldenrod;
    font-weight:1000;
    letter-spacing:.4rem;
    font-size:2rem;
    box-sizing:border-box;
    padding:0rem 1rem;
   position:absolute;
    left:40%;
    font-size:4rem;

 @media(max-width:800px){
        left:25%;
        top:5%;
        font-size:2.2rem;
        padding:1rem;
        letter-spacing:0;
    }

    @media(max-width:600px){
        font-size:1.5rem;
        letter-spacing:.2rem;
    }
    
    
`
export const SubHeading =styled(StyledSubHeading)`
    /* position:absolute; */
     color:#fff;
    font-weight:600;
    letter-spacing:.1rem;
    font-size:2.5rem;
    box-sizing:border-box;
    padding:1rem 1rem;
    display:flex;
    color:goldenrod;
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