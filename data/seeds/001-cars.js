exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate() // deletes data and resets the primary key back to 1
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '1GTJK39193E145444',
          Make: 'Volkswagon',
          Model: 'GTI',
          Mileage: 125000,
          Transmission_Type: 'Manual',
          Title_Status: 'Clean',
          Year: '2004',
        },
        {
          VIN: 'JTEEW44A082690214',
          Make: 'Subaru',
          Model: 'WRX',
          Mileage: 55000,
          Transmission_Type: 'Manual',
          Year: '2015',
        },
        {
          VIN: '1G2NE53M6RM596096',
          Make: 'Porsche',
          Model: '911',
          Mileage: 4700,
          Transmission_Type: 'Manual',
          Title_Status: 'Clean',
          Year: '2011',
        },
      ]);
    });
};
