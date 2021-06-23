import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import Cities from "./Cities";
import JobTitles from "./JobTitles.jsx";
import { Grid, Button } from "semantic-ui-react";
export default function Dashboard() {
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
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <JobAdvertisementList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
