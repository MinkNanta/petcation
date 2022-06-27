import { Link, useParams, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import logoColor from '../../../assets/logoColor.svg';
import { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import LoginForm from '../auth/LoginForm';

function Header() {
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {location.pathname === '/' ? (
        offset < 80 ? (
          <div className="fixed w-full">
            <div className="mt-4 flex justify-between items-center mx-4 ">
              <Link to="/">
                <img src={logo} alt="logo" to="/" />
              </Link>
              <HeaderMenu />
            </div>
          </div>
        ) : (
          <div className="w-full z-50 my-6 sticky top-0" id="fade-in-top">
            <div className=" flex justify-between items-center bg-white  py-3 px-8 shadow-lg ">
              <Link to="/">
                <img src={logoColor} alt="logo" to="/" />
              </Link>
              <HeaderMenu />
            </div>
          </div>
        )
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
