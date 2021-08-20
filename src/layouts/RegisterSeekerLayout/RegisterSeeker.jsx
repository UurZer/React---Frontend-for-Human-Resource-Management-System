import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import * as Yup from "yup";
import UserService from "../../services/userService";

import HrmsInput from "../../utilities/customFormControls/HrmsInput";
export default function RegisterSeeker() {
  const { addToast } = useToasts();

  const initialValues = {
    firstName: "",
    lastName: "",
    identityNumber: "",
    email: "",
    dateOfBirth: "",
    password: "",
  };
  const schema = Yup.object({
    dateOfBirth: Yup.date().required("Lütfen Doğum Tarihinizi Giriniz."),
    email: Yup.string()
      .email("Lütfen Geçerli Bir E-Mail Alanı Giriniz.")
      .required("Lütfen E-Mail Adresinizi Giriniz."),
    identityNumber: Yup.string().required(
      "Lütfen TC Kimlik Numaranızı Giriniz."
    ),
    firstName: Yup.string().required("Lütfen Adınızı Giriniz."),
    lastName: Yup.string().required("Lütfen Soyadınızı Giriniz"),
    password: Yup.string().required("Lütfen Bir Şifre Belirleyiniz."),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          let userService = new UserService();
          userService.registerUser(values).then((result) => {
            addToast(result.data.message, {
              appearance: result.data.success ? "success" : "error",
              autoDismiss: true,
            })
          });
        }}
        handleChange={(change) => console.log(change)}
      >
        {({ handleSubmit, dirty, isSubmitting }) => (
          <form className="register-form p-4" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <HrmsInput as="input" placeholder="Ad" name="firstName" />
            </div>
            <div className="col-md-4">
              <HrmsInput as="input" placeholder="Soyad" name="lastName" />
            </div>
            <div className="col-md-4">
              <HrmsInput as="input" placeholder="T.C." name="identityNumber" />
            </div>
            <div className="col-md-4">
              <HrmsInput as="input" placeholder="E-Posta" name="email" />
            </div>
            <div className="col-md-4">
              <HrmsInput as="input" placeholder="Şifre" name="password" />
            </div>
            <div className="col-md-4">
              <HrmsInput
                as="input"
                placeholder="Doğum Tarihi"
                name="dateOfBirth"
              />
            </div>
            <button
              type="submit"
              disabled={!dirty || isSubmitting}
              className="btn btn-main mt-3 btn-block text-light bg-primary"
            >
              <FontAwesomeIcon icon={faCheckCircle} /> Kaydet
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
