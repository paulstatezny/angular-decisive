module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      './*.js'
    ],

    plugins: [
        require('karma-jasmine'),
        require('angular-mocks'),
        require('karma-chrome-launcher'),
        require('karma-firefox-launcher'),
        require('karma-phantomjs-launcher')
    ]
  });
};
