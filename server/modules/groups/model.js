import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Name must be 5 charactes long'],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'Decription must be 10characters long'],
  },
  category: {
    type: String,
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Metup',
  }],

}, { timestamps: true });

export default mongoose.model('Group', GroupSchema);
