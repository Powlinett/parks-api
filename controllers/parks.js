const Park = require('../models/park');

exports.getParks = async (req, res, next) => {
  const parks = await Park.find();
  res.json({
    parks: parks,
    length: parks.length
  });
};

exports.getQueriedParks = async (req, res, next) => {
  const query = req.query;
  console.log(query);
  if (Object.keys(query).length === 0) {
    return res.status(404).json({
      parks: [],
      message: 'No park found, please add queries to URL'
    });
  }
  const parks = await Park.find(query);
  res.status(200).json({
    parks: parks,
    length: parks.length
  })
};

exports.postPark = (req, res, next) => {
  const park = req.body.park;
  const address = req.body.address;
  res.status(201).json({
    message: 'Park created',
    post: { park: park, address: address }
  });
};