import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Badge, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Cloudinary } from 'cloudinary-core';


const Edit = () => {
  // State for form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dealer, setDealer] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [carDetails, setCarDetails] = useState(null);

  const carTypes = [
    'Coupe', 'Hatchback', 'Convertible', 'Station Wagon',
    'Minivan', 'Pick-up Truck', 'Crossover', 'Sports Car',
    'Electric Vehicle (EV)', 'Luxury Car', 'SUV', 'Sedan','Others'
  ];
  const carBrands = [
    'Maruti Suzuki', 'Hyundai', 'Tata Motors', 'Mahindra', 'Kia',
    'Toyota', 'Honda', 'Renault', 'Ford', 'Volkswagen', 'Skoda',
    'Nissan', 'MG Motor', 'Fiat', 'Chevrolet', 'Mercedes-Benz',
    'BMW', 'Audi', 'Jaguar', 'Land Rover', 'Jeep', 'Volvo','Others'
  ];
  const API_URL="https://car-management-system-5cxv.onrender.com"
  const { id } = useParams();
  const navigate = useNavigate();
  const cloudinary = new Cloudinary({ cloud_name: 'dpzozeg4v' });

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const authToken = localStorage.getItem('authToken'); // Retrieve the token from localStorage
        if (!authToken) {
            // Redirect to login page if authToken is not found
            navigate('/login');
            return;
          }
        const response = await axios.get(
          `${API_URL}/api/car/getCarById/${id}`,
          {
            headers: {
              "auth-token": authToken, // Attach the token to the header
            },
          }
        );
        setCarDetails(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDealer(response.data.tags.dealer);
        setSelectedType(response.data.tags.car_type);
        setSelectedBrand(response.data.tags.company);
        setImagePreviews(response.data.images);
      } catch (error) {
        console.error("Error fetching car details:", error);
        setError('Failed to load car details.');
      }
    };

    console.log("Id = ",id);
    const authToken = localStorage.getItem('authToken'); // Retrieve the token from localStorage
        if (!authToken) {
            // Redirect to login page if authToken is not found
            navigate('/login');
            return;
          }
    fetchCarDetails();
    
  }, []);

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
  
    console.log(fileArray);
  
    const uploadToCloudinary = (file) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'uploads'); // Ensure you set an upload preset in your Cloudinary settings
  
        fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`, {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => resolve(data.secure_url))
        .catch(err => reject(err));
      });
    };
  
    try {
      const imageUrls = await Promise.all(fileArray.map(uploadToCloudinary));
    //   setImages(prevImages => [...prevImages, ...imageUrls]); // Append new image URLs to previous ones
      setImagePreviews(prevPreviews => [
        ...prevPreviews,
        ...fileArray.map(file => imageUrls.toString())
      ]); // Append new previews
    } catch (err) {
      setError('Error uploading images to Cloudinary.');
    }
  };

  const removeImage = (index) => {
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  const handleSelectedBrand = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const carData = {
      title,
      description,
      dealer,
      tags: {
        car_type: selectedType,
        company: selectedBrand,
        dealer: dealer
      },
      images: imagePreviews,
    };

    try {
      
        // update api hit
        const authToken = localStorage.getItem('authToken'); // Retrieve the token from localStorage
      await axios.put(
        `${API_URL}/api/car/update/${id}`,
        carData,
        {
          headers: {
            "auth-token": authToken, // Attach the token to the header
          },
        }
      );

      setLoading(false);
      alert(id ? 'Car updated successfully!' : 'Car uploaded successfully!');
      navigate('/cardisplay');
    } catch (err) {
      setError('Failed to upload car');
      setLoading(false);
    }
  };

  if (!carDetails && id) {
    return <div>Loading...</div>;  // Show loading state while car details are being fetched
  }

  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-5">{id ? 'Edit Car' : 'Upload New Car'}</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Car Title */}
        <div className="input-group mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="input-group-text">Title</span>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
            required
          />
        </div>

        {/* Description */}
        <div className="input-group mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="input-group-text">Description</span>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
            required
          />
        </div>

        {/* Car Types */}
        <div className="mb-3 container" style={{ maxWidth: 800 }}>
          <div className="d-flex flex-wrap justify-content-center">
            {carTypes.map((type) => (
              <Badge
                key={type}
                bg={selectedType === type ? 'primary' : 'secondary'}
                className="me-2 mb-2 pt-2 pb-2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleSelectType(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>

        {/* Car Brands */}
        <div className="mb-3 container mt-5" style={{ maxWidth: 800 }}>
          <div className="d-flex flex-wrap justify-content-center">
            {carBrands.map((brand) => (
              <Badge
                key={brand}
                bg={selectedBrand === brand ? 'info' : 'secondary'}
                className="me-2 mb-2 pt-2 pb-2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleSelectedBrand(brand)}
              >
                {brand}
              </Badge>
            ))}
          </div>
        </div>

        {/* Dealer */}
        <div className="input-group mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="input-group-text">Dealer</span>
          <input
            type="text"
            className="form-control"
            value={dealer}
            onChange={(e) => setDealer(e.target.value)}
            placeholder="Enter Dealer Name"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-3 d-flex justify-content-center align-items-center">
          {/* <label htmlFor="images" className="form-label me-5">Upload Images</label> */}
          <input
            type="file"
            className="form-control visually-hidden"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            
          />
          <label htmlFor="images" className="btn btn-primary">Choose Images</label>
        </div>

        {/* Image Previews */}
        {imagePreviews.length >= 1 && (
          <div className="mb-3">
            <label className="form-label d-flex justify-content-center align-items-center">Image Previews</label>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {imagePreviews.map((imageUrl, index) => (
                <div key={index} className="m-2 position-relative">
                  <img
                    src={imageUrl}
                    alt={`Preview ${index}`}
                    style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                  />
                  {imagePreviews.length > 1 && <button
                    type="button"
                    className="btn btn-danger position-absolute top-0 end-0"
                    style={{ width: '24px', height: '24px', padding: '0', borderRadius: '50%', fontSize: '12px', lineHeight: '12px' }}
                    onClick={() => removeImage(index)}
                  >
                    X
                  </button>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="container d-flex justify-content-center mt-5 mb-5">
          <button type="submit" className="btn btn-primary" style={{ width: '70%', height: '50px' }} disabled={loading}>
            {loading ? 'Uploading...' : id ? 'Update Car' : 'Upload Car'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
