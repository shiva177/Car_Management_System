import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard';
import { Modal, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Edit from './Edit';

const API_URL = 'https://car-management-system-5cxv.onrender.com';

export default function CarDisplay() {
  const [keyword, setKeyword] = useState('');
  const [carList, setCarList] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [selectedCar, setSelectedCar] = useState(null); // State to store selected car details

  const navigate = useNavigate();

  const handleDelete = async () => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      alert('You need to be logged in to delete a car.');
      return;
    }
  
    try {
      // Call the API to delete the car
      console.log(selectedCar);
      await axios.delete(`${API_URL}/api/car/delete/${selectedCar._id}`, {
        headers: {
          "auth-token": authToken,
        },
      });
  
      // After successful deletion, close the modal and remove the car from the carList
      setShowModal(false);
      setCarList(carList.filter((car) => car._id !== selectedCar._id));
  
      alert('Car deleted successfully!');
    } catch (error) {
      console.error('Error deleting the car:', error);
      alert('Error deleting the car.');
    }
  };

  useEffect(() => {
    // Fetch all cars initially
    const fetchAllCars = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        // Redirect to login page if authToken is not found
        navigate('/login');
        return;
      }
      try {
        const response = await axios.get(`${API_URL}/api/car/fetchAll`, {
          headers: {
            "auth-token": authToken,
          },
        });
        setCarList(response.data);
      } catch (error) {
        console.error('Error fetching all cars:', error);
      }
    };

    fetchAllCars();
  }, []);

  useEffect(() => {
    // Debounce mechanism to delay the search until the user stops typing
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(setTimeout(() => {
      handleSearch();
    }, 300)); // 300ms delay
  }, [keyword]);

  const handleSearch = async () => {
    const authToken = localStorage.getItem('authToken');
    
    try {
      const response = await axios.post(
        `${API_URL}/api/car/searchCar`,
        { keyword },
        {
          headers: {
            "auth-token": authToken,
          },
        }
      );
      setCarList(response.data);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  };

  const handleCarClick = (car) => {
    console.log("Clicked");
    setSelectedCar(car); // Store car details in the state
    setShowModal(true);   // Open the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCar(null); // Reset selected car details
  };

  return (
    <div className="container mt-4">
  <div className="input-group mb-4 d-flex justify-content-center">
    <div 
      className="input-group mb-5" 
      style={{ 
        maxWidth: '800px', 
        height: '50px', 
        margin: '0 auto', // Center horizontally
        zIndex: '1000' 
      }}
    >
      <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        className="form-control"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword"
        style={{ height: '50px' }}
      />
    </div>
  </div>

  <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
  {carList.length > 0 ? (
    carList.map((car) => (
      <CarCard 
        key={car.id} 
        title={car.title} 
        description={car.description} 
        base64String={car.images[0]} 
        onClick={() => handleCarClick(car)}
        car={car}
      />
    ))
  ) : (
    <div className="input-group mb-4 d-flex justify-content-center">
      <h2>Click on Upload on NavBar to Upload New Car Details.</h2>
      <img 
    src="/empty_state.png" 
    alt="No cars found" 
    style={{ 
      width: '100%', 
      maxWidth: '500px', 
      height: 'auto' 
    }} 
  />
        
        </div>
  )}
</div>

<Modal show={showModal} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    <Modal.Title>{selectedCar?.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <h5>Description:</h5>
    <p>{selectedCar?.description}</p>
    
    {/* Display all images */}
    <div className="d-flex flex-wrap justify-content-center">
      {selectedCar?.images.map((image, index) => (
        <div key={index} className="m-2">
          <img 
            src={image} 
            alt={`Car image ${index + 1}`} 
            style={{ width: '200px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} 
          />
        </div>
      ))}
    </div>

    {/* Display tags */}
    <div className="mt-3">
      <h6>Tags:</h6>
      <div className="d-flex flex-wrap">
        {selectedCar?.tags && Object.entries(selectedCar?.tags).map(([key, value], index) => (
          <Badge key={index} bg="secondary" className="me-2 mb-2">{`${key}: ${value}`}</Badge>
        ))}
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    {/* Edit Button */}
    <Button variant="primary" onClick={() => navigate(`/edit-car/${selectedCar._id}`)}>
      Edit
    </Button>

    {/* Delete Button */}
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>

    {/* Close Button */}
    <Button variant="secondary" onClick={handleCloseModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>

</div>

  );
}
