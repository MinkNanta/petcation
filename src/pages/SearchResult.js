import logoColor from '../assets/logoColor.svg';
import HeaderMenu from '../components/layout/header/HeaderMenu';
import SearchInput from '../components/main/SearchInput';
import { useError } from '../contexts/ErrorContext';
import Alert from '../common/Alert';
import SearchContainer from '../components/main/SearchContainer';

function SearchResult() {
  const { error } = useError();

  return (
    <>
      {error && Alert}
      <div className="sticky top-0 w-full z-50 border-b-2 border-gray-100 py-3 bg-white">
        <div className="rounded-full flex justify-between items-center mx-4  px-8">
          <a href="/">
            <img src={logoColor} alt="logo" to="/" />
          </a>
          <div className="w-[80%]">
            <SearchInput />
          </div>
          {/* <HeaderMenu className="flex justify-center items-center gap-2 rounded-3xl text-gray-900 w-full" /> */}
        </div>
      </div>
      <div className="mainContainer">
        <SearchContainer />
      </div>
    </>
  );
}

export default SearchResult;
