import "../css/interests.scss";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import education from "../assets/education_logo.png";
import bookstack from "../assets/bookstack_logo.png";
import work_ex from "../assets/work_ex_logo.png";

const InterestSection = () => {
    const [activeSection, setActiveSection] = useState("edu");

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };
    return (
        <div className="InterestWrapper" id="background">
            <div className="InterestSection">
                <div className="titleContainer hidden show">
                    <span className="tabNames ">Learn more about me</span>
                    <div className="HrlineDiv">
                        <div className="titleHrLine2"></div>
                        <div className="titleHrLine1"></div>
                    </div>
                </div>
                <div className="IconContainer ">
                    <div
                        className={`${
                            activeSection === "edu"
                                ? "ImageContainer HoverYellow Active"
                                : "ImageContainer HoverYellow"
                        }`}
                        onClick={() => handleSectionClick("edu")}
                    >
                        <div className="ImageResize">
                            <img
                                src={education}
                                alt="education"
                                className="IconImage"
                            />
                        </div>

                        <div className="titleforDiv">Education</div>
                    </div>
                    <div
                        className={`${
                            activeSection === "workEx"
                                ? "ImageContainer HoverPink Active"
                                : "ImageContainer HoverPink"
                        }`}
                        onClick={() => handleSectionClick("workEx")}
                    >
                        <div className="ImageResize ">
                            {" "}
                            <img
                                src={work_ex}
                                alt="work experience"
                                className="IconImage"
                            />
                        </div>

                        <div className="titleforDiv">Work Experience</div>
                    </div>
                    <div
                        className={`${
                            activeSection === "book"
                                ? "ImageContainer HoverBlue Active"
                                : "ImageContainer HoverBlue"
                        }`}
                        onClick={() => handleSectionClick("book")}
                    >
                        <div className="ImageResize ">
                            {" "}
                            <img
                                src={bookstack}
                                alt="book shelf"
                                className="IconImage"
                            />
                        </div>

                        <div className="titleforDiv">Book Shelf</div>
                    </div>
                </div>
                <div className="ContentContainer">
                    {activeSection == "edu" ? (
                        <div className="AllDetails education">
                            <div className="details-2">
                                <div className="logo">
                                    <img
                                        src="/src/assets/unt_logo.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="others">
                                    <div className="Institute">
                                        University of North Texas
                                    </div>
                                    <div className="degree">
                                        Master of Science - Data Science
                                    </div>
                                    <div className="Duration">
                                        Aug, 23 - Present
                                    </div>
                                    <div className="Score">GPA: 4</div>
                                </div>
                            </div>
                            <div className="details-1">
                                <div className="logo">
                                    <img
                                        src="/src/assets/ldce_logo.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="others">
                                    <div className="Institute">
                                        L.D. College Of Engineering
                                    </div>
                                    <div className="degree">
                                        Bachelor of Engineering - Computer
                                        Engineering
                                    </div>
                                    <div className="Duration">
                                        Aug, 19 - June, 23
                                    </div>
                                    <div className="Score">CGPA: 8.68</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {activeSection == "workEx" ? (
                        <div className="AllDetails workEx">
                            <div className="details-1">
                                <div className="logo">
                                    <img
                                        src="/src/assets/nioclass_logo.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="others">
                                    <div className="Institute">
                                        Nioclass Pvt. Ltd.
                                    </div>
                                    <div className="location">New Delhi</div>
                                    <div className="Position">
                                        Software Developer Intern
                                    </div>
                                    <div className="Duration">
                                        Jan, 23 - April, 23
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {activeSection == "book" ? (
                        <div className="AllDetails Bookshelf">
                            <div className="swiper-button-prev"></div>
                            <Swiper
                                slidesPerView={5}
                                centeredSlides={false}
                                spaceBetween={5}
                                pagination={false}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/can_hurt_me.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/algo_live.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/atomic_habits.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/laws_power.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/comfort_crisis.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/start_why.jpeg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/think_monk.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/rules_of_life.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/never_finished.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/milion_fastlane.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="/src/assets/moved_cheese.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-button-next"></div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
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
    );
};

export default InterestSection;
