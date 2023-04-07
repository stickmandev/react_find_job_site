import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// // import Ledger from "./features/ledger/Ledger";
import HeaderLayout from "./features/defualt_Layouts/HeaderLayout";
import FooterLayout from "./features/defualt_Layouts/FooterLayout";
// import BusinessProfile from "./features/defualt_Layouts/BusinessProfile";

import LandingPage from "./features/landingPage";
import JobeSeeker from "./features/JobeSeeker";

const Router = () => {
    return (
        <>
            <BrowserRouter >
                <HeaderLayout />     
                    <Routes  >
                        <Route path='/' exact element={<LandingPage />} />
                        <Route path='/jobseeker' exact element={<JobeSeeker />} />
                    </Routes>
                <FooterLayout />      
            </BrowserRouter>
        </>
    )   

};

export default Router; 