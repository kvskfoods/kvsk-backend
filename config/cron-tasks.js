module.exports = {
  /**
   * Sends a GET request to the Strapi server itself every 5 minutes.
   */
  pingSelfJob: {
    task: async ({ strapi }) => {
      try {
        const response = await fetch("http://localhost:1337/"); // Change URL if needed
        const data = await response.text(); // or .json() if the endpoint returns JSON
        strapi.log.info(`Self-ping successful: ${data}`);
      } catch (err) {
        strapi.log.error(`Self-ping failed: ${err.message}`);
      }
    },
    options: {
      rule: "*/5 * * * *", // Every 5 minutes
    },
  },
};
