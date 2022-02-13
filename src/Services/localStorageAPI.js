
import { KEY_LOCAL_STORAGE } from '../helper/helper.js'  ;

export const setTwoListLocalData = (listAllCommentsAnotherID, newCommmentsList) =>{
  try{
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(listAllCommentsAnotherID, newCommmentsList));
  }catch(error){
    console.log(error);
  }
};

export const setNewListLocalData = (newCommmentsList) =>{
  try{
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(newCommmentsList));
  }catch(error){
    console.log(error);
  }
};

export const getLocalData = (idGame) => {
  const comments = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))||[];
  if(comments){
    const gameComments = comments.find((item) => item.idGame === idGame);
    return gameComments;
  } 
}