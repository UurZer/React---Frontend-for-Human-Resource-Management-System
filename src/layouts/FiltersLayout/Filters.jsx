import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Filters.css";
import {
  faCheckCircle,
  faFilter,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector } from "react-redux";

export default function Filters() {
  const { cities, error, pending } = useSelector((state) => state.getAllCities);
  const { jobTitles, errorjobTitles, pendingjobTitles } = useSelector(
    (state) => state.getAlljobTitles
  );
  return (
    <div className="job-category-listing mb-50">
      <div className="single-listing">
        <div className="small-section-tittle2">
          <h4>Job Category</h4>
        </div>
        <div className="select-job-items2">
          <select name="select">
          <span>xasdasdas</span>
            {jobTitles.map((title)=>(
               <option key={title.titleId} value={title?.title}>{title?.title}</option>
            ))}
          </select>
        </div>
        <div className="select-Categories pt-80 pb-50">
          <div className="small-section-tittle2">
            <h4>Job Type</h4>
          </div>
          <label className="container">
            Full Time
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Part Time
            <input type="checkbox" checked="checked active" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Remote
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Freelance
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="single-listing">
        <div className="small-section-tittle2">
          <h4>
            <FontAwesomeIcon icon={faLocationArrow} /> Konum
          </h4>
        </div>
        <div className="select-job-items2">
          <li>
            <label htmlFor="country">Ülke/Şehir</label>
            <select name="country" id="country">
              <option value="">Türkiye</option>
            </select>
          </li>
          <li>
            <label htmlFor="city">Şehir</label>
            <select name="city" id="city">
              {cities.map((city) => (
                <option key={city.id} value={city}>
                  {city.name}
                </option>
              ))}
            </select>
          </li>
        </div>
        <div className="select-Categories pt-50 pb-50">
          <div className="small-section-tittle2">
            <h4>Experience</h4>
          </div>
          <label className="container">
            1-2 Years
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            2-3 Years
            <input type="checkbox" checked="checked active" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            3-6 Years
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            6-more..
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="single-listing">
        <div className="select-Categories pb-50">
          <div className="small-section-tittle2">
            <h4>Posted Within</h4>
          </div>
          <label className="container">
            Any
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Today
            <input type="checkbox" checked="checked active" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Last 2 days
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Last 3 days
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Last 5 days
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Last 10 days
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="single-listing">
        <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
          <div className="small-section-tittle2">
            <h4>Filter Jobs</h4>
          </div>
          <div className="widgets_inner">
            <div className="range_item">
              <input type="text" className="js-range-slider" value="50" />
              <div className="d-flex align-items-center">
                <div className="price_text">
                  <p>Price :</p>
                </div>
                <div className="price_value d-flex justify-content-center">
                  <input
                    type="text"
                    className="js-input-from"
                    id="amount"
                    readonly
                  />
                  <span>to</span>
                  <input
                    type="text"
                    className="js-input-to"
                    id="amount"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="submitBtn">
          <button type="submit">
            Uygula
          </button>
        </div>
      </div>
    </div>
  );
}
