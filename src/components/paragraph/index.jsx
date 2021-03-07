import React from 'react';
import {StyledParagraph} from './styles/index';

const Paragraph=(props)=>(
    <StyledParagraph>
    {props.children}
    </StyledParagraph>
);

export default Paragraph;