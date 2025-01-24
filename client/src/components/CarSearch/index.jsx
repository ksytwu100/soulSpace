import { useState } from 'react';

const carData = {
  'Honda Civic': { value: '$25,000', year: '2023', description: 'A compact car with high efficiency.', image: 'honda-civic.jpg' },
  'Honda Accord': { value: '$30,000', year: '2023', description: 'A midsize sedan with modern features.', image: 'honda-accord.jpg' },
  'Toyota Camry': { value: '$27,000', year: '2023', description: 'Reliable and stylish sedan.', image: 'toyota-camry.jpg' },
  'Toyota Corolla': { value: '$24,000', year: '2023', description: 'Economical and dependable.', image: 'toyota-corolla.jpg' },
  'Ford F150': { value: '$50,000', year: '2023', description: 'A versatile pickup truck.', image: 'ford-f150.jpg' },
};

const CarSearch = ({ onSave }) => {
  const [selectedCar, setSelectedCar] = useState('');
  const [carDetails, setCarDetails] = useState(null);

  const handleSelectCar = (event) => {
    const car = event.target.value;
    setSelectedCar(car);
    setCarDetails(carData[car]);
  };

  return (
    <div>
      <h2>Search for Your Next Car</h2>
      <select value={selectedCar} onChange={handleSelectCar}>
        <option value="">Select a car</option>
        {Object.keys(carData).map((car) => (
          <option key={car} value={car}>
            {car}
          </option>
        ))}
      </select>

      {carDetails && (
        <div>
          <h3>{selectedCar}</h3>
          <img src={`/images/${carDetails.image}`} alt={selectedCar} style={{ width: '300px', height: '200px' }} />
          <p>Value: {carDetails.value}</p>
          <p>Year: {carDetails.year}</p>
          <p>Description: {carDetails.description}</p>
          <button onClick={() => onSave({ ...carDetails, title: selectedCar })}>Save Search</button>
        </div>
      )}
    </div>
  );
};

export default CarSearch;
