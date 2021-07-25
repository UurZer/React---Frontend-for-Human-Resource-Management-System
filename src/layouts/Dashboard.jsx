import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";
import JobAdvertisementAdd from "../pages/JobAdvertisement/JobAdvertisementAdd";
import Home from "../pages/employerPages/Home";
import JobAdvertisementDetail from "../pages/JobAdvertisement/JobAdvertisementDetail";

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
          <Route path="/Home" component={Home}/>
          <Route path="/JobAdvertisement/:id" component={JobAdvertisementDetail}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
