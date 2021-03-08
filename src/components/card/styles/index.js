import styled from 'styled-components';


export const StyledCard=styled.div`
    position:relative;
    width:20rem;
    height:35rem;
    background-color:#1e1e26;
    border-radius:10px;
    display:flex;
    box-sizing:border-box;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    box-shadow:2px 10px 12px rgba(0,0,0,0.5);

    @media(max-width:800px){
        width:10rem;
        height:15rem;
    }
`;

