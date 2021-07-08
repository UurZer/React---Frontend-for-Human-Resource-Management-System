import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";
import JobAdvertisementAdd from "../pages/JobAdvertisement/JobAdvertisementAdd";

import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
          <Route exact path= "/" component={JobAdvertisementList}/>
          <Route exact path="/JobAdvertisementList" component={JobAdvertisementList}/>
          <Route path="/JobAdvertisementAdd" component={JobAdvertisementAdd}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
