import global from "../../styles/global.css";
import LandingPage from "@/components/landing page/landing-page";
import AboutUs from "@/components/landing page/about-us";
import Facts from "@/components/landing page/facts";
import Contact from "@/components/landing page/contact";
import Footer from "@/components/landing page/footer";

const Home = () => {
  return (
    <main className="max-w-full h-full flex flex-col">
      <LandingPage />
      <AboutUs />
      <Facts />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
