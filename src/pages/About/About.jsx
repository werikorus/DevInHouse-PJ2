import React  from "react";
import { Main, Page } from './AboutStyles';
import { Typography } from "../../Components/Typography";
import { ToolBar } from "../../Components/ToolBar";

export const About = () =>{
  const text = `
    This project was made by a classmate from a Full Stack Developer Course,
    wich the maily purpose is to prepare people to market, and give then an oportunity
    of practice your skills. Project developed in February of 2022, by Werik Santos. DeVinHouse - Senai/Softplan
  `

  return (
    <Page>
      <ToolBar/>
      <Main>           
       <Typography str={text} fontSize="1.2rem" />
      </Main> 
    </Page>     
  );
}
