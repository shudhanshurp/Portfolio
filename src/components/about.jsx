import { useEffect } from "react";
import anim from "./../touch";
import "../css/about.scss";
const AboutMeSection = () => {
    useEffect(() => {
        anim();
    }, [anim]);
    return (
        <>
            <div className="aboutMeSection" id="about">
                <div className="leftSideAboutContainer">
                    <div className="aboutSubHeading1">Hello, I'm</div>
                    <div className="aboutSubHeadingMain">
                        Sudhanshu{" "}
                        <span className="highlight-details">Patel</span>{" "}
                    </div>
                    <div className="aboutSubHeading2">
                        A <span className="highlight-details">computer</span>{" "}
                        science enthuasiast
                    </div>
                    <div className="other-details">
                        Passionate about technology and diverse computer science
                        domains, I actively explore innovative ideas and the
                        mysteries of space and nature. My interests extend to
                        the intersection of analytical thinking and creative
                        expression, including a love for art and sketching.
                    </div>
                </div>
                <div></div>
            </div>
        </>
    );
};

export default AboutMeSection;
