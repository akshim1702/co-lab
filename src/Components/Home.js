import React, { Component } from "react";
import Slider from "react-slick";
import './Home.css';
import AboutSection from './AboutSection';
import ContactUS from './ContactUS';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Pneumonia from './Pneumonia';
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
            
            <Router>
            <div className="secondSection">
                
                <div className="for_slick_slider">

                    <Slider {...settings}>
                        <div className="itemsl">
                            <div className="slider_head">
                            <Link to="/pneumonia">Pneumonia</Link>
                            </div>
                        </div>
                        <div className="itemsl">
                            <div className="slider_head">
                            <Link to="/covid">Pneumonia</Link>
                            </div>
                        </div>
                        <div className="itemsl">
                            <div className="slider_head">
                            <Link to="/pneumonia">Pneumonia</Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <Switch>
            <Route path="/pneumonia">
            <Pneumonia />
            </Route>
            </Switch>
            </Router>
            <div>
                <AboutSection />
            </div>
            <div>
                <ContactUS />
            </div>
        

        </>

    )
}
export default Home;
