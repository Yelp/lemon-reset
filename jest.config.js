module.exports = {
    cache: false,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js', 'tests/**/*.js'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    moduleNameMapper: {
        '^.+\\.(s?css)$': 'identity-obj-proxy',
    },
    testMatch: ['<rootDir>/tests/**/*.test.js'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    // http://facebook.github.io/jest/docs/en/troubleshooting.html#watchman-issues
    watchman: false,
    snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
    setupFiles: [require.resolve('./enzyme.setup.js')],
};
