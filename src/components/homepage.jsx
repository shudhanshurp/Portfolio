import AboutMeSection from "./about";
import Spline from "@splinetool/react-spline";
import spline3 from "../assets/planet3.png";
import spline4 from "../assets/planet2.png";
import spline5 from "../assets/saturn.png";
import spline6 from "../assets/shape1.png";
import spline7 from "../assets/shape2.png";
import spline8 from "../assets/orb.png";
import spline2 from "../assets/astro.png";

const HomePage = () => {
    return (
        <div className="homepageContainer">
            <AboutMeSection />
            <div className="spline-Animation">
                <div className="backgroundSpline">
                    <div className="spline-3">
                        <img src={spline3} alt="" />
                        {/* planet with black moon image */}
                    </div>
                    <div className="spline-4">
                        <img src={spline4} alt="" />
                        {/* spike planet image */}
                    </div>
                    <div className="spline-5">
                        <img src={spline5} alt="" />
                        {/* saturn image */}
                    </div>
                    <div className="spline-6">
                        <img src={spline6} alt="" />
                        {/* triangle image */}
                    </div>
                    <div className="spline-7">
                        <img src={spline7} alt="" />
                        {/* hexagon image */}
                    </div>
                    <div className="spline-8">
                        <img src={spline8} alt="" />
                        {/* orb image */}
                    </div>
                </div>

                <div className="spline-2">
                    <img src={spline2} alt="" />
                    {/* astro img */}
                </div>
                <div className="spline-1">
                    <Spline scene="https://prod.spline.design/TwoImwLoAD2NLzwU/scene.splinecode" />
                </div>
                {/* <Spline scene="https://prod.spline.design/bQaOLxm1beWuQfRT/scene.splinecode" /> */}
            </div>
            <div className="wave-div" style={{ display: "none" }}></div>
        </div>
    );
};

export default HomePage;
