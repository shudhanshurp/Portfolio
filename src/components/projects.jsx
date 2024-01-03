/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import { FiChevronsRight } from "react-icons/fi";
import "css-doodle";
import "../css/projects.scss";
import anim from "../touch.js";
import { SiGithub } from "react-icons/si";

const projects = [
    {
        id: 1,
        title: "IMDB Movie Review Sentimental Analyzer",
        skills: ["Python", "JavaScript", "Flask", "ReactJS", "CSS"],
        color: "green",
        // desc: " The Movie Reviews Sentiment Analyzer project is a sophisticated endeavor that employs advanced Natural Language Processing (NLP) techniques and machine learning algorithms to classify IMDb movie reviews as positive or negative, addressing challenges such as sarcasm and negation. Leveraging Python, including libraries like nltk and SkLearn, the project utilizes Logistic Regression, Decision Tree Classifier, and Random Forest Classifier models for sentiment analysis. The comprehensive data preprocessing involves removing stop words, expanding contractions, and lemmatization, with subsequent vectorization for model training. The web application, developed using Vite + React and Flask, ensures a seamless user experience, allowing movie enthusiasts to input reviews and receive accurate sentiment analysis results. The project's success is highlighted by achieving an F1 Score close to 90%, with Logistic Regression emerging as the optimal model, demonstrating its practicality and significance in providing valuable insights to movie enthusiasts, critics, and industry professionals.",
        // keywords: [
        //     "Sentiment Analysis, Natural Language Processing (NLP), Machine Learning, Flask, Vite + React, Python, Pandas, NumPy, nltk, SkLearn, Pickle",
        // ],
        keywords: [
            "Sentiment Analysis",
            "Natural Language Processing (NLP)",
            "Machine Learning",
            "Flask",
            "Vite + React",
            "Python",
            "Pandas",
            "NumPy",
            "nltk",
            "SkLearn",
            "Pickle",
        ],
        image: "./src/assets/imdb3D.png",
        imgClass: "IMDB",
        github: "https://github.com/shudhanshurp/Movie-Review-Sentiment-Backend",
    },
    {
        id: 2,
        title: "Hate Speech Detection",
        skills: ["Python", "Tensorflow", "Keras", "Matplotlib"],
        color: "purple",
        // desc: "This project centers on sentiment analysis through speech recognition and natural language processing. Leveraging the SpeechRecognition library, the system transcribes audio inputs, into text using Google's Speech-to-Text API. The sentiment analysis model, built with TensorFlow and Keras, processes a labeled dataset of tweets categorized into three sentiment classes (Negative, Neutral, Positive). Extensive preprocessing involves converting text to lowercase, removing punctuation and stopwords, and ensuring dataset balance. The model, incorporating an embedding layer, bidirectional LSTM, and regularization techniques, is trained and evaluated on its accuracy. Future steps include fine-tuning, exploring additional features, and potential real-time applications.",
        // keywords: [
        //     "Python, Tensorflow, Keras, Matplotlib, Speech-to-Text, NLTK, Classification,SpeechRecognition, PyAudio",
        // ],
        keywords: [
            "Python",
            "Tensorflow",
            "Keras",
            "Matplotlib",
            "Speech-to-Text",
            "NLTK",
            "Classification",
            "SpeechRecognition",
            "PyAudio",
        ],
        image: "./src/assets/mute3D.webp",
        imgClass: "Hate",
        github: "https://github.com/shudhanshurp/Hate-speech-detection",
    },
    {
        id: 3,
        title: "Economy Dashboard",
        skills: ["JavaScript", "CSS"],
        color: "yellow",
        // desc: "The Indian Economy Dashboard is a web application that visualizes various economic indicators through over 30 different charts, offering insights into aspects such as GDP, exports, imports, taxes, etc. The data is sourced from the World Bank's API. The dashboard is designed to be user-friendly, facilitating understanding of complex economic data. It utilizes HTML, CSS, and JavaScript for the front-end, with Node.js and Express.js for the back-end, and Chart.js for rendering the charts.",
        // keywords: [
        //     "HTML, CSS, JavaScript, Web development, Data Visualization, Chart.js",
        // ],
        keywords: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web development",
            "Data Visualization",
            "Chart.js",
        ],
        image: "./src/assets/dashboard3D.png",
        imgClass: "Econ",
        github: "https://github.com/shudhanshurp/Economy-Dashboard",
    },
    {
        id: 4,
        title: "Object Detection and Tracking",
        skills: ["Python", "OpenCV"],
        color: "pink",
        // desc: "This project implements a real-time object detection and tracking system in video surveillance using the YOLOv4 model. The YOLOv4 model, powered by OpenCV's DNN module, efficiently identifies and classifies objects in each video frame. The system combines Kalman filtering for object trajectory prediction, DBSCAN for clustering and labeling detected points, and outlier detection techniques like Local Outlier Factor (LOF). It includes features such as lane monitoring for traffic analysis and anomaly detection to highlight unusual movements. The project aims to provide valuable insights for traffic management, security surveillance, and behavioral analysis in public spaces. Ongoing challenges include parameter fine-tuning for optimal tracking and improving anomaly detection accuracy, with potential applications spanning traffic monitoring, security surveillance, and behavior analysis.",
        // keywords: [
        //     "Python, OpenCV, YOLOv4, Object Detection, Object Tracking, DBSCAN, Anomaly Detection, LOF",
        // ],
        keywords: [
            "Python",
            "OpenCV",
            "YOLOv4",
            "Object Detection",
            "Object Tracking",
            "DBSCAN",
            "Anomaly Detection",
            "LOF",
        ],
        image: "./src/assets/ml3D.png",
        imgClass: "Object",
        github: "https://github.com/shudhanshurp/Object-Detection-and-Tracking",
    },
    {
        id: 5,
        title: "Employee Management System",
        skills: ["PHP", "JavaScript", "CSS", "MySQL"],
        color: "blue",
        // desc: 'The "Employee Management System" project is a full-stack web application designed for managing employee records. It uses basic HTML, CSS, and JavaScript for front-end development, with PHP as the backend language and MySQL for the database. The application offers functionalities such as employee registration, profile management, and managing company activities like leave approval, etc. The system runs on an Apache server using XAMPP, and the database is managed with phpMyAdmin. It implements core web programming concepts like sessions for tracking user login state, GET and POST methods for handling user input, regular expressions for input validation, SQL queries for database interaction, and JavaScript for event handling. The system consists of several tables including employee, admin, and personal information, which work together to facilitate the functionality of the web application',
        // keywords: [
        //     "HTML, CSS, JavaScript, Web development, PHP, MySQL, XAMPP, MySQL",
        // ],
        keywords: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web development",
            "PHP",
            "MySQL",
            "XAMPP",
            "MySQL",
        ],
        image: "./src/assets/management3D.png",
        imgClass: "Employ",
        github: "https://github.com/shudhanshurp/Employee-Management-System",
    },
    {
        id: 6,
        title: "Employee Management System",
        skills: ["PHP", "JavaScript", "CSS", "MySQL"],
        color: "blue",
        // desc: 'The "Employee Management System" project is a full-stack web application designed for managing employee records. It uses basic HTML, CSS, and JavaScript for front-end development, with PHP as the backend language and MySQL for the database. The application offers functionalities such as employee registration, profile management, and managing company activities like leave approval, etc. The system runs on an Apache server using XAMPP, and the database is managed with phpMyAdmin. It implements core web programming concepts like sessions for tracking user login state, GET and POST methods for handling user input, regular expressions for input validation, SQL queries for database interaction, and JavaScript for event handling. The system consists of several tables including employee, admin, and personal information, which work together to facilitate the functionality of the web application',
        keywords: [
            "HTML, CSS, JavaScript, Web development, PHP, MySQL, XAMPP, MySQL",
        ],
        image: "./src/assets/management3D.png",
        imgClass: "Employ",
        github: "https://github.com/shudhanshurp/Employee-Management-System",
    },
];

const ProjectBox = ({
    title,

    color,
    desc,
    keywords,
    image,
    imgClass,
    onSelectProject,
}) => (
    <div
        className={`projectBox ${color}`}
        onClick={() =>
            onSelectProject({ title, desc, keywords, image, imgClass })
        }
    >
        <div className="projectInfo">
            <div className="project-title">{title}</div>
            <div className="project-skills">
                {keywords.map((skill, index) => (
                    <span key={index} className="skill-span">
                        {skill}
                    </span>
                ))}
            </div>
            <a className="github-btn">
                {" "}
                <SiGithub className="socialIconItem " />
            </a>
        </div>
        <div className="imageDiv">
            <img src={image} alt="error" className={`${imgClass}`} />
        </div>
        {/* <div>{image}</div> */}
    </div>
);

const ProjectContainer = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        anim();
    }, []);

    const onSelectProject = (project) => {
        setSelectedProject(project);
    };

    return (
        <>
            <div className="projectContainer" id="project">
                <div className="titleContainer hidden show">
                    <span className="tabNames ">A Showcase of My Work</span>
                    <div className="HrlineDiv">
                        <div className="titleHrLine2"></div>
                        <div className="titleHrLine1"></div>
                    </div>
                </div>

                <div className="pageContentDiv">
                    <div className="gridboxForProjects">
                        {projects.map((project, index) => (
                            <ProjectBox
                                key={index}
                                {...project}
                                onSelectProject={onSelectProject}
                            />
                        ))}
                    </div>
                    {/* <div className="projectDescDiv">
                        <div className="Project-Content">
                            {selectedProject && (
                                <>
                                    <h2 className="project-desc-title">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="project-desc-desc">
                                        {selectedProject.desc}
                                    </p>
                                    <div className="project-desc-keyword">
                                        <strong>Keywords:</strong>
                                        <ul className="project-keyword-title">
                                            {selectedProject.keywords}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </div> */}
                </div>
                <div className="animation-for-projects">
                    <css-doodle>
                        {`:doodle{
                @grid: 100 / 1920px;
                grid-gap: 2px;
              }
              transform: rotate(@rand(360deg)) scale(@rand(.85));
              border: 1px solid hsl(@rand(360), 55%, 55%);
              border-radius: 10%;
              animation: go @rand(4s,15s) ease-in-out infinite @rand(0.3s);
            
              @keyframes go {
                100%{
                  opacity: 0;
                  transform: translateY(-1000px);
                }
              }
              `}
                    </css-doodle>
                </div>
            </div>
        </>
    );
};

export default ProjectContainer;
