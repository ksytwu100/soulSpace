import { useParams, useNavigate } from 'react-router-dom';

const CarDetails = () => {
  const { carName } = useParams(); // Get the car name from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Wikipedia URL format
  const wikipediaUrl = `https://en.wikipedia.org/wiki/${carName}`;

  // Go back to the previous page
  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Button to go back to the previous page */}
      <button
        onClick={handleGoBack}
        style={{
          padding: '5px 10px',
          cursor: 'pointer',
          backgroundColor: '#007BFF', // Blue button for back
          color: 'white',
          borderRadius: '5px',
          zIndex: 10,
          marginBottom: '10px', // Space between button and title
        }}
      >
        Go Back
      </button>

      <h1>{carName} - Wikipedia</h1>

      {/* The Wikipedia iframe */}
      <div
        style={{
          border: '5px solid #4CAF50', // Green border for 3D effect
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Slight shadow for 3D effect
          position: 'relative',
          width: '800px', // Fixed width
          height: '600px', // Fixed height
          margin: '0 auto',
        }}
      >
        <iframe
          src={wikipediaUrl}
          title={`${carName} Wikipedia`}
          width="100%"
          height="100%"
          style={{
            border: 'none',
            borderRadius: '10px',
            display: 'block',
          }}
        />
      </div>

    </div>
  );
};

export default CarDetails;