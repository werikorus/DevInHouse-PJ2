import React from 'react';
import { Button } from './ButtonActionStyles';

export const ButtonAction = (props) =>{
  const { str, heigth, width,  border, fontSize, borderRadius, action } = props;

  return (
    <Button 
      height={heigth}
      width={width}
      border={border}
      fontSize={fontSize}
      borderRadius={borderRadius}
      onClick={action}
    >{str}
    </Button>
  );
};