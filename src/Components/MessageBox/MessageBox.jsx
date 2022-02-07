import React from  'react';

import { MessageContent } from './MessageBoxStyles';

export const MessageBox = (prop)=>{
  const { message } = prop;

  return(
    <MessageContent>
      {message}
    </MessageContent>
  );
};
