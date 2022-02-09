import React from 'react';
import { Item } from './ScreenShotsSlideStyles';
import Carousel from "react-elastic-carousel";
import { ModalImg } from './../ModalImg';

export const ScreenShotsSlide = (props) => {
 
  const { pictures } = props;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return(
    <Carousel 
      breakPoints={breakPoints} 
      isRTL={false} 
      pagination={true} 
      showArrows={false} 
      // itemPadding={[0,230,0,230]}
      >
   
   
      {pictures.map(item =>(
        <Item>           
          <ModalImg 
            smallImg={item.image}
            largeImg={item.image}
          />             
        </Item>))}
    </Carousel>
  );
}