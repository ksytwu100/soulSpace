import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarRating from "../Rating";

const carData = {
  "BMW 2 Series": {
    value: "$37,800-50,900",
    year: "2023",
    description: "A compact car with space.",
    image: "BMW-2series.png",
    rating: '4.3',
  },
  "BMW 5 Series": {
    value: "$56,000-81,500",
    year: "2023",
    description: "Luxury and space",
    image: "BMW-5series.png",
    rating: '4.1',
  },
  "Chevrolet Tahoe": {
    value: "$54,200-$77,400",
    year: "2023",
    description: "Luxury SUV.",
    image: "tahoe.png",
    rating: '3.9',
  },
  "Ford Mustang": {
    value: "$27,770 - $55,570",
    year: "2023",
    description: "Fast and fun convertible coupe.",
    image: "ford-f150.jpg",
    rating: '4.6',
  },
  "Ford F150": {
    value: "$50,000",
    year: "2023",
    description: "A versatile pickup truck.",
    image: "ford-f150.jpg",
    rating: '4.5',
  },
  "Honda Civic": {
    value: "$25,000",
    year: "2023",
    description: "A compact car with high efficiency.",
    image: "honda-civic.jpg",
    rating: '4.2',
  },
  "Honda Accord": {
    value: "$30,000",
    year: "2023",
    description: "A midsize sedan with modern features.",
    image: "honda-accord.jpg",
    rating: '4.4',
  },
  "Hyundai Elantra N": {
    value: "$32,900-$34,400",
    year: "2023",
    description: "The best gas mileage.",
    image: "hyundai.png",
    rating: '3.8',
  },
  "Jeep Cherokee": {
    value: "$37,695-$41,295",
    year: "2023",
    description: "Compact SUV",
    image: "jeepcherokee.png",
    rating: '4.1',
  },
  "Jeep Wrangler": {
    value: "$31,195-$82,495",
    year: "2023",
    description: "Convertible SUV",
    image: "jeepwrangler.png",
    rating: '4.7',
  },
  "Kia Soul": {
    value: "$19,890-$24,190",
    year: "2023",
    description: "Hatchback sedan",
    image: "kiasoul.png",
    rating: '4.0',
  },
  "Lexus IS": {
    value: "$40,085-$62,770",
    year: "2023",
    description: "Luxury sedan",
    image: "lexusis.png",
    rating: '4.6',
  },
  "Lexus RX": {
    value: "$47,800-$62,000",
    year: "2023",
    description: "Luxury SUV",
    image: "lexusrx.png",
    rating: '4.3',
  },
  "Mazda3 Hatchback": {
    value: "$23,550-$35,300",
    year: "2023",
    description: "Comfortable hatchback sedan",
    image: "mazda3.png",
    rating: '4.2',
  },
  "Mercedes-Benz CLA": {
    value: "$39,350 - $57,800",
    year: "2023",
    description: "Stylish sedan",
    image: "mercedes.png",
    rating: '4.4',
  },
  "Subaru Crosstrek": {
    value: "$23,645 - $36,845",
    year: "2023",
    description: "Reliable SUV",
    image: "subaru.png",
    rating: '4.0',
  },
  "Tesla Model 3": {
    value: "$38,990 - $50,990",
    year: "2023",
    description: "Luxury electric sedan",
    image: "tesla3.png",
    rating: '4.8',
  },
  "Tesla Model X": {
    value: "$79,990 - $94,990",
    year: "2023",
    description: "Luxury electric SUV",
    image: "teslax.png",
    rating: '4.7',
  },
  "Toyota Camry": {
    value: "$27,000",
    year: "2023",
    description: "Reliable and stylish sedan.",
    image: "toyota-camry.jpg",
    rating: '3.9',
  },
  "Toyota Corolla": {
    value: "$24,000",
    year: "2023",
    description: "Economical and dependable.",
    image: "toyota-corolla.jpg",
    rating: '4.0',
  },
};


const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  searchContainer: {
    marginBottom: "20px",
    textAlign: "center",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    maxWidth: "300px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#444",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

const CarSearch = ({ onSave }) => {
  const [selectedCar, setSelectedCar] = useState("");
  const [carDetails, setCarDetails] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSelectCar = (event) => {
    const car = event.target.value;
    setSelectedCar(car);
    setCarDetails(carData[car]);
  };

  const handleViewCarDetails = (carName) => {
    // Navigate to the CarDetails page, passing the car name
    navigate(`/car/${carName}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Search for Your Next Car</h2>
      <div style={styles.searchContainer}>
        <select
          value={selectedCar}
          onChange={handleSelectCar}
          style={styles.select}
        >
          <option value="">Select a car</option>
          {Object.keys(carData).map((car) => (
            <option key={car} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>

      {carDetails && (
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>{selectedCar}</h3>
          <img
            src={`/images/${carDetails.image}`}
            alt={selectedCar}
            style={styles.image}
          />
          <CarRating value={carDetails.rating}></CarRating>
          <p style={styles.text}>
            <strong>Value:</strong> {carDetails.value}
          </p>
          <p style={styles.text}>
            <strong>Year:</strong> {carDetails.year}
          </p>
          <p style={styles.text}>
            <strong>Description:</strong> {carDetails.description}
          </p>
          <button
            onClick={() => onSave({ ...carDetails, title: selectedCar })}
            style={styles.button}
          >
            Save Search
          </button>
          <button
            onClick={() => handleViewCarDetails(selectedCar)} // Pass the car title to the details page
            style={{
              ...styles.button,
              backgroundColor: "#28a745", // Different color for the Wikipedia button
              marginLeft: "10px",
            }}
          >
            View Wikipedia
          </button>
        </div>
      )}
    </div>
  );
};

export default CarSearch;
