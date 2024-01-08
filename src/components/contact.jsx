import "../css/contact.scss";
import logo from "../assets/signature.png";
import {
    SiInstagram,
    SiGithub,
    SiLeetcode,
    SiTwitter,
    SiLinkedin,
    SiHackerrank,
} from "react-icons/si";
const ContactSection = () => {
    // const handleButtonCLick = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    return (
        <div className="contactSection" id="contact">
            <div className="titleContainer hidden show">
                <span className="tabNames ">Let&apos;s connect</span>
                <div className="HrlineDiv">
                    <div className="titleHrLine2"></div>
                </div>
            </div>
            <div className="socialContainer">
                <a
                    className="socialIcon github"
                    href="https://github.com/shudhanshurp"
                    target="_blank_"
                >
                    <SiGithub className="socialIconItem " />
                </a>
                <a
                    className="socialIcon instagram"
                    href="https://www.instagram.com/shudhanshurp/"
                    target="_blank_"
                >
                    <SiInstagram className="socialIconItem " />
                </a>
                <a
                    className="socialIcon linkedin"
                    href="https://www.linkedin.com/in/shudhanshurp/"
                    target="_blank_"
                >
                    <SiLinkedin className="socialIconItem " />
                </a>
                <a
                    className="socialIcon twitter"
                    href="https://twitter.com/shudhanshurp"
                    target="_blank_"
                >
                    <SiTwitter className="socialIconItem " />
                </a>
                <a
                    className="socialIcon leetcode"
                    href="https://leetcode.com/shudhanshurp/"
                    target="_blank_"
                >
                    <SiLeetcode className="socialIconItem " />
                </a>
                <a
                    className="socialIcon hackerrank"
                    href="https://www.hackerrank.com/profile/shudhanshurp"
                    target="_blank_"
                >
                    <SiHackerrank className="socialIconItem " />
                </a>
            </div>
            <div className="sendEmail">
                <div className="someEmailIntro">
                    Excited to connect with like-minded individuals! Send me a
                    message if you want to explore ideas, discuss projects, or
                    just share a friendly greeting.
                </div>
                <button className="sendEmailBtn">
                    Send Email
                    <>
                        <div className="star-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                version="1.1"
                                style={{
                                    shapeRendering: "geometricPrecision",
                                    textRendering: "geometricPrecision",
                                    imageRendering: "optimizeQuality",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                }}
                                viewBox="0 0 784.11 815.53"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <defs />
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer" />
                                    <path
                                        className="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="star-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                version="1.1"
                                style={{
                                    shapeRendering: "geometricPrecision",
                                    textRendering: "geometricPrecision",
                                    imageRendering: "optimizeQuality",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                }}
                                viewBox="0 0 784.11 815.53"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <defs />
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer" />
                                    <path
                                        className="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="star-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                version="1.1"
                                style={{
                                    shapeRendering: "geometricPrecision",
                                    textRendering: "geometricPrecision",
                                    imageRendering: "optimizeQuality",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                }}
                                viewBox="0 0 784.11 815.53"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <defs />
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer" />
                                    <path
                                        className="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="star-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                version="1.1"
                                style={{
                                    shapeRendering: "geometricPrecision",
                                    textRendering: "geometricPrecision",
                                    imageRendering: "optimizeQuality",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                }}
                                viewBox="0 0 784.11 815.53"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <defs />
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer" />
                                    <path
                                        className="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="star-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                version="1.1"
                                style={{
                                    shapeRendering: "geometricPrecision",
                                    textRendering: "geometricPrecision",
                                    imageRendering: "optimizeQuality",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                }}
                                viewBox="0 0 784.11 815.53"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <defs />
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer" />
                                    <path
                                        className="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="star-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                version="1.1"
                                style={{
                                    shapeRendering: "geometricPrecision",
                                    textRendering: "geometricPrecision",
                                    imageRendering: "optimizeQuality",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                }}
                                viewBox="0 0 784.11 815.53"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <defs />
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer" />
                                    <path
                                        className="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    />
                                </g>
                            </svg>
                        </div>
                    </>
                </button>
                <div className="signContainer">
                    <div className="signDiv">Design & Developed By</div>
                    <img src={logo} alt="" className="logo" />
                </div>
            </div>
            <div className="Container-div">
                <div className="container"></div>
            </div>
        </div>
    );
};

export default ContactSection;
