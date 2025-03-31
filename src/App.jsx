import { useEffect, useRef } from "react";
import { scrollFix } from "./utils/Scroll";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MainBody from "./Body/MainBody";
import { VisibilityProvider } from "./utils/Visibilitycontext";

function App() {
  useEffect(() => {
    scrollFix(); // Execute initially
    window.addEventListener("scroll", scrollFix);
    return () => window.removeEventListener("scroll", scrollFix);
  }, []);

  const contactRef = useRef(null)
  const aboutRef = useRef(null)
  const homeRef = useRef(null)

  return (
    <>
      {/* <ScrollLine/> */}
      {/* <Privacy /> */}
      {/* <ScrollLine /> */}
      <VisibilityProvider>
        <Navbar contactRef={contactRef} aboutRef={aboutRef} homeRef={homeRef} />
        <MainBody
          contactRef={contactRef}
          aboutRef={aboutRef}
          homeRef={homeRef}
        />
      </VisibilityProvider>
      <Footer />
      {/* <Blog/> */}
    </>
  );
}

export default App;
