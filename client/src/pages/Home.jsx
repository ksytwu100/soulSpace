import { useState } from 'react';
import CarSearch from '../components/CarSearch';
import SavedSearches from '../components/SavedSearches';
import Auth from '../utils/auth';

const Home = () => {
  const [savedCars, setSavedCars] = useState([]);

  const handleSaveSearch = (car) => {
    if (Auth.loggedIn()) {
      setSavedCars([...savedCars, car]);
    } else {
      alert('You need to log in to save searches!');
    }
  };

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-4">
          <CarSearch onSave={handleSaveSearch} />
        </div>
        <div className="col-12 col-md-8">
          <SavedSearches savedCars={savedCars} />
        </div>
      </div>
    </main>
  );
};

export default Home;
