import React from 'react';
import { Image, Slide } from './ScreenShotsSlideStyles';
import Carousel from "react-elastic-carousel";
import { ModalImg } from './../ModalImg';import { Item } from "./ItemStyles";


export const ScreenShotsSlide = (props) => {
 
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


const { Pictures } = props;

  const renderPictures = () =>{
    return(
      <Carousel breakPoints={breakPoints} isRTL={false}>
        {Pictures.map((item, key)=>{
         <Item>           
          <ModalImg 
            smallImg={item.image}
            largeImg={item.image}
          />             
         </Item>})}
      </Carousel>
    );
  };

  return(
    <Slide>
      {Pictures.map((item, key)=>{
        <Item>           
          <ModalImg 
            smallImg={item.image}
            largeImg={item.image}
          />             
        </Item>})
      }       
      <br />
    </Slide>
  );
}