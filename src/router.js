import React from "react";
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom'

// // import Ledger from "./features/ledger/Ledger";
import HeaderLayout from "./features/defualt_Layouts/HeaderLayout";
import FooterLayout from "./features/defualt_Layouts/FooterLayout";
// import BusinessProfile from "./features/defualt_Layouts/BusinessProfile";

import LandingPage from "./features/landingPage";
import JobeSeeker from "./features/JobeSeeker";

const Router = () => {
    return (
        <>
            <HashRouter >
                <HeaderLayout />     
                    <Routes  >
                        <Route path='/' exact element={<JobeSeeker />} />
                        <Route path='/jobseeker' exact element={<JobeSeeker />} />
                    </Routes>
                <FooterLayout />      
            </HashRouter>
        </>
    )   

};

export default Router; 