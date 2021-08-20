import React, { useEffect, useState } from "react";

import JobSeekerService from "../../../services/jobSeekerService";
import WorkExperienceService from  "../../../services/workExperienceService";
export default function ProfilePage() {
  let id = 1;
  const [getSeekerDto, setSeekerDto] = useState({});

  useEffect(() => {
    let seekerService = new JobSeekerService();
    seekerService
      .getJobSeekerDto(id)
      .then((result) => setSeekerDto(result.data.data));
  }, []);

  let jobSeeker = getSeekerDto.jobSeeker;
  let resume = getSeekerDto.resumes;

  return (
    <div className="card-footer py-1 bg-light">
        <div className="d-flex primary-color-text flex-wrap justify-content-between">
            {console.log(jobSeeker?.lastName)}
            {console.log(resume?.coverLetter.letterContent)}

        </div>
    </div>
  );
}
