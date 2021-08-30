import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorite } from "../../store/actions/favoriteActions";
import { AdvertisementDetailPage } from "../../pages/AdvertisementDetailPage/AdvertisementDetailPage";
export default function Advertisement({ advertisement }) {
  let applicationDeadline = new Date(
    advertisement.applicationDeadline
  ).toLocaleDateString();

  const { favoriteItems } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handlAddFavorite = (advertisement) => {
    dispatch(addToFavorite(advertisement));
  };

  const getAdvertisement = (advertisement) => {
    return favoriteItems.find((f) => f.advertisement.id === advertisement.id);
  };

  return (
    <div class="single-job-items mb-30">
      <div class="job-items">
        <div class="company-img">
          <Link to={`/advertisement/${advertisement.id}`}>
            <img src={advertisement.resumePhoto?.photoUrl} alt="" />
          </Link>
        </div>
        <div class="job-tittle job-tittle2">
          <Link to={`/advertisement/${advertisement.id}`}>
            <h4>{advertisement.employer?.companyName}</h4>
          </Link>
          <ul>
            <li>{advertisement.jobTitle?.title}</li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              {advertisement.city?.name}
            </li>
            <li>
              {advertisement.salaryScale?.max}₺ -{" "}
              {advertisement.salaryScale?.min}₺{" "}
            </li>
          </ul>
        </div>
      </div>
      <div class="items-link items-link2 f-right">
      <Link to={`/advertisement/${advertisement.id}`}>{advertisement.jobType?.type}</Link>
        <span>{applicationDeadline}</span>
      </div>
    </div>
  );
}
