import React from "react";
import { Link } from "react-router-dom";
import { Header, Img, TextArea, Line, Subtitle, ToolBar } from './PageHeaderStyles.js';
import imgHeader from './../../assets/images/header_img.png';
import  { Typography }  from "../Typography";

import { FaGamepad } from 'react-icons/fa'

export const PageHeader = () =>{
  return (
    <Header>
      <TextArea>        
        <div>
          <Typography str={"NewsGame"} fontSize="4.5rem"/>
          <Line />
          <Subtitle>
            <Typography str={"Best news about games !"} fontSize={"1rem"}/>  
          </Subtitle>          
        </div>        
        <FaGamepad  size={98}/>        
      </TextArea>           
      <Img src={imgHeader}></Img>
    </Header>
  );
}
