//-----------------------------------------clear FormLogin

// const FormLogin = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     const { login, password } = e.target.elements;
//     console.log(login.value, password.value);
//   };

//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <label htmlFor="login">
//         <input type="text" name="login" />
//       </label>
//       <label htmlFor="password">
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormLogin;

//----------------------------FormLogin with Formik----------

import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const FormLogin = () => {
  const initialValues = {
    login: '',
    password: '',
  };

  //  Field заміняємо на  Input
  const Input = styled(Field)`
    color: #2a2a2a;
  `;

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormLogin;
