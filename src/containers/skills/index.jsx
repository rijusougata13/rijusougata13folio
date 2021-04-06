import React from 'react';
import {Heading,Wrappers,SubHeading,Wrapper,SkillTab1,SkillTab2} from './styles/index';

const Skill=(props)=>{
    return(
        <React.Fragment>
           
        <Wrappers>
             <Heading>My Skills </Heading>
            <Wrapper>
            <SkillTab1>
                
                 <h2>FrontEnd</h2>
                <li>
                    Html
                </li>
                <li>
                    Css
                </li>
                <li>
                    Js
                </li>
                <li>
                    React
                </li>
            </SkillTab1>
            <SkillTab2>
                 <h2>BackEnd</h2>
                <li>
                    Python
                </li>
                <li>
                   Flask
                </li>
                <li>
                    Node Js
                </li>
                <li>
                     Django
                </li>
            </SkillTab2>
            </Wrapper>
        </Wrappers>
        </React.Fragment>
    );
}

export default Skill;