import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import S1 from "./S1";
import S2 from "./S2";
import S3 from "./S3";
import About from "./About";
import WhyUs from "./WhyUs";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Form from "./Form";


const MainBody = ({ contactRef, aboutRef, homeRef }) => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo === "about" && aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "contact" && contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }else if(scrollTo === "home" && homeRef?.current){
      homeRef.current.scrollIntoView({behavior: "smooth"})
    }
  }, [location, aboutRef, contactRef, homeRef]);

  return (
    <div className="">
        <S1 homeRef={homeRef} />
        <S2 />
        <S3 />
        <About aboutRef={aboutRef} />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact contactRef={contactRef} id="contact-us" />
        <Form />
    </div>
  );
};

export default MainBody;
