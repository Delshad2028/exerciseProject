import React from "react";
import {Route,Routes} from "react-router-dom";

import Layout from "../components/layout";
import Home from "../pages/Home.jsx";

export default function Router(){
    return(
        <>
        <Routes>
            <Route path="" element={<Layout><Home /></Layout>} />
        </Routes>
        </>
    )
}