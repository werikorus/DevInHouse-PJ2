import React from 'react';
import { Input } from './InputAreaStyles.js';

export const InputArea =(props)=>{
  const { placeholder, onChange } = props;
  
  return(
    <Input 
      type="text" 
      placeholder={placeholder}
      onChange={onChange}

    /> 
  );
}