const fs = require('fs');

const Park = require('../models/park');

const createParks = async () => {
  const ParkCollectionLength = await Park.countDocuments();
  console.log(ParkCollectionLength);
  
  if (ParkCollectionLength === 0) {
    fs.readFile('parks-lyon.json', 'utf8', (error, data) => {
      try {
        const dataJSON = JSON.parse(data);
        dataJSON.values.forEach((park) => {
          new Park({
            uid: park.uid,
            id_ariane: park.id_ariane,
            nom: park.nom,
            num: park.num,
            numvoie: park.numvoie,
            voie: park.voie,
            codepost: park.codepost,
            commune: park.commune,
            code_insee: park.code_insee,
            reglement: park.reglement === 'Oui' ? true : false,
            surf_tot_m2: park.surf_tot_m2,
            gestion: park.gestion,
            ann_ouvert: park.ann_ouvert,
            clos: park.clos === 'Oui' ? true : false,
            acces: park.acces,
            label: park.label == 'Oui' ? true : false,
            type_equip: park.type_equip,
            eau: park.eau === 'Oui' ? true : false,
            toilettes: park.toilettes === 'Oui' ? true : false,
            chien: park.chien === 'Oui' ? true : false,
            esp_can: park.esp_can === 'Oui' ? true : false,
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
