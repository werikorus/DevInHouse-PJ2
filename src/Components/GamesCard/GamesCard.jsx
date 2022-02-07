import React from "react";
import { Link } from 'react-router-dom';
import { Card,  Image,  TextArea } from './GamesCardStyles'
import { Typography } from '../Typography';

export const GamesCard = (props) =>{   
  const { id, image, title, shortDescription } = props;

  const description = (text)=>{    
    if(text.length>35){
      return `${text.substring(0,35)}...`
    }else{
      return text;
    }
  };
 
  return (
    <Card>        
      <Link to={`/GameDetails/${id}`}>
        <Image src={image} alt="loading.."/>
        <TextArea>
          <Typography 
            str={title} 
            fontSize="1.2rem" 
            color="black"
          />

          <Typography 
            str={description(shortDescription)} 
            fontSize="0.8rem" 
            color="rgb(53, 47, 47)"
          />
        </TextArea>
      </Link>
    </Card>
  );
}
