import { useMutation } from '@apollo/client';
import { REMOVE_CAR } from '../../graphql/mutations';

const SavedSearches = ({ savedCars, refetchSavedCars }) => {
  const [removeCar] = useMutation(REMOVE_CAR);

  const handleDeleteCar = async (carId) => {
    try {
      // Remove car mutation
      await removeCar({
        variables: { carId },
      });

      // Refetch the saved cars after deletion
      refetchSavedCars();
    } catch (error) {
      console.error('Failed to delete car', error);
    }
  };

  if (!savedCars.length) {
    return <p>No saved searches yet!</p>;
  }

  return (
    <div>
      <h2>Your Saved Searches</h2>
      {savedCars.map((car, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{car.title}</h3>
          <img src={`/images/${car.image}`} alt={car.title} style={{ width: '200px', height: '150px' }} />
          <p>Value: {car.value}</p>
          <p>Year: {car.year}</p>
          <p>Description: {car.description}</p>
          <button onClick={() => handleDeleteCar(car.carId)} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedSearches;