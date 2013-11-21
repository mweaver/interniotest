define({

    // Test runs with default Dojo loader.  When requirejs loader is attempted, the 'Cannot find the Node.js require' error happens.
    useLoader: {
        //'host-node': 'requirejs'
    },

    loader: {

    },

    // Non-functional test suite(s) to run in each browser
    suites: [
        'sample_tests'
    ],

    // A regular expression matching URLs to files that should not be included in code coverage analysis
    excludeInstrumentation: /^(tests\/|node_modules\/)|_tests$/
});
