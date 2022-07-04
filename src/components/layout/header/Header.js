import { Link, useParams, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import logoColor from '../../../assets/logoColor.svg';
import { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import LoginForm from '../auth/LoginForm';
import SearchInput from '../../main/SearchInput';

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
        offset < 200 ? (
          <div className="fixed w-full z-50 h-16">
            <div className="mt-4 flex justify-between items-center mx-4 h-full">
              <Link to="/">
                <img src={logo} alt="logo" to="/" />
              </Link>
              <HeaderMenu />
            </div>
          </div>
        ) : offset < 230 ? (
          <div className="fixed top-0 w-full z-50 h-20 bg-gradient-to-b from-white to-transparent opacity-50"></div>
        ) : offset < 240 ? (
          <div className="fixed w-full z-50 h-20 bg-gradient-to-b from-white to-transparent opacity-100 overflow-hidden">
            <div
              className="flex justify-between items-center w-full px-4 absolute mt-14 opacity-20
              "
            >
              <Link to="/">
                <img src={logoColor} alt="logo" to="/" className="w-[144px]" />
              </Link>
              <HeaderMenu className="flex justify-center items-center gap-6 px-6 rounded-3xl text-gray-900" />
            </div>
          </div>
        ) : offset < 245 ? (
          <div className="fixed w-full z-50 h-20 bg-gradient-to-b from-white to-transparent opacity-100 overflow-hidden">
            <div
              className="flex justify-between items-center w-full px-4 absolute mt-8 opacity-60
              "
            >
              <Link to="/">
                <img src={logoColor} alt="logo" to="/" className="w-[144px]" />
              </Link>
              <div className="w-[60%]">
                <SearchInput />
              </div>
              <HeaderMenu className="flex justify-center items-center gap-6 px-6 rounded-3xl text-gray-900" />
            </div>
          </div>
        ) : (
          <div className="fixed w-full z-50 h-20 bg-white border-b-2 border-gray-100">
            <div
              className="flex justify-between items-center w-full px-4 absolute h-full
              "
            >
              <Link to="/">
                <img src={logoColor} alt="logo" to="/" className="w-[144px]" />
              </Link>
              <div className="w-[60%]">
                <SearchInput />
              </div>
              <HeaderMenu className="flex justify-center items-center gap-2 rounded-3xl text-gray-900" />
            </div>
          </div>
        )
      ) : (
        <div className="w-full z-50 my-6 px-4">
          <div className="rounded-full flex justify-between items-center bg-gray-100  py-3 px-8  w-full">
            <Link to="/">
              <img src={logoColor} alt="logo" to="/" />
            </Link>

            <HeaderMenu className="flex justify-center items-center gap-2 rounded-3xl text-gray-900" />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

// offset < 80 ? (

// <div className="fixed w-full z-50  h-16">
//   <div className="mt-4 flex justify-between items-center mx-4 ">
//     <Link to="/">
//       <img src={logo} alt="logo" to="/" />
//     </Link>
//     <HeaderMenu />
//   </div>
// </div>

// <div className="w-full z-50 my-6 sticky top-0" id="fade-in-top">
//   <div className=" flex justify-between items-center bg-white  py-3 px-8 shadow-lg ">
//     <Link to="/">
//       <img src={logoColor} alt="logo" to="/" />
//     </Link>
//     <HeaderMenu />
//   </div>
// </div>
