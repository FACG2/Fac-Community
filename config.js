require('env2')('./config.env');

const dbConfig = (env) => {
  if (env === 'development') {
    return {
      database: process.env.DATABASE_URL,
      clientID: process.env.CLIENT_ID_DEV,
      clientSecret: process.env.CLIENT_SECRET_DEV,
      redirect_uri: process.env.REDIRECT_URI_DEV
    };
  } else if (env === 'test') {
    return {
      database: process.env.TEST_DATABASE,
      clientID: process.env.CLIENT_ID_TEST,
      clientSecret: process.env.CLIENT_SECRET_TEST,
      redirect_uri: process.env.REDIRECT_URI_TEST
    };
  } else {
    throw new Error('specify enviroment');
  }
};
module.exports = {
  DB_CONFIG: dbConfig(process.env.NODE_ENV)
};
