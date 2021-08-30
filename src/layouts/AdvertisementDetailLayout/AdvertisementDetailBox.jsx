import React from 'react';

export default function AdvertisementDetailBox({advertisement}) {

    return (
 <main>

        <div class="slider-area ">
        <div class="single-slider section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap text-center">
                            <h2>UI/UX Designer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="job-post-company pt-120 pb-120">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-xl-7 col-lg-8">
                        <div class="single-job-items mb-50">
                            <div class="job-items">
                                <div class="company-img company-img-details">
                                    <a href="#"><img src={advertisement.resumePhoto?.photoUrl}alt={advertisement.employers?.companyName}/></a>
                                </div>
                                <div class="job-tittle">
                                    <a href="#">
                                        <h4>{advertisement.jobTitle?.title}</h4>
                                    </a>
                                    <ul>
                                        <li>{advertisement.employers?.companyName}</li>
                                        <li><i class="fas fa-map-marker-alt"></i>{advertisement.city?.name}</li>
                                        <li>
                                        {advertisement.salaryScale?.max}₺ -{" "}
                                        {advertisement.salaryScale?.min}₺{" "}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       
                        <div class="job-post-details">
                            <div class="post-details1 mb-50">
                                <div class="small-section-tittle">
                                    <h4>Job Description</h4>
                                </div>
                                <p>{advertisement.jobDescription}</p>
                            </div>
                            <div class="post-details2  mb-50">
                                <div class="small-section-tittle">
                                    <h4>Required Knowledge, Skills, and Abilities</h4>
                                </div>
                               <ul>
                                   <li>System Software Development</li>
                                   <li>Mobile Applicationin iOS/Android/Tizen or other platform</li>
                                   <li>Research and code , libraries, APIs and frameworks</li>
                                   <li>Strong knowledge on software development life cycle</li>
                                   <li>Strong problem solving and debugging skills</li>
                               </ul>
                            </div>
                            <div class="post-details2  mb-50">
                                <div class="small-section-tittle">
                                    <h4>Education + Experience</h4>
                                </div>
                               <ul>
                                   <li>3 or more years of professional design experience</li>
                                   <li>Direct response email experience</li>
                                   <li>Ecommerce website design experience</li>
                                   <li>Familiarity with mobile and web apps preferred</li>
                                   <li>Experience using Invision a plus</li>
                               </ul>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="post-details3  mb-50">
                           <div class="small-section-tittle">
                               <h4>Job Overview</h4>
                           </div>
                          <ul>
                              <li>Posted date : <span>{advertisement?.createdDate}</span></li>
                              <li>Location : <span>{advertisement?.city?.name}</span></li>
                              <li>Vacancy : <span>02</span></li>
                              <li>Job nature : <span>{advertisement?.jobType?.type}</span></li>
                              <li>Salary :  <span> {advertisement.salaryScale?.max}₺ -{" "}
                                        {advertisement.salaryScale?.min}₺{" "}</span></li>
                              <li>Application date : <span>{advertisement?.createdDate}</span></li>
                          </ul>
                         <div class="apply-btn2">
                            <a href="#" class="btn">Apply Now</a>
                         </div>
                       </div>
                        <div class="post-details4  mb-50">
                           <div class="small-section-tittle">
                               <h4>Company Information</h4>
                           </div>
                              <span>{advertisement?.employer?.companyName}</span>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <ul>
                                <li>Name: <span>{advertisement?.employer?.companyName}</span></li>
                                <li>Web : <span> {advertisement?.employer?.website}</span></li>
                                <li>Email: <span>{advertisement?.employer?.email}</span></li>
                            </ul>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
     
    );
  }