import React, { Component } from 'react';
import NavBar from './local_components/navBar';
import HomeStart from './local_components/homeStart';
import FeatureSection from './local_components/featureSection';
import ServiceSection from './local_components/serviceSection';
import ClientsSection from './local_components/clientsSection';
import CounterSection from './local_components/counterSection';
import PricingSection from './local_components/pricingSection';
import ContactSection from './local_components/contactSection';
import Footer from './local_components/footer';
import BackToTop from './local_components/backToTopElement';

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
