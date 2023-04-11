import React from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Search from './components/search/Search';
import GetCar from './components/getCar/GetCar';
import CarModel from './components/carModel/CarModel';
import Home from './components/home/Home';
import ChooseUs from './components/chooseUs/ChooseUs';
import Testimonials from './components/testimonials/Testimonials';
import Faq from './components/faq/Faq';
import GetApp from './components/getApp/getApp';
import Footer from './components/footer/Footer';

export function App() {
    return (
        <>
            <Header />
            <Home />
            <Search />
            <GetCar />
            <CarModel />
            <Banner />
            <ChooseUs />
            <Testimonials />
            <Faq />
            <GetApp />
            <Footer />
        </>
    );
}

export default App;
