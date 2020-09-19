const { body } = require('express-validator');

const trueOrFalse = 'True or false value only.';

module.exports = [
  body('uid', 'please verify id').matches(/[a-zA-Z]{3}(-{1}\d{5}){2}/),
  body('arianeId', 'please verify id').isAlphanumeric(),
  body('streetNum', 'only letters and numbers').isAlphanumeric(),
  body('zipCode', 'Enter a french valid zipcode').isPostalCode('FR'),
  body('inseeCode', 'only numbers, length 5 characters').isNumeric({no_symbols: true}).isLength({min: 5, max: 5}),
  body('reglement', trueOrFalse).isBoolean(),
  body('totalSurfaceM2', 'only numbers').isFloat(),
  body('openingYear', 'enter a valid year').isNumeric({no_symbols: true}).isLength({min: 4, max: 4}),
  body('isEnclosed', trueOrFalse),
  body('label', trueOrFalse),
  body('water', trueOrFalse),
  body('toilets', trueOrFalse),
  body('dogAllowed', trueOrFalse),
  body('dogPark', trueOrFalse).isBoolean(),
  body('gid', 'please verify id').isNumeric({no_symbols: true}).isLength({min: 1, max: 3})
]