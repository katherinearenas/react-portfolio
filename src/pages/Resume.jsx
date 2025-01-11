import React from "react";
import "./style/resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1>Katherine Arenas</h1>
      <p>Chicago, IL | katherineelainearenas@gmail.com</p>
     

      <section className="resume-section">
        <h2>Skills</h2>
        <p>Fullstack web developer with experience in building responsive, dynamic web applications. Proficient in JavaScript, Node.js, Express, SQL, Sequelize, MongoDb, GraphQL, and React. Passionate about problem-solving and delivering pleasant user experiences.</p>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <ul>
          <li>Certificate in Fullstack Web Development | Northwestern University | Remote | 2024</li>
          <li>Juris Doctorate in Law | University of Illinois Urbana-Champaign College of Law | Champaign, IL | 2017</li>
          <li>Bachelor of Arts in Political Science | University of Illinois Urbana-Champaign | Champaign, IL | 2014</li>
          <li>High School Diploma | Illinois Mathematics and Science Academy | Aurora, IL | 2011</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Freelance Data Migration Assistant</strong> | Remote | 2023-Present
            <ul>
              <li>Streamlined local files and cloud storage.</li>
              <li>Created company bios, about sections, and written resources.</li>
              <li>Enhanced clarity and SEO.</li>
              <li>Provided comprehensive work product with zero complaints.</li>
            </ul>
          </li>
          <li>
            <strong>Front Desk</strong> | Symmetry Physical Therapy | Chicago, IL | April 2023 - August 2023
            <ul>
              <li>Collected insurance information from patients for billing purposes.</li>
              <li>Modernized the front desk for a more productive workspace.</li>
              <li>Managed files and calendars.</li>
            </ul>
          </li>
          <li>
            <strong>Judicial Law Clerk</strong> | Cook County Chancery Court | Chicago, IL | November 2018 - October 2019
            <ul>
              <li>Prepared interns to work under and shadow the Judge.</li>
              <li>Wrote briefs and sections of judicial opinions.</li>
              <li>Maintained judicial files and court calendar.</li>
            </ul>
          </li>
          <li>
            <strong>Associate Attorney</strong> | Barnes & Mitchell | Chicago, IL | February 2018 - September 2018
            <ul>
              <li>Appeared for status calls in Cook County and Will County Court.</li>
              <li>Wrote detailed presentation notes for hearings on insurance coverage issues.</li>
            </ul>
          </li>
          <li>
            <strong>Freelance Editor</strong> | Illinois State Bar Association | Remote | June 2016 - January 2019
            <ul>
              <li>Edited multiple practice guides for attorneys, including a DUI handbook and guide to attorney’s fees.</li>
              <li>Formatted practice guides and summarized cases.</li>
              <li>Maintained detailed spreadsheets and completed additional research.</li>
            </ul>
          </li>
          <li>
            <strong>Research Assistant</strong> | Professor James Cleith Phillips | Remote | June 2015 - November 2015
            <ul>
              <li>Researched law professors' political leanings through open-source data.</li>
              <li>Coded and analyzed data using political science expertise.</li>
              <li>Maintained detailed spreadsheets and completed additional data entry.</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;