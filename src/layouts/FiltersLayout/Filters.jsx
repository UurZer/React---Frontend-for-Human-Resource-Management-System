import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Filters.css"
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

    <div>
      <aside className="component--job-filter shadow-sm">
        <form action="">
          <div className="search mb-3">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Kelime İle Ara"
            />
          </div>
          <hr className="mt-0" />
          <h5 className="font-weight-bold primary-color-text">
            <FontAwesomeIcon icon={faFilter} /> İş Türleri
          </h5>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
                <span className="text">Uzaktan</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
                <span className="text">Ofisten</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
                <span className="text">Hibrit</span>
              </label>
            </li>
          </ul>
          <ul className="filter-form">
            <li>
              <label htmlFor="position">Pozisyon</label>
              <select name="position" id="position">
                <option value="" disabled hidden>
                  Posizyon Seçiniz
                </option>
                {jobTitles.map((jobTitle) => (
                  <option key={jobTitle.titleId} value={jobTitle}>
                    {jobTitle.title}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <hr />
          <h5 className="font-weight-bold primary-color-text">
            <FontAwesomeIcon icon={faLocationArrow} /> Konum
          </h5>
          <ul className="filter-form">
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
            <li>
              <button type="submit">
                <FontAwesomeIcon icon={faCheckCircle} /> Uygula
              </button>
            </li>
          </ul>
        </form>
      </aside>
    </div>
  );
}
