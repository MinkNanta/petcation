import { useLocation } from 'react-router-dom';
import Hero from '../components/main/Hero';
import TapFilter from '../components/main/TapFilter';
import CreatedModal from './CreatedModal';

export default function Main() {
  const search = useLocation().search;
  const created = new URLSearchParams(search).get('created');

  return (
    <div>
      {created && <CreatedModal />}

      <Hero />
      <div className="mainContainer">
        <TapFilter />
      </div>
    </div>
  );
}
