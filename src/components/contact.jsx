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
                <div className="socialIcon github">
                    <SiGithub className="socialIconItem " />
                </div>
                <div className="socialIcon instagram">
                    <SiInstagram className="socialIconItem " />
                </div>
                <div className="socialIcon linkedin">
                    <SiLinkedin className="socialIconItem " />
                </div>
                <div className="socialIcon twitter">
                    <SiTwitter className="socialIconItem " />
                </div>
                <div className="socialIcon leetcode">
                    <SiLeetcode className="socialIconItem " />
                </div>
                <div className="socialIcon hackerrank">
                    <SiHackerrank className="socialIconItem " />
                </div>
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
