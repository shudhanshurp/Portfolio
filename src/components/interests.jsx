import "../css/interests.scss";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import education from "../assets/education_logo.png";
import bookstack from "../assets/bookstack_logo.png";
import work_ex from "../assets/work_ex_logo.png";

const InterestSection = () => {
    const [activeSection, setActiveSection] = useState("education");

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
                    </div>
                </div>
                <div className="IconContainer ">
                    <div
                        className="ImageContainer HoverYellow"
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
                        className="ImageContainer HoverGreen"
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
                        className="ImageContainer HoverBlue"
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
                            <Swiper
                                slidesPerView={5}
                                centeredSlides={false}
                                spaceBetween={20}
                                pagination={false}
                                navigation={true}
                                modules={[Pagination, Navigation]}
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
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
            <div className="drip-wrapper">
                <div className="drip-top"></div>
                <div className="drip"></div>
                <div className="drip"></div>
                <div className="drip"></div>
                <div className="drip"></div>
                <div className="drip"></div>
                <div className="drip"></div>
                <div className="drip"></div>
                <div className="drip"></div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="10"
                                result="blur"
                            />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default InterestSection;
