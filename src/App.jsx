import "./App.css";
import HomePage from "./components/homepage";
import "animate.css";
import ProjectContainer from "./components/projects";
import Navbar from "./components/navbar";
import SkillsSection from "./components/skills";
import InterestSection from "./components/interests";
import ContactSection from "./components/contact";

function App() {
    return (
        <>
            <Navbar />
            <HomePage />
            <ProjectContainer />
            <SkillsSection />

            <InterestSection />
            <ContactSection />
        </>
    );
}

export default App;
