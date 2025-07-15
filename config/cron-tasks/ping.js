const axios = require('axios');

module.exports = async () => {
  try {
    await axios.get('https://kvsk-backend.onrender.com/');
    strapi.log.info('Pinged https://kvsk-backend.onrender.com/ successfully');
  } catch (error) {
    strapi.log.error('Failed to ping https://kvsk-backend.onrender.com/', error);
  }
};