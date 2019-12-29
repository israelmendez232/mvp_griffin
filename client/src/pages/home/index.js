import React, { Component } from 'react';
import NavBar from './localComponents/navBar';
import HomeStart from './localComponents/homeStart';
import FeatureSection from './localComponents/featureSection';
import ServiceSection from './localComponents/serviceSection';
import ClientsSection from './localComponents/clientsSection';
import CounterSection from './localComponents/counterSection';
import PricingSection from './localComponents/pricingSection';
import ContactSection from './localComponents/contactSection';
import Footer from './localComponents/footer';
import BackToTop from './localComponents/backToTopElement';

class HomePage extends Component {
    render() {
        return( 
        <>
            <NavBar />
            <HomeStart />

            <FeatureSection />
            <ServiceSection />
            <ClientsSection />
            <CounterSection />
            <PricingSection />
            <ContactSection />

            <Footer />
            <BackToTop />
        </>)
    };
};

export default HomePage;
