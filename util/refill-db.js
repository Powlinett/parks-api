const fs = require('fs');

const Park = require('../models/park');

const createParks = async () => {
  const ParkCollectionLength = await Park.countDocuments();
  
  if (ParkCollectionLength === 0) {
    fs.readFile('parks-lyon.json', 'utf8', (error, data) => {
      try {
        const dataJSON = JSON.parse(data);
        dataJSON.values.forEach((park) => {
          new Park({
            uid: park.uid,
            arianeId: park.id_ariane,
            name: park.nom,
            num: park.num,
            streetNum: park.numvoie,
            street: park.voie,
            zipCode: park.codepost,
            city: park.commune,
            inseeCode: park.code_insee,
            reglement: park.reglement === 'Oui' ? true : false,
            totalSurfaceM2: park.surf_tot_m2,
            management: park.gestion,
            openingYear: park.ann_ouvert,
            isEnclosed: park.clos === 'Oui' ? true : false,
            access: park.acces,
            label: park.label == 'Oui' ? true : false,
            equipmentType: park.type_equip,
            water: park.eau === 'Oui' ? true : false,
            toilets: park.toilettes === 'Oui' ? true : false,
            dogsAllowed: park.chien === 'Oui' ? true : false,
            dogPark: park.esp_can === 'Oui' ? true : false,
            photo: park.photo,
            gid: park.gid
          }).save()
        })
      } catch (error) {
        console.log(error);
      };
    });
  };
};

module.exports = { createParks };
