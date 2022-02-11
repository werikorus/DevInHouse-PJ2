import React  from "react";
import { Link } from 'react-router-dom';
import { FooterContent, TextArea, MyWebPage } from './PageFooterStyles';
import { Typography } from './../Typography';
import { MdComputer } from 'react-icons/md'
import { FaGamepad } from 'react-icons/fa'

export const PageFooter = () =>{
  return (
    <FooterContent>
      <TextArea>
        <Typography str={"Powered by"} fontSize="1rem" color="white"/>        
          <MyWebPage href="https://www.linkedin.com/in/werik-santos-5066aab5/">Werik Santos</MyWebPage>        
        <MdComputer color="white" size={45}/>           
        <Typography str={"DevInHouse 2022"} fontSize="1rem" color="white"/>
      </TextArea>
    </FooterContent>
  );
}
