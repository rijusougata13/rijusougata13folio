import styled from 'styled-components';
import { keyframes } from 'styled-components';
import {StyledHeading} from '../../../components/heading-text/styles/index';
import {StyledSubHeading} from '../../../components/subHeading-text/styles/index';



const animate =keyframes`
    
0%{
    transform:translateY(-5vh) translateX(-5vw);
    
}

25%{
    transform:translateY(-5vh) translateX(-5vw);
    
}

35%{
    transform:translateY(25vh) translateX(-15vw);
    
}
50%{
    transform:translateY(0vh) translateX(0vw);
    
}

65%{
    transform:translateY(10vh) translateX(25vw);
    
}
75%{
    transform:translateY(30vh) translateX(35vw);
    
}
100%{
    transform:translateY(35vh) translateX(28vw);
    
}

`;



const animate2 =keyframes`
    
0%{
    transform:translateY(35vh) translateX(28vw);
    
}

25%{
    transform:translateY(15vh) translateX(25vw);
    
}

35%{
    transform:translateY(-25vh) translateX(25vw);
    
}
50%{
    transform:translateY(0vh) translateX(10vw);
    
}

65%{
    transform:translateY(-10vh) translateX(15vw);
    
}
75%{
    transform:translateY(-30vh) translateX(-25vw);
    
}
100%{
    transform:translateY(45vh) translateX(-30vw);
    
}

`;

const colorChange =keyframes`
    
0%{
    
    filter:hue-rotate(0deg);
}
100%{
    filter:hue-rotate(360deg);
}

`;
export const Heading =styled(StyledHeading)`

    margin-top:5rem;
    color:#1c100f;
    font-weight:1000;
    letter-spacing:.4rem;
    font-size:3rem;
    color:green;
    animation:${colorChange} 5s linear infinite;
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


export const ExternalWrapper=styled.div`
    /* position:relative; */

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100%;
width:100%;  
background-color:white;
`;

export const Wrappers = styled.div`
    border:10px solid black;
    position:relative;
    margin:1rem 1rem;
    margin-top:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:80vh;
    width:80vw;  
    background-color:red;
    margin-left:1rem;
    margin-right:1rem;
    overflow:hidden;
    ul{
        margin:0;
        
        
    }

    ul li{
        /* position:absolute; */
        list-style:none;
        width:50px;
        height:50px;
        background-color:#fff;
        border-radius:50%;
        margin:0 1rem;
        display:flex;
        align-items:center;
        justify-content:center;
       
    }


    ul li:nth-child(1){
        animation:${animate} 10s linear  alternate infinite;
        animation-delay:1.5s;

        
    }
    ul li:nth-child(2){
        animation:${animate} 10s linear  alternate infinite;
        animation-delay:2.5s;
    }
    ul li:nth-child(3){
        animation:${animate2} 10s linear  alternate infinite;
        animation-delay:0s;
    }
    ul li:nth-child(4){
        animation:${animate} 10s linear  alternate infinite;
        animation-delay:1s;
    }
     ul li:nth-child(6){
        animation:${animate2} 10s linear  alternate infinite;
        animation-delay:3s;
    }
     ul li:nth-child(5){
        animation:${animate2} 10s linear  alternate infinite;
        animation-delay:1s;
    }
    

`;





