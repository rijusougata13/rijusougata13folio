import React from 'react';
import {Wrappers,Heading,Button,SubHeading,Wrapper}from './styles/index';
import Card from '../../components/card/index';


const projectPage=(props)=>{
    return(
        <Wrappers>
        <Card>
            <Wrapper>
            <Heading>Project 1</Heading>
            <SubHeading>Project ddddddd Details</SubHeading>
            </Wrapper>
            <Button>Read More</Button>
       
        </Card>
        </Wrappers>
    );
}

export default projectPage;