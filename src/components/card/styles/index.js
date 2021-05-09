import styled from 'styled-components';


export const StyledCard=styled.div`
    position:relative;
    width:20rem;
    height:30rem;
    background-color:#1D2021;
    border-radius:10px;
    display:flex;
    box-sizing:border-box;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    box-shadow:2px 10px 12px rgba(0,0,0,0.5);
    margin:2rem 2rem;
    z-index:10;
    overflow:hidden;

    &:before{
        content:"";
        background-color:#1D2021;
        border-radius:50%;
        top:0;
        height:500%;
        width:500%;
        position:absolute;
        transform:translateY(20%); 
        transition:all 1s;
        
        transition-delay:-.5s;
    }
    &:hover:before{
        transform:translateY(1%);
    }

    img{

        overflow:hidden;
        height:70%;
        width:100%;
        position:absolute;
        top:0;
        z-index: 2;
        /* transition-delay:.5s; */
    }

    &:hover img{
        z-index:-2;
    }
  
    @media(max-width:800px){
        width:10rem;
        height:15rem;
        padding:2rem;
        margin-left:2rem;
    }

    @media(max-width:500px){
        width:8rem;
        margin-left:2rem;
    }
`;

