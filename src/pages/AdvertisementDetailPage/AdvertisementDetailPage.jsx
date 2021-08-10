import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AdvertisementDetailBox from "../../layouts/AdvertisementDetailLayout/AdvertisementDetailBox";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import Preloader from "../../utilities/preLoaderUtil/PreLoader";

export default function AdvertisementDetailPage() {
  let { id } = useParams();

  const [advertisement, setAdvertisement] = useState({});

  useEffect(() => {
    let advertisementService = new JobAdvertisementService();

    advertisementService.getById(id).then((result) => {
      setAdvertisement(result.data.data);
      
    });
  }, []);

  return <div>
      {Object.keys(advertisement).length>0 ?
      (<AdvertisementDetailBox advertisement={advertisement} />
        ):(
            <Preloader className="my-5"/>
        )
      }
  </div>;
}
