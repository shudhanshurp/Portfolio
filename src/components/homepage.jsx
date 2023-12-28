import AboutMeSection from "./about";
import Spline from "@splinetool/react-spline";

const HomePage = () => {
    return (
        <div className="homepageContainer">
            <AboutMeSection />
            <div className="spline-Animation">
                <div className="spline-1">
                    <Spline scene="https://prod.spline.design/TwoImwLoAD2NLzwU/scene.splinecode" />
                </div>
                {/* <Spline scene="https://prod.spline.design/bQaOLxm1beWuQfRT/scene.splinecode" /> */}
            </div>
            <div className="wave-div" style={{ display: "none" }}>
                <div className="hero_area">
                    <svg
                        className="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <g className="parallax">
                            <use
                                xlinkHref="#gentle-wave"
                                x="48"
                                y="16"
                                fill="rgba(255,255,255,0.8)"
                            />
                            <use
                                xlinkHref="#gentle-wave"
                                x="48"
                                y="12"
                                fill="rgba(205,254,137, 0.6)"
                            />
                            <use
                                xlinkHref="#gentle-wave"
                                x="48"
                                y="8"
                                fill="rgba(254, 137, 205, 0.4)"
                            />
                            <use
                                xlinkHref="#gentle-wave"
                                x="48"
                                y="4"
                                fill="rgba(137, 205, 254,0.2)"
                            />
                            {/* <use xlinkHref="#gentle-wave" x="48" y="0" fill="#fff" /> */}
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
