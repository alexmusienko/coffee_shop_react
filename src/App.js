
// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import AboutUs from './components/about-us/about-us';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import LogoDivider from './components/logo-divider/logo-divider';
import OurBest from './components/our-best/our-best';

export default class App extends Component {

    render() {
        return (
            <>
                <Header bgImg={'/img/main-bg.jpg'} />
                <AboutUs
                    height={520}
                    title={'About Us'}>
                    <LogoDivider color={'black'} />
                </AboutUs>
                <OurBest
                    bgImg={'/img/ourbest-bg.jpg'}
                    title={'Our best'} />
                <Footer />
            </>
        );
    }
}
