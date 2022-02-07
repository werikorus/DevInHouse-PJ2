import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../Typography';
import { Menus, HorizontalLine, Border } from './ToolBarStyles';

export const ToolBar = () =>{
  return(
    <Menus>

      <Border>
        <Typography 
          str={<Link to="/" className="linkMenu">Games</Link>} 
          color="white"
          fontSize="1.5rem"           
        />
      </Border>
      
      <HorizontalLine />

      <Border>
        <Typography 
          str={<Link to="/latestNews" className="linkMenu">LatestNews</Link>}
          color="white"  
          fontSize="1.5rem"                    
        />
      </Border>
            
      <HorizontalLine />

      <Border>
        <Typography 
          str={<Link to="/about" className="linkMenu">About</Link>} 
          color="white" 
          fontSize="1.5rem"                     
        />
        
      </Border>
    </Menus>
  );
}
