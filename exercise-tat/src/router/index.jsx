import React from "react";
import {Route,Routes} from "react-router-dom";

import Layout from "../components/layout";

export default function Router(){
    return(
        <>
        <Routes>
            <Route path="" element={<Layout></Layout>} />
        </Routes>
        </>
    )
}