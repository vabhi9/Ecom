import Temp_Logo from "./Temp_Logo.jpg";
import { useEffect } from "react";
import { scrollFix } from "../utils/Scroll.js";
import MDiv from "./MDiv.png";
import Hover from "../utils/Hover";
import { NavLink, useNavigate } from "react-router-dom";
import ScrollLine from "../utils/ScrollLine.jsx";

const Navbar = () => {
  useEffect(() => {
    scrollFix(); // Execute initially
    window.addEventListener("scroll", scrollFix);
    return () => window.removeEventListener("scroll", scrollFix);
  }, []);



  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate(`/?scrollTo=${section}`); // Navigate to home with query param
  };
  return (
    <div className="">
      <section
        id="Sect-1"
        className="h-12 w-full bg-Primary flex justify-between items-center p-3"
      >
        <div className="text-white">
          info@mdivinecraetion.com | +91-2464476809
        </div>
        <div className="">
          <NavLink to="/signin">
            <div className="bg-white px-3 py-1 rounded-xl active:scale-95 duration-500">
              Sign-in
            </div>
          </NavLink>
        </div>
      </section>
      <section
        id="Sect-2"
        className="h-24 w-full bg-Secondary flex justify-between items-center px-3"
      >
        {/* <div className="cursor-pointer"> */}
        <img
          src={MDiv}
          alt="Logo"
          className="cursor-pointer w-[12%] ml-[12px]"
        />
        {/* </div> */}
        <div>Text</div>
        <div>Google-Reviews</div>
      </section>
      {/* <section id="Sect-3" 
      className="min-h-12 w-full bg-sky-950 "
      > */}
      <section
        id="Sect-3"
        className="fixed h-12 w-full bg-white flex justify-center items-center z-40"
      >
        {/* <ScrollLine /> */}
        <ul className="text-Primary flex justify-center items-center gap-7 [&>li]:cursor-pointer">
          <li onClick={() => handleNavigation("home")}>
            Home
            {/* <NavLink to="/Home">Home</NavLink> */}
          </li>
          <li onClick={() => handleNavigation("about")}>About US</li>
          <li>
            <NavLink to={"/api/blog"}>Blog</NavLink>
          </li>

          <li className="">
            <Hover Parent={"Categories"}></Hover>
          </li>

          {/* <Hover>
              <li></li>
            </Hover> */}

          <li className="">Download Catalouge</li>
          <li className="" onClick={() => handleNavigation("contact")}>
            Contact US
          </li>
        </ul>
      </section>
      {/* </section> */}
    </div>
  );
};

export default Navbar;
