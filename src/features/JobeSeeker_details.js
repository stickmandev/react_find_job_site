import "./JobeSeeker_details.css"
import React, {useEffect, useState} from 'react'
import { JobSeeker } from './defualt_Layouts/slices/navSlice'
import { useSelector, useDispatch } from 'react-redux'
// import { NavLink } from "react-router-dom";

function JobeSeeker_details(stream_length) {
  const dispatch = useDispatch()

  useEffect(
    () => {
        dispatch(JobSeeker())
    },[]
  )

  return (
    <>
      <section id="section">
        <div id="leftSlide_overlay" >
          <p>
            <button  onClick={() => {
              const box = document.getElementById('leftSlide_overlay')
              const box2 = document.getElementById('section')
              box2.style.width = '0vw'
              box.style.width = '0vw  '
            }}>Back</button>
          </p>
          <h1>About The Role</h1>
          <div id="card">
            <p>
              We are a Web Services company specializing in offering agency level services to the small and medium size business community.
              Our exceptional team consist of experts in every functional area of business and they are the key to our position as leaders in content delivery. We strive to innovate on a daily basis to ensure we continue to grow and create new revenue opportunities and cutting edge technology.
              If you are passionate about taking your career to the next level, then join the RankWorks team and be a part of something big.
              Responsibilities:
              You will be responsible for creating website layout mockups, web graphics, content images and illustrations with various prototypes.
              Other tasks include:
              Rendering graphic elements using traditional tools, multimedia, image processing and design softwareImage retouching and image manipulation, logo conception and basic icon illustration
              -Design marketing banners for landing pages and social media pages
              -Develop photo and video tagging and watermark standards for the entire team
              -Create graphics and illustrations for content team on articles and editorials.
              <br />
              <br />
              Apply today and help us continue our path towards being an industry leader.
              
            </p>
            <ul>
              <h3>Key Skills</h3>
              <li>javascriprt</li>
              <li>html</li>
              <li>react</li>
              <li>redux</li>
            </ul>
            <p><b>Job Types:</b> Full-time, Permanent</p> 
            <p><b>Salary:</b> $33,016.00-$52,000.00 per year</p>
            
          </div>
        </div>
      </section>
    </>
  );
}

  


export default JobeSeeker_details