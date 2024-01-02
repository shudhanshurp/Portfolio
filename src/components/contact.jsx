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
                <button className="sendEmailBtn">Send Email</button>
                <div className="signContainer">
                    <div className="signDiv">Developed By</div>
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
