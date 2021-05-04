import React from 'react';
import {Heading,Wrappers,SubHeading,Wrapper,SkillTab1,SkillTab2} from './styles/index';

const Skill=(props)=>{
    return(
        <React.Fragment>
           
        <Wrappers>
             <Heading>My Skills </Heading>
            <Wrapper>
            <SkillTab1>
                
                 <h2 >FrontEnd</h2>
                <li>
                    Html<span className="bar"><span className="html"></span></span>
                </li>
                <li>
                    Css<span className="bar"><span className="css"></span></span>
                </li>
                <li>
                    Js<span className="bar"><span className="js"></span></span>
                </li>
                <li>
                    React<span className="bar"><span className="react"></span></span>
                </li>
            </SkillTab1>
            <SkillTab2>
                 <h2>BackEnd</h2>
                <li>
                    Python<span className="bar"><span className="python"></span></span>
                </li>
                <li>
                   Flask<span className="bar"><span className="flask"></span></span>
                </li>
                <li>
                    Node Js<span className="bar"><span className="node"></span></span>
                </li>
                <li>
                     Django<span className="bar"><span className="django"></span></span>
                </li>
            </SkillTab2>
            </Wrapper>
        </Wrappers>
        </React.Fragment>
    );
}

export default Skill;