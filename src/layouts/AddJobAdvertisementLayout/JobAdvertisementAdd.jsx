import { useToasts } from "react-toast-notifications";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { useSelector } from "react-redux";
import HrmsInput from "../../utilities/customFormControls/HrmsInput";



export default function JobAdvertisementAdd() {
  const { addToast } = useToasts();

  const { cities, errorCities, pendingCities } = useSelector(
    (state) => state.getAllCities
  );
  const { jobTitles, errorjobTitles, pendingjobTitles } = useSelector(
    (state) => state.getAlljobTitles
  );
  const { salaryScales, errorSalaryScales, pendingSalaryScales } = useSelector(
    (state) => state.getAllSalaryScales
  );

  const initialValues = {
    applicationDeadline: new Date(),
    employer: {
      employerId: 1,
      companyName: "Ozer",
      webSite: "https://www.pemavor.com",
      email: "mehmet@pemavor.com",
      phoneNumber: "58383893",
      password: "1234",
    },
    city: "",
    jobTitle: "",
    jobDescription: "",
    salaryScale: "",
    numberOfOpenPositions: 1,
    wayOfWorking: "",
    workingTime: "Tam Zamanlı",

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
    salaryScale: Yup.string().required("Lütfen Pozisyon Sayısını Giriniz"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          let advertisementService = new JobAdvertisementService();
          values.city = JSON.parse(values.city);
          values.jobTitle = JSON.parse(values.jobTitle);
          values.salaryScale = JSON.parse(values.salaryScale);
          advertisementService.addJobAdvertisements(values).then((result) => {
            addToast(result.data.message, {
              appearance: result.data.success ? "success" : "error",
              autoDismiss: true,
            });
          });
        }}
        handleChange={(change) => console.log(change)}
      >
        {({ handleSubmit, dirty, isSubmitting }) => (
          <form
            className="add-job-advertisement-form p-4"
            onSubmit={handleSubmit}
          >
            <h5 className="font-weight-bold text-center">İlan Oluştur</h5>
            <small className="d-block text-center text-muted">
              İlan Oluştur, Aradığın Liyakate Ulaş...
            </small>
            <hr />
            <div className="row mb-2">
              <div className="col-md-4">
                <HrmsInput as="select" name="city">
                  <option value="" disabled hidden>
                    Şehir Seçiniz
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={JSON.stringify(city)}>
                      {city.name}
                      
                    </option>
                  ))}
                </HrmsInput>
              </div>
              <div className="col-md-4">
                <HrmsInput as="select" name="jobTitle">
                  <option value="" disabled hidden>
                    Pozisyon Seçiniz
                  </option>
                  {jobTitles.map((jobTitle) => (
                    <option key={jobTitle.id} value={JSON.stringify(jobTitle)}>
                      {jobTitle.title}
                    </option>
                  ))}
                </HrmsInput>
              </div>
              <div className="col-md-4">
                <HrmsInput as="select" name="wayOfWorking">
                  <option value="" disabled hidden>
                    İş Türü Seçiniz
                  </option>
                  <option value="Uzaktan">Uzaktan</option>
                  <option value="Ofisten">Ofisten</option>
                  <option value="Hibrit">Hibrit</option>
                </HrmsInput>
              </div>
            </div>
            <HrmsInput
              as="textarea"
              rows="4"
              label="Açıklama;"
              name="jobDescription"
              placeholder="Açıklama"
            />
            <div className="row">
              <div className="col-md-4">
                <HrmsInput
                  as="input"
                  label="Açık Pozisyon Adedi;"
                  name="numberOfOpenPositions"
                />
              </div>
              <div className="col-md-4">
                <HrmsInput as="select" name="salaryScale">
                  <option value="" disabled hidden>
                    Ücret Aralığı Seçiniz
                  </option>
                  {salaryScales.map((salaryScale) => (
                    <option
                      key={salaryScale.scaleId}
                      value={JSON.stringify(salaryScale)}
                    >
                      {salaryScale.min} - {salaryScale.max}
                    </option>
                  ))}
                </HrmsInput>
              </div>
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
