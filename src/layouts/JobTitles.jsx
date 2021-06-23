import React, { useState, useEffect } from "react";

import JobTitleService from "../services/jobTitleService";
import { Input } from "semantic-ui-react";
export default function JobTitles() {
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  });
  return (
    <div>
      <Input list="jobTitles" placeholder="Pozisyon seç" />
      <datalist id="jobTitles">
        {jobTitles.map((jobTitle) => (
          <option value={jobTitle.title} >{jobTitle.title}</option>
        ))}
      </datalist>
    </div>
  );
}
