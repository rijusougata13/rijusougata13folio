import React from 'react';
import {StyledSubHeading} from './styles/index';

const Heading=(props)=>(
    <StyledSubHeading>
    {props.children}
    </StyledSubHeading>
);

export default Heading;