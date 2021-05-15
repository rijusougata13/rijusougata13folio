import styled from 'styled-components';

export const ModalStyle = styled.div`
   background-color:#377C7A;
   width:95%;
   height:90%;
   max-height:50rem;
    position:absolute;
    top:5%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    /* left:0; */
    flex-direction:column;

    .footer{
        background:transparent;
        justify-content:flex-end;
        display:flex;
        /* justify-content:center; */
        align-items:center;
        width:100%;
        
        .close{
            margin-top:-2rem;
            margin-right:1rem;
        }
    }
`;

export const BackdropStyle = styled.div`
   background-color:green;
   width:100vw;
   height:100vh;
    position:relative;
    /* top:0;
    left:0; */
`;
export const StyledButton = styled.button`
    background-color: #93B289;
    text-transform: uppercase;
    color: #363643;
    font-weight: bolder;
    padding:1rem 1.5rem;
    border: none;
    outline:none;
    display:flex;
    /* align-items:right; */
    margin-right:1rem;
    /* justify-content:flex-end; */
`;