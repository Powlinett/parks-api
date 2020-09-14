const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parkSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  arianeId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  num: Number,
  streetNum: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  inseeCode: {
    type: Number,
    required: true
  },
  reglement: Boolean,
  totalSurfaceM2: Number,
  management: String,
  openingYear: Number,
  isEnclosed: {
    type: Boolean,
    required: true
  },
  access: {
    type: String,
    required: true
  },
  label: String,
  equipmentType: String,
  water: {
    type: Boolean,
    required: true
  },
  toilets: {
    type: Boolean,
    required: true
  },
  dogsAllowed: {
    type: Boolean,
    required: true
  },
  dogPark: {
    type: Boolean,
    required: true
  },
  photo: String,
  gid: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Park', parkSchema);