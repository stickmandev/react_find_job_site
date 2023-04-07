import "./landingPage.css"
import React, {useEffect, useState} from 'react'
import { landing_page_nav } from './defualt_Layouts/slices/navSlice'
import { useSelector, useDispatch } from 'react-redux'

function LandingPage(stream_length) {
  const dispatch = useDispatch()

  useEffect(
    () => {
        dispatch(landing_page_nav())
    },[]
  )

  return (
    <>
      <section >
        ddddd
      </section>
    </>
  );
}

  


export default LandingPage