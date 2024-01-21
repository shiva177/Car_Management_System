import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const carSchema = new Schema({
   user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },
  images: {
    type: [String], 
    validate: {
      validator: function(v) {
        return v.length <= 10;
      },
      message: props => `A car can have at most 10 images, but got ${props.value.length}`
    }
  },
  tags: {
    car_type: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    dealer: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
  }
}, {
  timestamps: true 
});

const Car = model('Car', carSchema);
Car.createIndexes();
export default Car;
