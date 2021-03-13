import styled from 'styled-components';
import {StyledButton} from '../../../components/button/styles/index';
import React , {useState} from 'react';


export const Wrappers = styled.div`
   position:fixed;
    z-index:1;
    width:100%;
    display: flex;
    flex-direction: row;
    background: rgba(20,20,22,1);
    align-items:center;
    justify-content:space-between;
    z-index:2;
`;

export const Button = styled(StyledButton)`
    padding: 1.5rem;
    transition: transform .3s;

    &:hover {
        cursor:pointer;
        transform: scale(1.1);
    }
    @media (max-width: 750px) {
        font-size: 10px;
    }
` ;

 export  const RightSide = styled.div`
    display: flex;
    word-spacing: 5px;
    align-items: center;
    justify-content:center;
    
    @media (max-width: 768px) {
        
    margin-top:39.1rem;
    position:fixed;
    z-index:10;
    flex-direction: column;
    background:linear-gradient(rgba(34, 32, 42, 1), rgba(34, 32, 41, .2));
    height:110vh;
    justify-content:space-between;

    box-sizing:border-box;
    padding:10rem 2rem 10rem 4rem;
    max-width: ${({ isOpen }) => (isOpen ? "300px" : "0")}; 
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; 
   
  
    }
`



export const LeftSide = styled.img`
    /* color: #F5F5F5;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    justify-content: left;
    padding: 0 2rem 0 1rem;
    margin: 1rem; */
    color:white;
    background-color:goldenrod;
`;

export const Nav = styled.a`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #E0E0E0;
    font-weight: 500;
    text-decoration: none;
    padding:1rem 1rem;
    transition: .3s ease-in;

    &:hover{
        color: goldenrod;
    }

    @media (max-width: 850px) {
        font-size: 1.5rem;
  }
    @media (max-width: 750px) {
        font-size: 1.5rem;
    }
`;

export  const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: gold;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-right: 1rem;
  }
`;
