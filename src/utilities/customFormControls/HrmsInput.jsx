import { useField, Field } from "formik";
import React from "react";
export default function HrmsInput({ ...props }) {
  const [field, meta] = useField(props); //Props'tan gelen name den çeker
  return (
    <div>
      <Field {...field} {...props}>
        {props.children}
      </Field>
      {meta.touched && !!meta.error ? (
        <small className="d-block text-danger">{meta.error}</small>
      ) : null}
    </div>
  );
}
