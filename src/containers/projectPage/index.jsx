import React from 'react';
import {Wrappers,Heading,Button,SubHeading,Wrapper}from './styles/index';
import Card from '../../components/card/index';


const projectPage=(props)=>{

    
    
    const projectArray=[
        {
            "heading":"github",
            "body":"follow me",
            "link":"github.com",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
        {
            "heading":"github2",
            "body":"follow me 2",
            "link":"github.com2",
        },
       
    ]
    return(
        <Wrappers>
       
        {
            projectArray.map(project=>(
                <Card>
                <Wrapper>
                <Heading>{project.heading}</Heading>
                <SubHeading>{project.body}</SubHeading>
                </Wrapper>
                <Button>Read More</Button>
           
            </Card>
            ))
        }
        </Wrappers>
    );
}

export default projectPage;