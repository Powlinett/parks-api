const ObjectId = require('mongoose').Types.ObjectId;

const Park = require('../models/park');

exports.getParks = async (req, res, next) => {
  try {
    const parks = await Park.find();
    res.status(200).json({ parks: parks, length: parks.length });
  } catch (err) {
    console.log(err);
  };
};

exports.getPark = async (req, res, next) => {
  try {
    const parkId = req.params.parkId;
    res.status(200).json(await Park.find({ _id: new ObjectId(parkId) }));
  } catch (err) {
    console.log(err);
  };
};

exports.getQueriedParks = async (req, res, next) => {
  const query = req.query;
  if (Object.keys(query).length === 0) {
    return res.status(404).json({ message: 'No park found, please add queries to URL' });
  }
  const parks = await Park.find(query);
  res.status(200).json({ parks: parks, length: parks.length });
};

exports.postPark = async (req, res, next) => {
  const parkJSON = req.body;
  const park = await Park.create(parkJSON);
  
  res.status(201).json({ message: 'Park created', park: park });
};

exports.patchPark = async (req, res, next) => {
  const parkId = req.params.parkId;
  const updatedPark = req.body;
  const park = await Park.findOneAndUpdate(
    {_id: new ObjectId(parkId)},
    updatedPark,
    {new: true}
  );

  res.status(200).json({ message: 'Park updated', park: park});
};

exports.deletePark = async (req, res, next) => {
  const parkId = req.params.parkId;
  const park = await Park.deleteOne({_id: new ObjectId(parkId)});

  res.status(200).json({ message: 'Park deleted', park: park });
};