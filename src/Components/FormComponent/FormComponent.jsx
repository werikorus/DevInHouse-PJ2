import React from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import { Typography } from '../Typography';
import { ButtonAction } from "../ButtonAction";
import { WriteComentArea, CommentArea } from './FormComponentStyles';

import * as yup from 'yup';

export const FormComponent = (props) =>{
  const { idGame } = props;
  
  const commentsStorage = JSON.parse(localStorage.getItem('comments'))||[];
  
  const setLocalStorage =(commentary)=>{
    localStorage.setItem('comments', JSON.stringify(commentary));  
  }

  const validationSchema = yup.object({
    password: yup
      .string('Enter your name!')
      .required('Password is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    commentary: yup
      .string('Enter a commenty')
      .min(500, 'Your commentary should have only 500 charactaries!')
      .required('A text is required for the comment'),
  });

  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      commentary: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {      
       setLocalStorage(values);
    },
  });
  
  return(
    <WriteComentArea>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <Typography str="Name:"  fontSize="1rem"/>
          <Field 
            id="name" 
            name="name"
            value={formik.values.name}
          />
        
          <Typography str="e-mail:" fontSize="1rem"/>
          <Field 
            id="email" 
            name="email"
            value={formik.values.email}
            type="email"                              
          />

          <Typography
            str="Leave a comment here:"
            fontSize="1rem"
            />
          <CommentArea 
            id="commentary"
            name="commentary"
          />
        
          <ButtonAction str="Send comment" />              
        </Form>
      </Formik>

    </WriteComentArea>
  );
}
