import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgressBar from "./ScrollProgressBar";
import BootScreen from "./BootScreen";

function MainLayout({ children }) {
  return (
    <div className="portfolio">
      <BootScreen />
      <ScrollProgressBar />
      <Navbar />
      <div className="portfolio-content-area">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;