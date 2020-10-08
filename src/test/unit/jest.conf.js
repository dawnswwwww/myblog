const path = require('path')

module.exports = {
    rootDir: path.resolve(__dirname, '../../'),
    moduleFileExtensions: ['js', 'json', 'vue'],
    moduleNameMapper: {
        '^@/(./)$': '<rootDir>/scr/$1'
    },
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    setupFiles: ['<rootDir>/test/unit/setup'],
    coverageDirectory: '<rootDir>/test/unit/setup',
    collectCoverageFrom: [
        'src/**/*.(ts,js,vue)',
        '!src/main.ts',
        '!src/router/index.ts',
        '!**/node_modules/**'
    ]
}