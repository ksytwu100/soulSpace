import { useState } from 'react';
import { useMutation } from '@apollo/client';  // Import the useMutation hook
import { SAVE_CAR } from '../graphql/mutations';  // Import the saveCar mutation
import CarSearch from '../components/CarSearch';
import SavedSearches from '../components/SavedSearches';
import Auth from '../utils/auth';

const Home = () => {
  const [savedCars, setSavedCars] = useState([]);

  // Define the saveCar mutation hook
  const [saveCar] = useMutation(SAVE_CAR);

  const handleSaveSearch = async (car) => {
    if (Auth.loggedIn()) {
      try {
        // Call the saveCar mutation with the car data
        const { data } = await saveCar({
          variables: {
            carData: { 
              carId: car.title,  // Using car title as a unique carId for simplicity
              title: car.title,
              value: car.value,
              year: car.year,
              description: car.description,
              image: car.image,
            },
          },
        });

        // Update local state with the saved car data
        setSavedCars([...savedCars, data.saveCar.savedCars[data.saveCar.savedCars.length - 1]]);
      } catch (error) {
        console.error('Error saving car:', error);
      }
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
