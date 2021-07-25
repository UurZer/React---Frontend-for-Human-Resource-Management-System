import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { id } = useParams();
  const [jobAdvertisement, setAdvertisement] = useState({});
  useEffect(() => {
    let advertisementService = new JobAdvertisementService();
    advertisementService
      .getById(id)
      .then((result) => setAdvertisement(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card max-width>
          <Card.Content>
            <div class="ui mini right floated">
              {jobAdvertisement.applicationDeadline}
            </div>
            <Card.Header>{jobAdvertisement?.jobTitle?.title}</Card.Header>
            <div>{jobAdvertisement?.city?.name}</div>
            <br></br>
            <Card.Description>
              {jobAdvertisement.jobDescription}
            </Card.Description>
            <Card.Meta>{jobAdvertisement?.employer?.companyName}</Card.Meta>
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
      </Card.Group>
    </div>
  );
}
