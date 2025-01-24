const SavedSearches = ({ savedCars }) => {
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
          </div>
        ))}
      </div>
    );
  };
  
  export default SavedSearches;
  