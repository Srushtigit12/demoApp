module.exports = function (config) {
  config.set({
    frameworks: ["qunit"],

    browsers: ["ChromeHeadless"],

    files: [
      {
        pattern: "webapp/test/unit/**/*.js",
        included: true
      }
    ],

    reporters: ["progress", "junit"],

    junitReporter: {
      outputDir: "reports",
      outputFile: "TEST-results.xml",
      useBrowserName: false
    },

    singleRun: true
  });
};