module.exports = {
  /**
   * Cron jobs configuration
   */
  '*/1 * * * *': require('./cron-tasks/ping'),
};