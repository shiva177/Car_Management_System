import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TagPicker } from 'rsuite';
import { Button, Form, Badge, Row, Col } from 'react-bootstrap';
import { Cloudinary } from 'cloudinary-core';
import { useNavigate } from 'react-router-dom';

export default function CarUpload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]); // New state for image previews
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBrand,setSelectedBrand] = useState('');
  const [dealer,setDealer] = useState('');
  const navigate = useNavigate();

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

  useEffect(()=>{
    const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        // Redirect to login page if authToken is not found
        navigate('/login');
        return;
      }
  },[])

  const cloudinary = new Cloudinary({ cloud_name: 'dpzozeg4v' });

  

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  const handleSelectedBrand = (type) => {
    setSelectedBrand(type);
  }
  
  

  // Convert image files to base64 format and generate previews
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
      setImages(prevImages => [...prevImages, ...imageUrls]); // Append new image URLs to previous ones
      setImagePreviews(prevPreviews => [
        ...prevPreviews,
        ...fileArray.map(file => URL.createObjectURL(file))
      ]); // Append new previews
    } catch (err) {
      setError('Error uploading images to Cloudinary.');
    }
  };

  // Remove image and prevent removal of the last image
  const removeImage = (index) => {
    if (imagePreviews.length <= 0) {
      return; // Prevent removing the last image
    }

    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


  
    try {
      // Fetch user info from the backend using the auth token
      const userResponse = await axios.get('https://car-management-system-5cxv.onrender.com/api/auth/getuser', {
        headers: {
          'auth-token': localStorage.getItem('authToken'),  // Include auth token in header
        },
      });
  
      const userId = userResponse.data._id; // Assuming the response contains the user ID as `_id`
  
      const carData = {
        title,
        description,
        images,  // Base64 images array
        tags: {
          car_type: selectedType,  // Assuming carType is the type of the car (Coupes, SUV, etc.)
          company: selectedBrand,  // Assuming company is entered separately
          dealer: dealer,  // Assuming dealer is entered separately
        },
        user: userId,  // Add user ID to carData
      };
  
      // Send car data to the backend
      const response = await axios.post('https://car-management-system-5cxv.onrender.com/api/car/createCar', carData, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken'), // Include auth token in headers
        },
      });
  
      alert(response.data);  // Success message from backend
      navigate('/cardisplay');
    } catch (error) {
      setError(error.response ? error.response.data.error : 'Error uploading car details');
    } finally {
      setLoading(false);
    }
  };




  return (
    <div className="container">
      <h1 className='text-center mt-3 mb-5'>Upload New Car</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">

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
        <i className="bi ">Title</i>
      </span>
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
        style={{ height: '50px' }}
      />
    </div>
        </div>

<div
  className="input-group mb-5"
  style={{
    maxWidth: '800px',
    height: 'auto',
    margin: '0 auto', // Center horizontally
    zIndex: '1000'
  }}
>
  <span className="input-group-text">
    <i className="bi">Description</i>
  </span>
  <textarea
    className="form-control"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Enter Description"
    style={{ height: '100px', resize: 'none' }}
    required
  />
</div>

        <div className="mb-3 container" style={{ maxWidth: 800 }}>
      <div className="d-flex flex-wrap container justify-content-center">
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



    <div className="mb-3 container mt-5" style={{ maxWidth: 800 }}>
      <div className="d-flex flex-wrap container justify-content-center">
        {carBrands.map((type) => (
          <Badge
            key={type}
            bg={selectedBrand === type ? 'info' : 'secondary'}
            className="me-2 mb-2 pt-2 pb-2"
            style={{ cursor: 'pointer' }}
            onClick={() => handleSelectedBrand(type)}
          >
            {type}
          </Badge>
        ))}
      </div>
    </div>

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
        <i className="bi ">Dealer</i>
      </span>
      <input
        type="text"
        className="form-control"
        value={dealer}
        onChange={(e) => setDealer(e.target.value)}
        placeholder="Enter Dealer Name"
        style={{ height: '50px' }}
      />
    </div>



    <div className="mb-3 d-flex justify-content-center align-items-center">
        {/* <label htmlFor="images" className="form-label me-5">Upload Images</label> */}
        <input
          type="file"
          className="form-control visually-hidden"
          id="images"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          required
        />
        <label htmlFor="images" className="btn btn-primary">Choose Images</label>
      </div>

      {/* Preview Images */}
      {imagePreviews.length > 0 && (
        <div className="mb-3">
          <label className="form-label d-flex justify-content-center align-items-center">Image Previews</label>
          <div className="d-flex flex-wrap d-flex justify-content-center align-items-center">
            {imagePreviews.map((imageUrl, index) => (
              <div key={index} className="m-2 position-relative">
                <img
                  src={imageUrl}
                  alt={`Preview ${index}`}
                  style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                />
                {/* Cross to remove image */}
                {imagePreviews.length > 0 && (
                  <button
                    type="button"
                    className="btn btn-danger position-absolute top-0 end-0"
                    style={{ width: '24px', height: '24px', padding: '0', borderRadius: '50%', fontSize: '12px', lineHeight: '12px' }}
                    onClick={() => removeImage(index)}
                  >
                    X
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
        <div className='container d-flex justify-content-center mt-5 mb-5' >
        <button type="submit" className="btn btn-primary " style={{width:'70%', height:'50px'}} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Car'}
        </button>
        </div>
      </form>
    </div>
  );
}
