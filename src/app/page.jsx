import global from "../../styles/global.css";
import LandingPage from "@/components/landing page/landing-page";
import AboutUs from "@/components/landing page/about-us";
import Facts from "@/components/landing page/facts";
import Contact from "@/components/landing page/contact";
import Footer from "@/components/landing page/footer";
import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={`max-w-full h-full flex flex-col ${comfortaa.className}`}>
      <LandingPage />
      <AboutUs />
      <Facts />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
