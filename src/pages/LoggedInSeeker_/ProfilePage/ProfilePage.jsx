import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
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

  const printStars = (star) => {
    const row = [];
    for (var i = 0; i < 5; i++) {
      if (i >= star) {
        row.push(
          <span class="field-star">
            <i class="far fa-star"></i>
          </span>
        );
      } else {
        row.push(
          <span class="field-star">
            <i class="fas fa-star"></i>
          </span>
        );
      }
    }

    return row;
  };

  return (
    <div class="profile-detail">
      <div class="container">
        <div class="col-md-12">
          <div class="row">
            <div class="basic-information">
              <div class="col-md-3 col-sm-3">
                <img
                  src={resumePhoto?.photoUrl}
                  alt=""
                  class="img-responsive"
                />
              </div>
              <div class="col-md-9 col-sm-9">
                <div class="profile-content">
                  <h2>
                    {jobSeeker?.firstName}
                    {jobSeeker?.lastName} <span>Junior Developer</span>
                  </h2>
                  <p>Soft Techi Infoteck Pvt.</p>
                  <ul class="information">
                    <li>
                      <span>Name:</span>
                      {jobSeeker?.firstName} {jobSeeker?.lastName}
                    </li>
                    <li>
                      <span>Email:</span>
                      {jobSeeker?.email}
                    </li>
                    <li>
                      <span>Mobile:</span>+91 548 576 8579
                    </li>
                    <li>
                      <span>Company:</span>Tester You
                    </li>
                    <li>
                      <span>Date of Birth:</span>
                      {jobSeeker?.dateOfBirth}
                    </li>
                  </ul>
                </div>
              </div>
              <ul class="social">
                {socialMedia?.map((media) => (
                  <li>
                    <a href={media.mediaAdress} class={media.mediaName}>
                      <i class={"fab fa-" + media.mediaName}></i>
                      {media.mediaName}
                    </a>
                  </li>
                ))}
              </ul>

              <div class="panel panel-default">
                <div class="panel-heading">
                  <i class="fa fa-user fa-fw"></i> About Me
                </div>
                <div class="panel-body">
                  <p>{coverLetter?.letterContent}</p>
                </div>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">
                  <i class="fa fa-leaf fa-fw"></i> Work Experience:
                </div>
                <div class="panel-body">
                  <div className="resume-edit job-experience view">
                    {workExperiences?.map((experience) => (
                      <div className="row box">
                        <div className="experience-logo">
                          <figure className="firm-logo">
                            <img
                              src="https://aday-asset.mncdn.com/img/firma-logosuz.png"
                              alt="img"
                            />
                          </figure>
                          <span class="experience">
                            <strong>2 Ay</strong>
                          </span>
                        </div>

                        <div className="experience-info">
                          <div className="row">
                            <div className="fields col-12 position">
                              <span class="field-name">Pozisyon</span>
                              <span class="field-content">
                                <strong>{experience?.jobTitle}</strong>
                              </span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="fields col-3 ">
                              <span class="field-name">Firma Adı</span>
                              <span class="field-content">
                                {experience?.companyName}
                              </span>
                            </div>

                            <div className="fields col-3 ">
                              <span class="field-name">Şehir</span>
                              <span class="field-content">İstanbul</span>
                            </div>

                            <div className="fields col-6 ">
                              <span class="field-name">Firma Sektörü</span>
                              <span class="field-content">
                                Bilişim Teknolojileri
                              </span>
                            </div>
                          </div>

                          <div className="row">
                            <div class="fields col-3">
                              <span class="field-name">Başlangıç Tarihi</span>{" "}
                              <span class="field-content date">
                                <span>{experience?.startingDate}</span>
                              </span>
                            </div>
                            <div class="fields col-3 date">
                              <span class="field-name">Bitiş Tarihi</span>{" "}
                              {experience?.status == null ? (
                                <span class="field-content">
                                  {experience?.endDate}
                                </span>
                              ) : (
                                [
                                  <span class="field-content">
                                    {experience?.status}
                                  </span>,
                                ]
                              )}
                            </div>
                          </div>

                          <div className="row">
                            <div class="fields col-12">
                              <span class="field-name">İş Tanımı</span>
                              <span class="field-content rich-text">
                                Rehber Öğretmenlik
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">
                  <i class="fa fa-leaf fa-fw"></i> Education Informations:
                </div>
                <div class="panel-body">
                  <div className="education-information view">
                    {educationInformations?.map((education) => (
                      <div className="row box">
                        <div className="education-logo">
                          <figure className="firm-logo">
                            {education?.university?.universityName ==
                            "Düzce Üniversitesi" ? (
                              <img
                                src="https://img-kariyer.mncdn.com/UniversiteLogolar/duzce-uni.png"
                                alt="img"
                              />
                            ) : (
                              [
                                <img
                                  src="https://img-kariyer.mncdn.com/UniversiteLogolar/istanbul-universitesi.png"
                                  alt="img"
                                />,
                              ]
                            )}
                          </figure>
                        </div>

                        <div className="education-info">
                          <div className="row">
                            <div class="fields col-3">
                              <span class="field-name">Universite</span>
                              <span class="field-content rich-text">
                                {education?.university?.universityName}
                              </span>
                            </div>

                            <div class="fields col-3">
                              <span class="field-name">Fakülte</span>
                              <span class="field-content rich-text">
                                {
                                  education?.universityDepartment?.faculty
                                    ?.facultyName
                                }
                              </span>
                            </div>

                            <div class="fields col-3">
                              <span class="field-name">Bölüm</span>
                              <span class="field-content rich-text">
                                {
                                  education?.universityDepartment
                                    ?.departmentName
                                }
                              </span>
                            </div>
                          </div>
                          <div className="row">
                            <div class="fields col-3">
                              <span class="field-name">Başlangıç</span>
                              <span class="field-content rich-text">
                                {education?.startingDate}
                              </span>
                            </div>

                            <div class="fields col-3">
                              <span class="field-name">Bitiş</span>
                              {education?.endDate == null ? (
                                <span class="field-content rich-text">
                                  Devam Ediyor
                                </span>
                              ) : (
                                [
                                  <span class="field-content rich-text">
                                    {education?.endDate}
                                  </span>,
                                ]
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div class="fields col-3">
                              <span class="field-name">Öğrenim Tipi</span>
                              <span class="field-content rich-text">
                                Örgün Öğretim
                              </span>
                            </div>

                            <div class="fields col-3">
                              <span class="field-name">Öğretim Dili</span>
                              <span class="field-content rich-text">
                                Türkçe
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">
                  <i class="fa fa-leaf fa-fw"></i> Foreign Language:
                </div>
                <div class="panel-body">
                  <div className="foreign-language view">
                    {foreignLanguage?.map((language) => (
                      <div className="row box">
                        <div className="language-logo"></div>
                        <div className="language-info">
                          <div className="row">
                            <div className="fields col-6">
                              <span class="field-title">Dil</span>
                            </div>
                            <div className="fields col-6">
                              <span class="field-title">Seviye</span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="fields col-6">
                              <span class="field-name">
                                {language.languageName}
                              </span>
                              <span class="field-content">Orta</span>
                            </div>
                            <div className="fields col-6">
                              {printStars(language?.languageLevel)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">
                  <i class="fa fa-cog fa-fw"></i> Skills
                </div>
                <div class="panel-body">
                  <p>
                    The front end is the part that users see and interact with,
                    includes the User Interface, the animations, and usually a
                    bunch of logic to talk to the backend.
                  </p>
				  {programmingSkill?.map((skill)=>(
					  <span class="service-tag">{skill.skillName}</span>
					))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
