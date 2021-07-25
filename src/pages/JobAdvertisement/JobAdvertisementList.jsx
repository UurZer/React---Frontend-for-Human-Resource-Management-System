import React, { useState, useEffect } from "react";
import Cities from "../../layouts/Cities";
import JobTitles from "../../layouts/JobTitles.jsx";
import { Grid, Card, Image, Button } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Link } from "react-router-dom";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getVerifiedJobAdvertisements()
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
          <Grid.Column width={16}>
            <Card.Group>
              {jobAdvertisements.map((jobAdvertisement) => (
                <Card>
                  <Link to={`/JobAdvertisement/${jobAdvertisement.id}`}>
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
                  </Link>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
