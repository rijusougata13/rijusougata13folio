import React from 'react';
import {StyledButton} from './styles/index';
import './styles/styles.css';

const LoadingPage = (props) => {
    return(
        <div className="loadingWrapper">
           
            <span class="loader"><span class="loader-inner"></span></span>
        </div>
    )
}
export default LoadingPage;