import "./JobeSeeker.css"
import React, {useEffect, useState} from 'react'
import { JobSeeker } from './defualt_Layouts/slices/navSlice'
import { useSelector, useDispatch } from 'react-redux'
import JobeSeeker_details from "./JobeSeeker_details"
// import { NavLink } from "react-router-dom";

function JobeSeeker(stream_length) {
  const dispatch = useDispatch()

  useEffect(
    () => {
        dispatch(JobSeeker())
    },[]
  )

  return (
    <>
      <section >
        
        <div id="left_Overlay">
          <div id="leftOverlay_scrolL">
            <h1>
              Your Latest Job Applications
            </h1>
            <div className="latestApp" onClick={() => {
              const box = document.getElementById('leftSlide_overlay')
              const box2 = document.getElementById('section')
              box.style.width = '65vw'
              box2.style.width = '65vw'
            }}>
              <h2>Front End Developer (React.js)</h2>
              <p>
                Media is a Web Services company specializing in offering agency level services to the small and medium size business community.
                Our exceptional team consist of experts in every functional area of business and they are the key to our position as leaders in content delivery. We strive to innovate on a daily basis to ensure we continue to grow and create new revenue opportunities and cutting edge technology.
                If you are passionate about taking your career to...<span style={{'color':'gray'}}>more.</span>
              </p>
              <p id="pricing">
                <b>Pricing:</b> You bid <b></b> $500,000 against $450,000
              </p>
              <div id="date_status">
                <span><b>Date:</b> 20-1-2022</span>
                <span>
                  <b>Status: </b>
                  <span style={{'color':'gray'}}>Reviewing...</span>
                </span>
              </div>
            </div>

            <div className="latestApp" onClick={() => {
              const box = document.getElementById('leftSlide_overlay')
              const box2 = document.getElementById('section')
              box.style.width = '65vw'
              box2.style.width = '65vw'
            }}>
              <h2>Front End Developer (React.js)</h2>
              <p>
                Media is a Web Services company specializing in offering agency level services to the small and medium size business community.
                Our exceptional team consist of experts in every functional area of business and they are the key to our position as leaders in content delivery. We strive to innovate on a daily basis to ensure we continue to grow and create new revenue opportunities and cutting edge technology.
                If you are passionate about taking your career to...<span style={{'color':'gray'}}>more.</span>
              </p>
              <p id="pricing">
                <b>Pricing:</b> You bid <b></b> $500,000 against $450,000
              </p>
              <div id="date_status">
                <span><b>Date:</b> 20-1-2022</span>
                <span>
                  <b>Status: </b>
                  <span style={{'color':'gray'}}>Reviewing...</span>
                </span>
              </div>
            </div>

            <div className="latestApp" onClick={() => {
              const box = document.getElementById('leftSlide_overlay')
              const box2 = document.getElementById('section')
              box.style.width = '65vw'
              box2.style.width = '65vw'
            }}>
              <h2>Front End Developer (React.js)</h2>
              <p>
                Media is a Web Services company specializing in offering agency level services to the small and medium size business community.
                Our exceptional team consist of experts in every functional area of business and they are the key to our position as leaders in content delivery. We strive to innovate on a daily basis to ensure we continue to grow and create new revenue opportunities and cutting edge technology.
                If you are passionate about taking your career to...<span style={{'color':'gray'}}>more.</span>
              </p>
              <p id="pricing">
                <b>Pricing:</b> You bid <b></b> $500,000 against $450,000
              </p>
              <div id="date_status">
                <span><b>Date:</b> 20-1-2022</span>
                <span>
                  <b>Status: </b>
                  <span style={{'color':'gray'}}>Reviewing...</span>
                </span>
              </div>
            </div>

            <div className="latestApp" onClick={() => {
              const box = document.getElementById('leftSlide_overlay')
              const box2 = document.getElementById('section')
              box.style.width = '65vw'
              box2.style.width = '65vw'
            }}>
              <h2>Front End Developer (React.js)</h2>
              <p>
                Media is a Web Services company specializing in offering agency level services to the small and medium size business community.
                Our exceptional team consist of experts in every functional area of business and they are the key to our position as leaders in content delivery. We strive to innovate on a daily basis to ensure we continue to grow and create new revenue opportunities and cutting edge technology.
                If you are passionate about taking your career to...<span style={{'color':'gray'}}>more.</span>
              </p>
              <p id="pricing">
                <b>Pricing:</b> You bid <b></b> $500,000 against $450,000
              </p>
              <div id="date_status">
                <span><b>Date:</b> 20-1-2022</span>
                <span>
                  <b>Status: </b>
                  <span style={{'color':'gray'}}>Reviewing...</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="right_Overlay">
          <p>
              <div id="selectDashboard">
                <span>Select Dashboard </span>
                <span>Need Crypto?	TEST NET USE FAUCET <span style={{'color':'red', 'background':'white'}}>!!</span></span>
                <span>Employer Dashboard</span>
              </div>

              <div id="howToUse">                        
                  <span><a href="https://youtu.be/iW9EAOCsgJc" target="_blank"><i class="fa fa-youtube-play"></i></a></span>
                  <span><a href="https://youtu.be/iW9EAOCsgJc" target="_blank">How to use JobCrypt</a></span>                       
              </div>

              <a id="ads" href="https://help.optimism.io/hc/en-us/articles/4411903123483-Connecting-your-wallet-to-Optimism" target="_blank">
                <i class="fa fa-info-circle" title="Network Connect Details"></i>
              
                <span>	
                  Click here to install MetaMask!
                </span>
              </a>

              <div id="subscribe">
                <h1>
                  Ready to start?
                </h1>
                <p>
                  Get the latest jobs direct to your inbox
                </p>

                <div id="inputTag">
                  <p>Email Address <span style={{'color':'red'}}>*</span></p>
                  <p><span style={{'color':'red'}}>*</span> indicates required</p>
                </div>

                <input type="email" placeholder="enter your email ... "/>
                
                <div>
                  <input type="button" value="Join Alert List" />
                </div>
              </div>
          </p>
        </div>
      </section>
      <JobeSeeker_details/>
    </>
  );
}

  


export default JobeSeeker