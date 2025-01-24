import { useState } from "react";

const carData = {
  "BMW 2 Series": {
    value: "$37,800-50,900",
    year: "2023",
    description: "A compact car with space.",
    image: "BMW-2series.png",
  },
  "BMW 5 Series": {
    value: "$56,000-81,500",
    year: "2023",
    description: "Luxury and space",
    image: "BMW-5series.png",
  },
  "Chevrolet Tahoe": {
    value: "$54,200-$77,400",
    year: "2023",
    description: "Luxury SUV.",
    image: "tahoe.png",
  },
  "Ford Mustang": {
    value: "$27,770 - $55,570",
    year: "2023",
    description: "Fast and fun convertible coupe.",
    image: "ford-f150.jpg",
  },
  "Ford F150": {
    value: "$50,000",
    year: "2023",
    description: "A versatile pickup truck.",
    image: "ford-f150.jpg",
  },
  "Honda Civic": {
    value: "$25,000",
    year: "2023",
    description: "A compact car with high efficiency.",
    image: "honda-civic.jpg",
  },
  "Honda Accord": {
    value: "$30,000",
    year: "2023",
    description: "A midsize sedan with modern features.",
    image: "honda-accord.jpg",
  },
  "Hyundai Elantra N": {
    value: "$32,900-$34,400",
    year: "2023",
    description: "The best gas milleage.",
    image: "hyundai.png",
  },
  "Jeep Cherokee": {
    value: "$37,695-$41,295",
    year: "2023",
    description: "Compact SUV",
    image: "jeepcherokee.png",
  },
  "Jeep Wrangler": {
    value: "$31,195-$82,495",
    year: "2023",
    description: "Convertible SUV",
    image: "jeepwrangler.png",
  },
  "Kia Soul": {
    value: "$19,890-$24,190",
    year: "2023",
    description: "Hatchback sedan",
    image: "kiasoul.png",
  },
  "Lexus IS": {
    value: "$40,085-$62,770",
    year: "2023",
    description: "Luxury sedan",
    image: "lexusis.png",
  },
  "Lexus RX": {
    value: "$47,800-$62,000",
    year: "2023",
    description: "Luxury SUV",
    image: "lexusrx.png",
  },
  "Mazda3 Hatchback": {
    value: "$23,550-$35,300",
    year: "2023",
    description: "Comfortable hatchback sedan",
    image: "mazda3.png",
  },
  "Mercedes-Benz CLA": {
    value: "$39,350 - $57,800",
    year: "2023",
    description: "Stylish sedan",
    image: "mercedes.png",
  },
  "Subaru Crosstrek": {
    value: "$23,645 - $36,845",
    year: "2023",
    description: "Reliable SUV",
    image: "subaru.png",
  },
  "Tesla Model 3": {
    value: "$38,990 - $50,990",
    year: "2023",
    description: "Luxury electric sedan",
    image: "teslamodel3.jpg",
  },
  "Tesla Model X": {
    value: "$79,990 - $94,990",
    year: "2023",
    description: "Luxury electric SUV",
    image: "teslamodelx.jpg",
  },
  "Toyota Camry": {
    value: "$27,000",
    year: "2023",
    description: "Reliable and stylish sedan.",
    image: "toyota-camry.jpg",
  },
  "Toyota Corolla": {
    value: "$24,000",
    year: "2023",
    description: "Economical and dependable.",
    image: "toyota-corolla.jpg",
  },
};

const CarSearch = ({ onSave }) => {
  const [selectedCar, setSelectedCar] = useState("");
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
          <img
            src={`/images/${carDetails.image}`}
            alt={selectedCar}
            style={{ width: "300px", height: "200px" }}
          />
          <p>Value: {carDetails.value}</p>
          <p>Year: {carDetails.year}</p>
          <p>Description: {carDetails.description}</p>
          <button onClick={() => onSave({ ...carDetails, title: selectedCar })}>
            Save Search
          </button>
        </div>
      )}
    </div>
  );
};

export default CarSearch;
