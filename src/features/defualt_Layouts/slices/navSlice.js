import { createSlice } from '@reduxjs/toolkit'
import { NavLink } from "react-router-dom";
import "./navSlice.css"
// import header_api from '../api/headerAPI'

const initialState = {
  value: '',
}

export const navSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    landing_page_nav: (state) => {
        state.value =<> 
            <li><NavLink id='home' to="/">About Us</NavLink></li>
        </>
    },

    Employer: (state) => {
        state.value =<> 
            <li><NavLink id='home' to="/">Job Categories</NavLink></li>
            <li><NavLink id='home' to="/">Post a Job</NavLink></li>
        </>
    },

    JobSeeker: (state) => {
        state.value =<> 
            <li><NavLink id='home' to="/">Job Categories</NavLink></li>
            <li><NavLink id='home' to="/">Search Jobs</NavLink></li>
        </>
    },

    clear_nav: (state) => {
        state.value =<></>
    },
  },
})

// Action creators are generated for each case reducer function
export const { landing_page_nav, Employer, JobSeeker} = navSlice.actions

export default navSlice.reducer