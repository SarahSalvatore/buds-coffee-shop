import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu.jsx";
import SocialFeed from "./components/SocialFeed.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Menu />
        <SocialFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
