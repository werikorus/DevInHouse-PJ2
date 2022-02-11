import React from 'react';
import { Formik, Field, Form, useFormik, ErrorMessage } from 'formik';
import { Typography } from '../Typography';
import { WriteComentArea, CommentArea } from './FormComponentStyles';
import { TextareaAutosize } from '@mui/base';
import { Button } from '@material-ui/core'
import { setLocalData } from './../../Services/localStorageAPI';
import { initialValues, validationSchema } from './../../helper/helper.js';

import * as yup from 'yup';

export const FormComponent = (props) =>{
  const { idGame } = props;

  const onSubmit = (values, props) => {
    // setLocalData(values);
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000)
  };

  return(
    <WriteComentArea>
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <Typography str="Name:"  fontSize="1rem"/>
            <Field label='Name' name="name"
              placeholder='Enter your name' fullWidth required
              helperText={<ErrorMessage name="name" style={{ color: "red" }}/>}
            />

            <Typography str="e-mail:" fontSize="1rem"/>
            <Field label='e-mail' name="email"
              placeholder='Enter your e-mail' type='email' fullWidth required
              helperText={<ErrorMessage name="email" style={{ color: "red" }}/>}
            />
            
            <Typography str="Leave a comment here:" fontSize="1rem"/>
            <Field 
              as={TextareaAutosize} 
              label='e-mail' 
              name="commentary" 
              type='commentary' 
              fullWidth required
              style={{
                width: "99%", 
                height: 100,
                borderRadius: "0.3rem",
                marginBottom: "0.3rem"}}
              helperText={<ErrorMessage name="commentary" style={{ color: "red" }}/>}
            />  

            <Button 
              type='submit' 
              color='primary' 
              variant="contained"              
              disabled={props.isSubmitting}
              fullWidth>{props.isSubmitting ? "Loading" : "Send your comment"}
            </Button> 
          </Form>
        )}
      </Formik>
    </WriteComentArea>
  );
}
