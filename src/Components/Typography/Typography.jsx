import React from 'react';
import { Text } from './TypographyStyles.js';


export const Typography = (props) => {

  const { str, fontSize, color} = props;

  return(
    <Text fontSize={fontSize} color={color}> {str} </Text>  
  );
};