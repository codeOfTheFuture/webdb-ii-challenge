exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.string('Year');
  });
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumn('Year');
  });
};
