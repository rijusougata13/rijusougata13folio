import React from 'react';
import {StyledHeading} from './styles/index';

const Heading=(props)=>(
    <StyledHeading>
    {props.children}
    </StyledHeading>
);

export default Heading;