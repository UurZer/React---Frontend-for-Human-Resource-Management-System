import { Formik,Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import HrmsInput from "../../utilities/customFormControls/HrmsInput";
import { useSelector } from "react-redux";
import {Button} from "semantic-ui-react"
export default function JobAdvertisementAdd() {
  const { addToast } = useToasts();

  const {cities,errorCities, pendingCities } =useSelector((state)=> state.getAllCities)
  const {jobTitles,errorjobTitles, pendingjobTitles } =useSelector((state)=> state.getAlljobTitles)

  const initialValues = {
    applicationDeadline: "",
    city: "",
    jobTitle: "",
    jobDescription: "",
    salaryScale: "",
    numberOfOpenPositions: 1,
    wayOfWorking: "",
    workingTime: "",
    isVerified: false,
  };
  const schema = Yup.object({
    city: Yup.string().required("Lütfen Şehir Seçiniz"),
    jobTitle: Yup.string().required("Lütfen Pozisyon Seçiniz"),
    wayOfWorking: Yup.string().required("Lütfen İş Türü Seçiniz"),
    workingTime: Yup.string().required("Lütfen İş Türü Seçiniz"),
    jobDescription: Yup.string().required("Lütfen Açıklama Giriniz"),
    numberOfOpenPositions: Yup.number().required(
      "Lütfen Pozisyon Sayısını Giriniz"
    ),
    salaryScale: Yup.number().required("Lütfen Pozisyon Sayısını Giriniz"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        schema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          let jobAdvertisementService = new JobAdvertisementService();
          values.city = JSON.parse(values.city);

          jobAdvertisementService.addJobAdvertisements(values).then((result) => {
            addToast(result.data.message, {
              appearance: result.data.success ? "success" : "error",
              autoDismiss: true,
            });
          });
        }}
        handleChange={(change) => console.log(change)}
      >
        {({ handleSubmit, dirty, isSubmitting }) => (
          <Form className="ui form" onSubmit={handleSubmit}>
            <div>
              <HrmsInput
                type="text"
                as="select"
                name="wayOfWorking"
                placeholder="Çalışma Yolu"
              >
                 <option value="" disabled hidden>
                  Seçiniz
                </option>
                <option value="Remote">
                  Uzaktan
                </option>
                <option value="Hybrid" >
                  Hibrit
                </option>
              </HrmsInput>
            </div>

            <div>
              <HrmsInput as="select" name="jobTitle">
                <option value="" disabled hidden>
                  Şehir Seçiniz
                </option>

                {cities.map((city) => (
                  <option
                    key={city.id}
                    value={JSON.stringify(city)}
                  >
                    {city.name}
                  </option>
                ))}
              </HrmsInput>
            </div>

            <div>
              <HrmsInput as="select" name="city">
                <option value="" disabled hidden>
                  Şehir Seçiniz
                </option>

                {cities.map((city) => (
                  <option
                    key={city.id}
                    value={JSON.stringify(city)}
                  >
                    {city.name}
                  </option>
                ))}
              </HrmsInput>
            </div>
            <Button
              type="submit"
              className="btn btn-main mt-3 btn-block text-light"
              disabled={!dirty || isSubmitting}
            >
              Kaydet
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
