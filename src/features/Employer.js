import "./Employer.css"
import React, {useEffect, useState} from 'react'
import { landing_page_nav } from './defualt_Layouts/slices/navSlice'
import { useSelector, useDispatch } from 'react-redux'

function Employer(stream_length) {
  const dispatch = useDispatch()

  useEffect(
    () => {
        dispatch(landing_page_nav())
    },[]
  )

  return (
    <>
      <section >
        <div id="left_Overlay">
          Your Latest Job Postings
          Post Date	Title	Applicants	Expiry Date	Status		

        </div>

        <div id="right_Overlay">
          <p>
            <a href="https://help.optimism.io/hc/en-us/articles/4411903123483-Connecting-your-wallet-to-Optimism" target="_blank">
              <i class="fa fa-info-circle" title="Network Connect Details"></i>
              <h3>	
                Click here to install MetaMask!
              </h3>
              <div>
                Select Dashboard <br />
                
                Need Crypto?	TEST NET USE FAUCET!!
                Employer Dashboard
              </div>

              <div>
                Ready to start?
                Get the latest jobs direct to your inbox

                * indicates required
                Email Address *
                enter your email ... 
                Join Alert List
              </div>
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

  


export default Employer