import NavBar from "./components/NavBar";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div id="top" className={`min-h-screen overflow-clip bg-amber-50`}>
            <NavBar />

            <br id="about" />

            <div className="flex flex-col items-center max-w-[90%] md:max-w-[80%] lg:max-w-[55%] mx-auto">
                <AboutSection />

                <br id="projects" />
                <br />
                <br />
                <ProjectsSection />

                <br id="contact" />
                <br />
                <br />
                <ContactSection />
            </div>

            <br />
            <Footer />
        </div>
    );
}

export default App;
