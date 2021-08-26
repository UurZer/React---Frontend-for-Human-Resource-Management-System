import React, { useEffect, useState } from "react";

import JobSeekerService from "../../../services/jobSeekerService";
import WorkExperienceService from "../../../services/workExperienceService";
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
  let resume = getSeekerDto.resume;
  let coverLetter = resume?.coverLetter;
  let workExperiences = resume?.workExperience;
  let educationInformations = resume?.educationInformation;
  let resumePhoto = resume?.resumePhoto;
  let foreignLanguage = resume?.foreignLanguage;
  let socialMedia = resume?.socialMedia;
  let programmingSkill = resume?.programmingSkill;
  
  return (
    <div className="card-footer py-1 bg-light">
      <div className="d-flex primary-color-text flex-wrap justify-content-between">
        {console.log(jobSeeker?.lastName)}
        {console.log(coverLetter?.letterContent)}

        {workExperiences?.map((experience) => (
          <li key={experience.experienceId}>
            {console.log(experience?.companyName)}
          </li>
        ))}

        {educationInformations?.map((education) => (
          <li key={education.educationInformationId}>
            {console.log(education?.university?.city?.name)}
          </li>
        ))}

        {foreignLanguage?.map((language) => (
          <li key={language.languageId}>
            {console.log(language?.languageName)}
          </li>
        ))}

        {socialMedia?.map((media) => (
          <li key={media.mediaId}>
            {console.log(media?.mediaAdress)}
          </li>
        ))}
        {programmingSkill?.map((skill) => (
          <li key={skill.skillId}>
            {console.log(skill?.skillName)}
          </li>
        ))}

        <img
          src={resumePhoto?.photoUrl}
          alt="profilePicture"
          className="img-thumbnail"
        ></img>
      </div>
    </div>
  );
}
