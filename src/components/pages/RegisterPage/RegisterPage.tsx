import React, { ReactElement } from "react";
import { useState } from "react";
import { Formik, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const navigate = useNavigate();

  const showForm = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<any>) => {
    return (
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={values.username}
        />
        <br />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
        <br />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button onClick={() => navigate(-1)}>Back</button>
      </form>
    );
  };

  return (
    <>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));

          setTimeout(() => {
            setSubmitting(false);
          }, 2000);
        }}
        initialValues={{ username: "lek", password: "xxxx" }}
      >
        {(props) => showForm(props)}
      </Formik>
    </>
  );
};
export default RegisterPage;
