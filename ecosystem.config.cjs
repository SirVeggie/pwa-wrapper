module.exports = {
  apps: [{
    name: 'wrapper',
    // script: 'node build',
    script: 'node -r dotenv/config build',
    // script: 'build/index.js',
  }]
};
