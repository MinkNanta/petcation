import { Link, useParams, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import logoColor from "../../../assets/logoColor.svg";
import { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const location = useLocation();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
      {offset > 80 || location.pathname !== "/" ? (
        <div className="w-full sticky top-6 z-50 ">
          <div className="rounded-full flex justify-between items-center mx-12 bg-gray-100 mt-6 py-3 px-8">
            <Link to="/">
              <img src={logoColor} alt="logo" to="/" />
            </Link>
            <HeaderMenu />
          </div>
        </div>
      ) : (
        <div className="w-full fixed ">
          <div className="h-24 flex justify-between items-center mx-12 ">
            <Link to="/">
              <img src={logo} alt="logo" to="/" />
            </Link>
            <HeaderMenu />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
