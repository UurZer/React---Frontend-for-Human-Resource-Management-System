import React, { useState, useEffect } from "react";
import Cities from "../../layouts/Cities";
import JobTitles from "../../layouts/JobTitles.jsx";
import { Grid, Card, Image, Button, Form, Checkbox } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";
import HrmsInput from "../../utilities/customFormControls/HrmsInput";
export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const { addToast } = useToasts();
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getNotVerifiedJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Card.Group>
              {jobAdvertisements.map((jobAdvertisement) => (
                <Formik
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(values);
                    let jobAdvertisementService = new JobAdvertisementService();
                    values.city = JSON.parse(values.city);
                    values.jobTitle = JSON.parse(values.jobTitle);


                    jobAdvertisementService
                      .addJobAdvertisements(values)
                      .then((result) => {
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
                          value={jobAdvertisement.wayOfWorking}
                        >
                          <option >
                            {jobAdvertisement.wayOfWorking}
                          </option>
                        </HrmsInput>
                      </div>

                      <div>
                        <HrmsInput as="select" name="jobTitle">
                          <option
                            value={jobAdvertisement?.jobTitle?.title}
                          >
                            {jobAdvertisement?.jobTitle?.title}
                          </option>
                        </HrmsInput>
                      </div>

                      <div>
                        <HrmsInput as="select" name="city">
                          <option
                            value={jobAdvertisement?.city?.name}
 
                          >
                            {jobAdvertisement?.city?.name}
                          </option>
                        </HrmsInput>
                      </div>
                      <div>
                        <HrmsInput
                          as="textarea"
                          label="Açıklama;"
                          name="jobDescription"
                          value={jobAdvertisement.jobDescription}
                        >
                          {jobAdvertisement.jobDescription}
                        </HrmsInput>
                      </div>
                      <Button
                        type="submit"
                        className="btn btn-main mt-3 btn-block text-light"
                      >
                        Doğrula
                      </Button>
                    </Form>
                  )}
                </Formik>
              ))}
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={10}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
