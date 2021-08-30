import React from "react";
import Advertisement from "../../layouts/AdvertisementLayout/Advertisement";
import { useSelector } from "react-redux";
import "./HomePage.css";
import HrmsInput from "../../utilities/customFormControls/HrmsInput";
import Filters from "../../layouts/FiltersLayout/Filters";
export default function Home() {
  // const [advertisements, setAdvertisements] = useState([]);
  // useEffect(() => {
  //   let advertisementService = new AdvertisementService();
  //   advertisementService
  //     .getAdvertisementsByPage(1, 6)
  //     // .getAdvertisementsConfirmedByStaff()
  //     .then((result) => setAdvertisements(result.data.data));
  // }, []);

  const { favoriteItems } = useSelector((state) => state.favorites);
  const { pending, error, advertisements } = useSelector(
    (state) => state.advertisements
  );

  return (
    <div>
      <div className="job-listing-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="row">
                <div className="col-12">
                  <div className="small-section-tittle2 mb-45">
                    <div className="ion">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="12px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(27, 207, 107)"
                          d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                        />
                      </svg>
                    </div>
                    <h4>Filter Jobs</h4>
                  </div>
                </div>
              </div>
              <Filters/>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-8">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="count-job mb-35">
                      <span>39, 782 Jobs found</span>
                      <div class="select-job-items">
                        <span>Sort by</span>
                        <select name="select">
                          <option value="">En Yeni</option>
                          <option value="">job list</option>
                          <option value="">job list</option>
                          <option value="">job list</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {advertisements.map((advertisement) => (
                  <Advertisement
                    key={advertisement.id}
                    advertisement={advertisement}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
