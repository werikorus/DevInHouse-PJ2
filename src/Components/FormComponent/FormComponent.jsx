import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Typography } from '../Typography';
import {  WriteComentArea, 
          ButtonsArea,
          ContentFooter,
          ComemntsArea,
          Commentary, } from './FormComponentStyles';
          
import { TextareaAutosize } from '@mui/base';
import { Button } from '@material-ui/core'
import { setTwoListLocalData, setNewListLocalData } from '../../Services/localStorageAPI.js';

import { KEY_LOCAL_STORAGE } from '../../helper/helper.js'  ;
import { initialValues, validationSchema, GetAtualDate } from './../../helper/helper.js';


export const FormComponent = (props) =>{
  const { idGame } = props;
  const [ commentary, setCommentary ] = useState({});
  const [ gameComments, setGameComments] = useState({});
   
  React.useEffect(() => {
    const commentsOnData = localStorage.getItem(KEY_LOCAL_STORAGE);
    if (commentsOnData) {
      const comments = JSON.parse(commentsOnData);
      const finded = comments.find((item) => item.id === idGame);
      setCommentary(finded);
    }
  }, [idGame]);

  const handleSubmit = (values, { setSubmitting }) => {
    const commentsOnData = localStorage.getItem(KEY_LOCAL_STORAGE);
    
    const commentaryToSave = {
      idGame: idGame,
      idComment:`${idGame}_${Math.random(10000000000)}`,
      ...values,
      likes: 0,
      dislike: 0,
      date: GetAtualDate()
    }; 

    const currentGameComments = commentary?.comments 
      ? [...commentary?.comments]
      : [];
      
    const newCommmentsList = [
      {idGame: idGame,  comments: [...currentGameComments, commentary]}
    ]; 
    
    if(commentsOnData){
      const comments = JSON.parse(commentsOnData);
      const listAllCommentsAnotherID = comments.filter(
        (item) => item.id !== idGame,
      );

      console.log(newCommmentsList);

      setTwoListLocalData(listAllCommentsAnotherID, newCommmentsList);
    } else {
      setNewListLocalData(newCommmentsList);
    }
    
    setGameComments(newCommmentsList);
    setSubmitting(false);
  };

  
  return(
    <WriteComentArea>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit} 
        validateOnMount
      >
        {({ isValid, isSubmitting, resetForm }) => (
          <Form>
            <Typography str="Name:"  fontSize="1rem"/>
            <Field 
              name="name"
              placeholder='Enter your name'
              style={{width: "13rem"}}
            />
            <ErrorMessage 
              name="name" 
              style={{color: "red", fontSize: "15px" }}
              component="span"
            />            

            <Typography str="e-mail:" fontSize="1rem"/>
            <Field               
              name="email"
              placeholder='Enter your e-mail' 
              type='email'
              style={{width: "13rem"}}               
            />
            <ErrorMessage 
              name="email" 
              style={{ color: "red", fontSize: "15px" }}
              component="span"
            />
            
            <Typography str="Leave a comment here:" fontSize="1rem"/>
            <Field 
              as={TextareaAutosize} 
              name="commentary" 
              type="commentary"               
              style={{
                width: "99%", 
                height: 100,
                borderRadius: "0.3rem",
                marginBottom: "0.3rem"}}              
            />
            <ErrorMessage 
              name="commentary" 
              style={{ color: "red", fontSize: "15px" }}
              component="span"
            /> 

          <ButtonsArea>
            <Button 
              type='submit' 
              color='primary' 
              variant="contained"              
              // disabled={isSubmitting || !isValid}
              style={{
                width: "5rem",
                heigth: "6rem",
                alignItems: "center"}}
              fullWidth>{"Send"}
            </Button> 
            <Button 
              type='submit' 
              color='primary' 
              variant="contained"              
              onClick={resetForm}
              disabled={isSubmitting || !isValid}
              style={{
                width: "5rem",
                heigth: "6rem",
                alignItems: "center"}}
              fullWidth>{"Clear"}
            </Button> 
          </ButtonsArea>
          </Form>
        )}
      </Formik>
      <ContentFooter>
        <ComemntsArea>
          {gameComments?.comments?.map((item)=>(
            <Commentary>
              <Typography src={item.name} />
              <Typography src={item.commentary} />
              <Typography src={item.date} />
            </Commentary>
          ))}
        </ComemntsArea>      
      </ContentFooter>
    </WriteComentArea> 
  );
}

// disabled={isSubmitting || !isValid}