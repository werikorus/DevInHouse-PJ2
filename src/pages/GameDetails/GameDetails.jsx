import React, { useEffect, useState, useRef }  from "react";
import { useParams } from 'react-router-dom';
import { FormComponent } from '../../Components/FormComponent';
import { getGameDetails } from '../../Services/gameDetailsAPI';
import { ScreenShotsSlide } from '../../Components/ScreenShotsSlide';
import { ToolBar } from "../../Components/ToolBar";
import { Loading } from '../../Components/Loading';

import parse from 'html-react-parser';

import { 
         Page,
         Content, 
         Image, 
         ContentHeader, 
         TextArea, 
         ContentFooter,
         ComemntsArea,
         Commentary,
         HorizontalLine} from './GameDetailsStyles';
         
import { Typography } from "../../Components/Typography";


export const GameDetails = () =>{
  const game = useRef([]);
  const [currentGame, setCurrentGame] = useState([]);

  const { idGame } = useParams();

  const commentsStorage = JSON.parse(localStorage.getItem('comments'))||[];

  useEffect(()=>{(
    async ()=>{
      const data = await getGameDetails(idGame);      
      game.current = data;
      setCurrentGame(game.current);
    })();
  },[]);

  const handleScreenShots =()=>{
    if(currentGame.screenshots){
      return(<ScreenShotsSlide pictures={currentGame.screenshots}/>)
    }
  }

  const handleContent =()=>{
    if(!currentGame){
      <Loading />
    }else{
      return( 
        <Page>
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
            
            <HorizontalLine />
          
            <Typography str="Screen Shots" fontSize="1.2rem" color="black"/>
            {handleScreenShots()}
                  
            <FormComponent />

            <ContentFooter>
              <ComemntsArea>
                {commentsStorage.map((item, key)=>{
                  <Commentary>
                    <Typography src={item.comment} />
                    <Typography src={item.date} />
                  </Commentary>
                })}          
              </ComemntsArea>      
            </ContentFooter>
          </Content>
        </Page>
      );
    }
  };

  return(
    handleContent()
  );
}
