exports.config = {
    user: process.env.BROWSERSTACK_DEMO_USER,
    key: process.env.BROWSERSTACK_DEMO_KEY,
  
    updateJob: false,
    specs: [
      './tests/features/single_test.feature'
    ],
    exclude: [],
  
    capabilities: [{
      'name': 'single_appium_test',
      'build': 'WebDriverIO Cucumberjs Android',
      'project': 'WebDriverIO Cucumberjs',

      'device': 'Samsung Galaxy S7',
      'browserName': 'android',
      'app': 'bs://APP_URL',

      'browserstack.debug': true
    }],
  
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'cucumber',
    cucumberOpts: {
        require: require('glob').sync('./tests/step-definitions/single-steps.js'),        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 30000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
  };
