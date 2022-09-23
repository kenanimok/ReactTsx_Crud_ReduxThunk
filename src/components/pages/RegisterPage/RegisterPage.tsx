import React, { ReactElement } from "react";
import { useState } from "react";
import { Formik } from "formik";
interface Props {}

export default function RegisterPage({}: Props): ReactElement {
  const showForm = () => {};
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <>
      {/* <Formik initialValues={}> 

      </Formik> */}
      <form
        onSubmit={(e: React.FormEvent<Element>) => {
          e.preventDefault();
        }}
      >
        username:{" "}
        <input
          type="text"
          name="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        password{" "}
        <input
          type="password"
          name="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <span>Debug: {JSON.stringify(user)}</span>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
