import global from "../../styles/global.css"; // Consider removing this line if global styles are already applied elsewhere in your application.
import { Comfortaa } from "next/font/google";
import LandingPage from "@/components/landing page/landing-page";
import AboutUs from "@/components/landing page/about-us";
import Facts from "@/components/landing page/facts";
import Contact from "@/components/landing page/contact";
import Footer from "@/components/landing page/footer";

// Import Comfortaa font
const comfortaa = Comfortaa({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={`max-w-full h-full flex flex-col ${comfortaa.className}`}>
      {/* Render components */}
      <LandingPage />
      <AboutUs />
      <Facts />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
