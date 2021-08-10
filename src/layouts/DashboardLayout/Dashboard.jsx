import React from "react";
import HomePage from "../../pages/HomePage/HomePage";
import { Route } from "react-router-dom";
import JobAdvertisementAdd from "../AddJobAdvertisementLayout/JobAdvertisementAdd";
import AdvertisementDetailPage from "../../pages/AdvertisementDetailPage/AdvertisementDetailPage";
import RegisterSeekerPage from "../../pages/RegisterSeekerPage/RegisterSeekerPage";
export default function Dashboard() {
  return (
    <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/advertisements" component={HomePage} />
            <Route exact path="/jobadvertisement/add" component={JobAdvertisementAdd} />
            <Route exact path="/advertisement/:id" component={AdvertisementDetailPage} />
            <Route exact path="/employer/home" component={AdvertisementDetailPage} />
            <Route exact path="/register/seeker/" component={RegisterSeekerPage} />
    </div>  
  );
}
