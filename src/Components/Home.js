import React from 'react'
import SlideSection from "./SlideSection";
import './Home.css';
import AboutSection from './AboutSection';
import ContactUS from './ContactUS';
const Home = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        // prevArrow: <button type="button" className="slick-prev">Previous</button>,
        // nextArrow: <button type="button" className="slick-next">Previous</button>,
        centerMode: true,
        centerPadding: '0,'
    };
    return (

        <>
            <div className="firstSection" id="first">
                <nav>
                    <div className="logo">Co-Lab</div>
                    <ul >
                        <li><a>Home</a></li>
                        <li><a>About </a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                </nav>
            </div>

            {/* <Router> */}

            {/* <Switch>
                <Route path="/pneumonia">
                <Pneumonia />
                </Route>
                </Switch>
                </Router> */}
            <SlideSection />
            <AboutSection />
            <ContactUS />

        </>

    )
}
export default Home;
