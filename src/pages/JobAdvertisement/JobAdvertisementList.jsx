import React, { useState, useEffect } from "react";
import Cities from "../../layouts/Cities";
import JobTitles from "../../layouts/JobTitles.jsx";
import { Grid, Card, Image, Button } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <div className="search-area">
              <JobTitles />
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="search-area">
              <Cities />
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <div className="search-area">
              <Button primary>Primary</Button>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <Card.Group>
              {jobAdvertisements.map((jobAdvertisement) => (
                <Card>
                  <Card.Content key={jobAdvertisement.id}>
                    <Image
                      float="right"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>{jobAdvertisement.jobTitle.title}</Card.Header>
                    <Card.Meta>
                      {jobAdvertisement.employer.companyName}
                    </Card.Meta>
                    <Card.Description>
                      {jobAdvertisement.jobDescription}{" "}
                      <strong>{jobAdvertisement.applicationDeadline}</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        Approve
                      </Button>
                      <Button basic color="red">
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={10}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
