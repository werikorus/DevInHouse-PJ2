import * as yup from 'yup';

export const KEY_LOCAL_STORAGE = "comments";

export const initialValues = {
  name: '',
  email: '',
  commentary: ''
}

export const validationSchema = yup.object().shape({
  name: yup
    .string('Enter your name')
    .required('Name is required!'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required!'),
  commentary: yup
    .string('Enter a commenty')
    .max(500, 'Your commentary should have only 500 charactaries!')
    .required('A text is required for the comment !'),
});


export const  GetAtualDate = () =>{
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getUTCMonth()+1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const today = `${day}/${month}/${year} ${hour}:${min}:${sec}`;
  return today;
 };