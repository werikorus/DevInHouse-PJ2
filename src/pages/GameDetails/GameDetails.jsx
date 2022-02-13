import React, { useEffect, useState, useRef }  from "react";
import { useParams } from 'react-router-dom';
import { FormComponent } from '../../Components/FormComponent';
import { getGameDetails } from '../../Services/gameDetailsAPI';
import { ScreenShotsSlide } from '../../Components/ScreenShotsSlide';
import { ToolBar } from "../../Components/ToolBar";
import { Loading } from '../../Components/Loading';
import { getLocalData } from '../../Services/localStorageAPI.js';
import { Button } from '@material-ui/core'
import { FaGamepad } from 'react-icons/fa'


import parse from 'html-react-parser';

import { Page,
         Content, 
         Image, 
         ContentHeader, 
         TextArea,
         InformationArea, 
         HorizontalLine,
         GameButton } from './GameDetailsStyles';
         
import { Typography } from "../../Components/Typography";



export const GameDetails = () =>{

  const topElement = useRef();
  const handleBacktoTop=()=>{
    topElement.current.scrollIntoView({behavior: "smooth"});
  }
  

  const game = useRef([]);
  const [currentGame, setCurrentGame] = useState([]);

  const gameComments = useRef([]);
  const [comments, setCommentsGame] = useState([]);

  const { idGame } = useParams();
 
  useEffect(()=>{(
    async ()=>{
      const data = await getGameDetails(idGame);      
      game.current = data;
      setCurrentGame(game.current);
      handleBacktoTop();
    })();
  },[]);

  useEffect(()=>{(
    async ()=>{
      const commentsOnData = await getLocalData();
      if(commentsOnData){
        const comments = JSON.parse(commentsOnData);
        const find = comments.find((item) => item.id === idGame);
        setCommentsGame(find);
      }
    })();
  },[idGame]);

  const handleScreenShots =()=>{
    if(currentGame.screenshots){
      return(<ScreenShotsSlide pictures={currentGame.screenshots}/>)
    }
  }

  const handleSystemRequeriments =()=>{
    if(currentGame.minimum_system_requirements){
      return(
        <>
          <TextArea >
            <Typography 
            str={`Minimum System Requirements for ${currentGame.platform}`} 
            fontSize="1.2rem" 
            color="black"
            />
           </TextArea>
          <HorizontalLine />
          <InformationArea>
            <TextArea>
              <Typography str="OS"  fontSize="1rem"/> 
              {currentGame.minimum_system_requirements.os}
            </TextArea>               
            
            <TextArea>
              <Typography str="Processor"  fontSize="1rem"/> 
              {currentGame.minimum_system_requirements.processor}             
            </TextArea>  
            
            <TextArea>
              <Typography str="Memory"  fontSize="1rem"/> 
              {currentGame.minimum_system_requirements.memory}             
            </TextArea>
            
            <TextArea>
              <Typography str="Graphics"  fontSize="1rem"/> 
              {currentGame.minimum_system_requirements.graphics}             
            </TextArea>

            <TextArea>
              <Typography str="Storage"  fontSize="1rem"/> 
              {currentGame.minimum_system_requirements.storage}             
            </TextArea>
            </InformationArea>    
        </>
      )
    }
  }

  const handleContent =()=>{
    if(!currentGame){
      <Loading />
    }else{
      return( 
        <Page ref={topElement}>
          <ToolBar />
          <Content>
            <ContentHeader>
              <Image src={currentGame.thumbnail} alt="loading.."/>
              <Typography str={currentGame.title} fontSize="2.2rem" color="black"/>
            </ContentHeader>

            <TextArea>
              <Typography 
                str={parse(`${currentGame.description}`)} fontSize="1.2rem" color="black"
              />
            </TextArea> 

            <TextArea>
               <Typography str="Aditional Informations " fontSize="1.2rem" color="black"/>
            </TextArea>

            <HorizontalLine />

            <InformationArea>
              <TextArea>
                <Typography str="Genre"  fontSize="1rem"/> 
                {currentGame.genre}
              </TextArea>               
              
              <TextArea>
                <Typography str="Platform"  fontSize="1rem"/> 
                {currentGame.platform}             
              </TextArea>  
              
              <TextArea>
                <Typography str="Developer"  fontSize="1rem"/> 
                {currentGame.developer}             
              </TextArea>
              
              <TextArea>
                <Typography str="Publisher"  fontSize="1rem"/> 
                {currentGame.publisher}             
              </TextArea>

            </InformationArea>

            <HorizontalLine />
          
            <TextArea>
              <Typography str="Screen Shots" fontSize="1.2rem" color="black"/>
            </TextArea>

            {handleScreenShots()}

            {handleSystemRequeriments()}
            <HorizontalLine />
            
            <GameButton>
              <Button 
                type='submit' 
                color='primary' 
                variant="contained"              
                href={currentGame.game_url}
                target="_blank"
                style={{
                  width: "8rem",
                  heigth: "6rem",
                  alignItems: "center",
                  display: "flexbox", 
                  justifyContent: "space-between",              
                  borderRadius: "0.3rem",
                  marginBottom: "0.3rem"}}
                fullWidth>         
                {"PLAY NOW!"}
                <FaGamepad size={35}/>     
              </Button> 
            </GameButton> 
                              
            <FormComponent idGame={idGame}/>
          </Content>
        </Page>
      );
    }
  };

  return(
    handleContent()
  );
}
