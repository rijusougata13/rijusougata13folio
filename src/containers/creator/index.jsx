
import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Creator } from './styles/index.js';
import {FaHeart} from "react-icons/fa";

const creator=(props)=>(
    <Creator>
         <div class="copyright-text">
                <p>Copyright &copy;2021.Portfolio rijusougata13</p>
            </div>
            <div class="text-right">
                <p>Made With  <FaHeart size='1rem'  color="red"/>   By <span>sougata das</span></p>
            </div>
    </Creator>
);
export default creator;