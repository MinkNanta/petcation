import { Link, useParams, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import logoColor from '../../../assets/logoColor.svg';
import { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';

function Header() {
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  if (offset > 80) {
    setActive(!active);
  }

  return (
    <>
      {location.pathname === '/' ? (
        <div className={`w-full ${active ? 'sticky' : 'fixed'} top-0`}>
          <div className="h-24 flex justify-between items-center mx-4 ">
            <Link to="/">
              <img src={logo} alt="logo" to="/" />
            </Link>
            <HeaderMenu />
          </div>
        </div>
      ) : (
        <div className="w-full z-50 my-6">
          <div className="rounded-full flex justify-between items-center mx-4 bg-gray-100  py-3 px-8">
            <Link to="/">
              <img src={logoColor} alt="logo" to="/" />
            </Link>
            <HeaderMenu />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
