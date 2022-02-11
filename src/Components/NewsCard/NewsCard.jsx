import React from "react";
import { Link } from 'react-router-dom';
import { CardArea, Image,  TextArea } from './NewsCardStyles'
import { Typography } from './../Typography';

export const NewsCard = (props) =>{   
  const {image, title, shortDescription, urlNews } = props;

  return (
    <CardArea>        
      <Image src={image} alt="loading.."/>

      <TextArea>
        <Typography str={title} fontSize="1.2rem" color="black"/>
        <Typography str={shortDescription} fontSize="0.8rem" color="black"/>

        <a id="link" href={urlNews}>
          read more...
        </a>

      </TextArea>

    </CardArea>
  );
}
