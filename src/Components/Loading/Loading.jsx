import React from 'react';
import ReactLoading from 'react-loading';
import { Component } from './LoadingStyles';

export const Loading = ()=>{
  return(
    <Component>
      <ReactLoading 
        type={"cylon"} 
        color="white" 
        height={200} 
        width={200}
      />
    </Component>
  );
};
