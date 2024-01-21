import express from 'express';
import Car from '../models/Car.js';
import fetchUser from '../middleware/fetchuser.js';

const router = express.Router();


router.post('/createCar', fetchUser, async (req, res) => {
    try {
      const { title, description, images, tags } = req.body;
      const userId = req.user; 
  
      const newCar = new Car({
        user: userId, 
        title,
        description,
        images,
        tags,
      });
  
      await newCar.save(); 
      res.status(201).json("New car added successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


router.get('/fetchAll',fetchUser, async (req, res) => {
  try {
    const userId = req.user;
    const cars = await Car.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/searchCar', fetchUser, 
async (req, res) => {
    try {
      const userId = req.user;
      const { keyword } = req.body;
      const regex = new RegExp(keyword, 'i'); 
  
      const cars = await Car.find({
        user: userId,
        $or: [
          { title: regex },
          { description: regex },
          { 'tags.car_type': regex },
          { 'tags.company': regex },
          { 'tags.dealer': regex }
        ]
      });
  
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/getCarById/:id', fetchUser, async (req, res) => {
    try {
      const userId = req.user;
      const { id } = req.params; // Get the car ID from the URL parameter
  
      // Find the car by its ID and user ID
      const car = await Car.findOne({
        user: userId,
        _id: id, // Match the car ID
      });
  
      if (!car) {
        return res.status(404).json({ error: 'Car not found' });
      }
  
      res.status(200).json(car); // Return the car data
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


router.put('/update/:id',fetchUser, 
  async (req, res) => {
  try {
    const carId = req.params.id;
    const updatedData = req.body;

    const updatedCar = await Car.findByIdAndUpdate(carId, updatedData, { new: true });
    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete('/delete/:id',fetchUser,
  async (req, res) => {
  try {
    const carId = req.params.id;
    await Car.findByIdAndDelete(carId);
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
