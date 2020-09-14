exports.getParks = (req, res, next) => {
  res.json({
    park: 'blabla',
    address: 'somewhere'
  });
};

exports.postPark = (req, res, next) => {
  const park = req.body.park;
  const address = req.body.address;
  res.status(201).json({
    message: 'Park created',
    post: { park: park, address: address }
  });
};