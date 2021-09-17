import React, { Component } from "react";
import Slider from "react-slick";
import './Home.css';
const Home = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 200,
        dots: false,
        prevArrow: <button type="button" className="slick-prev">Previous</button>,
        nextArrow: <button type="button" className="slick-prev">Previous</button>,
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

            <div className="secondSection">
                <div className="for_slick_slider">

                    <Slider {...settings}>
                        <div className="itemsl">
                            <div className="slider_head">
                                <h3>hello</h3>
                            </div>
                        </div>
                        <div className="itemsl">
                            <div className="slider_head">
                                <h3>hey</h3>
                            </div>
                        </div>
                        <div className="itemsl">
                            <div className="slider_head">
                                <h3>hola</h3>
                            </div>
                        </div>
                        <div className="itemsl">
                            <div className="slider_head">
                                <h3>si</h3>
                            </div>
                        </div>
                        <div className="itemsl">
                            <div className="slider_head">
                                <h3>namste</h3>
                            </div>
                        </div>
                        <div className="itemsl">
                            <div className="slider_head">
                                <h3>bsdk</h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </>

    )
}
export default Home;
