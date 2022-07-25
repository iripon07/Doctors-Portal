import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;