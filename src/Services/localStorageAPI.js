import { KEY_LOCAL_STORAGE } from './../helper/helper.js'  ;

export const setLocalData = (data) =>{
  try{
    const Comments = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))||[];
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(Comments));
  }catch(error){
    console.log(error);
  }
};

export const getLocalData = (idGame) => {
  const Comments = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))||[];
  
  const gameComment = Comments.find(item => item.id = idGame);

  return gameComment;
}