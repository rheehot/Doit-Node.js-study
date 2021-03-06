module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: 'practice_development',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  test: {
    username: 'root',
    password: '1224',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    username: 'root',
    password: '1224',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
};
