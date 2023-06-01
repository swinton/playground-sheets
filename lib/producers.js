const axios = require('axios');

function gitHubRateLimitRemainingProducer(token) {
  return async function() {
    try {
      const response = await axios.get('https://api.github.com/rate_limit', {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `Bearer ${token}`, // Replace with your GitHub access token
        },
      });

      const { limit, remaining, reset } = response.data.resources.core;
      return remaining;
    } catch (error) {
      console.error('Failed to check rate limit:', error.response.data.message);
      return NaN;
    }
  }
}

module.exports = { gitHubRateLimitRemainingProducer }
