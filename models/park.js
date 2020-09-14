const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parkSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  id_ariane: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  num: Number,
  numvoie: {
    type: String,
    required: true
  },
  voie: {
    type: String,
    required: true
  },
  codepost: {
    type: Number,
    required: true
  },
  commune: {
    type: String,
    required: true
  },
  code_insee: {
    type: Number,
    required: true
  },
  reglement: Boolean,
  surf_tot_m2: Number,
  gestion: String,
  ann_ouvert: Number,
  clos: {
    type: Boolean,
    required: true
  },
  acces: {
    type: String,
    required: true
  },
  label: String,
  type_equip: String,
  eau: {
    type: Boolean,
    required: true
  },
  toilettes: {
    type: Boolean,
    required: true
  },
  chien: {
    type: Boolean,
    required: true
  },
  esp_can: {
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