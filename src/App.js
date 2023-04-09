import Header from "./components/Header";
import About from "./components/About";
import Photo from "./components/Photo";
import Menu from "./components/Menu";
import SocialFeed from "./components/SocialFeed";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Photo
          sectionClassName="photo-section"
          text="come and get your coffee fix"
        />
        <Menu />
        <SocialFeed />
        <Photo sectionClassName="contact-photo-section" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
