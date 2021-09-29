import React from 'react'
import './SlideSection.css';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
//   } from "react-router-dom";
//   import Pneumonia from './Pneumonia';
import Slider from "react-slick";
const SlideSection = () => {
    return (
             <div className="secondSection">
                
                {/* <div className="for_slick_slider"> */}

                    {/* <Slider {...settings}>
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
                    </Slider> */}
                {/* </div> */}

                    



                    <div className="card">
                        <div>
                            {/* <Link to="/pneumonia"></Link> */}
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            {/* <Link to="/pneumonia"></Link> */}
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            {/* <Link to="/pneumonia">Hello</Link>*/}
                        </div>
                    </div>
            </div>
    )
}

export default SlideSection
