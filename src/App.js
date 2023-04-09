import Header from "./components/Header";
import About from "./components/About";
import Photo from "./components/Photo";
import Menu from "./components/Menu";
import StoreMap from "./components/StoreMap";
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
          sectionClassName="contact-photo-section"
          text="order now, drink sooner"
          buttonText="Order"
          buttonAction={() =>
            window.open(
              "https://food.google.com/chooseprovider?restaurantId=/g/11b75g3c0z&g2lbs=ADZRdkumWqz9iN5bCZYuhzJhbtNzSg9HRB1GywETqxfDHI-ovXNyMJ5aqs0dLDSu0BTKQbKx5SGeCD9jb5V-2nRYxD5sWNQxlL1qB3HB4frnzI_cb8huikN8RUXf_bfml81HGXw_uXRR&hl=en-CA&gl=ca&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=vBMzZISLB96cptQP3pq8CA&ei=vBMzZISLB96cptQP3pq8CA&fo_s=OA,AH&orderType=2&sei=CUgiWzc2QCCgESnr7yMeMySq&utm_campaign&utm_source=search",
              "_blank",
              "noopener,noreferrer"
            )
          }
        />
        <Menu />
        <StoreMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
