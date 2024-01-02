import "../css/skills.scss";
import cpp from "../assets/C++ logo.png";
import git from "../assets/git_logo.png";
import js from "../assets/JS logo.png";
import keras from "../assets/keras_logo.png";
import matplotlib from "../assets/matplotlib logo.png";
import mongo from "../assets/mongodb_logo.png";
import mysql from "../assets/mysql_logo.svg";
import node from "../assets/nodejs_logo-1.png";
import numpy from "../assets/numpy_logo.png";
import opencv from "../assets/opencv_logo.png";
import pandas from "../assets/pandas_logo-1.png";
import python from "../assets/Python logo.jpg";
import react from "../assets/react_logo.png";
import skl from "../assets/sk_learn_logo-1.png";
import tf from "../assets/TF logo.png";

const SkillsSection = () => {
    return (
        <div className="skillsSection" id="skills">
            <div className="scContainer">
                <div className="titleContainer hidden show">
                    <span className="tabNames ">Tech Stack</span>
                    <div className="HrlineDiv">
                        <div className="titleHrLine2"></div>
                        <div className="titleHrLine1"></div>
                    </div>
                </div>
                <div className="skillContainer">
                    <div className="gel pulse-gel hex-layer-6">
                        <div className="hex empty-3 blue r4"></div>
                        <div className="hex empty-1 yellow r4"></div>
                        <div className="hex  green r3">
                            <img src={cpp} alt="cpp" className="logo_img" />
                        </div>
                        <div className="hex pink r2">
                            {" "}
                            <img src={js} alt="js" className="logo_img" />
                        </div>
                        <div className="hex blue r1">
                            {" "}
                            <img src={numpy} alt="numpy" className="logo_img" />
                        </div>
                        <div className="hex pink r1">
                            {" "}
                            <img src={react} alt="react" className="logo_img" />
                        </div>
                        <div className="hex blue r2">
                            {" "}
                            <img
                                src={opencv}
                                alt="opencv"
                                className="logo_img"
                            />
                        </div>
                        <div className="hex neon r3">
                            {" "}
                            <img
                                src={mongo}
                                alt="mongodb"
                                className="logo_img"
                            />
                        </div>
                        <div className="hex empty-1 pink r4"></div>
                        <div className="hex empty-3 blue r4"></div>
                    </div>
                    <div className="gel pulse-gel hex-layer-5">
                        <div className="hex empty-6 pink r3"></div>
                        <div className="hex empty-4 green r3"></div>
                        <div className="hex empty-2 blue r3"></div>
                        <div className="hex blue r2">
                            {" "}
                            <img
                                src={python}
                                alt="python"
                                className="logo_img"
                            />
                        </div>
                        <div className="hex blue r1">
                            {" "}
                            <img
                                src={pandas}
                                alt="pandas"
                                className="logo_img"
                            />
                        </div>
                        <div className="hex blue central-gel">
                            {" "}
                            <img src={skl} alt="sklearn" className="logo_img" />
                        </div>
                        <div className="hex green r1">
                            {" "}
                            <img src={git} alt="git" className="logo_img" />
                        </div>
                        <div className="hex blue r2">
                            {" "}
                            <img
                                src={keras}
                                alt="keras"
                                className="logo_img keras"
                            />
                        </div>
                        <div className="hex empty-2 green r3"></div>
                        <div className="hex empty-4 blue r3"></div>
                        <div className="hex empty-6 blue r3"></div>
                    </div>
                    <div className="gel pulse-gel hex-layer-4">
                        <div className="hex empty-3 blue r4"></div>
                        <div className="hex empty-1 pink r4"></div>
                        <div className="hex empty-0 green r3"></div>
                        <div className="hex blue r2">
                            {" "}
                            <img
                                src={tf}
                                alt="tensorflow"
                                className="logo_img"
                            />
                        </div>
                        <div className="hex pink r1">
                            {" "}
                            <img src={node} alt="nodejs" className="logo_img" />
                        </div>
                        <div className="hex blue r1">
                            {" "}
                            <img
                                src={matplotlib}
                                alt="matplotlib"
                                className="logo_img"
                            />
                        </div>
                        <div className="hex neon r2">
                            {" "}
                            <img src={mysql} alt="mysql" className="logo_img" />
                        </div>
                        <div className="hex empty-0 blue r3"></div>
                        <div className="hex empty-1 blue r4"></div>
                        <div className="hex empty-3 pink r4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
