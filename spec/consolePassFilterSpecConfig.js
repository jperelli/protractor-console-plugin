var env = require('./environment.js');

exports.config = {
  seleniumAddress: env.seleniumAddress,
  framework: 'jasmine',
  specs: ['fail_error_spec.js'],
  baseUrl: env.baseUrl,
  plugins: [{
    path: '../index.js',
    failOnWarning: true,
    failOnError: true,
    excludeSpec: [
      'console plugin should fail on error message',
      /messages/
    ]
  }]
};
