import React from "react";
import { Header, TitleArea, Img, TextArea, Line, Subtitle, ToolBar } from './PageHeaderStyles.js';
import imgHeader from './../../assets/images/header_img.png';
import  { Typography }  from "../Typography";

import { FaGamepad } from 'react-icons/fa'

export const PageHeader = () =>{
  return (
    <Header>
      <TextArea>        
        <TitleArea>
          <Typography str={"NewsGame"} fontSize="4.5rem"/>
          <Line />
          <Subtitle>
            <Typography str={"Best news about games !"} fontSize={"1rem"}/>  
          </Subtitle>          
        </TitleArea>        
        <FaGamepad  size={98}/>        
      </TextArea>           
      <Img id="pageHeaderImg" src={imgHeader}></Img>
    </Header>
  );
}
