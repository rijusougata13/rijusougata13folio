import React from 'react';
import { SubHeading } from '../../containers/intro/styles';
import {StyledCard} from './styles/index';

const card=(props)=>{
    return(
        <StyledCard>
            {props.children}
        </StyledCard>

    );
}

export default card;