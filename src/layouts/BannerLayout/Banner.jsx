import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector } from "react-redux";
import PreloaderUtil from "../../utilities/preLoaderUtil/PreLoader";
import { Formik } from "formik";
import * as Yup from "yup";
import HRMSCustomField from "../../utilities/customFormControls/HrmsInput";

import ErrorAlert from "../../utilities/ErrorUtil/ErrorAlert";

export default function Banner() {
  const { cities, error, pending } = useSelector((state) => state.getAllCities);

  const { jobTitles, errorJobTitles, pendingJobTitles } = useSelector(
    (state) => state.getAlljobTitles
  );
  const initialValues = {
    city: {},
    jobTitle: "",
  };
  const schema = Yup.object({
    // city: Yup.string().required("Lütfen Şehir Seçiniz"),
    // position: Yup.string().required("Lütfen Pozisyon Seçiniz"),
    // jobType: Yup.string().required("Lütfen İş Türü Seçiniz"),
    position: Yup.string().required("Lütfen Arama Terimi Giriniz"),
  });
  return (
    <div>
      <section className="banner-section">
        <div className="container border-main shadow-lg text-dark">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              // values.city = JSON.parse(values.city);
              // values.position = JSON.parse(values.position);
              // values.jobType = JSON.parse(values.jobType);
            }}
            handleChange={(change) => console.log(change)}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              setFieldValue,
              dirty,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-xl-5">
                    <HRMSCustomField
                      as="input"
                      value={values.jobTitle}
                      name="jobTitle"
                      placeholder="Pozisyon Ara"
                      className="form-control-sm font-weight-light"
                    />
                    <div className="mb-1 d-block">
                      {pendingJobTitles ? (
                        <PreloaderUtil />
                      ) : errorJobTitles ? (
                        <ErrorAlert error={error} />
                      ) : (
                        jobTitles.slice(0, 3).map((jobTitle) => (
                          <small
                            onClick={() =>
                              setFieldValue("position", jobTitle.title)
                            }
                            className="btn btn-sm btn-light mt-1 border border-none city-badge"
                            key={jobTitle.titleId}
                            value={jobTitle}
                          >
                            <i className="fa fa-desktop" /> {jobTitle.title}
                          </small>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <HRMSCustomField
                      as="select"
                      name="wayOfWorking"
                      className="form-control-sm font-weight-light"
                    >
                      <option value="" disabled hidden>
                        İş Tipi Seçiniz
                      </option>
                      <option value="Uzaktan">Uzaktan</option>
                      <option value="Ofisten">Ofisten</option>
                      <option value="Hibrit">Hibrit</option>
                    </HRMSCustomField>
                  </div>
                  <div className="col-xl-3">
                    <HRMSCustomField
                      as="select"
                      value={("city", values.city)}
                      name="city"
                      className="form-control-sm font-weight-light"
                    >
                      <option value="" disabled hidden>
                        Şehir Seçiniz
                      </option>
                      {cities.map((city) => (
                        <option key={city.id} value={JSON.stringify(city)}>
                          {city.name}
                        </option>
                      ))}
                    </HRMSCustomField>
                    <div className="mb-1">
                      {pending ? (
                        <PreloaderUtil />
                      ) : error ? (
                        <ErrorAlert error={error} />
                      ) : (
                        cities.slice(0, 3).map((city) => (
                          <small
                            onClick={() => {
                              setFieldValue("city", city);
                            }}
                            className="btn btn-sm btn-light mt-1 border border-none city-badge"
                            key={city.id}
                            value={city}
                          >
                            <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                            {city.name}
                          </small>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="col-xl-1 h-100">
                    <button
                      type="submit"
                      className="btn btn-block btn-light font-weight-bold my-auto btn-sm border btn-main shadow"
                    >
                      <FontAwesomeIcon icon={faSearch} /> Ara
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}
