import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CompanyInfo from './components/CompanyInfo';
import Applications from './components/Applications';
import ContactUs from './components/ContactUs';
import SiteHeader from './components/SiteHeader';
import Vision from './components/Vision';
import SiteFooter from './components/SiteFooter';

export const App = () => (
    <BrowserRouter>
        <SiteHeader />
        <Routes>
            <Route path='/' element={<><LandingPage /><CompanyInfo /><Applications /><ContactUs /></>} />
            <Route path='/about' element={<CompanyInfo />} />
            <Route path='/vision' element={<Vision />} />
            <Route path='/applications' element={<Applications />} />
            <Route path='/contacts' element={<ContactUs />} />
        </Routes>
        <SiteFooter />
    </BrowserRouter>
);

export default App;