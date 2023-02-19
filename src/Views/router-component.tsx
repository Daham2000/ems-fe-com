import { Routes, Route } from "react-router-dom";
import LoginComponent from "./Auth/login-component";
import OpeningView from "./opening-view";
import React from 'react';
import RegisterComponent from "./Auth/signup-component";
import AdminDashboardComponent from "./Dashboard/dashboard-component";

const RouterComponent = () => {
    const Loading = () => <p>Loading ...</p>;
    return (
        <React.Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<OpeningView />} />
                <Route path='/login' element={<LoginComponent />} />
                <Route path='/signup' element={<RegisterComponent />} />
                <Route path='/dashboard-admin' element={<AdminDashboardComponent />} />
            </Routes>
        </React.Suspense>
    );
}
export default RouterComponent;